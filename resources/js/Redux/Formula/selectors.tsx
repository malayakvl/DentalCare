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
export const getPeriodontitStage12Selector = (state) => state.formula.teethDiagnozes.tooth12.periodontit_stage;
export const getPeriodontitStage11Selector = (state) => state.formula.teethDiagnozes.tooth11.periodontit_stage;
export const getPeriodontitStage21Selector = (state) => state.formula.teethDiagnozes.tooth21.periodontit_stage;
export const getPeriodontitStage22Selector = (state) => state.formula.teethDiagnozes.tooth22.periodontit_stage;
export const getPeriodontitStage23Selector = (state) => state.formula.teethDiagnozes.tooth23.periodontit_stage;
export const getPeriodontitStage24Selector = (state) => state.formula.teethDiagnozes.tooth24.periodontit_stage;
export const getPeriodontitStage25Selector = (state) => state.formula.teethDiagnozes.tooth25.periodontit_stage;
export const getPeriodontitStage26Selector = (state) => state.formula.teethDiagnozes.tooth26.periodontit_stage;
export const getPeriodontitStage27Selector = (state) => state.formula.teethDiagnozes.tooth27.periodontit_stage;
export const getPeriodontitStage28Selector = (state) => state.formula.teethDiagnozes.tooth28.periodontit_stage;
export const getActiveToothNumber = (state) => state.formula.selected_tooth_number;
export const getPerioZond18Selector = (state) => state.formula.tooth18.psr1;
export const getPerioZondSelector = (state) => state.formula.teethPerioZond;
export const getPerioZond1828VestDataSelector = (state) => state.formula.perioZondDataVest1828;
export const getPerioZond1828OralDataSelector = (state) => state.formula.perioZondDataOral1828;
export const getPsrChangeSelector = (state) => state.formula.psrChange;
export const getPerioYasen1828VestDataSelector = (state) => state.formula.perioYasenKrayVest1828;
export const getPerioYasen1828OralDataSelector = (state) => state.formula.perioYasenKrayVest1828;
// selector for perio chart
export const chartZ1828VSelector = (state) => state.formula.perioZVResult1828;
export const chartYK1828VSelector = (state) => state.formula.perioYKVResult1828;
export const chartZ1828OSelector = (state) => state.formula.perioZOResult1828;
export const chartYK1828OSelector = (state) => state.formula.perioYKOResult1828;


// chart variables
export const getPerioZ1828VDataSelector = (state) => state.formula.vest1828Zond;
export const getPerioYK1828VDataSelector = (state) => state.formula.vest1828Yasn;

export const chartZondUpSelector = (state) => state.formula.pZondChartUp;
export const chartKrayUpSelector = (state) => state.formula.pKrayChartUp;
export const chartBarUpSelector = (state) => state.formula.pBarUp;

export const getPerioZ1828ODataSelector = (state) => state.formula.oral1828Zond;
export const getPerioYK1828ODataSelector = (state) => state.formula.oral1828Yasn;

export const chartZondDownSelector = (state) => state.formula.pZondChartDown;
export const chartKrayDownSelector = (state) => state.formula.pKrayChartDown;
export const chartBarDownSelector = (state) => state.formula.pBarDown;
