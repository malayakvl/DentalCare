import { handleActions } from 'redux-actions';
import {
    setTeethType,
    setAllTeeth,
    setTooth18Active,
    setTooth17Active,
    setTooth16Active,
    setTooth28Active,
    setToothDiagnoze,
    setPerioDeepZond,
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
    setDisactiveAll,
    setSelectedToothNumber,
    setDeepZondData,
    setPsrChange,

    setPerioZ1828VestData,
    setPerioYK1828VestData,
    setPZondChartUp,
    setPKrayChartUp,
    setPBarChartUp,

    setPerioZ1828OralData,
    setPerioYK1828OralData,
    setPZondChartDown,
    setPKrayChartDown,
    setPBarChartDown,

    checkAction
    
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
    selected_tooth_number: '',
    psrChange: false,
    teethStatuses: {
        tooth18: {active: false}, 
        tooth17: {active: false}, 
        tooth16: {active: false},
        tooth15: {active: false},
        tooth14: {active: false},
        tooth13: {active: false},
        tooth12: {active: false},
        tooth11: {active: false},
        tooth21: {active: false},
        tooth22: {active: false},
        tooth23: {active: false},
        tooth24: {active: false},
        tooth25: {active: false},
        tooth26: {active: false},
        tooth27: {active: false},
        tooth28: {active: false},
        tooth48: {active: false},
        tooth47: {active: false},
        tooth46: {active: false},
        tooth45: {active: false},
        tooth44: {active: false},
        tooth43: {active: false},
        tooth42: {active: false},
        tooth41: {active: false},
        tooth31: {active: false},
        tooth32: {active: false},
        tooth33: {active: false},
        tooth34: {active: false},
        tooth35: {active: false},
        tooth36: {active: false},
        tooth37: {active: false},
        tooth38: {active: false},
    },
    teethDiagnozes: {
        tooth18: {
            active: false,
            change_color: false,
            fissure: false,
            psr1: 0,
            psr2: 0,
            psr3: 0,
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
        tooth11: {
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
        tooth21: {
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
        tooth22: {
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
        tooth23: {
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
        tooth24: {
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
        tooth25: {
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
        tooth26: {
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
        tooth27: {
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
        tooth28: {
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
        tooth48: {
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
        tooth47: {
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
        tooth46: {
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
        tooth45: {
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
        tooth44: {
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
        tooth43: {
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
        tooth42: {
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
        tooth41: {
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
        tooth31: {
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
        tooth32: {
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
        tooth33: {
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
        tooth34: {
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
        tooth35: {
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
        tooth36: {
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
        tooth37: {
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
        tooth38: {
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
    },
    // perio chart vest 1828
    vest1828Zond:  ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    vest1828Yasn: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    pZondChartUp: [0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0,0,0, 0,0,0, 0],
    pKrayChartUp: [0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0,0,0, 0,0,0, 0],
    pBarUp: [0, [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], 0],
    // perio chart oral 1828
    oral1828Zond:  ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    oral1828Yasn: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    pZondChartDown: [0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0,0,0, 0,0,0, 0],
    pKrayChartDown: [0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0,0,0, 0,0,0, 0],
    pBarDown: [0, [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], 0],

    // perio chart vest 4838
    vest4838Zond:  ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    vest4838Yasn: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    pZondChart2Up: [0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0,0,0, 0,0,0, 0],
    pKrayChart2Up: [0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0,0,0, 0,0,0, 0],
    pBar2Up: [0, [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], 0],
    // perio chart oral 4838
    oral4838Zond:  ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    oral4838Yasn: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    pZondChart2Down: [0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0,0,0, 0,0,0, 0],
    pKrayChart2Down: [0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0, 0,0,0, 0,0,0, 0,0,0, 0],
    pBar2Down: [0, [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], [0,0],[0,0], [0,0], [0,0], 0],
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
                tooth11: {active: false},
                tooth21: {active: false},
                tooth22: {active: false},
                tooth23: {active: false},
                tooth24: {active: false},
                tooth25: {active: false},
                tooth26: {active: false},
                tooth27: {active: false},
                tooth28: {active: false},
                tooth48: {active: false},
                tooth47: {active: false},
                tooth46: {active: false},
                tooth45: {active: false},
                tooth44: {active: false},
                tooth43: {active: false},
                tooth42: {active: false},
                tooth41: {active: false},
                tooth31: {active: false},
                tooth32: {active: false},
                tooth33: {active: false},
                tooth34: {active: false},
                tooth35: {active: false},
                tooth36: {active: false},
                tooth37: {active: false},
                tooth38: {active: false},
            }
        })
    },
    [setSelectedToothNumber.toString()]: {
        next: (state, action) => ({
            ...state,
            selected_tooth_number: action.payload
        })
    },
    [setPerioDeepZond.toString()]: {
        next: (state, action) => ({
            ...state,
            teethPerioZond: action.payload
        })
    },
    [setDeepZondData.toString()]: {
        next: (state, action) => ({
            ...state,
            perioZondData: action.payload
        })
    },
    [setPsrChange.toString()]: {
        next: (state, action) => ({
            ...state,
            psrChange: action.payload
        })
    },
    
    [setPerioZ1828VestData.toString()]: {
        next: (state, action) => ({
            ...state,
            vest1828Zond: action.payload
        })
    },
    [setPerioYK1828VestData.toString()]: {
        next: (state, action) => ({
            ...state,
            vest1828Yasn: action.payload
        })
    },
    [setPZondChartUp.toString()]: {
        next: (state, action) => ({
            ...state,
            pZondChartUp: action.payload
        })
    },
    [setPKrayChartUp.toString()]: {
        next: (state, action) => ({
            ...state,
            pKrayChartUp: action.payload
        })
    },
    [setPBarChartUp.toString()]: {
        next: (state, action) => ({
            ...state,
            pBarUp: action.payload
        })
    },

    [setPerioZ1828OralData.toString()]: {
        next: (state, action) => ({
            ...state,
            oral1828Zond: action.payload
        })
    },
    [setPerioYK1828OralData.toString()]: {
        next: (state, action) => ({
            ...state,
            oral1828Yasn: action.payload
        })
    },
    [setPZondChartDown.toString()]: {
        next: (state, action) => ({
            ...state,
            pZondChartDown: action.payload
        })
    },
    [setPKrayChartDown.toString()]: {
        next: (state, action) => ({
            ...state,
            pKrayChartDown: action.payload
        })
    },
    [setPBarChartDown.toString()]: {
        next: (state, action) => ({
            ...state,
            pBarDown: action.payload
        })
    },
}

export {
    setTeethType,
    setAllTeeth,
    setTooth28Active,
    setTooth18Active,
    setTooth17Active,
    setTooth16Active,
    setToothDiagnoze,
    setPerioDeepZond,
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
    setDisactiveAll,
    setSelectedToothNumber,
    setDeepZondData,
    setPsrChange,
    
    setPerioZ1828VestData,
    setPerioYK1828VestData,
    setPZondChartUp,
    setPKrayChartUp,
    setPBarChartUp,

    setPerioZ1828OralData,
    setPerioYK1828OralData,
    setPZondChartDown,
    setPKrayChartDown,
    setPBarChartDown,

    checkAction

}

export default handleActions(ACTION_HANDLERS, initialState);
