import React, { useEffect, useState } from 'react';
import { appLangSelector } from "../../../Redux/Layout/selectors";
import Lang from "lang.js";
import lngMaterial from "../../../Lang/Material/translation";
import { useDispatch, useSelector } from "react-redux";
import { setNewToothActive, setSubDiagnosis, setTooth18Active, setToothDiagnoze, setDisactiveAll, setSelectedToothNumber } from '../../../Redux/Formula';
import {
    allTeethSelector,
    getDiagnosisSelector,
    getSealColor1Selector,
    getSealColor2Selector,
    getSealColor3Selector,
    getSubDiagnosisSelector,
    getTeethDiagnozisSelector,
    tooth18Selector,
    getSealServicalColorSelector,
    getVinirColorSelector,
    getCeramicCrownColorSelector,
    getCeramicMCrownColorSelector,
    getMetalicCrownColorSelector,
    getZirconiaCrownColorSelector,
    getStatusesSelector
} from "../../../Redux/Formula/selectors";
import PeriodontitStage18 from './periodontit18';


export default function Tooth18() {
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngMaterial,
        locale: appLang,
    });
    const dispatch = useDispatch<any>();
    //const toothActive = useSelector(tooth18Selector);
    const toothActive = useSelector(getStatusesSelector);
    const teethStatuses = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth18Diagnozis = teethDiagnozis.tooth18;
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
                teethDiagnozis.tooth18.caries_bottom = !teethDiagnozis.tooth18.caries_bottom;
            }
            if (toothPart === 'center') {
                teethDiagnozis.tooth18.caries_center = !teethDiagnozis.tooth18.caries_center;
            }
            if (toothPart === 'left') {
                teethDiagnozis.tooth18.caries_left = !teethDiagnozis.tooth18.caries_left;
            }
            if (toothPart === 'right') {
                teethDiagnozis.tooth18.caries_right = !teethDiagnozis.tooth18.caries_right;
            }
            if (toothPart === 'top') {
                teethDiagnozis.tooth18.caries_top = !teethDiagnozis.tooth18.caries_top;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'seal') {
            if (toothPart === 'center') {
                if (teethDiagnozis.tooth18.seal_center_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth18.seal_center_color = sealColor1;
                    teethDiagnozis.tooth18.seal_center = true;
                } else if (teethDiagnozis.tooth18.seal_center_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth18.seal_center_color = sealColor2;
                    teethDiagnozis.tooth18.seal_center = true;
                } else if (teethDiagnozis.tooth18.seal_center_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth18.seal_center_color = sealColor3;
                    teethDiagnozis.tooth18.seal_center = true;
                } else {
                    teethDiagnozis.tooth18.seal_center = !teethDiagnozis.tooth18.seal_center;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'bottom') {
                if (teethDiagnozis.tooth18.seal_bottom_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth18.seal_bottom_color = sealColor1;
                    teethDiagnozis.tooth18.seal_bottom = true;
                } else if (teethDiagnozis.tooth18.seal_bottom_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth18.seal_bottom_color = sealColor2;
                    teethDiagnozis.tooth18.seal_bottom = true;
                } else if (teethDiagnozis.tooth18.seal_bottom_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth18.seal_bottom_color = sealColor3;
                    teethDiagnozis.tooth18.seal_bottom = true;
                } else {
                    teethDiagnozis.tooth18.seal_bottom = !teethDiagnozis.tooth18.seal_bottom;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'left') {
                if (teethDiagnozis.tooth18.seal_left_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth18.seal_left_color = sealColor1;
                    teethDiagnozis.tooth18.seal_left = true;
                } else if (teethDiagnozis.tooth18.seal_left_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth18.seal_left_color = sealColor2;
                    teethDiagnozis.tooth18.seal_left = true;
                } else if (teethDiagnozis.tooth18.seal_left_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth18.seal_left_color = sealColor3;
                    teethDiagnozis.tooth18.seal_left = true;
                } else {
                    teethDiagnozis.tooth18.seal_left = !teethDiagnozis.tooth18.seal_left;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'right') {
                if (teethDiagnozis.tooth18.seal_right_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth18.seal_right_color = sealColor1;
                    teethDiagnozis.tooth18.seal_right = true;
                } else if (teethDiagnozis.tooth18.seal_right_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth18.seal_right_color = sealColor2;
                    teethDiagnozis.tooth18.seal_right = true;
                } else if (teethDiagnozis.tooth18.seal_right_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth18.seal_right_color = sealColor3;
                    teethDiagnozis.tooth18.seal_right = true;
                } else {
                    teethDiagnozis.tooth18.seal_right = !teethDiagnozis.tooth18.seal_right;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'top') {
                if (teethDiagnozis.tooth18.seal_top_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth18.seal_top_color = sealColor1;
                    teethDiagnozis.tooth18.seal_top = true;
                } else if (teethDiagnozis.tooth18.seal_top_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth18.seal_top_color = sealColor2;
                    teethDiagnozis.tooth18.seal_top = true;
                } else if (teethDiagnozis.tooth18.seal_top_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth18.seal_top_color = sealColor3;
                    teethDiagnozis.tooth18.seal_top = true;
                } else {
                    teethDiagnozis.tooth18.seal_top = !teethDiagnozis.tooth18.seal_top;
                }
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'wedge_shaped_defect') {
            if (teethDiagnozis.tooth18.wedge_shaped_defect_color != wsDefectColor && wsDefectColor != '') {
                teethDiagnozis.tooth18.wedge_shaped_defect_color = wsDefectColor;
            } else {
                teethDiagnozis.tooth18.wedge_shaped_defect_color = !teethDiagnozis.tooth18.wedge_shaped_defect_color;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
    }

    return (
        <>
            <g id="18" className={`tooth-number-active`}>
                <text transform="matrix(1 0 0 1 247 717)" className={`st3 st4 st5 ${toothActive.tooth18.active ? 'num-active' : ''}`}>18</text>
            </g>
            <g className={`f-tooth-active`}
                onMouseOver={() => {
                    (!toothActive && !allTeeth) && document.getElementById('18').classList.add('tooth-number-hover')
                }}
                onMouseLeave={() => {
                    (!toothActive && !allTeeth) && document.getElementById('18').classList.remove('tooth-number-hover')
                }}
                onClick={() => {
                    dispatch(setSelectedToothNumber(18));
                    if (toothActive.tooth18.active) {
                        dispatch(setNewToothActive({tooth18: {active: true}}))
                    } else {
                        dispatch(setDisactiveAll());
                        dispatch(setNewToothActive({tooth18: {active: true}}))
                    }
                    if (diagnozis) {
                        if (diagnozis === 'change_color')
                            teethDiagnozis.tooth18.change_color = !teethDiagnozis.tooth18.change_color;
                        else if (diagnozis === 'fissure')
                            teethDiagnozis.tooth18.fissure = !teethDiagnozis.tooth18.fissure;
                        else if (diagnozis === 'caries')
                            teethDiagnozis.tooth18.caries = !teethDiagnozis.tooth18.caries;
                        else if (diagnozis === 'cervical_caries')
                            teethDiagnozis.tooth18.cervical_caries = !teethDiagnozis.tooth18.cervical_caries;
                        else if (diagnozis === 'wedge_shaped_defect')
                            teethDiagnozis.tooth18.wedge_shaped_defect = !teethDiagnozis.tooth18.wedge_shaped_defect;
                        else if (diagnozis === 'tartar')
                            teethDiagnozis.tooth18.tartar = !teethDiagnozis.tooth18.tartar;
                        else if (diagnozis === 'pulpit') {
                            teethDiagnozis.tooth18.pulpit = !teethDiagnozis.tooth18.pulpit;
                            teethDiagnozis.tooth18.channel_class = teethDiagnozis.tooth18.pulpit ? 'pulpit' : ''
                            // setDiagnozeClass(teethDiagnozis.tooth18.pulpit ? 'pulpit' : '');
                        } else if (diagnozis === 'channel_not_sealed') {
                            teethDiagnozis.tooth18.channel_not_sealed = !teethDiagnozis.tooth18.channel_not_sealed;
                            teethDiagnozis.tooth18.channel_class = teethDiagnozis.tooth18.channel_not_sealed ? 'channel-not-sealed' : '';
                            // setDiagnozeClass(teethDiagnozis.tooth18.channel_not_sealed ? 'channel-not-sealed' : '');
                        } else if (diagnozis === 'channel_top_sealed') {
                            teethDiagnozis.tooth18.channel_top_sealed = !teethDiagnozis.tooth18.channel_top_sealed;
                            teethDiagnozis.tooth18.channel_class = teethDiagnozis.tooth18.channel_top_sealed ? 'channel-top-sealed' : '';
                            // setDiagnozeClass(teethDiagnozis.tooth18.channel_top_sealed ? 'channel-top-sealed' : '');
                        } else if (diagnozis === 'channel_part_sealed') {
                            teethDiagnozis.tooth18.channel_part_sealed = !teethDiagnozis.tooth18.channel_part_sealed;
                            teethDiagnozis.tooth18.channel_class = teethDiagnozis.tooth18.channel_part_sealed ? 'channel-part-sealed' : '';
                            // setDiagnozeClass(teethDiagnozis.tooth18.channel_part_sealed ? 'channel-part-sealed' : '');
                        } else if (diagnozis === 'periodontit') {
                            if (teethDiagnozis.tooth18.periodontit_stage !== subDiagnozis) {
                                teethDiagnozis.tooth18.periodontit_stage = subDiagnozis
                                teethDiagnozis.tooth18.periodontit = true;
                            } else {
                                teethDiagnozis.tooth18.periodontit = !teethDiagnozis.tooth18.periodontit;
                            }
                            teethDiagnozis.tooth18.channel_class = teethDiagnozis.tooth18.periodontit ? 'periodontit' : '';
                            if (!teethDiagnozis.tooth18.periodontit) dispatch(setSubDiagnosis(''));
                        } else if (diagnozis === 'seal') {
                            teethDiagnozis.tooth18.seal = !teethDiagnozis.tooth18.seal;
                            setDiagnozeClass(teethDiagnozis.tooth18.channel_part_sealed ? 'channel-part-sealed' : '');
                        } else if (diagnozis === 'seal_cervical') {
                            if (!teethDiagnozis.tooth18.seal_cervical && teethDiagnozis.tooth18.seal_cervical_color === "") {
                                teethDiagnozis.tooth18.seal_cervical = true;
                                teethDiagnozis.tooth18.seal_cervical_color = wsDefectColor;
                            } else if (teethDiagnozis.tooth18.seal_cervical && teethDiagnozis.tooth18.seal_cervical_color != wsDefectColor) {
                                teethDiagnozis.tooth18.seal_cervical_color = wsDefectColor;
                            } else {
                                teethDiagnozis.tooth18.seal_cervical = false;
                                teethDiagnozis.tooth18.seal_cervical_color = "";
                            }
                        } else if (diagnozis === 'vinir') {
                            if (!teethDiagnozis.tooth18.vinir && teethDiagnozis.tooth18.vinir_color === "") {
                                teethDiagnozis.tooth18.vinir = true;
                                teethDiagnozis.tooth18.vinir_color = vinirColor;
                            } else if (teethDiagnozis.tooth18.vinir && teethDiagnozis.tooth18.vinir_color != vinirColor) {
                                teethDiagnozis.tooth18.vinir_color = vinirColor;
                            } else {
                                teethDiagnozis.tooth18.vinir = false;
                                teethDiagnozis.tooth18.vinir_color = "";
                            }
                        } else if (diagnozis === 'temporary_crown') {
                            teethDiagnozis.tooth18.temporary_crown = !teethDiagnozis.tooth18.temporary_crown;
                        } else if (diagnozis === 'ceramic_crown') {
                            if (!teethDiagnozis.tooth18.ceramic_crown && teethDiagnozis.tooth18.ceramic_crown_color === "") {
                                teethDiagnozis.tooth18.ceramic_crown = true;
                                teethDiagnozis.tooth18.ceramic_crown_color = ceramicCrownColor;
                            } else if (teethDiagnozis.tooth18.ceramic_crown && teethDiagnozis.tooth18.ceramic_crown_color != ceramicCrownColor) {
                                teethDiagnozis.tooth18.ceramic_crown_color = ceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth18.ceramic_crown = false;
                                teethDiagnozis.tooth18.ceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'mceramic_crown') {
                            if (!teethDiagnozis.tooth18.mceramic_crown && teethDiagnozis.tooth18.mceramic_crown_color === "") {
                                teethDiagnozis.tooth18.mceramic_crown = true;
                                teethDiagnozis.tooth18.mceramic_crown_color = mceramicCrownColor;
                            } else if (teethDiagnozis.tooth18.mceramic_crown && teethDiagnozis.tooth18.mceramic_crown_color != mceramicCrownColor) {
                                teethDiagnozis.tooth18.mceramic_crown_color = mceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth18.mceramic_crown = false;
                                teethDiagnozis.tooth18.mceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'metalic_crown') {
                            if (!teethDiagnozis.tooth18.metalic_crown && teethDiagnozis.tooth18.metalic_crown_color === "") {
                                teethDiagnozis.tooth18.metalic_crown = true;
                                teethDiagnozis.tooth18.metalic_crown_color = metalicCrownColor;
                            } else if (teethDiagnozis.tooth18.metalic_crown && teethDiagnozis.tooth18.metalic_crown_color != metalicCrownColor) {
                                teethDiagnozis.tooth18.mceramic_crown_color = metalicCrownColor;
                            } else {
                                teethDiagnozis.tooth18.metalic_crown = false;
                                teethDiagnozis.tooth18.metalic_crown_color = "";
                            }
                        } else if (diagnozis === 'zirconia_crown') {
                            if (!teethDiagnozis.tooth18.zirconia_crown && teethDiagnozis.tooth18.zirconia_crown_color === "") {
                                teethDiagnozis.tooth18.zirconia_crown = true;
                                teethDiagnozis.tooth18.zirconia_crown_color = zirconiaCrownColor;
                            } else if (teethDiagnozis.tooth18.zirconia_crown && teethDiagnozis.tooth18.zirconia_crown_color != zirconiaCrownColor) {
                                teethDiagnozis.tooth18.zirconia_crown_color = zirconiaCrownColor;
                            } else {
                                teethDiagnozis.tooth18.zirconia_crown = false;
                                teethDiagnozis.tooth18.zirconia_crown_color = "";
                            }
                        } else if (diagnozis === 'pin') {
                            teethDiagnozis.tooth18.pin = !teethDiagnozis.tooth18.pin;
                        } else if (diagnozis === 'culttab') {
                            teethDiagnozis.tooth18.culttab = !teethDiagnozis.tooth18.culttab;
                        } else if (diagnozis === 'abutment') {
                            teethDiagnozis.tooth18.abutment = !teethDiagnozis.tooth18.abutment;
                        } else if (diagnozis === 'shaper') {
                            teethDiagnozis.tooth18.shaper = !teethDiagnozis.tooth18.shaper;
                        } else if (diagnozis === 'implant') {
                            teethDiagnozis.tooth18.implant = !teethDiagnozis.tooth18.implant;
                        } else if (diagnozis === 'apex') {
                            teethDiagnozis.tooth18.apex = !teethDiagnozis.tooth18.apex;
                        } else if (diagnozis === 'absent') {
                            teethDiagnozis.tooth18.absent = !teethDiagnozis.tooth18.absent;
                        } else if (diagnozis === 'cervical_caries') {
                            teethDiagnozis.tooth18.cervical_caries = !teethDiagnozis.tooth18.cervical_caries;
                        } else if (diagnozis === 'caries') {
                            teethDiagnozis.tooth18.caries = !teethDiagnozis.tooth18.caries;
                        } else if (diagnozis === 'parodontit') {
                            if (teethDiagnozis.tooth18.parodontit) {
                                if (teethDiagnozis.tooth18.parodontit_stage === subDiagnozis) {
                                    teethDiagnozis.tooth18.parodontit = false;
                                    teethDiagnozis.tooth18.active = false;
                                } else {
                                    teethDiagnozis.tooth18.parodontit = true;
                                    teethDiagnozis.tooth18.parodontit_stage = subDiagnozis
                                }
                            } else {
                                teethDiagnozis.tooth18.parodontit = true;
                                teethDiagnozis.tooth18.parodontit_stage = subDiagnozis;
                                teethDiagnozis.tooth18.active = true;
                            }
                        }
                        dispatch(setToothDiagnoze(teethDiagnozis))
                    }
                }}
            >
                <g className="underlay" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <path className="st40" d="M279.6,235.5c-5-0.4-10.5,1.6-14.1,5c-8.6,8.1-5.5,21-6.4,31.4
                    c-1.8,20.4-16.5,41.4-27.1,58c-10.5,16.3-17.8,37.3-17.5,57.4c0.6,35,12,65.7,18.4,90.5c6.4,24.8-6.4,64.9-10.7,85.7
                    c-8.9,44-10.8,95.8,6.5,137.8c2.1,5.1,4.5,10.1,7.5,14.7c5.2,8,12.5,15,21.5,18.2c10.4,3.8,22.2,2.3,32.5-1.8
                    c13.3-5.2,21.9-15.2,27-28.5c8-20.7,6.1-41.8,7.1-63.8c1-23.3,3.8-48.9-0.4-71.9c-2.3-12.4-4.1-24.8-8.2-36.8
                    c-2.3-6.8-5.1-13.3-8-19.8c-1.9-4.4-3.7-9-4.2-13.8c-0.8-7.8,1.1-15.6,3.6-23c1.3-3.7,2.7-7.3,4.1-11c1.1-2.7,1.8-5.7,2.8-8.5
                    c4.2-12.4,7.3-20.9,10.8-33.6c1.6-5.8,2.2-15.7,3.3-21.6c4.5-24.4-5.8-72.1-8.3-86.7C317.4,298.9,315.6,238.5,279.6,235.5z"></path>
                </g>
                <g id="T_18_up" className="top-view"
                    style={{visibility: tooth18Diagnozis.absent ? 'hidden' : 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR/APEX/CULTTAB */}
                    <g className="dentin">
                        <g className={`hEmpty hRoot hImplant`} style={{visibility: !tooth18Diagnozis.culttab && !tooth18Diagnozis.implant && !tooth18Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <g className="hIntact hImplant hEmpty" style={{ visibility: 'inherit' }}>
                                <path className={`st24 ${tooth18Diagnozis.apex ? 'apex' : ''}`} d="M227.9 595C229.6 586.4 234.4 578.8 242.9 573.2C252.9 566.5 266.3 563.9
                                    279.6 562.9C290.8 562.1 302.7 562.6 310.5 568.5C315.9 572.5 317.9 578.3 319.1 583.9C320.2
                                    589.6 320.5 595.5 320.4 601.3C320.2 607 319.6 612.9 315.9 618C312 623.5 305.2 627.4 297.6
                                    630C274.1 638.1 246.2 633.7 233.4 617.6C227.9 610.9 226.3 602.9 227.9 595Z"
                                />
                                <path className={`st53 ${tooth18Diagnozis.apex ? 'apex' : ''}`} d="M253.5 592.5C252.702 598.351 262.578 601.803 265.522 606.498C270.817
                                    614.942 271.31 616.648 277.655 616.648C284 616.648 285.001 608.387 289.37 602.535C293.739 596.683
                                    300.642 596 299.285 589.473C296.899 578 284.525 584.201 275 585C265.621 585.788 255 581.5 253.5
                                    592.5Z"
                                />
                            </g>
                        </g>
                        <g className={`hIntact hImplant hEmpty`} style={{visibility: tooth18Diagnozis?.apex || tooth18Diagnozis?.change_color ? 'inherit' : 'hidden'}}>
                            <path
                                className={`st24 change-color ${tooth18Diagnozis?.change_color ? 'diagnoze-opacity' : ''} ${tooth18Diagnozis?.apex ? 'apex' : ''}`}
                                d="M227.9 595C229.6 586.4 234.4 578.8 242.9 573.2C252.9 566.5 266.3 563.9 279.6 562.9C290.8 562.1 302.7 562.6 310.5
                                568.5C315.9 572.5 317.9 578.3 319.1 583.9C320.2 589.6 320.5 595.5 320.4 601.3C320.2 607 319.6 612.9 315.9 618C312 623.5
                                305.2 627.4 297.6 630C274.1 638.1 246.2 633.7 233.4 617.6C227.9 610.9 226.3 602.9 227.9 595Z"
                            />
                            <path
                                className={`st53 change-color ${tooth18Diagnozis?.change_color ? 'diagnoze-opacity' : ''} ${tooth18Diagnozis?.apex ? 'apex' : ''}`}
                                d="M253.5 592.5C252.702 598.351 262.578 601.803 265.522 606.498C270.817 614.942 271.31 616.648 277.655 616.648C284
                                616.648 285.001 608.387 289.37 602.535C293.739 596.683 300.642 596 299.285 589.473C296.899 578 284.525 584.201
                                275 585C265.621 585.788 255 581.5 253.5 592.5Z"
                            />
                        </g>
                    </g>
                    {/* PULPIT */}
                    <g className="pulp">
                        <g className="hIntact hEmpty hImplant pulpitis-pfilling" style={{visibility: tooth18Diagnozis?.apex ? 'inherit' : 'hidden'}}>
                            <ellipse className="st22 target" rx="7.15314" ry="5.64935"
                                        transform="matrix(-0.999903 -0.0138984 -0.0138984 0.999903 276.828 609.565)"
                                        style={{fill: 'rgb(254, 246, 249)'}} />
                            <ellipse className="st22 target" rx="6.89579" ry="6.05115"
                                        transform="matrix(-0.774929 0.632048 0.632048 0.774929 261.168 592.048)"
                                        style={{fill: 'rgb(254, 246, 249)'}} />
                            <ellipse className="st22 target" rx="6.88191" ry="5.68612"
                                        transform="matrix(-0.653465 -0.756957 -0.756957 0.653465 291.801 589.925)"
                                        style={{fill: 'rgb(254, 246, 249)'}} />
                        </g>
                    </g>
                    {/* IMPLANT */}
                    <g className="implant hEmpty hIntact hRoot" style={{visibility: tooth18Diagnozis.implant || tooth18Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <circle className="st48" cx="278.5" cy="598.5" r="26.5"></circle>
                        <g className="st27">
                            <mask id="implant_18" className="st49">
                                <path className="st50"
                                        d="M264.905 582.474L261.458 581.352C258.529 584.3 256.349 587.994 255.231 592.124L257.928 594.55C257.686 595.829 257.56 597.15 257.56 598.5C257.56 599.85 257.686 601.17 257.928 602.45L255.231 604.875C256.349 609.006 258.529 612.7 261.458 615.648L264.905 614.525C266.895 616.242 269.209 617.594 271.743 618.478L272.494 622.024C274.479 622.548 276.564 622.827 278.714 622.827C280.864 622.827 282.95 622.548 284.936 622.024L285.687 618.477C288.22 617.593 290.533 616.241 292.523 614.525L295.97 615.647C298.899 612.699 301.079 609.004 302.197 604.874L299.5 602.448C299.741 601.169 299.868 599.849 299.868 598.5C299.868 597.15 299.741 595.831 299.5 594.552L302.197 592.126C301.079 587.995 298.899 584.301 295.97 581.352L292.523 582.475C290.533 580.758 288.22 579.406 285.687 578.522L284.936 574.976C282.95 574.452 280.864 574.173 278.714 574.173C276.564 574.173 274.479 574.452 272.494 574.975L271.743 578.521C269.209 579.405 266.895 580.758 264.905 582.474Z"></path>
                            </mask>
                            <path className="st50 st51"
                                    d="M264.905 582.474L261.458 581.352C258.529 584.3 256.349 587.994 255.231 592.124L257.928 594.55C257.686 595.829 257.56 597.15 257.56 598.5C257.56 599.85 257.686 601.17 257.928 602.45L255.231 604.875C256.349 609.006 258.529 612.7 261.458 615.648L264.905 614.525C266.895 616.242 269.209 617.594 271.743 618.478L272.494 622.024C274.479 622.548 276.564 622.827 278.714 622.827C280.864 622.827 282.95 622.548 284.936 622.024L285.687 618.477C288.22 617.593 290.533 616.241 292.523 614.525L295.97 615.647C298.899 612.699 301.079 609.004 302.197 604.874L299.5 602.448C299.741 601.169 299.868 599.849 299.868 598.5C299.868 597.15 299.741 595.831 299.5 594.552L302.197 592.126C301.079 587.995 298.899 584.301 295.97 581.352L292.523 582.475C290.533 580.758 288.22 579.406 285.687 578.522L284.936 574.976C282.95 574.452 280.864 574.173 278.714 574.173C276.564 574.173 274.479 574.452 272.494 574.975L271.743 578.521C269.209 579.405 266.895 580.758 264.905 582.474Z"></path>
                            <path className="st52"
                                    d="M261.458 581.352L262.078 579.45L260.907 579.069L260.04 579.942L261.458 581.352ZM264.905 582.474L264.286 584.376L265.357 584.725L266.211 583.989L264.905 582.474ZM255.231 592.124L253.3 591.601L252.979 592.789L253.893 593.611L255.231 592.124ZM257.928 594.55L259.893 594.921L260.102 593.815L259.265 593.063L257.928 594.55ZM257.928 602.45L259.265 603.937L260.102 603.184L259.893 602.079L257.928 602.45ZM255.231 604.875L253.893 603.388L252.979 604.211L253.3 605.398L255.231 604.875ZM261.458 615.648L260.04 617.057L260.907 617.93L262.078 617.549L261.458 615.648ZM264.905 614.525L266.211 613.011L265.358 612.275L264.286 612.624L264.905 614.525ZM271.743 618.478L273.699 618.063L273.465 616.961L272.401 616.59L271.743 618.478ZM272.494 622.024L270.537 622.439L270.793 623.644L271.984 623.958L272.494 622.024ZM284.936 622.024L285.446 623.958L286.637 623.643L286.892 622.438L284.936 622.024ZM285.687 618.477L285.028 616.589L283.964 616.96L283.731 618.063L285.687 618.477ZM292.523 614.525L293.142 612.623L292.07 612.274L291.217 613.01L292.523 614.525ZM295.97 615.647L295.35 617.549L296.521 617.93L297.388 617.057L295.97 615.647ZM302.197 604.874L304.128 605.396L304.449 604.209L303.534 603.386L302.197 604.874ZM299.5 602.448L297.534 602.077L297.326 603.183L298.162 603.935L299.5 602.448ZM299.5 594.552L298.162 593.064L297.326 593.817L297.534 594.923L299.5 594.552ZM302.197 592.126L303.534 593.613L304.449 592.791L304.128 591.603L302.197 592.126ZM295.97 581.352L297.388 579.943L296.521 579.07L295.35 579.451L295.97 581.352ZM292.523 582.475L291.217 583.989L292.071 584.726L293.142 584.376L292.523 582.475ZM285.687 578.522L283.731 578.937L283.964 580.039L285.028 580.411L285.687 578.522ZM284.936 574.976L286.892 574.561L286.637 573.356L285.446 573.042L284.936 574.976ZM272.494 574.975L271.984 573.041L270.793 573.355L270.537 574.561L272.494 574.975ZM271.743 578.521L272.401 580.41L273.465 580.039L273.699 578.936L271.743 578.521ZM260.839 583.254L264.286 584.376L265.524 580.573L262.078 579.45L260.839 583.254ZM257.161 592.647C258.187 588.86 260.186 585.469 262.877 582.762L260.04 579.942C256.871 583.13 254.512 587.128 253.3 591.601L257.161 592.647ZM259.265 593.063L256.568 590.637L253.893 593.611L256.591 596.037L259.265 593.063ZM259.56 598.5C259.56 597.275 259.675 596.079 259.893 594.921L255.963 594.179C255.698 595.58 255.56 597.025 255.56 598.5H259.56ZM259.893 602.079C259.675 600.921 259.56 599.725 259.56 598.5H255.56C255.56 599.975 255.698 601.42 255.963 602.821L259.893 602.079ZM256.568 606.362L259.265 603.937L256.591 600.963L253.893 603.388L256.568 606.362ZM262.877 614.238C260.186 611.53 258.187 608.14 257.161 604.352L253.3 605.398C254.512 609.872 256.871 613.869 260.04 617.057L262.877 614.238ZM264.286 612.624L260.839 613.746L262.078 617.549L265.524 616.427L264.286 612.624ZM272.401 616.59C270.11 615.79 268.015 614.566 266.211 613.011L263.599 616.04C265.776 617.918 268.309 619.398 271.084 620.366L272.401 616.59ZM274.45 621.61L273.699 618.063L269.786 618.893L270.537 622.439L274.45 621.61ZM278.714 620.827C276.738 620.827 274.824 620.57 273.004 620.09L271.984 623.958C274.134 624.525 276.39 624.827 278.714 624.827V620.827ZM284.426 620.09C282.605 620.57 280.691 620.827 278.714 620.827V624.827C281.038 624.827 283.295 624.525 285.446 623.958L284.426 620.09ZM283.731 618.063L282.979 621.609L286.892 622.438L287.644 618.892L283.731 618.063ZM291.217 613.01C289.414 614.565 287.319 615.789 285.028 616.589L286.346 620.365C289.121 619.397 291.652 617.917 293.829 616.039L291.217 613.01ZM296.589 613.745L293.142 612.623L291.904 616.426L295.35 617.549L296.589 613.745ZM300.267 604.351C299.241 608.139 297.242 611.53 294.551 614.237L297.388 617.057C300.557 613.868 302.916 609.87 304.128 605.396L300.267 604.351ZM298.162 603.935L300.86 606.361L303.534 603.386L300.837 600.961L298.162 603.935ZM297.868 598.5C297.868 599.724 297.753 600.92 297.534 602.077L301.465 602.819C301.729 601.418 301.868 599.974 301.868 598.5H297.868ZM297.534 594.923C297.753 596.08 297.868 597.276 297.868 598.5H301.868C301.868 597.025 301.729 595.581 301.465 594.18L297.534 594.923ZM300.86 590.639L298.162 593.064L300.837 596.039L303.534 593.613L300.86 590.639ZM294.551 582.762C297.242 585.47 299.241 588.861 300.267 592.649L304.128 591.603C302.916 587.129 300.557 583.131 297.388 579.943L294.551 582.762ZM293.142 584.376L296.589 583.254L295.35 579.451L291.904 580.573L293.142 584.376ZM285.028 580.411C287.319 581.21 289.414 582.434 291.217 583.989L293.829 580.96C291.653 579.083 289.121 577.602 286.346 576.634L285.028 580.411ZM282.979 575.39L283.731 578.937L287.644 578.108L286.892 574.561L282.979 575.39ZM278.714 576.173C280.691 576.173 282.605 576.429 284.426 576.91L285.446 573.042C283.295 572.475 281.038 572.173 278.714 572.173V576.173ZM273.004 576.909C274.824 576.429 276.738 576.173 278.714 576.173V572.173C276.39 572.173 274.134 572.474 271.984 573.041L273.004 576.909ZM273.699 578.936L274.45 575.39L270.537 574.561L269.786 578.107L273.699 578.936ZM266.211 583.989C268.015 582.433 270.11 581.209 272.401 580.41L271.084 576.633C268.309 577.601 265.776 579.082 263.599 580.96L266.211 583.989Z"
                                    mask="url(#implant_18)"></path>
                        </g>
                    </g>
                    <g className="shaper hEmpty hIntact hRoot" style={{visibility: 'hidden', opacity: 0}}>
                        <circle className="st44" cx="278.5" cy="598.5" r="28.5" />
                        <path className="st45"
                                d="M276.577 589.739C277.129 587.804 279.871 587.804 280.423 589.739L280.929 591.511C281.225 592.549 282.291 593.164 283.338 592.902L285.126 592.454C287.077 591.965 288.448 594.339 287.049 595.785L285.767 597.109C285.016 597.884 285.016 599.116 285.767 599.891L287.049 601.215C288.448 602.661 287.077 605.035 285.126 604.546L283.338 604.098C282.291 603.836 281.225 604.451 280.929 605.489L280.423 607.261C279.871 609.196 277.129 609.196 276.577 607.261L276.071 605.489C275.775 604.451 274.709 603.836 273.662 604.098L271.874 604.546C269.923 605.035 268.552 602.661 269.951 601.215L271.233 599.891C271.984 599.116 271.984 597.884 271.233 597.109L269.951 595.785C268.552 594.339 269.923 591.965 271.874 592.454L273.662 592.902C274.709 593.164 275.775 592.549 276.071 591.511L276.577 589.739Z"></path>
                    </g>
                    {/* ABUTMENT */}
                    <g className="abutment hEmpty hIntact hRoot" style={{visibility: tooth18Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth18Diagnozis.abutment ? 1 : 0}}>
                        <path className="st47"
                                d="M227.9 595C229.6 586.4 234.4 578.8 242.9 573.2C252.9 566.5 266.3 563.9 279.6 562.9C290.8 562.1 302.7 562.6 310.5 568.5C315.9 572.5 317.9 578.3 319.1 583.9C320.2 589.6 320.5 595.5 320.4 601.3C320.2 607 319.6 612.9 315.9 618C312 623.5 305.2 627.4 297.6 630C274.1 638.1 246.2 633.7 233.4 617.6C227.9 610.9 226.3 602.9 227.9 595Z"></path>
                        <path className="st47"
                                d="M244.374 596.429C245.451 591.006 248.492 586.213 253.879 582.682C260.215 578.457 268.707 576.817 277.135 576.187C284.232 575.682 291.773 575.997 296.715 579.718C300.137 582.24 301.404 585.898 302.165 589.429C302.862 593.024 303.052 596.744 302.989 600.402C302.862 603.996 302.482 607.717 300.137 610.933C297.666 614.401 293.357 616.861 288.541 618.5C273.649 623.608 255.97 620.833 247.859 610.681C244.374 606.456 243.36 601.411 244.374 596.429Z"></path>
                        <circle className="st45" cx="279" cy="598" r="13" />
                    </g>
                    {/* PIN */}
                    <g className="pin" style={{visibility: 'inherit', opacity: tooth18Diagnozis.pin ? 1 : 0}}>
                        <path className="st56 hIntact"
                            d="M227.9 594.999C229.6 586.399 234.4 578.799 242.9 573.199C252.9 566.499 266.3 563.899 279.6
                            562.899C290.8 562.099 302.7 562.599 310.5 568.499C315.9 572.499 317.9 578.299 319.1 583.899C320.2
                            589.599 320.5 595.499 320.4 601.299C320.2 606.999 319.6 612.899 315.9 617.999C312 623.499 305.2
                            627.399 297.6 629.999C274.1 638.099 246.2 633.699 233.4 617.599C227.9 610.899 226.3 602.899 227.9
                            594.999Z"
                            style={{visibility: 'hidden'}}
                        />
                        <path className="st56 hIntact"
                            d="M244.374 596.429C245.451 591.006 248.492 586.213 253.879 582.682C260.215 578.457 268.707 576.817
                            277.135 576.187C284.232 575.682 291.773 575.997 296.715 579.718C300.137 582.24 301.404 585.898
                            302.165 589.429C302.862 593.024 303.052 596.744 302.989 600.402C302.862 603.996 302.482
                            607.717 300.137 610.933C297.666 614.401 293.357 616.861 288.541 618.5C273.649 623.608 255.97
                            620.833 247.859 610.681C244.374 606.456 243.36 601.411 244.374 596.429Z"
                            style={{visibility: 'hidden'}}
                        />
                        <circle className="st57" cx="279" cy="598" r="12.25" style={{fill: 'black', opacity: tooth18Diagnozis.pin ? 1 : 0}} />
                    </g>
                    {/* CULTTAB */}
                    <g className="stump hEmpty hIntact hImplant" style={{visibility: !tooth18Diagnozis.culttab ? 'hidden' : 'inherit', opacity: !tooth18Diagnozis.culttab ? 0 : 1}}>
                        <path className="st47"
                                d="M227.9 595C229.6 586.4 234.4 578.8 242.9 573.2C252.9 566.5 266.3 563.9 279.6 562.9C290.8 562.1 302.7 562.6 310.5 568.5C315.9 572.5 317.9 578.3 319.1 583.9C320.2 589.6 320.5 595.5 320.4 601.3C320.2 607 319.6 612.9 315.9 618C312 623.5 305.2 627.4 297.6 630C274.1 638.1 246.2 633.7 233.4 617.6C227.9 610.9 226.3 602.9 227.9 595Z"></path>
                        <path className="st47"
                                d="M244.374 596.429C245.451 591.006 248.492 586.213 253.879 582.682C260.215 578.457 268.707 576.817 277.135 576.187C284.232 575.682 291.773 575.997 296.715 579.718C300.137 582.24 301.404 585.898 302.165 589.429C302.862 593.024 303.052 596.744 302.989 600.402C302.862 603.996 302.482 607.717 300.137 610.933C297.666 614.401 293.357 616.861 288.541 618.5C273.649 623.608 255.97 620.833 247.859 610.681C244.374 606.456 243.36 601.411 244.374 596.429Z"></path>
                    </g>
                    <g className="hRoot hImplant hEmpty" style={{visibility: (!tooth18Diagnozis.culttab && !tooth18Diagnozis.abutment && !tooth18Diagnozis.implant && !tooth18Diagnozis.apex && !tooth18Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M324.3,577c-0.3-1.8-0.6-3.6-1-5.4v0c-1.6-6.9-4.1-13.5-9.1-18.5
                            c-9.2-9.2-23-10.1-36-9c-15.5,1.3-31,5.2-42.5,15.4c-0.4,0.3-0.7,0.6-1.1,1c-9.1,8.4-14.3,19.7-16,32.4
                            c-1.7,12.1,0.3,24.5,6.6,34.9c0.1,0.2,0.2,0.3,0.3,0.5c15.2,24.6,47.5,31.6,74.6,19.5c6.8-3,13-7.2,17.6-12.9
                            c1.3-1.7,2.5-3.4,3.5-5.3c4.2-7.8,4.8-16.8,5-25.7C326.2,594.9,325.7,585.9,324.3,577z"
                        />
                    </g>
                    {/*TARTAR*/}
                    <g className="tartar hImplant hEmpty" style={{visibility : 'inherit', opacity: teethDiagnozis.tooth18.tartar ? 1 : 0}}>
                        <path className="st61 tartat-part"
                                d="M234.597 557.171C234.997 556.846 235.297 557.412 235.697 557.087C237.39 555.488 239.167 553.03 241.015 551.702C242.787 550.428 244.624 549.273 246.515 548.227C249.246 546.717 252.091 544.433 255.015 543.347C257.465 542.437 259.972 542.665 262.515 542.013C265.15 541.338 267.823 539.792 270.515 539.355C273.066 538.941 275.634 540.625 278.198 540.39C279.96 540.229 281.737 538.109 283.515 538.047C285.688 537.971 287.863 538.983 290.015 539.11C293.397 539.31 296.724 540.797 299.899 541.687C302.563 542.433 305.12 542.461 307.515 543.841C309.928 545.231 312.175 547.977 314.2 550.148C316.395 552.528 318.127 552.242 319.507 555.171C320.49 557.256 323.293 560.45 323.958 562.71C324.487 564.508 323.927 567.347 324.3 569.206C324.7 571.157 326 573.109 326.3 575.061C326.686 577.692 326.996 580.34 327.241 583C327.377 584.486 327.494 586.976 327.591 588.469C327.719 590.429 326.815 591.394 326.883 593.362C326.943 595.109 326.981 596.859 327 598.61C327.02 600.445 326.019 602.281 326 604.117C325.983 605.741 326.949 607.371 326.883 609C326.819 610.569 325.726 612.137 325.591 613.699C325.405 615.853 326.138 617.995 325.758 620.107C325.389 622.155 324.913 624.175 324.3 626.153C323.683 628.144 322.927 631.092 322 632.981C321 635.041 320.8 635.993 319.5 637.728C318.018 639.763 314.341 642.622 312.515 644.316C311.283 645.459 309.983 645.527 308.63 646.523C307.073 647.67 305.446 649.722 303.769 650.684C300.414 652.611 296.86 654.217 293.212 655.5C291.391 656.14 289.557 655.691 287.714 656.155C285.827 656.63 283.931 657.013 282.033 657.304C280.026 657.612 278.018 658.818 276.015 658.921C273.669 659.042 271.332 658.023 269.015 657.866C267.336 657.752 265.667 658.564 264.015 658.304C262.159 658.013 260.324 657.63 258.515 657.155C256.743 656.691 254.996 655.139 253.281 654.5C251.662 653.897 250.071 654.216 248.515 653.459C246.805 652.627 245.136 650.702 243.515 649.684C241.969 648.714 239.467 647.66 238.015 646.523C236.484 645.324 236.009 644.033 234.597 642.65C233.036 641.121 230.552 639.48 229.153 637.728C227.81 636.044 225.305 633.331 224.296 631.572C224.196 631.355 224.096 630.247 223.996 630.03C223.056 628.309 223.213 626.531 222.466 624.707C221.85 623.203 219.3 621.668 218.813 620.107C218.041 617.627 216.43 615.083 215.98 612.5C215.577 610.192 216.302 607.853 216.151 605.5C215.871 601.113 215.024 596.675 215.596 592.3C216.083 588.572 217.82 584.963 218.813 581.5C219.302 579.797 218.853 578.129 219.466 576.5C220.418 573.973 222.521 571.538 223.78 569.206C225.044 566.863 225.466 565.623 227.047 563.5C228.439 561.631 232.954 558.853 234.597 557.171ZM242.819 573.201C234.319 578.801 229.519 586.401 227.819 595.001C226.319 602.901 227.919 610.901 233.319 617.601C246.119 633.701 274.019 638.101 297.519 630.001C305.119 627.401 311.919 623.501 315.819 618.001C319.519 612.901 320.119 607.001 320.319 601.301C320.419 595.501 320.119 589.601 319.019 583.901C317.819 578.301 315.819 572.501 310.419 568.501C302.619 562.601 290.719 562.101 279.519 562.901C266.219 563.901 252.819 566.501 242.819 573.201Z"></path>
                        <path className="st61 tartat-part"
                                d="M234.597 557.171C234.997 556.846 235.297 557.412 235.697 557.087C237.39 555.488 239.167 553.03 241.015 551.702C242.787 550.428 244.624 549.273 246.515 548.227C249.246 546.717 252.091 544.433 255.015 543.347C257.465 542.437 259.972 542.665 262.515 542.013C265.15 541.338 267.823 539.792 270.515 539.355C273.066 538.941 275.634 540.625 278.198 540.39C279.96 540.229 281.737 538.109 283.515 538.047C285.688 537.971 287.863 538.983 290.015 539.11C293.397 539.31 296.724 540.797 299.899 541.687C302.563 542.433 305.12 542.461 307.515 543.841C309.928 545.231 312.175 547.977 314.2 550.148C316.395 552.528 318.127 552.242 319.507 555.171C320.49 557.256 323.293 560.45 323.958 562.71C324.487 564.508 323.927 567.347 324.3 569.206C324.7 571.157 326 573.109 326.3 575.061C326.686 577.692 326.996 580.34 327.241 583C327.377 584.486 327.494 586.976 327.591 588.469C327.719 590.429 326.815 591.394 326.883 593.362C326.943 595.109 326.981 596.859 327 598.61C327.02 600.445 326.019 602.281 326 604.117C325.983 605.741 326.949 607.371 326.883 609C326.819 610.569 325.726 612.137 325.591 613.699C325.405 615.853 326.138 617.995 325.758 620.107C325.389 622.155 324.913 624.175 324.3 626.153C323.683 628.144 322.927 631.092 322 632.981C321 635.041 320.8 635.993 319.5 637.728C318.018 639.763 314.341 642.622 312.515 644.316C311.283 645.459 309.983 645.527 308.63 646.523C307.073 647.67 305.446 649.722 303.769 650.684C300.414 652.611 296.86 654.217 293.212 655.5C291.391 656.14 289.557 655.691 287.714 656.155C285.827 656.63 283.931 657.013 282.033 657.304C280.026 657.612 278.018 658.818 276.015 658.921C273.669 659.042 271.332 658.023 269.015 657.866C267.336 657.752 265.667 658.564 264.015 658.304C262.159 658.013 260.324 657.63 258.515 657.155C256.743 656.691 254.996 655.139 253.281 654.5C251.662 653.897 250.071 654.216 248.515 653.459C246.805 652.627 245.136 650.702 243.515 649.684C241.969 648.714 239.467 647.66 238.015 646.523C236.484 645.324 236.009 644.033 234.597 642.65C233.036 641.121 230.552 639.48 229.153 637.728C227.81 636.044 225.305 633.331 224.296 631.572C224.196 631.355 224.096 630.247 223.996 630.03C223.056 628.309 223.213 626.531 222.466 624.707C221.85 623.203 219.3 621.668 218.813 620.107C218.041 617.627 216.43 615.083 215.98 612.5C215.577 610.192 216.302 607.853 216.151 605.5C215.871 601.113 215.024 596.675 215.596 592.3C216.083 588.572 217.82 584.963 218.813 581.5C219.302 579.797 218.853 578.129 219.466 576.5C220.418 573.973 222.521 571.538 223.78 569.206C225.044 566.863 225.466 565.623 227.047 563.5C228.439 561.631 232.954 558.853 234.597 557.171ZM242.819 573.201C234.319 578.801 229.519 586.401 227.819 595.001C226.319 602.901 227.919 610.901 233.319 617.601C246.119 633.701 274.019 638.101 297.519 630.001C305.119 627.401 311.919 623.501 315.819 618.001C319.519 612.901 320.119 607.001 320.319 601.301C320.419 595.501 320.119 589.601 319.019 583.901C317.819 578.301 315.819 572.501 310.419 568.501C302.619 562.601 290.719 562.101 279.519 562.901C266.219 563.901 252.819 566.501 242.819 573.201Z"
                                style={{visibility: 'inherit'}}></path>
                        <path className="st61 tartat-part"
                                d="M239.083 561.247C239.451 560.954 239.727 561.465 240.095 561.171C241.654 559.73 243.289 557.513 244.989 556.316C246.62 555.167 248.311 554.126 250.051 553.183C252.565 551.821 255.182 549.762 257.873 548.782C260.128 547.962 262.435 548.167 264.775 547.58C267.2 546.971 269.661 545.577 272.138 545.183C274.486 544.81 276.849 546.328 279.209 546.116C280.83 545.971 282.465 544.059 284.102 544.004C286.101 543.936 288.103 544.847 290.083 544.962C293.196 545.143 296.258 546.484 299.18 547.285C301.631 547.958 303.985 547.984 306.188 549.228C308.409 550.481 310.477 552.957 312.341 554.915C314.361 557.06 315.955 558.606 317.225 561.247C318.129 563.127 319.789 564.204 320.401 566.242C320.887 567.862 321.293 570.422 321.636 572.098C322.004 573.858 321.36 575.618 321.636 577.377C321.991 579.75 323.197 582.138 323.422 584.536C323.548 585.876 322.734 587.219 322.824 588.565C322.942 590.333 323.03 592.104 323.092 593.879C323.148 595.454 323.183 597.032 323.2 598.611C323.219 600.265 323.218 601.921 323.2 603.577C323.185 605.04 324.073 606.51 324.013 607.979C323.954 609.394 322.948 610.808 322.824 612.216C322.652 614.158 323.327 616.089 322.977 617.994C322.638 619.841 321.28 621.662 320.716 623.446C320.148 625.24 319.452 627.898 318.599 629.602C317.678 631.46 316.574 632.318 315.378 633.882C314.014 635.717 312.47 638.294 310.79 639.822C309.656 640.852 308.46 640.914 307.215 641.812C305.782 642.846 304.284 644.696 302.741 645.564C301.577 646.219 300.387 646.829 299.18 647.394C297.156 648.354 295.101 649.191 293.025 649.906C291.35 650.483 289.662 650.079 287.966 650.497C286.229 650.926 284.484 651.271 282.738 651.533C280.891 651.811 279.042 652.898 277.199 652.991C275.041 653.1 272.89 652.182 270.757 652.039C269.212 651.936 267.677 652.669 266.156 652.435C264.448 652.172 262.759 651.826 261.094 651.399C259.463 650.98 257.856 649.581 256.278 649.005C254.788 648.461 253.324 648.749 251.891 648.066C250.318 647.316 248.782 645.58 247.29 644.663C245.868 643.788 243.565 642.838 242.228 641.812C240.82 640.731 240.383 639.567 239.083 638.32C237.646 636.942 235.36 635.462 234.073 633.882C233.312 632.947 233.498 631.977 232.794 630.971C231.999 629.836 231.241 628.655 230.523 627.43C230.431 627.234 229.419 627.136 229.327 626.941C228.462 625.389 228.607 623.786 227.919 622.142C227.352 620.785 225.925 619.401 225.478 617.994C224.767 615.758 225.125 613.464 224.711 611.135C224.34 609.054 223.167 606.945 223.028 604.823C222.901 602.877 223.791 600.919 223.855 598.962C223.922 596.943 223.17 594.925 223.437 592.921C223.674 591.147 224.895 589.403 225.26 587.692C225.587 586.161 225.046 584.658 225.478 583.183C225.927 581.648 226.434 580.144 226.999 578.675C227.875 576.397 228.89 574.201 230.048 572.098C231.212 569.986 233.44 568.868 234.896 566.953C236.177 565.269 237.571 562.763 239.083 561.247ZM242.82 573.201C234.32 578.801 229.52 586.401 227.82 595.001C226.32 602.901 227.92 610.901 233.32 617.601C246.12 633.701 274.02 638.101 297.52 630.001C305.12 627.401 311.92 623.501 315.82 618.001C319.52 612.901 320.12 607.001 320.32 601.301C320.42 595.501 320.12 589.601 319.02 583.901C317.82 578.301 315.82 572.501 310.42 568.501C302.62 562.601 290.72 562.101 279.52 562.901C266.22 563.901 252.82 566.501 242.82 573.201Z"></path>
                    </g>
                    {/*CARIES/SEAL*/}
                    <g className="header caries-filling" style={{visibility: (!tooth18Diagnozis.culttab && !tooth18Diagnozis.abutment && !tooth18Diagnozis.implant && !tooth18Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        {/*КАРИЕС ЦЕНТР*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                        >
                            <path className="st7" d="M307.4,609c-0.6,1.4-1.4,2.7-2.5,3.8c-7.9,8.8-28,10.8-40,9.4c-7.1-0.8-13.3-3.5-17.3-8.1
                            c-3.6-4.2-5.5-9.9-4.9-17.2c0.4-5,3-9.4,6.6-13.1c7.6-7.7,19.9-12.4,27.8-12.9c11.7-0.7,22.4,6.3,22.4,6.3
                            c2.5,1.2,4.8,3.8,6.4,7.1C309.4,591.1,310.7,600.9,307.4,609z" />
                            <path
                                className={
                                    `st8 caries-center
                                    ${'caries-stroke'}
                                    ${teethDiagnozis.tooth18.caries_center ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth18.seal_center ? `seal-fill ${teethDiagnozis.tooth18.seal_center_color}` : ''}
                                `}
                                d="M307.4,609c-0.6,1.4-1.4,2.7-2.5,3.8c-7.9,8.8-28,10.8-40,9.4c-7.1-0.8-13.3-3.5-17.3-8.1
                                c-3.6-4.2-5.5-9.9-4.9-17.2c0.4-5,3-9.4,6.6-13.1c7.6-7.7,19.9-12.4,27.8-12.9c11.7-0.7,22.4,6.3,22.4,6.3
                                c2.5,1.2,4.8,3.8,6.4,7.1C309.4,591.1,310.7,600.9,307.4,609z"
                            />
                        </g>
                        {/*КАРИЕС ПРАВО*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st7" d="M326.1,603.8c-0.1,8.8-0.8,17.8-5,25.7c-1,1.9-2.2,3.7-3.5,5.3c-4.6-6.1-9.6-13.8-12.6-22
                                c1.1-1.2,1.9-2.4,2.5-3.8c3.3-8.1,2-17.9-1.4-24.6c3.6-1.8,11.2-6.2,17.4-12.7c0.4,1.8,0.7,3.6,1,5.4
                                C325.7,585.9,326.2,594.9,326.1,603.8z"
                            />
                            <path
                                className={
                                    `st8 caries-center
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth18.caries_right ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth18.seal_right ? `seal-fill ${teethDiagnozis.tooth18.seal_right_color}` : ''}
                                `}
                                d="M326.1,603.8c-0.1,8.8-0.8,17.8-5,25.7c-1,1.9-2.2,3.7-3.5,5.3c-4.6-6.1-9.6-13.8-12.6-22
                                c1.1-1.2,1.9-2.4,2.5-3.8c3.3-8.1,2-17.9-1.4-24.6c3.6-1.8,11.2-6.2,17.4-12.7c0.4,1.8,0.7,3.6,1,5.4
                                C325.7,585.9,326.2,594.9,326.1,603.8z"
                            />
                        </g>
                        {/*КАРИЕС НИЗ*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'bottom');
                            }}
                        >
                            <path className="st7" d="M323.3,571.6L323.3,571.6c-6.2,6.6-13.8,10.9-17.4,12.7c-1.7-3.3-3.9-5.9-6.4-7.1c0,0-10.7-7-22.4-6.3
                            c-7.9,0.5-20.2,5.1-27.8,12.9c-3.6-4-10-12-14.8-23.3c0.4-0.3,0.7-0.7,1.1-1c11.6-10.1,27.1-14.1,42.5-15.4c13-1.1,26.8-0.1,36,9
                            C319.2,558.1,321.8,564.7,323.3,571.6z"/>
                            <path
                                className={
                                    `st8 caries-center
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth18.caries_bottom ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth18.seal_bottom ? `seal-fill ${teethDiagnozis.tooth18.seal_bottom_color}` : ''}
                                `}
                                d="M323.3,571.6L323.3,571.6c-6.2,6.6-13.8,10.9-17.4,12.7c-1.7-3.3-3.9-5.9-6.4-7.1c0,0-10.7-7-22.4-6.3
                                c-7.9,0.5-20.2,5.1-27.8,12.9c-3.6-4-10-12-14.8-23.3c0.4-0.3,0.7-0.7,1.1-1c11.6-10.1,27.1-14.1,42.5-15.4c13-1.1,26.8-0.1,36,9
                                C319.2,558.1,321.8,564.7,323.3,571.6z"
                            />
                        </g>
                        {/*КАРИЕС LEFT*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                        >
                            <path className="st7" d="M247.6,614.1c-9.7,4.2-17.3,9.8-22.2,14.2c-0.1-0.2-0.2-0.3-0.3-0.5c-6.3-10.4-8.3-22.8-6.6-34.9
                                c1.8-12.7,7-23.9,16-32.4c4.8,11.3,11.1,19.3,14.8,23.3c-3.6,3.7-6.2,8.1-6.6,13.1C242.1,604.2,244,609.9,247.6,614.1z"
                            />
                            <path
                                className={
                                    `st8 caries-left
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth18.caries_left ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth18.seal_left ? `seal-fill ${teethDiagnozis.tooth18.seal_left_color}` : ''}
                                `}
                                d="M247.6,614.1c-9.7,4.2-17.3,9.8-22.2,14.2c-0.1-0.2-0.2-0.3-0.3-0.5c-6.3-10.4-8.3-22.8-6.6-34.9
                                c1.8-12.7,7-23.9,16-32.4c4.8,11.3,11.1,19.3,14.8,23.3c-3.6,3.7-6.2,8.1-6.6,13.1C242.1,604.2,244,609.9,247.6,614.1z"
                            />
                        </g>
                        {/*КАРИЕС ВЕРХ*/}
                        <g
                            onClick={() => {
                                setColordedPart(diagnozis, 'top');
                            }}
                            className="caries-filling"
                        >
                            <path className="st7" d="M317.6,634.8c-4.5,5.7-10.8,9.9-17.6,12.9c-27.1,12.1-59.3,5.1-74.6-19.5c4.9-4.4,12.4-10,22.2-14.2
                                c4,4.6,10.2,7.3,17.3,8.1c12,1.4,32.1-0.5,40-9.4C308,621,313,628.7,317.6,634.8z"
                            />
                            <path
                                className={
                                    `st8 caries-center
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth18.caries_top ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth18.seal_top ? `seal-fill ${teethDiagnozis.tooth18.seal_top_color}` : ''}
                                `}
                                d="M317.6,634.8c-4.5,5.7-10.8,9.9-17.6,12.9c-27.1,12.1-59.3,5.1-74.6-19.5c4.9-4.4,12.4-10,22.2-14.2
                                c4,4.6,10.2,7.3,17.3,8.1c12,1.4,32.1-0.5,40-9.4C308,621,313,628.7,317.6,634.8z"
                            />
                        </g>
                        <g className="with">
                            {/*Черточка низ лево*/}
                            <path className="st54" d="M247.5 614.5C244.5 615 236.6 617.8 229 625"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth18Diagnozis.seal_left && !tooth18Diagnozis.seal_top) ||
                                        (!tooth18Diagnozis.seal_left && tooth18Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Овал лево*/}
                            <path className="st54" d="M247.5 614.5C243.333 608.333 237.9 593.5 249.5 583.5"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth18Diagnozis.seal_left && !tooth18Diagnozis.seal_center) ||
                                        (!tooth18Diagnozis.seal_left && tooth18Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Черточка верх лево*/}
                            <path className="st54" d="M236.5 565C238.167 567.833 243 575.4 249 583"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth18Diagnozis.seal_left && !tooth18Diagnozis.seal_bottom) ||
                                        (!tooth18Diagnozis.seal_left && tooth18Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Овал черточка верх*/}
                            <path className="st54" d="M249.5 583.5C260.833 576 288 565.6 306 584"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth18Diagnozis.seal_center && !tooth18Diagnozis.seal_bottom) ||
                                        (!tooth18Diagnozis.seal_center && tooth18Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Черточка верх право*/}
                            <path className="st54" d="M320 575C318.667 576.5 314.2 580.5 307 584.5"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth18Diagnozis.seal_right && !tooth18Diagnozis.seal_bottom) ||
                                        (!tooth18Diagnozis.seal_right && tooth18Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Овал черточка право*/}
                            <path className="st54" d="M306 584C308.333 587.667 311.4 598.6 305 613"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (!tooth18Diagnozis.seal_right && tooth18Diagnozis.seal_center) ||
                                        (tooth18Diagnozis.seal_right && !tooth18Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Низ черточка право*/}
                            <path className="st54" d="M315 631C312.833 629.167 307.8 623.5 305 615.5"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth18Diagnozis.seal_right && !tooth18Diagnozis.seal_top) ||
                                        (!tooth18Diagnozis.seal_right && tooth18Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Овал черточка низ*/}
                            <path className="st54" d="M305 613C300.5 622 264.3 628.6 247.5 615"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth18Diagnozis.seal_center && !tooth18Diagnozis.seal_top) ||
                                        (!tooth18Diagnozis.seal_center && tooth18Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }}
                            />
                        </g>
                    </g>
                    {/*VINIR*/}
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir"
                            style={
                                {
                                    visibility: tooth18Diagnozis.vinir ? 'inherit' : 'hidden',
                                    opacity: tooth18Diagnozis.vinir ? 1 : 0
                                }}
                        >
                            <path className="st55"
                                d="M218.013 592.875C219.813 580.175 225.013 568.975 234.013 560.475C234.413 560.175 234.713 559.775
                                235.113 559.475C246.713 549.375 262.213 545.375 277.613 544.075C290.613 542.975 304.413 543.975
                                313.613 553.075C318.613 558.075 321.213 564.675 322.713 571.575C323.113 573.375 323.413 575.175
                                323.713 576.975C324.547 582.218 325.026 587.532 325.256 592.875C321.987 592.742 315.364 591.676
                                315.031 588.476C314.814 585.95 314.515 583.437 314.116 580.944C313.872 579.485 313.627 578.025
                                313.301 576.566C312.079 570.971 309.96 565.619 305.886 561.564C298.389 554.186 287.145 553.375
                                276.552 554.267C264.003 555.321 251.373 558.564 241.921 566.754C241.595 566.997 241.35 567.322
                                241.024 567.565C234.992 573.234 231.055 580.385 229.031 588.476C228.245 592.076 221.349 592.976
                                217.999 592.976L218.013 592.875Z"
                            />
                            <path className={`vinir-fill ${tooth18Diagnozis.vinir_color}`}
                                d="M218.013 592.875C219.813 580.175 225.013 568.975 234.013 560.475C234.413 560.175 234.713
                                559.775 235.113 559.475C246.713 549.375 262.213 545.375 277.613 544.075C290.613 542.975
                                304.413 543.975 313.613 553.075C318.613 558.075 321.213 564.675 322.713 571.575C323.113
                                573.375 323.413 575.175 323.713 576.975C324.547 582.218 325.026 587.532 325.256 592.875C321.987
                                592.742 315.364 591.676 315.031 588.476C314.814 585.95 314.515 583.437 314.116 580.944C313.872
                                579.485 313.627 578.025 313.301 576.566C312.079 570.971 309.96 565.619 305.886 561.564C298.389
                                554.186 287.145 553.375 276.552 554.267C264.003 555.321 251.373 558.564 241.921 566.754C241.595
                                566.997 241.35 567.322 241.024 567.565C234.992 573.234 231.055 580.385 229.031 588.476C228.245
                                592.076 221.349 592.976 217.999 592.976M218.013 592.875C218.008 592.909 218.004 592.942 217.999
                                592.976M218.013 592.875L217.999 592.976"
                            />
                        </g>
                    </g>
                    {/* ТИМЧАСОВА КОРОНКА/КЕРАМІЧНА КОРОНКА */}
                    <g className="crown" style={{
                        visibility: (tooth18Diagnozis.temporary_crown || tooth18Diagnozis.ceramic_crown || tooth18Diagnozis.mceramic_crown || tooth18Diagnozis.metalic_crown || tooth18Diagnozis.zirconia_crown) ? 'inherit' : 'hidden',
                        opacity: (tooth18Diagnozis.temporary_crown || tooth18Diagnozis.ceramic_crown || tooth18Diagnozis.mceramic_crown || tooth18Diagnozis.metalic_crown || tooth18Diagnozis.zirconia_crown)  ? 1 : 0
                    }}>
                        <path
                            className={
                                `st46 target temporary-crown crown-fill ${diagnozis}
                                ${tooth18Diagnozis.ceramic_crown_color}
                                ${tooth18Diagnozis.mceramic_crown_color}
                                ${tooth18Diagnozis.metalic_crown_color}
                                ${tooth18Diagnozis.zirconia_crown_color}
                            `}
                            d="M324.3,577c-0.3-1.8-0.6-3.6-1-5.4v0c-1.6-6.9-4.1-13.5-9.1-18.5
                            c-9.2-9.2-23-10.1-36-9c-15.5,1.3-31,5.2-42.5,15.4c-0.4,0.3-0.7,0.6-1.1,1c-9.1,8.4-14.3,19.7-16,32.4
                            c-1.7,12.1,0.3,24.5,6.6,34.9c0.1,0.2,0.2,0.3,0.3,0.5c15.2,24.6,47.5,31.6,74.6,19.5c6.8-3,13-7.2,17.6-12.9
                            c1.3-1.7,2.5-3.4,3.5-5.3c4.2-7.8,4.8-16.8,5-25.7C326.2,594.9,325.7,585.9,324.3,577z"
                        />
                        {/*FISSURE*/}
                        <path className={`st3 fissure ${tooth18Diagnozis.fissure ? 'diagnoze' : tooth18Diagnozis.fissure ? 'hidden' : ''}`}
                            d="M255.3,600.8c-1.3,0-2.5-0.3-3.5-1.3c-1.6-1.6-1.3-3.9-0.9-6c0.1-0.6,0.2-1.2,0.3-1.8c0.3-3.1-1-6.1-3.4-8
                            l0.7-0.8c2.7,2.2,4.1,5.5,3.8,8.9c-0.1,0.6-0.2,1.2-0.3,1.8c-0.3,2-0.6,3.8,0.6,5.1c1.2,1.2,2.7,1,4.6,0.8l0.1,0
                            c1.7-0.2,3.6-0.1,5.3-0.1c1.5,0,3,0,4.5-0.1c3.5-0.2,6.9-0.6,10.3-1.1c1.2-2.3,2.3-4.6,3.3-6.9c1.2-2.8,2.3-5.6,1.9-8.5
                            c-0.3-2.2-1.5-4.1-2.7-6c-1.8-2.9-3.6-5.9-5.3-8.8l0.9-0.5c1.7,2.9,3.5,5.8,5.2,8.7c1.3,2,2.5,4.1,2.9,6.5
                            c0.5,3.2-0.7,6.1-2,9.1c-1.1,2.4-2.2,4.9-3.5,7.2l-0.1,0.2l-0.3,0c-3.6,0.6-7.1,1-10.7,1.2c-1.5,0.1-3.1,0.1-4.6,0.1
                            c-1.8,0-3.6,0-5.2,0.1l-0.1,0C256.6,600.7,256,600.8,255.3,600.8z"
                        />
                        <path className={`st3 fissure ${tooth18Diagnozis.fissure ? 'diagnoze' : ''}`}
                            d="M268.7,628.6l-1-0.5c1.4-2.8,2.5-5.8,3.1-9c0.6-2.8,0.7-5.6,0.5-8.3c-0.3-3.5-1.2-6.8-2.8-9.9l1-0.5
                            c1.6,3.2,2.6,6.7,2.9,10.3c0.2,2.7,0.1,5.6-0.5,8.6C271.2,622.5,270.1,625.6,268.7,628.6z"/>
                            <path className={`st3 fissure ${tooth18Diagnozis.fissure ? 'diagnoze' : ''}`} d="M290.3,613c-0.3,0-0.7,0-1-0.1c-3.1-0.4-5.4-2.6-7.4-5c-2.3-2.6-4.4-5.5-6.2-8.5l0.9-0.6
                            c1.8,2.9,3.8,5.7,6.1,8.3c1.9,2.2,4,4.2,6.7,4.6c2.6,0.3,4.9-0.9,7.3-2.3c1.4-0.7,2.8-1.5,4.3-2c3.1-1,6.7-0.9,10.6,0.4
                            c1.9,0.6,3.6,1.4,5.3,2.3l-0.5,0.9c-1.6-0.9-3.3-1.7-5.1-2.2c-3.8-1.2-7.1-1.3-10-0.4c-1.4,0.5-2.8,1.2-4.1,1.9
                            C295.1,611.8,292.8,613,290.3,613z"
                        />
                        <path className={`st3 fissure ${tooth18Diagnozis.fissure ? 'diagnoze' : ''}`} 
                            d="M241.9,612.3l-0.4-1c2-0.7,3.7-2,5.1-3.6c0.8-1,1.6-2,2.3-3.1c1.5-2.1,2.8-4.1,4.9-5.1l0.4,1
                            c-1.8,0.8-3.1,2.7-4.5,4.7c-0.7,1.1-1.5,2.1-2.3,3.2C245.9,610.2,244,611.5,241.9,612.3z"/>
                    </g>
                    {/*FISSURES*/}
                    <g className="fissures hEmpty hRoot hImplant" style={{visibility: (!tooth18Diagnozis.culttab && !tooth18Diagnozis.abutment && !tooth18Diagnozis.implant && !tooth18Diagnozis.apex && !tooth18Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className={`st3 fissure ${tooth18Diagnozis.fissure ? 'diagnoze' : ''}`}
                            d="M255.3,600.8c-1.3,0-2.5-0.3-3.5-1.3c-1.6-1.6-1.3-3.9-0.9-6c0.1-0.6,0.2-1.2,0.3-1.8c0.3-3.1-1-6.1-3.4-8
                            l0.7-0.8c2.7,2.2,4.1,5.5,3.8,8.9c-0.1,0.6-0.2,1.2-0.3,1.8c-0.3,2-0.6,3.8,0.6,5.1c1.2,1.2,2.7,1,4.6,0.8l0.1,0
                            c1.7-0.2,3.6-0.1,5.3-0.1c1.5,0,3,0,4.5-0.1c3.5-0.2,6.9-0.6,10.3-1.1c1.2-2.3,2.3-4.6,3.3-6.9c1.2-2.8,2.3-5.6,1.9-8.5
                            c-0.3-2.2-1.5-4.1-2.7-6c-1.8-2.9-3.6-5.9-5.3-8.8l0.9-0.5c1.7,2.9,3.5,5.8,5.2,8.7c1.3,2,2.5,4.1,2.9,6.5
                            c0.5,3.2-0.7,6.1-2,9.1c-1.1,2.4-2.2,4.9-3.5,7.2l-0.1,0.2l-0.3,0c-3.6,0.6-7.1,1-10.7,1.2c-1.5,0.1-3.1,0.1-4.6,0.1
                            c-1.8,0-3.6,0-5.2,0.1l-0.1,0C256.6,600.7,256,600.8,255.3,600.8z"
                        />
                        <path className={`st3 fissure ${tooth18Diagnozis.fissure ? 'diagnoze' : ''}`}
                            d="M268.7,628.6l-1-0.5c1.4-2.8,2.5-5.8,3.1-9c0.6-2.8,0.7-5.6,0.5-8.3c-0.3-3.5-1.2-6.8-2.8-9.9l1-0.5
                            c1.6,3.2,2.6,6.7,2.9,10.3c0.2,2.7,0.1,5.6-0.5,8.6C271.2,622.5,270.1,625.6,268.7,628.6z"
                        />
                        <path className={`st3 fissure ${tooth18Diagnozis.fissure ? 'diagnoze' : ''}`}
                            d="M290.3,613c-0.3,0-0.7,0-1-0.1c-3.1-0.4-5.4-2.6-7.4-5c-2.3-2.6-4.4-5.5-6.2-8.5l0.9-0.6
                            c1.8,2.9,3.8,5.7,6.1,8.3c1.9,2.2,4,4.2,6.7,4.6c2.6,0.3,4.9-0.9,7.3-2.3c1.4-0.7,2.8-1.5,4.3-2c3.1-1,6.7-0.9,10.6,0.4
                            c1.9,0.6,3.6,1.4,5.3,2.3l-0.5,0.9c-1.6-0.9-3.3-1.7-5.1-2.2c-3.8-1.2-7.1-1.3-10-0.4c-1.4,0.5-2.8,1.2-4.1,1.9
                            C295.1,611.8,292.8,613,290.3,613z"
                        />
                        <path className={`st3 fissure ${tooth18Diagnozis.fissure ? 'diagnoze' : ''}`}
                            d="M241.9,612.3l-0.4-1c2-0.7,3.7-2,5.1-3.6c0.8-1,1.6-2,2.3-3.1c1.5-2.1,2.8-4.1,4.9-5.1l0.4,1
                            c-1.8,0.8-3.1,2.7-4.5,4.7c-0.7,1.1-1.5,2.1-2.3,3.2C245.9,610.2,244,611.5,241.9,612.3z"
                        />
                    </g>
                </g>
                <g id="T_18" className="common-view"
                    style={{visibility: tooth18Diagnozis.absent ? 'hidden' : 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin">
                        <g id="dentin_v_18" className="hRoot hImplant hEmpty" style={{visibility: !tooth18Diagnozis.implant && !tooth18Diagnozis.apex && !tooth18Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st9 change-color ${tooth18Diagnozis.change_color ? 'diagnoze' : ''}`}
                                d="M236.8,341l0.2,0c0,0,0.2-0.1,0.4-0.2c3.5-1.7,7.3-2.5,11.2-2.9c6.3-0.7,12.7-0.3,19,0.7
                                c3.8,0.6,7.6,1.4,11.4,2.3c2,0.5,4,1,6,1.6c6.8,1.9,13.4,4.4,19.6,7.9c8.2,4.6,15.3,11,20.8,18.6c0,0,0,0,0,0
                                c0.1,0.4,0.2,0.8,0.3,1.2c-0.2,10.3-3.9,25.6-6.2,32.8c-1.1,3.4-2.3,6.9-3.5,10.3c-1.2,3.4-2.5,6.8-3.8,10.2
                                c-2.4-2.7-5.1-5.1-8-7.3c-4.1-3.1-8.6-5.7-13.5-7.7c-3,0.5-5.8,1.6-8.1,3.3c-1.3,1-2.5,2.1-3.5,3.3c-4.5-2.4-8.8-5-13-7.7
                                c-4-2.6-8.1-5.5-13-5.6c-3.7-0.1-7.1,1.4-10.4,3c-3.5,1.7-6.9,3.4-10.4,5.1c-1.5-7.8-2.7-15.6-3.4-23.5
                                c-0.8-7.7-1.1-15.4-1.1-23.1c2.9-7.3,5.8-14.5,8.8-21.7C236.6,341.3,236.7,341.1,236.8,341"
                            />
                        </g>
                        <g id="dentin_n_18" style={{visibility: !tooth18Diagnozis.implant && !tooth18Diagnozis.abutment && !tooth18Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path
                                className={`st10 change-color ${tooth18Diagnozis?.change_color ? 'diagnoze' : ''}`}
                                d="M325.4,368.9C325.4,368.9,325.4,368.9,325.4,368.9c-5.5-7.6-12.6-14-20.8-18.6c-6.2-3.5-12.8-5.9-19.6-7.9
                                c-2-0.6-4-1.1-6-1.6c-3.8-0.9-7.6-1.7-11.4-2.3c-6.3-1-12.6-1.4-19-0.7c-4,0.4-8,1.3-11.5,3.1c0.4-1,0.9-2.1,1.3-3.1
                                c8.7-21,17.8-41.8,26-62.9c1.2-3.2,2.5-6.6,1.4-9.8c-0.9-3-3.7-5.4-4.5-8.4c-0.5-2.2,0-4.4,1.3-6.2c1.6-2.4,4.2-4,7-4.9
                                c1.6-0.5,3.2-0.7,4.8-0.8c0.5,0,0.9,0,1.3,0c2.1,0.1,4.2,0.4,6.1,1.1c7,2.4,12.1,7.7,15.8,13.7c7.1,11.5,9.2,24.8,11.2,37.9
                                c1.2,8.4,2.5,16.9,3.9,25.3c1.2,6.9,9.5,33.9,13,46.7C325.6,369.2,325.5,369.1,325.4,368.9z"
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g className="hEmpty hRoot hImplant pulpitis-pfilling">
                            <path className={`st22 target top ${tooth18Diagnozis.channel_class} ${tooth18Diagnozis.channel_class} ${tooth18Diagnozis.pulpit ? 'pulpit' : ''} ${tooth18Diagnozis.periodontit ? 'periodontit' : ''}`}
                                    d="M292.2,387c-4.1-5.4-10.3-9.2-17.4-10.5c-6.3-1.2-12.9-0.3-18.6,2.4
                            c3.5-15.7,11.8-42.5,11.1-40.4c3.8,0.6,7.6,1.4,11.4,2.3c2,0.5,4,1,6,1.6C285.3,357.5,287.8,372.5,292.2,387z"
                            />
                        </g>
                        <g>
                            <path className={`st22 target middle ${tooth18Diagnozis.channel_class} ${tooth18Diagnozis.channel_class} ${tooth18Diagnozis.pulpit ? 'pulpit' : ''} ${tooth18Diagnozis.periodontit ? 'periodontit' : ''}`}
                                    d="M284.7,343c-2-0.6-4-1.1-6-1.6c-3.8-0.9-7.6-1.7-11.4-2.3c0.7-2,1.4-4.1,2.1-6.1
                            c4.4-12.7,9.3-25.8,11.3-38.7c1.9,0.4,3.8,0.8,5.7,1.3c0.1,11.6-1.4,23.5-1.7,35.3C284.5,334.9,284.6,339,284.7,343z"
                            />
                        </g>
                        <g>
                            <path className={`st22 target part ${tooth18Diagnozis.channel_class} ${tooth18Diagnozis.channel_class} ${tooth18Diagnozis.pulpit ? 'pulpit' : ''} ${tooth18Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`}
                                    d="M280.6,294.3c1.5-10,1.2-19.9-2.5-29.6c-2.4-6.2-6.1-11.9-10.9-16.8
                            c6,5.4,10.6,11.9,13.8,19c4,9.2,5.3,18.9,5.4,28.7C284.5,295.1,282.5,294.6,280.6,294.3z"
                            />
                        </g>
                        <PeriodontitStage18 />
                        {/* <g className="level hEmpty hImplant"
                            style={{
                                visibility: 'inherit',
                                opacity: ((tooth18Diagnozis.periodontit && subDiagnozis === 'st1' && toothActive.tooth18.active) || (tooth18Diagnozis.periodontit && tooth18Diagnozis.periodontit_stage === 'st1') ? 1 : 0)
                            }}>
                            <circle className="st42" cx="261.6" cy="242.8" r="8.2"/>
                        </g>
                        <g className="level hEmpty hImplant"
                            style={{
                                visibility: 'inherit',
                                opacity: ((tooth18Diagnozis.periodontit && subDiagnozis === 'st2' && toothActive.tooth18.active) || (tooth18Diagnozis.periodontit && tooth18Diagnozis.periodontit_stage === 'st2') ? 1 : 0)
                            }}>
                            <circle className="st42" cx="264.7" cy="236.5" r="17.5"></circle>
                        </g>
                        <g className="level hEmpty hImplant"
                            style={{
                                visibility: 'inherit',
                                opacity: ((tooth18Diagnozis.periodontit && subDiagnozis === 'st3' && toothActive.tooth18.active) || (tooth18Diagnozis.periodontit && tooth18Diagnozis.periodontit_stage === 'st3') ? 1 : 0)
                            }}>
                            <circle className="st42" cx="262.6" cy="224" r="30"></circle>
                        </g> */}
                    </g>
                    {/*PIN*/}
                    <g className="pin hEmpty hImplant" style={{
                        visibility: 'inherit', opacity: tooth18Diagnozis.pin ? 1 : 0
                    }}>
                        <path className="st56 hIntact"
                            d="M228.3 362.401C228.3 370.101 228.7 377.801 229.4 385.501C230.2 393.401 231.3 401.201 232.9
                            409.001C236.3 407.201 239.8 405.501 243.2 403.901C246.5 402.401 249.9 400.801 253.6 400.901C258.5
                            401.001 262.6 403.901 266.6 406.501C270.8 409.301 275.1 411.901 279.6 414.201C280.6 412.901 281.8
                            411.801 283.1 410.901C285.5 409.201 288.3 408.001 291.3 407.501C296.1 409.501 300.7 412.101 304.8
                            415.201C307.7 417.401 310.4 419.801 312.8 422.501C314.1 419.101 315.4 415.701 316.6 412.301C317.8
                            408.901 319 405.501 320.1 402.001C322.4 394.801 324.3 376.901 326.2 369.501C326.1 368.901 325.9
                            368.401 325.8 367.901C320.3 360.301 313.2 354.101 305 349.401C299.9 346.501 294.5 344.301 288.9
                            342.601C287.7 342.201 286.6 341.901 285.4 341.501C283.4 340.901 281.4 340.401 279.4 339.901C278
                            339.601 276.6 339.201 275.2 338.901H275.1C274.2 338.701 273.3 338.501 272.4 338.301C271.9 338.201
                            271.4 338.101 271 338.001C270.1 337.801 269.1 337.701 268.2 337.501H268.1C262.9 336.701 257.7
                            336.301 252.5 336.601C251.4 336.701 250.3 336.701 249.2 336.901C245.2 337.301 241.3 338.201 237.8
                            340.001C237.8 340.001 237.8 340.001 237.8 339.901C237.8 339.901 237.7 339.901 237.7 340.001C234.3
                            347.601 231.3 355.001 228.3 362.401Z"
                            style={{visibility: 'hidden'}}
                        />
                        <path className="st57"
                            d="M258.7 402.3C261.2 403.4 263.5 405 265.8 406.5C269.9 409.2 274.2 411.8 278.6 414.1C279.6 412.9
                            280.7 411.8 282 410.8C282.5 410.4 284.7 408.9 285.2 408.6L284.5 276C284.5 275.3 284 274.8 283.5
                            274.5C283.3 274.4 283 274.3 282.8 274.3C282 274.3 281.3 274.9 281.1 275.7L280.8 277.1C280.7 277.2
                            263.6 374.8 258.7 402.3Z"
                            style={{fill: tooth18Diagnozis.pin ? '#dbd9d3' : 'none'}}   
                        />
                    </g>
                    {/* CULT TAB */}
                    <g className="stump hEmpty hIntact hImplant" style={{visibility: tooth18Diagnozis.culttab ? 'inherit' : 'hidden', opacity: tooth18Diagnozis.culttab ? 1 : 0}}>
                        <path className="st14" d="M267.7,337.7c0,0,0.1,0,0.1,0v0c0,0,0,0,0,0c0.9,0.1,1.9,0.3,2.8,0.5c0.5,0.1,1,0.2,1.4,0.3
                            c0.9,0.2,1.8,0.4,2.7,0.6c0,0,0.1,0,0.1,0c1.4,0.3,2.8,0.6,4.2,1c2,0.5,4,1,6,1.6v0c0,0,0,0,0,0c1.2,0.3,2.3,0.7,3.5,1.1
                            l-3.1-66.7c0-0.9-0.8-1.7-1.8-1.7c-0.8,0-1.5,0.6-1.7,1.4L267.7,337.7z"
                        />
                        <path className="st15" d="M228.3,362.4c0,7.7,0.4,15.4,1.1,23.1c0.8,7.9,1.9,15.7,3.5,23.5c3.4-1.8,6.9-3.5,10.3-5.1
                            c3.3-1.5,6.7-3.1,10.4-3c4.9,0.1,9,3,13,5.6c4.2,2.8,8.5,5.4,13,7.7c1-1.3,2.2-2.4,3.5-3.3c2.4-1.7,5.2-2.9,8.2-3.4
                            c4.8,2,9.4,4.6,13.5,7.7c2.9,2.2,5.6,4.6,8,7.3c1.3-3.4,2.6-6.8,3.8-10.2c1.2-3.4,2.4-6.8,3.5-10.3c2.3-7.2,4.2-25.1,6.1-32.5
                            c-0.1-0.6-0.3-1.1-0.4-1.6c-5.5-7.6-12.6-13.8-20.8-18.5c-5.1-2.9-10.5-5.1-16.1-6.8c-1.2-0.4-2.3-0.7-3.5-1.1c0,0,0,0,0,0v0
                            c-2-0.6-4-1.1-6-1.6c-1.4-0.3-2.8-0.7-4.2-1c0,0-0.1,0-0.1,0c-0.9-0.2-1.8-0.4-2.7-0.6c-0.5-0.1-1-0.2-1.4-0.3
                            c-0.9-0.2-1.9-0.3-2.8-0.5c0,0,0,0,0,0v0c0,0-0.1,0-0.1,0c-5.2-0.8-10.4-1.2-15.6-0.9c-1.1,0.1-2.2,0.1-3.3,0.3
                            c-4,0.4-7.9,1.3-11.4,3.1c0,0,0,0,0-0.1c0,0-0.1,0-0.1,0.1C234.3,347.6,231.3,355,228.3,362.4z"
                        />
                    </g>
                    <g className="abutment hEmpty hIntact hRoot" style={{visibility: tooth18Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth18Diagnozis.abutment ? 1 : 0}}>
                        <path className="st25" d="M326,368.6c-5.6-7.8-12.8-14.3-21.2-19c-8-4.5-16.7-7.3-25.6-9.5c-9.7-2.4-19.7-4-29.7-3.1
                            c-0.2,0-0.5,0-0.7,0.1c-3.9,0.4-7.8,1.3-11.2,3c0,0,0,0,0,0l35.5-12l31.5,4.5L326,368.6z"
                        />
                        <path className="st26" d="M326.3,369.4c-0.2,10.3-3.9,25.6-6.2,32.8c-1.1,3.4-2.3,6.9-3.5,10.3c-1.2,3.4-2.5,6.8-3.8,10.2
                            c-2.4-2.7-5.1-5.1-8-7.3c-4.1-3.1-8.6-5.7-13.5-7.7c-3,0.5-5.8,1.6-8.2,3.3c-1.3,1-2.5,2.1-3.5,3.3c-0.1-0.1-0.5-0.3-0.5-0.3
                            c-4.3-2.3-8.5-4.8-12.5-7.5c-4-2.6-8.1-5.5-13-5.6c-3.7-0.1-7.1,1.4-10.4,3c-3.5,1.6-6.9,3.3-10.4,5.1
                            c-1.5-7.8-2.7-15.6-3.4-23.5c-0.8-7.7-1.1-15.4-1.1-23.1c3-7.4,6-14.8,9-22.2c0.1,0,0.2-0.1,0.3-0.1c3.5-1.7,7.3-2.5,11.2-3
                            c0.2,0,0.5-0.1,0.7-0.1c10-0.9,19.9,0.7,29.7,3.1c8.9,2.2,17.6,5,25.6,9.5c8.3,4.7,15.6,11.2,21.2,19
                            C326.1,368.8,326.2,369.1,326.3,369.4z"
                        />
                    </g>
                    {/* ФОРМУВАЧ */}
                    <g className="shaper hEmpty hIntact hRoot" style={{visibility: 'hidden', opacity: 0}}>
                        <path className="st44"
                                d="M308.965 376.322C309.043 378.803 306.864 380.755 304.406 380.407L255.645 373.498C253.188 373.15 251.637 370.672 252.399 368.31L264.677 330.235C265.276 328.378 267.127 327.224 269.058 327.504L304.299 332.616C306.219 332.895 307.663 334.511 307.723 336.45L308.965 376.322Z" />
                    </g>
                    {/* IMPLANT/CULTTAB */}
                    <g className="implant hEmpty hIntact hRoot" style={{visibility: tooth18Diagnozis.abutment || tooth18Diagnozis.implant || tooth18Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <path className="st18" d="M317.5,287.2c-0.9,16.3-2.7,32.5-5.5,48.5l-0.2,0l-51.8-7.5l-0.2,0c3.1-15.8,6.9-31.4,11.5-47
                            c4.5-15.1,9.7-30.1,15.6-45c4.1-3,9.9-4.4,15.6-3.5c6.4,1,11.9,4.6,14.9,9.5C318.3,257.2,318.3,272.2,317.5,287.2z"
                        />
                        <line className="st19" x1="319.3" y1="319.5" x2="257.2" y2="319.4" />
                        <line className="st19" x1="322.8" y1="301.4" x2="260.7" y2="301.4" />
                        <line className="st19" x1="325" y1="283.3" x2="263" y2="283.2" />
                        <line className="st19" x1="328.5" y1="265.2" x2="266.5" y2="265.2" />
                        <line className="st19" x1="332" y1="247.2" x2="270" y2="247.2" />
                    </g>
                    <g className="toutline hRoot hImplant hEmpty" style={{visibility: !tooth18Diagnozis.culttab && !tooth18Diagnozis.abutment && !tooth18Diagnozis.implant && !tooth18Diagnozis.shaper && !tooth18Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M326.9,375.3c-0.2-1.7-0.5-3.4-0.8-5.1c-5.7-8.2-13.1-14.9-21.8-19.8c-8-4.5-16.7-7.3-25.6-9.5
                            c-10-2.4-20.2-4.1-30.4-3c-5.2,0.6-10.4,1.9-14.7,5.1c-2.3,1.7-4.2,3.9-5.6,6.4c-1.9,3.2-3.6,6.5-5.1,10c-1.7,3.8-3,7.7-4.1,11.7
                            c-1.7,6-2.6,12.3-2.9,18.5c-0.3,6.2,0.5,12.3,2.2,18.2c1.6,5.5,4,10.7,7.2,15.5l4.8,0l5.1-3.7c-1.5-2.3-2.8-4.8-4-7.3
                            c-2.1-4.4-3.6-9.1-4.5-14c-0.3-1.9-0.6-3.7-0.8-5.6l1.9-0.7c-0.5,3-0.5,6,0.1,9c0.4,2,1.1,4,2.1,5.8l5.7,11.9l1.1,2.4l5.5,8.5
                            l7.9,0.4c3-2.5,6.6-4.1,10.4-4.8c3.2-0.6,6.6-0.5,9.6-1.6c2.5-0.9,4.7-2.7,6.2-4.9c0.5,1.9,1.4,3.8,2.7,5.3
                            c4.7,5.7,12.7,6.7,18.8,10.8c0.7,0.5,1.4,1,2,1.5c2,1.7,3.6,3.7,4.8,6.1l4.2,1c3.3-2.1,6.2-4.8,8.7-7.8c2.8-3.4,5-7.2,6.6-11.4
                            c1.5-5.9,2.5-12,3.2-18.1C328.4,395.7,328.3,385.4,326.9,375.3z"
                        />
                    </g>
                    {/*КЛИНОВИДНИЙ ЕФЕКТ/ПРИШИЙКОВА ПЛОМБА/ПРИШИЙКОВИЙ КАРІЄС*/}
                    <g className="wedge-shaped" style={{visibility: !tooth18Diagnozis.culttab && !tooth18Diagnozis.abutment ? 'inherit' : 'hidden'}}>
                        <path className="st7 st59"
                            d="M219.023 371C217.423 377 216.423 383.2 216.123 389.5C215.923 395.7 216.623 401.8 218.323 407.5C219.923
                                413 222.323 418.2 225.523 423H230.323L235.423 419.3C233.923 417 232.623 414.5 231.423 412C229.323
                                407.5 227.823 402.8 226.923 398C226.523 396.2 226.223 394.3 226.123 392.4L228.023 391.7C227.423
                                394.7 227.523 397.7 228.123 400.7C228.623 402.7 229.323 404.7 230.223 406.5L235.923 418.4L237.023
                                420.8L242.523 429.3L250.423 429.7C253.423 427.3 257.023 425.6 260.823 424.9C262 424.679 263.191
                                424.553 264.38 424.428C266.424 424.211 268.463 423.995 270.423 423.3C273.023 422.4 275.123 420.6 276.623
                                418.4C277.123 420.3 278.023 422.2 279.323 423.7C282.172 427.155 286.27 428.883 290.392
                                430.622C293.071 431.751 295.76 432.885 298.123 434.5C298.823 434.9 299.523 435.4 300.123 436C302.123 437.7 303.723
                                439.8 304.923 442.1L309.123 443.1C312.423 440.9 315.323 438.3 317.823 435.3C320.623 431.9 322.923 428 324.423
                                423.9C325.923 417.9 327.023 411.9 327.623 405.8C328.623 395.6 328.523 385.3 327.123 375.2C326.923 373.501 326.623
                                371.802 326.323 370.103L326.323 370.1C320.623 362 313.123 355.2 304.523 350.3C296.623 345.8 287.823 343 278.923
                                340.8C268.923 338.4 258.723 336.7 248.523 337.8C243.223 338.4 238.023 339.7 233.823 342.9C231.523 344.6 229.623
                                346.8 228.223 349.3C226.323 352.5 224.623 355.9 223.123 359.3C221.523 363.1 220.123 367 219.023 371ZM233.407
                                352.288C234.623 350.327 236.274 348.602 238.271 347.268C241.919 344.759 246.436 343.739 251.039 343.268C259.898 342.406
                                268.758 343.739 277.443 345.621C285.173 347.347 292.817 349.543 299.678 353.072C305.929 356.288 313.347 361.193 317.101
                                366.614C317.844 367.687 318.3 368.457 318.62 369.34C319.081 370.612 317.862 371.781 316.527 371.566L232.984 358.129C231.63
                                357.912 230.892 356.427 231.582 355.242C232.165 354.24 232.773 353.252 233.407 352.288Z"
                        />
                        <path
                            className={`st7 ${tooth18Diagnozis?.cervical_caries ? 'cervical-caries' : ''}`}
                            d="M238.054 347.268C236.057 348.602 234.406 350.327 233.19 352.288C232.556 353.252 231.948 354.24
                                231.365 355.242C230.676 356.427 231.414 357.912 232.767 358.129L316.31 371.566C317.645 371.781
                                318.864 370.612 318.403 369.34C318.083 368.457 317.628 367.687 316.884 366.614C313.13 361.193
                                305.712 356.288 299.461 353.072C292.6 349.543 284.956 347.347 277.226 345.621C268.541 343.739
                                259.682 342.406 250.822 343.268C246.219 343.739 241.702 344.759 238.054 347.268Z"
                        />
                        <path
                            className={
                                `st60
                                    ${(tooth18Diagnozis?.wedge_shaped_defect) ? `shaped-defect-stroke` : ""}
                                    ${(tooth18Diagnozis?.seal_cervical) ? `seal-cervical-stroke` : ""}
                                    ${tooth18Diagnozis.seal_cervical_color}
                                `
                            }
                            d="M238.054 347.268C236.057 348.602 234.406 350.327 233.19 352.288C232.556 353.252 231.948 354.24
                                231.365 355.242C230.676 356.427 231.414 357.912 232.767 358.129L316.31 371.566C317.645 371.781
                                318.864 370.612 318.403 369.34C318.083 368.457 317.628 367.687 316.884 366.614C313.13 361.193
                                305.712 356.288 299.461 353.072C292.6 349.543 284.956 347.347 277.226 345.621C268.541 343.739
                                259.682 342.406 250.822 343.268C246.219 343.739 241.702 344.759 238.054 347.268Z"
                        />
                    </g>
                    {/*TARTAR*/}
                    <g className="tartar" style={{visibility: 'inherit', opacity: teethDiagnozis.tooth18.tartar ? 1 : 0}}>
                        <path className="st61 level2"
                                d="M328 388.5L327 388L326 386.5L325 384V381L323.5 376.5V373L321.5 369L318.5 366L317 363.5L315 360.5L311 358L307.5 354.5L305 353L301.5 352L298 350.5L294.5 348L290 346.5H286.5L280.5 343.5H279H275L270.5 341H264H260.5L256 340L253.5 341H247L243.5 342L239 343.5L236 346.5L232.5 348L230.5 352L229 355.5L226.5 358V359.5L225.5 362L224 363.5V366L222.5 368L221.5 369C221 369.333 219.8 370.1 219 370.5V368L219.5 366L220.5 363.5V362V359.5L221.5 358L222.5 355.5L223.5 353L226.5 348L227 346L229 343L231 340L232.5 337.5L234.5 335L236 331.5L239 328.5L241 326L243.5 322.5L245.5 322L249.5 321.5L253.5 319.5L258.5 319L262 320.5L266.5 318.5H269.5L273.5 320.5H278L281.5 321.5L286 321L289.5 321.5L293 323.5L297 324L300.5 326.5L304 327.5H307.5L310.5 330L315 331.5L316 335L319.5 340V344.5L321.5 348V352L322.5 354.5L324 358.5L325 362L327 365L328 370.5V373L329 377V380V384V385.5V387L328 388.5Z"
                        />
                        <path className="st61 level1"
                                d="M328 388.5L327 388L326 386.5L325 384V381L323.5 376.5V373L321.5 369L318.5 366L317 363.5L315 360.5L311 358L307.5 354.5L305 353L301.5 352L298 350.5L294.5 348L290 346.5H286.5L280.5 343.5H279H275L270.5 341H264H260.5L256 340L253.5 341H247L243.5 342L239 343.5L236 346.5L232.5 348L230.5 352L229 355.5L226.5 358V359.5L225.5 362L224 363.5V366L222.5 368L221.5 369C221 369.333 219.8 370.1 219 370.5V369L220 366.5L220.5 363.5L221.5 360.5L224 357L225.5 353L226.5 349.5L229 346.5L231.5 342L233.5 340L236 336L240 334.5H243.5L250 332.5H255L259.5 331H262H267L271.5 332.5H279L283.5 334.5H286.5L291.5 336L296 337.5L300 340L303.5 342L308.5 343.5L312 346.5L316 348L319.5 350.5L321.5 353V355.5L322.5 358L325 362V366L327 370.5L328 374.5L327 376.5L328 378.5V382L328.5 386L328 388.5Z"
                        />
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
                            <path className="st58" d="M279.8,377.8c-16.2-3.4-33.5-3.7-43.6,3.3c0.4,3.2,0.5,6.4,0.6,9.5c0.3,9.3-0.4,18.6-1,27.9l1.1,2.4l5.5,8.5
                                l7.9,0.4c3-2.5,6.6-4.1,10.4-4.8c3.2-0.6,6.6-0.5,9.6-1.6c2.5-0.9,4.7-2.7,6.2-4.9c0.5,1.9,1.4,3.8,2.7,5.3
                                c4.7,5.7,12.7,6.7,18.8,10.8c0.7,0.5,1.4,1,2,1.5c1.6-8.6,4.7-25.6,5.5-30.2c0.4-2.6,1-6.1,1.7-9.7
                                C302.5,390.6,292.7,380.6,279.8,377.8z" />
                            <path
                                className={
                                    `st8 caries-center
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth18.caries_center ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth18.seal_center ? `seal-fill ${teethDiagnozis.tooth18.seal_center_color}` : ''}
                            `}
                                d="M279.8,377.8c-16.2-3.4-33.5-3.7-43.6,3.3c0.4,3.2,0.5,6.4,0.6,9.5c0.3,9.3-0.4,18.6-1,27.9l1.1,2.4l5.5,8.5
                            l7.9,0.4c3-2.5,6.6-4.1,10.4-4.8c3.2-0.6,6.6-0.5,9.6-1.6c2.5-0.9,4.7-2.7,6.2-4.9c0.5,1.9,1.4,3.8,2.7,5.3
                            c4.7,5.7,12.7,6.7,18.8,10.8c0.7,0.5,1.4,1,2,1.5c1.6-8.6,4.7-25.6,5.5-30.2c0.4-2.6,1-6.1,1.7-9.7
                            C302.5,390.6,292.7,380.6,279.8,377.8z"
                            />
                        </g>
                        {/*КАРИЕС ПРАВО*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st58" d="M327.4,405.9c-0.6,6.1-1.7,12.1-3.2,18.1c-1.5,4.1-3.8,8-6.6,11.4c-2.5,3-5.4,5.6-8.7,7.8l-4.2-1
                            c-1.2-2.3-2.8-4.4-4.8-6.1c1.6-8.6,4.7-25.6,5.5-30.2c0.4-2.6,1-6.1,1.7-9.7c1-5.2,2.4-10.5,4-13.3c2.4-4,8.3-6.3,15.7-7.7
                            C328.3,385.4,328.4,395.7,327.4,405.9z"/>
                            <path
                                className={
                                    `st8 caries-center
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth18.caries_right ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth18.seal_right ? `seal-fill ${teethDiagnozis.tooth18.seal_right_color}` : ''}
                            `}
                                d="M327.4,405.9c-0.6,6.1-1.7,12.1-3.2,18.1c-1.5,4.1-3.8,8-6.6,11.4c-2.5,3-5.4,5.6-8.7,7.8l-4.2-1
                            c-1.2-2.3-2.8-4.4-4.8-6.1c1.6-8.6,4.7-25.6,5.5-30.2c0.4-2.6,1-6.1,1.7-9.7c1-5.2,2.4-10.5,4-13.3c2.4-4,8.3-6.3,15.7-7.7
                            C328.3,385.4,328.4,395.7,327.4,405.9z"
                            />
                        </g>
                        {/*КАРИЕС ЛЕВО*/}
                        <g className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                        >
                            <path className="st58" d="M228,391.9l-1.9,0.7c0.1,1.9,0.4,3.8,0.8,5.6c0.9,4.8,2.4,9.5,4.5,14c1.2,2.5,2.5,5,4,7.3l-5.1,3.7l-4.8,0
                            c-3.2-4.8-5.6-10-7.2-15.5c-1.7-5.9-2.5-12.1-2.2-18.2c0.3-6.3,1.3-12.5,2.9-18.5c1.1-4,2.5-7.9,4.1-11.7c0.9,0.3,1.7,0.6,2.4,0.9
                            c5.1,2.1,6.4,5.4,9.2,13.5c0.8,2.4,1.3,4.9,1.7,7.5c0.4,3.2,0.5,6.4,0.6,9.5c0.3,9.3-0.4,18.6-1,27.9l-5.7-11.9
                            c-0.9-1.8-1.6-3.8-2.1-5.8C227.5,397.9,227.4,394.8,228,391.9z"/>
                            <path className={`
                                st8 target caries-left
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth18.caries_left ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth18.seal_left ? `seal-fill ${teethDiagnozis.tooth18.seal_left_color}` : ''}
                            `}
                                    d="M228,391.9l-1.9,0.7c0.1,1.9,0.4,3.8,0.8,5.6c0.9,4.8,2.4,9.5,4.5,14c1.2,2.5,2.5,5,4,7.3l-5.1,3.7l-4.8,0
                                c-3.2-4.8-5.6-10-7.2-15.5c-1.7-5.9-2.5-12.1-2.2-18.2c0.3-6.3,1.3-12.5,2.9-18.5c1.1-4,2.5-7.9,4.1-11.7c0.9,0.3,1.7,0.6,2.4,0.9
                                c5.1,2.1,6.4,5.4,9.2,13.5c0.8,2.4,1.3,4.9,1.7,7.5c0.4,3.2,0.5,6.4,0.6,9.5c0.3,9.3-0.4,18.6-1,27.9l-5.7-11.9
                                c-0.9-1.8-1.6-3.8-2.1-5.8C227.5,397.9,227.4,394.8,228,391.9z"
                            />
                        </g>
                        {/*КАРИЕС У КОРНЯ*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'bottom');
                            }}
                        >
                            <path className="st58" d="M326.9,375.3c-7.4,1.3-13.3,3.7-15.7,7.7c-1.7,2.8-3,8.1-4,13.3c-4.6-5.6-14.5-15.7-27.3-18.4
                            c-16.2-3.4-33.5-3.7-43.6,3.3c-0.3-2.6-0.8-5.1-1.7-7.5c-2.8-8.1-4.1-11.4-9.2-13.5c-0.7-0.3-1.5-0.6-2.4-0.9
                            c1.5-3.4,3.2-6.8,5.1-10c1.4-2.5,3.3-4.7,5.6-6.4c4.2-3.2,9.4-4.5,14.7-5.1c10.2-1.1,20.4,0.6,30.4,3c8.9,2.2,17.7,5,25.6,9.5
                            c8.6,4.9,16.1,11.7,21.8,19.8C326.4,371.9,326.6,373.6,326.9,375.3z"/>
                            <path className={
                                `st8 caries-bottom
                                ${diagnozis === 'caries' ? 'caries-stroke' : ''}
                                ${tooth18Diagnozis.caries_bottom ? 'caries-fill' : ''}
                                ${tooth18Diagnozis.seal_bottom ? `seal-fill ${teethDiagnozis.tooth18.seal_bottom_color}` : ''}
                            `}
                                    d="M326.9,375.3c-7.4,1.3-13.3,3.7-15.7,7.7c-1.7,2.8-3,8.1-4,13.3c-4.6-5.6-14.5-15.7-27.3-18.4
                            c-16.2-3.4-33.5-3.7-43.6,3.3c-0.3-2.6-0.8-5.1-1.7-7.5c-2.8-8.1-4.1-11.4-9.2-13.5c-0.7-0.3-1.5-0.6-2.4-0.9
                            c1.5-3.4,3.2-6.8,5.1-10c1.4-2.5,3.3-4.7,5.6-6.4c4.2-3.2,9.4-4.5,14.7-5.1c10.2-1.1,20.4,0.6,30.4,3c8.9,2.2,17.7,5,25.6,9.5
                            c8.6,4.9,16.1,11.7,21.8,19.8C326.4,371.9,326.6,373.6,326.9,375.3z"
                            />
                        </g>
                        <g className="with">
                            {/*Черточка лево низ*/}
                            <path className={`st54`} d="M236.5 380.999C236.412 386.832 236.188 401.599 236 413.999"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth18Diagnozis.seal_left && !tooth18Diagnozis.seal_top && !tooth18Diagnozis.seal_center) ||
                                        (tooth18Diagnozis.seal_left && tooth18Diagnozis.seal_top && !tooth18Diagnozis.seal_center) ||
                                        (!tooth18Diagnozis.seal_left && tooth18Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Черточка лево верх*/}
                            <path className={`st54`} d="M236.5 380.999C236.333 375.499 234.3 363.799 227.5 360.999"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth18Diagnozis.seal_left && !tooth18Diagnozis.seal_bottom) ||
                                        (!tooth18Diagnozis.seal_left && tooth18Diagnozis.seal_bottom && !tooth18Diagnozis.seal_center) ||
                                        (!tooth18Diagnozis.seal_left && tooth18Diagnozis.seal_bottom && tooth18Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Черточка середина*/}
                            <path className={`st54`} d="M236.5 380.999C252.5 372.5 292.2 379.999 307 395.999"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth18Diagnozis.seal_bottom && !tooth18Diagnozis.seal_center) ||
                                        (tooth18Diagnozis.seal_right && tooth18Diagnozis.seal_left && tooth18Diagnozis.seal_center && !tooth18Diagnozis.seal_bottom) ||
                                        (!tooth18Diagnozis.seal_bottom && !tooth18Diagnozis.seal_top && tooth18Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                            />
                            {/*Черточка право верх*/}
                            <path className={`st54`} d="M307 395.999C307 390.832 309.9 379.699 321.5 376.499"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth18Diagnozis.seal_right && !tooth18Diagnozis.seal_bottom) ||
                                        (!tooth18Diagnozis.seal_right && tooth18Diagnozis.seal_bottom && !tooth18Diagnozis.seal_center) ||
                                        (!tooth18Diagnozis.seal_right && tooth18Diagnozis.seal_bottom && tooth18Diagnozis.seal_center)
                                    )
                                        ? 5 : 0
                                }}
                            />
                            {/*Черточка право низ*/}
                            <path className={`st54`} d="M307 395.999L301 430.999"
                                style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth18Diagnozis.seal_right && !tooth18Diagnozis.seal_top && !tooth18Diagnozis.seal_center) ||
                                        (tooth18Diagnozis.seal_right && tooth18Diagnozis.seal_top && !tooth18Diagnozis.seal_center) ||
                                        (!tooth18Diagnozis.seal_right && tooth18Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                            />
                        </g>
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir"
                            style={{
                                visibility: tooth18Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth18Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path
                                className={`vinir-fill ${tooth18Diagnozis.vinir_color}`}
                                d="M326.9 375.3C326.7 373.6 326.4 371.9 326.1 370.2C320.4 362 313 355.3 304.3 350.4C296.3 345.9
                                287.6 343.1 278.7 340.9C268.7 338.5 258.5 336.8 248.3 337.9C243.1 338.5 237.9 339.8 233.6 343C231.3
                                344.7 229.4 346.9 228 349.4C226.1 352.6 224.4 355.9 222.9 359.4C221.2 363.2 219.9 367.1 218.8
                                371.1C217.1 377.1 216.2 383.4 215.9 389.6C215.6 395.8 216.4 401.9 218.1 407.8C219.7 413.3 222.1
                                418.5 225.3 423.3H230.1L235.2 419.6C233.7 417.3 232.4 414.8 231.2 412.3C229.1 407.9 227.6 403.2 226.7
                                398.3C226.4 396.4 226.1 394.6 225.9 392.7L227.8 392C227.3 395 227.3 398 227.9 401C228.3 403 229 405
                                230 406.8L235.7 418.7L236.8 421.1L242.3 429.6L250.2 430C253.2 427.5 256.8 425.9 260.6 425.2C263.8
                                424.6 267.2 424.7 270.2 423.6C272.7 422.7 274.9 420.9 276.4 418.7C276.9 420.6 277.8 422.5 279.1
                                424C283.8 429.7 291.8 430.7 297.9 434.8C298.6 435.3 299.3 435.8 299.9 436.3C301.9 438 303.5
                                440 304.7 442.4L308.9 443.4C312.2 441.3 315.1 438.6 317.6 435.6C320.4 432.2 322.6 428.4 324.2
                                424.2C325.7 418.3 326.7 412.2 327.4 406.1C328.4 395.7 328.3 385.4 326.9 375.3Z"
                            />
                        </g>
                    </g>
                    {/* ТИМЧАСОВА/КЕРАМІЧНА/МЕТАЛОКЕРАМІЧНА КОРОНКА*/}
                    <g className="crown"
                        style={{
                            visibility: tooth18Diagnozis.temporary_crown || tooth18Diagnozis.ceramic_crown || tooth18Diagnozis.mceramic_crown || tooth18Diagnozis.metalic_crown || tooth18Diagnozis.zirconia_crown ? 'inherit' : 'hidden',
                            opacity: tooth18Diagnozis.temporary_crown || tooth18Diagnozis.ceramic_crown || tooth18Diagnozis.mceramic_crown || tooth18Diagnozis.metalic_crown || tooth18Diagnozis.zirconia_crown ? 1 : 0
                        }}
                    >
                        <path
                            className={`
                                temporary-crown crown-fill
                                ${diagnozis}
                                ${tooth18Diagnozis.ceramic_crown_color}
                                ${tooth18Diagnozis.mceramic_crown_color}
                                ${tooth18Diagnozis.metalic_crown_color}
                                ${tooth18Diagnozis.zirconia_crown_color}
                            `}
                            d="M326.9,375.3c-0.2-1.7-0.5-3.4-0.8-5.1c-5.7-8.2-13.1-14.9-21.8-19.8c-8-4.5-16.7-7.3-25.6-9.5
                            c-10-2.4-20.2-4.1-30.4-3c-5.2,0.6-10.4,1.9-14.7,5.1c-2.3,1.7-4.2,3.9-5.6,6.4c-1.9,3.2-3.6,6.5-5.1,10c-1.7,3.8-3,7.7-4.1,11.7
                            c-1.7,6-2.6,12.3-2.9,18.5c-0.3,6.2,0.5,12.3,2.2,18.2c1.6,5.5,4,10.7,7.2,15.5l4.8,0l5.1-3.7c-1.5-2.3-2.8-4.8-4-7.3
                            c-2.1-4.4-3.6-9.1-4.5-14c-0.3-1.9-0.6-3.7-0.8-5.6l1.9-0.7c-0.5,3-0.5,6,0.1,9c0.4,2,1.1,4,2.1,5.8l5.7,11.9l1.1,2.4l5.5,8.5
                            l7.9,0.4c3-2.5,6.6-4.1,10.4-4.8c3.2-0.6,6.6-0.5,9.6-1.6c2.5-0.9,4.7-2.7,6.2-4.9c0.5,1.9,1.4,3.8,2.7,5.3
                            c4.7,5.7,12.7,6.7,18.8,10.8c0.7,0.5,1.4,1,2,1.5c2,1.7,3.6,3.7,4.8,6.1l4.2,1c3.3-2.1,6.2-4.8,8.7-7.8c2.8-3.4,5-7.2,6.6-11.4
                            c1.5-5.9,2.5-12,3.2-18.1C328.4,395.7,328.3,385.4,326.9,375.3z"
                        />
                    </g>
                </g>
            </g>
        </>
    )
}
