import { createAction } from 'redux-actions';
import { authHeader, toggleModalConfirmation } from '@/lib/functions';
import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/api`;
import { setSuccessToastAction } from '../layouts';
import { paginationSelectorFactory } from '../layouts/selectors';
import { PaginationType } from '@/constants';
import queryString from 'query-string';
import { setActivePageAction, showLoaderAction } from '../layouts/actions';

export const updateClinicAction: any = createAction(
    'clinic/ADD_UPDATE_PRODUCT',
    async (data: any, id: number | null | undefined) =>
        (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
            const state = getState();
            const isNew = id;
            dispatch(showLoaderAction(true));
            return axios
                .post(`${baseUrl}/clinic`, data, {
                    headers: {
                        ...authHeader(state.user.user.email)
                    }
                })
                .then(async () => {
                    dispatch(
                        setSuccessToastAction(`Clinic has been ${isNew ? 'updated' : 'created'}`)
                    );
                    dispatch(fetchItemsAction());
                    dispatch(showLoaderAction(false));
                    dispatch(redirectToListAction(true));
                });
        }
);

export const fetchItemsAction: any = createAction(
    'clinics/FETCH_ITEMS',
    async () =>
        (
            dispatch: Type.Dispatch,
            getState: () => State.Root
        ): Promise<{ count: any; items: any }> => {
            const state = getState();
            const { limit, offset, sort, column, query, filters } = paginationSelectorFactory(
                PaginationType.CLINICS
            )(state);
            const queryFilter = JSON.stringify(filters);
            dispatch(showLoaderAction(true));
            return axios
                .get(
                    `${baseUrl}/fetch-clinics?${queryString.stringify({
                        limit,
                        offset,
                        sort,
                        column,
                        query,
                        queryFilter
                    })}`,
                    {
                        headers: {
                            ...authHeader(state.user.user.email)
                        }
                    }
                )
                .then((res: any) => {
                    dispatch(showLoaderAction(false));
                    return {
                        count: res.data.count,
                        items: res.data.items
                    };
                });
        }
);
export const fetchItemAction: any = createAction(
    'clinics/FETCH_ITEM',
    async (id: number) =>
        async (
            dispatch: Type.Dispatch,
            getState: () => State.Root
        ): Promise<{ clinic: any }> => {
            const state = getState();
            dispatch(showLoaderAction(true));
            if (state.user.user.id) {
                const res = await axios.get(`${baseUrl}/fetch-clinic/${id}`, {
                    headers: {
                        ...authHeader(state.user.user.email)
                    }
                });
                if (res.status) {
                    dispatch(showLoaderAction(false));
                }
                return {
                    clinic: res.data.item
                };
            } else {
                return {
                    clinic: state.clinics.clinic
                }
            }
        }
);
export const findProductsAction: any = createAction(
    'clinics/FIND_PRODUCT_AUTOSUGGEST',
    async (query: string) =>
        (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
            const state = getState();
            return axios
                .get(`${baseUrl}/clinics/find?searchStr=${query}`, {
                    headers: {
                        ...authHeader(state.user.user.email)
                    }
                })
                .then((res: any) => res.data.result);
        }
);
export const findTagAction: any = createAction(
    'clinics/FIND_TAG',
    async (query: string) =>
        (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
            const state = getState();
            return axios
                .get(`${baseUrl}/tags/find?tag=${query}`, {
                    headers: {
                        ...authHeader(state.user.user.email)
                    }
                })
                .then((res: any) => res.data.result);
        }
);
export const deleteProductAction: any = createAction(
    'clinics/DELETE_PRODUCT',
    async (id: number) =>
        (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
            const state = getState();
            dispatch(showLoaderAction(true));
            return axios
                .delete(`${baseUrl}/clinics/delete/${id}`, {
                    headers: {
                        ...authHeader(state.user.user.email)
                    }
                })
                .then(async () => {
                    dispatch(showLoaderAction(false));
                    await dispatch(fetchItemsAction());
                    dispatch(setSuccessToastAction('Product has been deleted'));
                    dispatch(setActiveTabAction('products'));
                    toggleModalConfirmation();
                });
        }
);
export const copyProductAction: any = createAction(
    'clinics/COPY_PRODUCT',
    async (id: number) =>
        (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
            const state = getState();
            dispatch(showLoaderAction(true));
            return axios
                .get(`${baseUrl}/clinics/copy/${id}`, {
                    headers: {
                        ...authHeader(state.user.user.email)
                    }
                })
                .then(async (res) => {
                    dispatch(showLoaderAction(false));
                    await dispatch(copyIdsAction(res.data.productIds));
                    await dispatch(fetchItemsAction());
                    dispatch(setSuccessToastAction('Product has been copied'));
                });
        }
);
export const removeProductFileAction: any = createAction(
    'clinics/REMOVE_PRODUCT_FILE',
    async (file: string, id: number) =>
        async (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
            const state = getState();
            return axios
                .post(
                    `${baseUrl}/clinics/photo-delete/${id}`,
                    { data: file },
                    {
                        headers: {
                            ...authHeader(state.user.user.email)
                        }
                    }
                )
                .then(async () => {
                    await dispatch(fetchItemsAction());
                    dispatch(setSuccessToastAction('Photo has been deleted'));
                });
        }
);
export const bulkDeleteAction: any = createAction(
    'clinics/BULK_DELETE',
    async () =>
        async (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
            const state = getState();
            dispatch(showLoaderAction(true));
            return axios
                .post(
                    `${baseUrl}/clinics/bulk-delete`,
                    { data: JSON.stringify(state.layouts.checkedIds) },
                    {
                        headers: {
                            ...authHeader(state.user.user.email)
                        }
                    }
                )
                .then(async () => {
                    dispatch(showLoaderAction(false));
                    dispatch(setSuccessToastAction('Products has been deleted'));
                    await dispatch(fetchItemsAction());
                });
        }
);
export const bulkCopyAction: any = createAction(
    'clinics/BULK_COPY',
    async () =>
        async (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
            const state = getState();
            dispatch(showLoaderAction(true));
            return axios
                .post(
                    `${baseUrl}/clinics/bulk-copy`,
                    { data: JSON.stringify(state.layouts.checkedIds) },
                    {
                        headers: {
                            ...authHeader(state.user.user.email)
                        }
                    }
                )
                .then(async (res) => {
                    const _copyIds: number[] = [];
                    res.data.productIds.forEach((id: any) => {
                        _copyIds.push(id.productId[0]);
                    });
                    dispatch(showLoaderAction(false));
                    await dispatch(copyIdsAction(_copyIds));
                    dispatch(setSuccessToastAction('Products has been copied'));
                    await dispatch(fetchItemsAction());
                });
        }
);

export const addUploadedFile: any = createAction('clinics/ADD_UPLOADED_FILE');
export const removeUploadedFile: any = createAction('clinics/REMOVE_UPLOADED_FILE');
export const setActiveTabAction: any = createAction('clinics/SET_ACTIVE_TAB');
export const setEmptyClinicAction: any = createAction('clinics/SET_EMPTY');
export const setSelectedColorsAction: any = createAction('clinics/SET_COLORS');
export const setSelectedSizesAction: any = createAction('clinics/SET_SIZES');
export const setSelectedAdditionalAction: any = createAction(
    'clinics/SET_PRODUCT_SELECTED_ADDITIONAL'
);
export const setIdentAction: any = createAction('clinics/SET_IDENT_VARIANT');
export const copyIdsAction: any = createAction('clinics/COPY_IDS');
export const redirectToListAction: any = createAction('clinics/REDIRECT_TO_LIST');
