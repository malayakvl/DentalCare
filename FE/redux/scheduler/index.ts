import { Action, handleActions } from 'redux-actions';
import {
    fetchSchedulerAction,
    setEventInitAction,
    setIntervalAction,
    setShcedulerPopupAction,
    setEventSchedulerInitAction,
    updateFormEventAction
} from './actions';
import moment from 'moment';

const initialState: State.Scheduler = {
    showModalscheduler: false,
    loading: false,
    isFetched: false,
    items: [],
    interval: null,
    event: {
        id: null,
        doctor_id: null,
        cabinet_id: null,
        event_date: new Date(),
        patient_id: null,
        patient: null,
        comment: null,
        status: { name: 'plannned' },
        newPatient: false,
        date_event: null,
        time_event_from: null,
        time_event_to: null
    }
};

const ACTION_HANDLERS: any = {
    [setShcedulerPopupAction]: {
        next: (state: State.Scheduler, action: Action<any>): State.Scheduler => ({
            ...state,
            showModalscheduler: action.payload
        })
    },
    [fetchSchedulerAction]: {
        next: (
            state: State.Scheduler,
            action: Type.ReduxAction<Pick<State.Scheduler, 'items'>>
        ): State.Scheduler => ({
            ...state,
            ...action.payload,
            loading: false,
            isFetched: true
        }),
        throw: (state: State.Scheduler): State.Scheduler => ({
            ...state,
            loading: false,
            isFetched: false
        })
    },
    [updateFormEventAction]: (
        state: State.Scheduler,
        action: Type.ReduxAction<{
            type: any;
            modifier: Partial<Layouts.Pagination>;
        }>
    ): State.Scheduler => ({
        ...state,
        event: {
            ...state.event,
            [action.payload.type]: action.payload.modifier
        }
    }),
    [setEventSchedulerInitAction]: {
        next: (state: State.Scheduler, action: Action<any>): State.Scheduler => ({
            ...state,
            event: action.payload
        })
    },
    [setEventInitAction]: {
        next: (state: State.Scheduler, action: Action<any>): State.Scheduler => ({
            ...state,
            event: {
                id: null,
                doctor_id: null,
                cabinet_id: null,
                event_date: new Date(),
                patient_id: null,
                patient: null,
                comment: null,
                status: 'plannned',
                newPatient: false,
                date_event: moment(new Date()).format('YYYY-MM-DD'),
                time_event_from: moment(new Date()).format('HH:mm'),
                time_event_to: moment(new Date(), 'YYYY-MM-DD').add(1, 'hours').format('HH:mm')
            }
        })
    },
    [setIntervalAction]: {
        next: (state: State.Scheduler, action: Action<any>): State.Scheduler => ({
            ...state,
            interval: action.payload
        })
    }
    // [setEventSectionAction]: {
    //     next: (state: State.Scheduler, action: Action<any>): State.Scheduler => ({
    //         ...state,
    //         eventDate: action.payload
    //     })
    // }
};

export { setShcedulerPopupAction };

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(ACTION_HANDLERS, initialState as any);
