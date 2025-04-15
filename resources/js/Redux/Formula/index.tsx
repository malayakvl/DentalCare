import { handleActions } from 'redux-actions';
import {
    setTeethType,
    setAllTeeth,
    setTooth18Active,
    setTooth17Active,
    setTooth16Active,
    setToothDiagnoze,
    setActiveToothName,
    setDiagnosis,
    setDiagnosisClass,
    setSubDiagnosis,
    setSealColor1,
    setSealColor2,
    setSealColor3,
    setSealServicalColor,
    setVinirColor,
    setCeramicCrownColor,
    setMCeramicCrownColor,
    setMetalicCrownColor,
    setZirconiaCrownColor,
    setNewToothActive,
    setDisactiveAll

} from "./actions";

const initialState = {
    teethType: "adult",
    totalPrice: 0,
    curreny: "",
    diagnosis: "",
    subdiagnosis: "",
    seal_color1: "",
    seal_color2: "",
    seal_color3: "",
    seal_cervical_color:"blue",
    vinir_color: "blue",
    ceramic_crown_color: "blue",
    mceramic_crown_color: "blue",
    metalic_crown_color: "blue",
    zirconia_crown_color: "blue",
    showTableError: false,
    allTeeth: false,
    tooth18: false,
    tooth17: false,
    active_tooth: '',
    teethStatuses: {
        tooth18: {active: false}, 
        tooth17: {active: false}, 
        tooth16: {active: false},
        tooth15: {active: false},
        tooth14: {active: false},
        tooth13: {active: false},
        tooth12: {active: false},
        tooth11: {active: false}
    },
    teethDiagnozes: {
        tooth18: {
            active: false,
            change_color: false,
            fissure: false,

            // caries vars
            caries: false,
            caries_top: false,
            caries_bottom: false,
            caries_left: false,
            caries_right: false,
            caries_center: false,

            cervical_caries: false,
            tartar: false,
            pulpit: false,
            // channel not sealed
            channel_not_sealed: false,
            channel_top_sealed: false,
            channel_part_sealed: false,
            channel_class: '',
            // periodontit
            periodontit: false,
            periodontit_stage: '',
            periodontit_st1: false,
            periodontit_st2: false,
            periodontit_st3: false,
            periodontit_class: '',

            // seal vars
            seal: false,
            seal_top: false,
            seal_top_color: '',
            seal_bottom: false,
            seal_bottom_color: '',
            seal_left: false,
            seal_left_color: '',
            seal_right: false,
            seal_right_color: '',
            seal_center: false,
            seal_center_color: '',

            // seal cervical vars
            seal_cervical: false,
            seal_cervical_color: '',

            // vinir vars
            vinir: false,
            vinir_color: '',
            // vinir vars
            temporary_crown: false,
            // ceramic crown
            ceramic_crown: false,
            ceramic_crown_color: "",
            // metaloceramic crown
            mceramic_crown: false,
            mceramic_crown_color: "",
            // metalic crown
            metalic_crown: false,
            metalic_crown_color: "",
            // zirconia crown
            zirconia_crown: false,
            zirconia_crown_color: "",
            // pin
            pin: false,
            apex: false,
            absent: false,
            culttab: false,
            abutment: false,
            abutment_implant: false,
            shaper: false,
            implant: false,
            // paradontit
            parodontit: false,
            parodontit_stage: '',
            parodontit_stage_all: false
        },
        tooth17: {
            active: false,
            change_color: false,
            fissure: false,

            // caries vars
            caries: false,
            caries_top: false,
            caries_bottom: false,
            caries_left: false,
            caries_right: false,
            caries_center: false,

            cervical_caries: false,
            tartar: false,
            pulpit: false,
            // channel not sealed
            channel_not_sealed: false,
            channel_top_sealed: false,
            channel_part_sealed: false,
            channel_class: '',
            // periodontit
            periodontit: false,
            periodontit_stage: '',
            periodontit_st1: false,
            periodontit_st2: false,
            periodontit_st3: false,
            periodontit_class: '',

            // seal vars
            seal: false,
            seal_top: false,
            seal_top_color: '',
            seal_bottom: false,
            seal_bottom_color: '',
            seal_left: false,
            seal_left_color: '',
            seal_right: false,
            seal_right_color: '',
            seal_center: false,
            seal_center_color: '',

            // seal cervical vars
            seal_cervical: false,
            seal_cervical_color: '',

            // vinir vars
            vinir: false,
            vinir_color: '',
            // vinir vars
            temporary_crown: false,
            // ceramic crown
            ceramic_crown: false,
            ceramic_crown_color: "",
            // metaloceramic crown
            mceramic_crown: false,
            mceramic_crown_color: "",
            // metalic crown
            metalic_crown: false,
            metalic_crown_color: "",
            // zirconia crown
            zirconia_crown: false,
            zirconia_crown_color: "",
            // pin
            pin: false,
            apex: false,
            absent: false,
            culttab: false,
            abutment: false,
            abutment_implant: false,
            shaper: false,
            implant: false,
            // paradontit
            parodontit: false,
            parodontit_stage: '',
            parodontit_stage_all: false
        },
        tooth16: {
            active: false,
            change_color: false,
            fissure: false,

            // caries vars
            caries: false,
            caries_top: false,
            caries_bottom: false,
            caries_left: false,
            caries_right: false,
            caries_center: false,

            cervical_caries: false,
            tartar: false,
            pulpit: false,
            // channel not sealed
            channel_not_sealed: false,
            channel_top_sealed: false,
            channel_part_sealed: false,
            channel_class: '',
            // periodontit
            periodontit: false,
            periodontit_stage: '',
            periodontit_st1: false,
            periodontit_st2: false,
            periodontit_st3: false,
            periodontit_class: '',

            // seal vars
            seal: false,
            seal_top: false,
            seal_top_color: '',
            seal_bottom: false,
            seal_bottom_color: '',
            seal_left: false,
            seal_left_color: '',
            seal_right: false,
            seal_right_color: '',
            seal_center: false,
            seal_center_color: '',

            // seal cervical vars
            seal_cervical: false,
            seal_cervical_color: '',

            // vinir vars
            vinir: false,
            vinir_color: '',
            // vinir vars
            temporary_crown: false,
            // ceramic crown
            ceramic_crown: false,
            ceramic_crown_color: "",
            // metaloceramic crown
            mceramic_crown: false,
            mceramic_crown_color: "",
            // metalic crown
            metalic_crown: false,
            metalic_crown_color: "",
            // zirconia crown
            zirconia_crown: false,
            zirconia_crown_color: "",
            // pin
            pin: false,
            apex: false,
            absent: false,
            culttab: false,
            abutment: false,
            abutment_implant: false,
            shaper: false,
            implant: false,
            // paradontit
            parodontit: false,
            parodontit_stage: '',
            parodontit_stage_all: false
        },
        tooth15: {
            active: false,
            change_color: false,
            fissure: false,

            // caries vars
            caries: false,
            caries_top: false,
            caries_bottom: false,
            caries_left: false,
            caries_right: false,
            caries_center: false,

            cervical_caries: false,
            tartar: false,
            pulpit: false,
            // channel not sealed
            channel_not_sealed: false,
            channel_top_sealed: false,
            channel_part_sealed: false,
            channel_class: '',
            // periodontit
            periodontit: false,
            periodontit_stage: '',
            periodontit_st1: false,
            periodontit_st2: false,
            periodontit_st3: false,
            periodontit_class: '',

            // seal vars
            seal: false,
            seal_top: false,
            seal_top_color: '',
            seal_bottom: false,
            seal_bottom_color: '',
            seal_left: false,
            seal_left_color: '',
            seal_right: false,
            seal_right_color: '',
            seal_center: false,
            seal_center_color: '',

            // seal cervical vars
            seal_cervical: false,
            seal_cervical_color: '',

            // vinir vars
            vinir: false,
            vinir_color: '',
            // vinir vars
            temporary_crown: false,
            // ceramic crown
            ceramic_crown: false,
            ceramic_crown_color: "",
            // metaloceramic crown
            mceramic_crown: false,
            mceramic_crown_color: "",
            // metalic crown
            metalic_crown: false,
            metalic_crown_color: "",
            // zirconia crown
            zirconia_crown: false,
            zirconia_crown_color: "",
            // pin
            pin: false,
            apex: false,
            absent: false,
            culttab: false,
            abutment: false,
            abutment_implant: false,
            shaper: false,
            implant: false,
            // paradontit
            parodontit: false,
            parodontit_stage: '',
            parodontit_stage_all: false
        },
        tooth14: {
            active: false,
            change_color: false,
            fissure: false,

            // caries vars
            caries: false,
            caries_top: false,
            caries_bottom: false,
            caries_left: false,
            caries_right: false,
            caries_center: false,

            cervical_caries: false,
            tartar: false,
            pulpit: false,
            // channel not sealed
            channel_not_sealed: false,
            channel_top_sealed: false,
            channel_part_sealed: false,
            channel_class: '',
            // periodontit
            periodontit: false,
            periodontit_stage: '',
            periodontit_st1: false,
            periodontit_st2: false,
            periodontit_st3: false,
            periodontit_class: '',

            // seal vars
            seal: false,
            seal_top: false,
            seal_top_color: '',
            seal_bottom: false,
            seal_bottom_color: '',
            seal_left: false,
            seal_left_color: '',
            seal_right: false,
            seal_right_color: '',
            seal_center: false,
            seal_center_color: '',

            // seal cervical vars
            seal_cervical: false,
            seal_cervical_color: '',

            // vinir vars
            vinir: false,
            vinir_color: '',
            // vinir vars
            temporary_crown: false,
            // ceramic crown
            ceramic_crown: false,
            ceramic_crown_color: "",
            // metaloceramic crown
            mceramic_crown: false,
            mceramic_crown_color: "",
            // metalic crown
            metalic_crown: false,
            metalic_crown_color: "",
            // zirconia crown
            zirconia_crown: false,
            zirconia_crown_color: "",
            // pin
            pin: false,
            apex: false,
            absent: false,
            culttab: false,
            abutment: false,
            abutment_implant: false,
            shaper: false,
            implant: false,
            // paradontit
            parodontit: false,
            parodontit_stage: '',
            parodontit_stage_all: false
        },
        tooth13: {
            active: false,
            change_color: false,
            fissure: false,

            // caries vars
            caries: false,
            caries_top: false,
            caries_bottom: false,
            caries_left: false,
            caries_right: false,
            caries_center: false,

            cervical_caries: false,
            tartar: false,
            pulpit: false,
            // channel not sealed
            channel_not_sealed: false,
            channel_top_sealed: false,
            channel_part_sealed: false,
            channel_class: '',
            // periodontit
            periodontit: false,
            periodontit_stage: '',
            periodontit_st1: false,
            periodontit_st2: false,
            periodontit_st3: false,
            periodontit_class: '',

            // seal vars
            seal: false,
            seal_top: false,
            seal_top_color: '',
            seal_bottom: false,
            seal_bottom_color: '',
            seal_left: false,
            seal_left_color: '',
            seal_right: false,
            seal_right_color: '',
            seal_center: false,
            seal_center_color: '',

            // seal cervical vars
            seal_cervical: false,
            seal_cervical_color: '',

            // vinir vars
            vinir: false,
            vinir_color: '',
            // vinir vars
            temporary_crown: false,
            // ceramic crown
            ceramic_crown: false,
            ceramic_crown_color: "",
            // metaloceramic crown
            mceramic_crown: false,
            mceramic_crown_color: "",
            // metalic crown
            metalic_crown: false,
            metalic_crown_color: "",
            // zirconia crown
            zirconia_crown: false,
            zirconia_crown_color: "",
            // pin
            pin: false,
            apex: false,
            absent: false,
            culttab: false,
            abutment: false,
            abutment_implant: false,
            shaper: false,
            implant: false,
            // paradontit
            parodontit: false,
            parodontit_stage: '',
            parodontit_stage_all: false
        },
        tooth12: {
            active: false,
            change_color: false,
            fissure: false,

            // caries vars
            caries: false,
            caries_top: false,
            caries_bottom: false,
            caries_left: false,
            caries_right: false,
            caries_center: false,

            cervical_caries: false,
            tartar: false,
            pulpit: false,
            // channel not sealed
            channel_not_sealed: false,
            channel_top_sealed: false,
            channel_part_sealed: false,
            channel_class: '',
            // periodontit
            periodontit: false,
            periodontit_stage: '',
            periodontit_st1: false,
            periodontit_st2: false,
            periodontit_st3: false,
            periodontit_class: '',

            // seal vars
            seal: false,
            seal_top: false,
            seal_top_color: '',
            seal_bottom: false,
            seal_bottom_color: '',
            seal_left: false,
            seal_left_color: '',
            seal_right: false,
            seal_right_color: '',
            seal_center: false,
            seal_center_color: '',

            // seal cervical vars
            seal_cervical: false,
            seal_cervical_color: '',

            // vinir vars
            vinir: false,
            vinir_color: '',
            // vinir vars
            temporary_crown: false,
            // ceramic crown
            ceramic_crown: false,
            ceramic_crown_color: "",
            // metaloceramic crown
            mceramic_crown: false,
            mceramic_crown_color: "",
            // metalic crown
            metalic_crown: false,
            metalic_crown_color: "",
            // zirconia crown
            zirconia_crown: false,
            zirconia_crown_color: "",
            // pin
            pin: false,
            apex: false,
            absent: false,
            culttab: false,
            abutment: false,
            abutment_implant: false,
            shaper: false,
            implant: false,
            // paradontit
            parodontit: false,
            parodontit_stage: '',
            parodontit_stage_all: false
        },
    }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [setTeethType.toString()]: {
        next: (state, action) => ({
            ...state,
            teethType: action.payload
        })
    },
    [setAllTeeth.toString()]: {
        next: (state, action) => ({
            ...state,
            allTeeth: action.payload
        })
    },
    [setTooth18Active.toString()]: {
        next: (state, action) => ({
            ...state,
            tooth18: action.payload
        })
    },
    [setTooth17Active.toString()]: {
        next: (state, action) => ({
            ...state,
            tooth17: action.payload
        })
    },
    [setTooth16Active.toString()]: {
        next: (state, action) => ({
            ...state,
            tooth16: action.payload
        })
    },
    [setActiveToothName.toString()]: {
        next: (state, action) => ({
            ...state,
            active_tooth: action.payload
        })
    },
    [setDiagnosis.toString()]: {
        next: (state, action) => ({
            ...state,
            diagnosis: action.payload
        })
    },
    [setDiagnosisClass.toString()]: {
        next: (state, action) => ({
            ...state,
            channel_class: action.payload
        })
    },
    [setSubDiagnosis.toString()]: {
        next: (state, action) => ({
            ...state,
            subdiagnosis: action.payload
        })
    },
    [setSealColor1.toString()]: {
        next: (state, action) => ({
            ...state,
            seal_color1: action.payload
        })
    },
    [setSealColor2.toString()]: {
        next: (state, action) => ({
            ...state,
            seal_color2: action.payload
        })
    },
    [setSealColor3.toString()]: {
        next: (state, action) => ({
            ...state,
            seal_color3: action.payload
        })
    },
    [setSealServicalColor.toString()]: {
        next: (state, action) => ({
            ...state,
            seal_cervical_color: action.payload
        })
    },
    [setVinirColor.toString()]: {
        next: (state, action) => ({
            ...state,
            vinir_color: action.payload
        })
    },
    [setCeramicCrownColor.toString()]: {
        next: (state, action) => ({
            ...state,
            ceramic_crown_color: action.payload
        })
    },
    [setMCeramicCrownColor.toString()]: {
        next: (state, action) => ({
            ...state,
            mceramic_crown_color: action.payload
        })
    },
    [setMetalicCrownColor.toString()]: {
        next: (state, action) => ({
            ...state,
            metalic_crown_color: action.payload
        })
    },
    [setZirconiaCrownColor.toString()]: {
        next: (state, action) => ({
            ...state,
            zirconia_crown_color: action.payload
        })
    },
    [setNewToothActive.toString()]: {
        next: (state, action) => ({
            ...state,
            teethStatuses: {...state.teethStatuses, ...action.payload}
        })
    },
    [setDisactiveAll.toString()]: {
        next: (state, action) => ({
            ...state,
            teethStatuses: {
                tooth18: {active: false}, 
                tooth17: {active: false}, 
                tooth16: {active: false}, 
                tooth15: {active: false}, 
                tooth14: {active: false}, 
                tooth13: {active: false},
                tooth12: {active: false},
                tooth11: {active: false}
            }
        })
    },
}

export {
    setTeethType,
    setAllTeeth,
    setTooth18Active,
    setTooth17Active,
    setTooth16Active,
    setToothDiagnoze,
    setDiagnosis,
    setDiagnosisClass,
    setSubDiagnosis,
    setSealColor1,
    setSealColor2,
    setSealColor3,
    setSealServicalColor,
    setVinirColor,
    setCeramicCrownColor,
    setMCeramicCrownColor,
    setMetalicCrownColor,
    setZirconiaCrownColor,
    setActiveToothName,
    setNewToothActive,
    setDisactiveAll
}

export default handleActions(ACTION_HANDLERS, initialState);
