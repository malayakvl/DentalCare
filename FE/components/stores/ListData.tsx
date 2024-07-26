import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslations } from 'next-intl';
import { DataTable, ButtonTableAction } from '../../components/_common';
import { PaginationType } from '@/constants';
import {
    checkedIdsSelector,
    paginationSelectorFactory,
    switchHeaderSelector
} from '@/redux/layouts/selectors';
import {
    paginatedClinicSelector,
    clinicCountSelector,
} from '@/redux/clinics/selectors';
import {
    fetchItemsAction,
    bulkDeleteAction,
    bulkCopyAction,
    fetchProductAction,
    deleteProductAction,
    copyProductAction
} from '@/redux/stores/actions';
import { setModalConfirmationMetaAction } from '@/redux/layouts';
import { setActivePageAction } from '@/redux/layouts/actions';
import getConfig from 'next/config';
// import { userSelector } from "@/redux/user/selectors";
// const { publicRuntimeConfig } = getConfig();

const ListData: React.FC<any> = () => {
    const t = useTranslations();
    const dispatch = useDispatch();
    const count = useSelector(clinicCountSelector);
    const items = useSelector(paginatedClinicSelector);
    // const checkedIds = useSelector(checkedIdsSelector);
    // const switchAllHeader = useSelector(switchHeaderSelector);
    // const user = useSelector(userSelector);

    const [filterOpen, setFilterOpen] = useState(false);
    const { filters }: Layouts.Pagination = useSelector(
        paginationSelectorFactory(PaginationType.STORES)
    );

    const sendRequest = useCallback(() => {
        return dispatch(fetchItemsAction());
    }, [dispatch]);

    const sendDeleteRequest = useCallback(() => {
        return dispatch(bulkDeleteAction());
    }, [dispatch]);

    const sendCopyRequest = useCallback(() => {
        return dispatch(bulkCopyAction());
    }, [dispatch]);

    const handleDeleteBtnClick = useCallback(
        (event: React.SyntheticEvent): void => {
            const id = Number(event.currentTarget.getAttribute('data-id'));
            dispatch(
                setModalConfirmationMetaAction({
                    onConfirm: async () => dispatch(deleteProductAction(id)).then(sendRequest)
                })
            );
        },
        [dispatch, sendRequest]
    );
    const handleEditBtnClick = useCallback(
        (event: React.SyntheticEvent): void => {
            const id = Number(event.currentTarget.getAttribute('data-id'));
            // dispatch(setActiveTabAction('edit'));
            dispatch(
                setActivePageAction({
                    type: 'stores',
                    modifier: 'edit'
                })
            );
            dispatch(fetchProductAction(id));
        },
        [items, dispatch]
    );

    const handleStoreBtnClick= useCallback(
        (event: React.SyntheticEvent): void => {
            const id = Number(event.currentTarget.getAttribute('data-id'));
            dispatch(
                setActivePageAction({
                    type: 'store',
                    modifier: 'list'
                })
            );
        },
        [items, dispatch]
    );

    const handleHideFilter = useCallback(() => {
        setFilterOpen(false);
    }, []);

    return (
        <>
            <div className="mt-7">
                <DataTable
                    paginationType={PaginationType.STORES}
                    totalAmount={count}
                    sendRequest={sendRequest}
                    sendDeleteRequest={sendDeleteRequest}
                    sendCopyRequest={sendCopyRequest}>
                    {items?.map((item: any) => (
                        <tr key={item.id} className={''}>
                            <td>{item.fields_json.name}</td>
                            <td>{item.fields_json.address}</td>
                            <td
                                className="text-right whitespace-nowrap"
                                style={{ minWidth: '150px' }}>
                                <ButtonTableAction
                                    dataId={String(item.id)}
                                    localeKey="Edit"
                                    className={'btn-edit'}
                                    onClick={handleEditBtnClick}
                                />
                                <ButtonTableAction
                                    dataId={String(item.id)}
                                    onClick={handleStoreBtnClick}
                                    localeKey="Products"
                                    className={'btn-store-products'}
                                />
                                <ButtonTableAction
                                    dataId={String(item.id)}
                                    onClick={handleDeleteBtnClick}
                                    localeKey="Delete"
                                    className={'btn-delete'}
                                />
                            </td>
                        </tr>
                    ))}
                </DataTable>
            </div>
        </>
    );
};

export default ListData;
