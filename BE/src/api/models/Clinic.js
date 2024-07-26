import pool from './connect.js';
import tagModel from "./Tag.js";
import { logger } from '../../common/logger.js';
import fs from 'fs';
import path from 'path';

const copyRecursiveSync = function(src, dest) {
    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(function(childItemName) {
            copyRecursiveSync(path.join(src, childItemName),
                path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
};

class Clinic {
    async find(searchStr, userId) {
        const client = await pool.connect();
        try {
            const query = `SELECT * FROM data.find_product_by_name(${userId}, '${searchStr}');`;
            const res = await client.query(query);
            return res.rows[0].find_product_by_name ? res.rows[0].find_product_by_name : [];
        } catch (e) {
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Model Tag error:',
                    { message: e.message }
                );
            }
            return { success: false, error: { code: 404, message: 'Tags Not found' } };
        } finally {
            client.release();
        }
    }
    
    async update (dataProduct, userId) {
        const client = await pool.connect();
        try {
            const _resProd = await client.query(`SELECT * FROM data.products WHERE id=${dataProduct.id} AND user_id=${userId}`);
            let photos = [];
            const tags = await this.prepareTags(dataProduct.tags);
            const copyPhotos = [];
            if (_resProd.rows.length) {
                if (_resProd.rows[0].photos) photos = _resProd.rows[0].photos;
                const sourceDir = `${process.env.DOWNLOAD_FOLDER}/tmp`;
                const dirUpload = `${process.env.DOWNLOAD_FOLDER}/products/${dataProduct.id}`;
                const dirDBUpload = `${process.env.DB_DOWNLOAD_FOLDER}/products/${dataProduct.id}`;
                if (!fs.existsSync(dirUpload)) {
                    fs.mkdirSync(dirUpload);
                }
                // copies files to product dir
                if (dataProduct.photos.length > 0) {
                    const promisesPhotos = [];
                    dataProduct.photos.forEach(photo => {
                        promisesPhotos.push(this.copyFiles(sourceDir, dirUpload, photo));
                    });
                    await Promise.all(promisesPhotos);
                    dataProduct.photos.forEach(photo => {
                        copyPhotos.push(`${dirDBUpload}/${photo}`);
                    })
                }
                const productPhotos = photos.concat(copyPhotos);
                
                const productTags = tags;
                const descriptionContent = dataProduct.description[0];
                const queryUpdate = `
                    UPDATE data.products
                    SET
                        name = $$${dataProduct.name}$$,
                        description = $$${descriptionContent}$$,
                        photos = '{${productPhotos}}',
                        tags = '{${productTags}}',
                        material_id = ${dataProduct.material_id},
                        configured = ${dataProduct.configured ? dataProduct.configured : true},
                        publish = ${dataProduct.publish ? dataProduct.publish : true}
                     WHERE id=${_resProd.rows[0].id};`;
                // console.log(queryUpdate);
                await client.query(queryUpdate);
                
                // update configuration
                await client.query(`DELETE FROM data.product_configurations WHERE product_id=${_resProd.rows[0].id}`);
                const configs = JSON.parse(dataProduct.configurations);
                if (configs.config) {
                    const promisesQueries = [];
                    configs.config.forEach((configuration, index) => {
                        promisesQueries.push(this.addConfiguration(_resProd.rows[0].id, configuration, configs.configData[[index]]));
                    });
                    await Promise.all(promisesQueries);
                }
    
                return { success: true };
            } else {
                return { success: false };
            }
        } catch (e) {
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Model error:',
                    { message: e.message }
                );
            }
            return { success: false, error: { code: 404, message: 'Addresses Not found' } };
        } finally {
            client.release();
        }
    }

    async create (dataClinics, userId) {
        const client = await pool.connect();
        try {
            const queryInsert = `
                INSERT INTO data.clinics
                    (name, address, user_id )
                VALUES (
                    $$${dataClinics.name}$$,
                    $$${dataClinics.address}$$,
                    ${userId}
                ) RETURNING id;`;
            const resProduct = await client.query(queryInsert);
            
            const sourceDir = `${process.env.DOWNLOAD_FOLDER}/tmp`;
            const dirUpload = `${process.env.DOWNLOAD_FOLDER}/clinics/${resProduct.rows[0].id}`;
            const dirDBUpload = `${process.env.DB_DOWNLOAD_FOLDER}/clinics/${resProduct.rows[0].id}`;
            if (!fs.existsSync(dirUpload)) {
                fs.mkdirSync(dirUpload);
            }
            // copies files to product dir
            if (dataClinics.photos.length > 0) {
                const copyPhotos = [];
                const promisesPhotos = [];
                dataClinics.photos.forEach(photo => {
                    promisesPhotos.push(this.copyFiles(sourceDir, dirUpload, photo));
                });
                await Promise.all(promisesPhotos);
                dataClinics.photos.forEach(photo => {
                    copyPhotos.push(`${dirDBUpload}/${photo}`);
                })
                if (copyPhotos.length > 0) {
                    const queryUpdate = `
                        UPDATE data.clinics
                        SET
                            photos = '{${copyPhotos}}'
                         WHERE id=${resProduct.rows[0].id};`;
                    await client.query(queryUpdate);
                }
            }
    
            return { success: true };
        } catch (e) {
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Model error:',
                    { message: e.message }
                );
            }
            return { success: false, error: { code: 404, message: 'Addresses Not found' } };
        } finally {
            client.release();
        }
    }
    
    async fetchItem (id, userId) {
        const client = await pool.connect();
        try {
            const res = await client.query(`SELECT * FROM data.clinics WHERE user_id=${userId} AND id=${id}`);
            if (res.rows.length) {
                return { clinic: res.rows[0] };
            } else {
                return { success: false, error: { code: 404, message: 'Product Not found' } };
            }
        } catch (e) {
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Model error (Product fetch one product):',
                    { message: e.message }
                );
            }
            const products = null;
            const error = {
                code: 500,
                message: 'Error get list of users'
            };
            return {
                products,
                error
            };
        } finally {
            client.release();
        }
    }

    async getAll (page, perPage = 20, userId, isRead = false, reqOffset = null, filters, column, sort) {
        const client = await pool.connect();
        try {
            const userIds = [];
            userIds.push(userId);
            const _filters = JSON.parse(filters);
            _filters.user_id = userIds;
            if (!_filters.publish) {
                delete _filters.publish;
            }
            const _total = await client.query(
                `SELECT * FROM common__tools._select_total_from_table_by_where('data', 'clinics', 'id', 'user_id = ''${userId}''');`
            );
            const size = _total.rows[0].total;
            let offset;
            if (reqOffset) {
                offset = reqOffset;
            } else {
                offset = (Number(page) - 1) * Number(perPage);
            }
            
            const clinicsQuery = `SELECT * FROM common__tools._select_from_table_by_where('data', 'clinics', 'id,name,address', 'user_id = ''${userId}''', 'created_at', ${perPage}, ${offset});;`;

            // const res = await client.query(`SELECT * FROM data.get_all_products(${perPage}, ${offset}, 'user_id=''${userId}'' ')`);
            const res = await client.query(clinicsQuery);
            const products = res.rows.length > 0 ? res.rows : [];
            const error = null;

            return {
                products,
                size,
                error
            };
        } catch (e) {
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Model error (Products getAll):',
                    { message: e.message }
                );
            }
            const products = null;
            const error = {
                code: 500,
                message: 'Error get list of users'
            };
            return {
                products,
                error
            };
        } finally {
            client.release();
        }
    }

    async bulkDelete (productIds, userId) {
        const client = await pool.connect();
        try {
            const SQL = `SELECT * FROM data.products WHERE id IN (${productIds.join(',')}) AND user_id=${userId}`;
            const res = await client.query(SQL);
            if (res.rows.length > 0) {
                res.rows.forEach(product => {
                    const photos = product.photos;
                    if (photos) {
                        photos.forEach(photo => {
                            fs.unlink(`${process.env.DOWNLOAD_FOLDER}/${photo.replace('/uploads', '')}`,function(err){
                                if(err) return console.log(err);
                            });
                        })
                    }
                });
                await client.query(`DELETE FROM data.products WHERE id IN (${productIds.join(',')}) AND user_id=${userId}`);
                return true;
            }
        } catch (e) {
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Model error:',
                    { message: e.message }
                );
            }
            return null;
        } finally {
            client.release();
        }
    }

    async bulkCopy (productIds, userId) {
        const client = await pool.connect();
        const SQL = `SELECT * FROM data.products WHERE id IN (${productIds.join(',')}) AND user_id=${userId}`;
        try {
            const res = await client.query(SQL);
            if (res.rows.length > 0) {
                const promisesQueries = [];
                res.rows.forEach(product => {
                    promisesQueries.push(this.copyProduct(product));
                });
                if (promisesQueries.length) {
                    await Promise.all(promisesQueries);
                }
                return true;
            }
        } catch (e) {
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Model error:',
                    { message: e.message }
                );
            }
            return null;
        } finally {
            client.release();
        }
    }
    
    
    async deletePhoto (productId, userId, photo) {
        const SQL = `SELECT photos FROM data.products WHERE user_id=${userId} AND id=${productId}`;
        const client = await pool.connect();
        try {
            const res = await client.query(SQL);
            const productPhotos = res.rows[0].photos;
            // {uploads/products/4/1639512136725-j3.jpeg,uploads/products/4/1639512136725-j2.jpeg}
            const queryUpdate = `
                    UPDATE data.products
                    SET
                        photos = '{${productPhotos.filter(file => file !== photo)}}'
                     WHERE id=${productId} ;`;
            await client.query(queryUpdate);
            return true;
        } catch (e) {
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Model error:',
                    { message: e.message }
                );
            }
            return null;
        } finally {
            client.release();
        }
    }
    
    
}

export default new Clinic();
