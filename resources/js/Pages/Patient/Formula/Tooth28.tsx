import React from 'react';
import { appLangSelector } from "../../../Redux/Layout/selectors";
import Lang from "lang.js";
import lngMaterial from "../../../Lang/Material/translation";
import { useDispatch, useSelector } from "react-redux";
import { setNewToothActive, setSubDiagnosis, setToothDiagnoze, setDisactiveAll, setSelectedToothNumber } from '../../../Redux/Formula';
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
import PeriodontitStage28 from './periodontit128';



export default function Tooth28() {
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngMaterial,
        locale: appLang,
    });
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth28Diagnozis = teethDiagnozis.tooth28;
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
                teethDiagnozis.tooth28.caries_bottom = !teethDiagnozis.tooth28.caries_bottom;
            }
            if (toothPart === 'center') {
                teethDiagnozis.tooth28.caries_center = !teethDiagnozis.tooth28.caries_center;
            }
            if (toothPart === 'left') {
                teethDiagnozis.tooth28.caries_left = !teethDiagnozis.tooth28.caries_left;
            }
            if (toothPart === 'right') {
                teethDiagnozis.tooth28.caries_right = !teethDiagnozis.tooth28.caries_right;
            }
            if (toothPart === 'top') {
                teethDiagnozis.tooth28.caries_top = !teethDiagnozis.tooth28.caries_top;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'seal') {
            if (toothPart === 'center') {
                if (teethDiagnozis.tooth28.seal_center_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth28.seal_center_color = sealColor1;
                    teethDiagnozis.tooth28.seal_center = true;
                } else if (teethDiagnozis.tooth28.seal_center_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth28.seal_center_color = sealColor2;
                    teethDiagnozis.tooth28.seal_center = true;
                } else if (teethDiagnozis.tooth28.seal_center_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth28.seal_center_color = sealColor3;
                    teethDiagnozis.tooth28.seal_center = true;
                } else {
                    teethDiagnozis.tooth28.seal_center = !teethDiagnozis.tooth28.seal_center;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'bottom') {
                if (teethDiagnozis.tooth28.seal_bottom_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth28.seal_bottom_color = sealColor1;
                    teethDiagnozis.tooth28.seal_bottom = true;
                } else if (teethDiagnozis.tooth28.seal_bottom_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth28.seal_bottom_color = sealColor2;
                    teethDiagnozis.tooth28.seal_bottom = true;
                } else if (teethDiagnozis.tooth28.seal_bottom_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth28.seal_bottom_color = sealColor3;
                    teethDiagnozis.tooth28.seal_bottom = true;
                } else {
                    teethDiagnozis.tooth28.seal_bottom = !teethDiagnozis.tooth28.seal_bottom;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'left') {
                if (teethDiagnozis.tooth28.seal_left_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth28.seal_left_color = sealColor1;
                    teethDiagnozis.tooth28.seal_left = true;
                } else if (teethDiagnozis.tooth28.seal_left_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth28.seal_left_color = sealColor2;
                    teethDiagnozis.tooth28.seal_left = true;
                } else if (teethDiagnozis.tooth28.seal_left_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth28.seal_left_color = sealColor3;
                    teethDiagnozis.tooth28.seal_left = true;
                } else {
                    teethDiagnozis.tooth28.seal_left = !teethDiagnozis.tooth28.seal_left;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'right') {
                if (teethDiagnozis.tooth28.seal_right_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth28.seal_right_color = sealColor1;
                    teethDiagnozis.tooth28.seal_right = true;
                } else if (teethDiagnozis.tooth28.seal_right_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth28.seal_right_color = sealColor2;
                    teethDiagnozis.tooth28.seal_right = true;
                } else if (teethDiagnozis.tooth28.seal_right_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth28.seal_right_color = sealColor3;
                    teethDiagnozis.tooth28.seal_right = true;
                } else {
                    teethDiagnozis.tooth28.seal_right = !teethDiagnozis.tooth28.seal_right;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'top') {
                if (teethDiagnozis.tooth28.seal_top_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth28.seal_top_color = sealColor1;
                    teethDiagnozis.tooth28.seal_top = true;
                } else if (teethDiagnozis.tooth28.seal_top_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth28.seal_top_color = sealColor2;
                    teethDiagnozis.tooth28.seal_top = true;
                } else if (teethDiagnozis.tooth28.seal_top_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth28.seal_top_color = sealColor3;
                    teethDiagnozis.tooth28.seal_top = true;
                } else {
                    teethDiagnozis.tooth28.seal_top = !teethDiagnozis.tooth28.seal_top;
                }
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'wedge_shaped_defect') {
            if (teethDiagnozis.tooth28.wedge_shaped_defect_color != wsDefectColor && wsDefectColor != '') {
                teethDiagnozis.tooth28.wedge_shaped_defect_color = wsDefectColor;
            } else {
                teethDiagnozis.tooth28.wedge_shaped_defect_color = !teethDiagnozis.tooth28.wedge_shaped_defect_color;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
    }

    return (
        <>
            <g id="28" className="df-tooth-text" style={{opacity: 1}}>
                <text transform="matrix(1 0 0 1 1809.8652 716.1968)" className={`st3 st4 st5 ${toothActive.tooth28.active ? 'num-active' : ''}`}>28</text>
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
                    if (toothActive.tooth28.active) {
                        dispatch(setNewToothActive({tooth28: {active: true}}))
                    } else {
                        dispatch(setDisactiveAll());
                        dispatch(setNewToothActive({tooth28: {active: true}}))
                    }
                    if (diagnozis) {
                        if (diagnozis === 'change_color')
                            teethDiagnozis.tooth28.change_color = !teethDiagnozis.tooth28.change_color;
                        else if (diagnozis === 'fissure')
                            teethDiagnozis.tooth28.fissure = !teethDiagnozis.tooth28.fissure;
                        else if (diagnozis === 'caries')
                            teethDiagnozis.tooth28.caries = !teethDiagnozis.tooth28.caries;
                        else if (diagnozis === 'cervical_caries')
                            teethDiagnozis.tooth28.cervical_caries = !teethDiagnozis.tooth28.cervical_caries;
                        else if (diagnozis === 'wedge_shaped_defect')
                            teethDiagnozis.tooth28.wedge_shaped_defect = !teethDiagnozis.tooth28.wedge_shaped_defect;
                        else if (diagnozis === 'tartar')
                            teethDiagnozis.tooth28.tartar = !teethDiagnozis.tooth28.tartar;
                        else if (diagnozis === 'pulpit') {
                            teethDiagnozis.tooth28.pulpit = !teethDiagnozis.tooth28.pulpit;
                            teethDiagnozis.tooth28.channel_class = teethDiagnozis.tooth28.pulpit ? 'pulpit' : ''
                        } else if (diagnozis === 'channel_not_sealed') {
                            teethDiagnozis.tooth28.channel_not_sealed = !teethDiagnozis.tooth28.channel_not_sealed;
                            teethDiagnozis.tooth28.channel_class = teethDiagnozis.tooth28.channel_not_sealed ? 'channel-not-sealed' : '';
                        } else if (diagnozis === 'channel_top_sealed') {
                            teethDiagnozis.tooth28.channel_top_sealed = !teethDiagnozis.tooth28.channel_top_sealed;
                            teethDiagnozis.tooth28.channel_class = teethDiagnozis.tooth28.channel_top_sealed ? 'channel-top-sealed' : '';
                        } else if (diagnozis === 'channel_part_sealed') {
                            teethDiagnozis.tooth28.channel_part_sealed = !teethDiagnozis.tooth28.channel_part_sealed;
                            teethDiagnozis.tooth28.channel_class = teethDiagnozis.tooth28.channel_part_sealed ? 'channel-part-sealed' : '';
                        } else if (diagnozis === 'periodontit') {
                            if (teethDiagnozis.tooth28.periodontit_stage !== subDiagnozis) {
                                teethDiagnozis.tooth28.periodontit_stage = subDiagnozis
                                teethDiagnozis.tooth28.periodontit = true;
                            } else {
                                teethDiagnozis.tooth28.periodontit = !teethDiagnozis.tooth28.periodontit;
                            }
                            teethDiagnozis.tooth28.channel_class = teethDiagnozis.tooth28.periodontit ? 'periodontit' : '';
                            if (!teethDiagnozis.tooth28.periodontit) dispatch(setSubDiagnosis(''));
                        } else if (diagnozis === 'seal') {
                            teethDiagnozis.tooth28.seal = !teethDiagnozis.tooth28.seal;
                        } else if (diagnozis === 'seal_cervical') {
                            if (!teethDiagnozis.tooth28.seal_cervical && teethDiagnozis.tooth28.seal_cervical_color === "") {
                                teethDiagnozis.tooth28.seal_cervical = true;
                                teethDiagnozis.tooth28.seal_cervical_color = wsDefectColor;
                            } else if (teethDiagnozis.tooth28.seal_cervical && teethDiagnozis.tooth28.seal_cervical_color != wsDefectColor) {
                                teethDiagnozis.tooth28.seal_cervical_color = wsDefectColor;
                            } else {
                                teethDiagnozis.tooth28.seal_cervical = false;
                                teethDiagnozis.tooth28.seal_cervical_color = "";
                            }
                        } else if (diagnozis === 'vinir') {
                            if (!teethDiagnozis.tooth28.vinir && teethDiagnozis.tooth28.vinir_color === "") {
                                teethDiagnozis.tooth28.vinir = true;
                                teethDiagnozis.tooth28.vinir_color = vinirColor;
                            } else if (teethDiagnozis.tooth28.vinir && teethDiagnozis.tooth28.vinir_color != vinirColor) {
                                teethDiagnozis.tooth28.vinir_color = vinirColor;
                            } else {
                                teethDiagnozis.tooth28.vinir = false;
                                teethDiagnozis.tooth28.vinir_color = "";
                            }
                        } else if (diagnozis === 'temporary_crown') {
                            teethDiagnozis.tooth28.temporary_crown = !teethDiagnozis.tooth28.temporary_crown;
                        } else if (diagnozis === 'ceramic_crown') {
                            if (!teethDiagnozis.tooth28.ceramic_crown && teethDiagnozis.tooth28.ceramic_crown_color === "") {
                                teethDiagnozis.tooth28.ceramic_crown = true;
                                teethDiagnozis.tooth28.ceramic_crown_color = ceramicCrownColor;
                            } else if (teethDiagnozis.tooth28.ceramic_crown && teethDiagnozis.tooth28.ceramic_crown_color != ceramicCrownColor) {
                                teethDiagnozis.tooth28.ceramic_crown_color = ceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth28.ceramic_crown = false;
                                teethDiagnozis.tooth28.ceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'mceramic_crown') {
                            if (!teethDiagnozis.tooth28.mceramic_crown && teethDiagnozis.tooth28.mceramic_crown_color === "") {
                                teethDiagnozis.tooth28.mceramic_crown = true;
                                teethDiagnozis.tooth28.mceramic_crown_color = mceramicCrownColor;
                            } else if (teethDiagnozis.tooth28.mceramic_crown && teethDiagnozis.tooth28.mceramic_crown_color != mceramicCrownColor) {
                                teethDiagnozis.tooth28.mceramic_crown_color = mceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth28.mceramic_crown = false;
                                teethDiagnozis.tooth28.mceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'metalic_crown') {
                            if (!teethDiagnozis.tooth28.metalic_crown && teethDiagnozis.tooth28.metalic_crown_color === "") {
                                teethDiagnozis.tooth28.metalic_crown = true;
                                teethDiagnozis.tooth28.metalic_crown_color = metalicCrownColor;
                            } else if (teethDiagnozis.tooth28.metalic_crown && teethDiagnozis.tooth28.metalic_crown_color != metalicCrownColor) {
                                teethDiagnozis.tooth28.mceramic_crown_color = metalicCrownColor;
                            } else {
                                teethDiagnozis.tooth28.metalic_crown = false;
                                teethDiagnozis.tooth28.metalic_crown_color = "";
                            }
                        } else if (diagnozis === 'zirconia_crown') {
                            if (!teethDiagnozis.tooth28.zirconia_crown && teethDiagnozis.tooth28.zirconia_crown_color === "") {
                                teethDiagnozis.tooth28.zirconia_crown = true;
                                teethDiagnozis.tooth28.zirconia_crown_color = zirconiaCrownColor;
                            } else if (teethDiagnozis.tooth28.zirconia_crown && teethDiagnozis.tooth28.zirconia_crown_color != zirconiaCrownColor) {
                                teethDiagnozis.tooth28.zirconia_crown_color = zirconiaCrownColor;
                            } else {
                                teethDiagnozis.tooth28.zirconia_crown = false;
                                teethDiagnozis.tooth28.zirconia_crown_color = "";
                            }
                        } else if (diagnozis === 'pin') {
                            teethDiagnozis.tooth28.pin = !teethDiagnozis.tooth28.pin;
                        } else if (diagnozis === 'culttab') {
                            teethDiagnozis.tooth28.culttab = !teethDiagnozis.tooth28.culttab;
                        } else if (diagnozis === 'abutment') {
                            teethDiagnozis.tooth28.abutment = !teethDiagnozis.tooth28.abutment;
                        } else if (diagnozis === 'shaper') {
                            teethDiagnozis.tooth28.shaper = !teethDiagnozis.tooth28.shaper;
                        } else if (diagnozis === 'implant') {
                            teethDiagnozis.tooth28.implant = !teethDiagnozis.tooth28.implant;
                        } else if (diagnozis === 'apex') {
                            teethDiagnozis.tooth28.apex = !teethDiagnozis.tooth28.apex;
                        } else if (diagnozis === 'absent') {
                            teethDiagnozis.tooth28.absent = !teethDiagnozis.tooth28.absent;
                        } else if (diagnozis === 'cervical_caries') {
                            teethDiagnozis.tooth28.cervical_caries = !teethDiagnozis.tooth28.cervical_caries;
                        } else if (diagnozis === 'caries') {
                            teethDiagnozis.tooth28.caries = !teethDiagnozis.tooth28.caries;
                        } else if (diagnozis === 'parodontit') {
                            if (teethDiagnozis.tooth28.parodontit) {
                                if (teethDiagnozis.tooth28.parodontit_stage === subDiagnozis) {
                                    teethDiagnozis.tooth28.parodontit = false;
                                    teethDiagnozis.tooth28.active = false;
                                } else {
                                    teethDiagnozis.tooth28.parodontit = true;
                                    teethDiagnozis.tooth28.parodontit_stage = subDiagnozis
                                }
                            } else {
                                teethDiagnozis.tooth28.parodontit = true;
                                teethDiagnozis.tooth28.parodontit_stage = subDiagnozis;
                                teethDiagnozis.tooth28.active = true;
                            }
                        }
                        dispatch(setToothDiagnoze(teethDiagnozis))
                    }
                }}
            >
                <g className="underlay" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <path className="st40" d="M1820.5,233.5c5-0.4,10.5,1.6,14.1,5c8.6,8.1,5.5,21,6.4,31.4
                        c1.8,20.4,12.5,37.4,23.1,54c10.5,16.3,18.8,43.3,18.5,63.4c-0.6,35-9,63.7-15.4,88.5c-6.4,24.8,2.4,64.9,6.7,85.7
                        c8.9,44,14.8,95.8-2.5,137.8c-2.1,5.1-4.5,10.1-7.5,14.7c-5.2,8-12.5,15-21.5,18.2c-10.4,3.8-22.2,2.3-32.5-1.8
                        c-13.3-5.2-21.9-15.2-27-28.5c-8-20.7-8.1-41.8-9.1-63.8c-1-23.3-2.8-48.9,1.4-71.9c2.3-12.4,23.9-48.5,21.3-70.4
                        c-3.7-31.9-19.8-61.4-23.3-74.1c-1.6-5.8-2.2-17.7-3.3-23.6c-4.5-24.4,7.8-72.1,10.3-86.7C1782.7,296.9,1784.5,236.5,1820.5,233.5z"
                    />
                </g>
                <g id="T_28_up" className="top-view" style={{visibility: tooth28Diagnozis.absent ? 'hidden' : 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR/APEX/CULTTAB */}
                    <g className="dentin">
                        <g className="hEmpty hRoot hImplant" style={{visibility: !tooth28Diagnozis.culttab && !tooth28Diagnozis.implant && !tooth28Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st24 ${tooth28Diagnozis.apex ? 'apex' : ''}`}
                                d="M1870.2,595c-1.7-8.6-6.5-16.2-15-21.8c-10-6.7-23.4-9.3-36.7-10.3
                                c-11.2-0.8-23.1-0.3-30.9,5.6c-5.4,4-7.4,9.8-8.6,15.4c-1.1,5.7-1.4,11.6-1.3,17.4c0.2,5.7,0.8,11.6,4.5,16.7
                                c3.9,5.5,10.7,9.4,18.3,12c23.5,8.1,51.4,3.7,64.2-12.4C1870.1,610.9,1871.7,602.9,1870.2,595z"
                            />
                        </g>
                        <g className={`hIntact hImplant hEmpty`} style={{visibility: tooth28Diagnozis?.apex || tooth28Diagnozis?.change_color ? 'inherit' : 'hidden'}}>
                            <path className={`st24 change-color ${tooth28Diagnozis?.change_color ? 'diagnoze-opacity' : ''} ${tooth28Diagnozis?.apex ? 'apex' : ''}`}
                                d="M1870.2 594.999C1868.5 586.399 1863.7 578.799 1855.2 573.199C1845.2 566.499 1831.8 563.899 1818.5 562.899C1807.3 562.099 1795.4 562.599 1787.6 568.499C1782.2 572.499 1780.2 578.299 1779 583.899C1777.9 589.599 1777.6 595.499 1777.7 601.299C1777.9 606.999 1778.5 612.899 1782.2 617.999C1786.1 623.499 1792.9 627.399 1800.5 629.999C1824 638.099 1851.9 633.699 1864.7 617.599C1870.1 610.899 1871.7 602.899 1870.2 594.999Z"
                            />
                            <path className={`st24 change-color ${tooth28Diagnozis?.change_color ? 'diagnoze-opacity' : ''} ${tooth28Diagnozis?.apex ? 'apex' : ''}`}
                                d="M1844.24 592.5C1845.04 598.35 1835.16 601.802 1832.22 606.497C1826.93 614.941 1826.43 616.647 1820.09 616.647C1813.74 616.647 1812.74 608.386 1808.37 602.534C1804 596.682 1797.1 596 1798.46 589.472C1800.84 577.999 1813.22 584.2 1822.74 584.999C1832.12 585.787 1842.74 581.5 1844.24 592.5Z" 
                            />
                        </g>
                    </g>
                    {/* PULPIT */}
                    <g className="pulp">
                        <g className="hIntact hEmpty hImplant pulpitis-pfilling" style={{visibility: tooth28Diagnozis?.apex ? 'inherit' : 'hidden'}}>
                            <ellipse className="st22 target" cx="1820.91" cy="609.563" rx="7.15314" ry="5.64935" transform="rotate(-0.796347 1820.91 609.563)"
                                 style={{fill: 'rgb(254, 246, 249)'}}
                            />
                            <ellipse className="st22 target" cx="1836.57" cy="592.048" rx="6.89579" ry="6.05115" transform="rotate(39.2014 1836.57 592.048)"
                                 style={{fill: 'rgb(254, 246, 249)'}}
                            />
                            <ellipse className="st22 target" cx="1805.94" cy="589.924" rx="6.88191" ry="5.68612" transform="rotate(-49.1967 1805.94 589.924)" 
                                style={{fill: 'rgb(254, 246, 249)'}}
                            />
                        </g>
                    </g>
                    {/* IMPLANT */}
                    <g className="implant hEmpty hIntact hRoot" style={{visibility: tooth28Diagnozis.implant || tooth28Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <circle className="st48" cx="1820.5" cy="598.5" r="26.5" />
                        <g className="st27">
                            <mask id="implant_28" className="st49">
                                <path className="st50" d="M1806.9 582.474L1803.46 581.352C1800.53 584.3 1798.35 587.994 1797.23 592.124L1799.93 594.55C1799.69 595.829 1799.56 597.15 1799.56 598.5C1799.56 599.85 1799.69 601.17 1799.93 602.45L1797.23 604.875C1798.35 609.006 1800.53 612.7 1803.46 615.648L1806.91 614.525C1808.9 616.242 1811.21 617.594 1813.74 618.478L1814.49 622.024C1816.48 622.548 1818.56 622.827 1820.71 622.827C1822.86 622.827 1824.95 622.548 1826.94 622.024L1827.69 618.477C1830.22 617.593 1832.53 616.241 1834.52 614.525L1837.97 615.647C1840.9 612.699 1843.08 609.004 1844.2 604.874L1841.5 602.448C1841.74 601.169 1841.87 599.849 1841.87 598.5C1841.87 597.15 1841.74 595.831 1841.5 594.552L1844.2 592.126C1843.08 587.995 1840.9 584.301 1837.97 581.352L1834.52 582.475C1832.53 580.758 1830.22 579.406 1827.69 578.522L1826.94 574.976C1824.95 574.452 1822.86 574.173 1820.71 574.173C1818.56 574.173 1816.48 574.452 1814.49 574.975L1813.74 578.521C1811.21 579.405 1808.9 580.758 1806.9 582.474Z"></path>
                            </mask>
                            <path className="st50 st51" d="M1806.9 582.474L1803.46 581.352C1800.53 584.3 1798.35 587.994 1797.23 592.124L1799.93 594.55C1799.69 595.829 1799.56 597.15 1799.56 598.5C1799.56 599.85 1799.69 601.17 1799.93 602.45L1797.23 604.875C1798.35 609.006 1800.53 612.7 1803.46 615.648L1806.91 614.525C1808.9 616.242 1811.21 617.594 1813.74 618.478L1814.49 622.024C1816.48 622.548 1818.56 622.827 1820.71 622.827C1822.86 622.827 1824.95 622.548 1826.94 622.024L1827.69 618.477C1830.22 617.593 1832.53 616.241 1834.52 614.525L1837.97 615.647C1840.9 612.699 1843.08 609.004 1844.2 604.874L1841.5 602.448C1841.74 601.169 1841.87 599.849 1841.87 598.5C1841.87 597.15 1841.74 595.831 1841.5 594.552L1844.2 592.126C1843.08 587.995 1840.9 584.301 1837.97 581.352L1834.52 582.475C1832.53 580.758 1830.22 579.406 1827.69 578.522L1826.94 574.976C1824.95 574.452 1822.86 574.173 1820.71 574.173C1818.56 574.173 1816.48 574.452 1814.49 574.975L1813.74 578.521C1811.21 579.405 1808.9 580.758 1806.9 582.474Z"></path>
                            <path className="st52" d="M1803.46 581.352L1804.08 579.45L1802.91 579.069L1802.04 579.942L1803.46 581.352ZM1806.9 582.474L1806.29 584.376L1807.36 584.725L1808.21 583.989L1806.9 582.474ZM1797.23 592.124L1795.3 591.601L1794.98 592.789L1795.89 593.611L1797.23 592.124ZM1799.93 594.55L1801.89 594.921L1802.1 593.815L1801.27 593.063L1799.93 594.55ZM1799.93 602.45L1801.27 603.937L1802.1 603.184L1801.89 602.079L1799.93 602.45ZM1797.23 604.875L1795.89 603.388L1794.98 604.211L1795.3 605.398L1797.23 604.875ZM1803.46 615.648L1802.04 617.057L1802.91 617.93L1804.08 617.549L1803.46 615.648ZM1806.91 614.525L1808.21 613.011L1807.36 612.275L1806.29 612.624L1806.91 614.525ZM1813.74 618.478L1815.7 618.063L1815.47 616.961L1814.4 616.59L1813.74 618.478ZM1814.49 622.024L1812.54 622.439L1812.79 623.644L1813.98 623.958L1814.49 622.024ZM1826.94 622.024L1827.45 623.958L1828.64 623.643L1828.89 622.438L1826.94 622.024ZM1827.69 618.477L1827.03 616.589L1825.96 616.96L1825.73 618.063L1827.69 618.477ZM1834.52 614.525L1835.14 612.623L1834.07 612.274L1833.22 613.01L1834.52 614.525ZM1837.97 615.647L1837.35 617.549L1838.52 617.93L1839.39 617.057L1837.97 615.647ZM1844.2 604.874L1846.13 605.396L1846.45 604.209L1845.53 603.386L1844.2 604.874ZM1841.5 602.448L1839.53 602.077L1839.33 603.183L1840.16 603.935L1841.5 602.448ZM1841.5 594.552L1840.16 593.064L1839.33 593.817L1839.53 594.923L1841.5 594.552ZM1844.2 592.126L1845.53 593.613L1846.45 592.791L1846.13 591.603L1844.2 592.126ZM1837.97 581.352L1839.39 579.943L1838.52 579.07L1837.35 579.451L1837.97 581.352ZM1834.52 582.475L1833.22 583.989L1834.07 584.726L1835.14 584.376L1834.52 582.475ZM1827.69 578.522L1825.73 578.937L1825.96 580.039L1827.03 580.411L1827.69 578.522ZM1826.94 574.976L1828.89 574.561L1828.64 573.356L1827.45 573.042L1826.94 574.976ZM1814.49 574.975L1813.98 573.041L1812.79 573.355L1812.54 574.561L1814.49 574.975ZM1813.74 578.521L1814.4 580.41L1815.47 580.039L1815.7 578.936L1813.74 578.521ZM1802.84 583.254L1806.29 584.376L1807.52 580.573L1804.08 579.45L1802.84 583.254ZM1799.16 592.647C1800.19 588.86 1802.19 585.469 1804.88 582.762L1802.04 579.942C1798.87 583.13 1796.51 587.128 1795.3 591.601L1799.16 592.647ZM1801.27 593.063L1798.57 590.637L1795.89 593.611L1798.59 596.037L1801.27 593.063ZM1801.56 598.5C1801.56 597.275 1801.67 596.079 1801.89 594.921L1797.96 594.179C1797.7 595.58 1797.56 597.025 1797.56 598.5H1801.56ZM1801.89 602.079C1801.67 600.921 1801.56 599.725 1801.56 598.5H1797.56C1797.56 599.975 1797.7 601.42 1797.96 602.821L1801.89 602.079ZM1798.57 606.362L1801.27 603.937L1798.59 600.963L1795.89 603.388L1798.57 606.362ZM1804.88 614.238C1802.19 611.53 1800.19 608.14 1799.16 604.352L1795.3 605.398C1796.51 609.872 1798.87 613.869 1802.04 617.057L1804.88 614.238ZM1806.29 612.624L1802.84 613.746L1804.08 617.549L1807.52 616.427L1806.29 612.624ZM1814.4 616.59C1812.11 615.79 1810.01 614.566 1808.21 613.011L1805.6 616.04C1807.78 617.918 1810.31 619.398 1813.08 620.366L1814.4 616.59ZM1816.45 621.61L1815.7 618.063L1811.79 618.893L1812.54 622.439L1816.45 621.61ZM1820.71 620.827C1818.74 620.827 1816.82 620.57 1815 620.09L1813.98 623.958C1816.13 624.525 1818.39 624.827 1820.71 624.827V620.827ZM1826.43 620.09C1824.6 620.57 1822.69 620.827 1820.71 620.827V624.827C1823.04 624.827 1825.3 624.525 1827.45 623.958L1826.43 620.09ZM1825.73 618.063L1824.98 621.609L1828.89 622.438L1829.64 618.892L1825.73 618.063ZM1833.22 613.01C1831.41 614.565 1829.32 615.789 1827.03 616.589L1828.35 620.365C1831.12 619.397 1833.65 617.917 1835.83 616.039L1833.22 613.01ZM1838.59 613.745L1835.14 612.623L1833.9 616.426L1837.35 617.549L1838.59 613.745ZM1842.27 604.351C1841.24 608.139 1839.24 611.53 1836.55 614.237L1839.39 617.057C1842.56 613.868 1844.92 609.87 1846.13 605.396L1842.27 604.351ZM1840.16 603.935L1842.86 606.361L1845.53 603.386L1842.84 600.961L1840.16 603.935ZM1839.87 598.5C1839.87 599.724 1839.75 600.92 1839.53 602.077L1843.47 602.819C1843.73 601.418 1843.87 599.974 1843.87 598.5H1839.87ZM1839.53 594.923C1839.75 596.08 1839.87 597.276 1839.87 598.5H1843.87C1843.87 597.025 1843.73 595.581 1843.47 594.18L1839.53 594.923ZM1842.86 590.639L1840.16 593.064L1842.84 596.039L1845.53 593.613L1842.86 590.639ZM1836.55 582.762C1839.24 585.47 1841.24 588.861 1842.27 592.649L1846.13 591.603C1844.92 587.129 1842.56 583.131 1839.39 579.943L1836.55 582.762ZM1835.14 584.376L1838.59 583.254L1837.35 579.451L1833.9 580.573L1835.14 584.376ZM1827.03 580.411C1829.32 581.21 1831.41 582.434 1833.22 583.989L1835.83 580.96C1833.65 579.083 1831.12 577.602 1828.35 576.634L1827.03 580.411ZM1824.98 575.39L1825.73 578.937L1829.64 578.108L1828.89 574.561L1824.98 575.39ZM1820.71 576.173C1822.69 576.173 1824.6 576.429 1826.43 576.91L1827.45 573.042C1825.3 572.475 1823.04 572.173 1820.71 572.173V576.173ZM1815 576.909C1816.82 576.429 1818.74 576.173 1820.71 576.173V572.173C1818.39 572.173 1816.13 572.474 1813.98 573.041L1815 576.909ZM1815.7 578.936L1816.45 575.39L1812.54 574.561L1811.79 578.107L1815.7 578.936ZM1808.21 583.989C1810.01 582.433 1812.11 581.209 1814.4 580.41L1813.08 576.633C1810.31 577.601 1807.78 579.082 1805.6 580.96L1808.21 583.989Z" mask="url(#implant_28)"></path>
                        </g>
                    </g>
                    <g className="shaper hEmpty hIntact hRoot" style={{visibility: 'hidden', opacity: 0}} >
                        <circle className="st44" r="28.5" transform="matrix(-1 0 0 1 1820.5 598.5)"></circle>
                        <path className="st45" d="M1822.42 589.739C1821.87 587.804 1819.13 587.804 1818.58 589.739L1818.07 591.511C1817.77 592.549 1816.71 593.164 1815.66 592.902L1813.87 592.454C1811.92 591.965 1810.55 594.339 1811.95 595.785L1813.23 597.109C1813.98 597.884 1813.98 599.116 1813.23 599.891L1811.95 601.215C1810.55 602.661 1811.92 605.035 1813.87 604.546L1815.66 604.098C1816.71 603.836 1817.77 604.451 1818.07 605.489L1818.58 607.261C1819.13 609.196 1821.87 609.196 1822.42 607.261L1822.93 605.489C1823.23 604.451 1824.29 603.836 1825.34 604.098L1827.13 604.546C1829.08 605.035 1830.45 602.661 1829.05 601.215L1827.77 599.891C1827.02 599.116 1827.02 597.884 1827.77 597.109L1829.05 595.785C1830.45 594.339 1829.08 591.965 1827.13 592.454L1825.34 592.902C1824.29 593.164 1823.23 592.549 1822.93 591.511L1822.42 589.739Z"></path>
                    </g>
                    {/* ABUTMENT */}
                    <g className="abutment hEmpty hIntact hRoot" style={{visibility: tooth28Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth28Diagnozis.abutment ? 1 : 0}}>
                        <path className="st47" d="M1869.83 594.999C1868.13 586.399 1863.33 578.799 1854.83 573.199C1844.83 566.499 1831.43 563.899 1818.13 562.899C1806.93 562.099 1795.03 562.599 1787.23 568.499C1781.83 572.499 1779.83 578.299 1778.63 583.899C1777.53 589.599 1777.23 595.499 1777.33 601.299C1777.53 606.999 1778.13 612.899 1781.83 617.999C1785.73 623.499 1792.53 627.399 1800.13 629.999C1823.63 638.099 1851.53 633.699 1864.33 617.599C1869.83 610.899 1871.43 602.899 1869.83 594.999Z"></path>
                        <path className="st47" d="M1853.36 596.429C1852.28 591.006 1849.24 586.213 1843.85 582.682C1837.51 578.457 1829.02 576.817 1820.59 576.187C1813.5 575.682 1805.96 575.997 1801.01 579.718C1797.59 582.24 1796.32 585.898 1795.56 589.429C1794.87 593.024 1794.68 596.744 1794.74 600.402C1794.87 603.996 1795.25 607.717 1797.59 610.933C1800.06 614.401 1804.37 616.861 1809.19 618.5C1824.08 623.608 1841.76 620.833 1849.87 610.681C1853.36 606.456 1854.37 601.411 1853.36 596.429Z"></path>
                        <circle className="st45" r="13" transform="matrix(-1 0 0 1 1818.73 598)"></circle>
                    </g>
                    {/* PIN */}
                    <g className="pin" style={{visibility: 'inherit', opacity: tooth28Diagnozis.pin ? 1 : 0}}>
                        <path className="st56 hIntact" d="M1869.83 594.999C1868.13 586.399 1863.33 578.799 1854.83 573.199C1844.83 566.499 1831.43 563.899 1818.13 562.899C1806.93 562.099 1795.03 562.599 1787.23 568.499C1781.83 572.499 1779.83 578.299 1778.63 583.899C1777.53 589.599 1777.23 595.499 1777.33 601.299C1777.53 606.999 1778.13 612.899 1781.83 617.999C1785.73 623.499 1792.53 627.399 1800.13 629.999C1823.63 638.099 1851.53 633.699 1864.33 617.599C1869.83 610.899 1871.43 602.899 1869.83 594.999Z" style={{visibility: 'hidden'}}></path>
                        <path className="st56 hIntact" d="M1853.35 596.429C1852.27 591.006 1849.23 586.213 1843.85 582.682C1837.51 578.457 1829.02 576.817 1820.59 576.187C1813.49 575.682 1805.95 575.997 1801.01 579.718C1797.59 582.24 1796.32 585.898 1795.56 589.429C1794.86 593.024 1794.67 596.744 1794.74 600.402C1794.86 603.996 1795.24 607.717 1797.59 610.933C1800.06 614.401 1804.37 616.861 1809.18 618.5C1824.08 623.608 1841.76 620.833 1849.87 610.681C1853.35 606.456 1854.37 601.411 1853.35 596.429Z" style={{visibility: 'hidden'}}></path>
                        <circle className="st57" r="12.25" transform="matrix(-1 0 0 1 1818.73 598)" style={{fill: 'black', opacity: tooth28Diagnozis.pin ? 1 : 0}} />
                    </g>
                    {/* CULTTAB */}
                    <g className="stump hEmpty hIntact hImplant" style={{visibility: !tooth28Diagnozis.culttab ? 'hidden' : 'inherit', opacity: !tooth28Diagnozis.culttab ? 0 : 1}}>
                        <path className="st47" d="M1869.83 594.999C1868.13 586.399 1863.33 578.799 1854.83 573.199C1844.83 566.499 1831.43 563.899 1818.13 562.899C1806.93 562.099 1795.03 562.599 1787.23 568.499C1781.83 572.499 1779.83 578.299 1778.63 583.899C1777.53 589.599 1777.23 595.499 1777.33 601.299C1777.53 606.999 1778.13 612.899 1781.83 617.999C1785.73 623.499 1792.53 627.399 1800.13 629.999C1823.63 638.099 1851.53 633.699 1864.33 617.599C1869.83 610.899 1871.43 602.899 1869.83 594.999Z"></path>
                        <path className="st47" d="M1853.36 596.429C1852.28 591.006 1849.24 586.213 1843.85 582.682C1837.51 578.457 1829.02 576.817 1820.59 576.187C1813.5 575.682 1805.96 575.997 1801.01 579.718C1797.59 582.24 1796.32 585.898 1795.56 589.429C1794.87 593.024 1794.68 596.744 1794.74 600.402C1794.87 603.996 1795.25 607.717 1797.59 610.933C1800.06 614.401 1804.37 616.861 1809.19 618.5C1824.08 623.608 1841.76 620.833 1849.87 610.681C1853.36 606.456 1854.37 601.411 1853.36 596.429Z"></path>
                    </g>
                    <g className="hRoot hImplant hEmpty" style={{visibility: (!tooth28Diagnozis.culttab && !tooth28Diagnozis.abutment && !tooth28Diagnozis.implant && !tooth28Diagnozis.apex && !tooth28Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1879.5,592.9c-1.8-12.7-7-23.9-16-32.4c-0.4-0.3-0.7-0.7-1.1-1
                            c-11.6-10.1-27.1-14.1-42.5-15.4c-13-1.1-26.8-0.1-36,9c-5,5-7.6,11.6-9.1,18.5v0c-0.4,1.8-0.7,3.6-1,5.4
                            c-1.4,8.8-1.8,17.8-1.7,26.8c0.1,8.8,0.8,17.8,5,25.7c1,1.9,2.2,3.7,3.5,5.3c4.5,5.7,10.8,9.9,17.6,12.9
                            c27.1,12.1,59.3,5.1,74.6-19.5c0.1-0.2,0.2-0.3,0.3-0.5C1879.2,617.4,1881.2,604.9,1879.5,592.9z"
                        />
                    </g>
                    {/*TARTAR*/}
                    <g className="tartar hImplant hEmpty" style={{visibility : 'inherit', opacity: teethDiagnozis.tooth28.tartar ? 1 : 0}}>
                        <path className="st61 level2" d="M1863.42 557.171C1863.02 556.846 1862.72 557.412 1862.32 557.087C1860.62 555.488 1858.85 553.03 1857 551.702C1855.23 550.428 1853.39 549.273 1851.5 548.227C1848.77 546.717 1845.92 544.433 1843 543.347C1840.55 542.437 1838.04 542.665 1835.5 542.013C1832.86 541.338 1830.19 539.792 1827.5 539.355C1824.95 538.941 1822.38 540.625 1819.82 540.39C1818.05 540.229 1816.28 538.109 1814.5 538.047C1812.33 537.971 1810.15 538.983 1808 539.11C1804.62 539.31 1801.29 540.797 1798.11 541.687C1795.45 542.433 1792.89 542.461 1790.5 543.841C1788.09 545.231 1785.84 547.977 1783.81 550.148C1781.62 552.528 1779.89 552.242 1778.51 555.171C1777.52 557.256 1774.72 560.45 1774.06 562.71C1773.53 564.508 1774.09 567.347 1773.71 569.206C1773.31 571.157 1772.01 573.109 1771.71 575.061C1771.33 577.692 1771.02 580.34 1770.77 583C1770.64 584.486 1770.52 586.976 1770.42 588.469C1770.29 590.429 1771.2 591.394 1771.13 593.362C1771.07 595.109 1771.03 596.859 1771.01 598.61C1770.99 600.445 1771.99 602.281 1772.01 604.117C1772.03 605.741 1771.06 607.371 1771.13 609C1771.19 610.569 1772.29 612.137 1772.42 613.699C1772.61 615.853 1771.88 617.995 1772.26 620.107C1772.62 622.155 1773.1 624.175 1773.71 626.153C1774.33 628.144 1775.09 631.092 1776.01 632.981C1777.01 635.041 1777.21 635.993 1778.51 637.728C1780 639.763 1783.67 642.622 1785.5 644.316C1786.73 645.459 1788.03 645.527 1789.38 646.523C1790.94 647.67 1792.57 649.722 1794.24 650.684C1797.6 652.611 1801.15 654.217 1804.8 655.5C1806.62 656.14 1808.46 655.691 1810.3 656.155C1812.19 656.63 1814.08 657.013 1815.98 657.304C1817.99 657.612 1820 658.818 1822 658.921C1824.34 659.042 1826.68 658.023 1829 657.866C1830.68 657.752 1832.35 658.564 1834 658.304C1835.85 658.013 1837.69 657.63 1839.5 657.155C1841.27 656.691 1843.02 655.139 1844.73 654.5C1846.35 653.897 1847.94 654.216 1849.5 653.459C1851.21 652.627 1852.88 650.702 1854.5 649.684C1856.04 648.714 1858.55 647.66 1860 646.523C1861.53 645.324 1862 644.033 1863.42 642.65C1864.98 641.121 1867.46 639.48 1868.86 637.728C1870.2 636.044 1872.71 633.331 1873.72 631.572C1873.82 631.355 1873.92 630.247 1874.02 630.03C1874.96 628.309 1874.8 626.531 1875.55 624.707C1876.16 623.203 1878.71 621.668 1879.2 620.107C1879.97 617.627 1881.58 615.083 1882.03 612.5C1882.44 610.192 1881.71 607.853 1881.86 605.5C1882.14 601.113 1882.99 596.675 1882.42 592.3C1881.93 588.572 1880.19 584.963 1879.2 581.5C1878.71 579.797 1879.16 578.129 1878.55 576.5C1877.6 573.973 1875.49 571.538 1874.23 569.206C1872.97 566.863 1872.55 565.623 1870.97 563.5C1869.57 561.631 1865.06 558.853 1863.42 557.171ZM1855.19 573.201C1863.69 578.801 1868.49 586.401 1870.19 595.001C1871.69 602.901 1870.09 610.901 1864.69 617.601C1851.89 633.701 1823.99 638.101 1800.49 630.001C1792.89 627.401 1786.09 623.501 1782.19 618.001C1778.49 612.901 1777.89 607.001 1777.69 601.301C1777.59 595.501 1777.89 589.601 1778.99 583.901C1780.19 578.301 1782.19 572.501 1787.59 568.501C1795.39 562.601 1807.29 562.101 1818.49 562.901C1831.79 563.901 1845.19 566.501 1855.19 573.201Z"></path>
                        <path className="st61 level1 hRoot" d="M1863.42 557.171C1863.02 556.846 1862.72 557.412 1862.32 557.087C1860.62 555.488 1858.85 553.03 1857 551.702C1855.23 550.428 1853.39 549.273 1851.5 548.227C1848.77 546.717 1845.92 544.433 1843 543.347C1840.55 542.437 1838.04 542.665 1835.5 542.013C1832.86 541.338 1830.19 539.792 1827.5 539.355C1824.95 538.941 1822.38 540.625 1819.82 540.39C1818.05 540.229 1816.28 538.109 1814.5 538.047C1812.33 537.971 1810.15 538.983 1808 539.11C1804.62 539.31 1801.29 540.797 1798.11 541.687C1795.45 542.433 1792.89 542.461 1790.5 543.841C1788.09 545.231 1785.84 547.977 1783.81 550.148C1781.62 552.528 1779.89 552.242 1778.51 555.171C1777.52 557.256 1774.72 560.45 1774.06 562.71C1773.53 564.508 1774.09 567.347 1773.71 569.206C1773.31 571.157 1772.01 573.109 1771.71 575.061C1771.33 577.692 1771.02 580.34 1770.77 583C1770.64 584.486 1770.52 586.976 1770.42 588.469C1770.29 590.429 1771.2 591.394 1771.13 593.362C1771.07 595.109 1771.03 596.859 1771.01 598.61C1770.99 600.445 1771.99 602.281 1772.01 604.117C1772.03 605.741 1771.06 607.371 1771.13 609C1771.19 610.569 1772.29 612.137 1772.42 613.699C1772.61 615.853 1771.88 617.995 1772.26 620.107C1772.62 622.155 1773.1 624.175 1773.71 626.153C1774.33 628.144 1775.09 631.092 1776.01 632.981C1777.01 635.041 1777.21 635.993 1778.51 637.728C1780 639.763 1783.67 642.622 1785.5 644.316C1786.73 645.459 1788.03 645.527 1789.38 646.523C1790.94 647.67 1792.57 649.722 1794.24 650.684C1797.6 652.611 1801.15 654.217 1804.8 655.5C1806.62 656.14 1808.46 655.691 1810.3 656.155C1812.19 656.63 1814.08 657.013 1815.98 657.304C1817.99 657.612 1820 658.818 1822 658.921C1824.34 659.042 1826.68 658.023 1829 657.866C1830.68 657.752 1832.35 658.564 1834 658.304C1835.85 658.013 1837.69 657.63 1839.5 657.155C1841.27 656.691 1843.02 655.139 1844.73 654.5C1846.35 653.897 1847.94 654.216 1849.5 653.459C1851.21 652.627 1852.88 650.702 1854.5 649.684C1856.04 648.714 1858.55 647.66 1860 646.523C1861.53 645.324 1862 644.033 1863.42 642.65C1864.98 641.121 1867.46 639.48 1868.86 637.728C1870.2 636.044 1872.71 633.331 1873.72 631.572C1873.82 631.355 1873.92 630.247 1874.02 630.03C1874.96 628.309 1874.8 626.531 1875.55 624.707C1876.16 623.203 1878.71 621.668 1879.2 620.107C1879.97 617.627 1881.58 615.083 1882.03 612.5C1882.44 610.192 1881.71 607.853 1881.86 605.5C1882.14 601.113 1882.99 596.675 1882.42 592.3C1881.93 588.572 1880.19 584.963 1879.2 581.5C1878.71 579.797 1879.16 578.129 1878.55 576.5C1877.6 573.973 1875.49 571.538 1874.23 569.206C1872.97 566.863 1872.55 565.623 1870.97 563.5C1869.57 561.631 1865.06 558.853 1863.42 557.171ZM1855.19 573.201C1863.69 578.801 1868.49 586.401 1870.19 595.001C1871.69 602.901 1870.09 610.901 1864.69 617.601C1851.89 633.701 1823.99 638.101 1800.49 630.001C1792.89 627.401 1786.09 623.501 1782.19 618.001C1778.49 612.901 1777.89 607.001 1777.69 601.301C1777.59 595.501 1777.89 589.601 1778.99 583.901C1780.19 578.301 1782.19 572.501 1787.59 568.501C1795.39 562.601 1807.29 562.101 1818.49 562.901C1831.79 563.901 1845.19 566.501 1855.19 573.201Z" style={{visibility: 'inherit'}}></path>
                        <path className="st61 level1" d="M1858.93 561.247C1858.56 560.954 1858.29 561.465 1857.92 561.171C1856.36 559.73 1854.72 557.513 1853.02 556.316C1851.39 555.167 1849.7 554.126 1847.96 553.183C1845.45 551.821 1842.83 549.762 1840.14 548.782C1837.89 547.962 1835.58 548.167 1833.24 547.58C1830.81 546.971 1828.35 545.577 1825.88 545.183C1823.53 544.81 1821.17 546.328 1818.8 546.116C1817.18 545.971 1815.55 544.059 1813.91 544.004C1811.91 543.936 1809.91 544.847 1807.93 544.962C1804.82 545.143 1801.76 546.484 1798.83 547.285C1796.38 547.958 1794.03 547.984 1791.83 549.228C1789.6 550.481 1787.54 552.957 1785.67 554.915C1783.65 557.06 1782.06 558.606 1780.79 561.247C1779.88 563.127 1778.22 564.204 1777.61 566.242C1777.13 567.862 1776.72 570.422 1776.38 572.098C1776.01 573.858 1776.65 575.618 1776.38 577.377C1776.02 579.75 1774.82 582.138 1774.59 584.536C1774.47 585.876 1775.28 587.219 1775.19 588.565C1775.07 590.333 1774.98 592.104 1774.92 593.879C1774.87 595.454 1774.83 597.032 1774.81 598.611C1774.79 600.265 1774.8 601.921 1774.81 603.577C1774.83 605.04 1773.94 606.51 1774 607.979C1774.06 609.394 1775.07 610.808 1775.19 612.216C1775.36 614.158 1774.69 616.089 1775.04 617.994C1775.38 619.841 1776.73 621.662 1777.3 623.446C1777.87 625.24 1778.56 627.898 1779.41 629.602C1780.34 631.46 1781.44 632.318 1782.64 633.882C1784 635.717 1785.54 638.294 1787.22 639.822C1788.36 640.852 1789.55 640.914 1790.8 641.812C1792.23 642.846 1793.73 644.696 1795.27 645.564C1796.44 646.219 1797.63 646.829 1798.83 647.394C1800.86 648.354 1802.91 649.191 1804.99 649.906C1806.66 650.483 1808.35 650.079 1810.05 650.497C1811.78 650.926 1813.53 651.271 1815.28 651.533C1817.12 651.811 1818.97 652.898 1820.81 652.991C1822.97 653.1 1825.12 652.182 1827.26 652.039C1828.8 651.936 1830.34 652.669 1831.86 652.435C1833.57 652.172 1835.25 651.826 1836.92 651.399C1838.55 650.98 1840.16 649.581 1841.74 649.005C1843.23 648.461 1844.69 648.749 1846.12 648.066C1847.7 647.316 1849.23 645.58 1850.72 644.663C1852.15 643.788 1854.45 642.838 1855.79 641.812C1857.19 640.731 1857.63 639.567 1858.93 638.32C1860.37 636.942 1862.65 635.462 1863.94 633.882C1864.7 632.947 1864.52 631.977 1865.22 630.971C1866.01 629.836 1866.77 628.655 1867.49 627.43C1867.58 627.234 1868.59 627.136 1868.69 626.941C1869.55 625.389 1869.41 623.786 1870.09 622.142C1870.66 620.785 1872.09 619.401 1872.54 617.994C1873.25 615.758 1872.89 613.464 1873.3 611.135C1873.67 609.054 1874.85 606.945 1874.99 604.823C1875.11 602.877 1874.22 600.919 1874.16 598.962C1874.09 596.943 1874.84 594.925 1874.58 592.921C1874.34 591.147 1873.12 589.403 1872.75 587.692C1872.43 586.161 1872.97 584.658 1872.54 583.183C1872.09 581.648 1871.58 580.144 1871.01 578.675C1870.14 576.397 1869.12 574.201 1867.97 572.098C1866.8 569.986 1864.57 568.868 1863.12 566.953C1861.84 565.269 1860.44 562.763 1858.93 561.247ZM1855.19 573.201C1863.69 578.801 1868.49 586.401 1870.19 595.001C1871.69 602.901 1870.09 610.901 1864.69 617.601C1851.89 633.701 1823.99 638.101 1800.49 630.001C1792.89 627.401 1786.09 623.501 1782.19 618.001C1778.49 612.901 1777.89 607.001 1777.69 601.301C1777.59 595.501 1777.89 589.601 1778.99 583.901C1780.19 578.301 1782.19 572.501 1787.59 568.501C1795.39 562.601 1807.29 562.101 1818.49 562.901C1831.79 563.901 1845.19 566.501 1855.19 573.201Z"></path>
                    </g>
                    {/*CARIES/SEAL*/}
                    <g className="header caries-filling" style={{visibility: (!tooth28Diagnozis.culttab && !tooth28Diagnozis.abutment && !tooth28Diagnozis.implant && !tooth28Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        {/*КАРИЕС ЦЕНТР*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                        >
                            <path className="st7" d="M1790.7,609c0.6,1.4,1.4,2.7,2.5,3.8c7.9,8.8,28,10.8,40,9.4c7.1-0.8,13.3-3.5,17.3-8.1
                                c3.6-4.2,5.5-9.9,4.9-17.2c-0.4-5-3-9.4-6.6-13.1c-7.6-7.7-19.9-12.4-27.8-12.9c-11.7-0.7-22.4,6.3-22.4,6.3
                                c-2.5,1.2-4.8,3.8-6.4,7.1C1788.6,591.1,1787.4,600.9,1790.7,609z"
                            />
                            <path className={
                                    `st8 caries-center
                                    ${'caries-stroke'}
                                    ${teethDiagnozis.tooth28.caries_center ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth28.seal_center ? `seal-fill ${teethDiagnozis.tooth28.seal_center_color}` : ''}
                                `} 
                                d="M1790.7,609c0.6,1.4,1.4,2.7,2.5,3.8c7.9,8.8,28,10.8,40,9.4c7.1-0.8,13.3-3.5,17.3-8.1
                                c3.6-4.2,5.5-9.9,4.9-17.2c-0.4-5-3-9.4-6.6-13.1c-7.6-7.7-19.9-12.4-27.8-12.9c-11.7-0.7-22.4,6.3-22.4,6.3
                                c-2.5,1.2-4.8,3.8-6.4,7.1C1788.6,591.1,1787.4,600.9,1790.7,609z" 
                            />
                        </g>
                        {/*КАРИЕС ПРАВО*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st7" d="M1850.4,614.1c9.7,4.2,17.3,9.8,22.2,14.2c0.1-0.2,0.2-0.3,0.3-0.5c6.3-10.4,8.3-22.8,6.6-34.9
                                c-1.8-12.7-7-23.9-16-32.4c-4.8,11.3-11.1,19.3-14.8,23.3c3.6,3.7,6.2,8.1,6.6,13.1C1855.9,604.2,1854,609.9,1850.4,614.1z"
                            />
                            <path className={
                                    `st8 caries-center
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth28.caries_right ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth28.seal_right ? `seal-fill ${teethDiagnozis.tooth28.seal_right_color}` : ''}
                                `} 
                                d="M1850.4,614.1c9.7,4.2,17.3,9.8,22.2,14.2c0.1-0.2,0.2-0.3,0.3-0.5c6.3-10.4,8.3-22.8,6.6-34.9
                                c-1.8-12.7-7-23.9-16-32.4c-4.8,11.3-11.1,19.3-14.8,23.3c3.6,3.7,6.2,8.1,6.6,13.1C1855.9,604.2,1854,609.9,1850.4,614.1z"
                            />
                        </g>
                        {/*КАРИЕС НИЗ*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'bottom');
                            }}
                        >
                            <path className="st7" d="M1774.7,571.6L1774.7,571.6c6.2,6.6,13.8,10.9,17.4,12.7c1.7-3.3,3.9-5.9,6.4-7.1c0,0,10.7-7,22.4-6.3
                                c7.9,0.5,20.2,5.1,27.8,12.9c3.6-4,10-12,14.8-23.3c-0.4-0.3-0.7-0.7-1.1-1c-11.6-10.1-27.1-14.1-42.5-15.4c-13-1.1-26.8-0.1-36,9
                                C1778.9,558.1,1776.3,564.7,1774.7,571.6z"
                            />
                            <path className={
                                    `st8 caries-center
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth28.caries_bottom ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth28.seal_bottom ? `seal-fill ${teethDiagnozis.tooth28.seal_bottom_color}` : ''}
                                `} 
                                d="M1774.7,571.6L1774.7,571.6c6.2,6.6,13.8,10.9,17.4,12.7c1.7-3.3,3.9-5.9,6.4-7.1c0,0,10.7-7,22.4-6.3
                                c7.9,0.5,20.2,5.1,27.8,12.9c3.6-4,10-12,14.8-23.3c-0.4-0.3-0.7-0.7-1.1-1c-11.6-10.1-27.1-14.1-42.5-15.4c-13-1.1-26.8-0.1-36,9
                                C1778.9,558.1,1776.3,564.7,1774.7,571.6z"
                            />
                        </g>
                        {/*КАРИЕС LEFT*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                        >
                            <path className="st7" d="M1772,603.8c0.1,8.8,0.8,17.8,5,25.7c1,1.9,2.2,3.7,3.5,5.3c4.6-6.1,9.6-13.8,12.6-22
                                c-1.1-1.2-1.9-2.4-2.5-3.8c-3.3-8.1-2-17.9,1.4-24.6c-3.6-1.8-11.2-6.2-17.4-12.7c-0.4,1.8-0.7,3.6-1,5.4
                                C1772.3,585.9,1771.9,594.9,1772,603.8z"
                            />
                            <path className={
                                    `st8 caries-left
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth28.caries_left ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth28.seal_left ? `seal-fill ${teethDiagnozis.tooth28.seal_left_color}` : ''}
                                `} 
                                d="M1772,603.8c0.1,8.8,0.8,17.8,5,25.7c1,1.9,2.2,3.7,3.5,5.3c4.6-6.1,9.6-13.8,12.6-22
                                c-1.1-1.2-1.9-2.4-2.5-3.8c-3.3-8.1-2-17.9,1.4-24.6c-3.6-1.8-11.2-6.2-17.4-12.7c-0.4,1.8-0.7,3.6-1,5.4
                                C1772.3,585.9,1771.9,594.9,1772,603.8z" 
                            />
                        </g>
                        {/*КАРИЕС ВЕРХ*/}
                        <g
                            onClick={() => {
                                setColordedPart(diagnozis, 'top');
                            }}
                            className="caries-filling"
                        >
                            <path className="st7" d="M1780.5,634.8c4.5,5.7,10.8,9.9,17.6,12.9c27.1,12.1,59.3,5.1,74.6-19.5c-4.9-4.4-12.4-10-22.2-14.2
                                c-4,4.6-10.2,7.3-17.3,8.1c-12,1.4-32.1-0.5-40-9.4C1790.1,621,1785,628.7,1780.5,634.8z"
                            />
                            <path className={
                                    `st8 caries-center
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth28.caries_top ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth28.seal_top ? `seal-fill ${teethDiagnozis.tooth28.seal_top_color}` : ''}
                                `} 
                                d="M1780.5,634.8c4.5,5.7,10.8,9.9,17.6,12.9c27.1,12.1,59.3,5.1,74.6-19.5c-4.9-4.4-12.4-10-22.2-14.2
                                c-4,4.6-10.2,7.3-17.3,8.1c-12,1.4-32.1-0.5-40-9.4C1790.1,621,1785,628.7,1780.5,634.8z"
                            />
                        </g>
                        <g className="with">
                            {/*Черточка низ лево*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth28Diagnozis.seal_right && !tooth28Diagnozis.seal_top) ||
                                        (!tooth28Diagnozis.seal_right && tooth28Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M1850.5 614.502C1853.5 615.002 1861.4 617.802 1869 625.002"
                            />
                            {/*Овал лево*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth28Diagnozis.seal_right && !tooth28Diagnozis.seal_center) ||
                                        (!tooth28Diagnozis.seal_right && tooth28Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                                d="M1850.5 614.502C1854.67 608.335 1860.1 593.502 1848.5 583.502"
                            />
                            {/*Черточка верх лево*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth28Diagnozis.seal_right && !tooth28Diagnozis.seal_bottom) ||
                                        (!tooth28Diagnozis.seal_right && tooth28Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }} 
                                d="M1861.5 565.002C1859.83 567.835 1855 575.402 1849 583.002"
                            />
                            {/*Овал черточка верх*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth28Diagnozis.seal_center && !tooth28Diagnozis.seal_bottom) ||
                                        (!tooth28Diagnozis.seal_center && tooth28Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }} 
                                d="M1848.5 583.502C1837.17 576.002 1810 565.602 1792 584.002"
                            />
                            {/*Черточка верх право*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth28Diagnozis.seal_left && !tooth28Diagnozis.seal_bottom) ||
                                        (!tooth28Diagnozis.seal_left && tooth28Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }}
                                d="M1778 575.002C1779.33 576.502 1783.8 580.502 1791 584.502"
                            />
                            {/*Овал черточка право*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (!tooth28Diagnozis.seal_left && tooth28Diagnozis.seal_center) ||
                                        (tooth28Diagnozis.seal_left && !tooth28Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1792 584.002C1789.67 587.669 1786.6 598.602 1793 613.002"
                            />
                            {/*Низ черточка право*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth28Diagnozis.seal_left && !tooth28Diagnozis.seal_top) ||
                                        (!tooth28Diagnozis.seal_left && tooth28Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M1783 631.002C1785.17 629.169 1790.2 623.502 1793 615.502"
                            />
                            {/*Овал черточка низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth28Diagnozis.seal_center && !tooth28Diagnozis.seal_top) ||
                                        (!tooth28Diagnozis.seal_center && tooth28Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M1793 613.002C1797.5 622.002 1833.7 628.602 1850.5 615.002"
                            />
                        </g>
                    </g>
                    {/*VINIR*/}
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                    <g className="vinir"
                            style={
                                {
                                    visibility: tooth28Diagnozis.vinir ? 'inherit' : 'hidden',
                                    opacity: tooth28Diagnozis.vinir ? 1 : 0
                                }}
                        >
                            <path className="st55" d="M1879.5 592.899C1877.7 580.199 1872.5 568.999 1863.5 560.499C1863.1 560.199 1862.8 559.799 1862.4 559.499C1850.8 549.399 1835.3 545.399 1819.9 544.099C1806.9 542.999 1793.1 543.999 1783.9 553.099C1778.9 558.099 1776.3 564.699 1774.8 571.599C1774.4 573.399 1774.1 575.199 1773.8 576.999C1772.96 582.242 1772.48 587.557 
                                1772.25 592.899C1775.52 592.766 1782.15 591.7 1782.48 588.5C1782.7 585.974 1783 583.462 1783.39 580.969C1783.64 579.509 1783.88 578.05 1784.21 576.59C1785.43 570.995 1787.55 565.643 1791.62 561.589C1799.12 554.21 
                                1810.37 553.399 1820.96 554.291C1833.51 555.345 1846.14 558.589 1855.59 566.779C1855.92 567.022 1856.16 567.346 1856.49 567.589C1862.52 573.259 1866.46 580.41 1868.48 588.5C1869.26 592.1 1876.16 593 1879.51 593L1879.5 592.899Z"
                            />
                            <path className={`vinir-fill ${tooth28Diagnozis.vinir_color}`}
                                d="M1879.5 592.899C1877.7 580.199 1872.5 568.999 1863.5 560.499C1863.1 560.199 1862.8 559.799 1862.4 559.499C1850.8 549.399 1835.3 545.399 1819.9 544.099C1806.9 542.999 1793.1 543.999 1783.9 553.099C1778.9 558.099 1776.3 
                                564.699 1774.8 571.599C1774.4 573.399 1774.1 575.199 1773.8 576.999C1772.96 582.242 1772.48 587.557 1772.25 592.899C1775.52 592.766 1782.15 591.7 1782.48 588.5C1782.7 585.974 1783 583.462 1783.39 580.969C1783.64 579.509 1783.88 578.05 1784.21 576.59C1785.43 570.995 1787.55 565.643 1791.62 561.589C1799.12 554.21 
                                1810.37 553.399 1820.96 554.291C1833.51 555.345 1846.14 558.589 1855.59 566.779C1855.92 567.022 1856.16 567.346 1856.49 567.589C1862.52 573.259 1866.46 580.41 1868.48 588.5C1869.26 592.1 1876.16 593 1879.51 593M1879.5 592.899C1879.5 592.933 1879.51 
                                592.966 1879.51 593M1879.5 592.899L1879.51 593"
                            />
                        </g>
                    </g>
                    {/* ТИМЧАСОВА КОРОНКА/КЕРАМІЧНА КОРОНКА */}
                    <g className="crown" style={{
                        visibility: (tooth28Diagnozis.temporary_crown || tooth28Diagnozis.ceramic_crown || tooth28Diagnozis.mceramic_crown || tooth28Diagnozis.metalic_crown || tooth28Diagnozis.zirconia_crown) ? 'inherit' : 'hidden',
                        opacity: (tooth28Diagnozis.temporary_crown || tooth28Diagnozis.ceramic_crown || tooth28Diagnozis.mceramic_crown || tooth28Diagnozis.metalic_crown || tooth28Diagnozis.zirconia_crown)  ? 1 : 0
                    }}>
                        <path className={
                                `st46 target temporary-crown crown-fill ${diagnozis}
                                ${tooth28Diagnozis.ceramic_crown_color}
                                ${tooth28Diagnozis.mceramic_crown_color}
                                ${tooth28Diagnozis.metalic_crown_color}
                                ${tooth28Diagnozis.zirconia_crown_color}
                            `}
                            d="M1879.5,592.9c-1.8-12.7-7-23.9-16-32.4c-0.4-0.3-0.7-0.7-1.1-1
                            c-11.6-10.1-27.1-14.1-42.5-15.4c-13-1.1-26.8-0.1-36,9c-5,5-7.6,11.6-9.1,18.5v0c-0.4,1.8-0.7,3.6-1,5.4
                            c-1.4,8.8-1.8,17.8-1.7,26.8c0.1,8.8,0.8,17.8,5,25.7c1,1.9,2.2,3.7,3.5,5.3c4.5,5.7,10.8,9.9,17.6,12.9
                            c27.1,12.1,59.3,5.1,74.6-19.5c0.1-0.2,0.2-0.3,0.3-0.5C1879.2,617.4,1881.2,604.9,1879.5,592.9z"
                        />
                        {/*FISSURE*/}
                        <path className={`st3 fissure ${tooth28Diagnozis.fissure ? 'diagnoze' : tooth28Diagnozis.fissure ? 'hidden' : ''}`} 
                            d="M1851.4,607.7c-0.8-1-1.6-2-2.3-3.1c-1.2-1.8-2.4-3.4-3.9-4.5c0.4-0.2,0.7-0.4,1-0.7
                            c1.6-1.6,1.3-3.9,0.9-6c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-3.1,1-6.1,3.4-8l-0.7-0.8c-2.7,2.2-4.1,5.5-3.8,8.9
                            c0.1,0.6,0.2,1.2,0.3,1.8c0.3,2,0.6,3.8-0.6,5.1c-1.2,1.2-2.7,1-4.6,0.8l-0.1,0c-1.7-0.2-3.6-0.1-5.3-0.1c-1.5,0-3,0-4.5-0.1
                            c-3.5-0.2-6.9-0.6-10.3-1.1c-1.2-2.3-2.3-4.6-3.3-6.9c-1.2-2.8-2.3-5.6-1.9-8.5c0.3-2.2,1.5-4.1,2.7-6.1c1.8-2.9,3.5-5.8,5.2-8.7
                            l-0.9-0.5c-1.7,2.9-3.5,5.8-5.3,8.8c-1.2,2-2.5,4-2.8,6.4c-0.5,3.2,0.7,6.1,2,9.1c1.1,2.4,2.2,4.9,3.5,7.2l0.1,0.2l0.3,0
                            c0.3,0.1,0.6,0.1,1,0.1c-1.7,2.8-3.7,5.4-5.8,7.9c-1.9,2.2-4,4.2-6.7,4.6c-2.6,0.3-4.9-0.9-7.3-2.3c-1.4-0.7-2.8-1.5-4.3-2
                            c-3.1-1-6.7-0.9-10.6,0.4c-1.9,0.6-3.6,1.4-5.3,2.3l0.5,0.9c1.6-0.9,3.3-1.7,5.1-2.2c3.8-1.2,7.1-1.3,10-0.4
                            c1.4,0.5,2.8,1.2,4.1,1.9c2.2,1.2,4.4,2.4,7,2.4c0.3,0,0.7,0,1-0.1c3.1-0.4,5.4-2.6,7.4-5c2.3-2.6,4.3-5.5,6.2-8.4
                            c2.1,0.3,4.2,0.5,6.4,0.7l-0.1,0.2c-1.6,3.2-2.6,6.7-2.9,10.3c-0.2,2.7-0.1,5.6,0.5,8.6c0.6,3.2,1.7,6.3,3.1,9.2l1-0.5
                            c-1.4-2.8-2.5-5.9-3.1-9c-0.6-2.8-0.7-5.6-0.5-8.3c0.3-3.5,1.2-6.8,2.8-9.9l0.2-0.6c0.3,0,0.7,0.1,1,0.1c1.5,0.1,3.1,0.1,4.6,0.1
                            c1.8,0,3.6,0,5.2,0.1l0.1,0c0.6,0.1,1.3,0.1,1.9,0.1c0.4,0,0.8,0,1.2-0.1c1.7,0.8,3,2.7,4.4,4.6c0.7,1.1,1.5,2.2,2.3,3.2
                            c1.5,1.8,3.4,3.1,5.6,3.9l0.4-1C1854.6,610.6,1852.8,609.3,1851.4,607.7z"
                        />
                    </g>
                    {/*FISSURES*/}
                    <g className="fissures hEmpty hRoot hImplant" style={{visibility: (!tooth28Diagnozis.culttab && !tooth28Diagnozis.abutment && !tooth28Diagnozis.implant && !tooth28Diagnozis.apex && !tooth28Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className={`st3 fissure ${tooth28Diagnozis.fissure ? 'diagnoze' : tooth28Diagnozis.fissure ? 'hidden' : ''}`} 
                            d="M1851.4,607.7c-0.8-1-1.6-2-2.3-3.1c-1.2-1.8-2.4-3.4-3.9-4.5c0.4-0.2,0.7-0.4,1-0.7
                            c1.6-1.6,1.3-3.9,0.9-6c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-3.1,1-6.1,3.4-8l-0.7-0.8c-2.7,2.2-4.1,5.5-3.8,8.9
                            c0.1,0.6,0.2,1.2,0.3,1.8c0.3,2,0.6,3.8-0.6,5.1c-1.2,1.2-2.7,1-4.6,0.8l-0.1,0c-1.7-0.2-3.6-0.1-5.3-0.1c-1.5,0-3,0-4.5-0.1
                            c-3.5-0.2-6.9-0.6-10.3-1.1c-1.2-2.3-2.3-4.6-3.3-6.9c-1.2-2.8-2.3-5.6-1.9-8.5c0.3-2.2,1.5-4.1,2.7-6.1c1.8-2.9,3.5-5.8,5.2-8.7
                            l-0.9-0.5c-1.7,2.9-3.5,5.8-5.3,8.8c-1.2,2-2.5,4-2.8,6.4c-0.5,3.2,0.7,6.1,2,9.1c1.1,2.4,2.2,4.9,3.5,7.2l0.1,0.2l0.3,0
                            c0.3,0.1,0.6,0.1,1,0.1c-1.7,2.8-3.7,5.4-5.8,7.9c-1.9,2.2-4,4.2-6.7,4.6c-2.6,0.3-4.9-0.9-7.3-2.3c-1.4-0.7-2.8-1.5-4.3-2
                            c-3.1-1-6.7-0.9-10.6,0.4c-1.9,0.6-3.6,1.4-5.3,2.3l0.5,0.9c1.6-0.9,3.3-1.7,5.1-2.2c3.8-1.2,7.1-1.3,10-0.4
                            c1.4,0.5,2.8,1.2,4.1,1.9c2.2,1.2,4.4,2.4,7,2.4c0.3,0,0.7,0,1-0.1c3.1-0.4,5.4-2.6,7.4-5c2.3-2.6,4.3-5.5,6.2-8.4
                            c2.1,0.3,4.2,0.5,6.4,0.7l-0.1,0.2c-1.6,3.2-2.6,6.7-2.9,10.3c-0.2,2.7-0.1,5.6,0.5,8.6c0.6,3.2,1.7,6.3,3.1,9.2l1-0.5
                            c-1.4-2.8-2.5-5.9-3.1-9c-0.6-2.8-0.7-5.6-0.5-8.3c0.3-3.5,1.2-6.8,2.8-9.9l0.2-0.6c0.3,0,0.7,0.1,1,0.1c1.5,0.1,3.1,0.1,4.6,0.1
                            c1.8,0,3.6,0,5.2,0.1l0.1,0c0.6,0.1,1.3,0.1,1.9,0.1c0.4,0,0.8,0,1.2-0.1c1.7,0.8,3,2.7,4.4,4.6c0.7,1.1,1.5,2.2,2.3,3.2
                            c1.5,1.8,3.4,3.1,5.6,3.9l0.4-1C1854.6,610.6,1852.8,609.3,1851.4,607.7z"
                        />
                    </g>
                </g>
                <g id="T_28" className="common-view" style={{visibility: tooth28Diagnozis.absent ? 'hidden' : 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin">
                        <g id="dentin_v_28" className="hRoot hImplant hEmpty" style={{visibility: !tooth28Diagnozis.implant && !tooth28Diagnozis.apex && !tooth28Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st9 change-color ${tooth28Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M1828.7,245.5c-4-1.2-8.3-1-12.3,0.3c-7,2.3-12.1,7.7-15.8,13.7
                                c-7.1,11.5-9.2,24.8-11.2,37.9c-1.2,8.4-2.4,16.9-3.9,25.3c-1.2,7-2.6,10-4.1,17c-2.7,12.5-5.6,18.3-8.9,30.8
                                c1.8,7.3,3.7,25.3,6.1,32.5c1.1,3.4,2.3,6.9,3.5,10.3c1.2,3.4,2.5,6.8,3.8,10.2c2.4-2.7,5.1-5.1,8-7.3c4.1-3.1,8.6-5.7,13.5-7.7
                                c3,0.5,5.8,1.6,8.2,3.3c1.3,1,2.5,2.1,3.5,3.3c4.5-2.4,8.8-5,13-7.7c4-2.6,8.1-5.5,13-5.6c3.7-0.1,7.1,1.4,10.4,3
                                c3.5,1.6,6.9,3.3,10.4,5.1c1.5-7.8,2.7-15.6,3.4-23.5c0.7-7.7,1.1-15.4,1.1-23.1c-3.4-8.5-6.8-16.9-10.3-25.3
                                c-8.7-21-17.8-41.8-26-62.9c-1.2-3.2-2.5-6.6-1.4-9.8c0.9-3,3.7-5.4,4.5-8.4c0.5-2.1,0-4.4-1.3-6.3
                                C1834.1,248,1831.6,246.4,1828.7,245.5z"
                            />
                        </g>
                        <g id="dentin_n_28" style={{visibility: !tooth28Diagnozis.implant && !tooth28Diagnozis.abutment && !tooth28Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st10 change-color ${tooth28Diagnozis?.change_color ? 'diagnoze' : ''}`} 
                                d="M1861.2,341c-3.5-1.8-7.5-2.7-11.5-3.1c-6.4-0.7-12.7-0.3-19,0.7c-3.8,0.6-7.6,1.4-11.4,2.3c-2,0.5-4,1-6,1.6
                                c-6.8,1.9-13.4,4.4-19.6,7.9c-8.2,4.6-15.2,10.9-20.8,18.5c3.2-11.3,5.9-17.1,8.5-29.1c1.5-7,2.9-10,4.1-17
                                c1.5-8.4,2.7-16.9,3.9-25.3c1.9-13.1,4.1-26.4,11.2-37.9c3.7-6,8.8-11.3,15.8-13.7c4-1.3,8.3-1.5,12.3-0.3
                                c2.9,0.9,5.5,2.5,7.1,4.9c1.3,1.9,1.8,4.1,1.3,6.2c-0.7,3.1-3.5,5.4-4.5,8.4c-1,3.3,0.2,6.6,1.4,9.8c8.2,21.1,17.3,42,26,62.9
                                C1860.3,338.9,1860.7,339.9,1861.2,341z"
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g className="hEmpty hRoot hImplant pulpitis-pfilling">
                            <path className={`st22 target top ${tooth28Diagnozis.channel_class} ${tooth28Diagnozis.channel_class} ${tooth28Diagnozis.pulpit ? 'pulpit' : ''} ${tooth28Diagnozis.periodontit ? 'periodontit' : ''}`}
                                d="M1841.8,379c-5.7-2.8-12.3-3.6-18.6-2.4c-7.1,1.3-13.3,5.1-17.4,10.5
                                c4.4-14.5,6.9-29.5,7.5-44.5c0,0,0,0,0,0l0,0c0,0,0.1,0,0.1,0c2-0.6,3.9-1.1,5.9-1.6c3.8-0.9,7.5-1.7,11.4-2.3
                                C1835.1,351.9,1838.8,365.3,1841.8,379z"
                            />
                        </g>
                        <g>
                            <path className={`st22 target top ${tooth28Diagnozis.channel_class} ${tooth28Diagnozis.channel_class} ${tooth28Diagnozis.pulpit ? 'pulpit' : ''} ${tooth28Diagnozis.periodontit ? 'periodontit' : ''}`}
                                d="M1830.8,338.5c-3.8,0.6-7.6,1.4-11.4,2.3c-2,0.5-4,1-6,1.6v-0.1c0.2-4,0.2-8,0.1-12
                                c-0.4-11.6-1.8-23.4-1.7-35c1.1-0.1,2.2-0.2,3.5-0.3c0.8,0,1.7-0.1,2.5-0.1c2.1,12.5,6.8,25.2,11.1,37.5
                                C1829.4,334.4,1830.1,336.4,1830.8,338.5C1830.8,338.5,1830.8,338.5,1830.8,338.5z"
                            />
                        </g>
                        <g>
                            <path className={`st22 target top ${tooth28Diagnozis.channel_class} ${tooth28Diagnozis.channel_class} ${tooth28Diagnozis.pulpit ? 'pulpit' : ''} ${tooth28Diagnozis.periodontit ? 'periodontit' : ''}`} d="M1819.9,264c-3.9,10.1-4,20.5-2.3,30.9c-0.8,0-1.6,0.1-2.5,0.1
                                c-1.2,0.1-2.4,0.2-3.5,0.3c0.1-9.9,1.3-19.7,5.4-29c3.1-7.1,7.8-13.6,13.8-19.1C1826,252.1,1822.3,257.8,1819.9,264z"
                            />
                        </g>
                        <PeriodontitStage28 />
                    </g>
                    {/*PIN*/}
                    <g className="pin hEmpty hImplant" style={{
                        visibility: 'inherit', opacity: tooth28Diagnozis.pin ? 1 : 0
                    }}>
                        <path className="st56 hIntact" d="M1870.3 363.1C1870.3 370.8 1869.9 378.5 1869.2 386.2C1868.4 394.1 1867.3 401.9 1865.7 409.7C1862.3 407.9 1858.8 406.2 1855.4 404.6C1852.1 403.1 1848.7 401.5 1845 401.6C1840.1 401.7 1836 404.6 1832 407.2C1827.8 410 1823.5 412.6 1819 414.9C1818 413.6 1816.8 412.5 1815.5 411.6C1813.1 409.9 1810.3 408.7 1807.3 408.2C1802.5 410.2 1797.9 
                            412.8 1793.8 415.9C1790.9 418.1 1788.2 420.5 1785.8 423.2C1784.5 419.8 1783.2 416.4 1782 413C1780.8 409.6 1779.6 406.2 1778.5 402.7C1776.2 395.5 1774.3 377.6 1772.4 370.2C1772.6 369.6 1772.7 369.1 1772.8 368.6C1778.3 361 1785.4 354.8 1793.6 350.1C1798.7 347.2 1804.1 345 1809.7 343.3C1810.9 342.9 1812 342.6 1813.2 342.2C1815.2 341.6 1817.2 341.1 1819.2 340.6C1820.6 340.3 1822 339.9 1823.4 339.6H1823.5C1824.4 
                            339.4 1825.3 339.2 1826.2 339C1826.7 338.9 1827.1 338.8 1827.6 338.7C1828.5 338.5 1829.5 338.4 1830.4 338.2C1830.4 338.2 1830.4 338.2 1830.5 338.2H1830.6C1835.8 337.4 1841 337 1846.2 337.3C1847.3 337.4 1848.4 337.4 1849.5 337.6C1853.5 338 1857.4 338.9 1860.9 340.7C1860.9 340.7 1860.9 340.7 1860.9 340.6C1861 340.6 1861 340.6 1861 340.7C1864.3 348.3 1867.3 355.7 1870.3 363.1Z"
                            style={{visibility: 'hidden'}}
                        />
                        <path className="st57" d="M1839.1 403.1C1836.6 404.2 1834.3 405.8 1832 407.3C1827.9 410 1823.6 412.6 1819.2 414.9C1818.2 413.7 1817.1 412.6 1815.8 411.6C1815.3 411.2 1813.1 409.7 1812.6 409.4L1813.3 276.8C1813.3 276.1 1813.8 275.6 1814.3 275.3C1814.5 275.2 1814.8 275.1 1815 275.1C1815.8 275.1 1816.5 275.7 1816.7 
                            276.5L1817 277.9C1817 277.9 1834.2 375.6 1839.1 403.1Z"
                            style={{fill: tooth28Diagnozis.pin ? '#dbd9d3' : 'none'}}   
                        />
                    </g>
                    {/* CULT TAB */}
                    <g className="stump hEmpty hIntact hImplant" style={{visibility: tooth28Diagnozis.culttab ? 'inherit' : 'hidden', opacity: tooth28Diagnozis.culttab ? 1 : 0}}>
                        <path className="st14" d="M1830.9,338.5C1830.8,338.5,1830.8,338.5,1830.9,338.5L1830.9,338.5c-0.1,0-0.1,0-0.2,0
                            c-0.9,0.1-1.9,0.3-2.8,0.5c-0.5,0.1-0.9,0.2-1.4,0.3c-0.9,0.2-1.8,0.4-2.7,0.6c0,0-0.1,0-0.1,0c-1.4,0.3-2.8,0.6-4.2,1
                            c-2,0.5-4,1-6,1.6v0c0,0,0,0,0,0c-1.2,0.3-2.3,0.7-3.5,1.1l3.1-66.7c0.1-0.9,0.8-1.7,1.8-1.7c0.8,0,1.5,0.6,1.7,1.4L1830.9,338.5
                            z"
                        />
                        <path className="st15" 
                            d="M1870.3,363.1c0,7.7-0.4,15.4-1.1,23.1c-0.8,7.9-1.9,15.7-3.5,23.5c-3.4-1.8-6.9-3.5-10.3-5.1
                            c-3.3-1.5-6.7-3.1-10.4-3c-4.9,0.1-9,3-13,5.6c-4.2,2.8-8.5,5.4-13,7.7c-1-1.3-2.2-2.4-3.5-3.3c-2.4-1.7-5.2-2.9-8.2-3.4
                            c-4.8,2-9.4,4.6-13.5,7.7c-2.9,2.2-5.6,4.6-8,7.3c-1.3-3.4-2.6-6.8-3.8-10.2c-1.2-3.4-2.4-6.8-3.5-10.3
                            c-2.3-7.2-4.2-25.1-6.1-32.5c0.2-0.6,0.3-1.1,0.4-1.6c5.5-7.6,12.6-13.8,20.8-18.5c5.1-2.9,10.5-5.1,16.1-6.8
                            c1.2-0.4,2.3-0.7,3.5-1.1c0,0,0,0,0,0v0c2-0.6,4-1.1,6-1.6c1.4-0.3,2.8-0.7,4.2-1c0,0,0.1,0,0.1,0c0.9-0.2,1.8-0.4,2.7-0.6
                            c0.5-0.1,0.9-0.2,1.4-0.3c0.9-0.2,1.9-0.3,2.8-0.5c0,0,0,0,0.1,0v0c0,0,0.1,0,0.1,0c5.2-0.8,10.4-1.2,15.6-0.9
                            c1.1,0.1,2.2,0.1,3.3,0.3c4,0.4,7.9,1.3,11.4,3.1c0,0,0,0,0-0.1c0.1,0,0.1,0,0.1,0.1C1864.3,348.3,1867.3,355.7,1870.3,363.1z"
                        />
                    </g>
                    <g className="abutment hEmpty hIntact hRoot" style={{visibility: tooth28Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth28Diagnozis.abutment ? 1 : 0}}>
                        <path className="st25" d="M1772.7,370.3c5.6-7.8,12.8-14.3,21.2-19c8-4.5,16.7-7.3,25.6-9.5c9.7-2.4,19.7-4,29.7-3.1
                            c0.2,0,0.5,0,0.7,0.1c3.9,0.4,7.8,1.3,11.2,3c0,0,0,0,0,0l-35.5-12l-31.5,4.5L1772.7,370.3z"
                        />
                        <path className="st26" d="M1772.5,371.1c0.2,10.3,3.9,25.6,6.2,32.8c1.1,3.4,2.3,6.9,3.5,10.3c1.2,3.4,2.5,6.8,3.8,10.2
                            c2.4-2.7,5.1-5.1,8-7.3c4.1-3.1,8.6-5.7,13.5-7.7c3,0.5,5.8,1.6,8.2,3.3c1.3,1,2.5,2.1,3.5,3.3c0.1-0.1,0.5-0.3,0.5-0.3
                            c4.3-2.3,8.5-4.8,12.5-7.5c4-2.6,8.1-5.5,13-5.6c3.7-0.1,7.1,1.4,10.4,3c3.5,1.6,6.9,3.3,10.3,5.1c1.5-7.8,2.7-15.6,3.4-23.5
                            c0.8-7.7,1.1-15.4,1.1-23.1c-3-7.4-6-14.8-9-22.2c-0.1,0-0.2-0.1-0.3-0.1c-3.5-1.7-7.3-2.5-11.2-3c-0.2,0-0.5-0.1-0.7-0.1
                            c-10-0.9-19.9,0.7-29.7,3.1c-8.9,2.2-17.6,5-25.6,9.5c-8.3,4.7-15.6,11.2-21.2,19C1772.6,370.6,1772.6,370.9,1772.5,371.1z"
                        />
                    </g>
                    {/* ФОРМУВАЧ */}
                    <g className="shaper hEmpty hIntact hRoot" style={{visibility: 'hidden', opacity: 0}} >
                        <path className="st44" d="M1790.02 376.322C1789.94 378.803 1792.12 380.755 1794.58 380.407L1843.34 373.498C1845.8 373.15 1847.35 370.672 1846.58 368.31L1834.31 330.235C1833.71 328.378 1831.86 327.224 1829.93 327.504L1794.68 332.616C1792.76 332.895 1791.32 334.511 1791.26 336.45L1790.02 376.322Z"></path>
                    </g>
                    {/* IMPLANT/CULTTAB */}
                    <g className="implant hEmpty hIntact hRoot" style={{visibility: tooth28Diagnozis.abutment || tooth28Diagnozis.implant || tooth28Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <path className="st18" d="M1785.3,335.7l52.1-7.5c-3.1-15.8-6.9-31.4-11.5-46.9c-4.5-15.1-9.7-30.2-15.6-45c-4.1-3-9.9-4.4-15.6-3.5
                            c-6.4,1-11.9,4.6-14.9,9.4c-0.8,15-0.8,30,0,45C1780.6,303.5,1782.5,319.7,1785.3,335.7z"
                        />
                        <line className="st19" x1="1778" y1="319.5" x2="1840" y2="319.4" />
                        <line className="st19" x1="1774.5" y1="301.4" x2="1836.5" y2="301.4" />
                        <line className="st19" x1="1772.2" y1="283.3" x2="1834.3" y2="283.2" />
                        <line className="st19" x1="1768.7" y1="265.2" x2="1830.8" y2="265.2" />
                        <line className="st19" x1="1765.2" y1="247.2" x2="1827.3" y2="247.2" />
                    </g>
                    <g className="toutline hRoot hImplant hEmpty" style={{visibility: !tooth28Diagnozis.culttab && !tooth28Diagnozis.abutment && !tooth28Diagnozis.implant && !tooth28Diagnozis.shaper && !tooth28Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1882.1,389.5c-0.3-6.3-1.3-12.5-2.9-18.5c-1.1-4-2.5-7.9-4.1-11.7
                            c-1.5-3.4-3.2-6.8-5.1-10c-1.4-2.5-3.3-4.7-5.6-6.4c-4.2-3.2-9.4-4.5-14.7-5.1c-10.2-1.1-20.4,0.6-30.4,3
                            c-8.9,2.2-17.7,5-25.6,9.5c-8.6,4.9-16.1,11.7-21.8,19.8c-0.3,1.7-0.6,3.4-0.8,5.1c-1.4,10.1-1.5,20.4-0.5,30.6
                            c0.6,6.1,1.7,12.1,3.2,18.1c1.5,4.1,3.8,8,6.6,11.4c2.5,3,5.4,5.6,8.7,7.8l4.2-1c1.2-2.3,2.8-4.4,4.8-6.1c0.6-0.6,1.3-1.1,2-1.5
                            c6-4.1,14.1-5.1,18.8-10.8c1.3-1.5,2.2-3.4,2.7-5.3c1.5,2.2,3.6,4,6.2,4.9c3.1,1.1,6.4,1,9.6,1.6c3.8,0.7,7.4,2.4,10.4,4.8
                            l7.9-0.4l5.5-8.5l1.1-2.4l5.7-11.9c0.9-1.8,1.6-3.8,2.1-5.8c0.6-3,0.7-6,0.1-9l1.9,0.7c-0.1,1.9-0.4,3.8-0.8,5.6
                            c-0.9,4.8-2.4,9.5-4.5,14c-1.2,2.5-2.5,5-4,7.3l5.1,3.7l4.8,0c3.2-4.8,5.6-10,7.2-15.5C1881.6,401.8,1882.3,395.7,1882.1,389.5z"></path>
                    </g>
                    {/*КЛИНОВИДНИЙ ЕФЕКТ/ПРИШИЙКОВА ПЛОМБА/ПРИШИЙКОВИЙ КАРІЄС*/}
                    <g className="wedge-shaped" style={{visibility: !tooth28Diagnozis.culttab && !tooth28Diagnozis.abutment ? 'inherit' : 'hidden'}}>
                        <path className="st7 st59" d="M1879.2 371C1880.8 377 1881.8 383.2 1882.1 389.5C1882.3 395.7 1881.6 401.8 1879.9 407.5C1878.3 413 1875.9 418.2 1872.7 423H1867.9L1862.8 419.3C1864.3 417 1865.6 414.5 1866.8 412C1868.9 407.5 1870.4 402.8 1871.3 398C1871.7 396.2 1872 394.3 1872.1 392.4L1870.2 391.7C1870.8 394.7 1870.7 397.7 1870.1 400.7C1869.6 402.7 1868.9 404.7 1868 406.5L1862.3 418.4L1861.2 420.8L1855.7 429.3L1847.8 429.7C1844.8 427.3 1841.2 425.6 1837.4 424.9C1836.22 424.679 1835.03 424.553 
                            1833.84 424.428C1831.8 424.211 1829.76 423.995 1827.8 423.3C1825.2 422.4 1823.1 420.6 1821.6 418.4C1821.1 420.3 1820.2 422.2 1818.9 423.7C1816.05 427.155 1811.95 428.883 1807.83 430.622C1805.15 431.751 1802.46 432.885 1800.1 434.5C1799.4 434.9 1798.7 435.4 1798.1 436C1796.1 437.7 1794.5 439.8 1793.3 442.1L1789.1 443.1C1785.8 440.9 1782.9 438.3 1780.4 435.3C1777.6 431.9 1775.3 428 1773.8 423.9C1772.3 417.9 1771.2 411.9 1770.6 405.8C1769.6 395.6 1769.7 385.3 1771.1 375.2C1771.3 373.501 1771.6 371.802 1771.9 370.103L1771.9 370.1C1777.6 362 1785.1 355.2 1793.7 
                            350.3C1801.6 345.8 1810.4 343 1819.3 340.8C1829.3 338.4 1839.5 336.7 1849.7 337.8C1855 338.4 1860.2 339.7 1864.4 342.9C1866.7 344.6 1868.6 346.8 1870 349.3C1871.9 352.5 1873.6 355.9 1875.1 359.3C1876.7 363.1 1878.1 367 1879.2 371ZM1864.81 352.288C1863.6 350.327 1861.95 348.602 1859.95 347.268C1856.3 344.759 1851.79 343.739 1847.18 343.268C1838.32 342.406 1829.46 343.739 1820.78 345.621C1813.05 347.347 1805.4 349.543 1798.54 353.072C1792.29 356.288 1784.87 361.193 1781.12 366.614C1780.38 367.687 1779.92 368.457 1779.6 369.34C1779.14 370.612 1780.36 371.781 1781.69 371.566L1865.24 358.129C1866.59 
                            357.912 1867.33 356.427 1866.64 355.242C1866.06 354.24 1865.45 353.252 1864.81 352.288Z"
                        />
                        <path className={`st7 ${tooth28Diagnozis?.cervical_caries ? 'cervical-caries' : ''}`}
                            d="M1859.95 347.268C1861.95 348.602 1863.6 350.327 1864.81 352.288C1865.45 353.252 1866.06 354.24 1866.64 355.242C1867.33 356.427 1866.59 357.912 1865.24 358.129L1781.69 371.566C1780.36 371.781 1779.14 370.612 1779.6 369.34C1779.92 368.457 1780.38 367.687 1781.12 366.614C1784.87 361.193 1792.29 356.288 1798.54 353.072C1805.4 349.543 1813.05 
                            347.347 1820.78 345.621C1829.46 343.739 1838.32 342.406 1847.18 343.268C1851.79 343.739 1856.3 344.759 1859.95 347.268Z"
                        />
                        <path className={
                                `st60
                                    ${(tooth28Diagnozis?.wedge_shaped_defect) ? `shaped-defect-stroke` : ""}
                                    ${(tooth28Diagnozis?.seal_cervical) ? `seal-cervical-stroke` : ""}
                                    ${tooth28Diagnozis.seal_cervical_color}
                                `
                            } 
                            d="M1859.95 347.268C1861.95 348.602 1863.6 350.327 1864.81 352.288C1865.45 353.252 1866.06 354.24 1866.64 355.242C1867.33 356.427 1866.59 357.912 1865.24 358.129L1781.69 371.566C1780.36 371.781 1779.14 370.612 1779.6 369.34C1779.92 368.457 1780.38 367.687 1781.12 366.614C1784.87 361.193 1792.29 356.288 1798.54 353.072C1805.4 349.543 1813.05 347.347 1820.78 345.621C1829.46 343.739 1838.32 342.406 1847.18 343.268C1851.79 343.739 1856.3 
                            344.759 1859.95 347.268Z"
                        />
                    </g>
                    {/*TARTAR*/}
                    <g className="tartar" style={{visibility: 'inherit', opacity: teethDiagnozis.tooth28.tartar ? 1 : 0}}>
                        <path className="st61 level2" d="M1770 388.5L1771 388L1772 386.5L1773 384V381L1774.5 376.5V373L1776.5 369L1779.5 366L1781 363.5L1783 360.5L1787 358L1790.5 354.5L1793 353L1796.5 352L1800 350.5L1803.5 348L1808 346.5H1811.5L1817.5 343.5H1819H1823L1827.5 341H1834H1837.5L1842 340L1844.5 341H1851L1854.5 342L1859 343.5L1862 346.5L1865.5 348L1867.5 352L1869 355.5L1871.5 358V359.5L1872.5 362L1874 363.5V366L1875.5 368L1876.5 369C1877 369.333 1878.2 370.1 1879 370.5V368L1878.5 366L1877.5 363.5V362V359.5L1876.5 358L1875.5 355.5L1874.5 353L1871.5 348L1871 346L1869 343L1867 340L1865.5 337.5L1863.5 335L1862 331.5L1859 328.5L1857 326L1854.5 322.5L1852.5 322L1848.5 321.5L1844.5 319.5L1839.5 319L1836 320.5L1831.5 318.5H1828.5L1824.5 320.5H1820L1816.5 321.5L1812 321L1808.5 321.5L1805 323.5L1801 324L1797.5 326.5L1794 327.5H1790.5L1787.5 330L1783 331.5L1782 335L1778.5 340V344.5L1776.5 348V352L1775.5 354.5L1774 358.5L1773 362L1771 365L1770 370.5V373L1769 377V380V384V385.5V387L1770 388.5Z"></path>
                        <path className="st61 level1" d="M1770 388.5L1771 388L1772 386.5L1773 384V381L1774.5 376.5V373L1776.5 369L1779.5 366L1781 363.5L1783 360.5L1787 358L1790.5 354.5L1793 353L1796.5 352L1800 350.5L1803.5 348L1808 346.5H1811.5L1817.5 343.5H1819H1823L1827.5 341H1834H1837.5L1842 340L1844.5 341H1851L1854.5 342L1859 343.5L1862 346.5L1865.5 348L1867.5 352L1869 355.5L1871.5 358V359.5L1872.5 362L1874 363.5V366L1875.5 368L1876.5 369C1877 369.333 1878.2 370.1 1879 370.5V369L1878 366.5L1877.5 363.5L1876.5 360.5L1874 357L1872.5 353L1871.5 349.5L1869 346.5L1866.5 342L1864.5 340L1862 336L1858 334.5H1854.5L1848 332.5H1843L1838.5 331H1836H1831L1826.5 332.5H1819L1814.5 334.5H1811.5L1806.5 336L1802 337.5L1798 340L1794.5 342L1789.5 343.5L1786 346.5L1782 348L1778.5 350.5L1776.5 353V355.5L1775.5 358L1773 362V366L1771 370.5L1770 374.5L1771 376.5L1770 378.5V382L1769.5 386L1770 388.5Z"></path>
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
                            <path className="st58" 
                                d="M1790.9,396.2c0.7,3.6,1.3,7.1,1.7,9.7c0.8,4.6,3.9,21.6,5.5,30.2c0.6-0.6,1.3-1.1,2-1.5
                                c6-4.1,14.1-5.1,18.8-10.8c1.3-1.5,2.2-3.4,2.7-5.3c1.5,2.2,3.6,4,6.2,4.9c3.1,1.1,6.4,1,9.6,1.6c3.8,0.7,7.4,2.4,10.4,4.8
                                l7.9-0.4l5.5-8.5l1.1-2.4c-0.7-9.3-1.3-18.6-1-27.9c0.1-3.1,0.2-6.3,0.6-9.5c-10-7-27.3-6.7-43.6-3.3
                                C1805.4,380.6,1795.5,390.6,1790.9,396.2z"
                            />
                            <path className={
                                    `st8 caries-center
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth28.caries_center ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth28.seal_center ? `seal-fill ${teethDiagnozis.tooth28.seal_center_color}` : ''}
                            `}
                                d="M1790.9,396.2c0.7,3.6,1.3,7.1,1.7,9.7c0.8,4.6,3.9,21.6,5.5,30.2c0.6-0.6,1.3-1.1,2-1.5
                                c6-4.1,14.1-5.1,18.8-10.8c1.3-1.5,2.2-3.4,2.7-5.3c1.5,2.2,3.6,4,6.2,4.9c3.1,1.1,6.4,1,9.6,1.6c3.8,0.7,7.4,2.4,10.4,4.8
                                l7.9-0.4l5.5-8.5l1.1-2.4c-0.7-9.3-1.3-18.6-1-27.9c0.1-3.1,0.2-6.3,0.6-9.5c-10-7-27.3-6.7-43.6-3.3
                                C1805.4,380.6,1795.5,390.6,1790.9,396.2z"
                            />
                        </g>
                        {/*КАРИЕС ПРАВО*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                        >
                            <path className="st58" d="M1770.7,405.9c0.6,6.1,1.7,12.1,3.2,18.1c1.5,4.1,3.8,8,6.6,11.4c2.5,3,5.4,5.6,8.7,7.8l4.2-1
                                c1.2-2.3,2.8-4.4,4.8-6.1c-1.6-8.6-4.7-25.6-5.5-30.2c-0.4-2.6-1-6.1-1.7-9.7c-1-5.2-2.4-10.5-4-13.3c-2.4-4-8.3-6.3-15.7-7.7
                                C1769.8,385.4,1769.6,395.7,1770.7,405.9z"
                            />
                            <path className={
                                    `st8 caries-center
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth28.caries_left ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth28.seal_left ? `seal-fill ${teethDiagnozis.tooth28.seal_left_color}` : ''}
                            `} 
                                d="M1770.7,405.9c0.6,6.1,1.7,12.1,3.2,18.1c1.5,4.1,3.8,8,6.6,11.4c2.5,3,5.4,5.6,8.7,7.8l4.2-1
                                c1.2-2.3,2.8-4.4,4.8-6.1c-1.6-8.6-4.7-25.6-5.5-30.2c-0.4-2.6-1-6.1-1.7-9.7c-1-5.2-2.4-10.5-4-13.3c-2.4-4-8.3-6.3-15.7-7.7
                                C1769.8,385.4,1769.6,395.7,1770.7,405.9z"
                            />
                        </g>
                        {/*КАРИЕС ЛЕВО*/}
                        <g className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st58" d="M1870.1,391.9l1.9,0.7c-0.1,1.9-0.4,3.8-0.8,5.6c-0.9,4.8-2.4,9.5-4.5,14c-1.2,2.5-2.5,5-4,7.3l5.1,3.7l4.8,0
                                c3.2-4.8,5.6-10,7.2-15.5c1.7-5.9,2.5-12.1,2.2-18.2c-0.3-6.3-1.3-12.5-2.9-18.5c-1.1-4-2.5-7.9-4.1-11.7
                                c-0.9,0.3-1.7,0.6-2.4,0.9c-5.1,2.1-6.4,5.4-9.2,13.5c-0.8,2.4-1.3,4.9-1.7,7.5c-0.4,3.2-0.5,6.4-0.6,9.5
                                c-0.3,9.3,0.4,18.6,1,27.9l5.7-11.9c0.9-1.8,1.6-3.8,2.1-5.8C1870.6,397.9,1870.6,394.8,1870.1,391.9z"
                            />
                            <path className={`
                                st8 target caries-right
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth28.caries_right ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth28.seal_right ? `seal-fill ${teethDiagnozis.tooth28.seal_right_color}` : ''}
                            `} 
                                d="M1870.1,391.9l1.9,0.7c-0.1,1.9-0.4,3.8-0.8,5.6c-0.9,4.8-2.4,9.5-4.5,14c-1.2,2.5-2.5,5-4,7.3l5.1,3.7l4.8,0
                                c3.2-4.8,5.6-10,7.2-15.5c1.7-5.9,2.5-12.1,2.2-18.2c-0.3-6.3-1.3-12.5-2.9-18.5c-1.1-4-2.5-7.9-4.1-11.7
                                c-0.9,0.3-1.7,0.6-2.4,0.9c-5.1,2.1-6.4,5.4-9.2,13.5c-0.8,2.4-1.3,4.9-1.7,7.5c-0.4,3.2-0.5,6.4-0.6,9.5
                                c-0.3,9.3,0.4,18.6,1,27.9l5.7-11.9c0.9-1.8,1.6-3.8,2.1-5.8C1870.6,397.9,1870.6,394.8,1870.1,391.9z"
                            />
                        </g>
                        {/*КАРИЕС У КОРНЯ*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'bottom');
                            }}
                        >
                            <path className="st58" d="M1771.2,375.3c7.4,1.3,13.3,3.7,15.7,7.7c1.7,2.8,3,8.1,4,13.3c4.6-5.6,14.5-15.7,27.3-18.4
                                c16.2-3.4,33.5-3.7,43.6,3.3c0.3-2.6,0.8-5.1,1.7-7.5c2.8-8.1,4.1-11.4,9.2-13.5c0.7-0.3,1.5-0.6,2.4-0.9c-1.5-3.4-3.2-6.8-5.1-10
                                c-1.4-2.5-3.3-4.7-5.6-6.4c-4.2-3.2-9.4-4.5-14.7-5.1c-10.2-1.1-20.4,0.6-30.4,3c-8.9,2.2-17.7,5-25.6,9.5
                                c-8.6,4.9-16.1,11.7-21.8,19.8C1771.7,371.9,1771.4,373.6,1771.2,375.3z"
                            />
                            <path className={
                                `st8 caries-bottom
                                ${diagnozis === 'caries' ? 'caries-stroke' : ''}
                                ${tooth28Diagnozis.caries_bottom ? 'caries-fill' : ''}
                                ${tooth28Diagnozis.seal_bottom ? `seal-fill ${teethDiagnozis.tooth28.seal_bottom_color}` : ''}
                            `} 
                                d="M1771.2,375.3c7.4,1.3,13.3,3.7,15.7,7.7c1.7,2.8,3,8.1,4,13.3c4.6-5.6,14.5-15.7,27.3-18.4
                                c16.2-3.4,33.5-3.7,43.6,3.3c0.3-2.6,0.8-5.1,1.7-7.5c2.8-8.1,4.1-11.4,9.2-13.5c0.7-0.3,1.5-0.6,2.4-0.9c-1.5-3.4-3.2-6.8-5.1-10
                                c-1.4-2.5-3.3-4.7-5.6-6.4c-4.2-3.2-9.4-4.5-14.7-5.1c-10.2-1.1-20.4,0.6-30.4,3c-8.9,2.2-17.7,5-25.6,9.5
                                c-8.6,4.9-16.1,11.7-21.8,19.8C1771.7,371.9,1771.4,373.6,1771.2,375.3z" 
                            />
                        </g>
                        <g className="with top-line">
                            {/*Черточка лево низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth28Diagnozis.seal_right && !tooth28Diagnozis.seal_top && !tooth28Diagnozis.seal_center) ||
                                        (tooth28Diagnozis.seal_right && tooth28Diagnozis.seal_top && !tooth28Diagnozis.seal_center) ||
                                        (!tooth28Diagnozis.seal_right && tooth28Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                                d="M1861.5 380.999C1861.59 386.832 1861.81 401.599 1862 413.999"
                            />
                            {/*Черточка лево верх*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth28Diagnozis.seal_right && !tooth28Diagnozis.seal_bottom) ||
                                        (!tooth28Diagnozis.seal_right && tooth28Diagnozis.seal_bottom && !tooth28Diagnozis.seal_center) ||
                                        (!tooth28Diagnozis.seal_right && tooth28Diagnozis.seal_bottom && tooth28Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1861.5 380.999C1861.67 375.499 1863.7 363.799 1870.5 360.999"
                            />
                            {/*Черточка середина*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth28Diagnozis.seal_bottom && !tooth28Diagnozis.seal_center) ||
                                        (tooth28Diagnozis.seal_right && tooth28Diagnozis.seal_left && tooth28Diagnozis.seal_center && !tooth28Diagnozis.seal_bottom) ||
                                        (!tooth28Diagnozis.seal_bottom && !tooth28Diagnozis.seal_top && tooth28Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                                d="M1861.5 380.999C1845.5 372.5 1805.8 379.999 1791 395.999"
                            />
                            {/*Черточка право верх*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth28Diagnozis.seal_left && !tooth28Diagnozis.seal_bottom) ||
                                        (!tooth28Diagnozis.seal_left && tooth28Diagnozis.seal_bottom && !tooth28Diagnozis.seal_center) ||
                                        (!tooth28Diagnozis.seal_left && tooth28Diagnozis.seal_bottom && tooth28Diagnozis.seal_center)
                                    )
                                        ? 5 : 0
                                }} 
                                d="M1791 395.999C1791 390.832 1788.1 379.699 1776.5 376.499"
                            />
                            {/*Черточка право низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth28Diagnozis.seal_left && !tooth28Diagnozis.seal_top && !tooth28Diagnozis.seal_center) ||
                                        (tooth28Diagnozis.seal_left && tooth28Diagnozis.seal_top && !tooth28Diagnozis.seal_center) ||
                                        (!tooth28Diagnozis.seal_left && tooth28Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1791 395.999L1797 430.999" 
                            />
                        </g>
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir"
                            style={{
                                visibility: tooth28Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth28Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className={`vinir-fill ${tooth28Diagnozis.vinir_color}`}
                                d="M1882.1 389.5C1881.8 383.2 1880.8 377 1879.2 371C1878.1 367 1876.7 363.1 1875.1 359.3C1873.6 355.9 1871.9 352.5 1870 349.3C1868.6 346.8 1866.7 344.6 1864.4 342.9C1860.2 339.7 1855 338.4 1849.7 337.8C1839.5 336.7 1829.3 338.4 1819.3 340.8C1810.4 343 1801.6 345.8 1793.7 350.3C1785.1 
                                355.2 1777.6 362 1771.9 370.1C1771.6 371.8 1771.3 373.5 1771.1 375.2C1769.7 385.3 1769.6 395.6 1770.6 405.8C1771.2 411.9 1772.3 417.9 1773.8 423.9C1775.3 428 1777.6 431.9 1780.4 435.3C1782.9 438.3 1785.8 440.9 1789.1 443.1L1793.3 442.1C1794.5 439.8 1796.1 437.7 1798.1 436C1798.7 435.4 1799.4 434.9 1800.1 434.5C1806.1 430.4 1814.2 429.4 1818.9 423.7C1820.2 422.2 1821.1 420.3 1821.6 418.4C1823.1 420.6 1825.2 422.4 
                                1827.8 423.3C1830.9 424.4 1834.2 424.3 1837.4 424.9C1841.2 425.6 1844.8 427.3 1847.8 429.7L1855.7 429.3L1861.2 420.8L1862.3 418.4L1868 406.5C1868.9 404.7 1869.6 402.7 1870.1 400.7C1870.7 397.7 1870.8 394.7 1870.2 391.7L1872.1 392.4C1872 394.3 1871.7 396.2 1871.3 398C1870.4 402.8 1868.9 407.5 1866.8 412C1865.6 414.5 1864.3 417 1862.8 419.3L1867.9 423H1872.7C1875.9 418.2 
                                1878.3 413 1879.9 407.5C1881.6 401.8 1882.3 395.7 1882.1 389.5Z"
                            />
                        </g>
                    </g>
                    {/* ТИМЧАСОВА/КЕРАМІЧНА/МЕТАЛОКЕРАМІЧНА КОРОНКА*/}
                    <g className="crown"
                        style={{
                            visibility: tooth28Diagnozis.temporary_crown || tooth28Diagnozis.ceramic_crown || tooth28Diagnozis.mceramic_crown || tooth28Diagnozis.metalic_crown || tooth28Diagnozis.zirconia_crown ? 'inherit' : 'hidden',
                            opacity: tooth28Diagnozis.temporary_crown || tooth28Diagnozis.ceramic_crown || tooth28Diagnozis.mceramic_crown || tooth28Diagnozis.metalic_crown || tooth28Diagnozis.zirconia_crown ? 1 : 0
                        }}
                    >
                        <path className={`
                                temporary-crown crown-fill
                                ${diagnozis}
                                ${tooth28Diagnozis.ceramic_crown_color}
                                ${tooth28Diagnozis.mceramic_crown_color}
                                ${tooth28Diagnozis.metalic_crown_color}
                                ${tooth28Diagnozis.zirconia_crown_color}
                            `}
                            d="M1882.1,389.5c-0.3-6.3-1.3-12.5-2.9-18.5c-1.1-4-2.5-7.9-4.1-11.7
                            c-1.5-3.4-3.2-6.8-5.1-10c-1.4-2.5-3.3-4.7-5.6-6.4c-4.2-3.2-9.4-4.5-14.7-5.1c-10.2-1.1-20.4,0.6-30.4,3
                            c-8.9,2.2-17.7,5-25.6,9.5c-8.6,4.9-16.1,11.7-21.8,19.8c-0.3,1.7-0.6,3.4-0.8,5.1c-1.4,10.1-1.5,20.4-0.5,30.6
                            c0.6,6.1,1.7,12.1,3.2,18.1c1.5,4.1,3.8,8,6.6,11.4c2.5,3,5.4,5.6,8.7,7.8l4.2-1c1.2-2.3,2.8-4.4,4.8-6.1c0.6-0.6,1.3-1.1,2-1.5
                            c6-4.1,14.1-5.1,18.8-10.8c1.3-1.5,2.2-3.4,2.7-5.3c1.5,2.2,3.6,4,6.2,4.9c3.1,1.1,6.4,1,9.6,1.6c3.8,0.7,7.4,2.4,10.4,4.8
                            l7.9-0.4l5.5-8.5l1.1-2.4l5.7-11.9c0.9-1.8,1.6-3.8,2.1-5.8c0.6-3,0.7-6,0.1-9l1.9,0.7c-0.1,1.9-0.4,3.8-0.8,5.6
                            c-0.9,4.8-2.4,9.5-4.5,14c-1.2,2.5-2.5,5-4,7.3l5.1,3.7l4.8,0c3.2-4.8,5.6-10,7.2-15.5C1881.6,401.8,1882.3,395.7,1882.1,389.5z"
                        />
                    </g>
                </g>
            </g>
        </>
    )
}
