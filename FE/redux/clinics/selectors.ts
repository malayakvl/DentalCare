import { createSelector } from 'reselect';

// ------------------------------------
// Selectors
// ------------------------------------
const rootSelector = createSelector(
    (state: State.Root) => state.clinics,
    (clinics: State.Clinics): State.Clinics => clinics
);

export const isFetchedSelector = createSelector(
    rootSelector,
    (clinics: State.Clinics): boolean => clinics.isFetched
);
export const uploadedFilesSelector = createSelector(
    rootSelector,
    (clinics: State.Clinics): File[] => clinics.uploadedFiles
);
export const paginatedClinicSelector = createSelector(
    rootSelector,
    (clinics: State.Clinics): any => clinics.items
);
export const clinicCountSelector = createSelector(
    rootSelector,
    (clinics: State.Clinics): number => clinics.count
);
export const clinicItemSelector = createSelector(
    rootSelector,
    (clinics: State.Clinics): Clinics.ClinicItem => clinics.clinic
);
export const isFetchSelector = createSelector(
    rootSelector,
    (clinics: State.Clinics): boolean => clinics.isFetched
);
export const redirectToListSelector = createSelector(
    rootSelector,
    (clinics: State.Clinics): boolean => clinics.redirectToList
);

// export const selectedColorsSelector = createSelector(
//     rootSelector,
//     (products: State.Products): any => products.selectedAdditionals.colors
// );
// export const selectedSizesSelector = createSelector(
//     rootSelector,
//     (products: State.Products): any => products.selectedAdditionals.sizes
// );
// export const tagSuggestionsSelector = createSelector(
//     rootSelector,
//     (products: State.Products): any => products.tagSuggestions
// );
