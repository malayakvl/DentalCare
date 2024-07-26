import { ThunkAction, Action } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import reduxPromise from 'redux-promise';
// import thunkMiddleware from 'redux-thunk';
import reduxThunkFsa from 'redux-thunk-fsa';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

// import profileReducer from '../redux/profile/index';
import userReducer from '../redux/user/index';
// import notificationsReducer from '../redux/notifications/index';
import layoutsReducer from '../redux/layouts/index';
import clinicReducer from '../redux/clinics/index';
import storeReducer from '../redux/stores/index';
import dashboardReducer from '../redux/dashboard';
import paymentPlansReducer from '../redux/paymentPlans';

const reducers = combineReducers({
    clinics: clinicReducer,
    dashboard: dashboardReducer,
    layouts: layoutsReducer,
    paymentPlans: paymentPlansReducer,
    stores: storeReducer,
    user: userReducer,
});

const initStore = (initialState = {}) => {
    return createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(reduxThunkFsa, logger, reduxPromise))
    );
};

const store = initStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export default store;
