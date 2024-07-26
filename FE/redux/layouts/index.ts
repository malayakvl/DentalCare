import { Action, handleActions } from 'redux-actions';
import {
    setPaginationAction,
    toggleSidebarAction,
    closeSidebarAction,
    setErrorToastAction,
    setSuccessToastAction,
    setInfoToastAction,
    deleteToastAction,
    checkIdsAction,
    initIdsAction,
    checkAllIdsAction,
    uncheckAllIdsAction,
    setModalConfirmationMetaAction,
    setModalCalendlyMetaAction,
    setSwitchHeaderAction,
    showLoaderAction,
    setActivePageAction,
    setSwitchToggleAction,
    sidebarCloseAction,
    toggleTextingMenuAction,
    setLngAction,
    toggleProfileMenuAction,
    showEmailNotificationAction
} from './actions';
import { PaginationType, OrderStatus } from '../../constants';
// import { showPopupAction } from '../dashboard';

const initPagination = { limit: 25, offset: 0, sort: 'DESC', column: 'created_at', query: '' };

const initialState: State.Layouts = {
    pagination: {
        [PaginationType.CLINICS]: {
            ...initPagination,
            filters: {
                name: '',
            }
        },
        [PaginationType.DASHBOARD]: { ...initPagination },
        [PaginationType.STORES]: {
            ...initPagination,
            filters: {
                clinic_name: '',
            }
        },
        [PaginationType.NOTIFICATIONS]: { ...initPagination },
    },
    isSidebarOpen: false,
    isMobileDevice: false,
    isDataLoading: false,
    toasts: [],
    checkedIds: [],
    switchHeader: false,
    switchToggled: false,
    modalConfirmationMeta: null,
    modalCalendlyMeta: null,
    activeTab: {
        clinics: { tab: 'list' },
        stores: { tab: 'list' }
    },
    showTextingMenu: false,
    showProfileMenu: false,
    selectedLng: 'fr',
    showEmailNotification: false
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS: any = {
    [setPaginationAction]: (
        state: State.Layouts,
        action: Type.ReduxAction<{
            type: Type.PaginationType;
            modifier: Partial<Layouts.Pagination>;
        }>
    ): State.Layouts => ({
        ...state,
        pagination: {
            ...state.pagination,
            [action.payload.type]: {
                ...state.pagination[action.payload.type],
                ...action.payload.modifier
            }
        }
    }),
    [setActivePageAction]: (
        state: State.Layouts,
        action: Type.ReduxAction<{
            type: string;
            modifier: string;
        }>
    ): State.Layouts => ({
        ...state,
        activeTab: {
            ...state.activeTab,
            [action.payload.type]: {
                tab: action.payload.modifier
            }
        }
    }),
    [initIdsAction]: (
        state: State.Layouts,
        action: Type.ReduxAction<State.Layouts>
    ): State.Layouts => {
        return <Layouts.Root>(<unknown>{
            ...state,
            checkedIds: action.payload
        });
    },
    [checkIdsAction]: (
        state: State.Layouts,
        action: Type.ReduxAction<State.Layouts>
    ): State.Layouts => {
        return <Layouts.Root>{
            ...state,
            checkedIds: state.checkedIds.map((data) =>
                (data as any).id === action.payload ? { ...data, checked: !data.checked } : data
            )
        };
    },
    [checkAllIdsAction]: (state: State.Layouts): State.Layouts => {
        return <Layouts.Root>{
            ...state,
            checkedIds: state.checkedIds.map((data) =>
                (data as any).id ? { ...data, checked: true } : data
            )
        };
    },
    [uncheckAllIdsAction]: (state: State.Layouts): State.Layouts => {
        return <Layouts.Root>{
            ...state,
            checkedIds: state.checkedIds.map((data) =>
                (data as any).id ? { ...data, checked: false } : data
            )
        };
    },
    [toggleSidebarAction]: (state: State.Layouts): State.Layouts => ({
        ...state,
        isSidebarOpen: !state.isSidebarOpen
    }),
    [sidebarCloseAction]: (state: State.Layouts): State.Layouts => ({
        ...state,
        isSidebarOpen: false
    }),
    [showLoaderAction]: {
        next: (state: State.Layouts, action: Action<boolean>): State.Layouts => ({
            ...state,
            isDataLoading: action.payload
        })
    },
    [setSwitchHeaderAction]: {
        next: (state: State.Layouts, action: Action<boolean>): State.Layouts => ({
            ...state,
            switchHeader: action.payload
        })
    },
    [setSwitchToggleAction]: {
        next: (state: State.Layouts, action: Action<boolean>): State.Layouts => ({
            ...state,
            switchToggled: action.payload
        })
    },
    [closeSidebarAction]: (state: State.Layouts): State.Layouts => ({
        ...state,
        isSidebarOpen: false
    }),
    [setErrorToastAction]: (
        state: State.Layouts,
        action: Type.ReduxAction<Layouts.ToastMessage>
    ): State.Layouts => ({
        ...state,
        toasts: [...state.toasts, { id: Date.now(), type: 'error', message: action.payload }]
    }),
    [setSuccessToastAction]: (
        state: State.Layouts,
        action: Type.ReduxAction<Layouts.ToastMessage>
    ): State.Layouts => ({
        ...state,
        toasts: [...state.toasts, { id: Date.now(), type: 'success', message: action.payload }]
    }),
    [setInfoToastAction]: (
        state: State.Layouts,
        action: Type.ReduxAction<Layouts.ToastMessage>
    ): State.Layouts => ({
        ...state,
        toasts: [...state.toasts, { id: Date.now(), type: 'info', message: action.payload }]
    }),
    [deleteToastAction]: (
        state: State.Layouts,
        action: Type.ReduxAction<number>
    ): State.Layouts => ({
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload)
    }),
    [setModalConfirmationMetaAction]: (
        state: State.Layouts,
        action: Type.ReduxAction<Layouts.ModalConfirmationMeta>
    ): State.Layouts => ({
        ...state,
        modalConfirmationMeta: action.payload && {
            ...action.payload
        }
    }),
    [setModalCalendlyMetaAction]: (
        state: State.Layouts,
        action: Type.ReduxAction<Layouts.ModalCalendlyMeta>
    ): State.Layouts => ({
        ...state,
        modalCalendlyMeta: action.payload && {
            ...action.payload
        }
    }),
    [toggleTextingMenuAction]: {
        next: (state: State.Layouts, action: Action<boolean>): State.Layouts => ({
            ...state,
            showTextingMenu: action.payload
        })
    },
    [toggleProfileMenuAction]: {
        next: (state: State.Layouts, action: Action<boolean>): State.Layouts => ({
            ...state,
            showProfileMenu: action.payload
        })
    },
    [setLngAction]: {
        next: (state: State.Layouts, action: Action<string>): State.Layouts => ({
            ...state,
            selectedLng: action.payload
        })
    },
    [showEmailNotificationAction]: {
        next: (state: State.Layouts, action: Action<boolean>): State.Layouts => ({
            ...state,
            showEmailNotification: action.payload
        })
    }
};

export {
    setPaginationAction,
    initIdsAction,
    checkAllIdsAction,
    uncheckAllIdsAction,
    checkIdsAction,
    toggleSidebarAction,
    closeSidebarAction,
    setErrorToastAction,
    setSuccessToastAction,
    setInfoToastAction,
    deleteToastAction,
    setModalConfirmationMetaAction,
    setModalCalendlyMetaAction,
    setSwitchToggleAction,
    sidebarCloseAction,
    toggleTextingMenuAction,
    setLngAction,
    toggleProfileMenuAction,
    showEmailNotificationAction
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(ACTION_HANDLERS, initialState as any);
