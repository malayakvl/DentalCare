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
    getStatusesSelector,
    allTeethAdultSelector, teethTypeSelector
} from "../../../Redux/Formula/selectors";
import PeriodontitStage25 from './periodontit25';

export default function Tooth25() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth25Diagnozis = teethDiagnozis.tooth25;
    const sealColor1 = useSelector(getSealColor1Selector);
    const sealColor2 = useSelector(getSealColor2Selector);
    const sealColor3 = useSelector(getSealColor3Selector);
    const wsDefectColor = useSelector(getSealServicalColorSelector);
    const vinirColor = useSelector(getVinirColorSelector);
    const ceramicCrownColor = useSelector(getCeramicCrownColorSelector);
    const mceramicCrownColor = useSelector(getCeramicMCrownColorSelector);
    const metalicCrownColor = useSelector(getMetalicCrownColorSelector);
    const zirconiaCrownColor = useSelector(getZirconiaCrownColorSelector);
    const showStatus = useSelector(allTeethAdultSelector);
    const teethType = useSelector(teethTypeSelector);

    const setColordedPart = (diagnozis, toothPart = '') => {
        if (diagnozis === 'caries') {
            if (toothPart === 'bottom') {
                teethDiagnozis.tooth25.caries_bottom = !teethDiagnozis.tooth25.caries_bottom;
            }
            if (toothPart === 'center') {
                teethDiagnozis.tooth25.caries_center = !teethDiagnozis.tooth25.caries_center;
            }
            if (toothPart === 'left') {
                teethDiagnozis.tooth25.caries_left = !teethDiagnozis.tooth25.caries_left;
            }
            if (toothPart === 'right') {
                teethDiagnozis.tooth25.caries_right = !teethDiagnozis.tooth25.caries_right;
            }
            if (toothPart === 'top') {
                teethDiagnozis.tooth25.caries_top = !teethDiagnozis.tooth25.caries_top;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'seal') {
            if (toothPart === 'center') {
                if (teethDiagnozis.tooth25.seal_center_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth25.seal_center_color = sealColor1;
                    teethDiagnozis.tooth25.seal_center = true;
                } else if (teethDiagnozis.tooth25.seal_center_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth25.seal_center_color = sealColor2;
                    teethDiagnozis.tooth25.seal_center = true;
                } else if (teethDiagnozis.tooth25.seal_center_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth25.seal_center_color = sealColor3;
                    teethDiagnozis.tooth25.seal_center = true;
                } else {
                    teethDiagnozis.tooth25.seal_center = !teethDiagnozis.tooth25.seal_center;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'bottom') {
                if (teethDiagnozis.tooth25.seal_bottom_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth25.seal_bottom_color = sealColor1;
                    teethDiagnozis.tooth25.seal_bottom = true;
                } else if (teethDiagnozis.tooth25.seal_bottom_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth25.seal_bottom_color = sealColor2;
                    teethDiagnozis.tooth25.seal_bottom = true;
                } else if (teethDiagnozis.tooth25.seal_bottom_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth25.seal_bottom_color = sealColor3;
                    teethDiagnozis.tooth25.seal_bottom = true;
                } else {
                    teethDiagnozis.tooth25.seal_bottom = !teethDiagnozis.tooth25.seal_bottom;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'left') {
                if (teethDiagnozis.tooth25.seal_left_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth25.seal_left_color = sealColor1;
                    teethDiagnozis.tooth25.seal_left = true;
                } else if (teethDiagnozis.tooth25.seal_left_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth25.seal_left_color = sealColor2;
                    teethDiagnozis.tooth25.seal_left = true;
                } else if (teethDiagnozis.tooth25.seal_left_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth25.seal_left_color = sealColor3;
                    teethDiagnozis.tooth25.seal_left = true;
                } else {
                    teethDiagnozis.tooth25.seal_left = !teethDiagnozis.tooth25.seal_left;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'right') {
                if (teethDiagnozis.tooth25.seal_right_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth25.seal_right_color = sealColor1;
                    teethDiagnozis.tooth25.seal_right = true;
                } else if (teethDiagnozis.tooth25.seal_right_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth25.seal_right_color = sealColor2;
                    teethDiagnozis.tooth25.seal_right = true;
                } else if (teethDiagnozis.tooth25.seal_right_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth25.seal_right_color = sealColor3;
                    teethDiagnozis.tooth25.seal_right = true;
                } else {
                    teethDiagnozis.tooth25.seal_right = !teethDiagnozis.tooth25.seal_right;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'top') {
                if (teethDiagnozis.tooth25.seal_top_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth25.seal_top_color = sealColor1;
                    teethDiagnozis.tooth25.seal_top = true;
                } else if (teethDiagnozis.tooth25.seal_top_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth25.seal_top_color = sealColor2;
                    teethDiagnozis.tooth25.seal_top = true;
                } else if (teethDiagnozis.tooth25.seal_top_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth25.seal_top_color = sealColor3;
                    teethDiagnozis.tooth25.seal_top = true;
                } else {
                    teethDiagnozis.tooth25.seal_top = !teethDiagnozis.tooth25.seal_top;
                }
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'wedge_shaped_defect') {
            if (teethDiagnozis.tooth25.wedge_shaped_defect_color != wsDefectColor && wsDefectColor != '') {
                teethDiagnozis.tooth25.wedge_shaped_defect_color = wsDefectColor;
            } else {
                teethDiagnozis.tooth25.wedge_shaped_defect_color = !teethDiagnozis.tooth25.wedge_shaped_defect_color;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
    }

    return (
        <>
            <g className={`tooth-number-active ${teethType === 'child' ? 'hide-number' : ''}`}>
                <text transform="matrix(1 0 0 1 1425.9434 716.1968)" className={`st3 st4 st5 ${toothActive.tooth25.active ? 'num-active' : ''}`}>25</text>
            </g>
            <g id="TH-25" className={`f-tooth-init ${(teethDiagnozis.tooth25.show && !teethDiagnozis.tooth25.absent)  ? 'f-tooth-active' : ''} ${teethType}`}
                onMouseOver={() => {
                    if (!teethDiagnozis.tooth25.show) {
                        if (teethType === 'child') {
                            document.getElementById('TH-25').style.visibility = 'hidden'
                            document.getElementById('TH-65').style.visibility = 'inherit'
                        }
                        if (teethType === 'adult') {
                            document.getElementById('TH-25').style.visibility = 'inherit'
                            document.getElementById('TH-65').style.visibility = 'hidden'
                        }
                    } 
                    if (teethDiagnozis.tooth25.show && !teethDiagnozis.tooth25.absent && teethType === 'child') {
                        document.getElementById('TH-25').style.visibility = 'hidden'
                        document.getElementById('TH-65').style.visibility = 'inherit'
                    }
                    (!toothActive && !allTeeth) && document.getElementById('25').classList.add('tooth-number-hover')
                }}
                onMouseLeave={() => {
                    if (teethDiagnozis.tooth65.show && !teethDiagnozis.tooth65.absent && teethType === 'adult') {
                        document.getElementById('TH-25').style.visibility = 'hidden'
                        document.getElementById('TH-65').style.visibility = 'inherit'
                    }
                    (!toothActive && !allTeeth) && document.getElementById('25').classList.remove('tooth-number-hover')
                }}
                onClick={() => {
                    // effects block
                    if (teethType === 'adult' && !teethDiagnozis.tooth25.show) {
                        teethDiagnozis.tooth25.show = true;
                        teethDiagnozis.tooth65.show = false;
                    }
                    if (toothActive.tooth25.active) {
                        dispatch(setNewToothActive({tooth25: {active: true}}))
                    } else {
                        dispatch(setDisactiveAll());
                        dispatch(setNewToothActive({tooth25: {active: true}}))
                    }

                    dispatch(setSelectedToothNumber(25));
                    if (toothActive.tooth16.active) {
                        dispatch(setNewToothActive({tooth25: {active: true}}))
                    } else {
                        dispatch(setDisactiveAll());
                        dispatch(setNewToothActive({tooth25: {active: true}}))
                    }
                    if (diagnozis) {
                        if (diagnozis === 'change_color')
                            teethDiagnozis.tooth25.change_color = !teethDiagnozis.tooth25.change_color;
                        else if (diagnozis === 'fissure')
                            teethDiagnozis.tooth25.fissure = !teethDiagnozis.tooth25.fissure;
                        else if (diagnozis === 'caries')
                            teethDiagnozis.tooth25.caries = !teethDiagnozis.tooth25.caries;
                        else if (diagnozis === 'cervical_caries')
                            teethDiagnozis.tooth25.cervical_caries = !teethDiagnozis.tooth25.cervical_caries;
                        else if (diagnozis === 'wedge_shaped_defect')
                            teethDiagnozis.tooth25.wedge_shaped_defect = !teethDiagnozis.tooth25.wedge_shaped_defect;
                        else if (diagnozis === 'tartar')
                            teethDiagnozis.tooth25.tartar = !teethDiagnozis.tooth25.tartar;
                        else if (diagnozis === 'pulpit') {
                            teethDiagnozis.tooth25.pulpit = !teethDiagnozis.tooth25.pulpit;
                            teethDiagnozis.tooth25.channel_class = teethDiagnozis.tooth25.pulpit ? 'pulpit' : ''
                        } else if (diagnozis === 'channel_not_sealed') {
                            teethDiagnozis.tooth25.channel_not_sealed = !teethDiagnozis.tooth25.channel_not_sealed;
                            teethDiagnozis.tooth25.channel_class = teethDiagnozis.tooth25.channel_not_sealed ? 'channel-not-sealed' : '';
                        } else if (diagnozis === 'channel_top_sealed') {
                            teethDiagnozis.tooth25.channel_top_sealed = !teethDiagnozis.tooth25.channel_top_sealed;
                            teethDiagnozis.tooth25.channel_class = teethDiagnozis.tooth25.channel_top_sealed ? 'channel-top-sealed' : '';
                        } else if (diagnozis === 'channel_part_sealed') {
                            teethDiagnozis.tooth25.channel_part_sealed = !teethDiagnozis.tooth25.channel_part_sealed;
                            teethDiagnozis.tooth25.channel_class = teethDiagnozis.tooth25.channel_part_sealed ? 'channel-part-sealed' : '';
                        } else if (diagnozis === 'periodontit') {
                            if (teethDiagnozis.tooth25.periodontit_stage !== subDiagnozis) {
                                teethDiagnozis.tooth25.periodontit_stage = subDiagnozis
                                teethDiagnozis.tooth25.periodontit = true;
                            } else {
                                teethDiagnozis.tooth25.periodontit = !teethDiagnozis.tooth25.periodontit;
                            }
                            teethDiagnozis.tooth25.channel_class = teethDiagnozis.tooth25.periodontit ? 'periodontit' : '';
                            if (!teethDiagnozis.tooth25.periodontit) dispatch(setSubDiagnosis(''));
                            } else if (diagnozis === 'seal_cervical') {
                            if (!teethDiagnozis.tooth25.seal_cervical && teethDiagnozis.tooth25.seal_cervical_color === "") {
                                teethDiagnozis.tooth25.seal_cervical = true;
                                teethDiagnozis.tooth25.seal_cervical_color = wsDefectColor;
                            } else if (teethDiagnozis.tooth25.seal_cervical && teethDiagnozis.tooth25.seal_cervical_color != wsDefectColor) {
                                teethDiagnozis.tooth25.seal_cervical_color = wsDefectColor;
                            } else {
                                teethDiagnozis.tooth25.seal_cervical = false;
                                teethDiagnozis.tooth25.seal_cervical_color = "";
                            }
                        } else if (diagnozis === 'vinir') {
                            if (!teethDiagnozis.tooth25.vinir && teethDiagnozis.tooth25.vinir_color === "") {
                                teethDiagnozis.tooth25.vinir = true;
                                teethDiagnozis.tooth25.vinir_color = vinirColor;
                            } else if (teethDiagnozis.tooth25.vinir && teethDiagnozis.tooth25.vinir_color != vinirColor) {
                                teethDiagnozis.tooth25.vinir_color = vinirColor;
                            } else {
                                teethDiagnozis.tooth25.vinir = false;
                                teethDiagnozis.tooth25.vinir_color = "";
                            }
                        } else if (diagnozis === 'temporary_crown') {
                            teethDiagnozis.tooth25.temporary_crown = !teethDiagnozis.tooth25.temporary_crown;
                        } else if (diagnozis === 'ceramic_crown') {
                            if (!teethDiagnozis.tooth25.ceramic_crown && teethDiagnozis.tooth25.ceramic_crown_color === "") {
                                teethDiagnozis.tooth25.ceramic_crown = true;
                                teethDiagnozis.tooth25.ceramic_crown_color = ceramicCrownColor;
                            } else if (teethDiagnozis.tooth25.ceramic_crown && teethDiagnozis.tooth25.ceramic_crown_color != ceramicCrownColor) {
                                teethDiagnozis.tooth25.ceramic_crown_color = ceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth25.ceramic_crown = false;
                                teethDiagnozis.tooth25.ceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'mceramic_crown') {
                            if (!teethDiagnozis.tooth25.mceramic_crown && teethDiagnozis.tooth25.mceramic_crown_color === "") {
                                teethDiagnozis.tooth25.mceramic_crown = true;
                                teethDiagnozis.tooth25.mceramic_crown_color = mceramicCrownColor;
                            } else if (teethDiagnozis.tooth25.mceramic_crown && teethDiagnozis.tooth25.mceramic_crown_color != mceramicCrownColor) {
                                teethDiagnozis.tooth25.mceramic_crown_color = mceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth25.mceramic_crown = false;
                                teethDiagnozis.tooth25.mceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'metalic_crown') {
                            if (!teethDiagnozis.tooth25.metalic_crown && teethDiagnozis.tooth25.metalic_crown_color === "") {
                                teethDiagnozis.tooth25.metalic_crown = true;
                                teethDiagnozis.tooth25.metalic_crown_color = metalicCrownColor;
                            } else if (teethDiagnozis.tooth25.metalic_crown && teethDiagnozis.tooth25.metalic_crown_color != metalicCrownColor) {
                                teethDiagnozis.tooth25.mceramic_crown_color = metalicCrownColor;
                            } else {
                                teethDiagnozis.tooth25.metalic_crown = false;
                                teethDiagnozis.tooth25.metalic_crown_color = "";
                            }
                        } else if (diagnozis === 'zirconia_crown') {
                            if (!teethDiagnozis.tooth25.zirconia_crown && teethDiagnozis.tooth25.zirconia_crown_color === "") {
                                teethDiagnozis.tooth25.zirconia_crown = true;
                                teethDiagnozis.tooth25.zirconia_crown_color = zirconiaCrownColor;
                            } else if (teethDiagnozis.tooth25.zirconia_crown && teethDiagnozis.tooth25.zirconia_crown_color != zirconiaCrownColor) {
                                teethDiagnozis.tooth25.zirconia_crown_color = zirconiaCrownColor;
                            } else {
                                teethDiagnozis.tooth25.zirconia_crown = false;
                                teethDiagnozis.tooth25.zirconia_crown_color = "";
                            }
                        } else if (diagnozis === 'pin') {
                            teethDiagnozis.tooth25.pin = !teethDiagnozis.tooth25.pin;
                        } else if (diagnozis === 'culttab') {
                            teethDiagnozis.tooth25.culttab = !teethDiagnozis.tooth25.culttab;
                        } else if (diagnozis === 'abutment') {
                            teethDiagnozis.tooth25.abutment = !teethDiagnozis.tooth25.abutment;
                        } else if (diagnozis === 'shaper') {
                            teethDiagnozis.tooth25.shaper = !teethDiagnozis.tooth25.shaper;
                        } else if (diagnozis === 'implant') {
                            teethDiagnozis.tooth25.implant = !teethDiagnozis.tooth25.implant;
                        } else if (diagnozis === 'apex') {
                            teethDiagnozis.tooth25.apex = !teethDiagnozis.tooth25.apex;
                        } else if (diagnozis === 'absent') {
                            teethDiagnozis.tooth25.absent = !teethDiagnozis.tooth25.absent;
                        } else if (diagnozis === 'cervical_caries') {
                            teethDiagnozis.tooth25.cervical_caries = !teethDiagnozis.tooth25.cervical_caries;
                        } else if (diagnozis === 'caries') {
                            teethDiagnozis.tooth25.caries = !teethDiagnozis.tooth25.caries;
                        } else if (diagnozis === 'parodontit') {
                            if (teethDiagnozis.tooth25.parodontit) {
                                if (teethDiagnozis.tooth25.parodontit_stage === subDiagnozis) {
                                    teethDiagnozis.tooth25.parodontit = false;
                                    teethDiagnozis.tooth25.active = false;
                                } else {
                                    teethDiagnozis.tooth25.parodontit = true;
                                    teethDiagnozis.tooth25.parodontit_stage = subDiagnozis
                                }
                            } else {
                                teethDiagnozis.tooth25.parodontit = true;
                                teethDiagnozis.tooth25.parodontit_stage = subDiagnozis;
                                teethDiagnozis.tooth25.active = true;
                            }
                        }
                        dispatch(setToothDiagnoze(teethDiagnozis))
                    }
                }}
            >
                <g className="underlay" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <path className="st40" d="M1426,248.9c0,0-7,25-11,48s-11,92-12,105s-0.3,37.5-0.2,49.7
                        s6.2,31.3,11.2,43.3s8,25,0,39s-12.9,31.5-10.4,58.2c2.4,26.8,2.4,107.8,8.4,122.8s19,25,38,22s30-13,32-38s10.5-92,9-112
                        c-3-40-17-52-16-74c1.3-28,15-31,15-59c0-14-4-44-6-59s-9-57-10-68s-4-67-5-80s0-32-16-34S1429,238.9,1426,248.9z"
                    />
                </g>
                <g id="T_25_up" className="top-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                     {/* CHANGE COLOR/APEX/CULTTAB */}
                    <g className="dentin">
                        <g className={`hEmpty hRoot hImplant`} style={{visibility: !tooth25Diagnozis.culttab && !tooth25Diagnozis.implant && !tooth25Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st24 ${tooth25Diagnozis.apex ? 'apex' : ''}`} d="M1483.3,597.4c1.5-6.3,0.3-12.6-3.2-18.3c-2.8-4.5-6.9-8.6-11.5-12
                                c-6.6-4.9-14.9-8.9-24-7.9c-4.9,0.5-9,2.5-13.3,4.2c-3.7,1.5-7.8,2.9-11.2,4.8c-4,2.2-7.1,5.2-9,8.5c-2.1,3.8-2.5,7.9-2.2,12.1
                                c0.5,6.9,2.8,13.4,6,19.5c2.4,4.5,5.1,8.8,8.4,13c2.2,2.9,4.8,5.7,8.3,7.7c4.4,2.5,9.7,3.6,14.9,3.9c4.5,0.2,9.1-0.2,13.4-1.7
                                c5.1-1.8,9.2-5,11.7-8.7c2.4-3.5,3.5-7.3,5.2-11C1479,606.8,1482.1,602.5,1483.3,597.4z"
                            />
                        </g>
                        <g className={`hIntact hImplant hEmpty`} style={{visibility: tooth25Diagnozis?.apex || tooth25Diagnozis.change_color ? 'inherit' : 'hidden'}}>
                            <path className={`st24 change-color ${tooth25Diagnozis?.change_color ? 'diagnoze-opacity' : ''} ${tooth25Diagnozis?.apex ? 'apex' : ''}`} 
                                d="M1483.3 597.4C1484.8 591.1 1483.6 584.8 1480.1 579.1C1477.3 574.6 1473.2 570.5 1468.6 567.1C1462 562.2 1453.7 558.2 1444.6 559.2C1439.7 559.7 1435.6 561.7 1431.3 563.4C1427.6 564.9 1423.5 566.3 
                                1420.1 568.2C1416.1 570.4 1413 573.4 1411.1 576.7C1409 580.5 1408.6 584.6 1408.9 588.8C1409.4 595.7 1411.7 602.2 1414.9 608.3C1417.3 612.8 1420 617.1 1423.3 621.3C1425.5 624.2 1428.1 627 1431.6 629C1436 
                                631.5 1441.3 632.6 1446.5 632.9C1451 633.1 1455.6 632.7 1459.9 631.2C1465 629.4 1469.1 626.2 1471.6 622.5C1474 619 1475.1 615.2 1476.8 611.5C1479 606.8 1482.1 602.5 1483.3 597.4Z"
                            />
                        </g>
                    </g>
                    <g className="pulp" style={{visibility: tooth25Diagnozis.apex ? 'inherit' : 'hidden'}}>
                        <g className="pulpitis-pfilling" style={{visibility: tooth25Diagnozis?.apex ? 'inherit' : 'hidden'}}>
                            <path className="st22 target" d="M1455 593.5C1455 600.956 1450.5 609 1446.5 609C1442.5 609 1438 601.456 1438 594C1438 586.544 1443 582 1446.5 582C1449.5 582 1455 586.044 1455 593.5Z" style={{fill: 'rgb(254, 246, 249)'}}></path>
                        </g>
                    </g>
                    {/* IMPLANT/CULTTAB */}
                    <g className="implant hEmpty hIntact hRoot" style={{visibility: tooth25Diagnozis.implant || tooth25Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <circle className="st48" cx="1446.5" cy="595.5" r="20.5" />
                        <g className="st27">
                            <mask id="implant_25" className="st49">
                                <path className="st50" d="M1435.87 582.971L1433.18 582.093C1430.89 584.398 1429.18 587.286 1428.31 590.515L1430.42 592.412C1430.23 593.412 1430.13 594.444 1430.13 595.5C1430.13 596.555 1430.23 597.588 1430.42 598.588L1428.31 600.484C1429.18 603.713 1430.89 606.602 1433.18 608.906L1435.87 608.029C1437.43 609.371 1439.24 610.428 1441.22 611.119L1441.8 613.892C1443.36 614.301 1444.99 614.519 1446.67 614.519C1448.35 614.519 1449.98 614.301 1451.53 613.891L1452.12 611.118C1454.1 610.427 1455.91 609.37 1457.46 608.028L1460.16 608.906C1462.45 606.601 1464.15 603.712 1465.03 600.483L1462.92 598.587C1463.11 597.587 1463.21 596.555 1463.21 595.5C1463.21 594.445 1463.11 593.413 1462.92 592.413L1465.03 590.517C1464.15 587.287 1462.45 584.399 1460.16 582.094L1457.46 582.971C1455.91 581.629 1454.1 580.572 1452.12 579.881L1451.53 577.108C1449.98 576.699 1448.35 576.48 1446.67 576.48C1444.99 576.48 1443.36 576.698 1441.8 577.108L1441.22 579.88C1439.24 580.571 1437.43 581.629 1435.87 582.971Z"></path>
                            </mask>
                            <path className="st50 st51" d="M1435.87 582.971L1433.18 582.093C1430.89 584.398 1429.18 587.286 1428.31 590.515L1430.42 592.412C1430.23 593.412 1430.13 594.444 1430.13 595.5C1430.13 596.555 1430.23 597.588 1430.42 598.588L1428.31 600.484C1429.18 603.713 1430.89 606.602 1433.18 608.906L1435.87 608.029C1437.43 609.371 1439.24 610.428 1441.22 611.119L1441.8 613.892C1443.36 614.301 1444.99 614.519 1446.67 614.519C1448.35 614.519 1449.98 614.301 1451.53 613.891L1452.12 611.118C1454.1 610.427 1455.91 609.37 1457.46 608.028L1460.16 608.906C1462.45 606.601 1464.15 603.712 1465.03 600.483L1462.92 598.587C1463.11 597.587 1463.21 596.555 1463.21 595.5C1463.21 594.445 1463.11 593.413 1462.92 592.413L1465.03 590.517C1464.15 587.287 1462.45 584.399 1460.16 582.094L1457.46 582.971C1455.91 581.629 1454.1 580.572 1452.12 579.881L1451.53 577.108C1449.98 576.699 1448.35 576.48 1446.67 576.48C1444.99 576.48 1443.36 576.698 1441.8 577.108L1441.22 579.88C1439.24 580.571 1437.43 581.629 1435.87 582.971Z"></path>
                            <path className="st52" d="M1433.18 582.093L1433.8 580.192L1432.63 579.81L1431.76 580.683L1433.18 582.093ZM1435.87 582.971L1435.25 584.872L1436.32 585.221L1437.18 584.485L1435.87 582.971ZM1428.31 590.515L1426.38 589.992L1426.06 591.18L1426.97 592.002L1428.31 590.515ZM1430.42 592.412L1432.38 592.783L1432.59 591.677L1431.75 590.924L1430.42 592.412ZM1430.42 598.588L1431.75 600.075L1432.59 599.323L1432.38 598.217L1430.42 598.588ZM1428.31 600.484L1426.97 598.997L1426.06 599.82L1426.38 601.007L1428.31 600.484ZM1433.18 608.906L1431.76 610.316L1432.63 611.189L1433.8 610.808L1433.18 608.906ZM1435.87 608.029L1437.18 606.514L1436.32 605.778L1435.25 606.127L1435.87 608.029ZM1441.22 611.119L1443.17 610.705L1442.94 609.602L1441.88 609.231L1441.22 611.119ZM1441.8 613.892L1439.85 614.306L1440.1 615.511L1441.29 615.826L1441.8 613.892ZM1451.53 613.891L1452.04 615.825L1453.23 615.511L1453.49 614.306L1451.53 613.891ZM1452.12 611.118L1451.46 609.23L1450.4 609.602L1450.16 610.704L1452.12 611.118ZM1457.46 608.028L1458.08 606.127L1457.01 605.778L1456.16 606.514L1457.46 608.028ZM1460.16 608.906L1459.54 610.808L1460.71 611.189L1461.58 610.316L1460.16 608.906ZM1465.03 600.483L1466.96 601.006L1467.28 599.818L1466.36 598.996L1465.03 600.483ZM1462.92 598.587L1460.95 598.216L1460.74 599.321L1461.58 600.074L1462.92 598.587ZM1462.92 592.413L1461.58 590.926L1460.74 591.678L1460.95 592.784L1462.92 592.413ZM1465.03 590.517L1466.36 592.004L1467.28 591.181L1466.96 589.994L1465.03 590.517ZM1460.16 582.094L1461.58 580.684L1460.71 579.811L1459.54 580.192L1460.16 582.094ZM1457.46 582.971L1456.16 584.486L1457.01 585.222L1458.08 584.873L1457.46 582.971ZM1452.12 579.881L1450.16 580.296L1450.4 581.398L1451.46 581.769L1452.12 579.881ZM1451.53 577.108L1453.49 576.694L1453.23 575.489L1452.04 575.174L1451.53 577.108ZM1441.8 577.108L1441.29 575.174L1440.1 575.488L1439.85 576.693L1441.8 577.108ZM1441.22 579.88L1441.88 581.769L1442.94 581.397L1443.17 580.295L1441.22 579.88ZM1432.56 583.995L1435.25 584.872L1436.49 581.069L1433.8 580.192L1432.56 583.995ZM1430.24 591.038C1431.02 588.152 1432.54 585.567 1434.6 583.503L1431.76 580.683C1429.23 583.228 1427.34 586.42 1426.38 589.992L1430.24 591.038ZM1431.75 590.924L1429.65 589.028L1426.97 592.002L1429.08 593.899L1431.75 590.924ZM1432.13 595.5C1432.13 594.57 1432.22 593.661 1432.38 592.783L1428.45 592.04C1428.24 593.163 1428.13 594.319 1428.13 595.5H1432.13ZM1432.38 598.217C1432.22 597.338 1432.13 596.43 1432.13 595.5H1428.13C1428.13 596.68 1428.24 597.837 1428.45 598.959L1432.38 598.217ZM1429.65 601.971L1431.75 600.075L1429.08 597.101L1426.97 598.997L1429.65 601.971ZM1434.6 607.496C1432.54 605.432 1431.02 602.847 1430.24 599.961L1426.38 601.007C1427.34 604.579 1429.23 607.771 1431.76 610.316L1434.6 607.496ZM1435.25 606.127L1432.56 607.005L1433.8 610.808L1436.49 609.931L1435.25 606.127ZM1441.88 609.231C1440.14 608.624 1438.55 607.695 1437.18 606.514L1434.56 609.543C1436.31 611.047 1438.34 612.232 1440.56 613.008L1441.88 609.231ZM1443.76 613.477L1443.17 610.705L1439.26 611.534L1439.85 614.306L1443.76 613.477ZM1446.67 612.519C1445.16 612.519 1443.7 612.324 1442.31 611.958L1441.29 615.826C1443.01 616.278 1444.81 616.519 1446.67 616.519V612.519ZM1451.02 611.957C1449.63 612.323 1448.17 612.519 1446.67 612.519V616.519C1448.52 616.519 1450.32 616.278 1452.04 615.825L1451.02 611.957ZM1450.16 610.704L1449.58 613.477L1453.49 614.306L1454.08 611.533L1450.16 610.704ZM1456.16 606.514C1454.79 607.695 1453.2 608.623 1451.46 609.23L1452.78 613.007C1455 612.231 1457.03 611.046 1458.77 609.543L1456.16 606.514ZM1460.78 607.004L1458.08 606.127L1456.84 609.93L1459.54 610.808L1460.78 607.004ZM1463.1 599.96C1462.31 602.847 1460.79 605.431 1458.74 607.496L1461.58 610.316C1464.11 607.77 1465.99 604.578 1466.96 601.006L1463.1 599.96ZM1461.58 600.074L1463.69 601.97L1466.36 598.996L1464.26 597.099L1461.58 600.074ZM1461.21 595.5C1461.21 596.43 1461.12 597.337 1460.95 598.216L1464.88 598.958C1465.1 597.836 1465.21 596.68 1465.21 595.5H1461.21ZM1460.95 592.784C1461.12 593.662 1461.21 594.57 1461.21 595.5H1465.21C1465.21 594.32 1465.1 593.164 1464.88 592.042L1460.95 592.784ZM1463.69 589.029L1461.58 590.926L1464.26 593.9L1466.36 592.004L1463.69 589.029ZM1458.74 583.503C1460.79 585.568 1462.31 588.153 1463.1 591.039L1466.96 589.994C1465.99 586.421 1464.11 583.229 1461.58 580.684L1458.74 583.503ZM1458.08 584.873L1460.78 583.995L1459.54 580.192L1456.84 581.069L1458.08 584.873ZM1451.46 581.769C1453.2 582.376 1454.79 583.305 1456.16 584.486L1458.77 581.457C1457.03 579.954 1455 578.768 1452.78 577.993L1451.46 581.769ZM1449.58 577.523L1450.16 580.296L1454.08 579.467L1453.49 576.694L1449.58 577.523ZM1446.67 578.48C1448.17 578.48 1449.63 578.676 1451.02 579.042L1452.04 575.174C1450.32 574.721 1448.52 574.48 1446.67 574.48V578.48ZM1442.31 579.042C1443.7 578.676 1445.16 578.48 1446.67 578.48V574.48C1444.81 574.48 1443.01 574.721 1441.29 575.174L1442.31 579.042ZM1443.17 580.295L1443.76 577.522L1439.85 576.693L1439.26 579.466L1443.17 580.295ZM1437.18 584.485C1438.55 583.304 1440.14 582.376 1441.88 581.769L1440.56 577.992C1438.34 578.767 1436.31 579.953 1434.56 581.456L1437.18 584.485Z" mask="url(#implant_25)"></path>
                        </g>
                    </g>
                    {/* SHAPER */}
                    <g className="shaper hEmpty hIntact hRoot" style={{visibility: 'hidden', opacity: 0}} >
                        <circle className="st44" r="22.435" transform="matrix(-1 0 0 1 1446.57 595.435)"></circle>
                        <path className="st45" d="M1448.42 586.739C1447.87 584.804 1445.13 584.804 1444.58 586.739L1444.07 588.511C1443.77 589.549 1442.71 590.164 1441.66 589.902L1439.87 589.454C1437.92 588.965 1436.55 591.339 1437.95 592.785L1439.23 594.109C1439.98 594.884 1439.98 596.116 1439.23 596.891L1437.95 598.215C1436.55 599.661 1437.92 602.035 1439.87 601.546L1441.66 601.098C1442.71 600.836 1443.77 601.451 1444.07 602.489L1444.58 604.261C1445.13 606.196 1447.87 606.196 1448.42 604.261L1448.93 602.489C1449.23 601.451 1450.29 600.836 1451.34 601.098L1453.13 601.546C1455.08 602.035 1456.45 599.661 1455.05 598.215L1453.77 596.891C1453.02 596.116 1453.02 594.884 1453.77 594.109L1455.05 592.785C1456.45 591.339 1455.08 588.965 1453.13 589.454L1451.34 589.902C1450.29 590.164 1449.23 589.549 1448.93 588.511L1448.42 586.739Z"></path>
                    </g>
                    {/* ABUTMENT */}
                    <g className="abutment hEmpty hIntact hRoot" style={{visibility: tooth25Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth25Diagnozis.abutment ? 1 : 0}}>
                        <path className="st47" d="M1483.55 597.4C1485.05 591.1 1483.85 584.8 1480.35 579.1C1477.55 574.6 1473.45 570.5 1468.85 567.1C1462.25 562.2 1453.95 558.2 1444.85 559.2C1439.95 559.7 1435.85 561.7 1431.55 563.4C1427.85 564.9 1423.75 566.3 1420.35 568.2C1416.35 570.4 1413.25 573.4 1411.35 576.7C1409.25 580.5 1408.85 584.6 1409.15 588.8C1409.65 595.7 1411.95 602.2 1415.15 608.3C1417.55 612.8 1420.25 617.1 1423.55 621.3C1425.75 624.2 1428.35 627 1431.85 629C1436.25 631.5 1441.55 632.6 1446.75 632.9C1451.25 633.1 1455.85 632.7 1460.15 631.2C1465.25 629.4 1469.35 626.2 1471.85 622.5C1474.25 619 1475.35 615.2 1477.05 611.5C1479.25 606.8 1482.25 602.5 1483.55 597.4Z"></path>
                        <path className="st47" d="M1470.84 596.911C1471.82 592.82 1471.04 588.728 1468.75 585.025C1466.93 582.103 1464.25 579.44 1461.25 577.231C1456.95 574.049 1451.53 571.451 1445.6 572.1C1442.4 572.425 1439.73 573.724 1436.92 574.828C1434.51 575.802 1431.84 576.712 1429.62 577.946C1427.01 579.375 1424.99 581.323 1423.75 583.467C1422.38 585.935 1422.12 588.598 1422.31 591.326C1422.64 595.807 1424.14 600.029 1426.23 603.991C1427.79 606.914 1429.55 609.707 1431.7 612.435C1433.14 614.318 1434.84 616.137 1437.12 617.436C1439.99 619.06 1443.45 619.774 1446.84 619.969C1449.77 620.099 1452.77 619.839 1455.58 618.865C1458.9 617.696 1461.58 615.617 1463.21 613.214C1464.77 610.941 1465.49 608.473 1466.6 606.069C1468.04 603.017 1469.99 600.224 1470.84 596.911Z"></path>
                        <circle className="st45" r="13" transform="matrix(-1 0 0 1 1446.25 595)" />
                    </g>
                    {/* PIN */}
                    <g className="pin" style={{visibility: 'inherit', opacity: tooth25Diagnozis.pin ? 1 : 0}}>
                        <path className="st56 hIntact" d="M1483.55 597.4C1485.05 591.1 1483.85 584.8 1480.35 579.1C1477.55 574.6 1473.45 570.5 1468.85 567.1C1462.25 562.2 1453.95 558.2 1444.85 559.2C1439.95 559.7 1435.85 561.7 1431.55 563.4C1427.85 564.9 1423.75 566.3 1420.35 568.2C1416.35 570.4 
                            1413.25 573.4 1411.35 576.7C1409.25 580.5 1408.85 584.6 1409.15 588.8C1409.65 595.7 1411.95 602.2 1415.15 608.3C1417.55 612.8 1420.25 617.1 1423.55 621.3C1425.75 624.2 1428.35 627 1431.85 629C1436.25 631.5 1441.55 632.6 1446.75 632.9C1451.25 633.1 1455.85 632.7 1460.15 631.2C1465.25 629.4 
                            1469.35 626.2 1471.85 622.5C1474.25 619 1475.35 615.2 1477.05 
                            611.5C1479.25 606.8 1482.25 602.5 1483.55 597.4Z" 
                            style={{visibility: 'hidden'}}
                        />
                        <path className="st56 hIntact" d="M1470.84 596.911C1471.82 592.82 1471.04 588.728 1468.75 585.025C1466.93 582.103 1464.25 579.44 1461.25 577.231C1456.95 574.049 1451.53 571.451 1445.6 572.1C1442.4 572.425 1439.73 573.724 1436.92 574.828C1434.51 575.802 1431.83 576.712 
                            1429.62 577.946C1427.01 579.375 1424.99 581.323 1423.75 583.467C1422.38 585.935 1422.12 588.598 1422.31 591.326C1422.64 595.807 1424.14 600.029 1426.23 603.991C1427.79 606.914 1429.55 609.707 1431.7 612.435C1433.14 614.318 1434.84 616.137 1437.12 617.436C1439.99 619.06 1443.45 619.774 1446.84 619.969C1449.77 620.099 1452.77 619.839 1455.58 618.865C1458.9 617.696 
                            1461.58 615.617 1463.21 613.214C1464.77 610.941 1465.49 608.473 1466.6 606.069C1468.04 603.017 1469.99 600.224 1470.84 596.911Z" 
                            style={{visibility: 'hidden'}}
                        />
                        <circle className="st57" r="12.25" transform="matrix(-1 0 0 1 1446.25 595)" style={{fill: 'black', opacity: tooth25Diagnozis.pin ? 1 : 0}} />
                    </g>
                    {/* CULTTAB */}
                    <g className="stump hEmpty hIntact hImplant" style={{visibility: !tooth25Diagnozis.culttab ? 'hidden' : 'inherit', opacity: !tooth25Diagnozis.culttab ? 0 : 1}}>
                        <path className="st47" d="M1483.55 597.4C1485.05 591.1 1483.85 584.8 1480.35 579.1C1477.55 574.6 1473.45 570.5 1468.85 567.1C1462.25 562.2 1453.95 558.2 1444.85 559.2C1439.95 559.7 1435.85 561.7 1431.55 563.4C1427.85 564.9 1423.75 566.3 1420.35 568.2C1416.35 570.4 1413.25 573.4 1411.35 576.7C1409.25 580.5 1408.85 584.6 1409.15 588.8C1409.65 595.7 1411.95 602.2 1415.15 608.3C1417.55 612.8 1420.25 617.1 1423.55 621.3C1425.75 624.2 1428.35 627 1431.85 629C1436.25 631.5 1441.55 632.6 1446.75 632.9C1451.25 633.1 1455.85 632.7 1460.15 631.2C1465.25 629.4 1469.35 626.2 1471.85 622.5C1474.25 619 1475.35 615.2 1477.05 611.5C1479.25 606.8 1482.25 602.5 1483.55 597.4Z"></path>
                        <path className="st47" d="M1470.84 596.911C1471.82 592.82 1471.04 588.728 1468.75 585.025C1466.93 582.103 1464.25 579.44 1461.25 577.231C1456.95 574.049 1451.53 571.451 1445.6 572.1C1442.4 572.425 1439.73 573.724 1436.92 574.828C1434.51 575.802 1431.84 576.712 1429.62 577.946C1427.01 579.375 1424.99 581.323 1423.75 583.467C1422.38 585.935 1422.12 588.598 1422.31 591.326C1422.64 595.807 1424.14 600.029 1426.23 603.991C1427.79 606.914 1429.55 609.707 1431.7 612.435C1433.14 614.318 1434.84 616.137 1437.12 617.436C1439.99 619.06 1443.45 619.774 1446.84 619.969C1449.77 620.099 1452.77 619.839 1455.58 618.865C1458.9 617.696 1461.58 615.617 1463.21 613.214C1464.77 610.941 1465.49 608.473 1466.6 606.069C1468.04 603.017 1469.99 600.224 1470.84 596.911Z"></path>
                    </g>
                    <g className="hRoot hImplant hEmpty" style={{visibility: (!tooth25Diagnozis.culttab && !tooth25Diagnozis.abutment && !tooth25Diagnozis.implant && !tooth25Diagnozis.apex && !tooth25Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1486,570.8c-2-4.1-4.7-8-7.7-11.5c-1.8-2-3.6-4-5.6-5.8c-7.6-7-17.3-12.7-27.9-11.2
                            c-5.8,0.8-10.5,3.7-15.5,6.2c-4.3,2.2-9.1,4.2-13.2,7c-4.7,3.2-8.3,7.5-10.5,12.4c0,0.1-0.1,0.1-0.1,0.2
                            c-2.4,5.4-2.9,11.3-2.6,17.3c0.5,9.9,3.1,19.3,6.7,28.1c2.6,6.2,5.6,12.1,9.2,18c0.1,0.2,0.3,0.5,0.5,0.8c2.5,4.1,5.6,8.2,9.7,11
                            c5.1,3.6,11.3,5.1,17.4,5.4c5.3,0.3,10.6-0.3,15.6-2.5c6-2.6,10.7-7.3,13.8-12.7c1.1-1.9,1.9-3.8,2.7-5.8c1.3-3.3,2.3-6.7,3.5-10
                            c2.5-6.8,6.2-13,7.6-20.4C1491.4,588.1,1490,579,1486,570.8z"
                        />
                    </g>
                    {/*TARTAR*/}
                    <g className="tartar hImplant hEmpty" style={{opacity: teethDiagnozis.tooth25.tartar ? 1 : 0, visibility: "inherit"}}>
                        <path className="st61 level2" d="M1449.64 537.011C1447.9 536.866 1446.12 538.196 1444.32 538.458C1441.43 538.847 1438.78 538.528 1436.22 539.73C1433.61 540.95 1431.1 542.413 1428.53 543.755C1426.5 544.845 1424.36 547.188 1422.25 548.304C1419.81 549.597 1417.41 550.969 1415.24 552.568C1412.91 554.259 1410.84 554.965 1409.07 557.167C1407.23 559.456 1405.71 563.257 1404.56 565.894C1403.26 568.999 1401.44 572.232 1401.07 575.549C1400.72 578.595 1401.78 581.711 1401.95 584.864C1402.15 588.48 1402.58 593.314 1403.22 596.79C1403.82 600.071 1404.6 602.002 1405.52 605.158C1406.54 608.661 1407.74 613.374 1409.07 616.723C1410.02 619.073 1411.01 620.102 1412.05 622.389C1413.46 625.491 1413.9 628.539 1415.54 631.549C1416.31 632.98 1418.2 634.401 1419.04 635.816C1420.03 637.544 1421.09 640.536 1422.25 642.158C1424.15 644.805 1425.24 645.944 1427.81 647.888C1429.71 649.313 1432.83 650.447 1434.95 651.337C1436.75 652.094 1438.62 653.961 1440.51 654.391C1442.52 654.847 1444.55 653.848 1446.57 654.002C1449.37 654.167 1452.21 655.36 1455.01 654.892C1457.55 654.469 1460.05 652.454 1462.47 651.337C1465.74 649.813 1468.66 647.648 1471.13 645.066C1473.23 642.867 1476.07 640.365 1477.43 637.698C1478.84 634.991 1479.87 632.17 1480.79 629.31C1481.74 626.372 1482.58 623.392 1483.6 620.452C1484.9 616.778 1485.4 614.547 1486.82 610.951C1488.25 607.336 1489.53 602.355 1490.24 598.347C1490.84 595.027 1491.08 591.707 1490.97 588.423C1490.85 584.712 1491.36 579.76 1490.39 576.193C1489.66 573.523 1487.62 572.196 1486.44 569.656C1485.31 567.242 1485.06 564.9 1483.6 562.652C1482.24 560.556 1480.76 558.541 1479.18 556.622C1477.5 554.582 1474.65 552.65 1472.8 550.843C1471.57 549.641 1470.3 547.186 1468.98 546.077C1467.42 544.775 1465.81 543.555 1464.14 542.457C1461.74 540.879 1459.23 540.839 1456.62 539.881C1454.36 539.051 1452.03 537.21 1449.64 537.011ZM1480.1 579.099C1483.6 584.799 1484.8 591.099 1483.3 597.399C1482.1 602.499 1479 606.799 1476.8 611.499C1475.1 615.199 1474 618.999 1471.6 622.499C1469.1 626.199 1465 629.399 1459.9 631.199C1455.6 632.699 1451 633.099 1446.5 632.899C1441.3 632.599 1436 631.499 1431.6 628.999C1428.1 626.999 1425.5 624.199 1423.3 621.299C1420 617.099 1417.3 612.799 1414.9 608.299C1411.7 602.199 1409.4 595.699 1408.9 588.799C1408.6 584.599 1409 580.499 1411.1 576.699C1413 573.399 1416.1 570.399 1420.1 568.199C1423.5 566.299 1427.6 564.899 1431.3 563.399C1435.6 561.699 1439.7 559.699 1444.6 559.199C1453.7 558.199 1462 562.199 1468.6 567.099C1473.2 570.499 1477.3 574.599 1480.1 579.099Z"></path>
                        <path className="st61 level1 hRoot" d="M1449.64 537.011C1447.9 536.866 1446.12 538.196 1444.32 538.458C1441.43 538.847 1438.78 538.528 1436.22 539.73C1433.61 540.95 1431.1 542.413 1428.53 543.755C1426.5 544.845 1424.36 547.188 1422.25 548.304C1419.81 549.597 1417.41 550.969 1415.24 552.568C1412.91 554.259 1410.84 554.965 1409.07 557.167C1407.23 559.456 1405.71 563.257 1404.56 565.894C1403.26 568.999 1401.44 572.232 1401.07 575.549C1400.72 578.595 1401.78 581.711 1401.95 584.864C1402.15 588.48 1402.58 593.314 1403.22 596.79C1403.82 600.071 1404.6 602.002 1405.52 605.158C1406.54 608.661 1407.74 613.374 1409.07 616.723C1410.02 619.073 1411.01 620.102 1412.05 622.389C1413.46 625.491 1413.9 628.539 1415.54 631.549C1416.31 632.98 1418.2 634.401 1419.04 635.816C1420.03 637.544 1421.09 640.536 1422.25 642.158C1424.15 644.805 1425.24 645.944 1427.81 647.888C1429.71 649.313 1432.83 650.447 1434.95 651.337C1436.75 652.094 1438.62 653.961 1440.51 654.391C1442.52 654.847 1444.55 653.848 1446.57 654.002C1449.37 654.167 1452.21 655.36 1455.01 654.892C1457.55 654.469 1460.05 652.454 1462.47 651.337C1465.74 649.813 1468.66 647.648 1471.13 645.066C1473.23 642.867 1476.07 640.365 1477.43 637.698C1478.84 634.991 1479.87 632.17 1480.79 629.31C1481.74 626.372 1482.58 623.392 1483.6 620.452C1484.9 616.778 1485.4 614.547 1486.82 610.951C1488.25 607.336 1489.53 602.355 1490.24 598.347C1490.84 595.027 1491.08 591.707 1490.97 588.423C1490.85 584.712 1491.36 579.76 1490.39 576.193C1489.66 573.523 1487.62 572.196 1486.44 569.656C1485.31 567.242 1485.06 564.9 1483.6 562.652C1482.24 560.556 1480.76 558.541 1479.18 556.622C1477.5 554.582 1474.65 552.65 1472.8 550.843C1471.57 549.641 1470.3 547.186 1468.98 546.077C1467.42 544.775 1465.81 543.555 1464.14 542.457C1461.74 540.879 1459.23 540.839 1456.62 539.881C1454.36 539.051 1452.03 537.21 1449.64 537.011ZM1480.1 579.099C1483.6 584.799 1484.8 591.099 1483.3 597.399C1482.1 602.499 1479 606.799 1476.8 611.499C1475.1 615.199 1474 618.999 1471.6 622.499C1469.1 626.199 1465 629.399 1459.9 631.199C1455.6 632.699 1451 633.099 1446.5 632.899C1441.3 632.599 1436 631.499 1431.6 628.999C1428.1 626.999 1425.5 624.199 1423.3 621.299C1420 617.099 1417.3 612.799 1414.9 608.299C1411.7 602.199 1409.4 595.699 1408.9 588.799C1408.6 584.599 1409 580.499 1411.1 576.699C1413 573.399 1416.1 570.399 1420.1 568.199C1423.5 566.299 1427.6 564.899 1431.3 563.399C1435.6 561.699 1439.7 559.699 1444.6 559.199C1453.7 558.199 1462 562.199 1468.6 567.099C1473.2 570.499 1477.3 574.599 1480.1 579.099Z" style={{visibility: 'inherit'}}></path>
                        <path className="st61 level1" d="M1449.5 550.063C1447.87 549.95 1446.22 550.984 1444.54 551.187C1441.85 551.489 1439.39 551.241 1437 552.175C1434.58 553.123 1432.24 554.259 1429.85 555.302C1427.95 556.149 1425.96 557.969 1424 558.836C1421.73 559.84 1419.49 560.906 1417.47 562.148C1415.3 563.461 1413.38 564.01 1411.73 565.72C1410.01 567.498 1408.6 570.451 1407.53 572.499C1406.32 574.911 1404.62 577.423 1404.27 579.999C1403.96 582.365 1404.94 584.786 1405.1 587.235C1405.28 590.044 1405.69 593.799 1406.28 596.499C1406.84 599.048 1407.56 600.548 1408.42 602.999C1409.37 605.72 1410.49 609.381 1411.73 611.982C1412.61 613.808 1413.53 614.607 1414.5 616.384C1415.81 618.793 1416.22 621.161 1417.75 623.499C1418.47 624.611 1420.22 625.715 1421.01 626.814C1421.93 628.156 1422.92 630.48 1424 631.74C1425.76 633.796 1426.78 634.681 1429.18 636.191C1430.94 637.298 1433.84 638.179 1435.82 638.871C1437.5 639.458 1439.24 640.909 1441 641.243C1442.87 641.597 1444.76 640.821 1446.64 640.941C1449.25 641.069 1451.89 641.995 1454.5 641.632C1456.86 641.304 1459.19 639.738 1461.44 638.871C1464.49 637.687 1467.21 636.005 1469.5 633.999C1471.46 632.291 1474.1 630.348 1475.37 628.275C1476.68 626.173 1477.64 623.982 1478.5 621.76C1479.38 619.478 1480.17 617.163 1481.12 614.879C1482.33 612.025 1482.79 610.292 1484.11 607.499C1485.44 604.691 1486.63 600.822 1487.3 597.708C1487.86 595.129 1488.08 592.55 1487.98 589.999C1487.86 587.117 1488.34 583.27 1487.43 580.499C1486.76 578.426 1484.86 577.394 1483.76 575.422C1482.7 573.546 1482.48 571.727 1481.12 569.981C1479.85 568.353 1478.47 566.788 1477 565.297C1475.44 563.712 1472.78 562.211 1471.06 560.808C1469.92 559.874 1468.73 557.967 1467.5 557.106C1466.06 556.095 1464.55 555.147 1463 554.293C1460.77 553.068 1458.43 553.037 1456 552.292C1453.9 551.648 1451.72 550.218 1449.5 550.063ZM1480.1 579.098C1483.6 584.798 1484.8 591.099 1483.3 597.399C1482.1 602.499 1479 606.799 1476.8 611.499C1475.1 615.199 1474 618.999 1471.6 622.499C1469.1 626.199 1465 629.399 1459.9 631.199C1455.6 632.699 1451 633.099 1446.5 632.899C1441.3 632.599 1436 631.498 1431.6 628.998C1428.1 626.998 1425.5 624.198 1423.3 621.298C1420 617.098 1417.3 612.798 1414.9 608.298C1411.7 602.198 1409.4 595.698 1408.9 588.798C1408.6 584.598 1409 580.499 1411.1 576.699C1413 573.399 1416.1 570.399 1420.1 568.199C1423.5 566.299 1427.6 564.899 1431.3 563.399C1435.6 561.699 1439.7 559.699 1444.6 559.199C1453.7 558.199 1462 562.198 1468.6 567.098C1473.2 570.498 1477.3 574.598 1480.1 579.098Z"></path>
                    </g>
                    {/*CARIES/SEAL*/}
                    <g className="header caries-filling-bottom hRoot hImplant hEmpty" style={{visibility: (!tooth25Diagnozis.culttab && !tooth25Diagnozis.abutment && !tooth25Diagnozis.implant && !tooth25Diagnozis.shaper && !tooth25Diagnozis.apex) ? 'inherit' : 'hidden'}}>
                        {/*КАРИЕС ЦЕНТР*/}
                        <g id="s_header_25_5" 
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                        >
                            <path className="st7" d="M1462,611.8c-2.7,4.4-6.4,7.9-11,8.6c-6.3,0.9-11.3-4.1-14.8-10.1c-2.7-4.6-4.5-9.6-5.3-12.9
                                c-1.2-4.7-2.2-9.6-1.4-13.8c0.5-2.5,1.6-4.8,3.7-6.6c5.6-4.9,12.5-6.1,12.5-6.1c8.6-1.7,14,3.3,16.2,5.4c0.3,0.3,0.7,0.7,1.1,1.2
                                v0c2,2.7,4.1,7.9,4.5,14.9C1467.7,597.3,1465.8,605.6,1462,611.8z"
                            />
                            <path className={
                                    `st8 caries-center
                                    ${'caries-stroke'}
                                    ${teethDiagnozis.tooth25.caries_center ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth25.seal_center ? `seal-fill ${teethDiagnozis.tooth25.seal_center_color}` : ''}
                                `} 
                                d="M1462,611.8c-2.7,4.4-6.4,7.9-11,8.6c-6.3,0.9-11.3-4.1-14.8-10.1c-2.7-4.6-4.5-9.6-5.3-12.9
                                c-1.2-4.7-2.2-9.6-1.4-13.8c0.5-2.5,1.6-4.8,3.7-6.6c5.6-4.9,12.5-6.1,12.5-6.1c8.6-1.7,14,3.3,16.2,5.4c0.3,0.3,0.7,0.7,1.1,1.2
                                v0c2,2.7,4.1,7.9,4.5,14.9C1467.7,597.3,1465.8,605.6,1462,611.8z"
                                />
                        </g>
                        {/*КАРИЕС LEFT*/}
                        <g id="s_header_25_4" className="caries-filling" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                        >
                            <path className="st7" d="M1436.2,610.3c-4,4.3-12.3,13.5-17.4,21.2c-3.6-5.9-6.6-11.8-9.2-18c-3.7-8.8-6.3-18.2-6.7-28.1
                                c-0.3-6,0.2-11.9,2.6-17.3c5.1,2.8,16.5,9.1,24,15.5c-0.8,4.2,0.2,9.1,1.4,13.8C1431.7,600.7,1433.5,605.8,1436.2,610.3z"
                            />
                            <path className={
                                    `st8 caries-left
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth25.caries_left ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth25.seal_left ? `seal-fill ${teethDiagnozis.tooth25.seal_left_color}` : ''}
                                `} 
                                d="M1436.2,610.3c-4,4.3-12.3,13.5-17.4,21.2c-3.6-5.9-6.6-11.8-9.2-18c-3.7-8.8-6.3-18.2-6.7-28.1
                                c-0.3-6,0.2-11.9,2.6-17.3c5.1,2.8,16.5,9.1,24,15.5c-0.8,4.2,0.2,9.1,1.4,13.8C1431.7,600.7,1433.5,605.8,1436.2,610.3z"  
                            />
                        </g>
                        {/*КАРИЕС TOP*/}
                        <g id="s_header_25_3" className="caries-filling" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'top');
                            }}
                        >
                            <path className="st7" d="M1478.4,627.7c-0.8,2-1.6,4-2.7,5.8c-3.1,5.4-7.8,10.1-13.8,12.7c-5,2.2-10.3,2.8-15.6,2.5
                                c-6.1-0.3-12.3-1.9-17.4-5.4c-4.1-2.8-7.1-6.9-9.7-11c-0.2-0.2-0.3-0.5-0.4-0.8c5.1-7.6,13.3-16.8,17.4-21.2
                                c3.5,5.9,8.5,11,14.8,10.1c4.6-0.7,8.3-4.1,11-8.6C1464.6,615.8,1469.7,622.1,1478.4,627.7z"
                            />
                            <path className={`
                                    st8 target caries-left
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth25.caries_top ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth25.seal_top ? `seal-fill ${teethDiagnozis.tooth25.seal_top_color}` : ''}
                                `} 
                                d="M1478.4,627.7c-0.8,2-1.6,4-2.7,5.8c-3.1,5.4-7.8,10.1-13.8,12.7c-5,2.2-10.3,2.8-15.6,2.5
                                c-6.1-0.3-12.3-1.9-17.4-5.4c-4.1-2.8-7.1-6.9-9.7-11c-0.2-0.2-0.3-0.5-0.4-0.8c5.1-7.6,13.3-16.8,17.4-21.2
                                c3.5,5.9,8.5,11,14.8,10.1c4.6-0.7,8.3-4.1,11-8.6C1464.6,615.8,1469.7,622.1,1478.4,627.7z"
                            />
                        </g>
                        {/*КАРИЕС RIGHT*/}
                        <g id="s_header_25_2" className="caries-filling" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st7" d="M1489.6,597.2c-1.5,7.4-5.1,13.6-7.6,20.4c-1.2,3.3-2.2,6.7-3.5,10c-8.7-5.6-13.8-11.9-16.4-15.8
                                c3.8-6.3,5.7-14.5,5.4-19.4c-0.4-7-2.5-12.2-4.5-14.9v0c5.2-8.7,11.6-15,15.4-18.3c3,3.5,5.7,7.4,7.7,11.5
                                C1490,579,1491.4,588.1,1489.6,597.2z"
                            />
                            <path className={`
                                    st8 target caries-right
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth25.caries_right ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth25.seal_right ? `seal-fill ${teethDiagnozis.tooth25.seal_right_color}` : ''}
                                `} 
                                d="M1489.6,597.2c-1.5,7.4-5.1,13.6-7.6,20.4c-1.2,3.3-2.2,6.7-3.5,10c-8.7-5.6-13.8-11.9-16.4-15.8
                                c3.8-6.3,5.7-14.5,5.4-19.4c-0.4-7-2.5-12.2-4.5-14.9v0c5.2-8.7,11.6-15,15.4-18.3c3,3.5,5.7,7.4,7.7,11.5
                                C1490,579,1491.4,588.1,1489.6,597.2z"
                            />
                        </g>
                        {/*КАРИЕС ВЕРХ*/}
                        <g id="s_header_25_1" className="caries-filling" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'bottom');
                            }}
                        >
                            <path className="st7" d="M1478.3,559.3c-3.8,3.3-10.3,9.5-15.4,18.3c-0.4-0.5-0.7-0.9-1.1-1.2c-2.2-2.1-7.6-7.1-16.2-5.4
                                c0,0-6.9,1.2-12.5,6.1c-2.1,1.8-3.2,4.1-3.7,6.6c-7.5-6.4-18.8-12.8-24-15.5c0-0.1,0.1-0.1,0.1-0.2c2.2-4.9,5.9-9.1,10.5-12.4
                                c4.1-2.8,8.8-4.8,13.2-7c5-2.5,9.8-5.4,15.5-6.2c10.6-1.5,20.2,4.2,27.9,11.2C1474.7,555.4,1476.6,557.3,1478.3,559.3z"
                            />
                            <path className={
                                    `st8 caries-bottom
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth25.caries_bottom ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth25.seal_bottom ? `seal-fill ${teethDiagnozis.tooth25.seal_bottom_color}` : ''}
                                `} 
                                d="M1478.3,559.3c-3.8,3.3-10.3,9.5-15.4,18.3c-0.4-0.5-0.7-0.9-1.1-1.2c-2.2-2.1-7.6-7.1-16.2-5.4
                                c0,0-6.9,1.2-12.5,6.1c-2.1,1.8-3.2,4.1-3.7,6.6c-7.5-6.4-18.8-12.8-24-15.5c0-0.1,0.1-0.1,0.1-0.2c2.2-4.9,5.9-9.1,10.5-12.4
                                c4.1-2.8,8.8-4.8,13.2-7c5-2.5,9.8-5.4,15.5-6.2c10.6-1.5,20.2,4.2,27.9,11.2C1474.7,555.4,1476.6,557.3,1478.3,559.3z"
                            />
                        </g>
                        <g className="with bottom-line">
                            {/*Черточка низ право*/}
                            <path className="st54" style={{
                                stroke: 'rgb(81, 79, 72)',
                                strokeWidth: (
                                    (tooth25Diagnozis.seal_right && !tooth25Diagnozis.seal_top) ||
                                    (!tooth25Diagnozis.seal_right && tooth25Diagnozis.seal_top)
                                ) ? 5 : 0
                            }} 
                                d="M1461.5 612C1463.17 614.5 1468 620.5 1474 624.5" 
                            />
                            {/*Овал право*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth25Diagnozis.seal_right && !tooth25Diagnozis.seal_center) ||
                                        (!tooth25Diagnozis.seal_right && tooth25Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1461.5 612C1465.5 604.667 1471.4 587.5 1463 577.5"
                            />
                            {/*Черточка верх право*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth25Diagnozis.seal_right && !tooth25Diagnozis.seal_bottom) ||
                                        (!tooth25Diagnozis.seal_right && tooth25Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }} 
                                d="M1463 578C1464.17 575 1468 567.8 1474 563" 
                            />
                            {/*Овал черточка верх*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth25Diagnozis.seal_center && !tooth25Diagnozis.seal_bottom) ||
                                        (!tooth25Diagnozis.seal_center && tooth25Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }} 
                                d="M1463 578C1452.5 566.001 1435.5 574.3 1429.5 583.5"
                            />
                            {/*Черточка верх лево*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth25Diagnozis.seal_left && !tooth25Diagnozis.seal_bottom) ||
                                        (!tooth25Diagnozis.seal_left && tooth25Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }} 
                                d="M1429.5 583.5C1427.33 580.667 1420.4 574.1 1410 570.5"
                            />
                            {/*Овал черточка лево*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (!tooth25Diagnozis.seal_left && tooth25Diagnozis.seal_center) ||
                                        (tooth25Diagnozis.seal_left && !tooth25Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1429.5 583.5C1423.5 590 1433.9 606.5 1435.5 610.5" 
                            />
                            {/*Низ черточка лево*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth25Diagnozis.seal_left && !tooth25Diagnozis.seal_top) ||
                                        (!tooth25Diagnozis.seal_left && tooth25Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M1435.5 610.5C1433.83 611.5 1428.8 616.2 1422 627"
                            />
                            {/*Овал черточка низ право*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth25Diagnozis.seal_center && !tooth25Diagnozis.seal_top) ||
                                        (!tooth25Diagnozis.seal_center && tooth25Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }}
                                d="M1435.5 610.5C1439 617.833 1449.2 628.5 1462 612.5" 
                            />
                        </g>
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir"  style={
                            {
                                visibility: tooth25Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth25Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className={`vinir-fill ${tooth25Diagnozis.vinir_color}`} 
                                d="M1486 570.8C1484 566.7 1481.3 562.8 1478.3 559.3C1476.5 557.3 1474.7 555.3 1472.7 553.5C1465.1 546.5 1455.4 540.8 1444.8 542.3C1439 543.1 1434.3 546 1429.3 548.5C1425 550.7 1420.2 552.7 1416.1 555.5C1411.4 558.7 1407.8 563 1405.6 
                                567.9C1405.6 568 1405.5 568 1405.5 568.1C1403.1 573.5 1402.6 579.4 1402.9 585.4C1403.03 587.968 1403.3 590.502 1403.69 593C1405.46 593 1409.42 592.1 1411.12 588.5C1411.1 588.175 1411.08 587.849 1411.06 587.523C1410.82 582.743 1411.23 578.044 1413.17 573.743C1413.17 573.663 1413.25 573.663 1413.25 573.583C1415.04 569.68 1417.96 566.255 1421.77 563.707C1425.09 561.476 1428.99 559.883 1432.47 558.131C1436.53 556.14 1440.34 553.83 1445.04 553.192C1453.64 551.998 1461.5 556.538 1467.67 562.113C1469.29 563.547 1470.75 
                                565.14 1472.21 566.733C1474.64 569.521 1476.83 572.628 1478.45 575.893C1480.43 579.877 1481.63 584.127 1481.92 588.5C1483.87 592.5 1488.26 593.167 1490.21 593C1490.9 585.28 1489.37 577.719 1486 570.8Z"
                            />
                        </g>
                    </g>
                    {/* ТИМЧАСОВА КОРОНКА/КЕРАМІЧНА КОРОНКА */}
                    <g className="crown" style={{
                        visibility: (tooth25Diagnozis.temporary_crown || tooth25Diagnozis.ceramic_crown || tooth25Diagnozis.mceramic_crown || tooth25Diagnozis.metalic_crown || tooth25Diagnozis.zirconia_crown) ? 'inherit' : 'hidden',
                        opacity: (tooth25Diagnozis.temporary_crown || tooth25Diagnozis.ceramic_crown || tooth25Diagnozis.mceramic_crown || tooth25Diagnozis.metalic_crown || tooth25Diagnozis.zirconia_crown)  ? 1 : 0
                    }}>
                        <path className={
                                `st46 target temporary-crown crown-fill ${diagnozis}
                                ${tooth25Diagnozis.ceramic_crown_color}
                                ${tooth25Diagnozis.mceramic_crown_color}
                                ${tooth25Diagnozis.metalic_crown_color}
                                ${tooth25Diagnozis.zirconia_crown_color}
                            `} 
                            d="M1486,570.8c-2-4.1-4.7-8-7.7-11.5c-1.8-2-3.6-4-5.6-5.8c-7.6-7-17.3-12.7-27.9-11.2
                            c-5.8,0.8-10.5,3.7-15.5,6.2c-4.3,2.2-9.1,4.2-13.2,7c-4.7,3.2-8.3,7.5-10.5,12.4c0,0.1-0.1,0.1-0.1,0.2
                            c-2.4,5.4-2.9,11.3-2.6,17.3c0.5,9.9,3.1,19.3,6.7,28.1c2.6,6.2,5.6,12.1,9.2,18c0.1,0.2,0.3,0.5,0.5,0.8c2.5,4.1,5.6,8.2,9.7,11
                            c5.1,3.6,11.3,5.1,17.4,5.4c5.3,0.3,10.6-0.3,15.6-2.5c6-2.6,10.7-7.3,13.8-12.7c1.1-1.9,1.9-3.8,2.7-5.8c1.3-3.3,2.3-6.7,3.5-10
                            c2.5-6.8,6.2-13,7.6-20.4C1491.4,588.1,1490,579,1486,570.8z"
                        />
                        {/*FISSURE*/}
                        <path className={`st3 fissure ${tooth25Diagnozis.fissure ? 'diagnoze' : tooth25Diagnozis.fissure ? 'hidden' : ''}`}
                            d="M1472.8,597.6l-0.4-1c-9.4,3.7-19.9,5.5-30.5,5.2c-1.6-0.2-3.4-0.4-5.1-0.4c-0.4,0-0.8,0-1.2,0
                            c-5.4-0.6-10.4-1.7-15-3.4l-0.4,1c3,1.1,6.3,2,9.7,2.6c-3.7,0.4-6.9,1.1-9.1,2.1l0.5,1c3.1-1.5,8.5-2.3,14.3-2.3
                            c1.9,0.2,3.9,0.3,6,0.4c0.1,0,0.3,0,0.4,0c0.3,0,0.7,0.1,1,0.1l0-0.1c0.3,0,0.7,0,1,0C1453.9,602.9,1463.9,601.1,1472.8,597.6z"
                        />
                    </g>
                    {/* FISSURES */}
                    <g className="fissures hEmpty hRoot hImplant" style={{visibility: (!tooth25Diagnozis.culttab && !tooth25Diagnozis.abutment && !tooth25Diagnozis.implant && !tooth25Diagnozis.apex && !tooth25Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className={`st3 fissure ${tooth25Diagnozis.fissure ? 'diagnoze' : ''}`}
                            d="M1472.8,597.6l-0.4-1c-9.4,3.7-19.9,5.5-30.5,5.2c-1.6-0.2-3.4-0.4-5.1-0.4c-0.4,0-0.8,0-1.2,0
                        c-5.4-0.6-10.4-1.7-15-3.4l-0.4,1c3,1.1,6.3,2,9.7,2.6c-3.7,0.4-6.9,1.1-9.1,2.1l0.5,1c3.1-1.5,8.5-2.3,14.3-2.3
                        c1.9,0.2,3.9,0.3,6,0.4c0.1,0,0.3,0,0.4,0c0.3,0,0.7,0.1,1,0.1l0-0.1c0.3,0,0.7,0,1,0C1453.9,602.9,1463.9,601.1,1472.8,597.6z"
                    />
                    </g>
                </g>
                <g id="T_25" className="common-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin">
                        <g id="dentin_v_25" className="hRoot hImplant hEmpty" style={{visibility: !tooth25Diagnozis.implant && !tooth25Diagnozis.apex && !tooth25Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_v_25" className={`st10 change-color ${tooth25Diagnozis.change_color ? 'diagnoze' : ''}`} d="M1476.7,438.6c-1,9.6-3.3,19.1-6.8,28.2l-23.9-2.9l-26.2,6.6
                                c-4-10.9-7.1-22-9.2-33.3c-1.4-7.4-2.3-14.8-2.9-22.2c0-7.7,0.3-15.3,1-23c1.1-12.2,2.9-24.5,4.8-36.7
                                c3.4-22.3,6.8-44.7,11.1-66.9c3.4-17.2,7.4-34.3,11.9-51.3c2.3-9,7-18,14.7-17.8c-7.5,0.2-12,9-14.3,17.8
                                c-4.4,17-8.5,34.1-11.9,51.3c-4.4,22.2-7.7,44.6-11.1,66.9c-1.9,12.2-3.8,24.5-4.8,36.7c-0.7,7.6-1,15.3-1,23
                                c0.1,1,0.2,2.1,0.2,3.1c0.1-0.5,0.2-1,0.4-1.5c2.8-10,8-19.2,15.9-26.2c3-2.7,6.4-5,10.1-6.5c0.7-0.3,1.4-0.5,2.1-0.7
                                c3-0.9,6.2-1.3,9.3-1.1c1.4,0.1,2.8,0.2,4.2,0.5c10.1,1.8,18.7,8.3,23.7,17.2c0.9,1.6,1.6,3.2,2.3,4.9
                                C1477.4,415.9,1477.9,427.3,1476.7,438.6z"
                            />
                        </g>
                        <g id="dentin_n_25" className="hImplant hEmpty" style={{visibility: !tooth25Diagnozis.implant && !tooth25Diagnozis.abutment && !tooth25Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_n_25" className={`st10 change-color ${tooth25Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M1477,405.9c-0.8-2.1-1.7-4.2-2.9-6.2c-5-8.9-13.6-15.3-23.7-17.2
                                c-1.4-0.3-2.8-0.4-4.2-0.5c-3.2-0.2-6.3,0.2-9.3,1.1c-0.7,0.2-1.4,0.5-2.1,0.7c-3.8,1.5-7.1,3.8-10.1,6.5
                                c-7.8,7-13.1,16.3-15.9,26.2c-0.1,0.5-0.3,1-0.4,1.5c-0.1-1-0.2-2-0.2-3.1c0-7.7,0.3-15.3,1-23c1.1-12.2,2.9-24.5,4.8-36.7
                                c3.4-22.3,6.8-44.7,11.1-66.9c3.4-17.2,7.4-34.3,11.9-51.3c2.5-9.5,7.5-19,16-17.7c0.2,0,0.4,0.1,0.6,0.1
                                c7.9,1.6,10.1,11.8,10.1,21.1c0.1,30.3,1.1,60.6,4.3,90.8c2.4,22.5,6,44.8,8.3,67.2C1476.6,401.1,1476.8,403.5,1477,405.9z"
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g>
                            <path className={`st22 target top ${tooth25Diagnozis.channel_class} ${tooth25Diagnozis.channel_class} ${tooth25Diagnozis.pulpit ? 'pulpit' : ''} ${tooth25Diagnozis.periodontit ? 'periodontit' : ''}`}
                                d="M1454.8,428.9c-0.2,2.5-0.8,4.9-1.7,7.2c-2.7-1.6-5.9-2.4-9.1-2.2
                                c-3.3,0.2-6.5,1.4-9.1,3.4c-1.3-3.6-2.2-7.4-2.6-11.2c-0.2-1.5-0.2-3-0.2-4.5c0.6-12.6,1.4-25.2,2.3-37.7c0.2-0.1,0.3-0.1,0.4-0.2
                                c0.7-0.3,1.4-0.5,2.1-0.7c2.5-0.8,5.1-1.1,7.7-1.1c0.4,0,0.8,0,1.2,0c1.4,0.1,2.8,0.2,4.2,0.5c1.1,13.1,2.5,26.2,4.2,39.3
                                C1454.8,424,1455,426.4,1454.8,428.9z"
                            />
                        </g>
                        <g>
                            <path className={`st22 target middle ${tooth25Diagnozis.channel_class} ${tooth25Diagnozis.channel_class} ${tooth25Diagnozis.pulpit ? 'pulpit' : ''} ${tooth25Diagnozis.periodontit ? 'periodontit' : ''}`}
                                d="M1450.1,382.2C1450.1,382.2,1450.1,382.3,1450.1,382.2c-1.4-0.2-2.8-0.3-4.2-0.4
                                c-0.4,0-0.8,0-1.2,0c-2.6,0-5.2,0.4-7.7,1.1c-0.7,0.2-1.4,0.5-2.1,0.7c-0.2,0.1-0.3,0.1-0.5,0.2c0-0.1,0-0.1,0-0.2
                                c1.1-15.9,2.4-31.7,4-47.5c1.1-11.4,2.3-22.8,3.6-34.3c0.7-0.1,1.4-0.2,2.1-0.2c1.1-0.1,2.3-0.1,3.3,0c-0.2,8-0.2,16-0.1,24
                                C1447.5,344.5,1448.5,363.4,1450.1,382.2z" 
                            />
                        </g>
                        <g>
                            <path className={`st22 target part ${tooth25Diagnozis.channel_class} ${tooth25Diagnozis.channel_class} ${tooth25Diagnozis.pulpit ? 'pulpit' : ''} ${tooth25Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`}
                                d="M1453.2,219.3c-3.4,27.3-5.3,54.7-5.8,82.3c-1.1,0-2.2,0-3.3,0
                                c-0.7,0-1.4,0.1-2.1,0.2C1445.1,274.3,1448.9,246.7,1453.2,219.3z" 
                            />
                        </g>
                        {/* Отростки периодонтита */}
                        <PeriodontitStage25 />
                    </g>
                    {/*PIN*/}
                    <g className="pin" style={{
                        visibility: 'inherit', opacity: tooth25Diagnozis.pin ? 1 : 0
                    }}>
                        <path className="st56 hIntact" d="M1476.5 438.6C1475.5 448.2 1473.2 457.7 1469.7 466.8L1445.8 463.9L1419.6 470.6C1415.6 459.7 1412.5 448.6 1410.4 437.3C1409.2 431 1408.3 424.6 1407.8 
                            418.2C1407.9 417.8 1408.5 417.2 1408.6 416.7C1411.4 406.7 1416.6 397.5 1424.5 390.5C1427.1 388.1 1430 386 1433.3 384.6C1433.6 384.4 1433.9 384.3 1434.2 384.2C1434.3 384.1 1434.5 384.1 1434.6 384C1435.3 383.7 1436 383.5 1436.7 383.3C1439.2 382.5 1441.8 
                            382.2 1444.4 382.2C1444.8 382.2 1445.2 382.2 1445.6 382.2C1447 382.3 1448.4 382.4 1449.8 382.7C1450.3 382.8 1450.8 382.9 1451.3 383C1460.7 385.1 1468.8 391.4 1473.5 399.9C1474.6 401.9 1475.5 404 1476.4 
                            406.1C1477.2 416.8 1477.6 427.7 1476.5 438.6Z"
                            style={{visibility: 'hidden'}}
                        />
                        <path className="st57" d="M1453.9 464.9L1446.1 464H1446L1433.6 467.2L1442.7 296C1442.9 294.6 1443.1 293.1 1443.3 291.3C1443.7 290.7 1444.3 290.3 1445.1 290.2C1446.4 290.1 1447.6 291.1 
                            1447.6 292.4V293.3V293.4L1453.9 464.9Z"
                            style={{fill: tooth25Diagnozis.pin ? '#dbd9d3' : 'none'}} 
                        />
                    </g>
                    {/* CULTTAB */}
                    <g className="stump hEmpty hIntact hImplant" style={{visibility: !tooth25Diagnozis.culttab ? 'hidden' : 'inherit', opacity: !tooth25Diagnozis.culttab ? 0 : 1}}>
                        <path className="st14" d="M1451.2,382.8c-0.5-0.1-1-0.2-1.5-0.3c-1.4-0.3-2.8-0.4-4.2-0.5c-0.4,0-0.8,0-1.2,0c-2.6,0-5.2,0.4-7.7,1.1
                            c-0.7,0.2-1.4,0.5-2.1,0.7c-0.2,0.1-0.3,0.1-0.4,0.2c-0.3,0.1-0.6,0.3-0.9,0.4l9.6-92.3c0.1-1.1,1-2,2.2-2.1
                            c1.3-0.1,2.5,0.9,2.5,2.2L1451.2,382.8z"
                        />
                        <path className="st15" d="M1476.5,438.6c-1,9.6-3.3,19.1-6.8,28.2l-23.9-2.9l-26.2,6.7c-4-10.9-7.1-22-9.2-33.3
                            c-1.2-6.3-2.1-12.7-2.6-19.1c0.1-0.4,0.7-1,0.8-1.5c2.8-10,8-19.2,15.9-26.2c2.6-2.4,5.5-4.5,8.8-5.9c0.3-0.2,0.6-0.3,0.9-0.4
                            c0.1-0.1,0.3-0.1,0.4-0.2c0.7-0.3,1.4-0.5,2.1-0.7c2.5-0.8,5.1-1.1,7.7-1.1c0.4,0,0.8,0,1.2,0c1.4,0.1,2.8,0.2,4.2,0.5
                            c0.5,0.1,1,0.2,1.5,0.3c9.4,2.1,17.5,8.4,22.2,16.9c1.1,2,2,4.1,2.9,6.2C1477.2,416.8,1477.6,427.7,1476.5,438.6z"
                        />
                    </g>
                    {/* ABUTMENT */}
                    <g className="abutment hEmpty hIntact hRoot" style={{visibility: tooth25Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth25Diagnozis.abutment ? 1 : 0}}>
                        <path className="st16" d="M1410.4,410.2c0.6-1.6,1.4-3.2,2.2-4.7c2.9-5.6,6.7-10.7,11.5-15c3.5-3.2,7.6-5.9,12.2-7.3
                            c3-0.9,6.2-1.3,9.3-1.1c10.9,0.5,20.5,6.5,26.4,15.2c0.5,0.8,1,1.6,1.5,2.4c0.5,0.9,0.9,1.8,1.4,2.7c0.4,0.8,0.7,1.6,1,2.4v-0.6
                            l-16.3-31.1l-31-0.7L1410.4,410.2z"
                        />
                        <path className="st17" d="M1407.8,418.1c0.6,6.4,1.4,12.8,2.6,19.1c2.1,11.3,5.2,22.4,9.2,33.3l26.2-6.7l23.9,2.9
                            c3.5-9.1,5.8-18.6,6.8-28.2c1.1-10.3,0.8-20.7,0-31c0-0.5-0.1-1.1-0.1-1.6c-0.2-0.4-0.3-0.8-0.5-1.2c-0.3-0.8-0.7-1.6-1-2.4
                            c-0.4-0.9-0.9-1.8-1.4-2.7c-0.5-0.8-1-1.6-1.5-2.4c-5.9-8.8-15.5-14.7-26.4-15.2c-3.2-0.2-6.3,0.2-9.3,1.1
                            c-4.6,1.4-8.7,4.1-12.2,7.3c-4.8,4.3-8.6,9.4-11.5,15c-0.8,1.5-1.5,3.1-2.2,4.7c-0.9,2.1-1.6,4.3-2.2,6.5
                            C1408,417.1,1407.9,417.6,1407.8,418.1z" 
                        />
                    </g>
                    {/* ФОРМУВАЧ */}
                    <g className="shaper hEmpty hIntact hRoot" style={{visibility: 'hidden', opacity: 0}} >
                        <path className="st44" d="M1420.86 412.934C1420.49 415.324 1422.31 417.493 1424.73 417.543L1460.18 418.285C1462.6 418.336 1464.51 416.246 1464.24 413.843L1459.84 374.327C1459.62 372.327 1457.94 370.803 1455.93 370.77L1430.93 370.355C1428.94 370.321 1427.22 371.768 1426.91 373.743L1420.86 412.934Z"></path>
                    </g>
                    {/* IMPLANT/CULTTAB */}
                    <g className="implant hEmpty hIntact hRoot" style={{visibility: tooth25Diagnozis.abutment || tooth25Diagnozis.implant || tooth25Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <path className="st18" d="M1423.9,373l42.1,1c0.4-22.3,0.3-44.6-0.4-66.9c-0.6-21.6-1.7-43.2-3.3-64.7c-3.3-4-8-6.4-13.1-6.5
                            c-5.4-0.2-10.7,2.1-14.7,6.3c-2.3,22.5-4.4,45.1-6.2,67.6C1426.7,330.9,1425.2,352,1423.9,373z"
                        />
                        <line className="st19" x1="1420.8" y1="354.7" x2="1469.5" y2="362.1" />
                        <line className="st19" x1="1421.4" y1="329.1" x2="1470" y2="336.5" />
                        <line className="st19" x1="1423" y1="303.5" x2="1471.7" y2="310.9" />
                        <line className="st19" x1="1423.6" y1="277.9" x2="1472.3" y2="285.3" />
                        <line className="st19" x1="1424.2" y1="252.3" x2="1472.8" y2="259.8" />
                    </g>
                    <g className="toutline hRoot hImplant hEmpty" style={{visibility: !tooth25Diagnozis.culttab && !tooth25Diagnozis.abutment && !tooth25Diagnozis.implant && !tooth25Diagnozis.shaper && !tooth25Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1487.8,434.1c-1.9-6.2-5.1-11.9-7.5-17.9c-0.4-1-0.8-2-1.2-3.1
                            c-1.6-4.6-3.1-9.2-5.5-13.4c-5.7-10.1-16-17.1-27.9-17.7c-3.1-0.2-6.3,0.2-9.3,1.1c-4.6,1.4-8.7,4.1-12.2,7.3
                            c-7.8,7-13.1,16.3-15.9,26.2c-0.3,1.2-0.7,2.5-0.9,3.7c-0.5,2.1-0.9,4.3-1.4,6.4c-1,4.6-2.2,9.2-2.9,13.9c-1,7-0.9,14.1,0.4,21.1
                            c1.6,3.8,3.8,7.4,6.6,10.5c4.2,4.7,9.5,8.4,14.2,12.7c0.5,0.5,1,0.9,1.5,1.4c5,4.9,9.2,10.8,15.6,13.7c4.8,2.1,10.4,2.3,15.2,0.1
                            c5.8-2.6,9.3-7.9,12.9-12.9c0.1-0.1,0.2-0.3,0.3-0.4c4.2-5.8,8.9-11.3,12.7-17.4c2.8-4.4,5.1-9.1,6.8-14
                            C1490.5,448.3,1490,441,1487.8,434.1z"
                        />
                    </g>
                    {/*КЛИНОВИДНИЙ ЕФЕКТ/ПРИШИЙКОВА ПЛОМБА/ПРИШИЙКОВИЙ КАРІЄС*/}
                    <g className="wedge-shaped hRoot hImplant hEmpty" style={{visibility: !tooth25Diagnozis.culttab && !tooth25Diagnozis.abutment ? 'inherit' : 'hidden'}}>
                        <path className="st7 st59" d="M1483.27 422.955C1484.95 426.605 1486.62 430.256 1487.8 434.1C1490 441 1490.5 448.3 1489.3 455.4C1487.6 460.3 1485.3 465 1482.5 469.4C1480.03 473.369 1477.17 477.085 1474.33 480.794C1472.8 482.785 1471.27 484.774 1469.8 486.8C1469.75 486.85 
                            1469.7 486.925 1469.65 487C1469.6 487.075 1469.55 487.15 1469.5 487.2C1469.25 487.546 1469 487.893 1468.75 488.241C1465.41 492.92 1462 497.68 1456.6 500.1C1451.8 502.3 1446.2 502.1 1441.4 500C1436.65 497.846 1433.11 494.039 1429.56 490.215C1428.32 488.889 1427.09 487.561 
                            1425.8 486.3C1425.55 486.05 1425.3 485.825 1425.05 485.6C1424.8 485.375 1424.55 485.15 1424.3 484.9C1422.59 483.332 1420.79 481.843 1419 480.357C1415.88 477.768 1412.77 475.186 1410.1 472.2C1407.3 469.1 1405.1 465.5 1403.5 461.7C1402.2 454.7 
                            1402.1 447.6 1403.1 440.6C1403.61 437.2 1404.38 433.853 1405.14 430.52C1405.43 429.245 1405.72 427.972 1406 426.7C1406.25 425.65 1406.48 424.575 1406.7 423.5C1406.93 422.425 1407.15 421.35 1407.4 420.3C1407.54 419.456 1407.78 418.563 1408.02 417.691C1408.11 417.322 1408.21 416.956 1408.3 416.6C1411.1 406.7 1416.4 397.4 1424.2 390.4C1427.7 387.2 1431.8 384.5 1436.4 383.1C1439.4 382.2 
                            1442.6 381.8 1445.7 382C1457.6 382.6 1467.9 389.6 1473.6 399.7C1475.79 403.531 1477.23 407.695 1478.68 411.888C1478.82 412.292 1478.96 412.696 1479.1 413.1C1479.5 414.198 1479.9 415.196 1480.3 416.195L1480.3 416.2C1481.21 418.48 1482.24 420.717 1483.27 422.955ZM1466.4 402.366C1462.05 394.761 1454.2 389.49 1445.12 389.038C1442.75 388.887 1440.31 389.189 1438.03 389.866C1434.52 390.921 1431.39 392.954 
                            1428.72 395.363C1422.77 400.634 1418.73 407.637 1416.59 415.092C1416.24 416.482 1415.92 417.877 1415.61 419.273C1415.31 420.611 1416.42 421.85 1417.78 421.706L1469.3 416.249C1470.64 416.107 1471.47 414.706 1470.99 413.445C1470.68 412.61 1470.38 411.769 1470.07 410.928C1469.02 407.999 1467.97 405.071 1466.4 402.366Z"
                        />
                        <path className={`st7 ${tooth25Diagnozis?.cervical_caries ? 'cervical-caries' : ''}`}
                            d="M1445.12 389.038C1454.2 389.49 1462.05 394.761 1466.4 402.366C1468.41 405.848 1469.58 409.7 1470.99 413.445C1471.47 414.706 1470.64 416.107 1469.3 416.249L1417.78 421.706C1416.42 421.85 1415.31 420.611 1415.61 419.273C1415.92 417.877 1416.24 416.482 1416.59 415.092C1418.73 407.637 
                            1422.77 400.634 1428.72 395.363C1431.39 392.954 1434.52 390.921 1438.03 389.866C1440.31 389.189 1442.75 388.887 1445.12 389.038Z" 
                        />
                        <path className={
                                `st60
                                    ${(tooth25Diagnozis?.wedge_shaped_defect) ? `shaped-defect-stroke` : ""}
                                    ${(tooth25Diagnozis?.seal_cervical) ? `seal-cervical-stroke` : ""}
                                    ${tooth25Diagnozis.seal_cervical_color}
                                `
                            } 
                            d="M1445.12 389.038C1454.2 389.49 1462.05 394.761 1466.4 402.366C1468.41 405.848 1469.58 409.7 1470.99 413.445C1471.47 414.706 1470.64 416.107 1469.3 416.249L1417.78 421.706C1416.42 421.85 1415.31 420.611 1415.61 419.273C1415.92 417.877 1416.24 416.482 
                            1416.59 415.092C1418.73 407.637 1422.77 400.634 1428.72 395.363C1431.39 392.954 1434.52 390.921 1438.03 389.866C1440.31 389.189 1442.75 388.887 1445.12 389.038Z" 
                        />
                    </g>
                    {/*TARTAR*/}
                    <g style={{visibility: 'inherit', opacity: teethDiagnozis.tooth25.tartar ? 1 : 0}}>
                        <path className="st61 level2" d="M1404 435.999L1406 434.499L1407.5 431.499L1409 428.999V424.999L1410.5 422.499L1411.5 418.499V416.499L1413 414.999L1414 410.999L1415.5 407.999L1417 405.999V403.999L1419 399.999L1421.5 397.999L1423 395.499L1427 
                            392.499L1429.5 389.999L1433 388.499L1436 386.999H1440.5L1442.5 385.499H1447.5L1450 386.999H1452.5L1457 388.499L1460 389.999L1461.5 392.499L1464.5 393.499L1467 395.499L1470 399.999L1471.5 401.499L1474 406.999L1475.5 411.999L1477.5 416.499L1478.5 420.499L1480 422.499L1481.5 424.999L1485.5 427.499V425.999L1484.5 422.999V420.499L1483.5 418.499L1481.5 414.999V411.999L1480 
                            408.999L1479 405.499V402.999L1478.5 401.499L1478 397.499L1477.5 395.499V392.499L1476.5 389.999L1475.5 386.999V383.999L1474 382.499L1471.5 379.999L1468 375.999L1464.5 373.999L1461.5 370.499L1458.5 369.499H1455.5L1452.5 366.999L1447.5 365.499L1444 366.999L1440.5 365.499L1436 366.999H1433L1429.5 369.499L1425.5 370.499L1421.5 372.499L1419 
                            375.999L1415.5 379.999H1414L1411.5 382.499L1409 385.499V389.999L1407.5 393.499L1407 395.999V398.999L1406 401.499V404.499L1407 407.999L1406 409.999V413.499L1405 416.499V420.499L1404 424.999L1403.5 427.999V431.499L1404 435.999Z"
                        />
                        <path className="st61 level1" d="M1404 436L1406 434.5L1407.5 431.5L1409 429V425L1410.5 422.5L1411.5 418.5V416.5L1413 415L1414 411L1415.5 408L1417 406V404L1419 400L1421.5 398L1423 395.5L1427 392.5L1429.5 390L1433 388.5L1436 387H1440.5L1442.5 385.5H1447.5L1450 387H1452.5L1457 388.5L1460 390L1461.5 392.5L1464.5 393.5L1467 395.5L1470 400L1471.5 
                            401.5L1474 407L1475.5 412L1477.5 416.5L1478.5 420.5L1480 422.5L1481.5 425L1485.5 427.5L1484.5 425L1483.5 422.5V420.5L1481.5 418.5L1481 414.5L1480 412V410L1478.5 408V406L1477.5 404V401.5V399L1476.5 396.5L1475.5 395.5L1472.5 394.5L1471.5 392.5L1468.5 391L1467 389L1461.5 385.5L1460 
                            384.5L1458.5 383L1456 381.5H1451.5L1448.5 379.5H1442.5L1438 381.5H1434.5L1431 383L1425.5 384.5L1423 387L1417 391L1415.5 393.5L1411.5 395.5L1408 399L1407 401.5V404V406.5L1407.5 408V411L1406 
                            415V418.5L1405 421.5V423.5L1404 426L1403.5 428.5L1404 431.5V433.5V436Z"
                        />
                    </g>
                    {/*КАРИЕС*/}
                    <g className="header caries-filling hRoot hImplant hEmpty" style={{visibility: (!tooth25Diagnozis.culttab && !tooth25Diagnozis.abutment && !tooth25Diagnozis.implant && !tooth25Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        {/*КАРИЕС BOTTOM*/}
                        <g className="caries-filling aaaa" style={{zIndex: 3000}}
                            onClick={() => {
                                setColordedPart(diagnozis, 'bottom');
                            }}
                        >
                            <path className="st58" d="M1468.9,429.6c-0.3,0.8-0.4,6.5-0.3,14.2c-5.1-2-14.7-5-24.4-4.1c-7.2,0.7-17,4.8-22.1,7.1
                                c-0.5-4.6-1-8.2-1.5-9.8c-1.7-5.2-8.9-12.6-13.1-16.6c0.3-1.2,0.6-2.5,0.9-3.7c2.8-10,8-19.2,15.9-26.2c3.5-3.2,7.6-5.9,12.2-7.3
                                c3-0.9,6.2-1.3,9.3-1.1c11.8,0.6,22.2,7.6,27.9,17.7c2.4,4.2,3.8,8.9,5.5,13.4C1475.6,418.5,1469.7,427.6,1468.9,429.6z"
                            />
                            <path className={
                                    `st8 caries-bottom
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth25.caries_bottom ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth25.seal_bottom ? `seal-fill ${teethDiagnozis.tooth25.seal_bottom_color}` : ''}
                                `} 
                                d="M1468.9,429.6c-0.3,0.8-0.4,6.5-0.3,14.2c-5.1-2-14.7-5-24.4-4.1c-7.2,0.7-17,4.8-22.1,7.1
                                c-0.5-4.6-1-8.2-1.5-9.8c-1.7-5.2-8.9-12.6-13.1-16.6c0.3-1.2,0.6-2.5,0.9-3.7c2.8-10,8-19.2,15.9-26.2c3.5-3.2,7.6-5.9,12.2-7.3
                                c3-0.9,6.2-1.3,9.3-1.1c11.8,0.6,22.2,7.6,27.9,17.7c2.4,4.2,3.8,8.9,5.5,13.4C1475.6,418.5,1469.7,427.6,1468.9,429.6z"
                                style={{
                                    fill: teethDiagnozis.tooth25.caries_bottom ? '#606c80' : 
                                    teethDiagnozis.tooth25.seal_bottom ? teethDiagnozis.tooth25.seal_bottom_color : 'transparent',

                                }}
                            />
                        </g>
                        {/*КАРИЕС RIGHT*/}
                        <g
                            className="caries-filling hoho"
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className={`
                                st8 target caries-right 
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth25.caries_right ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth25.seal_right ? `seal-fill ${teethDiagnozis.tooth25.seal_right_color}` : ''}
                            `} 
                                d="M1489.4,455.5c-1.8,4.9-4,9.6-6.8,14c-3.8,6.1-8.5,11.6-12.7,17.4c-0.1,0.1-0.2,0.3-0.3,0.4
                                c-0.3-11-0.9-30.3-1-43.5c-0.1-7.7,0-13.4,0.3-14.2c0.8-2,6.7-11.1,10.3-16.5c0.4,1,0.8,2.1,1.2,3.1c2.4,6,5.5,11.7,7.5,17.9
                                C1490,441,1490.5,448.3,1489.4,455.5z"
                                style={{
                                    fill: teethDiagnozis.tooth25.caries_right ? '#606c80' : 
                                    teethDiagnozis.tooth25.seal_right ? teethDiagnozis.tooth25.seal_right_color : 'transparent',

                                }}
                            />
                            <path className="st8 target" d="M1489.4,455.5c-1.8,4.9-4,9.6-6.8,14c-3.8,6.1-8.5,11.6-12.7,17.4c-0.1,0.1-0.2,0.3-0.3,0.4
                                c-0.3-11-0.9-30.3-1-43.5c-0.1-7.7,0-13.4,0.3-14.2c0.8-2,6.7-11.1,10.3-16.5c0.4,1,0.8,2.1,1.2,3.1c2.4,6,5.5,11.7,7.5,17.9
                                C1490,441,1490.5,448.3,1489.4,455.5z"
                                style={{ fill: 'transparent', zIndex:2000 }}
                            />
                        </g>
                        {/* КАРИЕС CENTER */}
                        <g className="caries-filling hoho1"
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                        >
                            <path className="st58" d="M1469.6,487.3c-3.6,5-7.1,10.3-12.9,12.9c-4.8,2.2-10.4,2-15.2-0.1c-6.5-2.9-10.7-8.8-15.7-13.7
                                c-0.5-0.5-1-0.9-1.5-1.4c-0.5-10.9-1.3-27.5-2.3-38.2c5.1-2.3,14.9-6.4,22.1-7.1c9.7-0.9,19.3,2.1,24.4,4.1
                                C1468.7,457,1469.2,476.3,1469.6,487.3z"
                            />
                            <path className={
                                    `st8 caries-center
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth25.caries_center ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth25.seal_center ? `seal-fill ${teethDiagnozis.tooth25.seal_center_color}` : ''}
                                `}  
                                d="M1469.6,487.3c-3.6,5-7.1,10.3-12.9,12.9c-4.8,2.2-10.4,2-15.2-0.1c-6.5-2.9-10.7-8.8-15.7-13.7
                                c-0.5-0.5-1-0.9-1.5-1.4c-0.5-10.9-1.3-27.5-2.3-38.2c5.1-2.3,14.9-6.4,22.1-7.1c9.7-0.9,19.3,2.1,24.4,4.1
                                C1468.7,457,1469.2,476.3,1469.6,487.3z" 
                            />
                        </g>
                        {/*КАРИЕС LEFT*/}
                        <g className="caries-filling hoho3"
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                        >
                            <path className="st58" d="M1424.4,485c-4.7-4.3-10-8-14.2-12.7c-2.8-3.1-5-6.7-6.6-10.5c-1.3-7-1.4-14.1-0.4-21.1
                                c0.7-4.7,1.9-9.3,2.9-13.9c0.5-2.1,0.9-4.3,1.4-6.4c4.2,4,11.3,11.4,13.1,16.6c0.5,1.6,1,5.2,1.5,9.8
                                C1423.1,457.5,1423.9,474.1,1424.4,485z"
                            />
                            <path className={
                                    `st8 caries-left
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth25.caries_left ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth25.seal_left ? `seal-fill ${teethDiagnozis.tooth25.seal_left_color}` : ''}
                            `}
                                d="M1424.4,485c-4.7-4.3-10-8-14.2-12.7c-2.8-3.1-5-6.7-6.6-10.5c-1.3-7-1.4-14.1-0.4-21.1
                                c0.7-4.7,1.9-9.3,2.9-13.9c0.5-2.1,0.9-4.3,1.4-6.4c4.2,4,11.3,11.4,13.1,16.6c0.5,1.6,1,5.2,1.5,9.8
                                C1423.1,457.5,1423.9,474.1,1424.4,485z" 
                            />
                        </g>
                        <g className="with">
                            {/*Черточка право низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth25Diagnozis.seal_right && !tooth25Diagnozis.seal_top && !tooth25Diagnozis.seal_center) ||
                                        (tooth25Diagnozis.seal_right && tooth25Diagnozis.seal_top && !tooth25Diagnozis.seal_center) ||
                                        (!tooth25Diagnozis.seal_right && tooth25Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                                d="M1468.5 443.999L1469 479.999" 
                            />
                            {/*Черточка право верх*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth25Diagnozis.seal_right && !tooth25Diagnozis.seal_top && !tooth25Diagnozis.seal_bottom) ||
                                        (tooth25Diagnozis.seal_bottom && tooth25Diagnozis.seal_center && tooth25Diagnozis.seal_left && !tooth25Diagnozis.seal_right && !tooth25Diagnozis.seal_top) ||
                                        (!tooth25Diagnozis.seal_right && tooth25Diagnozis.seal_top && tooth25Diagnozis.seal_center) ||
                                        (tooth25Diagnozis.seal_bottom && tooth25Diagnozis.seal_center && !tooth25Diagnozis.seal_left && !tooth25Diagnozis.seal_right && !tooth25Diagnozis.seal_top) ||
                                        (tooth25Diagnozis.seal_bottom && !tooth25Diagnozis.seal_center && tooth25Diagnozis.seal_left && !tooth25Diagnozis.seal_right && !tooth25Diagnozis.seal_top) ||
                                        (!tooth25Diagnozis.seal_top && tooth25Diagnozis.seal_bottom && !tooth25Diagnozis.seal_center && !tooth25Diagnozis.seal_bottom)
                                    )
                                        ? 5 : 0
                                }} 
                                d="M1468.5 443.999C1468.5 430.999 1468.4 424.699 1476 417.499"
                            />
                            {/*Черточка середина*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth25Diagnozis.seal_right && tooth25Diagnozis.seal_left && tooth25Diagnozis.seal_center && !tooth25Diagnozis.seal_top && !tooth25Diagnozis.seal_bottom) ||
                                        (!tooth25Diagnozis.seal_top && !tooth25Diagnozis.seal_bottom && tooth25Diagnozis.seal_center) ||
                                        (tooth25Diagnozis.seal_bottom && !tooth25Diagnozis.seal_center && tooth25Diagnozis.seal_left && tooth25Diagnozis.seal_right && tooth25Diagnozis.seal_top) ||
                                        (!tooth25Diagnozis.seal_top && tooth25Diagnozis.seal_bottom && !tooth25Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1468.5 443.999C1461 439.833 1441.2 434.499 1422 446.499"
                            />
                            {/*Черточка лево верх*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth25Diagnozis.seal_left && !tooth25Diagnozis.seal_top && !tooth25Diagnozis.seal_bottom) ||
                                        (!tooth25Diagnozis.seal_left && tooth25Diagnozis.seal_top && tooth25Diagnozis.seal_center) ||
                                        (tooth25Diagnozis.seal_bottom && tooth25Diagnozis.seal_center && !tooth25Diagnozis.seal_left && !tooth25Diagnozis.seal_right && !tooth25Diagnozis.seal_top) ||
                                        (tooth25Diagnozis.seal_bottom && tooth25Diagnozis.seal_center && !tooth25Diagnozis.seal_left && tooth25Diagnozis.seal_right && !tooth25Diagnozis.seal_top) ||
                                        (tooth25Diagnozis.seal_bottom && !tooth25Diagnozis.seal_center && !tooth25Diagnozis.seal_left && tooth25Diagnozis.seal_right && !tooth25Diagnozis.seal_top) ||
                                        (!tooth25Diagnozis.seal_bottom && !tooth25Diagnozis.seal_top && tooth25Diagnozis.seal_bottom && !tooth25Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1422 446.499C1421 430.499 1418.6 426.799 1411 423.999" 
                            />
                            {/*Черточка лево низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth25Diagnozis.seal_left && !tooth25Diagnozis.seal_top && !tooth25Diagnozis.seal_center) ||
                                        (tooth25Diagnozis.seal_left && tooth25Diagnozis.seal_top && !tooth25Diagnozis.seal_center) ||
                                        (!tooth25Diagnozis.seal_left && tooth25Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                                d="M1422 446.999L1424 477.499"
                            />
                        </g>
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir" 
                            style={{
                                visibility: tooth25Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth25Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className={`vinir-fill ${tooth25Diagnozis.vinir_color}`} 
                                d="M1487.8 434.1C1485.9 427.9 1482.7 422.2 1480.3 416.2C1479.9 415.2 1479.5 414.2 1479.1 413.1C1477.5 408.5 1476 403.9 1473.6 399.7C1467.9 389.6 1457.6 382.6 1445.7 382C1442.6 381.8 1439.4 382.2 1436.4 383.1C1431.8 384.5 1427.7 387.2 1424.2 390.4C1416.4 397.4 1411.1 
                                406.7 1408.3 416.6C1408 417.8 1407.6 419.1 1407.4 420.3C1406.9 422.4 1406.5 424.6 1406 426.7C1405 431.3 1403.8 435.9 1403.1 440.6C1402.1 447.6 1402.2 454.7 1403.5 461.7C1405.1 465.5 1407.3 469.1 1410.1 472.2C1414.3 476.9 1419.6 480.6 1424.3 484.9C1424.8 485.4 1425.3 485.8 1425.8 486.3C1430.8 491.2 1435 497.1 1441.4 500C1446.2 502.1 
                                1451.8 502.3 1456.6 500.1C1462.4 497.5 1465.9 492.2 1469.5 487.2C1469.6 487.1 1469.7 486.9 1469.8 486.8C1474 481 1478.7 475.5 1482.5 469.4C1485.3 465 1487.6 460.3 1489.3 455.4C1490.5 448.3 1490 441 1487.8 434.1Z"
                            />
                        </g>
                    </g>
                    {/* ТИМЧАСОВА КОРОНКА/КЕРАМІЧНА КОРОНКА */}
                    <g className="crown" style={{
                        visibility: (tooth25Diagnozis.temporary_crown || tooth25Diagnozis.ceramic_crown || tooth25Diagnozis.mceramic_crown || tooth25Diagnozis.metalic_crown || tooth25Diagnozis.zirconia_crown) ? 'inherit' : 'hidden',
                        opacity: (tooth25Diagnozis.temporary_crown || tooth25Diagnozis.ceramic_crown || tooth25Diagnozis.mceramic_crown || tooth25Diagnozis.metalic_crown || tooth25Diagnozis.zirconia_crown)  ? 1 : 0
                    }}>
                        <path className={
                                `st46 target temporary-crown crown-fill ${diagnozis}
                                ${tooth25Diagnozis.ceramic_crown_color}
                                ${tooth25Diagnozis.mceramic_crown_color}
                                ${tooth25Diagnozis.metalic_crown_color}
                                ${tooth25Diagnozis.zirconia_crown_color}
                            `} 
                            d="M1487.8,434.1c-1.9-6.2-5.1-11.9-7.5-17.9c-0.4-1-0.8-2-1.2-3.1
                            c-1.6-4.6-3.1-9.2-5.5-13.4c-5.7-10.1-16-17.1-27.9-17.7c-3.1-0.2-6.3,0.2-9.3,1.1c-4.6,1.4-8.7,4.1-12.2,7.3
                            c-7.8,7-13.1,16.3-15.9,26.2c-0.3,1.2-0.7,2.5-0.9,3.7c-0.5,2.1-0.9,4.3-1.4,6.4c-1,4.6-2.2,9.2-2.9,13.9c-1,7-0.9,14.1,0.4,21.1
                            c1.6,3.8,3.8,7.4,6.6,10.5c4.2,4.7,9.5,8.4,14.2,12.7c0.5,0.5,1,0.9,1.5,1.4c5,4.9,9.2,10.8,15.6,13.7c4.8,2.1,10.4,2.3,15.2,0.1
                            c5.8-2.6,9.3-7.9,12.9-12.9c0.1-0.1,0.2-0.3,0.3-0.4c4.2-5.8,8.9-11.3,12.7-17.4c2.8-4.4,5.1-9.1,6.8-14
                            C1490.5,448.3,1490,441,1487.8,434.1z"
                        />
                    </g>
                </g>
            </g>
        </>
    )
}
