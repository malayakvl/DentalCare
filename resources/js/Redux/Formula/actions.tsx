import { createAction } from 'redux-actions';
// import axios from 'axios';
// import { useDispatch, useSelector } from "react-redux";

export const setTeethType = createAction('formula/SET_TEETH_TYPE');
export const setAllTeeth = createAction('formula/SET_ALL_TEETH');
export const setTooth18Active = createAction('formula/SET_TOOTH18_ACTIVE');
export const setTooth17Active = createAction('formula/SET_TOOTH17_ACTIVE');
export const setTooth16Active = createAction('formula/SET_TOOTH16_ACTIVE');
export const setTooth15Active = createAction('formula/SET_TOOTH15_ACTIVE');
export const setTooth14Active = createAction('formula/SET_TOOTH14_ACTIVE');
export const setTooth13Active = createAction('formula/SET_TOOTH13_ACTIVE');
export const setTooth12Active = createAction('formula/SET_TOOTH12_ACTIVE');
export const setTooth11Active = createAction('formula/SET_TOOTH11_ACTIVE');
export const setTooth21Active = createAction('formula/SET_TOOTH21_ACTIVE');
export const setToothDiagnoze = createAction('formula/SET_TOOTH_DIAGNOZE');
export const setActiveToothName = createAction('formula/SET_ACTIVE_TOOTH_NUBER');
export const setDiagnosis = createAction('formula/SET_DAGNOSIS');
export const setDiagnosisClass = createAction('formula/SET_DAGNOSIS_CLASS');
export const setSubDiagnosis = createAction('formula/SET_SUBDAGNOSIS');
export const setSealColor1 = createAction('formula/SET_SEALCOLOR1');
export const setSealColor2 = createAction('formula/SET_SEALCOLOR2');
export const setSealColor3 = createAction('formula/SET_SEALCOLOR3');
export const setSealServicalColor = createAction('formula/SET_SEALSERVICECOLOR');
export const setVinirColor = createAction('formula/SET_VINIRCOLOR');
export const setCeramicCrownColor = createAction('formula/SET_CERAMICCROWNCOLOR');
export const setMCeramicCrownColor = createAction('formula/SET_METALOCERAMICCROWNCOLOR');
export const setMetalicCrownColor = createAction('formula/SET_METALICCROWNCOLOR');
export const setZirconiaCrownColor = createAction('formula/SET_ZIRCONIACROWNCOLOR');
export const setNewToothActive = createAction('formula/SET_NEW_TOOTH_ACTIVE');
export const setDisactiveAll = createAction('formula/ALL_TEETH_DISACTIVE');
