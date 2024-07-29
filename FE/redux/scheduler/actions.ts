import { createAction } from 'redux-actions';
import axios from 'axios';
import getConfig from 'next/config';
import { authHeader } from '../../lib/functions';
import { setErrorToastAction, setSuccessToastAction } from '../layouts';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/api`;

export const fetchSchedulerAction: any = createAction(
    'scheduler/FETCH_EVENT',
    async (dateFrom: any, dateTo: any) =>
        (dispatch: Type.Dispatch, getState: () => State.Root): Promise<{ items: any }> => {
            const state = getState();
            return axios
                .get(`${baseUrl}/scheduler/fetchEvents?dateFrom=${dateFrom}&dateTo=${dateTo}`, {
                    headers: {
                        ...authHeader(state.user.user.email)
                    }
                })
                .then((res: any) => ({
                    items: res.data.items
                }));
        }
);

export const getEventAction: any = createAction(
    'scheduler/FETCH_EVENT',
    async (id: number) =>
        (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
            const state = getState();
            return axios
                .get(`${baseUrl}/scheduler/fetchEvent/${id}`, {
                    headers: {
                        ...authHeader(state.user.user.email)
                    }
                })
                .then(async (res) => {
                    const event = res.data.item[0];
                    // event.doctorSelected = { value: event.doctor_id, label: event.doctorName };
                    // event.patient = { value: event.doctor_id, label: event.doctorName };
                    event.section_id = event.cabinet_id;
                    dispatch(setEventSchedulerInitAction(event));
                    dispatch(setShcedulerPopupAction(true));
                })
                .catch((error) => {
                    if (error?.response?.status === 405) {
                        dispatch(setErrorToastAction('Permission deny'));
                    }
                });
        }
);
export const createEventAction: any = createAction(
    'scheduler/CREATE_EVENT',
    async (data: any) =>
        (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
            const state = getState();
            return axios
                .post(`${baseUrl}/scheduler/store`, data, {
                    headers: {
                        ...authHeader(state.user.user.email)
                    }
                })
                .then(async (res) => {
                    dispatch(setSuccessToastAction('Event has been created'));
                    dispatch(
                        fetchSchedulerAction(
                            state.scheduler.interval.dateFrom,
                            state.scheduler.interval.dateTo
                        )
                    );
                    dispatch(setShcedulerPopupAction(false));
                })
                .catch((error) => {
                    if (error?.response?.status === 405) {
                        dispatch(setErrorToastAction('Permission deny'));
                    }
                });
        }
);
export const removeEventAction: any = createAction(
    'scheduler/REMOVE_EVENT',
    async (id: number) =>
        (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
            const state = getState();
            return axios
                .delete(`${baseUrl}/scheduler/delete/${id}`, {
                    headers: {
                        ...authHeader(state.user.user.email)
                    }
                })
                .then(async (res) => {
                    dispatch(setSuccessToastAction('Event has been deleted'));
                    dispatch(
                        fetchSchedulerAction(
                            state.scheduler.interval.dateFrom,
                            state.scheduler.interval.dateTo
                        )
                    );
                })
                .catch((error) => {
                    if (error?.response?.status === 405) {
                        dispatch(setErrorToastAction('Permission deny'));
                    }
                });
        }
);
export const updateEventAction: any = createAction(
    'scheduler/CHANGE_EVENT',
    async (id: number, data: any) =>
        (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
            const state = getState();
            return axios
                .post(`${baseUrl}/scheduler/update/${id}`, data, {
                    headers: {
                        ...authHeader(state.user.user.email)
                    }
                })
                .then(async (res) => {
                    dispatch(setSuccessToastAction('Event has been updated'));
                    // dispatch(
                    //     fetchSchedulerAction(
                    //         state.scheduler.interval.dateFrom,
                    //         state.scheduler.interval.dateTo
                    //     )
                    // );
                })
                .catch((error) => {
                    if (error?.response?.status === 405) {
                        dispatch(setErrorToastAction('Permission deny'));
                    }
                });
        }
);

export const setShcedulerPopupAction: any = createAction('scheduler/SET_POPUP_SCHEDULE');
export const setEventInitAction: any = createAction('scheduler/INIT_EVENT');
export const setEventSchedulerInitAction: any = createAction('scheduler/INIT_SCHEDEULE_EVENT');
export const setIntervalAction: any = createAction('scheduler/SET_INTERVAL');
export const updateFormEventAction: any = createAction('scheduler/UPDATE_FORM_EVENT');
