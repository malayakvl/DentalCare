import { Action, handleActions } from 'redux-actions';
import {
    fetchUserAction,
    setUserAction,
    hideRegisterFormAction,
    // createExistUserSubscriptionAction,
    // createUserFromSubscriptionAction,
    // fetchUserSubscriptionAction,
    showChangeSubscriptionFormAction,
    skipExistUserSubscriptionNewAction,
    setupFreeSubscriptionAction,
    setRedirectAfterSubscription,
    updateUserSubscriptionAction,
    setOrderCommentAction,
    setWaitOrderIdAction
} from './actions';

// const initialState: State.User = {
//     user: {} as User.User,
//     hideRegisterFrom: false,
//     subscription: {},
//
// };
const initialState: {
    clientSecret: null;
    subscription: null;
    user: User.User;
    paymentIntent: null;
    showChangeSubscription: boolean;
    forFree: boolean | string;
    redirectAfterSubscription: boolean;
    commentId: null;
} = {
    user: {} as User.User,
    clientSecret: null,
    subscription: null,
    paymentIntent: null,
    showChangeSubscription: false,
    forFree: false,
    redirectAfterSubscription: false,
    commentId: null
};

const ACTION_HANDLERS: any = {
    [fetchUserAction]: {
        next: (state: State.User, action: Action<any>): State.User => ({
            ...state,
            user: action.payload
        })
    },
    [setUserAction]: {
        next: (state: State.User, action: Action<any>): State.User => ({
            ...state,
            user: action.payload
        })
    },
    [setOrderCommentAction]: {
        next: (state: State.User, action: Action<any>): State.User => ({
            ...state,
            commentId: action.payload
        })
    },
    [setWaitOrderIdAction]: {
        next: (state: State.User, action: Action<any>): State.User => ({
            ...state,
            commentId: action.payload
        })
    },
    [hideRegisterFormAction]: {
        next: (state: State.User, action: Action<any>): State.User => ({
            ...state,
            hideRegisterFrom: action.payload
        })
    },
    [showChangeSubscriptionFormAction]: {
        next: (state: State.User, action: Action<boolean>): State.User => ({
            ...state,
            showChangeSubscription: action.payload
        })
    },
    [setupFreeSubscriptionAction]: {
        next: (state: State.User, action: Action<boolean>): State.User => ({
            ...state,
            forFree: action.payload
        })
    },
    [setRedirectAfterSubscription]: {
        next: (state: State.User, action: Action<boolean>): State.User => ({
            ...state,
            redirectAfterSubscription: action.payload
        })
    },
    [updateUserSubscriptionAction]: {
        next: (state: State.User, action: Action<boolean>): State.User => ({
            ...state,
            subscription: action.payload
        })
    }
};

export {
    fetchUserAction,
    setUserAction,
    hideRegisterFormAction,
    showChangeSubscriptionFormAction,
    setupFreeSubscriptionAction,
    setRedirectAfterSubscription,
    skipExistUserSubscriptionNewAction,
    updateUserSubscriptionAction,
    setOrderCommentAction
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(ACTION_HANDLERS, initialState as any);
