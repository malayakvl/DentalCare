import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSubDiagnosis, setToothDiagnoze, setNewToothActive, setDisactiveAll, setSelectedToothNumber, setTooth16Active } from '../../../Redux/Formula';
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
import PeriodontitStage16 from './periodontit16';


export default function Tooth16() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth16Diagnozis = teethDiagnozis.tooth16;
    const [_, setDiagnozeClass] = useState('');
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
                teethDiagnozis.tooth16.caries_bottom = !teethDiagnozis.tooth16.caries_bottom;
            }
            if (toothPart === 'center') {
                teethDiagnozis.tooth16.caries_center = !teethDiagnozis.tooth16.caries_center;
            }
            if (toothPart === 'left') {
                teethDiagnozis.tooth16.caries_left = !teethDiagnozis.tooth16.caries_left;
            }
            if (toothPart === 'right') {
                teethDiagnozis.tooth16.caries_right = !teethDiagnozis.tooth16.caries_right;
            }
            if (toothPart === 'top') {
                teethDiagnozis.tooth16.caries_top = !teethDiagnozis.tooth16.caries_top;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'seal') {
            if (toothPart === 'center') {
                if (teethDiagnozis.tooth16.seal_center_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth16.seal_center_color = sealColor1;
                    teethDiagnozis.tooth16.seal_center = true;
                } else if (teethDiagnozis.tooth16.seal_center_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth16.seal_center_color = sealColor2;
                    teethDiagnozis.tooth16.seal_center = true;
                } else if (teethDiagnozis.tooth16.seal_center_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth16.seal_center_color = sealColor3;
                    teethDiagnozis.tooth16.seal_center = true;
                } else {
                    teethDiagnozis.tooth16.seal_center = !teethDiagnozis.tooth16.seal_center;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'bottom') {
                if (teethDiagnozis.tooth16.seal_bottom_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth16.seal_bottom_color = sealColor1;
                    teethDiagnozis.tooth16.seal_bottom = true;
                } else if (teethDiagnozis.tooth16.seal_bottom_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth16.seal_bottom_color = sealColor2;
                    teethDiagnozis.tooth16.seal_bottom = true;
                } else if (teethDiagnozis.tooth16.seal_bottom_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth16.seal_bottom_color = sealColor3;
                    teethDiagnozis.tooth16.seal_bottom = true;
                } else {
                    teethDiagnozis.tooth16.seal_bottom = !teethDiagnozis.tooth16.seal_bottom;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'left') {
                if (teethDiagnozis.tooth16.seal_left_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth16.seal_left_color = sealColor1;
                    teethDiagnozis.tooth16.seal_left = true;
                } else if (teethDiagnozis.tooth16.seal_left_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth16.seal_left_color = sealColor2;
                    teethDiagnozis.tooth16.seal_left = true;
                } else if (teethDiagnozis.tooth16.seal_left_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth16.seal_left_color = sealColor3;
                    teethDiagnozis.tooth16.seal_left = true;
                } else {
                    teethDiagnozis.tooth16.seal_left = !teethDiagnozis.tooth16.seal_left;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'right') {
                if (teethDiagnozis.tooth16.seal_right_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth16.seal_right_color = sealColor1;
                    teethDiagnozis.tooth16.seal_right = true;
                } else if (teethDiagnozis.tooth16.seal_right_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth16.seal_right_color = sealColor2;
                    teethDiagnozis.tooth16.seal_right = true;
                } else if (teethDiagnozis.tooth16.seal_right_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth16.seal_right_color = sealColor3;
                    teethDiagnozis.tooth16.seal_right = true;
                } else {
                    teethDiagnozis.tooth16.seal_right = !teethDiagnozis.tooth16.seal_right;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'top') {
                if (teethDiagnozis.tooth16.seal_top_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth16.seal_top_color = sealColor1;
                    teethDiagnozis.tooth16.seal_top = true;
                } else if (teethDiagnozis.tooth16.seal_top_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth16.seal_top_color = sealColor2;
                    teethDiagnozis.tooth16.seal_top = true;
                } else if (teethDiagnozis.tooth16.seal_top_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth16.seal_top_color = sealColor3;
                    teethDiagnozis.tooth16.seal_top = true;
                } else {
                    teethDiagnozis.tooth16.seal_top = !teethDiagnozis.tooth16.seal_top;
                }
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'wedge_shaped_defect') {
            if (teethDiagnozis.tooth16.wedge_shaped_defect_color != wsDefectColor && wsDefectColor != '') {
                teethDiagnozis.tooth16.wedge_shaped_defect_color = wsDefectColor;
            } else {
                teethDiagnozis.tooth16.wedge_shaped_defect_color = !teethDiagnozis.tooth16.wedge_shaped_defect_color;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
    }

    return ( 
        <>
            <g id="16" className="df-tooth-text" style={{opacity: 1}}>
                <text transform="matrix(1 0 0 1 507.4561 716.1968)" className={`st3 st4 st5 ${toothActive.tooth16.active ? 'num-active' : ''}`}>16</text>
            </g>
            <g className={`f-tooth-active`}
                onMouseOver={() => {
                    (!toothActive && !allTeeth) && document.getElementById('16').classList.add('tooth-number-hover')
                }}
                onMouseLeave={() => {
                    (!toothActive && !allTeeth) && document.getElementById('16').classList.remove('tooth-number-hover')
                }}
                onClick={() => {
                    dispatch(setSelectedToothNumber(16));
                    if (toothActive.tooth16.active) {
                        dispatch(setNewToothActive({tooth16: {active: true}}))
                    } else {
                        dispatch(setDisactiveAll());
                        dispatch(setNewToothActive({tooth16: {active: true}}))
                    }
                    if (diagnozis) {
                        if (diagnozis === 'change_color')
                            teethDiagnozis.tooth16.change_color = !teethDiagnozis.tooth16.change_color;
                        else if (diagnozis === 'fissure')
                            teethDiagnozis.tooth16.fissure = !teethDiagnozis.tooth16.fissure;
                        else if (diagnozis === 'caries')
                            teethDiagnozis.tooth16.caries = !teethDiagnozis.tooth16.caries;
                        else if (diagnozis === 'cervical_caries')
                            teethDiagnozis.tooth16.cervical_caries = !teethDiagnozis.tooth16.cervical_caries;
                        else if (diagnozis === 'wedge_shaped_defect')
                            teethDiagnozis.tooth16.wedge_shaped_defect = !teethDiagnozis.tooth16.wedge_shaped_defect;
                        else if (diagnozis === 'tartar')
                            teethDiagnozis.tooth16.tartar = !teethDiagnozis.tooth16.tartar;
                        else if (diagnozis === 'pulpit') {
                            teethDiagnozis.tooth16.pulpit = !teethDiagnozis.tooth16.pulpit;
                            teethDiagnozis.tooth16.channel_class = teethDiagnozis.tooth16.pulpit ? 'pulpit' : ''
                            // setDiagnozeClass(teethDiagnozis.tooth16.pulpit ? 'pulpit' : '');
                        } else if (diagnozis === 'channel_not_sealed') {
                            teethDiagnozis.tooth16.channel_not_sealed = !teethDiagnozis.tooth16.channel_not_sealed;
                            teethDiagnozis.tooth16.channel_class = teethDiagnozis.tooth16.channel_not_sealed ? 'channel-not-sealed' : '';
                            // setDiagnozeClass(teethDiagnozis.tooth16.channel_not_sealed ? 'channel-not-sealed' : '');
                        } else if (diagnozis === 'channel_top_sealed') {
                            teethDiagnozis.tooth16.channel_top_sealed = !teethDiagnozis.tooth16.channel_top_sealed;
                            teethDiagnozis.tooth16.channel_class = teethDiagnozis.tooth16.channel_top_sealed ? 'channel-top-sealed' : '';
                            // setDiagnozeClass(teethDiagnozis.tooth16.channel_top_sealed ? 'channel-top-sealed' : '');
                        } else if (diagnozis === 'channel_part_sealed') {
                            teethDiagnozis.tooth16.channel_part_sealed = !teethDiagnozis.tooth16.channel_part_sealed;
                            teethDiagnozis.tooth16.channel_class = teethDiagnozis.tooth16.channel_part_sealed ? 'channel-part-sealed' : '';
                            // setDiagnozeClass(teethDiagnozis.tooth16.channel_part_sealed ? 'channel-part-sealed' : '');
                        } else if (diagnozis === 'periodontit') {
                            if (teethDiagnozis.tooth16.periodontit_stage !== subDiagnozis) {
                                teethDiagnozis.tooth16.periodontit_stage = subDiagnozis
                                teethDiagnozis.tooth16.periodontit = true;
                            } else {
                                teethDiagnozis.tooth16.periodontit = !teethDiagnozis.tooth16.periodontit;
                            }
                            teethDiagnozis.tooth16.channel_class = teethDiagnozis.tooth16.periodontit ? 'periodontit' : '';
                            if (!teethDiagnozis.tooth16.periodontit) dispatch(setSubDiagnosis(''));
                        } else if (diagnozis === 'seal_cervical') {
                            if (!teethDiagnozis.tooth16.seal_cervical && teethDiagnozis.tooth16.seal_cervical_color === "") {
                                teethDiagnozis.tooth16.seal_cervical = true;
                                teethDiagnozis.tooth16.seal_cervical_color = wsDefectColor;
                            } else if (teethDiagnozis.tooth16.seal_cervical && teethDiagnozis.tooth16.seal_cervical_color != wsDefectColor) {
                                teethDiagnozis.tooth16.seal_cervical_color = wsDefectColor;
                            } else {
                                teethDiagnozis.tooth16.seal_cervical = false;
                                teethDiagnozis.tooth16.seal_cervical_color = "";
                            }
                        } else if (diagnozis === 'vinir') {
                            if (!teethDiagnozis.tooth16.vinir && teethDiagnozis.tooth16.vinir_color === "") {
                                teethDiagnozis.tooth16.vinir = true;
                                teethDiagnozis.tooth16.vinir_color = vinirColor;
                            } else if (teethDiagnozis.tooth16.vinir && teethDiagnozis.tooth16.vinir_color != vinirColor) {
                                teethDiagnozis.tooth16.vinir_color = vinirColor;
                            } else {
                                teethDiagnozis.tooth16.vinir = false;
                                teethDiagnozis.tooth16.vinir_color = "";
                            }
                        } else if (diagnozis === 'temporary_crown') {
                            teethDiagnozis.tooth16.temporary_crown = !teethDiagnozis.tooth16.temporary_crown;
                        } else if (diagnozis === 'ceramic_crown') {
                            if (!teethDiagnozis.tooth16.ceramic_crown && teethDiagnozis.tooth16.ceramic_crown_color === "") {
                                teethDiagnozis.tooth16.ceramic_crown = true;
                                teethDiagnozis.tooth16.ceramic_crown_color = ceramicCrownColor;
                            } else if (teethDiagnozis.tooth16.ceramic_crown && teethDiagnozis.tooth16.ceramic_crown_color != ceramicCrownColor) {
                                teethDiagnozis.tooth16.ceramic_crown_color = ceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth16.ceramic_crown = false;
                                teethDiagnozis.tooth16.ceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'mceramic_crown') {
                            if (!teethDiagnozis.tooth16.mceramic_crown && teethDiagnozis.tooth16.mceramic_crown_color === "") {
                                teethDiagnozis.tooth16.mceramic_crown = true;
                                teethDiagnozis.tooth16.mceramic_crown_color = mceramicCrownColor;
                            } else if (teethDiagnozis.tooth16.mceramic_crown && teethDiagnozis.tooth16.mceramic_crown_color != mceramicCrownColor) {
                                teethDiagnozis.tooth16.mceramic_crown_color = mceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth16.mceramic_crown = false;
                                teethDiagnozis.tooth16.mceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'metalic_crown') {
                            if (!teethDiagnozis.tooth16.metalic_crown && teethDiagnozis.tooth16.metalic_crown_color === "") {
                                teethDiagnozis.tooth16.metalic_crown = true;
                                teethDiagnozis.tooth16.metalic_crown_color = metalicCrownColor;
                            } else if (teethDiagnozis.tooth16.metalic_crown && teethDiagnozis.tooth16.metalic_crown_color != metalicCrownColor) {
                                teethDiagnozis.tooth16.mceramic_crown_color = metalicCrownColor;
                            } else {
                                teethDiagnozis.tooth16.metalic_crown = false;
                                teethDiagnozis.tooth16.metalic_crown_color = "";
                            }
                        } else if (diagnozis === 'zirconia_crown') {
                            if (!teethDiagnozis.tooth16.zirconia_crown && teethDiagnozis.tooth16.zirconia_crown_color === "") {
                                teethDiagnozis.tooth16.zirconia_crown = true;
                                teethDiagnozis.tooth16.zirconia_crown_color = zirconiaCrownColor;
                            } else if (teethDiagnozis.tooth16.zirconia_crown && teethDiagnozis.tooth16.zirconia_crown_color != zirconiaCrownColor) {
                                teethDiagnozis.tooth16.zirconia_crown_color = zirconiaCrownColor;
                            } else {
                                teethDiagnozis.tooth16.zirconia_crown = false;
                                teethDiagnozis.tooth16.zirconia_crown_color = "";
                            }
                        } else if (diagnozis === 'pin') {
                            teethDiagnozis.tooth16.pin = !teethDiagnozis.tooth16.pin;
                        } else if (diagnozis === 'culttab') {
                            teethDiagnozis.tooth16.culttab = !teethDiagnozis.tooth16.culttab;
                        } else if (diagnozis === 'abutment') {
                            teethDiagnozis.tooth16.abutment = !teethDiagnozis.tooth16.abutment;
                        } else if (diagnozis === 'shaper') {
                            teethDiagnozis.tooth16.shaper = !teethDiagnozis.tooth16.shaper;
                        } else if (diagnozis === 'implant') {
                            teethDiagnozis.tooth16.implant = !teethDiagnozis.tooth16.implant;
                        } else if (diagnozis === 'apex') {
                            teethDiagnozis.tooth16.apex = !teethDiagnozis.tooth16.apex;
                        } else if (diagnozis === 'absent') {
                            teethDiagnozis.tooth16.absent = !teethDiagnozis.tooth16.absent;
                        } else if (diagnozis === 'cervical_caries') {
                            teethDiagnozis.tooth16.cervical_caries = !teethDiagnozis.tooth16.cervical_caries;
                        } else if (diagnozis === 'caries') {
                            teethDiagnozis.tooth16.caries = !teethDiagnozis.tooth16.caries;
                        } else if (diagnozis === 'parodontit') {
                            if (teethDiagnozis.tooth16.parodontit) {
                                if (teethDiagnozis.tooth16.parodontit_stage === subDiagnozis) {
                                    teethDiagnozis.tooth16.parodontit = false;
                                    teethDiagnozis.tooth16.active = false;
                                } else {
                                    teethDiagnozis.tooth16.parodontit = true;
                                    teethDiagnozis.tooth16.parodontit_stage = subDiagnozis
                                }
                            } else {
                                teethDiagnozis.tooth16.parodontit = true;
                                teethDiagnozis.tooth16.parodontit_stage = subDiagnozis;
                                teethDiagnozis.tooth16.active = true;
                            }
                        }
                        dispatch(setToothDiagnoze(teethDiagnozis))
                    }
                }}
            >
                <g className="underlay" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <path className="st40" d="M496.7,264.2c0,0-11.2,23.7-9.6,44.1c1.6,20.4,6.2,35.2,2.7,50.9
                        c-3.5,15.7-24.5,35.9-27.9,65.9c-3.4,30,2.4,45.9,25.1,66.7c11.9,10.9-0.6,30.4-10.1,49c-8.6,16.8-13.4,38.3-18.7,56.1
                        c-11.2,37.5-16.1,59.8-2.1,94.8c14,35,64.5,54.8,93.9,40.3c17-8.4,33.3-33.2,44.6-69.9c8.3-26.9,13.3-48.1,13.3-86.1
                        c0-25-7.5-36.4-15.2-49.9c-6.6-11.7-3.9-20.3-1.6-26.5c6.2-16.9,6.6-14.6,10.9-23.9c13-27.9,6-55.4,7.9-66.4
                        c3.1-18.1,12.3-51.1,8.1-91.3c-4.1-40.2-14.4-61.6-25.1-68.3c-10.7-6.6-26.9-13.9-43.6-13S506.4,241.9,496.7,264.2z" 
                    />
                </g>
                <g id="T_16_up" className="top-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR/APEX/CULTTAB */}
                    <g className="dentin" >
                        <g className={`hEmpty hRoot hImplant`} style={{visibility: !tooth16Diagnozis.culttab && !tooth16Diagnozis.implant && !tooth16Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st24 ${tooth16Diagnozis.apex ? 'apex' : ''}`} d="M462,607.2c1.5-3.5,3.3-6.9,4.8-10.3c3.9-8.9,6.2-18.9,11.7-27.4
                                c5.3-8.3,13.2-14.8,24.9-17.1c9.5-1.9,19.5,0.1,29.4-0.3c5.1-0.2,10.4-1,15.4-1.6c17.3-2.3,35.1-1.8,44.5,9.5
                                c2.7,3.2,4,6.9,4.8,10.6c1.6,7.2,1.4,14.4,0.4,21.6c-1.4,10.4-4.2,20.9-9.2,30.6c-3.9,7.4-9.1,14.4-17.7,18.9
                                c-7.3,3.8-16.2,5-24.9,4.2c-4.9-0.5-9.7-1.7-14.7-1.6c-8.6,0.1-16.3,3.9-24.7,5.2c-5.3,0.9-10.8,0.8-16.1,0
                                c-5.6-0.8-11-2.2-15.9-4.5c-5.4-2.6-9.9-6.3-12.6-10.8C457,625.8,458.3,616.1,462,607.2z"
                            />
                        </g>
                        <g className={`hIntact hImplant hEmpty`} style={{visibility: tooth16Diagnozis?.apex || tooth16Diagnozis.change_color ? 'inherit' : 'hidden'}}>
                            <path className={`st24 change-color ${tooth16Diagnozis?.change_color ? 'diagnoze-opacity' : ''} ${tooth16Diagnozis?.apex ? 'apex' : ''}`}
                                d="M462 607.2C463.5 603.7 465.3 600.3 466.8 596.9C470.7 588 473 578 478.5 569.5C483.8 561.2 491.7 554.7 503.4 552.4C512.9 550.5 522.9 552.5 532.8 552.1C537.9 551.9 543.2 551.1 548.2 550.5C565.5 548.2 583.3 548.7 592.7 560C595.4 563.2 596.7 566.9 597.5 570.6C599.1 577.8 598.9 585 597.9 592.2C596.5 602.6 593.7 613.1 588.7 622.8C584.8 630.2 579.6 637.2 571 641.7C563.7 645.5 554.8 646.7 546.1 645.9C541.2 645.4 536.4 644.2 531.4 644.3C522.8 644.4 515.1 648.2 506.7 649.5C501.4 650.4 495.9 650.3 490.6 649.5C485 648.7 479.6 647.3 474.7 645C469.3 642.4 464.8 638.7 
                                462.1 634.2C457 625.8 458.3 616.1 462 607.2Z" 
                            />
                            <path className={`st53 change-color ${tooth16Diagnozis?.change_color ? 'diagnoze-opacity' : ''} ${tooth16Diagnozis?.apex ? 'apex' : ''}`}
                                d="M498.328 592.108C498.328 608.978 494.476 627 513.178 627C521.586 627 529.891 617.671 540.43 612.158C555.047 604.512 571 604.403 571 592.108C571 579.812 555.155 582.474 535.087 582.474C515.019 582.474 502.068 
                                578.763 498.328 592.108Z" 
                            />
                        </g>
                    </g>
                    {/* PULPIT */}
                    <g className="pulp">
                        <g className="hIntact hEmpty hImplant pulpitis-pfilling" style={{visibility: 'hidden'}}>
                            <ellipse className="st22 target" rx="8.35891" ry="8.89013" transform="matrix(-0.200896 0.979613 0.979613 0.200896 511.388 615.974)" style={{fill: 'rgb(254, 246, 249)'}}></ellipse>
                            <ellipse className="st22 target" rx="7.49883" ry="8.49434" transform="matrix(-0.462677 -0.886527 -0.886527 0.462677 510 592.578)" style={{fill: 'rgb(254, 246, 249)'}}></ellipse>
                            <ellipse className="st22 target" rx="7.52721" ry="9.0078" transform="matrix(-0.639739 0.768592 0.768592 0.639739 557.109 592.522)" style={{fill: 'rgb(254, 246, 249)'}}></ellipse>
                        </g>
                    </g>
                    {/* IMPLANT */}
                    <g className="implant hEmpty hIntact hRoot" style={{visibility: tooth16Diagnozis.implant || tooth16Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <circle className="st48" cx="531.5" cy="598.5" r="26.5"></circle>
                        <g className="st27">
                            <mask id="implant_16" className="st49">
                                <path className="st50" d="M517.905 582.474L514.458 581.352C511.529 584.3 509.349 587.994 508.231 592.124L510.928 594.55C510.686 595.829 510.56 597.15 510.56 598.5C510.56 599.85 510.686 601.17 510.928 602.45L508.231 604.875C509.349 609.006 511.529 612.7 514.458 615.648L517.905 614.525C519.895 616.242 522.209 617.594 524.743 618.478L525.494 622.024C527.479 622.548 529.564 622.827 531.714 622.827C533.864 622.827 535.95 622.548 537.936 622.024L538.687 618.477C541.22 617.593 543.533 616.241 545.523 614.525L548.97 615.647C551.899 612.699 554.079 609.004 555.197 604.874L552.5 602.448C552.741 601.169 552.868 599.849 552.868 598.5C552.868 597.15 552.741 595.831 552.5 594.552L555.197 592.126C554.079 587.995 551.899 584.301 548.97 581.352L545.523 582.475C543.533 580.758 541.22 579.406 538.687 578.522L537.936 574.976C535.95 574.452 533.864 574.173 531.714 574.173C529.564 574.173 527.479 574.452 525.494 574.975L524.743 578.521C522.209 579.405 519.895 580.758 517.905 582.474Z"></path>
                            </mask>
                            <path className="st50 st51" d="M517.905 582.474L514.458 581.352C511.529 584.3 509.349 587.994 508.231 592.124L510.928 594.55C510.686 595.829 510.56 597.15 510.56 598.5C510.56 599.85 510.686 601.17 510.928 602.45L508.231 604.875C509.349 609.006 511.529 612.7 514.458 615.648L517.905 614.525C519.895 616.242 522.209 617.594 524.743 618.478L525.494 622.024C527.479 622.548 529.564 622.827 531.714 622.827C533.864 622.827 535.95 622.548 537.936 622.024L538.687 618.477C541.22 617.593 543.533 616.241 545.523 614.525L548.97 615.647C551.899 612.699 554.079 609.004 555.197 604.874L552.5 602.448C552.741 601.169 552.868 599.849 552.868 598.5C552.868 597.15 552.741 595.831 552.5 594.552L555.197 592.126C554.079 587.995 551.899 584.301 548.97 581.352L545.523 582.475C543.533 580.758 541.22 579.406 538.687 578.522L537.936 574.976C535.95 574.452 533.864 574.173 531.714 574.173C529.564 574.173 527.479 574.452 525.494 574.975L524.743 578.521C522.209 579.405 519.895 580.758 517.905 582.474Z"></path>
                            <path className="st52" d="M514.458 581.352L515.078 579.45L513.907 579.069L513.04 579.942L514.458 581.352ZM517.905 582.474L517.286 584.376L518.357 584.725L519.211 583.989L517.905 582.474ZM508.231 592.124L506.3 591.601L505.979 592.789L506.893 593.611L508.231 592.124ZM510.928 594.55L512.893 594.921L513.102 593.815L512.265 593.063L510.928 594.55ZM510.928 602.45L512.265 603.937L513.102 603.184L512.893 602.079L510.928 602.45ZM508.231 604.875L506.893 603.388L505.979 604.211L506.3 605.398L508.231 604.875ZM514.458 615.648L513.04 617.057L513.907 617.93L515.078 617.549L514.458 615.648ZM517.905 614.525L519.211 613.011L518.358 612.275L517.286 612.624L517.905 614.525ZM524.743 618.478L526.699 618.063L526.465 616.961L525.401 616.59L524.743 618.478ZM525.494 622.024L523.537 622.439L523.793 623.644L524.984 623.958L525.494 622.024ZM537.936 622.024L538.446 623.958L539.637 623.643L539.892 622.438L537.936 622.024ZM538.687 618.477L538.028 616.589L536.964 616.96L536.731 618.063L538.687 618.477ZM545.523 614.525L546.142 612.623L545.07 612.274L544.217 613.01L545.523 614.525ZM548.97 615.647L548.35 617.549L549.521 617.93L550.388 617.057L548.97 615.647ZM555.197 604.874L557.128 605.396L557.449 604.209L556.534 603.386L555.197 604.874ZM552.5 602.448L550.534 602.077L550.326 603.183L551.162 603.935L552.5 602.448ZM552.5 594.552L551.162 593.064L550.326 593.817L550.534 594.923L552.5 594.552ZM555.197 592.126L556.534 593.613L557.449 592.791L557.128 591.603L555.197 592.126ZM548.97 581.352L550.388 579.943L549.521 579.07L548.35 579.451L548.97 581.352ZM545.523 582.475L544.217 583.989L545.071 584.726L546.142 584.376L545.523 582.475ZM538.687 578.522L536.731 578.937L536.964 580.039L538.028 580.411L538.687 578.522ZM537.936 574.976L539.892 574.561L539.637 573.356L538.446 573.042L537.936 574.976ZM525.494 574.975L524.984 573.041L523.793 573.355L523.537 574.561L525.494 574.975ZM524.743 578.521L525.401 580.41L526.465 580.039L526.699 578.936L524.743 578.521ZM513.839 583.254L517.286 584.376L518.524 580.573L515.078 579.45L513.839 583.254ZM510.161 592.647C511.187 588.86 513.186 585.469 515.877 582.762L513.04 579.942C509.871 583.13 507.512 587.128 506.3 591.601L510.161 592.647ZM512.265 593.063L509.568 590.637L506.893 593.611L509.591 596.037L512.265 593.063ZM512.56 598.5C512.56 597.275 512.675 596.079 512.893 594.921L508.963 594.179C508.698 595.58 508.56 597.025 508.56 598.5H512.56ZM512.893 602.079C512.675 600.921 512.56 599.725 512.56 598.5H508.56C508.56 599.975 508.698 601.42 508.963 602.821L512.893 602.079ZM509.568 606.362L512.265 603.937L509.591 600.963L506.893 603.388L509.568 606.362ZM515.877 614.238C513.186 611.53 511.187 608.14 510.161 604.352L506.3 605.398C507.512 609.872 509.871 613.869 513.04 617.057L515.877 614.238ZM517.286 612.624L513.839 613.746L515.078 617.549L518.524 616.427L517.286 612.624ZM525.401 616.59C523.11 615.79 521.015 614.566 519.211 613.011L516.599 616.04C518.776 617.918 521.309 619.398 524.084 620.366L525.401 616.59ZM527.45 621.61L526.699 618.063L522.786 618.893L523.537 622.439L527.45 621.61ZM531.714 620.827C529.738 620.827 527.824 620.57 526.004 620.09L524.984 623.958C527.134 624.525 529.39 624.827 531.714 624.827V620.827ZM537.426 620.09C535.605 620.57 533.691 620.827 531.714 620.827V624.827C534.038 624.827 536.295 624.525 538.446 623.958L537.426 620.09ZM536.731 618.063L535.979 621.609L539.892 622.438L540.644 618.892L536.731 618.063ZM544.217 613.01C542.414 614.565 540.319 615.789 538.028 616.589L539.346 620.365C542.121 619.397 544.652 617.917 546.829 616.039L544.217 613.01ZM549.589 613.745L546.142 612.623L544.904 616.426L548.35 617.549L549.589 613.745ZM553.267 604.351C552.241 608.139 550.242 611.53 547.551 614.237L550.388 617.057C553.557 613.868 555.916 609.87 557.128 605.396L553.267 604.351ZM551.162 603.935L553.86 606.361L556.534 603.386L553.837 600.961L551.162 603.935ZM550.868 598.5C550.868 599.724 550.753 600.92 550.534 602.077L554.465 602.819C554.729 601.418 554.868 599.974 554.868 598.5H550.868ZM550.534 594.923C550.753 596.08 550.868 597.276 550.868 598.5H554.868C554.868 597.025 554.729 595.581 554.465 594.18L550.534 594.923ZM553.86 590.639L551.162 593.064L553.837 596.039L556.534 593.613L553.86 590.639ZM547.551 582.762C550.242 585.47 552.241 588.861 553.267 592.649L557.128 591.603C555.916 587.129 553.557 583.131 550.388 579.943L547.551 582.762ZM546.142 584.376L549.589 583.254L548.35 579.451L544.904 580.573L546.142 584.376ZM538.028 580.411C540.319 581.21 542.414 582.434 544.217 583.989L546.829 580.96C544.653 579.083 542.121 577.602 539.346 576.634L538.028 580.411ZM535.979 575.39L536.731 578.937L540.644 578.108L539.892 574.561L535.979 575.39ZM531.714 576.173C533.691 576.173 535.605 576.429 537.426 576.91L538.446 573.042C536.295 572.475 534.038 572.173 531.714 572.173V576.173ZM526.004 576.909C527.824 576.429 529.738 576.173 531.714 576.173V572.173C529.39 572.173 527.134 572.474 524.984 573.041L526.004 576.909ZM526.699 578.936L527.45 575.39L523.537 574.561L522.786 578.107L526.699 578.936ZM519.211 583.989C521.015 582.433 523.11 581.209 525.401 580.41L524.084 576.633C521.309 577.601 518.776 579.082 516.599 580.96L519.211 583.989Z" mask="url(#implant_16)"></path>
                        </g>
                    </g>
                    <g className="shaper hEmpty hIntact hRoot" style={{visibility: 'hidden', opacity: 0}} >
                        <circle className="st44" cx="531.5" cy="598.5" r="28.5"></circle>
                        <path className="st45" d="M529.577 589.739C530.129 587.804 532.871 587.804 533.423 589.739L533.929 591.511C534.225 592.549 535.291 593.164 536.338 592.902L538.126 592.454C540.077 591.965 541.448 594.339 540.049 595.785L538.767 597.109C538.016 597.884 538.016 599.116 538.767 599.891L540.049 601.215C541.448 602.661 540.077 605.035 538.126 604.546L536.338 604.098C535.291 603.836 534.225 604.451 533.929 605.489L533.423 607.261C532.871 609.196 530.129 609.196 529.577 607.261L529.071 605.489C528.775 604.451 527.709 603.836 526.662 604.098L524.874 604.546C522.923 605.035 521.552 602.661 522.951 601.215L524.233 599.891C524.984 599.116 524.984 597.884 524.233 597.109L522.951 595.785C521.552 594.339 522.923 591.965 524.874 592.454L526.662 592.902C527.709 593.164 528.775 592.549 529.071 591.511L529.577 589.739Z"></path>
                    </g>
                    {/* ABUTMENT */}
                    <g className="abutment hEmpty hIntact hRoot" style={{visibility: tooth16Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth16Diagnozis.abutment ? 1 : 0}}>
                        <path className="st47" d="M462 607.2C463.5 603.7 465.3 600.3 466.8 596.9C470.7 588 473 578 478.5 569.5C483.8 561.2 491.7 554.7 503.4 552.4C512.9 550.5 522.9 552.5 532.8 552.1C537.9 551.9 543.2 551.1 548.2 550.5C565.5 548.2 583.3 548.7 592.7 560C595.4 563.2 596.7 566.9 597.5 570.6C599.1 577.8 598.9 585 597.9 592.2C596.5 602.6 593.7 613.1 588.7 622.8C584.8 630.2 579.6 637.2 571 641.7C563.7 645.5 554.8 646.7 546.1 645.9C541.2 645.4 536.4 644.2 531.4 644.3C522.8 644.4 515.1 648.2 506.7 649.5C501.4 650.4 495.9 650.3 490.6 649.5C485 648.7 479.6 647.3 474.7 645C469.3 642.4 464.8 638.7 462.1 634.2C457 625.8 458.3 616.1 462 607.2Z"></path>
                        <path className="st47" d="M479.403 605.458C480.507 602.887 481.832 600.39 482.936 597.892C485.807 591.354 487.499 584.009 491.548 577.765C495.449 571.668 501.263 566.893 509.875 565.203C516.867 563.808 524.227 565.277 531.514 564.983C535.267 564.836 539.168 564.248 542.848 563.808C555.581 562.118 568.683 562.485 575.601 570.786C577.588 573.137 578.545 575.855 579.134 578.573C580.312 583.862 580.165 589.151 579.429 594.44C578.398 602.079 576.337 609.792 572.657 616.918C569.787 622.354 565.959 627.496 559.63 630.802C554.257 633.593 547.706 634.474 541.303 633.887C537.696 633.52 534.163 632.638 530.483 632.711C524.153 632.785 518.486 635.576 512.303 636.531C508.402 637.192 504.354 637.119 500.453 636.531C496.332 635.944 492.357 634.915 488.751 633.226C484.776 631.316 481.464 628.598 479.477 625.292C475.723 619.122 476.68 611.996 479.403 605.458Z"></path>
                        <circle className="st45" cx="531" cy="598" r="13" />
                    </g>
                    {/* PIN */}
                    <g className="pin" style={{visibility: 'inherit', opacity: tooth16Diagnozis.pin ? 1 : 0}}>
                        <path className="st56 hIntact" d="M462 607.201C463.5 603.701 465.3 600.301 466.8 596.901C470.7 
                                588.001 473 578.001 478.5 569.501C483.8 561.201 491.7 554.701 503.4 552.401C512.9 550.501 522.9 552.501 
                                532.8 552.101C537.9 551.901 543.2 551.101 548.2 550.501C565.5 548.201 583.3 548.701 592.7 560.001C595.4 
                                563.201 596.7 566.901 597.5 570.601C599.1 577.801 598.9 585.001 597.9 592.201C596.5 602.601 593.7 613.101 588.7 
                                622.801C584.8 630.201 579.6 637.201 571 641.701C563.7 645.501 554.8 646.701 546.1 645.901C541.2 645.401 536.4 
                                644.201 531.4 644.301C522.8 644.401 515.1 648.201 506.7 649.501C501.4 650.401 495.9 650.301 490.6 649.501C485 
                                648.701 479.6 647.301 474.7 645.001C469.3 642.401 464.8 638.701 462.1 634.201C457 625.801 458.3 616.101 462 607.201Z" 
                                style={{visibility: 'hidden'}}
                        />
                        <path className="st56 hIntact" d="M479.403 605.459C480.507 602.888 481.832 600.391 
                            482.936 597.893C485.807 591.355 487.499 584.01 491.548 577.766C495.449 571.669 501.263 566.894 509.875 565.204C516.867 
                            563.809 524.227 565.278 531.514 564.984C535.267 564.837 539.168 564.249 542.848 563.809C555.581 562.119 568.683 562.486 
                            575.601 570.787C577.588 573.138 578.545 575.856 579.134 578.574C580.312 583.863 580.165 589.152 579.429 594.441C578.398 
                            602.08 576.337 609.793 572.657 616.919C569.787 622.355 565.959 627.497 559.63 630.803C554.257 633.594 547.706 634.475 541.303 
                            633.888C537.696 633.521 534.163 632.639 530.483 632.712C524.153 632.786 518.486 635.577 512.303 636.532C508.402 637.193 
                            504.354 637.12 500.453 636.532C496.332 635.945 492.357 634.916 488.751 633.227C484.776 631.317 481.464 628.599 479.477 
                            625.293C475.723 619.123 476.68 611.997 479.403 605.459Z" 
                            style={{visibility: 'hidden'}}   
                        />
                        <circle className="st57" cx="531" cy="598.001" r="12.25"  style={{fill: 'black', opacity: tooth16Diagnozis.pin ? 1 : 0}} />
                    </g>
                    {/* CULTTAB */}
                    <g className="stump hEmpty hIntact hImplant"  style={{visibility: !tooth16Diagnozis.culttab ? 'hidden' : 'inherit', opacity: !tooth16Diagnozis.culttab ? 0 : 1}}>
                        <path className="st47" d="M462 607.2C463.5 603.7 465.3 600.3 466.8 596.9C470.7 588 473 578 478.5 569.5C483.8 561.2 491.7 554.7 503.4 552.4C512.9 550.5 522.9 552.5 532.8 552.1C537.9 551.9 543.2 551.1 548.2 550.5C565.5 548.2 583.3 548.7 592.7 560C595.4 563.2 596.7 566.9 597.5 570.6C599.1 577.8 598.9 585 597.9 592.2C596.5 602.6 593.7 613.1 588.7 622.8C584.8 630.2 579.6 637.2 571 641.7C563.7 645.5 554.8 646.7 546.1 645.9C541.2 645.4 536.4 644.2 531.4 644.3C522.8 644.4 515.1 648.2 506.7 649.5C501.4 650.4 495.9 650.3 490.6 649.5C485 648.7 479.6 647.3 474.7 645C469.3 642.4 464.8 638.7 462.1 634.2C457 625.8 458.3 616.1 462 607.2Z"></path>
                        <path className="st47" d="M479.403 605.458C480.507 602.887 481.832 600.39 482.936 597.892C485.807 591.354 487.499 584.009 491.548 577.765C495.449 571.668 501.263 566.893 509.875 565.203C516.867 563.808 524.227 565.277 531.514 564.983C535.267 564.836 539.168 564.248 542.848 563.808C555.581 562.118 568.683 562.485 575.601 570.786C577.588 573.137 578.545 575.855 579.134 578.573C580.312 583.862 580.165 589.151 579.429 594.44C578.398 602.079 576.337 609.792 572.657 616.918C569.787 622.354 565.959 627.496 559.63 630.802C554.257 633.593 547.706 634.474 541.303 633.887C537.696 633.52 534.163 632.638 530.483 632.711C524.153 632.785 518.486 635.576 512.303 636.531C508.402 637.192 504.354 637.119 500.453 636.531C496.332 635.944 492.357 634.915 488.751 633.226C484.776 631.316 481.464 628.598 479.477 625.292C475.723 619.122 476.68 611.996 479.403 605.458Z"></path>
                    </g>
                    <g className="hRoot hImplant hEmpty" style={{visibility: (!tooth16Diagnozis.culttab && !tooth16Diagnozis.abutment && !tooth16Diagnozis.implant && !tooth16Diagnozis.apex && !tooth16Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M606.1,558.1c-0.7-4-1.8-7.9-3.6-11.6c-0.6-1.2-1.2-2.3-2-3.4
                            c-10.8-16-30.9-16.9-50.5-13.8c-5.6,0.9-11.6,1.9-17.4,2.1c-11.2,0.5-22.5-2.4-33.3,0.1c-9.4,2.2-16.5,7.5-22,14.5
                            c-2.2,2.9-4.2,6-6,9.4c-6.1,12-8.6,26.1-13,38.5c-1.7,4.9-3.7,9.6-5.4,14.5c-4.2,12.6-5.5,26.1,0.3,37.9c0,0,0,0,0,0.1
                            c3.2,6.4,8.3,11.6,14.4,15.3c5.5,3.3,11.6,5.4,18,6.5c6,1.1,12.2,1.3,18.2,0.1c9.5-1.8,18.2-7,28-7.1c5.6,0,11,1.6,16.6,2.4
                            c9.9,1.3,20-0.4,28.1-5.6c2.9-1.8,5.4-4,7.7-6.4c5.3-5.7,9.1-12.7,12.1-20c5.7-13.7,8.7-28.4,10.2-43
                            C607.8,578.4,608,568.3,606.1,558.1z"
                        />
                    </g>
                    {/*TARTAR*/}
                    <g className="tartar hImplant hEmpty" style={{opacity: teethDiagnozis.tooth16.tartar ? 1 : 0, visibility: "inherit"}}>
                        <path className="st61 level2" d="M451.968 611.422C453.681 606.146 456.816 598.53 458.528 593.403C460.788 586.595 461.497 580.604 463.531 573.453C465.506 566.512 465.713 560.895 468.806 554.583C471.906 548.172 474.625 541.473 479.468 536.973C484.077 532.69 492.72 530.247 499.235 528.556C504.598 527.14 511.182 524.916 516.742 525.227C522.425 525.544 529.248 527.409 534.961 527.104C540.783 526.802 545.754 524.351 551.463 523.447C556.286 522.6 561.144 525.25 565.887 525.082C570.544 524.917 575.091 524.41 579.389 525.235C583.639 526.052 588.724 525.189 592.35 527.297C596.615 529.777 602.435 535.507 605.429 540.26C608.511 545.084 609.835 550.663 610.749 556.241C611.575 561.149 610.06 566.056 610.152 570.964C610.262 576.911 608.831 582.859 608.205 588.807C607.435 596.361 608.374 603.95 606.76 611.422C605.024 619.46 603.74 627.363 600.782 634.942C598.946 639.542 593.778 645.284 591.27 649.457C587.694 655.405 585.425 660.695 579.654 664.683C575.288 667.684 568.26 667.364 563.187 668.344C558.576 669.235 553.795 671.589 549.065 671.015C543.471 670.261 538.991 668.452 533.282 668.602C527.893 668.685 522.894 670.448 517.822 672.346C513.653 673.907 508.409 675.558 504.082 676.442C498.031 677.799 491.752 675.404 485.701 674.198C479.307 672.991 472.062 674.37 466.468 670.903C460.302 666.983 456.245 658.915 453.162 652.13C450.27 645.959 448.059 639.323 448.161 632.587C448.269 625.5 449.744 618.303 451.968 611.422ZM467.357 596.9C465.858 600.3 464.059 603.7 462.56 607.2C458.762 616.1 457.463 625.8 462.66 634.2C465.358 638.7 469.856 642.4 475.253 645C480.15 647.3 485.547 648.7 491.144 649.5C496.441 650.3 501.938 650.4 507.235 649.5C515.631 648.2 523.327 644.4 531.922 644.3C536.919 644.2 541.717 645.4 546.614 645.9C555.309 646.7 564.204 645.5 571.5 641.7C580.096 637.2 585.293 630.2 589.191 622.8C594.188 613.1 596.987 602.6 598.386 592.2C599.385 585 599.585 577.8 597.986 570.6C597.186 566.9 595.887 563.2 593.188 560C583.794 548.7 566.003 548.2 548.713 550.5C543.715 551.1 538.418 551.9 533.321 552.1C523.427 552.5 513.432 550.5 503.937 552.4C492.244 554.7 484.348 561.2 479.051 569.5C473.554 578 471.255 588 467.357 596.9Z"></path>
                        <path className="st61 level1 hRoot" d="M451.968 611.422C453.681 606.146 456.816 598.53 458.528 593.403C460.788 586.595 461.497 580.604 463.531 573.453C465.506 566.512 465.713 560.895 468.806 554.583C471.906 548.172 474.625 541.473 479.468 536.973C484.077 532.69 492.72 530.247 499.235 528.556C504.598 527.14 511.182 524.916 516.742 525.227C522.425 525.544 529.248 527.409 534.961 527.104C540.783 526.802 545.754 524.351 551.463 523.447C556.286 522.6 561.144 525.25 565.887 525.082C570.544 524.917 575.091 524.41 579.389 525.235C583.639 526.052 588.724 525.189 592.35 527.297C596.615 529.777 602.435 535.507 605.429 540.26C608.511 545.084 609.835 550.663 610.749 556.241C611.575 561.149 610.06 566.056 610.152 570.964C610.262 576.911 608.831 582.859 608.205 588.807C607.435 596.361 608.374 603.95 606.76 611.422C605.024 619.46 603.74 627.363 600.782 634.942C598.946 639.542 593.778 645.284 591.27 649.457C587.694 655.405 585.425 660.695 579.654 664.683C575.288 667.684 568.26 667.364 563.187 668.344C558.576 669.235 553.795 671.589 549.065 671.015C543.471 670.261 538.991 668.452 533.282 668.602C527.893 668.685 522.894 670.448 517.822 672.346C513.653 673.907 508.409 675.558 504.082 676.442C498.031 677.799 491.752 675.404 485.701 674.198C479.307 672.991 472.062 674.37 466.468 670.903C460.302 666.983 456.245 658.915 453.162 652.13C450.27 645.959 448.059 639.323 448.161 632.587C448.269 625.5 449.744 618.303 451.968 611.422ZM467.357 596.9C465.858 600.3 464.059 603.7 462.56 607.2C458.762 616.1 457.463 625.8 462.66 634.2C465.358 638.7 469.856 642.4 475.253 645C480.15 647.3 485.547 648.7 491.144 649.5C496.441 650.3 501.938 650.4 507.235 649.5C515.631 648.2 523.327 644.4 531.922 644.3C536.919 644.2 541.717 645.4 546.614 645.9C555.309 646.7 564.204 645.5 571.5 641.7C580.096 637.2 585.293 630.2 589.191 622.8C594.188 613.1 596.987 602.6 598.386 592.2C599.385 585 599.585 577.8 597.986 570.6C597.186 566.9 595.887 563.2 593.188 560C583.794 548.7 566.003 548.2 548.713 550.5C543.715 551.1 538.418 551.9 533.321 552.1C523.427 552.5 513.432 550.5 503.937 552.4C492.244 554.7 484.348 561.2 479.051 569.5C473.554 578 471.255 588 467.357 596.9Z" style={{visibility: 'inherit'}}></path>
                        <path className="st61 level1" d="M457.688 608.999C459.273 604.76 462.176 598.643 463.762 594.525C465.853 589.056 466.51 584.244 468.393 578.5C470.222 572.924 471.265 568.413 474.129 563.342C476.999 558.192 478.59 552.615 483.074 549C487.341 545.559 495.417 542.991 501.449 541.633C506.415 540.495 512.51 538.512 517.658 538.761C522.919 539.016 529.236 541.514 534.525 541.269C539.916 541.027 544.518 539.058 549.803 538.332C554.269 537.651 558.766 540.173 563.158 540.039C567.469 539.906 571.679 539.105 575.658 539.768C579.592 540.424 584.301 539.534 587.658 541.228C591.607 543.22 596.069 548.019 598.84 551.837C601.694 555.712 601.068 560.193 601.914 564.674C602.679 568.616 604.054 572.558 604.139 576.5C604.241 581.278 602.916 586.055 602.337 590.833C601.624 596.901 601.568 602.997 600.073 608.999C598.466 615.456 597.351 621.804 594.612 627.892C592.913 631.586 588.98 636.199 586.658 639.55C583.347 644.329 581.246 649.578 575.903 652.781C571.861 655.192 565.355 654.739 560.658 655.526C556.388 656.241 551.962 657.329 547.583 656.867C542.404 656.262 537.33 654.809 532.045 654.93C527.056 654.996 523.353 656.412 518.658 657.937C514.798 659.19 509.942 660.517 505.937 661.227C500.334 662.317 494.521 661.196 488.919 660.227C482.999 659.258 476.291 659.563 471.112 656.777C465.404 653.629 461.648 647.148 458.794 641.698C456.115 636.741 454.068 631.41 454.164 626C454.264 620.307 455.628 614.526 457.688 608.999ZM467.357 596.9C465.858 600.3 464.059 603.7 462.56 607.2C458.762 616.1 457.462 625.8 462.659 634.2C465.358 638.7 469.856 642.4 475.253 645C480.15 647.3 485.547 648.7 491.144 649.5C496.441 650.3 501.938 650.4 507.235 649.5C515.631 648.2 523.326 644.4 531.922 644.3C536.919 644.2 541.716 645.4 546.614 645.9C555.309 646.7 564.204 645.5 571.5 641.7C580.095 637.2 585.293 630.2 589.19 622.8C594.188 613.1 596.986 602.6 598.386 592.2C599.385 585 599.585 577.8 597.986 570.6C597.186 566.9 595.887 563.2 593.188 560C583.793 548.7 566.003 548.2 548.713 550.5C543.715 551.1 538.418 551.9 533.321 552.1C523.426 552.5 513.432 550.5 503.937 552.4C492.243 554.7 484.348 561.2 479.051 569.5C473.554 578 471.255 588 467.357 596.9Z"></path>
                    </g>
                    {/*CARIES/SEAL*/}
                    <g className="header caries-filling hRoot hImplant hEmpty" style={{visibility: (!tooth16Diagnozis.culttab && !tooth16Diagnozis.abutment && !tooth16Diagnozis.implant && !tooth16Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        {/*КАРИЕС ЦЕНТР*/}
                        <g id="s_header_16_5" 
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                        >
                            <path 
                                className={`st7`}
                                d="M486.1,612.3c0.3,3.3,1.1,6,2.4,8.4c3.6,6.5,11.8,9.4,29.3,10.8c20.6,1.6,32.6-2,42.5-8.1
                                c1.5-0.9,2.9-1.9,4.4-2.9c10.9-7.8,11.7-30,11.7-35.6c0-3.1-1.1-6.3-3.4-9c-1.8-2.1-4.4-3.9-7.8-5.3c-7.7-3-31.4-3.9-31.4-3.9
                                c-20.7-0.9-31.9,2.4-37.7,6.8c-2.7,2.1-4.3,4.4-5.2,6.6C488.2,587,484.8,599.8,486.1,612.3z" 
                            />
                            <path className={
                                    `st8 caries-center
                                    ${'caries-stroke'}
                                    ${teethDiagnozis.tooth16.caries_center ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth16.seal_center ? `seal-fill ${teethDiagnozis.tooth16.seal_center_color}` : ''}
                                `}
                                d="M486.1,612.3c0.3,3.3,1.1,6,2.4,8.4c3.6,6.5,11.8,9.4,29.3,10.8c20.6,1.6,32.6-2,42.5-8.1
                                c1.5-0.9,2.9-1.9,4.4-2.9c10.9-7.8,11.7-30,11.7-35.6c0-3.1-1.1-6.3-3.4-9c-1.8-2.1-4.4-3.9-7.8-5.3c-7.7-3-31.4-3.9-31.4-3.9
                                c-20.7-0.9-31.9,2.4-37.7,6.8c-2.7,2.1-4.3,4.4-5.2,6.6C488.2,587,484.8,599.8,486.1,612.3z"
                            />
                        </g>
                        {/*КАРИЕС LEFT*/}
                        <g id="s_header_16_4" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                            className="caries-filling"
                        >
                            <path className="st7" d="M453.4,646.4c2.4-1.5,5.6-3.2,10-4.8c10.5-3.9,20.2-12.4,25.1-20.9c-1.3-2.3-2-5.1-2.4-8.4
                                c-1.3-12.5,2.1-25.3,4.8-32.2c0.8-2.2,2.4-4.5,5.2-6.6c-6.3-13.3-14.1-22.6-18.7-27.5c-2.2,2.9-4.2,6-6,9.4
                                c-6.1,12-8.6,26.1-13,38.5c-1.7,4.9-3.7,9.6-5.4,14.5C448.9,621,447.6,634.6,453.4,646.4z"
                            />
                            <path 
                                className={
                                    `st8 caries-left
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth16.caries_left ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth16.seal_left ? `seal-fill ${teethDiagnozis.tooth16.seal_left_color}` : ''}
                                `}
                                d="M453.4,646.4c2.4-1.5,5.6-3.2,10-4.8c10.5-3.9,20.2-12.4,25.1-20.9c-1.3-2.3-2-5.1-2.4-8.4
                                c-1.3-12.5,2.1-25.3,4.8-32.2c0.8-2.2,2.4-4.5,5.2-6.6c-6.3-13.3-14.1-22.6-18.7-27.5c-2.2,2.9-4.2,6-6,9.4
                                c-6.1,12-8.6,26.1-13,38.5c-1.7,4.9-3.7,9.6-5.4,14.5C448.9,621,447.6,634.6,453.4,646.4z"
                            />
                        </g>
                        {/*КАРИЕС НИЗ*/}
                        <g id="s_header_16_3" className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'bottom');
                            }}
                        >
                            <path className="st7" d="M453.4,646.4C453.4,646.4,453.4,646.4,453.4,646.4c3.2,6.4,8.3,11.6,14.4,15.4c5.5,3.3,11.6,5.4,18,6.5
                                c6,1.1,12.2,1.3,18.2,0.1c9.5-1.8,18.2-7,28-7.1c5.6,0,11,1.6,16.6,2.4c9.9,1.3,20-0.4,28.1-5.6c2.9-1.8,5.4-4,7.7-6.4
                                c-12-10.3-20.2-21.9-24.2-28.1c-9.9,6.1-21.9,9.7-42.5,8.1c-17.5-1.4-25.7-4.3-29.3-10.8c-4.9,8.6-14.6,17-25.1,20.9
                                C459,643.2,455.8,644.9,453.4,646.4z" 
                            />
                            <path 
                                className={
                                    `st8 caries-bottom
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth16.caries_bottom ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth16.seal_bottom ? `seal-fill ${teethDiagnozis.tooth16.seal_bottom_color}` : ''}
                                `}
                                d="M453.4,646.4C453.4,646.4,453.4,646.4,453.4,646.4c3.2,6.4,8.3,11.6,14.4,15.4c5.5,3.3,11.6,5.4,18,6.5
                                c6,1.1,12.2,1.3,18.2,0.1c9.5-1.8,18.2-7,28-7.1c5.6,0,11,1.6,16.6,2.4c9.9,1.3,20-0.4,28.1-5.6c2.9-1.8,5.4-4,7.7-6.4
                                c-12-10.3-20.2-21.9-24.2-28.1c-9.9,6.1-21.9,9.7-42.5,8.1c-17.5-1.4-25.7-4.3-29.3-10.8c-4.9,8.6-14.6,17-25.1,20.9
                                C459,643.2,455.8,644.9,453.4,646.4z" 
                            />
                        </g>
                        {/*КАРИЕС RIGHT*/}
                        <g id="s_header_16_2" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                            className="caries-filling"
                        >
                            <path className="st7" d="M560.3,623.4c3.9,6.2,12.1,17.9,24.2,28.1c5.3-5.7,9.1-12.7,12.1-20c5.7-13.7,8.7-28.4,10.2-43
                                c1-10.1,1.2-20.2-0.7-30.4c-0.7-4-1.8-7.9-3.6-11.6c-5.9,7.5-16.6,19.7-29.5,29.4c2.3,2.7,3.4,5.8,3.4,9c0,5.6-0.8,27.9-11.7,35.6
                                C563.2,621.5,561.8,622.5,560.3,623.4z"
                            />
                            <path 
                                className={`
                                    st8 target caries-right
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth16.caries_right ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth16.seal_right ? `seal-fill ${teethDiagnozis.tooth16.seal_right_color}` : ''}
                                `} 
                                d="M560.3,623.4c3.9,6.2,12.1,17.9,24.2,28.1c5.3-5.7,9.1-12.7,12.1-20c5.7-13.7,8.7-28.4,10.2-43
                                c1-10.1,1.2-20.2-0.7-30.4c-0.7-4-1.8-7.9-3.6-11.6c-5.9,7.5-16.6,19.7-29.5,29.4c2.3,2.7,3.4,5.8,3.4,9c0,5.6-0.8,27.9-11.7,35.6
                                C563.2,621.5,561.8,622.5,560.3,623.4z" 
                            />
                        </g>
                        {/*КАРИЕС ВЕРХ*/}
                        <g id="s_header_16_1" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'top');
                            }}
                            className="caries-filling"
                        >
                            <path className="st7" d="M477.3,546c4.6,4.9,12.4,14.2,18.7,27.5c5.9-4.4,17-7.8,37.7-6.8c0,0,23.7,0.9,31.4,3.9
                                c3.4,1.4,6,3.2,7.8,5.3c12.9-9.6,23.6-21.9,29.5-29.4c-0.6-1.2-1.2-2.3-2-3.4c-10.8-16-30.9-16.9-50.5-13.8
                                c-5.6,0.9-11.6,1.9-17.4,2.1c-11.2,0.5-22.5-2.4-33.3,0.1C490,533.8,482.8,539,477.3,546z" 
                            />
                            <path 
                                className={`
                                    st8 target caries-left
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth16.caries_top ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth16.seal_top ? `seal-fill ${teethDiagnozis.tooth16.seal_top_color}` : ''}
                                `}
                                d="M477.3,546c4.6,4.9,12.4,14.2,18.7,27.5c5.9-4.4,17-7.8,37.7-6.8c0,0,23.7,0.9,31.4,3.9
                                    c3.4,1.4,6,3.2,7.8,5.3c12.9-9.6,23.6-21.9,29.5-29.4c-0.6-1.2-1.2-2.3-2-3.4c-10.8-16-30.9-16.9-50.5-13.8
                                    c-5.6,0.9-11.6,1.9-17.4,2.1c-11.2,0.5-22.5-2.4-33.3,0.1C490,533.8,482.8,539,477.3,546z" 
                            />
                        </g>
                        <g className="with">
                            {/*Черточка низ лево*/}
                            <path className="st54"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth16Diagnozis.seal_left && !tooth16Diagnozis.seal_bottom) ||
                                        (!tooth16Diagnozis.seal_left && tooth16Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }}
                                d="M488.5 621C485.333 625.333 474.6 636.1 457 644.5" 
                            />
                            {/*Овал лево*/}
                            <path className="st54" d="M488.5 621C483 612 482.8 583.5 496 573.5"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth16Diagnozis.seal_left && !tooth16Diagnozis.seal_center) ||
                                        (!tooth16Diagnozis.seal_left && tooth16Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Черточка верх лево*/}
                            <path className="st54"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth16Diagnozis.seal_left && !tooth16Diagnozis.seal_top) ||
                                        (!tooth16Diagnozis.seal_left && tooth16Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }}
                                d="M496 574C495.5 568.333 491.8 555.6 481 550"
                            />
                            {/*Овал черточка верх*/}
                            <path className="st54" d="M496 574C509 566.5 566.6 565.2 573 576"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth16Diagnozis.seal_center && !tooth16Diagnozis.seal_top) ||
                                        (!tooth16Diagnozis.seal_center && tooth16Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Черточка верх право*/}
                            <path className="st54"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth16Diagnozis.seal_right && !tooth16Diagnozis.seal_top) ||
                                        (!tooth16Diagnozis.seal_right && tooth16Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }}
                                d="M573 576C579.167 572.167 593 561.8 599 551" 
                            />
                            {/*Овал черточка право*/}
                            <path className="st54"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (!tooth16Diagnozis.seal_right && tooth16Diagnozis.seal_center) ||
                                        (tooth16Diagnozis.seal_right && !tooth16Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                                d="M573 576C578 580.5 577.3 614.4 560.5 624" 
                            />
                            {/*Низ черточка право*/}
                            <path className="st54" d="M560.5 624C561.833 628.167 567.8 639 581 649" 
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth16Diagnozis.seal_right && !tooth16Diagnozis.seal_bottom) ||
                                        (!tooth16Diagnozis.seal_right && tooth16Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Овал черточка низ право*/}
                            <path className="st54" d="M560.5 624C550.5 630 505.6 631.5 488 621.5" 
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth16Diagnozis.seal_center && !tooth16Diagnozis.seal_bottom) ||
                                        (!tooth16Diagnozis.seal_center && tooth16Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }}
                            />
                        </g>
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{ visibility: 'inherit' }}>
                        <g className="vinir"  style={
                            {
                                visibility: tooth16Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth16Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path 
                                className={`vinir-fill ${tooth16Diagnozis.vinir_color}`}
                                d="M471.31 555.476C473.009 552.076 475.008 548.976 477.207 546.076C482.704 539.076 
                                489.8 533.876 499.195 531.576C509.989 528.976 521.283 531.976 532.476 531.476C538.273 531.176 544.27 
                                530.276 549.867 529.376C569.456 526.376 589.545 527.176 600.339 543.176C601.039 544.276 601.739 545.376 
                                602.338 546.576C604.137 550.176 605.137 554.176 605.936 558.176C607.835 568.376 607.636 578.476 606.636 
                                588.576C606.486 590.043 606.322 591.51 606.141 592.976C603.425 592.876 597.594 591.856 596.004 588.576C596.749 
                                580.364 596.823 572.148 595.274 563.855C594.586 560.425 593.726 556.995 592.177 553.907C591.661 552.878 591.059 
                                551.935 590.457 550.991C581.169 537.27 563.881 536.584 547.024 539.157C542.207 539.928 537.047 540.7 532.058 
                                540.958C522.426 541.386 512.707 538.814 503.418 541.043C495.334 543.016 489.227 547.475 484.497 553.478C482.604 555.965 
                                480.884 558.624 479.422 561.54C475.148 569.854 472.929 579.419 470.207 588.476C469.043 592.476 462.026 593.142 458.664 
                                592.976C462.85 580.728 465.375 567.06 471.31 555.476Z"
                            />
                        </g>
                    </g>
                    {/* ТИМЧАСОВА КОРОНКА/КЕРАМІЧНА КОРОНКА */}
                    <g className="crown" style={{
                        visibility: (tooth16Diagnozis.temporary_crown || tooth16Diagnozis.ceramic_crown || tooth16Diagnozis.mceramic_crown || tooth16Diagnozis.metalic_crown || tooth16Diagnozis.zirconia_crown) ? 'inherit' : 'hidden',
                        opacity: (tooth16Diagnozis.temporary_crown || tooth16Diagnozis.ceramic_crown || tooth16Diagnozis.mceramic_crown || tooth16Diagnozis.metalic_crown || tooth16Diagnozis.zirconia_crown)  ? 1 : 0
                    }}>
                        <path className={
                                `st46 target temporary-crown crown-fill ${diagnozis}
                                ${tooth16Diagnozis.ceramic_crown_color}
                                ${tooth16Diagnozis.mceramic_crown_color}
                                ${tooth16Diagnozis.metalic_crown_color}
                                ${tooth16Diagnozis.zirconia_crown_color}
                            `}
                            d="M606.1,558.1c-0.7-4-1.8-7.9-3.6-11.6c-0.6-1.2-1.2-2.3-2-3.4
                            c-10.8-16-30.9-16.9-50.5-13.8c-5.6,0.9-11.6,1.9-17.4,2.1c-11.2,0.5-22.5-2.4-33.3,0.1c-9.4,2.2-16.5,7.5-22,14.5
                            c-2.2,2.9-4.2,6-6,9.4c-6.1,12-8.6,26.1-13,38.5c-1.7,4.9-3.7,9.6-5.4,14.5c-4.2,12.6-5.5,26.1,0.3,37.9c0,0,0,0,0,0.1
                            c3.2,6.4,8.3,11.6,14.4,15.3c5.5,3.3,11.6,5.4,18,6.5c6,1.1,12.2,1.3,18.2,0.1c9.5-1.8,18.2-7,28-7.1c5.6,0,11,1.6,16.6,2.4
                            c9.9,1.3,20-0.4,28.1-5.6c2.9-1.8,5.4-4,7.7-6.4c5.3-5.7,9.1-12.7,12.1-20c5.7-13.7,8.7-28.4,10.2-43
                            C607.8,578.4,608,568.3,606.1,558.1z" 
                        />
                        {/*FISSURE*/}
                        <path className={`st3 fissure ${tooth16Diagnozis.fissure ? 'diagnoze' : tooth16Diagnozis.fissure ? 'hidden' : ''}`}
                            d="M596.6,579.3l-19.1,13.1c-6.9-0.2-13.8,0-20.6,0.7c-8.2,0.9-14.7,2.2-20.5,4.3c-8.6,3.2-16.4,8.4-22.6,15.1
                            c-0.4-0.6-0.8-1.1-1.3-1.6l-0.5,0.5c-4.2-2.7-8.5-5.3-12.8-7.8l-1.2-0.7c-4.2-2.4-8.6-4.9-12-8.3c-2.9-2.9-5.3-6.4-6.7-10.2
                            l-1,0.4c1.5,3.9,3.9,7.6,7,10.6c3.6,3.5,8,6,12.3,8.4l1.2,0.7c4.9,2.8,9.9,5.8,14.6,8.9c0,0,0,0,0,0.1c2.3,3.4,2.9,7.5,3.5,11.8
                            c0.2,1.5,0.4,3,0.7,4.5c1.3,6.9,4.5,13.4,9.2,18.7l0.8-0.7c-4.6-5.2-7.7-11.5-9-18.2c-0.3-1.5-0.5-3-0.7-4.4
                            c-0.5-4.1-1.1-8.2-3.3-11.8c6.1-6.7,13.8-11.8,22.4-15c5.6-2.1,12.1-3.4,20.2-4.3c6.8-0.7,13.8-1,20.6-0.7l0.2,0l19.4-13.3
                            L596.6,579.3z" 
                        />
                        <path className={`st3 fissure ${tooth16Diagnozis.fissure ? 'diagnoze' : ''}`}
                            d="M532.9,563.4l9.1,31l1-0.3l-8.1-27.5l0.2,0c0.5-2.7,1.5-5.4,2.8-7.9c2.7-4.9,7.1-9.2,11.2-11l-0.4-1
                            c-4.3,1.9-8.9,6.4-11.7,11.5c-1.2,2.1-2,4.4-2.6,6.7l-0.5-1.7c-0.8-3.8-2.2-7.4-4.3-10.6c-1.2-2-2.7-3.8-4.3-5.4l-0.8,0.8
                            c1.6,1.6,3,3.4,4.1,5.3C530.8,556.2,532.1,559.7,532.9,563.4z" 
                        />
                    </g>
                    {/* FISSURES */}
                    <g className="fissures hEmpty hRoot hImplant" style={{visibility: (!tooth16Diagnozis.culttab && !tooth16Diagnozis.abutment && !tooth16Diagnozis.implant && !tooth16Diagnozis.apex && !tooth16Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className={`st3 fissure ${tooth16Diagnozis.fissure ? 'diagnoze' : ''}`}
                            d="M596.6,579.3l-19.1,13.1c-6.9-0.2-13.8,0-20.6,0.7c-8.2,0.9-14.7,2.2-20.5,4.3c-8.6,3.2-16.4,8.4-22.6,15.1
                            c-0.4-0.6-0.8-1.1-1.3-1.6l-0.5,0.5c-4.2-2.7-8.5-5.3-12.8-7.8l-1.2-0.7c-4.2-2.4-8.6-4.9-12-8.3c-2.9-2.9-5.3-6.4-6.7-10.2
                            l-1,0.4c1.5,3.9,3.9,7.6,7,10.6c3.6,3.5,8,6,12.3,8.4l1.2,0.7c4.9,2.8,9.9,5.8,14.6,8.9c0,0,0,0,0,0.1c2.3,3.4,2.9,7.5,3.5,11.8
                            c0.2,1.5,0.4,3,0.7,4.5c1.3,6.9,4.5,13.4,9.2,18.7l0.8-0.7c-4.6-5.2-7.7-11.5-9-18.2c-0.3-1.5-0.5-3-0.7-4.4
                            c-0.5-4.1-1.1-8.2-3.3-11.8c6.1-6.7,13.8-11.8,22.4-15c5.6-2.1,12.1-3.4,20.2-4.3c6.8-0.7,13.8-1,20.6-0.7l0.2,0l19.4-13.3
                            L596.6,579.3z"
                        />
                        <path className={`st3 fissure ${tooth16Diagnozis.fissure ? 'diagnoze' : ''}`}
                            d="M532.9,563.4l9.1,31l1-0.3l-8.1-27.5l0.2,0c0.5-2.7,1.5-5.4,2.8-7.9c2.7-4.9,7.1-9.2,11.2-11l-0.4-1
                            c-4.3,1.9-8.9,6.4-11.7,11.5c-1.2,2.1-2,4.4-2.6,6.7l-0.5-1.7c-0.8-3.8-2.2-7.4-4.3-10.6c-1.2-2-2.7-3.8-4.3-5.4l-0.8,0.8
                            c1.6,1.6,3,3.4,4.1,5.3C530.8,556.2,532.1,559.7,532.9,563.4z" 
                        />
                    </g>
                </g>
                <g id="T_16" className="common-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin" >
                        <g id="dentin_v_16" className="hRoot hImplant hEmpty" style={{visibility: !tooth16Diagnozis.implant && !tooth16Diagnozis.apex && !tooth16Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st9 change-color ${tooth16Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M606.3,407.9c-1.3,8.2-2.7,16.5-4.9,24.5c-2.9,10.7-7.3,21-13,30.7l-18.3-13.1
                                l-21.6,2.8l-29.3-12l-28,8.1c-8.2-16.1-11.8-34.2-8.5-51.7c0.7-3.8,1.8-7.5,3-11.1c0.1-0.1,0.2-0.2,0.2-0.2
                                c8.8-4,18.2-6.8,28.1-8.4c23.2-3.6,47.7,0,68.3,10.7c9.1,4.8,17.2,10.8,23.9,17.9C606.2,406.7,606.2,407.3,606.3,407.9z"
                            />
                        </g>
                        <g id="dentin_n_16" style={{visibility: !tooth16Diagnozis.implant && !tooth16Diagnozis.abutment && !tooth16Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st9 change-color ${tooth16Diagnozis.change_color ? 'diagnoze' : ''}`}
                                d="M614.5,349.4c-0.7,17.4-4.3,34.5-7.1,51.7c-0.4,2.3-0.7,4.5-1.1,6.8c-0.1-0.6-0.1-1.2-0.2-1.8
                                c-6.7-7.1-14.7-13.1-23.9-17.9c-20.6-10.7-45-14.3-68.3-10.7c-9.9,1.5-19.4,4.3-28.1,8.3c-0.1,0.1-0.2,0.2-0.2,0.2
                                c3.4-10.6,8-20.9,9-31.8c1.2-12.6-1.7-25.2-2.4-37.8c-0.5-9,0.1-17.9,1.6-26.8c1-6.1,2.5-12.1,3.7-18.1
                                c1.8-9.6,7.8-18.2,15.6-15.3c3.7,1.3,5.1,5,5.8,8.6c1.2,6.4,0.8,12.8,1,19.3c0.2,7.7,1.4,15.3,3.4,22.7
                                c1.8,6.7,4.3,13.1,7.6,19.3c4.3,8.2,11.1,15.5,16.8,21.9c3.6,4.1,7.2,7.7,13.1,7.9c10.4,0.4,15.4-10.1,17.5-20.4
                                c2.4-11.7,4.5-23.6,3.7-35.5c-0.8-11.8-4.5-23.6-2.5-35.4c0.6-3.6,2.1-7.3,5.7-8.6c5.9-2.1,11.3,3.1,14.2,9.1
                                c4.3,8.8,6.9,18.2,9.1,27.7C612.6,311.6,615.2,330.5,614.5,349.4z"
                            />
                            <path className={`st10 change-color ${tooth16Diagnozis?.change_color ? 'diagnoze' : ''}`}
                                d="M544.9,342.6c1.7,2.4,3.3,4.8,5.2,7.1c2.9,3.4,6.7,6.3,11,5.9c3-0.3,5.4-2.1,7.4-4.4
                                c3.6-4,5.7-8.9,7.3-14c1.8-5.9,2.9-12.1,3.1-18.3c-2.7-10.6-5.6-21.1-8.7-31.6c-3.5-12-7.3-23.8-10.5-35.9
                                c-0.6-2.3-1.2-4.7-2.6-6.7c-1.8-2.5-4.7-4.1-7.8-4.1c-4.4-0.1-8.4,2.8-9.8,7c-1.2,7.9-2.1,15.7-2.8,23.6
                                c-0.9,10.1-1.5,20.2-2.2,30.3c-0.6,8.3-1.3,16.7-2,25c2.6,3.5,5.2,6.9,7.9,10.2C541.9,338.7,543.5,340.6,544.9,342.6z" 
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g>
                            <path className={`st22 target top ${tooth16Diagnozis.channel_class} ${tooth16Diagnozis.channel_class} ${tooth16Diagnozis.pulpit ? 'pulpit' : ''} ${tooth16Diagnozis.periodontit ? 'periodontit' : ''}`}
                                d="M576.9,385.7c-1.4,5-2.5,10.1-2.9,15.3c-0.4,5.5-0.2,10.9-1,16.4
                                c-0.6,4.3-1.9,8.4-3.8,12.4c-3.9-7.2-11.2-12.4-19.8-14.2c-9.8-2-20,0.7-27.1,7c-0.5-3.9-0.6-7.9-0.2-11.8
                                c1-11.6,5.6-22.8,5.4-34.5C544.5,375.6,561.5,378.8,576.9,385.7z" 
                            />
                        </g>
                        <g>
                            <path className={`st22 target middle ${tooth16Diagnozis.channel_class} ${tooth16Diagnozis.channel_class} ${tooth16Diagnozis.pulpit ? 'pulpit' : ''} ${tooth16Diagnozis.periodontit ? 'periodontit' : ''}`}
                                d="M597,326.2c-0.2,2-0.5,4-0.9,6c-2.1,10.7-6.5,20.9-10.8,31.1
                                c-3.1,7.4-6.2,14.8-8.4,22.4c-15.3-6.9-32.4-10-49.4-9.4c0-0.8,0-1.5-0.1-2.3c-0.8-10.2-5.4-19.3-9.4-28.7
                                c-3.7-8.8-6.8-17.8-8.9-27c1.1-0.4,2.3-0.7,3.7-1.1c3.6,11.7,8.9,22.8,15.1,33.6c3.6,6.3,8,12.7,14.3,16.4
                                c0.8-7.6,1.5-15.1,2.1-22.7c0.1-0.8,0.1-1.6,0.2-2.4c0.8-9.8,1.4-19.5,1.9-29.3c1.5,0,3.1,0.1,4.6,0.2c2.2,0.1,4.3,0.4,6.5,0.7
                                c2.2,13.7,4.5,27.3,7,40.9c0.1,0.4,0.1,0.8,0.2,1.1c0.7,3.9,1.5,7.9,2.2,11.8c6.9-3.6,12.7-9.8,16.9-16.6c4.1-6.7,7.2-13.9,9-21.3
                                c0.4-1.6,0.7-3.2,0.9-4.8C594.9,325.2,596,325.7,597,326.2z"
                            />
                        </g>
                        {/* Отростки периодонтита */}
                        <g>
                            <path className={`st22 target part ${tooth16Diagnozis.channel_class} ${tooth16Diagnozis.channel_class} ${tooth16Diagnozis.pulpit ? 'pulpit' : ''} ${tooth16Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`}
                                d="M510.1,256c-2.2,9-3.6,18.1-4,27.3c-0.5,10.6,0.2,21.2,2.3,31.7c0.2,1.1,0.4,2.1,0.7,3.2
                                    c1.1-0.4,2.3-0.7,3.7-1.1c-0.4-1.3-0.8-2.6-1.1-3.9C506.5,294.4,506,274.9,510.1,256z"
                            />
                            <path className={`st22 target part ${tooth16Diagnozis.channel_class} ${tooth16Diagnozis.channel_class} ${tooth16Diagnozis.pulpit ? 'pulpit' : ''} ${tooth16Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`}
                                d="M547.7,240.8c0-0.2,0-0.3,0-0.5C547.6,240.5,547.7,240.6,547.7,240.8c0.3,19.9,0.1,39.7-0.7,59.6
                                    c-0.2,4.1-0.3,8.2-0.6,12.3c1.5,0,3.1,0.1,4.6,0.2c2.2,0.1,4.3,0.4,6.5,0.7c-0.4-2.4-0.8-4.9-1.1-7.3
                                    C553.1,284.5,550.2,262.7,547.7,240.8z"
                                />
                            <path className={`st22 target part ${tooth16Diagnozis.channel_class} ${tooth16Diagnozis.channel_class} ${tooth16Diagnozis.pulpit ? 'pulpit' : ''} ${tooth16Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`} 
                                d="M595.6,294.3c-2-12.4-5.2-24.7-9.5-36.8c4,13.3,6.6,26.9,7.9,40.7c0.8,8.8,1.1,17.8-0.3,26.5
                                c1.2,0.5,2.3,1.1,3.3,1.5C598.2,315.6,597.3,304.8,595.6,294.3z" 
                            />
                        </g>
                        <PeriodontitStage16 />
                    </g>
                    {/*PIN*/}
                    <g className="pin hEmpty hImplant" style={{
                        visibility: 'inherit', opacity: tooth16Diagnozis.pin ? 1 : 0
                    }}>
                        <path className="st56 hIntact" d="M491.7 449.2L519.7 441.1L549 453.1L570.6 450.3L588.9 463.4C594.6 453.7 599 
                            443.4 601.9 432.7C604.1 424.6 605.5 416.4 606.8 408.2C606.7 407.6 606.7 407 606.6 406.4C606.2 406 605.8 
                            405.5 605.3 405.1C600.9 400.6 595.8 396.5 590.3 393C588.9 392.1 587.5 391.2 586.1 390.4C585 389.8 583.9 
                            389.2 582.7 388.6C581.3 387.8 579.8 387.1 578.3 386.4C578 386.3 577.7 386.1 577.4 386C577.2 385.9 577 385.8 
                            576.9 385.8C576.3 385.5 575.7 385.3 575 385C574.5 384.8 574.1 384.6 573.6 384.4C573.4 384.3 573.1 384.2 
                            572.8 384.1C572.1 383.8 571.4 383.6 570.7 383.3C570.4 383.2 570.1 383.1 569.8 383C569.6 382.9 569.4 382.9 
                            569.2 382.8C568.3 382.5 567.4 382.2 566.5 381.9C565.7 381.6 564.9 381.4 564.1 381.1C563.9 381 563.7 381 
                            563.5 380.9C562.6 380.7 561.8 380.4 560.9 380.2C560 380 559.1 379.7 558.3 379.5H558.2C557.2 379.3 556.3 
                            379.1 555.4 378.9C555.3 378.9 555.2 378.9 555.1 378.8C554.7 378.7 554.3 378.6 553.9 378.6C553.7 378.6 553.6 
                            378.5 553.4 378.5C553.2 378.5 553 378.4 552.8 378.4C552.7 378.4 552.6 378.4 552.5 378.3C552.2 378.2 551.9 
                            378.2 551.5 378.1C551.1 378 550.6 377.9 550.2 377.9C549.9 377.9 549.7 377.8 549.4 377.8C549.4 377.8 549.3 
                            377.8 549.2 377.8C548.3 377.7 547.5 377.6 546.6 377.4C546.3 377.4 546 377.3 545.7 377.3C545.5 377.3 545.4 
                            377.3 545.2 377.2C545.1 377.2 545 377.2 545 377.2C544.4 377.1 543.9 377.1 543.3 377C542.6 376.9 541.8 376.9 
                            541.1 376.8C540.9 376.8 540.7 376.8 540.5 376.8C540.1 376.8 539.6 376.7 539.2 376.7C539 376.7 538.9 376.7 
                            538.7 376.7C538.2 376.7 537.6 376.6 537 376.6C536.5 376.6 536.1 376.6 535.6 376.6C535.5 376.6 535.4 376.6 
                            535.3 376.6C534.8 376.6 534.4 376.6 533.9 376.6C533.7 376.6 533.4 376.6 533.2 376.6C531.4 376.6 529.6 376.6 
                            527.8 376.7C523.3 376.9 518.8 377.3 514.3 378C506.9 379.2 499.7 381 492.9 383.6C490.6 384.5 488.4 385.4 486.2 
                            386.4C486.1 386.5 486.1 386.6 486 386.6C484.8 390.3 483.8 394 483 397.7C479.9 415 483.5 433 491.7 449.2Z"
                            style={{visibility: 'hidden'}}
                        />
                        <path className="st57" d="M534.5 447.099L549.1 453.099L569.9 450.399L560.6 356.299V355.799L552.6 274.599C552.4 
                            273.499 551.5 272.699 550.4 272.699C549.2 272.699 548.3 273.599 548.2 274.799L543.4 340.099L543.2 342.699L534.5 
                            447.099Z"
                            style={{fill: tooth16Diagnozis.pin ? '#dbd9d3' : 'none'}}   
                        />
                    </g>
                    {/* CULT TAB */}
                    <g style={{visibility: tooth16Diagnozis.culttab ? 'inherit' : 'hidden', opacity: tooth16Diagnozis.culttab ? 1 : 0}}>
                        <path className="st14" d="M540.6,376.7c0.2,0,0.4,0,0.6,0c0.7,0,1.5,0.1,2.2,0.2c0.6,0,1.1,0.1,1.7,0.2c0.1,0,0.2,0,0.2,0
                            c0.2,0,0.4,0,0.5,0.1c0.3,0,0.6,0.1,0.9,0.1c0.9,0.1,1.7,0.2,2.6,0.4c0.1,0,0.1,0,0.2,0c0.3,0,0.5,0.1,0.8,0.1
                            c0.4,0.1,0.9,0.1,1.3,0.2c0.3,0,0.6,0.1,1,0.2c0.1,0,0.2,0,0.3,0.1c0.2,0,0.4,0.1,0.6,0.1c0.2,0,0.3,0.1,0.5,0.1
                            c0.4,0.1,0.8,0.1,1.2,0.2c0.1,0,0.2,0,0.3,0.1c0.9,0.2,1.9,0.4,2.8,0.6c0,0,0.1,0,0.1,0c0.9,0.2,1.8,0.4,2.6,0.7s1.7,0.5,2.6,0.7
                            c0.2,0,0.4,0.1,0.6,0.2c0.8,0.2,1.6,0.5,2.4,0.8c0.9,0.3,1.8,0.6,2.7,0.9c0.2,0.1,0.4,0.1,0.6,0.2l-17.3-108.3
                            c-0.2-1.1-1.1-1.9-2.2-1.9c-1.2,0-2.1,0.9-2.2,2.1L540.6,376.7z" 
                        />
                        <path className="st15" d="M491.7,449.2l28-8.1l29.3,12l21.6-2.8l18.3,13.1c5.7-9.7,10.1-20,13-30.7c2.2-8.1,3.6-16.3,4.9-24.5v0
                            c-0.1-0.6-0.1-1.2-0.2-1.8c-0.4-0.4-0.8-0.9-1.3-1.3c-4.4-4.5-9.5-8.6-15-12.1c-1.4-0.9-2.8-1.8-4.2-2.6
                            c-1.1-0.6-2.2-1.2-3.4-1.8c-1.4-0.8-2.9-1.5-4.4-2.2c-0.3-0.1-0.6-0.3-0.9-0.4l0,0c-0.2-0.1-0.4-0.2-0.5-0.2
                            c-0.6-0.3-1.2-0.5-1.9-0.8c-0.5-0.2-0.9-0.4-1.4-0.6c0,0,0,0,0,0c-0.2-0.1-0.5-0.2-0.8-0.3c-0.7-0.3-1.4-0.5-2.1-0.8
                            c-0.3-0.1-0.6-0.2-0.9-0.3c-0.2-0.1-0.4-0.1-0.6-0.2c-0.9-0.3-1.8-0.6-2.7-0.9c-0.8-0.3-1.6-0.5-2.4-0.8
                            c-0.2-0.1-0.4-0.1-0.6-0.2c-0.9-0.2-1.7-0.5-2.6-0.7s-1.8-0.5-2.6-0.7c0,0-0.1,0-0.1,0c-1-0.2-1.9-0.4-2.8-0.6
                            c-0.1,0-0.2,0-0.3-0.1c-0.4-0.1-0.8-0.2-1.2-0.2c-0.2,0-0.3-0.1-0.5-0.1c-0.2,0-0.4-0.1-0.6-0.1c-0.1,0-0.2,0-0.3-0.1
                            c-0.3-0.1-0.6-0.1-1-0.2c-0.4-0.1-0.9-0.2-1.3-0.2c-0.3,0-0.5-0.1-0.8-0.1c0,0-0.1,0-0.2,0c-0.9-0.1-1.7-0.2-2.6-0.4
                            c-0.3,0-0.6-0.1-0.9-0.1c-0.2,0-0.3,0-0.5-0.1c-0.1,0-0.2,0-0.2,0c-0.6-0.1-1.1-0.1-1.7-0.2c-0.7-0.1-1.5-0.1-2.2-0.2
                            c-0.2,0-0.4,0-0.6,0c-0.4,0-0.9-0.1-1.3-0.1c-0.2,0-0.3,0-0.5,0c-0.5,0-1.1-0.1-1.7-0.1c-0.5,0-0.9,0-1.4,0c-0.1,0-0.2,0-0.3,0
                            c-0.5,0-0.9,0-1.4,0c-0.2,0-0.5,0-0.7,0c-1.8,0-3.6,0-5.4,0.1c-4.5,0.2-9,0.6-13.5,1.3c-7.4,1.2-14.6,3-21.4,5.6
                            c-2.3,0.9-4.5,1.8-6.7,2.8c-0.1,0.1-0.1,0.2-0.2,0.2c-1.2,3.7-2.2,7.4-3,11.1C479.9,415,483.5,433,491.7,449.2z" 
                        />
                    </g>
                    {/* ABUTMENT */}
                    <g className="abutment hEmpty hIntact hRoot" style={{visibility: tooth16Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth16Diagnozis.abutment ? 1 : 0}}>
                        <path className="st16" d="M606.5,406.4c-4.7-3.8-18.2-15.1-23.7-17.9c-20.6-10.8-45-14.3-68.3-10.7c-9.9,1.5-19.4,4.3-28.1,8.3
                            l50.7-25.9l30.1,1.8L606.5,406.4z" 
                        />
                        <path className="st17" d="M606.8,408.2c-1.3,8.2-2.7,16.4-4.9,24.5c-2.9,10.7-7.3,21-13,30.7l-18.3-13.1l-21.6,2.8l-29.3-12l-28,8.1
                            c-8.2-16.1-11.8-34.2-8.5-51.7c0.7-3.8,1.8-7.4,3-11.1c0.1-0.1,0.2-0.2,0.2-0.3c8.8-4,18.2-6.8,28.1-8.3
                            c23.2-3.6,47.6,0,68.3,10.7c5.5,2.9,10.7,6.2,15.3,10c3,2.5,5.9,5.1,8.5,7.9C606.7,407,606.8,407.6,606.8,408.2z"
                        />
                    </g>
                    {/* ФОРМУВАЧ */}
                    <g className="shaper hEmpty hIntact hRoot" style={{visibility: 'hidden', opacity: 0}} >
                        <path className="st44" d="M574.743 408.394C575.035 410.859 573.033 412.992 570.554 412.857L521.378 410.186C518.9 410.052 517.141 407.717 517.696 405.298L526.639 366.305C527.075 364.403 528.82 363.094 530.768 363.206L566.319 365.254C568.256 365.366 569.833 366.852 570.061 368.778L574.743 408.394Z"></path>
                    </g>
                    {/* IMPLANT/CULTTAB */}
                    <g className="implant hEmpty hIntact hRoot" style={{visibility: tooth16Diagnozis.abutment || tooth16Diagnozis.implant || tooth16Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <path className="st18" d="M575.8,367.1l-55.5-2.2c1.5-16.9,3.8-33.7,6.9-50.5c3-16.4,6.9-32.7,11.4-48.9c4-3.6,9.9-5.7,16-5.4
                            c6.8,0.3,13,3.5,16.7,8.3c2.5,15.6,4.1,31.4,4.9,47.2C577.1,332.7,577,349.9,575.8,367.1z"
                        />
                        <line className="st19" x1="581.7" y1="349.2" x2="516.6" y2="356" />
                        <line className="st19" x1="583.4" y1="329.9" x2="518.3" y2="336.7"/>
                        <line className="st19" x1="583.7" y1="310.6" x2="518.6" y2="317.4" />
                        <line className="st19" x1="585.4" y1="291.3" x2="520.3" y2="298.1" />
                        <line className="st19" x1="587.1" y1="272" x2="522" y2="278.8" />
                    </g>
                    <g className="hRoot hImplant hEmpty" style={{visibility: !tooth16Diagnozis.culttab && !tooth16Diagnozis.abutment && !tooth16Diagnozis.implant && !tooth16Diagnozis.shaper && !tooth16Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M607.9,422.5c-0.5-5.4-1.1-10.8-1.8-16.2c0-0.1,0-0.1,0-0.2
                            c-6.7-7.1-14.7-13.1-23.9-17.9c-20.6-10.8-45-14.3-68.2-10.7c-9.9,1.5-19.4,4.4-28.1,8.4c-0.1,0.1-0.2,0.2-0.2,0.2
                            c-3.9,4.2-7.6,8.6-11,13.2c-3.4,4.6-6.6,9.3-9,14.3c-2.4,4.9-4,10-4.9,15.3c-0.7,8.5,0.5,17,3.6,25.2c2.4,6.4,5.9,12.6,10.3,18.2
                            l5.6,1.3c0.9-0.5,1.9-1,2.9-1.4c1.7-0.6,3.4-1,5.2-1.1c-2.4-2-4.6-4.2-6.6-6.5c-2.9-3.1-5.4-6.5-6.9-10.2
                            c-0.7-1.8-1.2-3.6-1.4-5.5l1.7-0.2c0.2,2,0.8,3.9,1.6,5.8c2.7,6.5,8.3,11.8,14.4,16.5c2.7,2,5.5,4,8.4,5.8c0.8,0.5,1.7,1,2.6,1.6
                            l4.6,0.3c3.7-2.6,8-4.5,12.7-5.7c5.4-1.4,11.2-1.7,16.3-3.6c1.6-0.6,3.1-1.3,4.4-2.2l3.7-6.9l1.2-10.1l5.4-5.1l1,1.4l-4.9,4.2
                            l-1,9.9l-3.4,7.3c1.8,1.2,3.6,2.3,5.5,3.4c6,3.5,12.5,6.5,18.1,10.4c0.6,0.4,1.2,0.8,1.7,1.2c2.1,1.5,3.9,3.2,5.7,5l6.1,0.8
                            c7.8-3.4,14.6-8.2,19.8-14.1c3.2-3.6,5.8-7.5,7.7-11.7c1.5-6.5,2.3-13.1,2.4-19.7C609.2,436.4,608.6,429.4,607.9,422.5z"
                        />
                    </g>
                    {/*КЛИНОВИДНИЙ ЕФЕКТ/ПРИШИЙКОВА ПЛОМБА/ПРИШИЙКОВИЙ КАРІЄС*/}
                    <g className="wedge-shaped hRoot hImplant hEmpty" style={{visibility: !tooth16Diagnozis.culttab && !tooth16Diagnozis.abutment ? 'inherit' : 'hidden'}}>
                        <path className="st7 st59" 
                            d="M465.82 413.7C463.421 418.6 461.82 423.7 460.92 429C460.22 437.4 461.421 446 464.521 454.3C466.921 460.7 
                                470.32 466.8 474.82 472.5L480.42 473.8C481.32 473.2 482.32 472.8 483.32 472.4L483.32 472.4C484.92 471.8 486.721 471.4 
                                488.521 471.3C486.221 469.2 484.02 467.1 481.92 464.8C479.12 461.7 476.521 458.3 475.021 454.6C474.321 
                                452.8 473.821 451 473.621 449.1L475.32 448.9C475.62 450.9 476.12 452.8 476.92 454.7C479.62 461.2 485.22 
                                466.5 491.32 471.2C494.02 473.3 496.821 475.2 499.721 477C500.621 477.6 501.42 478.1 502.32 478.6L506.92 
                                478.9C510.62 476.3 514.921 474.4 519.621 473.2C521.641 472.713 523.717 472.353 525.792 471.993C529.263 
                                471.39 532.729 470.789 535.92 469.6C537.52 469 538.92 468.3 540.32 467.4L544.021 460.5L545.221 
                                450.4L550.621 445.3L551.621 446.7L546.721 450.9L545.721 460.8L542.32 468.1C544.12 469.3 545.92 470.4 
                                547.82 471.5C549.975 472.756 552.181 473.949 554.388 475.141C558.326 477.27 562.267 479.4 565.92 
                                481.9C566.22 482.1 566.495 482.3 566.77 482.5C567.045 482.7 567.321 482.9 567.621 483.1C569.721 484.6 
                                571.62 486.3 573.32 488.1L579.42 488.9C587.22 485.5 594.021 480.7 599.221 474.8C602.421 471.2 605.02 
                                467.3 606.92 463.1C608.42 456.6 609.22 450 609.32 443.4C609.42 436.5 608.721 429.5 608.021 422.6L606.221 
                                406.4V406.2C599.521 399.1 591.42 393.1 582.32 388.3C561.82 377.6 537.321 374 514.121 377.6C504.221 379.2 
                                494.821 382 486.021 386C485.959 386 485.935 386.038 485.902 386.091C485.882 386.123 485.859 386.161 
                                485.82 386.2C481.92 390.4 478.22 394.8 474.82 399.4C471.421 403.9 468.22 408.7 465.82 413.7ZM575.347 
                                391.64C558.227 383.081 537.766 380.202 518.391 383.081C504.884 385.172 496.649 387.814 488.48 
                                396.981C487.448 398.14 488.172 399.938 489.711 400.138L593.621 413.662C594.93 413.832 596.013 412.71 
                                595.589 411.461C593.779 406.132 588.174 397.431 575.347 391.64Z"
                        />
                        <path className={`st7 ${tooth16Diagnozis?.cervical_caries ? 'cervical-caries' : ''}`} 
                            d="M518.174 383.081C537.549 380.202 558.01 383.081 575.13 391.64C587.958 397.431 593.562 406.132 595.372 
                                411.461C595.796 412.71 594.713 413.832 593.404 413.662L489.494 400.138C487.956 399.938 487.231 398.14 
                                488.263 396.981C496.432 387.814 504.667 385.172 518.174 383.081Z" 
                        />
                        <path className={
                                `st60
                                    ${(tooth16Diagnozis?.wedge_shaped_defect) ? `shaped-defect-stroke` : ""}
                                    ${(tooth16Diagnozis?.seal_cervical) ? `seal-cervical-stroke` : ""}
                                    ${tooth16Diagnozis.seal_cervical_color}
                                `
                            }
                            d="M518.174 383.081C537.549 380.202 558.01 383.081 575.13 391.64C587.958 397.431 593.562 406.132 595.372 411.461C595.796 412.71 594.713 413.832 593.404 
                            413.662L489.494 400.138C487.956 399.938 487.231 398.14 488.263 396.981C496.432 387.814 504.667 385.172 518.174 383.081Z"
                        />
                    </g>
                    {/*TARTAR*/}
                    <g style={{visibility: 'inherit', opacity: teethDiagnozis.tooth16.tartar ? 1 : 0}}>
                        <path className="st61 level2" d="M608 427L606 426V424.5L605 422.5L604 419.5L602.5 417.5V414L599 409.5L597.5 
                            405L594.5 403L593 399.5L591 398L586 395.5L583.5 393.5L580 391L576 389L570.5 387.5L568.5 386H564.5L561 
                            383.5L558.5 382.5H553L548.5 380.5H546.5H545H541L538 379.5H533.5L527.5 380.5L523.5 379.5L518.5 380.5H516L512 
                            382L506.5 382.5L504 383L501.5 383.5L497 386L493.5 387L490 389L488 391L485 393.5L483 396L480 398L478 
                            400.5L477 403L474 405L472.5 407L470 408.5L467.5 409.5V407L468.5 405L470 403L471 400.5L472.5 398L474 396L475.5 
                            393.5L477.5 391L478 389L480 386L482 384.5L484 382L485 379.5V377.5L486.5 375.5L489 373L490 368L491.5 364L495.5 362.5L499 
                            361L504 358.5L506.5 357.5L511 358.5L516 357.5L520 356H523.5L525 355.5L529 357.5L533.5 355.5H536.5L541 356L545 355.5L550 
                            357.5H555H558.5L564.5 361H570.5L576 362.5H579L582 365H586L589.5 367L593 370.5H597.5L600.5 371.5L604 375.5L608 377.5L611 
                            382V384.5V389L609.5 392.5L610 397L609.5 399.5L610 402.5L609.5 404V408.5L609 411.5L610 415.5L609 419.5L609.5 424.5L608 427.5V427Z"
                        />
                        <path className="st61 level1" d="M608.5 427L606.5 426V424.5L605.5 422.5L604.5 419.5L603 417.5V414L599.5 409.5L598 405L595 403L593.5 
                            399.5L591.5 398L586.5 395.5L584 393.5L580.5 391L576.5 389L571 387.5L569 386H565L561.5 383.5L559 382.5H553.5L549 
                            380.5H547H545.5H541.5L538.5 379.5H534L528 380.5L524 379.5L519 380.5H516.5L512.5 382L507 382.5L504.5 383L502 383.5L497.5 386L494 
                            387L490.5 389L488.5 391L485.5 393.5L483.5 396L480.5 398L478.5 400.5L477.5 403L474.5 405L473 407L470.5 408.5L468 409.5L469 
                            407L470.5 405L473 402.327L474.5 398L477.5 394.5V392L480.5 389L481 385.5L483.5 384.5L485.5 380.5L488 377.5L493 376L497.5 
                            375.5L500.5 374L503.5 372.5L510.5 371.5L514.5 370L518 370.5L523 369.5H528H532L536.5 370.5H541.5H547L555.5 372.5H559L565 374L570 
                            376.5H575L579.5 379.5L581.5 380.5L586.5 382L590.5 384.5L595 387L598 390L601 392L603 394.5L604.5 397L606.5 398L607.5 
                            400.5V403L608.5 406.5L607.5 409.5V411L608.5 413V415.5L609 417.5V419.5L609.5 422L609 425L608.5 427Z"
                        />
                    </g>
                    {/*КАРИЕС*/}
                    <g className="header caries-filling hRoot hImplant hEmpty" style={{ visibility: 'inherit' }}>
                        {/*КАРИЕС CENTER*/}
                        <g
                            className="caries-filling hoho"
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                        >
                            <path className={
                                `st8 caries-center
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth16.caries_center ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth16.seal_center ? `seal-fill ${teethDiagnozis.tooth16.seal_center_color}` : ''}
                            `}
                                d="M499.6,476.9c0.8,0.5,1.7,1,2.6,1.6l4.6,0.3c3.7-2.6,8-4.5,12.7-5.7c5.4-1.4,11.2-1.7,16.3-3.6
                                c1.6-0.6,3.1-1.3,4.4-2.2l3.7-6.9l1.2-10.1l5.4-5.1l1,1.4l-4.9,4.2l-1,9.9l-3.4,7.3c1.8,1.2,3.6,2.3,5.5,3.4
                                c6,3.5,12.5,6.5,18.1,10.4c2.6-8.4,8.4-27,13.2-41.3c-6.5-4.5-17.3-12.2-19.1-12.8c-2.5-0.9-29.6-1.8-34.8-1.6
                                c-3.8,0.2-16.2,6.6-22.8,10.2C501.4,450.9,500.2,467.9,499.6,476.9z" 
                            />
                            <path className="st8 target" 
                                d="M499.6,476.9c0.8,0.5,1.7,1,2.6,1.6l4.6,0.3c3.7-2.6,8-4.5,12.7-5.7c5.4-1.4,11.2-1.7,16.3-3.6
                                c1.6-0.6,3.1-1.3,4.4-2.2l3.7-6.9l1.2-10.1l5.4-5.1l1,1.4l-4.9,4.2l-1,9.9l-3.4,7.3c1.8,1.2,3.6,2.3,5.5,3.4
                                c6,3.5,12.5,6.5,18.1,10.4c2.6-8.4,8.4-27,13.2-41.3c-6.5-4.5-17.3-12.2-19.1-12.8c-2.5-0.9-29.6-1.8-34.8-1.6
                                c-3.8,0.2-16.2,6.6-22.8,10.2C501.4,450.9,500.2,467.9,499.6,476.9z" 
                                style={{ fill: 'transparent', zIndex:1000 }}
                            />
                        </g>
                        {/* КАРИЕС RIGHT */}
                        <g className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st58" 
                                d="M565.8,481.9c0.6,0.4,1.2,0.8,1.7,1.2c2.1,1.5,3.9,3.2,5.7,5l6.1,0.8c7.8-3.4,14.6-8.2,19.8-14.1
                                c3.2-3.6,5.8-7.5,7.7-11.7c1.5-6.5,2.3-13.1,2.4-19.7c0.1-6.9-0.6-13.9-1.3-20.8c-0.5-5.4-1.1-10.8-1.8-16.2
                                c-5.6,4.3-17.1,13.1-19.7,15.6c-1.2,1.1-4.1,8.8-7.4,18.6C574.1,454.8,568.4,473.4,565.8,481.9z"
                            />
                            <path className={
                                    `st8 caries-right
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth16.caries_right ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth16.seal_right ? `seal-fill ${teethDiagnozis.tooth16.seal_right_color}` : ''}
                            `} 
                                d="M565.8,481.9c0.6,0.4,1.2,0.8,1.7,1.2c2.1,1.5,3.9,3.2,5.7,5l6.1,0.8c7.8-3.4,14.6-8.2,19.8-14.1
                                c3.2-3.6,5.8-7.5,7.7-11.7c1.5-6.5,2.3-13.1,2.4-19.7c0.1-6.9-0.6-13.9-1.3-20.8c-0.5-5.4-1.1-10.8-1.8-16.2
                                c-5.6,4.3-17.1,13.1-19.7,15.6c-1.2,1.1-4.1,8.8-7.4,18.6C574.1,454.8,568.4,473.4,565.8,481.9z"
                            />
                        </g>
                        {/*КАРИЕС TOP*/}
                        <g className="caries-filling" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'top');
                            }}
                        >
                            <path className="st58" 
                                d="M502.3,436.3c6.6-3.5,19.1-10,22.8-10.2c5.2-0.2,32.3,0.7,34.8,1.6c1.8,0.6,12.6,8.2,19.1,12.8
                                c3.3-9.8,6.2-17.5,7.4-18.6c2.6-2.5,14.1-11.3,19.7-15.6c0-0.1,0-0.1,0-0.2c-6.7-7.1-14.7-13.1-23.9-17.9
                                c-20.6-10.8-45-14.3-68.2-10.7c-9.9,1.5-19.4,4.4-28.1,8.4c-0.1,0.1-0.2,0.2-0.2,0.2c5.2,6.7,17.4,22.6,17.9,24.1
                                C503.7,411,503.1,422.6,502.3,436.3z" 
                            />
                            <path className={`
                                st8 target caries-top
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth16.caries_top ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth16.seal_top ? `seal-fill ${teethDiagnozis.tooth16.seal_top_color}` : ''}
                            `}
                                d="M502.3,436.3c6.6-3.5,19.1-10,22.8-10.2c5.2-0.2,32.3,0.7,34.8,1.6c1.8,0.6,12.6,8.2,19.1,12.8
                                c3.3-9.8,6.2-17.5,7.4-18.6c2.6-2.5,14.1-11.3,19.7-15.6c0-0.1,0-0.1,0-0.2c-6.7-7.1-14.7-13.1-23.9-17.9
                                c-20.6-10.8-45-14.3-68.2-10.7c-9.9,1.5-19.4,4.4-28.1,8.4c-0.1,0.1-0.2,0.2-0.2,0.2c5.2,6.7,17.4,22.6,17.9,24.1
                                C503.7,411,503.1,422.6,502.3,436.3z"
                            />
                        </g>
                        {/*КАРИЕС У LEFT*/}
                        <g className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                        >
                            <path className="st58" 
                                d="M464.3,454.2c2.4,6.4,5.9,12.6,10.3,18.2l5.6,1.3c0.9-0.5,1.9-1,2.9-1.4c1.7-0.6,3.4-1,5.2-1.1
                                c-2.4-2-4.6-4.2-6.6-6.5c-2.9-3.1-5.4-6.5-6.9-10.2c-0.7-1.8-1.2-3.6-1.4-5.5l1.7-0.2c0.2,2,0.8,3.9,1.6,5.8
                                c2.7,6.5,8.3,11.8,14.4,16.5c2.7,2,5.5,4,8.4,5.8c0.6-9,1.8-26,2.7-40.6c0.8-13.7,1.5-25.3,1.2-26.1c-0.5-1.5-12.7-17.4-17.9-24.1
                                c-3.9,4.2-7.6,8.6-11,13.2c-3.4,4.6-6.6,9.3-9,14.3c-2.4,4.9-4,10-4.9,15.3C460,437.4,461.3,446,464.3,454.2z"
                            />
                            <path 
                                className={`
                                    st8 target caries-left
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth16.caries_left ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth16.seal_left ? `seal-fill ${teethDiagnozis.tooth16.seal_left_color}` : ''}
                                `}
                                d="M464.3,454.2c2.4,6.4,5.9,12.6,10.3,18.2l5.6,1.3c0.9-0.5,1.9-1,2.9-1.4c1.7-0.6,3.4-1,5.2-1.1
                                c-2.4-2-4.6-4.2-6.6-6.5c-2.9-3.1-5.4-6.5-6.9-10.2c-0.7-1.8-1.2-3.6-1.4-5.5l1.7-0.2c0.2,2,0.8,3.9,1.6,5.8
                                c2.7,6.5,8.3,11.8,14.4,16.5c2.7,2,5.5,4,8.4,5.8c0.6-9,1.8-26,2.7-40.6c0.8-13.7,1.5-25.3,1.2-26.1c-0.5-1.5-12.7-17.4-17.9-24.1
                                c-3.9,4.2-7.6,8.6-11,13.2c-3.4,4.6-6.6,9.3-9,14.3c-2.4,4.9-4,10-4.9,15.3C460,437.4,461.3,446,464.3,454.2z" 
                            />
                        </g>
                        <g className="with">
                            {/*Черточка лево низ*/}
                            <path className="st54" d="M502.5 435.999L500 471.499"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth16Diagnozis.seal_left && !tooth16Diagnozis.seal_top && !tooth16Diagnozis.seal_center) ||
                                        (tooth16Diagnozis.seal_left && tooth16Diagnozis.seal_top && !tooth16Diagnozis.seal_center) ||
                                        (!tooth16Diagnozis.seal_left && tooth16Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Черточка лево верх*/}
                            <path className="st54" d="M502.5 435.999C504 403.999 508.5 411.999 488.5 389.999" 
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth16Diagnozis.seal_left && !tooth16Diagnozis.seal_top) ||
                                        (!tooth16Diagnozis.seal_left && tooth16Diagnozis.seal_top && !tooth16Diagnozis.seal_center) ||
                                        (!tooth16Diagnozis.seal_left && tooth16Diagnozis.seal_top && tooth16Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Черточка середина*/}
                            <path className="st54"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth16Diagnozis.seal_top && !tooth16Diagnozis.seal_center) ||
                                        (tooth16Diagnozis.seal_right && tooth16Diagnozis.seal_left && tooth16Diagnozis.seal_center && !tooth16Diagnozis.seal_top) ||
                                        (!tooth16Diagnozis.seal_top && !tooth16Diagnozis.seal_bottom && tooth16Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M502.5 436.999C518.5 420.999 559.7 421.699 578.5 440.499" 
                            />
                            {/*Черточка право верх*/}
                            <path className="st54" d="M578.5 440.499C586.5 416.999 586.7 413.999 601.5 409.999"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth16Diagnozis.seal_right && !tooth16Diagnozis.seal_top) ||
                                        (!tooth16Diagnozis.seal_right && tooth16Diagnozis.seal_top && !tooth16Diagnozis.seal_center) ||
                                        (!tooth16Diagnozis.seal_right && tooth16Diagnozis.seal_top && tooth16Diagnozis.seal_center)
                                    )
                                        ? 5 : 0
                                }}
                            />
                            {/*Черточка право низ*/}
                            <path className="st54" d="M578.5 440.499L567.5 476.499"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth16Diagnozis.seal_right && !tooth16Diagnozis.seal_top && !tooth16Diagnozis.seal_center) ||
                                        (tooth16Diagnozis.seal_right && tooth16Diagnozis.seal_top && !tooth16Diagnozis.seal_center) ||
                                        (!tooth16Diagnozis.seal_right && tooth16Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                            />
                        </g>
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir" 
                            style={{
                                visibility: tooth16Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth16Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className="st55" d="M607.9 422.5C607.4 417.1 606.8 411.7 606.1 406.3C606.1 406.2 606.1 406.2 606.1 
                                406.1C599.4 399 591.4 393 582.2 388.2C561.6 377.4 537.2 373.9 514 377.5C504.1 379 494.6 381.9 485.9 
                                385.9C485.8 386 485.7 386.1 485.7 386.1C481.8 390.3 478.1 394.7 474.7 399.3C471.3 403.9 468.1 408.6 465.7 
                                413.6C463.3 418.5 461.7 423.6 460.8 428.9C460.1 437.4 461.3 445.9 464.4 454.1C466.8 460.5 470.3 466.7 474.7 
                                472.3L480.3 473.6C481.2 473.1 482.2 472.6 483.2 472.2C484.9 471.6 486.6 471.2 488.4 471.1C486 469.1 
                                483.8 466.9 481.8 464.6C478.9 461.5 476.4 458.1 474.9 454.4C474.2 452.6 473.7 450.8 473.5 448.9L475.2 
                                448.7C475.4 450.7 476 452.6 476.8 454.5C479.5 461 485.1 466.3 491.2 471C493.9 473 496.7 475 499.6 
                                476.8C500.4 477.3 501.3 477.8 502.2 478.4L506.8 478.7C510.5 476.1 514.8 474.2 519.5 473C524.9 471.6 530.7 
                                471.3 535.8 469.4C537.4 468.8 538.9 468.1 540.2 467.2L543.9 460.3L545.1 450.2L550.5 445.1L551.5 446.5L546.6 
                                450.7L545.6 460.6L542.2 467.9C544 469.1 545.8 470.2 547.7 471.3C553.7 474.8 560.2 477.8 565.8 481.7C566.4 
                                482.1 567 482.5 567.5 482.9C569.6 484.4 571.4 486.1 573.2 487.9L579.3 488.7C587.1 485.3 593.9 480.5 599.1 
                                474.6C602.3 471 604.9 467.1 606.8 462.9C608.3 456.4 609.1 449.8 609.2 443.2C609.2 436.4 608.6 429.4 607.9 
                                422.5Z"
                            />
                        </g>
                    </g>
                    {/* ТИМЧАСОВА/КЕРАМІЧНА/МЕТАЛОКЕРАМІЧНА КОРОНКА*/}
                    <g className="crown" 
                        style={{
                            visibility: tooth16Diagnozis.temporary_crown || tooth16Diagnozis.ceramic_crown || tooth16Diagnozis.mceramic_crown || tooth16Diagnozis.metalic_crown || tooth16Diagnozis.zirconia_crown ? 'inherit' : 'hidden',
                            opacity: tooth16Diagnozis.temporary_crown || tooth16Diagnozis.ceramic_crown || tooth16Diagnozis.mceramic_crown || tooth16Diagnozis.metalic_crown || tooth16Diagnozis.zirconia_crown ? 1 : 0
                        }}
                    >
                        <path className={`
                                temporary-crown crown-fill
                                ${diagnozis}
                                ${tooth16Diagnozis.ceramic_crown_color}
                                ${tooth16Diagnozis.mceramic_crown_color}
                                ${tooth16Diagnozis.metalic_crown_color}
                                ${tooth16Diagnozis.zirconia_crown_color}
                            `} 
                            d="M607.9,422.5c-0.5-5.4-1.1-10.8-1.8-16.2c0-0.1,0-0.1,0-0.2
                            c-6.7-7.1-14.7-13.1-23.9-17.9c-20.6-10.8-45-14.3-68.2-10.7c-9.9,1.5-19.4,4.4-28.1,8.4c-0.1,0.1-0.2,0.2-0.2,0.2
                            c-3.9,4.2-7.6,8.6-11,13.2c-3.4,4.6-6.6,9.3-9,14.3c-2.4,4.9-4,10-4.9,15.3c-0.7,8.5,0.5,17,3.6,25.2c2.4,6.4,5.9,12.6,10.3,18.2
                            l5.6,1.3c0.9-0.5,1.9-1,2.9-1.4c1.7-0.6,3.4-1,5.2-1.1c-2.4-2-4.6-4.2-6.6-6.5c-2.9-3.1-5.4-6.5-6.9-10.2
                            c-0.7-1.8-1.2-3.6-1.4-5.5l1.7-0.2c0.2,2,0.8,3.9,1.6,5.8c2.7,6.5,8.3,11.8,14.4,16.5c2.7,2,5.5,4,8.4,5.8c0.8,0.5,1.7,1,2.6,1.6
                            l4.6,0.3c3.7-2.6,8-4.5,12.7-5.7c5.4-1.4,11.2-1.7,16.3-3.6c1.6-0.6,3.1-1.3,4.4-2.2l3.7-6.9l1.2-10.1l5.4-5.1l1,1.4l-4.9,4.2
                            l-1,9.9l-3.4,7.3c1.8,1.2,3.6,2.3,5.5,3.4c6,3.5,12.5,6.5,18.1,10.4c0.6,0.4,1.2,0.8,1.7,1.2c2.1,1.5,3.9,3.2,5.7,5l6.1,0.8
                            c7.8-3.4,14.6-8.2,19.8-14.1c3.2-3.6,5.8-7.5,7.7-11.7c1.5-6.5,2.3-13.1,2.4-19.7C609.2,436.4,608.6,429.4,607.9,422.5z"
                        />
                    </g>
                </g>
            </g>
        </>
    )
}
