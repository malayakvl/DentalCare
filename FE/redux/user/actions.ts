import { createAction } from 'redux-actions';
import axios from 'axios';
import getConfig from 'next/config';
import { authHeader, toggleModalPopup } from '@/lib/functions';
import { setErrorToastAction, setSuccessToastAction, showLoaderAction } from '../layouts/actions';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/api`;
const authUrl = `${publicRuntimeConfig.apiUrl}/auth`;

export const fetchUserAction: any = createAction('profile/FETCH_USER', async (email: string) => {
    return axios
        .get(`${baseUrl}/profile`, {
            headers: {
                ...authHeader(email)
            }
        })
        .then((res) => res.data.user)
        .catch((e) => console.log(e.message));
});

export const inviteUserAction: any = createAction(
    'user/INVITE_USER',
    async (data: any, locale: string) =>
        (dispatch: Type.Dispatch): Promise<void> => {
            dispatch(showLoaderAction(true));
            return axios
                .post(`${authUrl}/invite?locale=${locale}`, data)
                .then(async () => {
                    console.log('hahahaha')
                    dispatch(setSuccessToastAction(`Check confirmation link in your mailbox`));
                    dispatch(showLoaderAction(false));
                    dispatch(hideRegisterFormAction(true));
                })
                .catch((e) => {
                    // console.log('ERRROR', e.response);
                    dispatch(setErrorToastAction(e.response.data.message));
                    dispatch(showLoaderAction(false));
                });
        }
);
export const skipExistUserSubscriptionNewAction: any = createAction(
    'user/NEW_SKIP_EXIST_USER_SUBSCRIPTION',
    async (redirectUrl: string, locale: string) =>
        async (
            dispatch: Type.Dispatch,
            getState: () => State.Root
        ): Promise<{ subscription: any; clientSecret: string }> => {
            dispatch(showLoaderAction(true));
            const state = getState();
            const res = await axios.post(
                `${baseUrl}/skip-exist-user-subscription-new`,
                { locale: locale },
                {
                    headers: {
                        ...authHeader(state.user.user.email)
                    }
                }
            );
            if (res.status) {
                dispatch(showLoaderAction(false));
            }
            console.log('Res Data Subscription', res.data);
            if (res.data.user.status === 'skipping') {
                window.localStorage.removeItem('user');
                window.localStorage.setItem('user', JSON.stringify(res.data.user));
                dispatch(setUserAction(res.data.user));
                window.location.href = (locale !== 'ua' ? `/${locale}` : '') + '/dashboard';
            }
            return {
                subscription: res.data.subscription,
                clientSecret: res.data.clientSecret
            };
        }
);

export const setUserLocaleAction: any = createAction(
    'user/SET_USER_LOCALE',
    async (locale: string) =>
        (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
            const state = getState();
            dispatch(showLoaderAction(true));
            return axios
                .get(`${baseUrl}/profile/set-locale?locale=${locale}`, {
                    headers: {
                        ...authHeader(state.user.user.email)
                    }
                })
                .then(() => {
                    // dispatch(setSuccessToastAction('Response was sent successfully'));
                    dispatch(showLoaderAction(false));
                })
                .catch((e) => {
                    // dispatch(setErrorToastAction(e.response.data.error));
                    dispatch(showLoaderAction(false));
                });
        }
);

export const setUserAction: any = createAction('user/SET_USER');
export const hideRegisterFormAction: any = createAction('user/HIDE_REGISTER_FORM');
export const showChangeSubscriptionFormAction: any = createAction('user/CHANGE_SUBSCRIPTION_FORM');
export const setupFreeSubscriptionAction: any = createAction('user/SETUP_FREE_SUBSCRIPTION');
export const setRedirectAfterSubscription: any = createAction('user/REDIRECT_AFTER_SUBSCRIPTION');
export const updateUserSubscriptionAction: any = createAction('user/UPDATE_REGISTER_SUBSCRIPTION');
export const setOrderCommentAction: any = createAction('user/SET_ORDER_COMMENT');
export const setWaitOrderIdAction: any = createAction('user/SET_EXIST_ORDER_ID');
