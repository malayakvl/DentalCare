import { Action, handleActions } from 'redux-actions';
import {
    addUploadedFile,
    removeUploadedFile,
    fetchItemsAction,
    fetchItemAction,
    bulkDeleteAction,
    setActiveTabAction,
    setEmptyClinicAction,
    setSelectedColorsAction,
    setSelectedSizesAction,
    setSelectedAdditionalAction,
    findTagAction,
    setIdentAction,
    copyIdsAction,
    findProductsAction,
    redirectToListAction
} from './actions';

const initialState: {
    uploadedFiles: any[];
    clinics: any[];
    clinic: Clinics.ClinicItem;
    checkedIds: any[];
    isFetched: boolean;
    count: number;
    loading: boolean;
    items: any[];
    activeTab: string;
    redirectToList: boolean;
} = {
    clinics: [],
    clinic: {
        id: '',
        name: '',
        photos: [],
        previewPhoto: '',
        created_at: '',
        updated_at: ''
    } as unknown as Clinics.ClinicItem,
    loading: false,
    isFetched: false,
    uploadedFiles: [],
    checkedIds: [],
    count: 0,
    items: [],
    activeTab: 'add',
    redirectToList: false
};

const ACTION_HANDLERS: any = {
    [addUploadedFile]: (
        state: State.Clinics,
        action: Type.ReduxAction<State.Clinics>
    ): State.Clinics => {
        return <Clinics.Root>{
            ...state,
            uploadedFiles: [...state.uploadedFiles, action.payload]
        };
    },
    [removeUploadedFile]: (
        state: State.Clinics,
        action: Type.ReduxAction<State.Clinics>
    ): State.Clinics => {
        return <Clinics.Root>{
            ...state,
            uploadedFiles: state.uploadedFiles.filter(
                (file) => file.lastModified !== (action.payload as any).lastModified
            )
        };
    },
    [fetchItemsAction]: {
        next: (
            state: State.Clinics,
            action: Type.ReduxAction<Pick<State.Clinics, 'count' | 'items'>>
        ): State.Clinics => ({
            ...state,
            ...action.payload,
            loading: false,
            isFetched: true
        }),
        throw: (state: State.Clinics): State.Clinics => ({
            ...state,
            loading: false,
            isFetched: false
        })
    },
    [fetchItemAction]: {
        next: (
            state: State.Clinics,
            action: Type.ReduxAction<Pick<State.Clinics, 'clinic'>>
        ): State.Clinics => ({
            ...state,
            ...action.payload,
            loading: false,
            isFetched: true,
            uploadedFiles: []
        }),
        throw: (state: State.Clinics): State.Clinics => ({
            ...state,
            loading: false,
            isFetched: true,
            uploadedFiles: []
        })
    },
    [bulkDeleteAction]: (state: State.Clinics): State.Clinics => {
        return <Clinics.Root>{
            ...state
        };
    },
    [redirectToListAction]: {
        next: (state: State.Clinics, action: Action<boolean>): State.Clinics => ({
            ...state,
            redirectToList: action.payload
        })
    },
    [setEmptyClinicAction]: (state: State.Clinics): State.Clinics => {
        return <Clinics.Root>(<unknown>{
            ...state,
            clinic: {
                name: '',
            },
            isFetched: true,
            selectedAdditionals: {
                colors: [],
                sizes: [],
                styles: [],
                materials: [],
                tags: []
            },
            uploadedFiles: []
        });
    }
};

export {
    addUploadedFile,
    removeUploadedFile,
    bulkDeleteAction,
    fetchItemsAction,
    fetchItemAction,
    setSelectedSizesAction,
    setSelectedColorsAction,
    setSelectedAdditionalAction,
    findTagAction,
    setIdentAction,
    findProductsAction,
    redirectToListAction
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(ACTION_HANDLERS, initialState as any);
