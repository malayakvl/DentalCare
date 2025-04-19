import React from 'react';
import { setSubDiagnosis, setToothDiagnoze, setNewToothActive, setDisactiveAll, setSelectedToothNumber } from '../../../Redux/Formula';
import { useDispatch, useSelector } from "react-redux";
import {
    allTeethSelector,
    getDiagnosisSelector,
    getSealColor1Selector,
    getSealColor2Selector,
    getSealColor3Selector,
    getSubDiagnosisSelector,
    getTeethDiagnozisSelector,
    getSealServicalColorSelector,
    getVinirColorSelector,
    getCeramicCrownColorSelector,
    getCeramicMCrownColorSelector,
    getMetalicCrownColorSelector,
    getZirconiaCrownColorSelector,
    getStatusesSelector
} from "../../../Redux/Formula/selectors";
import PeriodontitStage48 from './periodontit48';


export default function Tooth48() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth48Diagnozis = teethDiagnozis.tooth48;
    const sealColor1 = useSelector(getSealColor1Selector);
    const sealColor2 = useSelector(getSealColor2Selector);
    const sealColor3 = useSelector(getSealColor3Selector);
    const wsDefectColor = useSelector(getSealServicalColorSelector);
    const vinirColor = useSelector(getVinirColorSelector);
    const ceramicCrownColor = useSelector(getCeramicCrownColorSelector);
    const mceramicCrownColor = useSelector(getCeramicMCrownColorSelector);
    const metalicCrownColor = useSelector(getMetalicCrownColorSelector);
    const zirconiaCrownColor = useSelector(getZirconiaCrownColorSelector);

    const setColordedPart = (diagnozis, toothPart = '') => {
        if (diagnozis === 'caries') {
            if (toothPart === 'bottom') {
                teethDiagnozis.tooth48.caries_bottom = !teethDiagnozis.tooth48.caries_bottom;
            }
            if (toothPart === 'center') {
                teethDiagnozis.tooth48.caries_center = !teethDiagnozis.tooth48.caries_center;
            }
            if (toothPart === 'left') {
                teethDiagnozis.tooth48.caries_left = !teethDiagnozis.tooth48.caries_left;
            }
            if (toothPart === 'right') {
                teethDiagnozis.tooth48.caries_right = !teethDiagnozis.tooth48.caries_right;
            }
            if (toothPart === 'top') {
                teethDiagnozis.tooth48.caries_top = !teethDiagnozis.tooth48.caries_top;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'seal') {
            if (toothPart === 'center') {
                if (teethDiagnozis.tooth48.seal_center_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth48.seal_center_color = sealColor1;
                    teethDiagnozis.tooth48.seal_center = true;
                } else if (teethDiagnozis.tooth48.seal_center_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth48.seal_center_color = sealColor2;
                    teethDiagnozis.tooth48.seal_center = true;
                } else if (teethDiagnozis.tooth48.seal_center_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth48.seal_center_color = sealColor3;
                    teethDiagnozis.tooth48.seal_center = true;
                } else {
                    teethDiagnozis.tooth48.seal_center = !teethDiagnozis.tooth48.seal_center;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'bottom') {
                if (teethDiagnozis.tooth48.seal_bottom_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth48.seal_bottom_color = sealColor1;
                    teethDiagnozis.tooth48.seal_bottom = true;
                } else if (teethDiagnozis.tooth48.seal_bottom_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth48.seal_bottom_color = sealColor2;
                    teethDiagnozis.tooth48.seal_bottom = true;
                } else if (teethDiagnozis.tooth48.seal_bottom_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth48.seal_bottom_color = sealColor3;
                    teethDiagnozis.tooth48.seal_bottom = true;
                } else {
                    teethDiagnozis.tooth48.seal_bottom = !teethDiagnozis.tooth48.seal_bottom;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'left') {
                if (teethDiagnozis.tooth48.seal_left_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth48.seal_left_color = sealColor1;
                    teethDiagnozis.tooth48.seal_left = true;
                } else if (teethDiagnozis.tooth48.seal_left_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth48.seal_left_color = sealColor2;
                    teethDiagnozis.tooth48.seal_left = true;
                } else if (teethDiagnozis.tooth48.seal_left_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth48.seal_left_color = sealColor3;
                    teethDiagnozis.tooth48.seal_left = true;
                } else {
                    teethDiagnozis.tooth48.seal_left = !teethDiagnozis.tooth48.seal_left;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'right') {
                if (teethDiagnozis.tooth48.seal_right_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth48.seal_right_color = sealColor1;
                    teethDiagnozis.tooth48.seal_right = true;
                } else if (teethDiagnozis.tooth48.seal_right_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth48.seal_right_color = sealColor2;
                    teethDiagnozis.tooth48.seal_right = true;
                } else if (teethDiagnozis.tooth48.seal_right_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth48.seal_right_color = sealColor3;
                    teethDiagnozis.tooth48.seal_right = true;
                } else {
                    teethDiagnozis.tooth48.seal_right = !teethDiagnozis.tooth48.seal_right;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'top') {
                if (teethDiagnozis.tooth48.seal_top_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth48.seal_top_color = sealColor1;
                    teethDiagnozis.tooth48.seal_top = true;
                } else if (teethDiagnozis.tooth48.seal_top_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth48.seal_top_color = sealColor2;
                    teethDiagnozis.tooth48.seal_top = true;
                } else if (teethDiagnozis.tooth48.seal_top_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth48.seal_top_color = sealColor3;
                    teethDiagnozis.tooth48.seal_top = true;
                } else {
                    teethDiagnozis.tooth48.seal_top = !teethDiagnozis.tooth48.seal_top;
                }
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'wedge_shaped_defect') {
            if (teethDiagnozis.tooth48.wedge_shaped_defect_color != wsDefectColor && wsDefectColor != '') {
                teethDiagnozis.tooth48.wedge_shaped_defect_color = wsDefectColor;
            } else {
                teethDiagnozis.tooth48.wedge_shaped_defect_color = !teethDiagnozis.tooth48.wedge_shaped_defect_color;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
    }
    

    return (
        <>
            <g id="48" className="df-tooth-text" style={{opacity:1}}>
                <text transform="matrix(1 0 0 1 247.1699 842.0025)" className={`st3 st4 st5 ${toothActive.tooth48.active ? 'num-active' : ''}`}>48</text>
            </g>
            <g className={`f-tooth-active`}
                onMouseOver={() => {
                    (!toothActive && !allTeeth) && document.getElementById('48').classList.add('tooth-number-hover')
                }}
                onMouseLeave={() => {
                    (!toothActive && !allTeeth) && document.getElementById('48').classList.remove('tooth-number-hover')
                }}
                onClick={() => {
                    dispatch(setSelectedToothNumber(48));
                    if (toothActive.tooth48.active) {
                        dispatch(setNewToothActive({tooth48: {active: true}}))
                    } else {
                        dispatch(setDisactiveAll());
                        dispatch(setNewToothActive({tooth48: {active: true}}))
                    }
                    if (diagnozis) {
                        if (diagnozis === 'change_color')
                            teethDiagnozis.tooth48.change_color = !teethDiagnozis.tooth48.change_color;
                        else if (diagnozis === 'fissure')
                            teethDiagnozis.tooth48.fissure = !teethDiagnozis.tooth48.fissure;
                        else if (diagnozis === 'caries')
                            teethDiagnozis.tooth48.caries = !teethDiagnozis.tooth48.caries;
                        else if (diagnozis === 'cervical_caries')
                            teethDiagnozis.tooth48.cervical_caries = !teethDiagnozis.tooth48.cervical_caries;
                        else if (diagnozis === 'wedge_shaped_defect')
                            teethDiagnozis.tooth48.wedge_shaped_defect = !teethDiagnozis.tooth48.wedge_shaped_defect;
                        else if (diagnozis === 'tartar')
                            teethDiagnozis.tooth48.tartar = !teethDiagnozis.tooth48.tartar;
                        else if (diagnozis === 'pulpit') {
                            teethDiagnozis.tooth48.pulpit = !teethDiagnozis.tooth48.pulpit;
                            teethDiagnozis.tooth48.channel_class = teethDiagnozis.tooth48.pulpit ? 'pulpit' : ''
                        } else if (diagnozis === 'channel_not_sealed') {
                            teethDiagnozis.tooth48.channel_not_sealed = !teethDiagnozis.tooth48.channel_not_sealed;
                            teethDiagnozis.tooth48.channel_class = teethDiagnozis.tooth48.channel_not_sealed ? 'channel-not-sealed' : '';
                        } else if (diagnozis === 'channel_top_sealed') {
                            teethDiagnozis.tooth48.channel_top_sealed = !teethDiagnozis.tooth48.channel_top_sealed;
                            teethDiagnozis.tooth48.channel_class = teethDiagnozis.tooth48.channel_top_sealed ? 'channel-top-sealed' : '';
                        } else if (diagnozis === 'channel_part_sealed') {
                            teethDiagnozis.tooth48.channel_part_sealed = !teethDiagnozis.tooth48.channel_part_sealed;
                            teethDiagnozis.tooth48.channel_class = teethDiagnozis.tooth48.channel_part_sealed ? 'channel-part-sealed' : '';
                        } else if (diagnozis === 'periodontit') {
                            if (teethDiagnozis.tooth48.periodontit_stage !== subDiagnozis) {
                                teethDiagnozis.tooth48.periodontit_stage = subDiagnozis
                                teethDiagnozis.tooth48.periodontit = true;
                            } else {
                                teethDiagnozis.tooth48.periodontit = !teethDiagnozis.tooth48.periodontit;
                            }
                            teethDiagnozis.tooth48.channel_class = teethDiagnozis.tooth48.periodontit ? 'periodontit' : '';
                            if (!teethDiagnozis.tooth48.periodontit) dispatch(setSubDiagnosis(''));
                        } else if (diagnozis === 'seal') {
                            teethDiagnozis.tooth48.seal = !teethDiagnozis.tooth48.seal;
                        } else if (diagnozis === 'seal_cervical') {
                            if (!teethDiagnozis.tooth48.seal_cervical && teethDiagnozis.tooth48.seal_cervical_color === "") {
                                teethDiagnozis.tooth48.seal_cervical = true;
                                teethDiagnozis.tooth48.seal_cervical_color = wsDefectColor;
                            } else if (teethDiagnozis.tooth48.seal_cervical && teethDiagnozis.tooth48.seal_cervical_color != wsDefectColor) {
                                teethDiagnozis.tooth48.seal_cervical_color = wsDefectColor;
                            } else {
                                teethDiagnozis.tooth48.seal_cervical = false;
                                teethDiagnozis.tooth48.seal_cervical_color = "";
                            }
                        } else if (diagnozis === 'vinir') {
                            if (!teethDiagnozis.tooth48.vinir && teethDiagnozis.tooth48.vinir_color === "") {
                                teethDiagnozis.tooth48.vinir = true;
                                teethDiagnozis.tooth48.vinir_color = vinirColor;
                            } else if (teethDiagnozis.tooth48.vinir && teethDiagnozis.tooth48.vinir_color != vinirColor) {
                                teethDiagnozis.tooth48.vinir_color = vinirColor;
                            } else {
                                teethDiagnozis.tooth48.vinir = false;
                                teethDiagnozis.tooth48.vinir_color = "";
                            }
                        } else if (diagnozis === 'temporary_crown') {
                            teethDiagnozis.tooth48.temporary_crown = !teethDiagnozis.tooth48.temporary_crown;
                        } else if (diagnozis === 'ceramic_crown') {
                            if (!teethDiagnozis.tooth48.ceramic_crown && teethDiagnozis.tooth48.ceramic_crown_color === "") {
                                teethDiagnozis.tooth48.ceramic_crown = true;
                                teethDiagnozis.tooth48.ceramic_crown_color = ceramicCrownColor;
                            } else if (teethDiagnozis.tooth48.ceramic_crown && teethDiagnozis.tooth48.ceramic_crown_color != ceramicCrownColor) {
                                teethDiagnozis.tooth48.ceramic_crown_color = ceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth48.ceramic_crown = false;
                                teethDiagnozis.tooth48.ceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'mceramic_crown') {
                            if (!teethDiagnozis.tooth48.mceramic_crown && teethDiagnozis.tooth48.mceramic_crown_color === "") {
                                teethDiagnozis.tooth48.mceramic_crown = true;
                                teethDiagnozis.tooth48.mceramic_crown_color = mceramicCrownColor;
                            } else if (teethDiagnozis.tooth48.mceramic_crown && teethDiagnozis.tooth48.mceramic_crown_color != mceramicCrownColor) {
                                teethDiagnozis.tooth48.mceramic_crown_color = mceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth48.mceramic_crown = false;
                                teethDiagnozis.tooth48.mceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'metalic_crown') {
                            if (!teethDiagnozis.tooth48.metalic_crown && teethDiagnozis.tooth48.metalic_crown_color === "") {
                                teethDiagnozis.tooth48.metalic_crown = true;
                                teethDiagnozis.tooth48.metalic_crown_color = metalicCrownColor;
                            } else if (teethDiagnozis.tooth48.metalic_crown && teethDiagnozis.tooth48.metalic_crown_color != metalicCrownColor) {
                                teethDiagnozis.tooth48.mceramic_crown_color = metalicCrownColor;
                            } else {
                                teethDiagnozis.tooth48.metalic_crown = false;
                                teethDiagnozis.tooth48.metalic_crown_color = "";
                            }
                        } else if (diagnozis === 'zirconia_crown') {
                            if (!teethDiagnozis.tooth48.zirconia_crown && teethDiagnozis.tooth48.zirconia_crown_color === "") {
                                teethDiagnozis.tooth48.zirconia_crown = true;
                                teethDiagnozis.tooth48.zirconia_crown_color = zirconiaCrownColor;
                            } else if (teethDiagnozis.tooth48.zirconia_crown && teethDiagnozis.tooth48.zirconia_crown_color != zirconiaCrownColor) {
                                teethDiagnozis.tooth48.zirconia_crown_color = zirconiaCrownColor;
                            } else {
                                teethDiagnozis.tooth48.zirconia_crown = false;
                                teethDiagnozis.tooth48.zirconia_crown_color = "";
                            }
                        } else if (diagnozis === 'pin') {
                            teethDiagnozis.tooth48.pin = !teethDiagnozis.tooth48.pin;
                        } else if (diagnozis === 'culttab') {
                            teethDiagnozis.tooth48.culttab = !teethDiagnozis.tooth48.culttab;
                        } else if (diagnozis === 'abutment') {
                            teethDiagnozis.tooth48.abutment = !teethDiagnozis.tooth48.abutment;
                        } else if (diagnozis === 'shaper') {
                            teethDiagnozis.tooth48.shaper = !teethDiagnozis.tooth48.shaper;
                        } else if (diagnozis === 'implant') {
                            teethDiagnozis.tooth48.implant = !teethDiagnozis.tooth48.implant;
                        } else if (diagnozis === 'apex') {
                            teethDiagnozis.tooth48.apex = !teethDiagnozis.tooth48.apex;
                        } else if (diagnozis === 'absent') {
                            teethDiagnozis.tooth48.absent = !teethDiagnozis.tooth48.absent;
                        } else if (diagnozis === 'cervical_caries') {
                            teethDiagnozis.tooth48.cervical_caries = !teethDiagnozis.tooth48.cervical_caries;
                        } else if (diagnozis === 'caries') {
                            teethDiagnozis.tooth48.caries = !teethDiagnozis.tooth48.caries;
                        } else if (diagnozis === 'parodontit') {
                            if (teethDiagnozis.tooth48.parodontit) {
                                if (teethDiagnozis.tooth48.parodontit_stage === subDiagnozis) {
                                    teethDiagnozis.tooth48.parodontit = false;
                                    teethDiagnozis.tooth48.active = false;
                                } else {
                                    teethDiagnozis.tooth48.parodontit = true;
                                    teethDiagnozis.tooth48.parodontit_stage = subDiagnozis
                                }
                            } else {
                                teethDiagnozis.tooth48.parodontit = true;
                                teethDiagnozis.tooth48.parodontit_stage = subDiagnozis;
                                teethDiagnozis.tooth48.active = true;
                            }
                        }
                        dispatch(setToothDiagnoze(teethDiagnozis))
                    }
                }}
            >
                <g className="underlay" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <path className="st40" d="M197.8,1187.9c0,0,2.2-41,2-65c-0.1-20,1.6-45,2-51c1.2-18,14-39,15-54
                        c1-15-14-36-16-69s7.2-112.7,17-134c11-24,33.2-32,59-31c24.3,0.9,48,9,55,58s1,88-1,98s-1,17-4,30s-18,32-16,45c2,13,18,42,18,64
                        c0,12-0.4,24-3.4,33.9c-2.5,8.2-5.4,15-7.6,19.1c-5,9-24.7,46.2-30,54c-11,16-23,28-39,35c-15.1,6.6-26,10-37,5
                        C195.9,1218.7,196.8,1203.9,197.8,1187.9z" 
                    />
                </g>
                <g id="T_48_up" className="top-view" style={{visibility: tooth48Diagnozis.absent ? 'hidden' : 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR/APEX/CULTTAB */}
                    <g className="dentin">
                        <g className="hEmpty hRoot hImplant" style={{visibility: !tooth48Diagnozis.culttab && !tooth48Diagnozis.implant && !tooth48Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st24 change-color ${tooth48Diagnozis?.change_color ? 'diagnoze-opacity' : ''} ${tooth48Diagnozis?.apex ? 'apex' : ''}`}
                                d="M206.301 928.101C206.001 932.501 206.101 937.001 206.301 941.401C206.601 948.201 207.201 955.201 211.201 961.301C215.101 967.401 221.901 972.101 229.601 975.501C235.001 977.901 240.901 979.701 246.901 980.801C254.401 982.201 262.001 982.701 269.701 982.901C280.001 983.201 290.601 983.001 299.501 
                                979.201C304.001 977.301 307.801 974.601 311.301 971.701C314.801 968.901 318.101 965.901 320.001 962.301C322.501 957.501 322.201 952.301 322.801 947.101C323.501 940.801 325.901 934.401 325.601 928.001C325.401 923.101 323.801 918.201 321.001 913.701C318.201 909.201 314.201 905.101 309.201 902.001C300.001 896.201 288.101 893.601 276.601 895.501C272.901 896.101 
                                269.301 897.101 265.601 896.901C263.301 896.801 261.101 896.101 258.801 895.701C254.501 894.901 250.001 895.101 245.601 895.301C240.501 895.501 235.301 895.901 230.601 897.401C224.901 899.301 220.301 902.601 216.401 906.301C213.701 908.901 211.201 911.601 209.501 914.701C207.201 918.901 206.601 923.501 206.301 928.101Z"
                            />
                        </g>
                        <g className="hIntact hImplant hEmpty" style={{visibility: tooth48Diagnozis?.apex || tooth48Diagnozis?.change_color ? 'inherit' : 'hidden'}}>
                            <path className={`st24 change-color ${tooth48Diagnozis?.change_color ? 'diagnoze-opacity' : ''} ${tooth48Diagnozis?.apex ? 'apex' : ''}`}
                                d="M206.301 928.101C206.001 932.501 206.101 937.001 206.301 941.401C206.601 948.201 207.201 955.201 211.201 961.301C215.101 967.401 221.901 972.101 229.601 975.501C235.001 977.901 240.901 979.701 246.901 980.801C254.401 982.201 262.001 982.701 269.701 982.901C280.001 983.201 290.601 983.001 299.501 979.201C304.001 977.301 307.801 974.601 311.301 971.701C314.801 968.901 318.101 965.901 320.001 962.301C322.501 957.501 322.201 952.301 322.801 947.101C323.501 940.801 325.901 934.401 325.601 928.001C325.401 923.101 323.801 918.201 321.001 913.701C318.201 909.201 314.201 905.101 309.201 
                                902.001C300.001 896.201 288.101 893.601 276.601 895.501C272.901 896.101 269.301 897.101 265.601 896.901C263.301 896.801 261.101 896.101 258.801 895.701C254.501 894.901 250.001 895.101 245.601 895.301C240.501 895.501 235.301 895.901 230.601 897.401C224.901 899.301 220.301 902.601 216.401 906.301C213.701 908.901 211.201 911.601 209.501 914.701C207.201 918.901 206.601 923.501 206.301 928.101Z"
                            />
                            <path className={`st24 change-color ${tooth48Diagnozis?.change_color ? 'diagnoze-opacity' : ''} ${tooth48Diagnozis?.apex ? 'apex' : ''}`} 
                                d="M298.5 932C298.5 939.5 300.599 958 267.5 958C230.89 958 235.5 933 237 927.5C238.322 922.652 244.5 914 264.835 914C279.5 914 298.5 917.976 298.5 932Z"
                            />
                        </g>
                    </g>
                    {/* PULPIT */}
                    <g className="pulp">
                        <g className="hIntact hEmpty hImplant pulpitis-pfilling"  style={{visibility: tooth48Diagnozis?.apex ? 'inherit' : 'hidden'}}>
                            <ellipse className="st22 target" rx="10.0966" ry="8.05456" transform="matrix(-0.0164692 -0.999864 0.999835 -0.0181353 245.152 933.211)" 
                                
                            />
                            <ellipse className="st22 target" rx="8.25802" ry="7.57128" transform="matrix(-0.981917 -0.189312 0.142513 -0.989793 284.84 925.453)"
                                />
                            <ellipse className="st22 target" rx="9.05222" ry="7.94373" transform="matrix(0.997644 -0.068601 0.0623222 0.998056 284.526 945.549)" 
                                 />
                        </g>
                    </g>
                    {/* IMPLANT */}
                    <g className="implant hEmpty hIntact hRoot" style={{visibility: tooth48Diagnozis.implant || tooth48Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <circle className="st48" cx="265.5" cy="936.5" r="26.5" />
                        <g className="st27">
                            <mask id="implant_48" className="st49">
                                <path className="st50" d="M251.905 920.474L248.458 919.352C245.529 922.3 243.349 925.994 242.231 930.124L244.928 932.55C244.686 933.829 244.56 935.15 244.56 936.5C244.56 937.85 244.686 939.17 244.928 940.45L242.231 942.875C243.349 947.006 245.529 950.7 248.458 953.648L251.905 952.525C253.895 954.242 256.209 955.594 258.743 956.478L259.494 960.024C261.479 960.548 263.564 
                                    960.827 265.714 960.827C267.864 960.827 269.95 960.548 271.936 960.024L272.687 956.477C275.22 955.593 277.533 954.241 279.523 952.525L282.97 953.647C285.899 950.699 288.079 947.004 289.197 942.874L286.5 940.448C286.741 939.169 286.868 937.849 286.868 936.5C286.868 935.15 286.741 933.831 286.5 932.552L289.197 930.126C288.079 
                                    925.995 285.899 922.301 282.97 919.352L279.523 920.475C277.533 918.758 275.22 917.406 272.687 916.522L271.936 912.976C269.95 912.452 267.864 912.173 265.714 912.173C263.564 912.173 261.479 912.452 259.494 912.975L258.743 916.521C256.209 917.405 253.895 918.758 251.905 920.474Z"
                                />
                            </mask>
                            <path className="st50 st51" d="M251.905 920.474L248.458 919.352C245.529 922.3 243.349 925.994 242.231 930.124L244.928 932.55C244.686 933.829 244.56 935.15 244.56 936.5C244.56 937.85 244.686 939.17 244.928 940.45L242.231 942.875C243.349 947.006 245.529 950.7 
                                248.458 953.648L251.905 952.525C253.895 954.242 256.209 955.594 258.743 956.478L259.494 960.024C261.479 960.548 263.564 960.827 265.714 960.827C267.864 960.827 269.95 960.548 271.936 960.024L272.687 956.477C275.22 955.593 277.533 954.241 279.523 952.525L282.97 953.647C285.899 950.699 288.079 947.004 289.197 942.874L286.5 940.448C286.741 939.169 286.868 937.849 286.868 936.5C286.868 935.15 286.741 
                                933.831 286.5 932.552L289.197 930.126C288.079 925.995 285.899 922.301 282.97 919.352L279.523 920.475C277.533 918.758 275.22 917.406 272.687 916.522L271.936 912.976C269.95 912.452 267.864 912.173 265.714 912.173C263.564 912.173 261.479 912.452 259.494 912.975L258.743 916.521C256.209 917.405 253.895 918.758 
                                251.905 920.474Z" />
                            <path className="st52" d="M248.458 919.352L249.078 917.45L247.907 917.069L247.04 917.942L248.458 919.352ZM251.905 920.474L251.286 922.376L252.357 922.725L253.211 921.989L251.905 920.474ZM242.231 930.124L240.3 929.601L239.979 930.789L240.893 931.611L242.231 930.124ZM244.928 932.55L246.893 932.921L247.102 931.815L246.265 931.063L244.928 932.55ZM244.928 940.45L246.265 941.937L247.102 
                                941.184L246.893 940.079L244.928 940.45ZM242.231 942.875L240.893 941.388L239.979 942.211L240.3 943.398L242.231 942.875ZM248.458 953.648L247.04 955.057L247.907 955.93L249.078 955.549L248.458 953.648ZM251.905 952.525L253.211 951.011L252.358 950.275L251.286 950.624L251.905 952.525ZM258.743 956.478L260.699 956.063L260.465 954.961L259.401 954.59L258.743 
                                956.478ZM259.494 960.024L257.537 960.439L257.793 961.644L258.984 961.958L259.494 960.024ZM271.936 960.024L272.446 961.958L273.637 961.643L273.892 960.438L271.936 960.024ZM272.687 956.477L272.028 954.589L270.964 954.96L270.731 956.063L272.687 956.477ZM279.523 952.525L280.142 950.623L279.07 950.274L278.217 951.01L279.523 952.525ZM282.97 953.647L282.35 955.549L283.521 955.93L284.388 955.057L282.97 
                                953.647ZM289.197 942.874L291.128 943.396L291.449 942.209L290.534 941.386L289.197 942.874ZM286.5 940.448L284.534 940.077L284.326 941.183L285.162 941.935L286.5 940.448ZM286.5 932.552L285.162 931.064L284.326 931.817L284.534 932.923L286.5 932.552ZM289.197 930.126L290.534 931.613L291.449 930.791L291.128 929.603L289.197 930.126ZM282.97 919.352L284.388 917.943L283.521 917.07L282.35 917.451L282.97 919.352ZM279.523 920.475L278.217 921.989L279.071 
                                922.726L280.142 922.376L279.523 920.475ZM272.687 916.522L270.731 916.937L270.964 918.039L272.028 918.411L272.687 916.522ZM271.936 912.976L273.892 912.561L273.637 911.356L272.446 911.042L271.936 912.976ZM259.494 912.975L258.984 911.041L257.793 911.355L257.537 912.561L259.494 912.975ZM258.743 916.521L259.401 918.41L260.465 918.039L260.699 916.936L258.743 916.521ZM247.839 921.254L251.286 922.376L252.524 918.573L249.078 917.45L247.839 921.254ZM244.161 930.647C245.187 926.86 247.186 923.469 249.877 920.762L247.04 917.942C243.871 921.13 241.512 925.128 240.3 929.601L244.161 930.647ZM246.265 931.063L243.568 928.637L240.893 931.611L243.591 934.037L246.265 931.063ZM246.56 936.5C246.56 935.275 246.675 934.079 246.893 
                                932.921L242.963 932.179C242.698 933.58 242.56 935.025 242.56 936.5H246.56ZM246.893 940.079C246.675 938.921 246.56 937.725 246.56 936.5H242.56C242.56 937.975 242.698 939.42 242.963 940.821L246.893 940.079ZM243.568 944.362L246.265 941.937L243.591 938.963L240.893 941.388L243.568 944.362ZM249.877 952.238C247.186 949.53 245.187 946.14 244.161 942.352L240.3 943.398C241.512 947.872 243.871 951.869 247.04 955.057L249.877 952.238ZM251.286 950.624L247.839 951.746L249.078 955.549L252.524 954.427L251.286 950.624ZM259.401 954.59C257.11 953.79 255.015 952.566 253.211 951.011L250.599 954.04C252.776 955.918 255.309 957.398 258.084 958.366L259.401 954.59ZM261.45 959.61L260.699 956.063L256.786 956.893L257.537 960.439L261.45 959.61ZM265.714 
                                958.827C263.738 958.827 261.824 958.57 260.004 958.09L258.984 961.958C261.134 962.525 263.39 962.827 265.714 962.827V958.827ZM271.426 958.09C269.605 958.57 267.691 958.827 265.714 958.827V962.827C268.038 962.827 270.295 962.525 272.446 961.958L271.426 958.09ZM270.731 956.063L269.979 959.609L273.892 960.438L274.644 956.892L270.731 956.063ZM278.217 951.01C276.414 952.565 274.319 953.789 272.028 954.589L273.346 958.365C276.121 957.397 278.652 955.917 280.829 954.039L278.217 951.01ZM283.589 951.745L280.142 950.623L278.904 954.426L282.35 955.549L283.589 951.745ZM287.267 942.351C286.241 946.139 284.242 949.53 281.551 952.237L284.388 955.057C287.557 951.868 289.916 947.87 291.128 943.396L287.267 942.351ZM285.162 941.935L287.86 944.361L290.534 941.386L287.837 938.961L285.162 941.935ZM284.868 936.5C284.868 937.724 284.753 938.92 284.534 940.077L288.465 940.819C288.729 939.418 288.868 937.974 288.868 936.5H284.868ZM284.534 932.923C284.753 
                                934.08 284.868 935.276 284.868 936.5H288.868C288.868 935.025 288.729 933.581 288.465 932.18L284.534 932.923ZM287.86 928.639L285.162 931.064L287.837 934.039L290.534 931.613L287.86 928.639ZM281.551 920.762C284.242 923.47 286.241 926.861 287.267 930.649L291.128 929.603C289.916 925.129 287.557 921.131 284.388 917.943L281.551 920.762ZM280.142 922.376L283.589 921.254L282.35 917.451L278.904 918.573L280.142 922.376ZM272.028 918.411C274.319 919.21 276.414 920.434 278.217 921.989L280.829 918.96C278.653 917.083 276.121 915.602 273.346 914.634L272.028 918.411ZM269.979 913.39L270.731 916.937L274.644 916.108L273.892 912.561L269.979 913.39ZM265.714 914.173C267.691 914.173 269.605 914.429 271.426 914.91L272.446 911.042C270.295 910.475 268.038 910.173 265.714 910.173V914.173ZM260.004 914.909C261.824 914.429 263.738 914.173 265.714 914.173V910.173C263.39 910.173 261.134 910.474 258.984 911.041L260.004 914.909ZM260.699 916.936L261.45 913.39L257.537 912.561L256.786 916.107L260.699 916.936ZM253.211 921.989C255.015 920.433 257.11 919.209 259.401 918.41L258.084 914.633C255.309 915.601 252.776 917.082 
                                250.599 918.96L253.211 921.989Z" mask="url(#implant_48)" />
                        </g>
                    </g>
                    <g className="shaper hEmpty hIntact hRoot" style={{visibility: 'hidden', opacity: 0}} >
                        <circle className="st44" cx="264.5" cy="938.5" r="28.5"></circle>
                        <path className="st45" d="M262.577 929.739C263.129 927.804 265.871 927.804 266.423 929.739L266.929 931.511C267.225 932.549 268.291 933.164 269.338 932.902L271.126 932.454C273.077 931.965 274.448 934.339 273.049 935.785L271.767 937.109C271.016 937.884 271.016 939.116 271.767 939.891L273.049 941.215C274.448 942.661 273.077 945.035 271.126 944.546L269.338 944.098C268.291 943.836 267.225 944.451 266.929 945.489L266.423 947.261C265.871 949.196 263.129 949.196 262.577 947.261L262.071 945.489C261.775 944.451 260.709 943.836 259.662 944.098L257.874 944.546C255.923 945.035 254.552 942.661 255.951 941.215L257.233 939.891C257.984 939.116 257.984 937.884 257.233 937.109L255.951 935.785C254.552 934.339 255.923 931.965 257.874 932.454L259.662 932.902C260.709 933.164 261.775 932.549 262.071 931.511L262.577 929.739Z"></path>
                    </g>
                    {/* ABUTMENT */}
                    <g className="abutment hEmpty hIntact hRoot" style={{visibility: tooth48Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth48Diagnozis.abutment ? 1 : 0}}>
                        <path className="st47" d="M207.299 928.614L207.298 928.617C207.002 933.005 207.1 937.507 207.3 941.939L207.3 941.941C207.6 948.813 208.203 955.63 212.039 961.541L212.046 961.55L212.046 961.55C215.797 967.478 222.397 972.121 230.008 975.515L230.01 975.516C235.334 977.907 241.157 979.702 247.083 980.799L247.086 980.8C254.51 982.199 262.05 982.702 269.727 982.904L269.73 982.904C280.035 983.207 290.43 982.989 299.105 979.248L299.108 979.246C303.481 977.381 307.195 974.722 310.659 971.823L310.665 971.818L310.672 971.813C314.162 968.992 317.316 966.072 319.113 962.635C320.286 960.359 320.815 957.965 321.12 955.45C321.273 954.189 321.369 952.912 321.464 951.602L321.475 951.459C321.566 950.203 321.66 948.918 321.807 947.63C322.081 945.138 322.614 942.617 323.136 940.145C323.292 939.403 323.448 938.666 323.595 937.935C324.243 934.73 324.746 931.598 324.602 928.495L324.601 928.489C324.409 923.729 322.869 918.944 320.149 914.529C317.429 910.113 313.538 906.083 308.67 903.034L308.664 903.03C299.668 897.302 288.018 894.729 276.765 896.607L276.762 896.608C275.879 896.752 274.978 896.926 274.065 897.103C271.31 897.635 268.438 898.19 265.551 898.034C264.319 897.979 263.132 897.763 261.992 897.52C261.613 897.44 261.244 897.357 260.881 897.276C260.124 897.106 259.39 896.941 258.628 896.808L258.616 896.806L258.616 896.806C254.45 896.023 250.067 896.215 245.647 896.418L245.64 896.418C240.551 896.619 235.472 897.021 230.914 898.49C225.4 900.348 220.925 903.579 217.095 907.249C214.413 909.858 212.005 912.499 210.38 915.491L207.299 928.614ZM207.299 928.614C207.597 923.994 208.189 919.533 210.38 915.492L207.299 928.614Z"></path>
                        <path className="st47" d="M225.131 931.54L225.131 931.543C224.924 934.562 224.992 937.664 225.132 940.729L225.132 940.731C225.343 945.489 225.767 950.128 228.412 954.141L228.418 954.151L228.418 954.151C231.009 958.182 235.587 961.367 240.911 963.706L240.914 963.707C244.634 965.352 248.704 966.588 252.848 967.344L252.851 967.345C258.048 968.31 263.33 968.657 268.719 968.797L268.722 968.797C275.966 969.007 283.214 968.851 289.247 966.288L289.25 966.287C292.287 965.011 294.872 963.19 297.295 961.192L297.302 961.187L297.308 961.182C299.759 959.231 301.931 957.243 303.161 954.924C303.961 953.396 304.326 951.781 304.538 950.058C304.645 949.195 304.711 948.317 304.778 947.41L304.786 947.309C304.85 946.441 304.916 945.546 305.02 944.648C305.215 942.905 305.594 941.139 305.961 939.424C306.071 938.914 306.179 938.408 306.282 937.908C306.736 935.693 307.082 933.558 306.983 931.451L306.983 931.445C306.85 928.211 305.787 924.951 303.901 921.934C302.014 918.917 299.313 916.16 295.93 914.073L295.924 914.069C289.662 910.141 281.544 908.375 273.705 909.664L273.702 909.664C273.098 909.761 272.476 909.88 271.841 910.001C269.898 910.371 267.829 910.765 265.763 910.655C264.874 910.616 264.021 910.463 263.216 910.294C262.943 910.236 262.681 910.178 262.424 910.122C261.896 910.005 261.391 909.894 260.862 909.802L260.85 909.8L260.85 909.8C257.96 909.265 254.913 909.395 251.8 909.536L251.794 909.536L251.794 909.536C248.22 909.676 244.684 909.953 241.521 910.957C237.699 912.225 234.591 914.434 231.921 916.954C230.041 918.755 228.377 920.557 227.258 922.586L225.131 931.54ZM225.131 931.54C225.34 928.349 225.753 925.32 227.258 922.586L225.131 931.54Z"></path>
                        <ellipse className="st45" cx="266" cy="940.571" rx="13" ry="13.1313" />
                    </g>
                    {/* PIN */}
                    <g className="pin hEmpty hImplant" style={{visibility: 'inherit', opacity: tooth48Diagnozis.pin ? 1 : 0}}>
                        <path className="st56 hIntact" d="M207.299 928.613L207.298 928.616C207.002 933.004 207.1 937.505 207.3 941.937L207.3 941.938C207.6 948.811 208.202 955.627 212.039 961.538L212.046 961.547L212.046 961.547C215.797 967.474 222.397 972.117 230.008 975.512L230.01 975.513C235.334 977.903 241.157 979.698 247.083 980.795L247.086 980.795C254.51 982.195 262.05 982.698 269.727 982.9L269.73 982.9C280.035 983.203 290.43 982.985 299.105 979.244L299.108 979.242C303.481 977.377 307.195 974.718 310.659 971.82L310.665 971.814L310.672 971.809C314.162 968.989 317.316 966.069 319.113 962.631C320.286 960.356 320.815 957.963 321.12 955.447C321.273 954.186 321.369 952.909 321.464 951.6L321.475 951.457C321.566 950.201 321.66 948.916 321.807 947.628M207.299 928.613L210.38 915.49C212.004 912.498 214.413 909.858 217.095 907.249C220.925 903.579 225.4 900.347 230.914 898.49C235.472 897.021 240.551 896.619 245.64 896.418L245.647 896.418C250.067 896.215 254.45 896.023 258.616 896.805L258.616 896.806L258.628 896.808C259.39 896.941 260.124 897.106 260.881 897.276C261.244 897.357 261.613 897.44 261.992 897.52C263.132 897.763 264.319 897.979 265.551 898.034C268.438 898.19 271.31 897.635 274.065 897.103C274.978 896.926 275.879 896.752 276.762 896.608L276.765 896.607C288.018 894.729 299.668 897.302 308.664 903.03L308.67 903.034C313.538 906.082 317.429 910.112 320.149 914.528C322.869 918.943 324.409 923.728 324.601 928.488L324.602 928.494C324.746 931.596 324.243 934.728 323.595 937.933C323.448 938.664 323.292 939.401 323.136 940.143C322.614 942.615 322.081 945.135 321.807 947.628M207.299 928.613C207.597 923.992 208.189 919.531 210.379 915.491L207.299 928.613ZM321.807 947.628C321.807 947.629 321.807 947.629 321.807 947.63L322.801 947.739L321.807 947.626C321.807 947.627 321.807 947.627 321.807 947.628Z" style={{visibility: 'hidden'}}></path>
                        <path className="st56 hIntact" d="M225.131 931.538L225.131 931.541C224.924 934.56 224.992 937.662 225.132 940.727L225.132 940.728C225.343 945.487 225.767 950.125 228.412 954.138L228.418 954.147L228.418 954.147C231.009 958.179 235.587 961.363 240.911 963.702L240.914 963.703C244.634 965.348 248.704 966.584 252.848 967.34L252.851 967.341C258.048 968.306 263.33 968.654 268.719 968.793L268.722 968.793C275.966 969.003 283.214 968.847 289.247 966.285L289.25 966.283C292.287 965.008 294.872 963.187 297.295 961.189L297.302 961.184L297.308 961.178C299.759 959.228 301.931 957.24 303.161 954.921C303.961 953.393 304.326 951.778 304.538 950.056C304.645 949.192 304.711 948.315 304.778 947.407L304.786 947.306C304.85 946.438 304.916 945.543 305.02 944.646M225.131 931.538L227.258 922.584C228.376 920.555 230.041 918.754 231.921 916.953C234.591 914.433 237.699 912.224 241.521 910.956C244.684 909.952 248.22 909.675 251.794 909.535L251.794 909.535L251.8 909.535C254.913 909.394 257.96 909.264 260.85 909.799L260.85 909.799L260.862 909.801C261.391 909.893 261.896 910.004 262.424 910.121C262.681 910.177 262.943 910.235 263.216 910.293C264.021 910.462 264.874 910.615 265.763 910.654C267.829 910.764 269.898 910.37 271.841 910C272.476 909.879 273.098 909.76 273.702 909.663L273.705 909.663C281.544 908.374 289.662 910.14 295.924 914.068L295.93 914.072C299.313 916.159 302.014 918.916 303.901 921.933C305.787 924.949 306.85 928.209 306.983 931.443L306.983 931.449C307.082 933.555 306.736 935.691 306.282 937.906C306.179 938.405 306.071 938.911 305.961 939.422C305.594 941.136 305.215 942.902 305.02 944.646M225.131 931.538C225.34 928.347 225.753 925.318 227.258 922.584L225.131 931.538ZM305.02 944.646C305.02 944.646 305.02 944.647 305.02 944.647L306.014 944.758L305.021 944.643C305.02 944.644 305.02 944.645 305.02 944.646Z" style={{visibility: 'hidden'}}></path>
                        <circle className="st57" cx="266" cy="940" r="12.25" style={{fill: 'black', opacity: tooth48Diagnozis.pin ? 1 : 0}} />
                    </g>
                    {/* CULTTAB */}
                    <g className="stump hEmpty hIntact hImplant" style={{visibility: !tooth48Diagnozis.culttab ? 'hidden' : 'inherit', opacity: !tooth48Diagnozis.culttab ? 0 : 1}}>
                        <path className="st47" d="M207.299 928.614L207.298 928.617C207.002 933.005 207.1 937.507 207.3 941.939L207.3 941.941C207.6 948.813 208.203 955.63 212.039 961.541L212.046 961.55L212.046 961.55C215.797 967.478 222.397 972.121 230.008 975.515L230.01 975.516C235.334 977.907 241.157 979.702 247.083 980.799L247.086 980.8C254.51 982.199 262.05 982.702 269.727 982.904L269.73 982.904C280.035 983.207 290.43 982.989 299.105 979.248L299.108 979.246C303.481 977.381 307.195 974.722 310.659 971.823L310.665 971.818L310.672 971.813C314.162 968.992 317.316 966.072 319.113 962.635C320.286 960.359 320.815 957.965 321.12 955.45C321.273 954.189 321.369 952.912 321.464 951.602L321.475 951.459C321.566 950.203 321.66 948.918 321.807 947.63C322.081 945.138 322.614 942.617 323.136 940.145C323.292 939.403 323.448 938.666 323.595 937.935C324.243 934.73 324.746 931.598 324.602 928.495L324.601 928.489C324.409 923.729 322.869 918.944 320.149 914.529C317.429 910.113 313.538 906.083 308.67 903.034L308.664 903.03C299.668 897.302 288.018 894.729 276.765 896.607L276.762 896.608C275.879 896.752 274.978 896.926 274.065 897.103C271.31 897.635 268.438 898.19 265.551 898.034C264.319 897.979 263.132 897.763 261.992 897.52C261.613 897.44 261.244 897.357 260.881 897.276C260.124 897.106 259.39 896.941 258.628 896.808L258.616 896.806L258.616 896.806C254.45 896.023 250.067 896.215 245.647 896.418L245.64 896.418C240.551 896.619 235.472 897.021 230.914 898.49C225.4 900.348 220.925 903.579 217.095 907.249C214.413 909.858 212.005 912.499 210.38 915.491L207.299 928.614ZM207.299 928.614C207.597 923.994 208.189 919.533 210.38 915.492L207.299 928.614Z"></path>
                        <path className="st47" d="M225.131 931.54L225.131 931.543C224.924 934.562 224.992 937.664 225.132 940.729L225.132 940.731C225.343 945.489 225.767 950.128 228.412 954.141L228.418 954.151L228.418 954.151C231.009 958.182 235.587 961.367 240.911 963.706L240.914 963.707C244.634 965.352 248.704 966.588 252.848 967.344L252.851 967.345C258.048 968.31 263.33 968.657 268.719 968.797L268.722 968.797C275.966 969.007 283.214 968.851 289.247 966.288L289.25 966.287C292.287 965.011 294.872 963.19 297.295 961.192L297.302 961.187L297.308 961.182C299.759 959.231 301.931 957.243 303.161 954.924C303.961 953.396 304.326 951.781 304.538 950.058C304.645 949.195 304.711 948.317 304.778 947.41L304.786 947.309C304.85 946.441 304.916 945.546 305.02 944.648C305.215 942.905 305.594 941.139 305.961 939.424C306.071 938.914 306.179 938.408 306.282 937.908C306.736 935.693 307.082 933.558 306.983 931.451L306.983 931.445C306.85 928.211 305.787 924.951 303.901 921.934C302.014 918.917 299.313 916.16 295.93 914.073L295.924 914.069C289.662 910.141 281.544 908.375 273.705 909.664L273.702 909.664C273.098 909.761 272.476 909.88 271.841 910.001C269.898 910.371 267.829 910.765 265.763 910.655C264.874 910.616 264.021 910.463 263.216 910.294C262.943 910.236 262.681 910.178 262.424 910.122C261.896 910.005 261.391 909.894 260.862 909.802L260.85 909.8L260.85 909.8C257.96 909.265 254.913 909.395 251.8 909.536L251.794 909.536L251.794 909.536C248.22 909.676 244.684 909.953 241.521 910.957C237.699 912.225 234.591 914.434 231.921 916.954C230.041 918.755 228.377 920.557 227.258 922.586L225.131 931.54ZM225.131 931.54C225.34 928.349 225.753 925.32 227.258 922.586L225.131 931.54Z"></path>
                    </g>
                    <g className="hRoot hImplant hEmpty" style={{visibility: !tooth48Diagnozis.culttab && !tooth48Diagnozis.abutment && !tooth48Diagnozis.implant && !tooth48Diagnozis.shaper && !tooth48Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M332.9,922.2c-0.1-7-1.9-13.9-5-20.3c0-0.1-0.1-0.1-0.1-0.2
                            c-3.1-6.3-7.4-12-12.8-16.4c-10.1-8.2-23.3-11.6-36.1-9c-4.1,0.9-8.1,2.4-12.2,2.1c-2.6-0.2-5-1.1-7.5-1.6
                            c-4.8-1-9.7-0.8-14.6-0.5c-5.7,0.4-11.4,1-16.6,3.2c-5.8,2.5-10.6,6.8-14.8,11.5c-0.4,0.4-0.7,0.8-1.1,1.3
                            c-3.1,3.7-5.9,7.6-7.8,12c-2.6,6-3.3,12.6-3.7,19.1c-0.3,6.3-0.3,12.6-0.2,18.9c0.2,9.7,0.9,19.6,5.2,28.3c0,0.1,0.1,0.1,0.1,0.2
                            c4.3,8.6,11.8,15.1,20.2,19.8c6,3.3,12.5,5.8,19.2,7.3c8.3,1.9,16.8,2.5,25.2,2.8c11.4,0.3,23.1-0.1,33.1-5.6
                            c5-2.8,9.2-6.6,13.2-10.7c0.6-0.6,1.2-1.2,1.8-1.9c3.2-3.5,6.1-7.2,7.9-11.6c2.8-6.9,2.5-14.3,3.2-21.6
                            C330.4,940.5,333.1,931.4,332.9,922.2z" />
                    </g>
                    {/*TARTAR*/}
                    <g className="tartar hImplant hEmpty" style={{visibility : 'inherit', opacity: teethDiagnozis.tooth48.tartar ? 1 : 0}}>
                        <path className="st61 level2" d="M198.471 922.262C198.132 928.963 199.309 935.817 199.535 942.518C199.72 948.167 198.942 953.907 199.897 959.465C200.694 964.097 202.018 968.603 204.073 972.825C206.149 977.2 206.825 982.356 210.118 985.801C213.819 989.672 221.266 991.712 225.871 994.451C228.455 995.999 231.139 998.636 233.891 999.844C237.64 1001.49 241.514 1001.56 245.426 1002.52C249.357 1003.51 253.312 1005.46 257.292 1005.95C261.895 1006.52 266.529 1006.81 271.197 1006.98C277.031 1007.2 282.951 1004.99 288.671 1004.24C294.365 1003.5 299.862 1004.23 304.88 1001.34C307.638 999.772 311.226 997.845 313.591 995.706C315.588 993.899 318.47 991.94 320.281 989.918C324.237 985.654 325.904 982.339 328.051 976.856C329.262 973.725 329.892 968.064 330.269 964.668L330.29 964.482C330.775 960.127 330.834 955.663 331.216 951.199C331.59 946.667 332.392 942.102 333.099 937.518C333.889 932.397 334.56 927.254 334.381 922.11C334.257 918.016 335.657 913.921 334.617 909.928C333.762 906.642 332.61 903.425 331.182 900.331C329.428 896.534 328.322 891.669 325.773 888.401C323.723 885.772 318.364 883.618 315.844 881.513C311.951 878.206 308.695 875.328 304.131 873.491C300.518 872.037 295.689 871.076 291.862 870.66C287.608 870.196 283.277 869.152 278.996 871.359C274.814 872.273 271.921 872.542 267.626 872.237C265.026 872.085 261.476 873.527 258.876 872.918C254.016 871.699 248.93 870.75 243.956 871.055C238.192 871.359 232.314 871.968 227.002 874.253C223.213 875.954 216.664 879.647 213.644 882.513C211.527 884.521 210.64 887.994 208.824 890.315C205.772 894.275 204.01 897.133 202.088 901.854C200.772 905.241 200.994 908.798 200.444 912.436C199.954 915.669 198.631 918.966 198.471 922.262ZM206.612 941.704C206.412 937.304 206.312 932.804 206.612 928.404C206.912 923.804 207.612 919.204 209.812 915.004C211.512 911.904 214.012 909.204 216.712 906.604C220.612 902.904 225.212 899.604 230.912 897.704C235.612 896.204 240.812 895.804 245.912 895.604C250.312 895.404 254.812 895.204 259.112 896.004C261.412 896.404 263.612 897.104 265.912 897.204C269.712 897.404 273.212 896.404 276.912 895.804C288.412 893.904 300.312 896.504 309.512 902.304C314.512 905.404 318.512 909.504 321.312 914.004C324.112 918.504 325.712 923.404 325.912 928.304C326.212 934.704 323.812 941.104 323.112 947.404C322.512 952.604 322.812 957.804 320.312 962.604C318.412 966.204 315.112 969.204 311.612 972.004C308.112 974.904 304.312 977.604 299.812 979.504C290.912 983.304 280.312 983.504 270.012 983.204C262.312 983.004 254.712 982.504 247.212 981.104C241.212 980.004 235.312 978.204 229.912 975.804C222.212 972.404 215.412 967.704 211.512 961.604C207.512 955.504 206.912 948.504 206.612 941.704Z"></path>
                        <path className="st61 level1 hRoot" d="M198.471 922.262C198.132 928.963 199.309 935.817 199.535 942.518C199.72 948.167 198.942 953.907 199.897 959.465C200.694 964.097 202.018 968.603 204.073 972.825C206.149 977.2 206.825 982.356 210.118 985.801C213.819 989.672 221.266 991.712 225.871 994.451C228.455 995.999 231.139 998.636 233.891 999.844C237.64 1001.49 241.514 1001.56 245.426 1002.52C249.357 1003.51 253.312 1005.46 257.292 1005.95C261.895 1006.52 266.529 1006.81 271.197 1006.98C277.031 1007.2 282.951 1004.99 288.671 1004.24C294.365 1003.5 299.862 1004.23 304.88 1001.34C307.638 999.772 311.226 997.845 313.591 995.706C315.588 993.899 318.47 991.94 320.281 989.918C324.237 985.654 325.904 982.339 328.051 976.856C329.262 973.725 329.892 968.064 330.269 964.668L330.29 964.482C330.775 960.127 330.834 955.663 331.216 951.199C331.59 946.667 332.392 942.102 333.099 937.518C333.889 932.397 334.56 927.254 334.381 922.11C334.257 918.016 335.657 913.921 334.617 909.928C333.762 906.642 332.61 903.425 331.182 900.331C329.428 896.534 328.322 891.669 325.773 888.401C323.723 885.772 318.364 883.618 315.844 881.513C311.951 878.206 308.695 875.328 304.131 873.491C300.518 872.037 295.689 871.076 291.862 870.66C287.608 870.196 283.277 869.152 278.996 871.359C274.814 872.273 271.921 872.542 267.626 872.237C265.026 872.085 261.476 873.527 258.876 872.918C254.016 871.699 248.93 870.75 243.956 871.055C238.192 871.359 232.314 871.968 227.002 874.253C223.213 875.954 216.664 879.647 213.644 882.513C211.527 884.521 210.64 887.994 208.824 890.315C205.772 894.275 204.01 897.133 202.088 901.854C200.772 905.241 200.994 908.798 200.444 912.436C199.954 915.669 198.631 918.966 198.471 922.262ZM206.612 941.704C206.412 937.304 206.312 932.804 206.612 928.404C206.912 923.804 207.612 919.204 209.812 915.004C211.512 911.904 214.012 909.204 216.712 906.604C220.612 902.904 225.212 899.604 230.912 897.704C235.612 896.204 240.812 895.804 245.912 895.604C250.312 895.404 254.812 895.204 259.112 896.004C261.412 896.404 263.612 897.104 265.912 897.204C269.712 897.404 273.212 896.404 276.912 895.804C288.412 893.904 300.312 896.504 309.512 902.304C314.512 905.404 318.512 909.504 321.312 914.004C324.112 918.504 325.712 923.404 325.912 928.304C326.212 934.704 323.812 941.104 323.112 947.404C322.512 952.604 322.812 957.804 320.312 962.604C318.412 966.204 315.112 969.204 311.612 972.004C308.112 974.904 304.312 977.604 299.812 979.504C290.912 983.304 280.312 983.504 270.012 983.204C262.312 983.004 254.712 982.504 247.212 981.104C241.212 980.004 235.312 978.204 229.912 975.804C222.212 972.404 215.412 967.704 211.512 961.604C207.512 955.504 206.912 948.504 206.612 941.704Z" style={{visibility: 'inherit'}}></path>
                        <path className="st61 level1" d="M326.539 959.002C326.994 955.53 327.05 951.971 327.409 948.411C327.761 944.798 328.515 941.157 329.18 937.502C329.922 933.419 330.553 929.318 330.385 925.216C330.268 921.952 329.704 918.687 328.727 915.502C327.923 912.883 326.84 910.317 325.497 907.85C323.848 904.822 322.808 900.943 320.412 898.338C318.484 896.241 315.327 895.321 312.958 893.642C309.298 891.006 306.237 887.913 301.946 886.449C298.55 885.289 294.01 884.523 290.412 884.191C286.412 883.821 282.341 882.989 278.316 884.749C274.384 885.477 271.665 885.692 267.627 885.449C265.183 885.327 261.845 886.477 259.401 885.991C254.832 885.02 250.05 884.263 245.375 884.506C239.955 884.749 234.43 885.234 229.435 887.056C225.874 888.413 219.717 891.357 216.877 893.642C214.887 895.244 214.054 898.013 212.346 899.864C209.477 903.021 207.82 905.3 206.014 909.065C204.776 911.765 204.985 914.602 204.468 917.502C204.007 920.08 202.763 922.709 202.613 925.338C202.295 930.681 203.401 936.146 203.613 941.489C203.787 945.994 203.056 950.57 203.954 955.002C204.703 958.696 206.888 962.288 208.82 965.655C210.772 969.144 211.407 973.255 214.503 976.002C217.982 979.089 224.043 980.715 228.373 982.9C230.801 984.133 233.325 986.236 235.912 987.2C239.437 988.512 243.079 988.566 246.756 989.336C250.452 990.124 254.171 991.678 257.912 992.069C262.239 992.521 266.596 992.756 270.984 992.886C276.469 993.069 282.034 992.099 287.412 991.503C292.765 990.909 297.932 990.695 302.65 988.393C305.243 987.142 308.616 985.606 310.839 983.9C312.717 982.459 314.486 980.898 316.189 979.285C319.908 975.885 322.415 973.242 324.434 968.87C325.572 966.373 326.164 961.859 326.519 959.151M326.539 959.002L326.519 959.151M326.539 959.002C326.532 959.051 326.526 959.101 326.519 959.151M206.614 928.402C206.314 932.802 206.414 937.302 206.614 941.702C206.914 948.502 207.514 955.502 211.514 961.602C215.414 967.702 222.214 972.402 229.914 975.802C235.314 978.202 241.214 980.002 247.214 981.102C254.714 982.502 262.314 983.002 270.014 983.202C280.314 983.502 290.914 983.302 299.814 979.502C304.314 977.602 308.114 974.902 311.614 972.002C315.114 969.202 318.414 966.202 320.314 962.602C322.814 957.802 322.514 952.602 323.114 947.402C323.814 941.102 326.214 934.702 325.914 928.302C325.714 923.402 324.114 918.502 321.314 914.002C318.514 909.502 314.514 905.402 309.514 902.302C300.314 896.502 288.414 893.902 276.914 895.802C273.214 896.402 269.714 897.402 265.914 897.202C263.614 897.102 261.414 896.402 259.114 896.002C254.814 895.202 250.314 895.402 245.914 895.602C240.814 895.802 235.614 896.202 230.914 897.702C225.214 899.602 220.614 902.902 216.714 906.602C214.014 909.202 211.514 911.902 209.814 915.002C207.614 919.202 206.914 923.802 206.614 928.402Z"></path>
                    </g>
                    {/*CARIES/SEAL*/}
                    <g className="header caries-filling" style={{visibility: (!tooth48Diagnozis.culttab && !tooth48Diagnozis.abutment && !tooth48Diagnozis.implant && !tooth48Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        {/*КАРИЕС ЦЕНТР*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                        >
                            <path className="st7" d="M227.1,955.5c2.1,4.3,4.9,7.6,7.9,9.1c0,0,13.2,9.1,27.6,8.2c10.4-0.6,27.1-7.5,36.2-18.8
                                c3.5-4.3,5.8-9.3,6.3-14.9c0.7-8.8-1.2-15.8-5.1-21c-4.9-6.8-12.9-10.7-22.3-11.8c-14.7-1.8-39.3,0.7-49.2,11.9
                                c-1.4,1.6-2.5,3.3-3.2,5.2C221.2,934,222.8,946.8,227.1,955.5z" />
                            <path className={
                                    `st8 caries-center
                                    ${'caries-stroke'}
                                    ${teethDiagnozis.tooth48.caries_center ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth48.seal_center ? `seal-fill ${teethDiagnozis.tooth48.seal_center_color}` : ''}
                                `} 
                                d="M227.1,955.5c2.1,4.3,4.9,7.6,7.9,9.1c0,0,13.2,9.1,27.6,8.2c10.4-0.6,27.1-7.5,36.2-18.8
                                c3.5-4.3,5.8-9.3,6.3-14.9c0.7-8.8-1.2-15.8-5.1-21c-4.9-6.8-12.9-10.7-22.3-11.8c-14.7-1.8-39.3,0.7-49.2,11.9
                                c-1.4,1.6-2.5,3.3-3.2,5.2C221.2,934,222.8,946.8,227.1,955.5z" 
                            />
                        </g>
                        {/*КАРИЕС ПРАВО*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st7" d="M298.8,954c3.7,3.7,12.5,13.6,19.6,28.6c3.2-3.5,6.1-7.2,7.9-11.6c2.8-6.9,2.5-14.3,3.2-21.6
                                c0.9-9,3.5-18,3.3-27.2c-0.1-7-1.9-13.9-5-20.3c0-0.1-0.1-0.1-0.1-0.2c-6.8,5.5-16.2,11.8-27.8,16.3c3.8,5.3,5.8,12.3,5.1,21
                                C304.6,944.7,302.3,949.6,298.8,954z" 
                            />
                            <path className={
                                    `st8 caries-center
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth48.caries_right ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth48.seal_right ? `seal-fill ${teethDiagnozis.tooth48.seal_right_color}` : ''}
                                `} 
                                d="M298.8,954c3.7,3.7,12.5,13.6,19.6,28.6c3.2-3.5,6.1-7.2,7.9-11.6c2.8-6.9,2.5-14.3,3.2-21.6
                                c0.9-9,3.5-18,3.3-27.2c-0.1-7-1.9-13.9-5-20.3c0-0.1-0.1-0.1-0.1-0.2c-6.8,5.5-16.2,11.8-27.8,16.3c3.8,5.3,5.8,12.3,5.1,21
                                C304.6,944.7,302.3,949.6,298.8,954z" 
                            />
                        </g>
                        {/*КАРИЕС НИЗ*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'bottom');
                            }}
                        >
                            <path className="st7" d="M213.1,891.2c5.6,7.6,11.6,17.1,15.3,27c9.9-11.3,34.5-13.8,49.2-11.9c9.4,1.2,17.4,5.1,22.3,11.8
                                c11.6-4.5,21-10.8,27.8-16.3c-3.1-6.3-7.4-12-12.8-16.4c-10.1-8.2-23.3-11.6-36.1-9c-4.1,0.9-8.1,2.4-12.2,2.1
                                c-2.6-0.2-5-1.1-7.5-1.6c-4.8-1-9.7-0.8-14.6-0.5c-5.7,0.4-11.4,1-16.6,3.2C222.1,882.1,217.3,886.4,213.1,891.2z"
                            />
                            <path className={
                                    `st8 caries-center
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth48.caries_bottom ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth48.seal_bottom ? `seal-fill ${teethDiagnozis.tooth48.seal_bottom_color}` : ''}
                                `} 
                                d="M213.1,891.2c5.6,7.6,11.6,17.1,15.3,27c9.9-11.3,34.5-13.8,49.2-11.9c9.4,1.2,17.4,5.1,22.3,11.8
                                c11.6-4.5,21-10.8,27.8-16.3c-3.1-6.3-7.4-12-12.8-16.4c-10.1-8.2-23.3-11.6-36.1-9c-4.1,0.9-8.1,2.4-12.2,2.1
                                c-2.6-0.2-5-1.1-7.5-1.6c-4.8-1-9.7-0.8-14.6-0.5c-5.7,0.4-11.4,1-16.6,3.2C222.1,882.1,217.3,886.4,213.1,891.2z" 
                            />
                        </g>
                        {/*КАРИЕС LEFT*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                        >
                            <path className="st7" d="M200.4,942.5c0.2,9.7,0.9,19.6,5.2,28.3c0,0.1,0.1,0.1,0.1,0.2c7.8-7.8,16.9-13.1,21.4-15.5
                                c-4.3-8.7-5.9-21.5-1.8-32.1c0.7-1.9,1.8-3.7,3.2-5.2c-3.7-9.9-9.7-19.4-15.3-27c-0.4,0.4-0.7,0.8-1.1,1.3
                                c-3.1,3.7-5.9,7.6-7.8,12c-2.6,6-3.3,12.6-3.7,19.1C200.2,929.9,200.2,936.2,200.4,942.5z" 
                            />
                            <path className={
                                    `st8 caries-left
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth48.caries_left ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth48.seal_left ? `seal-fill ${teethDiagnozis.tooth48.seal_left_color}` : ''}
                                `} 
                                d="M200.4,942.5c0.2,9.7,0.9,19.6,5.2,28.3c0,0.1,0.1,0.1,0.1,0.2c7.8-7.8,16.9-13.1,21.4-15.5
                                c-4.3-8.7-5.9-21.5-1.8-32.1c0.7-1.9,1.8-3.7,3.2-5.2c-3.7-9.9-9.7-19.4-15.3-27c-0.4,0.4-0.7,0.8-1.1,1.3
                                c-3.1,3.7-5.9,7.6-7.8,12c-2.6,6-3.3,12.6-3.7,19.1C200.2,929.9,200.2,936.2,200.4,942.5z"
                            />
                        </g>
                        {/*КАРИЕС ВЕРХ*/}
                        <g
                            onClick={() => {
                                setColordedPart(diagnozis, 'top');
                            }}
                            className="caries-filling"
                        >
                            <path className="st7" d="M205.7,971c4.3,8.6,11.8,15.1,20.2,19.8c6,3.3,12.5,5.8,19.2,7.3c8.3,1.9,16.7,2.5,25.2,2.8
                                c11.4,0.3,23.1-0.1,33.1-5.6c5-2.8,9.2-6.6,13.2-10.7c0.6-0.6,1.2-1.2,1.8-1.9c-7.1-15-15.9-24.9-19.6-28.6
                                c-9,11.3-25.7,18.2-36.2,18.8c-14.4,0.9-27.6-8.2-27.6-8.2c-3.1-1.6-5.8-4.9-7.9-9.1C222.5,957.8,213.4,963.1,205.7,971z"
                            />
                            <path className={
                                    `st8 caries-center
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth48.caries_top ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth48.seal_top ? `seal-fill ${teethDiagnozis.tooth48.seal_top_color}` : ''}
                                `} 
                                d="M205.7,971c4.3,8.6,11.8,15.1,20.2,19.8c6,3.3,12.5,5.8,19.2,7.3c8.3,1.9,16.7,2.5,25.2,2.8
                                c11.4,0.3,23.1-0.1,33.1-5.6c5-2.8,9.2-6.6,13.2-10.7c0.6-0.6,1.2-1.2,1.8-1.9c-7.1-15-15.9-24.9-19.6-28.6
                                c-9,11.3-25.7,18.2-36.2,18.8c-14.4,0.9-27.6-8.2-27.6-8.2c-3.1-1.6-5.8-4.9-7.9-9.1C222.5,957.8,213.4,963.1,205.7,971z" 
                            />
                        </g>
                        <g className="with">
                            {/*Черточка низ лево*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth48Diagnozis.seal_left && !tooth48Diagnozis.seal_top) ||
                                        (!tooth48Diagnozis.seal_left && tooth48Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M227 956C223.5 957.667 215.1 962.3 209.5 967.5"
                            />
                            {/*Овал лево*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth48Diagnozis.seal_left && !tooth48Diagnozis.seal_center) ||
                                        (!tooth48Diagnozis.seal_left && tooth48Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M227 956C223 948.5 220.5 930.1 228.5 918.5" 
                            />
                            {/*Черточка верх лево*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth48Diagnozis.seal_left && !tooth48Diagnozis.seal_bottom) ||
                                        (!tooth48Diagnozis.seal_left && tooth48Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }} 
                                d="M228.5 918.5C228.167 914.833 225.3 905.2 216.5 896"
                            />
                            {/*Овал черточка верх*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth48Diagnozis.seal_center && !tooth48Diagnozis.seal_bottom) ||
                                        (!tooth48Diagnozis.seal_center && tooth48Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }} 
                                d="M228.5 918.5C232.5 910 284 902.9 300 918.5" 
                            />
                            {/*Черточка верх право*/}
                            <path className="st54 l2" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth48Diagnozis.seal_right && !tooth48Diagnozis.seal_bottom) ||
                                        (!tooth48Diagnozis.seal_right && tooth48Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }} 
                                d="M300 918.5C303.5 918 313.1 914.6 323.5 905"
                            />
                            {/*Овал черточка право*/}
                            <path className="st54 l3" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (!tooth48Diagnozis.seal_right && tooth48Diagnozis.seal_center) ||
                                        (tooth48Diagnozis.seal_right && !tooth48Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M300 918.5C304 927 303.7 943.6 298.5 954"
                            />
                            {/*Черточка низ право*/}
                            <path className="st54 l4" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth48Diagnozis.seal_right && !tooth48Diagnozis.seal_top) ||
                                        (!tooth48Diagnozis.seal_right && tooth48Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M298.5 954C301.5 956.5 309.2 964.7 316 977.5" 
                            />
                            {/*Овал черточка низ*/}
                            <path className="st54 l5" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (!tooth48Diagnozis.seal_center && tooth48Diagnozis.seal_top) ||
                                        (tooth48Diagnozis.seal_center && !tooth48Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }}  
                                d="M299 954C289.833 966.475 262.6 984.253 227 955.559" 
                            />
                        </g>
                    </g>
                    {/*VINIR*/}
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir"
                            style={
                                {
                                    visibility: tooth48Diagnozis.vinir ? 'inherit' : 'hidden',
                                    opacity: tooth48Diagnozis.vinir ? 1 : 0
                                }}
                        >
                            <path className={`vinir-fill ${tooth48Diagnozis.vinir_color}`}
                                d="M326.403 971.201C324.603 975.601 321.703 979.301 318.503 982.801C317.903 983.401 317.303 984.101 316.703 984.701C312.703 988.801 308.503 992.701 303.503 995.401C293.503 1000.9 281.803 1001.3 270.403 1001C261.903 1000.8 253.403 1000.2 245.203 998.201C238.503 996.601 232.003 994.201 226.003 990.901C217.603 986.201 210.203 979.701 205.803 971.101C205.803 971.001 205.703 971.001 205.703 970.901C202.79 965.006 201.575 958.561 201.001 952C204.127 952.486 210.688 954.466 211.921 958.5C212.55 961.175 213.425 963.779 214.655 
                                966.269C214.655 966.354 214.74 966.354 214.74 966.439C218.491 973.773 224.8 979.317 231.961 983.325C237.076 986.139 242.617 988.186 248.329 989.55C255.32 991.256 262.566 991.767 269.812 991.938C279.531 992.194 289.505 991.853 298.03 987.162C302.293 984.86 305.873 981.534 309.283 978.037C309.795 977.526 310.306 976.929 310.818 976.417C312.527 974.547 314.136 972.609 315.477 970.5C316.976 967.3 324.269 966.882 327.728 967.073C327.385 
                                968.465 326.954 969.843 326.403 971.201Z"
                            />
                        </g>
                    </g>
                    {/* ТИМЧАСОВА КОРОНКА/КЕРАМІЧНА КОРОНКА */}
                    <g className="crown" style={{
                        visibility: (tooth48Diagnozis.temporary_crown || tooth48Diagnozis.ceramic_crown || tooth48Diagnozis.mceramic_crown || tooth48Diagnozis.metalic_crown || tooth48Diagnozis.zirconia_crown) ? 'inherit' : 'hidden',
                        opacity: (tooth48Diagnozis.temporary_crown || tooth48Diagnozis.ceramic_crown || tooth48Diagnozis.mceramic_crown || tooth48Diagnozis.metalic_crown || tooth48Diagnozis.zirconia_crown)  ? 1 : 0
                    }}>
                        <path className={
                                `st46 target temporary-crown crown-fill ${diagnozis}
                                ${tooth48Diagnozis.ceramic_crown_color}
                                ${tooth48Diagnozis.mceramic_crown_color}
                                ${tooth48Diagnozis.metalic_crown_color}
                                ${tooth48Diagnozis.zirconia_crown_color}
                            `}
                            d="M332.9,922.2c-0.1-7-1.9-13.9-5-20.3c0-0.1-0.1-0.1-0.1-0.2
                            c-3.1-6.3-7.4-12-12.8-16.4c-10.1-8.2-23.3-11.6-36.1-9c-4.1,0.9-8.1,2.4-12.2,2.1c-2.6-0.2-5-1.1-7.5-1.6
                            c-4.8-1-9.7-0.8-14.6-0.5c-5.7,0.4-11.4,1-16.6,3.2c-5.8,2.5-10.6,6.8-14.8,11.5c-0.4,0.4-0.7,0.8-1.1,1.3
                            c-3.1,3.7-5.9,7.6-7.8,12c-2.6,6-3.3,12.6-3.7,19.1c-0.3,6.3-0.3,12.6-0.2,18.9c0.2,9.7,0.9,19.6,5.2,28.3c0,0.1,0.1,0.1,0.1,0.2
                            c4.3,8.6,11.8,15.1,20.2,19.8c6,3.3,12.5,5.8,19.2,7.3c8.3,1.9,16.8,2.5,25.2,2.8c11.4,0.3,23.1-0.1,33.1-5.6
                            c5-2.8,9.2-6.6,13.2-10.7c0.6-0.6,1.2-1.2,1.8-1.9c3.2-3.5,6.1-7.2,7.9-11.6c2.8-6.9,2.5-14.3,3.2-21.6
                            C330.4,940.5,333.1,931.4,332.9,922.2z"
                        />
                        {/*FISSURE*/}
                        <path className={`st3 fissure ${tooth48Diagnozis.fissure ? 'diagnoze' : tooth48Diagnozis.fissure ? 'hidden' : ''}`} 
                            d="M298.2,939.4c-1.4-2.6-3.5-4.7-6.1-6.2c-2.1-1.2-4.5-1.8-6.8-2.2c0.4-1,0.8-2.1,1-3.2
                            c0.2-0.8,0.3-1.6,0.4-2.5c0.1-0.7,0.2-1.4,0.3-2c0.3-1.7,0.8-3.6,2.4-5.4c1.6-1.8,3.5-3.8,6.5-5l-0.4-1c-3.2,1.3-5.3,3.4-6.9,5.3
                            c-1.7,2-2.3,4-2.6,5.9c-0.1,0.7-0.2,1.4-0.3,2.1c-0.1,0.8-0.2,1.6-0.4,2.4c-0.2,1.1-0.6,2.2-1.1,3.3c-2.2-0.2-4.4-0.3-6.5-0.3
                            c-0.9,0-1.7,0-2.5-0.1c-3.6-0.1-7.1-0.5-10.7-1.1c0-1.6,0-3-0.1-4.3c0-0.9-0.1-1.7-0.1-2.6c-0.2-4.9-0.5-10,0.6-14.8
                            c0.7-3.2,2-6.2,3.7-9l-0.9-0.6c-1.8,2.9-3.1,6-3.9,9.3c-1.1,5-0.9,10.1-0.6,15.1c0,0.9,0.1,1.7,0.1,2.5c0.1,1.2,0.1,2.7,0.1,4.2
                            c-4.3,0.2-8.6,1-12.7,2.4c-0.9,0.3-1.7,0.6-2.6,1c-4,1.5-8.1,3.1-12.1,1.9c-2.3-0.7-4.5-2.2-6.6-4.6c-2.2-2.6-3.9-5.5-4.9-8.7
                            l-1,0.3c1.1,3.4,2.8,6.4,5.1,9.1c2.3,2.6,4.6,4.2,7.1,4.9c4.4,1.3,8.7-0.4,12.8-1.9c0.9-0.3,1.7-0.7,2.6-0.9
                            c4-1.4,8.2-2.2,12.3-2.4c0,1.2-0.1,2.5-0.2,3.8c-0.2,2.1-0.5,4.2-0.8,6.3l-0.2,1.2c-0.2,1.5-0.4,3-0.6,4.5
                            c-2.4-0.2-4.7,0.3-6.8,1.5c-2.4,1.4-4.2,3.6-5.1,6.3l1,0.3c0.8-2.4,2.4-4.4,4.6-5.7c1.9-1.1,4-1.6,6.1-1.4c-0.2,2.2-0.2,4.4,0,6.6
                            c0.1,0.8,0.2,1.6,0.4,2.4c0.3,1.9,0.6,3.7,0.4,5.6c-0.3,2.9-1.9,5.5-4.3,7.1l0.6,0.9c2.7-1.8,4.4-4.7,4.8-7.9c0.2-2-0.1-4-0.4-5.9
                            c-0.1-0.8-0.3-1.6-0.3-2.3c-0.5-4,0.1-8,0.6-11.9l0.2-1.2c0.3-2.1,0.6-4.2,0.8-6.4c0.1-1.3,0.2-2.6,0.2-3.9
                            c3.5,0.6,7.1,1,10.7,1.1c0.8,0,1.7,0,2.6,0.1c2,0,4.1,0.1,6.1,0.3c-0.8,1.7-1.9,3.4-2.9,5c-1.7,2.6-3.5,5.1-5.4,7.6l0.9,0.6
                            c1.9-2.5,3.7-5.1,5.4-7.7c1.1-1.7,2.3-3.5,3.2-5.4c2.4,0.3,4.7,0.9,6.8,2.1c2.4,1.3,4.4,3.3,5.6,5.7c1.1,2.1,1.6,4.5,1.5,6.9
                            l1.1,0.1C299.9,944.3,299.4,941.7,298.2,939.4z" />
                    </g>
                    {/*FISSURES*/}
                    <g className="fissures hEmpty hRoot hImplant" style={{visibility: (!tooth48Diagnozis.culttab && !tooth48Diagnozis.abutment && !tooth48Diagnozis.implant && !tooth48Diagnozis.apex && !tooth48Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className={`st3 fissure ${tooth48Diagnozis.fissure ? 'diagnoze' : ''}`} 
                            d="M298.2,939.4c-1.4-2.6-3.5-4.7-6.1-6.2c-2.1-1.2-4.5-1.8-6.8-2.2c0.4-1,0.8-2.1,1-3.2
                            c0.2-0.8,0.3-1.6,0.4-2.5c0.1-0.7,0.2-1.4,0.3-2c0.3-1.7,0.8-3.6,2.4-5.4c1.6-1.8,3.5-3.8,6.5-5l-0.4-1c-3.2,1.3-5.3,3.4-6.9,5.3
                            c-1.7,2-2.3,4-2.6,5.9c-0.1,0.7-0.2,1.4-0.3,2.1c-0.1,0.8-0.2,1.6-0.4,2.4c-0.2,1.1-0.6,2.2-1.1,3.3c-2.2-0.2-4.4-0.3-6.5-0.3
                            c-0.9,0-1.7,0-2.5-0.1c-3.6-0.1-7.1-0.5-10.7-1.1c0-1.6,0-3-0.1-4.3c0-0.9-0.1-1.7-0.1-2.6c-0.2-4.9-0.5-10,0.6-14.8
                            c0.7-3.2,2-6.2,3.7-9l-0.9-0.6c-1.8,2.9-3.1,6-3.9,9.3c-1.1,5-0.9,10.1-0.6,15.1c0,0.9,0.1,1.7,0.1,2.5c0.1,1.2,0.1,2.7,0.1,4.2
                            c-4.3,0.2-8.6,1-12.7,2.4c-0.9,0.3-1.7,0.6-2.6,1c-4,1.5-8.1,3.1-12.1,1.9c-2.3-0.7-4.5-2.2-6.6-4.6c-2.2-2.6-3.9-5.5-4.9-8.7
                            l-1,0.3c1.1,3.4,2.8,6.4,5.1,9.1c2.3,2.6,4.6,4.2,7.1,4.9c4.4,1.3,8.7-0.4,12.8-1.9c0.9-0.3,1.7-0.7,2.6-0.9
                            c4-1.4,8.2-2.2,12.3-2.4c0,1.2-0.1,2.5-0.2,3.8c-0.2,2.1-0.5,4.2-0.8,6.3l-0.2,1.2c-0.2,1.5-0.4,3-0.6,4.5
                            c-2.4-0.2-4.7,0.3-6.8,1.5c-2.4,1.4-4.2,3.6-5.1,6.3l1,0.3c0.8-2.4,2.4-4.4,4.6-5.7c1.9-1.1,4-1.6,6.1-1.4c-0.2,2.2-0.2,4.4,0,6.6
                            c0.1,0.8,0.2,1.6,0.4,2.4c0.3,1.9,0.6,3.7,0.4,5.6c-0.3,2.9-1.9,5.5-4.3,7.1l0.6,0.9c2.7-1.8,4.4-4.7,4.8-7.9c0.2-2-0.1-4-0.4-5.9
                            c-0.1-0.8-0.3-1.6-0.3-2.3c-0.5-4,0.1-8,0.6-11.9l0.2-1.2c0.3-2.1,0.6-4.2,0.8-6.4c0.1-1.3,0.2-2.6,0.2-3.9
                            c3.5,0.6,7.1,1,10.7,1.1c0.8,0,1.7,0,2.6,0.1c2,0,4.1,0.1,6.1,0.3c-0.8,1.7-1.9,3.4-2.9,5c-1.7,2.6-3.5,5.1-5.4,7.6l0.9,0.6
                            c1.9-2.5,3.7-5.1,5.4-7.7c1.1-1.7,2.3-3.5,3.2-5.4c2.4,0.3,4.7,0.9,6.8,2.1c2.4,1.3,4.4,3.3,5.6,5.7c1.1,2.1,1.6,4.5,1.5,6.9
                            l1.1,0.1C299.9,944.3,299.4,941.7,298.2,939.4z"
                        />
                    </g>
                </g>
                <g id="T_48" className="common-view" style={{visibility: tooth48Diagnozis.absent ? 'hidden' : 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <g className="dentin">
                        <g id="dentin_v_48" className="hRoot hImplant hEmpty" style={{visibility: !tooth48Diagnozis.implant && !tooth48Diagnozis.apex && !tooth48Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st9 change-color ${tooth48Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M319.6,1097.3c-0.5,8.3-1.4,18.6-2.8,26.8c-1.3,1.3-2.5,2.5-3.6,3.8
                                c-0.9,0.8-1.8,1.5-2.7,2.3c-12.3,2.1-24.9,2.4-37.2,0.8c-2.2-0.3-4.3-0.6-6.4-1c-10.9-1.9-21.6-5.3-31.2-10.6
                                c-2.4-1.3-4.8-2.8-7.1-4.4c-10-6.9-18.3-16-24.2-26.6c3.7-5.8,9.6-16.8,14.1-21.8c4.5-5,9.5-9.7,14.8-14c5,5,10.4,9.6,16.1,13.8
                                c5.8,4.3,12,8.2,18.4,11.7c8.7,0.2,17.4-0.1,26-0.6c8.7-0.6,17.4-1.5,26-2.8C320.2,1082.3,320.1,1089.8,319.6,1097.3z" 
                            />
                        </g>
                        <g id="dentin_n_48" className="hImplant hEmpty" style={{visibility: !tooth48Diagnozis.culttab && !tooth48Diagnozis.abutment && !tooth48Diagnozis.implant && !tooth48Diagnozis.shaper && !tooth48Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                            <path id="dentin_n_48" className={`st10 change-color ${tooth48Diagnozis.change_color ? 'diagnoze' : ''}`}
                                d="M313.3,1127.8c-6.3,6.9-10.3,13.6-14.3,22.5c-2.7,5.9-6.7,12-9.2,18
                                c-3.7,8.9-8.3,17.6-15.1,24.8c-3.4,3.6-7.3,6.8-11.3,9.8c-3.5,2.6-7.4,4.9-11.4,6.3c-2.9,1-6.1,1.4-9,1.9c-2.8,0.5-5.6,1-8.1-0.7
                                c-1.1-0.7-1.8-1.8-2.2-3c0-0.1-0.1-0.2-0.1-0.2c-0.2-0.5-0.2-1-0.3-1.5c-0.2-3,1.3-5.9,2.8-8.6c3.9-7.1,8.1-14.1,10.9-21.7
                                c2.1-5.7,3.5-11.5,4.1-17.5c0.4-3.6-0.1-7.5-3.6-8.7c-2.9-1-5.8,0.8-7.7,3.2c-3.7,4.6-4.7,10.4-6,16c-1.5,6.7-3.7,13.4-3.3,20.2
                                c0.4,6,2.7,11.9,0.9,17.7c-0.5,1.7-1.5,3.4-3.3,4.1c-2.7,1.1-5.6-0.4-7.8-2.3c-10.1-8.8-11.4-22.3-12-35.2
                                c-1.4-30.1-3.8-54.2-3.3-84.3c0.1-0.1,0.2-0.2,0.2-0.4c5.9,10.6,14.2,19.7,24.2,26.6c2.3,1.6,4.7,3,7.1,4.4
                                c9.7,5.3,20.3,8.7,31.2,10.6c2.1,0.4,4.3,0.7,6.4,1c12.4,1.6,24.9,1.3,37.2-0.8C311.5,1129.4,312.4,1128.6,313.3,1127.8z"
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g className="hEmpty hRoot hImplant pulpitis-pfilling" style={{visibility: 'inherit'}}>
                            <path className={`st22 target top ${tooth48Diagnozis.channel_class} ${tooth48Diagnozis.channel_class} ${tooth48Diagnozis.pulpit ? 'pulpit' : ''} ${tooth48Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M281,1106c-0.5,3.8-1.3,7.6-2.6,11.3c-1.4,4-3.2,7.8-4.5,11.8
                                c-0.2,0.7-0.4,1.3-0.6,2c-0.5-0.1-1.1-0.1-1.6-0.2c-0.8-0.1-1.6-0.2-2.3-0.3c-0.8-0.1-1.5-0.2-2.3-0.4c-0.1,0-0.2,0-0.2,0
                                c-0.7-0.1-1.4-0.2-2.1-0.4c-0.6-0.1-1.2-0.2-1.9-0.4c-0.1,0-0.2,0-0.3-0.1c-0.5-0.1-1-0.2-1.5-0.3c-1.5-0.3-3-0.7-4.5-1.1
                                c0,0,0,0,0,0c-0.8-0.2-1.7-0.5-2.5-0.7c-0.7-0.2-1.3-0.4-2-0.6c-0.3-0.1-0.6-0.2-0.9-0.3c-0.7-0.2-1.3-0.5-2-0.7
                                c-0.8-0.3-1.6-0.6-2.4-0.9c-0.7-0.3-1.3-0.5-2-0.8c-0.6-0.2-1.2-0.5-1.8-0.8c-0.6-0.2-1.1-0.5-1.7-0.8c-1.9-0.9-3.8-1.8-5.7-2.9
                                c1.2-3.8,1.8-7.7,2.7-11.6c1-4.3,2.3-8.6,4.1-12.7c3.8,5.3,9.9,9.6,17,11.7C267.1,1109.1,275.1,1108.7,281,1106z"
                            />
                        </g>
                        <g className="hEmpty hImplant pulpitis-pfilling"  style={{visibility: 'inherit'}}>
                            <path className={`st22 target top ${tooth48Diagnozis.channel_class} ${tooth48Diagnozis.channel_class} ${tooth48Diagnozis.pulpit ? 'pulpit' : ''} ${tooth48Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M217,1154c0.9,0.4,1.8,0.7,2.7,1.1c2.5-7.6,6.8-14.4,13.9-19.1
                                c4.4-2.9,9.4-4.7,15.2-3.4c8.2,1.8,13.2,8.7,15,15.7c1.4,5.3,1.8,10.7,1.2,15.9c1.3,0,2.6-0.1,3.8-0.1c2-11,1.5-22.5,4.5-33.2
                                c-0.4-0.1-0.8-0.1-1.2-0.2c-0.7-0.1-1.4-0.2-2-0.3c-0.2,0-0.3,0-0.5-0.1c-0.9-0.1-1.8-0.3-2.8-0.4c-0.7-0.1-1.4-0.2-2.1-0.4
                                c-0.6-0.1-1.2-0.2-1.8-0.3c-0.1,0-0.3-0.1-0.4-0.1c-0.6-0.1-1.2-0.3-1.8-0.4c-1.6-0.3-3.1-0.7-4.7-1.1c-0.6-0.2-1.2-0.3-1.8-0.5
                                c-0.7-0.2-1.4-0.4-2-0.6c-0.4-0.1-0.7-0.2-1.1-0.3c-0.6-0.2-1.2-0.4-1.7-0.6c-1.6-0.5-3.1-1.1-4.6-1.7c-0.6-0.2-1.2-0.5-1.7-0.7
                                c-0.2-0.1-0.3-0.2-0.5-0.2c-0.5-0.2-1-0.5-1.6-0.7c-0.5-0.2-1-0.5-1.5-0.7c-0.3-0.1-0.6-0.3-0.9-0.4c-0.5-0.2-0.9-0.4-1.4-0.7
                                c-0.6-0.3-1.2-0.6-1.8-1c-0.1,0.4-0.3,0.8-0.4,1.3c-3.1,8.3-9.7,15-14,22.9C219.4,1146.9,218,1150.4,217,1154z"
                            />
                        </g>
                        <g className="hEmpty hImplant pulpitis-pfilling"  style={{visibility: 'inherit'}}>
                            <path className={`st22 target top ${tooth48Diagnozis.channel_class} ${tooth48Diagnozis.channel_class} ${tooth48Diagnozis.pulpit ? 'pulpit' : ''} ${tooth48Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M260.6,1179.4c2.2-4.8,3.7-9.9,4.3-15.1c1.3,0,2.6-0.1,3.8-0.1c-0.2,0.9-0.4,1.8-0.6,2.8
                                c-1.9,8.5-5.6,16.5-11.3,23.5c-6.1,7.4-14.4,13.2-24.3,17.1c-0.8,0.3-1.6,0.6-2.4,0.9c0.8-0.4,1.6-0.8,2.3-1.1
                                C245.3,1200.8,255.1,1191.1,260.6,1179.4z"
                            />
                            <path className={`st22 target top ${tooth48Diagnozis.channel_class} ${tooth48Diagnozis.channel_class} ${tooth48Diagnozis.pulpit ? 'pulpit' : ''} ${tooth48Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M217,1154c0.9,0.4,1.8,0.7,2.7,1.1c-1.1,3.5-1.8,7.1-2.2,10.7c-1.6,14.4,1.2,29.4,8.1,43.3
                                c-5.6-10-9-20.5-10.2-31C214.4,1170,214.8,1161.8,217,1154z" 
                            />
                        </g>
                        <PeriodontitStage48 />
                        {/* <g className="level hEmpty hImplant periodontitis"    style={{visibility: 'inherit', opacity: 0}}>
                            <circle className="st42" cx="227" cy="1211.7" r="8.2"></circle>
                        </g>
                        <g className="level hEmpty hImplant periodontitis"    style={{visibility: 'inherit', opacity: 0}}>
                            <circle className="st42" cx="226.4" cy="1218.3" r="17.5"></circle>
                        </g>
                        <g className="level hEmpty hImplant periodontitis"    style={{visibility: 'inherit', opacity: 0}}>
                            <circle className="st42" cx="223" cy="1229.6" r="30"></circle>
                        </g> */}
                    </g>
                    {/*PIN*/}
                    <g className="pin hEmpty hImplant" style={{
                        visibility: 'inherit', opacity: tooth48Diagnozis.pin ? 1 : 0
                    }}>
                        <path className="st56 hIntact" d="M205.5 1088.4C210.2 1098.5 217.8 1106.7 226.6 1113.5C227.2 1114 227.9 1114.5 228.6 1115C230.9 1116.6 233.2 1118.1 235.6 1119.5C236.8 1120.2 237.9 1120.8 239.1 1121.4C247.8 1125.7 257.2 1128.4 266.8 1130.1C268.9 1130.5 271.1 1130.8 273.3 1131C285.7 1132.5 298.2 1132.2 310.5 1130.2C311.1 1129.7 311.7 1129.3 312.2 1128.8C313.6 1127.4 315 1126 316.5 1124.5C317.9 1116.3 319.1 1105.7 319.6 1097.4C320 1089.9 
                            320.1 1082.3 319.8 1074.8C311.2 1076.1 302.5 1077 293.8 1077.6C285.1 1078.2 276.5 1078.4 267.8 1078.2C261.3 1074.7 255.2 1070.8 249.4 1066.5C243.7 1062.3 238.3 1057.7 233.3 1052.7C228 1057 223 1061.7 218.5 1066.7C213.9 1071.8 209.8 1077.2 206.1 1082.9C206.1 1084.5 205.5 1086.8 205.5 1088.4Z"
                            style={{visibility: 'hidden'}}
                        />
                        <path className="st57" d="M263.2 1075.5L239.3 1121.2L224.8 1148.9L219 1160.1C218.5 1161.1 217.2 1161.3 216.5 1160.5C216.1 1160.1 215.9 1159.5 216.1 1159L247.2 1064.7C247.9 1065.2 248.5 1065.7 249.2 1066.2C249.3 1066.3 249.4 1066.3 249.5 1066.4C250.2 1066.9 251 1067.5 251.7
                            1068C252.4 1068.5 253.1 1069 253.8 1069.4C253.9 1069.5 254 1069.5 254.1 1069.6C254.8 1070.1 255.5 1070.6 256.3 1071.1C256.3 1071.1 256.4 1071.1 256.4 1071.2C257.1 1071.7 257.9 1072.1 258.6 1072.6C259.4 1073.1 260.1 1073.6 260.9 1074C261.7 1074.5 262.5 1075 263.3 1075.4C263.1 
                            1075.5 263.2 1075.5 263.2 1075.5Z"
                            style={{fill: tooth48Diagnozis.pin ? '#dbd9d3' : 'none'}}  
                        />
                    </g>
                    {/* CULT TAB */}
                    <g className="stump hEmpty hIntact hImplant" style={{visibility: tooth48Diagnozis.culttab ? 'inherit' : 'hidden', opacity: tooth48Diagnozis.culttab ? 1 : 0}}>
                        <path className="st14" d="M216.4,1160.5L216.4,1160.5c0.8,0.8,2.1,0.6,2.6-0.4l20.2-38.8c-1.2-0.6-2.4-1.2-3.5-1.9
                            c-2.4-1.4-4.8-2.8-7-4.5c-0.7-0.5-1.3-1-2-1.5L216,1159C215.9,1159.6,216,1160.1,216.4,1160.5z"
                        />
                        <path className="st15" d="M205.5,1088.4c4.7,10.1,12.3,18.3,21.1,25.1c0.6,0.5,1.3,1,2,1.5c2.3,1.6,4.6,3.1,7,4.5
                            c1.2,0.7,2.3,1.3,3.5,1.9c8.7,4.3,18.1,7,27.7,8.7c2.1,0.4,4.3,0.7,6.5,0.9c12.4,1.5,24.9,1.2,37.2-0.8c0.6-0.5,1.2-0.9,1.7-1.4
                            c1.4-1.4,2.8-2.8,4.3-4.3c1.4-8.2,2.6-18.8,3.1-27.1c0.4-7.5,0.5-15.1,0.2-22.6c-8.6,1.3-17.3,2.2-26,2.8
                            c-8.7,0.6-17.3,0.8-26,0.6c-6.5-3.5-12.6-7.4-18.4-11.7c-5.7-4.2-11.1-8.8-16.1-13.8c-5.3,4.3-10.3,9-14.8,14
                            c-4.6,5.1-8.7,10.5-12.4,16.2C206.1,1084.5,205.5,1086.8,205.5,1088.4z"
                        />
                    </g>
                    <g className="abutment hEmpty hIntact hRoot" style={{visibility: tooth48Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth48Diagnozis.abutment ? 1 : 0}}>
                        <path className="st16" d="M310.2,1130.1l-50.2,14.9l-31.6-14.4l-24.4-42.2c5.9,10.6,14.2,19.7,24.2,26.5c11.4,7.9,24.7,12.6,38.3,15
                            C281,1132.6,295.8,1132.6,310.2,1130.1z"
                        />
                        <path className="st17" d="M319.3,1097.3c-0.5,8.3-1.4,18.6-2.8,26.8c-1.3,1.3-2.5,2.5-3.6,3.8c-0.9,0.8-1.8,1.6-2.7,2.3
                            c-14.5,2.5-29.2,2.5-43.7-0.1c-13.7-2.4-26.9-7.1-38.3-15c-10-6.9-18.3-16-24.2-26.5c3.7-5.8,9.7-16.8,14.1-21.8
                            c4.5-5,9.5-9.7,14.8-14c5,5,10.4,9.6,16.1,13.8c5.8,4.3,12,8.2,18.4,11.7c8.7,0.1,17.4-0.1,26-0.6c8.7-0.6,17.4-1.5,26-2.8
                            C319.8,1082.3,319.7,1089.8,319.3,1097.3z"
                        />
                    </g>
                    {/* ФОРМУВАЧ */}
                    <g className="shaper hEmpty hIntact hRoot" style={{visibility: 'inherit', opacity: 0}} >
                        <path className="st44" d="M234.447 1090.01C235.043 1087.6 237.667 1086.31 239.94 1087.31L285.021 1107.14C287.292 1108.13 288.115 1110.94 286.744 1113.01L264.634 1146.35C263.556 1147.97 261.462 1148.59 259.678 1147.79L227.129 1133.35C225.356 1132.56 224.403 1130.62 224.869 1128.73L234.447 1090.01Z"></path>
                    </g>
                    {/* IMPLANT/CULTTAB */}
                    <g className="implant hEmpty hIntact hRoot" style={{visibility: tooth48Diagnozis.abutment || tooth48Diagnozis.implant || tooth48Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <path className="st18" d="M220.8,1126.7c0,0-8.8,27.5-11.9,39.6c-3.2,12.1-7.2,39.1-7.4,40.5s5.8,9.5,13.5,12.1
                            c7.7,2.6,15.1-1.1,15.6-1.4c0.5-0.4,25.2-43.1,28.9-50.8s7.9-18.6,7.9-18.6L220.8,1126.7z"
                        />
                        <line className="st19" x1="214.8" y1="1131.2" x2="265.3" y2="1162.8" />
                        <line className="st19" x1="209.8" y1="1146.2" x2="260.3" y2="1177.8" />
                        <line className="st19" x1="203.8" y1="1161.2" x2="254.3" y2="1192.8" />
                        <line className="st19" x1="197.8" y1="1175.2" x2="248.3" y2="1206.8" />
                        <line className="st19" x1="192.8" y1="1191.2" x2="243.3" y2="1222.8" />
                    </g>
                    <g className="toutline hRoot hImplant hEmpty" style={{visibility: !tooth48Diagnozis.culttab && !tooth48Diagnozis.abutment && !tooth48Diagnozis.implant && !tooth48Diagnozis.shaper && !tooth48Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M327,1066.9c-0.8-3.9-1.8-7.8-3-11.6l-3.7-1.1c-1.9,1.4-4.1,2.5-6.4,3.1
                            c0,0-0.1,0-0.1,0c-9.8,2.6-19.6-2.2-29.7-2.8c-4.4-0.3-8.9,0.3-11.9,3.5c-1.3,1.4-2.1,3.1-2.8,4.9c-1.5,3.8-2.5,7.8-3.1,11.8
                            l-1.9,0c0.6-3.6,1.2-7.3,1.8-10.9c0.5-3.2,1-6.6-0.1-9.6c-2.8-8-12.4-8.9-19.6-12.8c-1.1-0.6-2.1-1.2-3-1.9
                            c-2.8-2.2-4.8-5.2-5.7-8.6l-8.3-1.1c-8.1,5.7-15.1,13-20.5,21.4c-2.9,4.5-5.3,9.3-6.5,14.5c-1.4,5.8-1.2,11.7,0.5,17.3
                            c0.4,1.4,0.9,2.7,1.5,4c5,11.3,12.9,21,22.9,28.2c11.3,8.1,24.6,12.7,38.3,15c14.4,2.5,29.2,2.5,43.7,0.1c1.2-0.9,2.3-1.9,3.4-2.9
                            c1.4-1.3,2.7-2.7,3.9-4.2c6.7-8.2,10.4-18.4,11.7-28.9C329.5,1085.1,328.8,1075.9,327,1066.9z"
                        />
                    </g>
                    {/*КЛИНОВИДНИЙ ЕФЕКТ/ПРИШИЙКОВА ПЛОМБА/ПРИШИЙКОВИЙ КАРІЄС*/}
                    <g className="wedge-shaped hRoot hImplant hEmpty" style={{visibility: !tooth48Diagnozis.culttab && !tooth48Diagnozis.abutment ? 'inherit' : 'hidden'}}>
                        <path className="st7 st59" d="M209.419 1051C206.519 1055.5 204.119 1060.3 202.919 1065.5C201.519 1071.2 201.719 1077.2 203.519 1082.6C203.919 1083.9 204.419 1085.3 205.019 1086.6C210.019 1097.9 217.919 1107.6 227.919 1114.8C239.219 1122.9 252.519 1127.5 266.219 1129.8C280.719 1132.2 295.419 1132.3 309.919 1129.9C311.119 1129 312.219 1128 313.319 1127C314.719 1125.7 316.019 1124.3 317.219 1122.8C324.019 1114.6 327.619 1104.4 328.919 1093.9C330.019 1084.8 329.319 1075.7 327.519 1066.7C326.719 1062.8 325.719 1058.9 324.519 1055.1L320.819 1054C318.919 1055.4 316.719 1056.5 314.419 1057.1H314.319C308.001 1058.84 301.642 1057.46 295.241 1056.08C291.713 1055.31 288.172 1054.55 284.619 1054.3C280.319 1054 275.719 1054.6 272.719 1057.8C271.419 1059.2 270.619 1060.9 269.919 1062.7C268.419 1066.5 267.319 1070.5 266.819 1074.5H264.919C265.219 1072.7 265.519 1070.87 265.819 1069.05C266.119 1067.22 266.419 1065.4 266.719 1063.6C267.219 1060.4 267.719 1057.1 266.619 1054C264.625 1048.3 259.179 1046.2 253.609 1044.06C251.36 1043.19 249.09 1042.32 247.019 1041.2C245.919 1040.7 244.919 1040 244.019 1039.3C241.219 1037.1 239.219 1034.1 238.319 1030.7L229.919 1029.6C221.819 1035.4 214.819 1042.6 209.419 1051ZM231.813 1112.25C241.812 1119.35 253.581 1123.38 265.704 1125.39C274.201 1126.81 303.15 1130.8 313.008 1116.61C313.715 1115.59 313.129 1114.23 311.945 1113.86C271.723 1101.4 248.985 1093.93 212.407 1081.12C210.975 1080.61 209.543 1081.83 209.962 1083.28C210.381 1084.75 210.914 1086.18 211.548 1087.54C215.973 1097.44 222.964 1105.94 231.813 1112.25Z"></path>
                        <path className={`st7 ${tooth48Diagnozis?.cervical_caries ? 'cervical-caries' : ''}`} 
                            d="M265.481 1125.39C253.357 1123.38 241.588 1119.35 231.589 1112.25C222.74 1105.94 215.749 1097.44 211.325 1087.54C210.691 1086.18 210.157 1084.75 209.738 1083.28C209.32 1081.83 210.751 1080.61 212.184 1081.12C248.761 1093.93 271.499 1101.4 311.721 1113.86C312.905 1114.23 313.491 1115.59 312.784 1116.61C302.926 1130.8 273.978 1126.81 265.481 1125.39Z" 
                        />
                        <path className={
                                `st60
                                    ${(tooth48Diagnozis?.wedge_shaped_defect) ? `shaped-defect-stroke` : ""}
                                    ${(tooth48Diagnozis?.seal_cervical) ? `seal-cervical-stroke` : ""}
                                    ${tooth48Diagnozis.seal_cervical_color}
                                `
                            } 
                            d="M265.481 1125.39C253.357 1123.38 241.588 1119.35 231.589 1112.25C222.74 1105.94 215.749 1097.44 211.325 1087.54C210.691 1086.18 210.157 1084.75 209.738 1083.28C209.32 1081.83 210.751 1080.61 212.184 1081.12C248.761 1093.93 271.499 1101.4 311.721 1113.86C312.905 1114.23 313.491 1115.59 312.784 1116.61C302.926 1130.8 273.978 1126.81 265.481 1125.39Z"
                        />
                    </g>
                    {/*TARTAR*/}
                    <g className="tartar hImplant hEmpty" style={{visibility: 'inherit', opacity: teethDiagnozis.tooth48.tartar ? 1 : 0}}>
                        <path className="st61 level2" d="M202.5 1070L204 1071.5L204.5 1074L205.5 1076.5L206 1079L208 1081.5V1084.22L209.5 1087L211 1091L211.5 1093.5L213 1095.5L216 1099L218.5 1102.5L221 1105.5L223 1109L226 1110.5L228 1112L233 1116L236.5 1118L239 1119L243 1121.5H246L248.5 1123.5L253.5 1125H256L259.5 1126.5H262.5L268 1127.5L272 1129H278L283 1130L288.5 1129H293L298 1127.5L301.5 1129L305 1127.5L307.5 1125H310L312 1123.5L314.5 1120.5H316L318 1118L318.5 1116.5L320 1115.5L320.5 1113.5L321.5 1112.5L324 1112L324.5 1113.5L323.5 1115L323 1116.5L322 1118.5L320.5 1120.5L320 1122.5L318 1125L317.5 1127L316 1129L313 1131L312 1134L310 1135L307.5 1137.5L306.5 1139.5L305 1142L302.5 1144.5L301 1146L300 1149L298 1152L296 1153L292 1153.5L288.5 1154L283.5 1152.5L278 1154H270.5L266 1155L262 1153L257.5 1152.5L252 1150.5L246 1148L239.5 1147.5L234.5 1144.5L228.5 1142.5L225 1139.5L221 1137.5L218.5 1133.5L214.5 1131L211.5 1127.5L208 1126.5L204.5 1122.5L203.5 1116.5L203 1112.5L204 1109L203 1105.5V1103L202.5 1100L203 1095.5L203.5 1093.5L203 1091V1089V1085.5L202.5 1083L201.5 1080V1077.5L201 1075.5L201.5 1073.5V1071.5L202.5 1070Z"></path>
                        <path className="st61 level1" d="M202.5 1070L204 1071.5L204.5 1074L205.5 1076.5L206 1079L208 1081.5V1084.22L209.5 1087L211 1091L211.5 1093.5L213 1095.5L216 1099L218.5 1102.5L221 1105.5L223 1109L226 1110.5L228 1112L233 1116L236.5 1118L239 1119L243 1121.5H246L248.5 1123.5L253.5 1125H256L259.5 1126.5H262.5L268 1127.5L272 1129H278L283 1130L288.5 1129H293L298 1127.5L301.5 1129L305 1127.5L307.5 1125H310L312 1123.5L314.5 1120.5H316L318 1118L318.5 1116.5L320 1115.5L320.5 1113.5L321.5 1112.5L324 1112V1113.5L323.5 1114.5L322.5 1116L322 1117L321 1118.5L320 1120L319.5 1122L318.5 1123L317.5 1124.5L316.5 1126.5L315.5 1128.5L314 1129L312 1131L311 1133L309 1134L307.5 1135.5L306 1136.5L305 1138.5L303 1140.5H300L298 1139.5L296 1140.5L290.5 1138.5L285.5 1139.5L282 1138.5H276.5L272.5 1138H267.5C266.167 1137.5 263.3 1136.5 262.5 1136.5C261.7 1136.5 258.833 1135.5 257.5 1135H253.5L250 1133L244.5 1132.5L241.5 1131L238 1128L235.5 1127.5L233.5 1125.5L230.5 1125L226.5 1123L224.5 1120L221.5 1118L221 1117L217 1116L215 1114.5L213.5 1111.5L211.5 1109L209.5 1107L208 1106L207 1104L206 1102.5L204.5 1101.5L203.5 1099L204 1096.5L204.5 1094V1092L204 1090L203 1088V1085.5L202.5 1083V1081.5L201.5 1079V1077L201 1075L201.5 1073V1071.5L202.5 1070Z"></path>
                    </g>
                    {/*КАРИЕС*/}
                    <g className="header caries-filling hRoot hImplant hEmpty" style={{visibility: 'inherit'}}>
                        {/*КАРИЕС ЦЕНТР*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                        >
                            <path className="st58" d="M229.8,1073.8c8.1,10.9,24.9,18.6,42.1,23.1c11.1,2.9,22.6,0.7,31-2.1v0c1.1-4.2,2.4-8.3,3.3-11.4
                                c1.2-4,4.8-16.1,7.7-26.1c-9.8,2.6-19.6-2.2-29.7-2.8c-4.4-0.3-8.9,0.3-11.9,3.5c-1.3,1.4-2.1,3.1-2.8,4.9
                                c-1.5,3.8-2.5,7.8-3.1,11.8l-1.9,0c0.6-3.6,1.2-7.3,1.8-10.9c0.5-3.2,1-6.5-0.1-9.6c-2.8-8-12.4-8.9-19.6-12.8
                                C242.7,1050.6,234.8,1068.1,229.8,1073.8z"
                            />
                            <path className={
                                    `st8 caries-center
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth48.caries_center ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth48.seal_center ? `seal-fill ${teethDiagnozis.tooth48.seal_center_color}` : ''}
                            `} 
                                d="M229.8,1073.8c8.1,10.9,24.9,18.6,42.1,23.1c11.1,2.9,22.6,0.7,31-2.1v0c1.1-4.2,2.4-8.3,3.3-11.4
                                c1.2-4,4.8-16.1,7.7-26.1c-9.8,2.6-19.6-2.2-29.7-2.8c-4.4-0.3-8.9,0.3-11.9,3.5c-1.3,1.4-2.1,3.1-2.8,4.9
                                c-1.5,3.8-2.5,7.8-3.1,11.8l-1.9,0c0.6-3.6,1.2-7.3,1.8-10.9c0.5-3.2,1-6.5-0.1-9.6c-2.8-8-12.4-8.9-19.6-12.8
                                C242.7,1050.6,234.8,1068.1,229.8,1073.8z" 
                            />
                        </g>
                        {/*КАРИЕС ПРАВО*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st58" d="M300.2,1110.7c0.4,5.5,5.5,11.2,12.7,16.5c1.4-1.3,2.7-2.7,3.9-4.2c6.7-8.2,10.4-18.4,11.7-28.9
                                c1.1-9.1,0.4-18.2-1.4-27.2c-0.8-3.9-1.8-7.8-3-11.6l-3.7-1.1c-1.9,1.4-4.1,2.5-6.4,3.1c0,0-0.1,0-0.1,0
                                c-2.9,10-6.4,22.1-7.7,26.1c-0.9,3-2.2,7.1-3.3,11.4v0C301.3,1100.8,299.9,1107,300.2,1110.7z"
                            />
                            <path className={
                                    `st8 caries-center
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth48.caries_right ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth48.seal_right ? `seal-fill ${teethDiagnozis.tooth48.seal_right_color}` : ''}
                            `}
                                d="M300.2,1110.7c0.4,5.5,5.5,11.2,12.7,16.5c1.4-1.3,2.7-2.7,3.9-4.2c6.7-8.2,10.4-18.4,11.7-28.9
                                c1.1-9.1,0.4-18.2-1.4-27.2c-0.8-3.9-1.8-7.8-3-11.6l-3.7-1.1c-1.9,1.4-4.1,2.5-6.4,3.1c0,0-0.1,0-0.1,0
                                c-2.9,10-6.4,22.1-7.7,26.1c-0.9,3-2.2,7.1-3.3,11.4v0C301.3,1100.8,299.9,1107,300.2,1110.7z"
                            />
                        </g>
                        {/*КАРИЕС ЛЕВО*/}
                        <g className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                        >
                            <path className="st58" d="M203.1,1082.8c3.3,0.7,7.2,1.4,10.1,1.4c6.5,0.1,9.5-2.8,16.4-10.3c0.1-0.1,0.1-0.1,0.2-0.2
                                c5-5.6,12.9-23.2,16.9-32.5c-1.1-0.6-2.1-1.2-3-1.9c-2.8-2.2-4.8-5.2-5.7-8.6l-8.3-1.1c-8.1,5.7-15.1,13-20.5,21.4
                                c-2.9,4.5-5.3,9.3-6.5,14.5C201.3,1071.3,201.5,1077.2,203.1,1082.8z"
                            />
                            <path className={`
                                st8 target caries-left
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth48.caries_left ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth48.seal_left ? `seal-fill ${teethDiagnozis.tooth48.seal_left_color}` : ''}
                            `} 
                                d="M203.1,1082.8c3.3,0.7,7.2,1.4,10.1,1.4c6.5,0.1,9.5-2.8,16.4-10.3c0.1-0.1,0.1-0.1,0.2-0.2
                                c5-5.6,12.9-23.2,16.9-32.5c-1.1-0.6-2.1-1.2-3-1.9c-2.8-2.2-4.8-5.2-5.7-8.6l-8.3-1.1c-8.1,5.7-15.1,13-20.5,21.4
                                c-2.9,4.5-5.3,9.3-6.5,14.5C201.3,1071.3,201.5,1077.2,203.1,1082.8z"
                            />
                        </g>
                        {/*КАРИЕС У КОРНЯ*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'top');
                            }}
                        >
                            <path className="st58" d="M203.1,1082.8c0.4,1.4,0.9,2.7,1.5,4c5,11.3,12.9,21,22.9,28.2c11.3,8.1,24.6,12.7,38.3,15
                                c14.4,2.5,29.2,2.5,43.7,0.1c1.2-0.9,2.3-1.9,3.4-2.9c-7.2-5.4-12.3-11-12.7-16.5c-0.3-3.8,1.1-10,2.7-16c-8.4,2.8-19.9,5-31,2.1
                                c-17.2-4.5-33.9-12.2-42.1-23.1c-0.1,0.1-0.1,0.2-0.2,0.2c-6.9,7.4-9.8,10.4-16.4,10.3C210.3,1084.2,206.4,1083.6,203.1,1082.8z"
                            />
                            <path className={
                                `st8 caries-bottom
                                ${diagnozis === 'caries' ? 'caries-stroke' : ''}
                                ${tooth48Diagnozis.caries_top ? 'caries-fill' : ''}
                                ${tooth48Diagnozis.seal_top ? `seal-fill ${teethDiagnozis.tooth48.seal_top_color}` : ''}
                            `} 
                                d="M203.1,1082.8c0.4,1.4,0.9,2.7,1.5,4c5,11.3,12.9,21,22.9,28.2c11.3,8.1,24.6,12.7,38.3,15
                                c14.4,2.5,29.2,2.5,43.7,0.1c1.2-0.9,2.3-1.9,3.4-2.9c-7.2-5.4-12.3-11-12.7-16.5c-0.3-3.8,1.1-10,2.7-16c-8.4,2.8-19.9,5-31,2.1
                                c-17.2-4.5-33.9-12.2-42.1-23.1c-0.1,0.1-0.1,0.2-0.2,0.2c-6.9,7.4-9.8,10.4-16.4,10.3C210.3,1084.2,206.4,1083.6,203.1,1082.8z"
                            />
                        </g>
                        <g className="with">
                            {/*Черточка лево низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth48Diagnozis.seal_left && !tooth48Diagnozis.seal_top && !tooth48Diagnozis.seal_center) ||
                                        (tooth48Diagnozis.seal_left && tooth48Diagnozis.seal_top && !tooth48Diagnozis.seal_center) ||
                                        (!tooth48Diagnozis.seal_left && tooth48Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M230 1073.5C232.167 1071.5 238.1 1063.3 244.5 1046.5"
                            />
                            {/*Черточка лево низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth48Diagnozis.seal_left && !tooth48Diagnozis.seal_top) ||
                                        (!tooth48Diagnozis.seal_left && tooth48Diagnozis.seal_top && !tooth48Diagnozis.seal_center) ||
                                        (!tooth48Diagnozis.seal_left && tooth48Diagnozis.seal_top && tooth48Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                                d="M230 1073.5C222.5 1082.5 216.3 1082.7 207.5 1083.5" 
                            />
                            {/*Черточка середина*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth48Diagnozis.seal_top && !tooth48Diagnozis.seal_center) ||
                                        (tooth48Diagnozis.seal_right && tooth48Diagnozis.seal_left && !tooth48Diagnozis.seal_center && tooth48Diagnozis.seal_top) ||
                                        (!tooth48Diagnozis.seal_bottom && !tooth48Diagnozis.seal_top && tooth48Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M230 1073.5C237 1085 278.2 1105.3 303 1094.5" 
                            />
                            {/*Черточка право низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth48Diagnozis.seal_right && !tooth48Diagnozis.seal_top) ||
                                        (!tooth48Diagnozis.seal_right && tooth48Diagnozis.seal_top && !tooth48Diagnozis.seal_center) ||
                                        (!tooth48Diagnozis.seal_right && tooth48Diagnozis.seal_top && tooth48Diagnozis.seal_center)
                                    )
                                        ? 5 : 0
                                }} 
                                d="M303 1095C298.5 1112.5 299.7 1113.5 308.5 1123.5" 
                            />
                            {/*Черточка право низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth48Diagnozis.seal_right && !tooth48Diagnozis.seal_top && !tooth48Diagnozis.seal_center) ||
                                        (tooth48Diagnozis.seal_right && tooth48Diagnozis.seal_top && !tooth48Diagnozis.seal_center) ||
                                        (!tooth48Diagnozis.seal_right && tooth48Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M303 1095L312 1063" 
                            />
                        </g>
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir"
                            style={{
                                visibility: tooth48Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth48Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className={`vinir-fill ${tooth48Diagnozis.vinir_color}`} 
                                d="M327 1066.9C326.2 1063 325.2 1059.1 324 1055.3L320.3 1054.2C318.4 1055.6 316.2 1056.7 313.9 1057.3H313.8C304 1059.9 294.2 1055.1 284.1 1054.5C279.7 1054.2 275.2 1054.8 272.2 1058C270.9 1059.4 270.1 1061.1 269.4 1062.9C267.9 1066.7 266.9 1070.7 266.3 1074.7H264.4C265 1071.1 265.6 1067.4 266.2 1063.8C266.7 1060.6 267.2 
                                1057.2 266.1 1054.2C263.3 1046.2 253.7 1045.3 246.5 1041.4C245.4 1040.8 244.4 1040.2 243.5 1039.5C240.7 1037.3 238.7 1034.3 237.8 1030.9L229.5 1029.8C221.4 1035.5 214.4 1042.8 209 1051.2C206.1 1055.7 203.7 1060.5 202.5 1065.7C201.1 1071.5 201.3 1077.4 203 1083C203.4 1084.4 203.9 1085.7 204.5 
                                1087C209.5 1098.3 217.4 1108 227.4 1115.2C238.7 1123.3 252 1127.9 265.7 1130.2C280.1 1132.7 294.9 1132.7 309.4 1130.3C310.6 1129.4 311.7 1128.4 312.8 1127.4C314.2 1126.1 315.5 1124.7 316.7 1123.2C323.4 1115 327.1 1104.8 328.4 1094.3C329.5 
                                1085.1 328.8 1075.9 327 1066.9Z"
                            />
                        </g>
                    </g>
                    {/* ТИМЧАСОВА/КЕРАМІЧНА/МЕТАЛОКЕРАМІЧНА КОРОНКА*/}
                    <g className="crown"
                        style={{
                            visibility: tooth48Diagnozis.temporary_crown || tooth48Diagnozis.ceramic_crown || tooth48Diagnozis.mceramic_crown || tooth48Diagnozis.metalic_crown || tooth48Diagnozis.zirconia_crown ? 'inherit' : 'hidden',
                            opacity: tooth48Diagnozis.temporary_crown || tooth48Diagnozis.ceramic_crown || tooth48Diagnozis.mceramic_crown || tooth48Diagnozis.metalic_crown || tooth48Diagnozis.zirconia_crown ? 1 : 0
                        }}
                    >
                        <path className={`
                                temporary-crown crown-fill
                                ${diagnozis}
                                ${tooth48Diagnozis.ceramic_crown_color}
                                ${tooth48Diagnozis.mceramic_crown_color}
                                ${tooth48Diagnozis.metalic_crown_color}
                                ${tooth48Diagnozis.zirconia_crown_color}
                            `} 
                            d="M327,1066.9c-0.8-3.9-1.8-7.8-3-11.6l-3.7-1.1c-1.9,1.4-4.1,2.5-6.4,3.1
                            c0,0-0.1,0-0.1,0c-9.8,2.6-19.6-2.2-29.7-2.8c-4.4-0.3-8.9,0.3-11.9,3.5c-1.3,1.4-2.1,3.1-2.8,4.9c-1.5,3.8-2.5,7.8-3.1,11.8
                            l-1.9,0c0.6-3.6,1.2-7.3,1.8-10.9c0.5-3.2,1-6.6-0.1-9.6c-2.8-8-12.4-8.9-19.6-12.8c-1.1-0.6-2.1-1.2-3-1.9
                            c-2.8-2.2-4.8-5.2-5.7-8.6l-8.3-1.1c-8.1,5.7-15.1,13-20.5,21.4c-2.9,4.5-5.3,9.3-6.5,14.5c-1.4,5.8-1.2,11.7,0.5,17.3
                            c0.4,1.4,0.9,2.7,1.5,4c5,11.3,12.9,21,22.9,28.2c11.3,8.1,24.6,12.7,38.3,15c14.4,2.5,29.2,2.5,43.7,0.1c1.2-0.9,2.3-1.9,3.4-2.9
                            c1.4-1.3,2.7-2.7,3.9-4.2c6.7-8.2,10.4-18.4,11.7-28.9C329.5,1085.1,328.8,1075.9,327,1066.9z"></path>
                    </g>
                </g>
            </g>
        </>
    )
}
