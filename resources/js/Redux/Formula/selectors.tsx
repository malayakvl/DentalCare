import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
// ------------------------------------
// Selectors
// ------------------------------------
const rootSelector = createSelector(
    (state) => state,
    (pricing) => pricing
);

export const teethTypeSelector = (state) => state.formula.teethType;
export const allTeethSelector = (state) => state.formula.allTeeth;
export const tooth18Selector = (state) => state.formula.tooth18;
export const tooth17Selector = (state) => state.formula.tooth17;
export const tooth16Selector = (state) => state.formula.tooth16;
export const getDiagnosisSelector = (state) => state.formula.diagnosis;
export const getSubDiagnosisSelector = (state) => state.formula.subdiagnosis;
export const getTeethDiagnozisSelector = (state) => state.formula.teethDiagnozes;
export const getSealColor1Selector = (state) => state.formula.seal_color1;
export const getSealColor2Selector = (state) => state.formula.seal_color2;
export const getSealColor3Selector = (state) => state.formula.seal_color3;
export const getSealServicalColorSelector = (state) => state.formula.seal_cervical_color;
export const getVinirColorSelector = (state) => state.formula.vinir_color;
export const getCeramicCrownColorSelector = (state) => state.formula.ceramic_crown_color;
export const getCeramicMCrownColorSelector = (state) => state.formula.mceramic_crown_color;
export const getMetalicCrownColorSelector = (state) => state.formula.metalic_crown_color;
export const getZirconiaCrownColorSelector = (state) => state.formula.zirconia_crown_color;
export const getStatusesSelector = (state) => state.formula.teethStatuses;
export const getPeriodontitStage18Selector = (state) => state.formula.teethDiagnozes.tooth18.periodontit_stage;
export const getPeriodontitStage17Selector = (state) => state.formula.teethDiagnozes.tooth17.periodontit_stage;
export const getPeriodontitStage16Selector = (state) => state.formula.teethDiagnozes.tooth16.periodontit_stage;
export const getPeriodontitStage15Selector = (state) => state.formula.teethDiagnozes.tooth15.periodontit_stage;
export const getPeriodontitStage14Selector = (state) => state.formula.teethDiagnozes.tooth14.periodontit_stage;
export const getPeriodontitStage13Selector = (state) => state.formula.teethDiagnozes.tooth13.periodontit_stage;

