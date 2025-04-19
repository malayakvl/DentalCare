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
import PeriodontitStage48 from './periodontit38';
import PeriodontitStage38 from './periodontit38';


export default function Tooth38() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth38Diagnozis = teethDiagnozis.tooth38;
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
                teethDiagnozis.tooth38.caries_bottom = !teethDiagnozis.tooth38.caries_bottom;
            }
            if (toothPart === 'center') {
                teethDiagnozis.tooth38.caries_center = !teethDiagnozis.tooth38.caries_center;
            }
            if (toothPart === 'left') {
                teethDiagnozis.tooth38.caries_left = !teethDiagnozis.tooth38.caries_left;
            }
            if (toothPart === 'right') {
                teethDiagnozis.tooth38.caries_right = !teethDiagnozis.tooth38.caries_right;
            }
            if (toothPart === 'top') {
                teethDiagnozis.tooth38.caries_top = !teethDiagnozis.tooth38.caries_top;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'seal') {
            if (toothPart === 'center') {
                if (teethDiagnozis.tooth38.seal_center_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth38.seal_center_color = sealColor1;
                    teethDiagnozis.tooth38.seal_center = true;
                } else if (teethDiagnozis.tooth38.seal_center_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth38.seal_center_color = sealColor2;
                    teethDiagnozis.tooth38.seal_center = true;
                } else if (teethDiagnozis.tooth38.seal_center_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth38.seal_center_color = sealColor3;
                    teethDiagnozis.tooth38.seal_center = true;
                } else {
                    teethDiagnozis.tooth38.seal_center = !teethDiagnozis.tooth38.seal_center;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'bottom') {
                if (teethDiagnozis.tooth38.seal_bottom_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth38.seal_bottom_color = sealColor1;
                    teethDiagnozis.tooth38.seal_bottom = true;
                } else if (teethDiagnozis.tooth38.seal_bottom_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth38.seal_bottom_color = sealColor2;
                    teethDiagnozis.tooth38.seal_bottom = true;
                } else if (teethDiagnozis.tooth38.seal_bottom_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth38.seal_bottom_color = sealColor3;
                    teethDiagnozis.tooth38.seal_bottom = true;
                } else {
                    teethDiagnozis.tooth38.seal_bottom = !teethDiagnozis.tooth38.seal_bottom;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'left') {
                if (teethDiagnozis.tooth38.seal_left_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth38.seal_left_color = sealColor1;
                    teethDiagnozis.tooth38.seal_left = true;
                } else if (teethDiagnozis.tooth38.seal_left_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth38.seal_left_color = sealColor2;
                    teethDiagnozis.tooth38.seal_left = true;
                } else if (teethDiagnozis.tooth38.seal_left_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth38.seal_left_color = sealColor3;
                    teethDiagnozis.tooth38.seal_left = true;
                } else {
                    teethDiagnozis.tooth38.seal_left = !teethDiagnozis.tooth38.seal_left;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'right') {
                if (teethDiagnozis.tooth38.seal_right_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth38.seal_right_color = sealColor1;
                    teethDiagnozis.tooth38.seal_right = true;
                } else if (teethDiagnozis.tooth38.seal_right_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth38.seal_right_color = sealColor2;
                    teethDiagnozis.tooth38.seal_right = true;
                } else if (teethDiagnozis.tooth38.seal_right_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth38.seal_right_color = sealColor3;
                    teethDiagnozis.tooth38.seal_right = true;
                } else {
                    teethDiagnozis.tooth38.seal_right = !teethDiagnozis.tooth38.seal_right;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'top') {
                if (teethDiagnozis.tooth38.seal_top_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth38.seal_top_color = sealColor1;
                    teethDiagnozis.tooth38.seal_top = true;
                } else if (teethDiagnozis.tooth38.seal_top_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth38.seal_top_color = sealColor2;
                    teethDiagnozis.tooth38.seal_top = true;
                } else if (teethDiagnozis.tooth38.seal_top_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth38.seal_top_color = sealColor3;
                    teethDiagnozis.tooth38.seal_top = true;
                } else {
                    teethDiagnozis.tooth38.seal_top = !teethDiagnozis.tooth38.seal_top;
                }
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'wedge_shaped_defect') {
            if (teethDiagnozis.tooth38.wedge_shaped_defect_color != wsDefectColor && wsDefectColor != '') {
                teethDiagnozis.tooth38.wedge_shaped_defect_color = wsDefectColor;
            } else {
                teethDiagnozis.tooth38.wedge_shaped_defect_color = !teethDiagnozis.tooth38.wedge_shaped_defect_color;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
    }
 
    return (
        <>
            <g id="38" className="df-tooth-text"  style={{opacity: 1}}>
                <text transform="matrix(1 0 0 1 1809.8652 842.0025)" className={`st3 st4 st5 ${toothActive.tooth38.active ? 'num-active' : ''}`}>38</text>
            </g>
            <g className={`f-tooth-active`}
                onMouseOver={() => {
                    (!toothActive && !allTeeth) && document.getElementById('38').classList.add('tooth-number-hover')
                }}
                onMouseLeave={() => {
                    (!toothActive && !allTeeth) && document.getElementById('38').classList.remove('tooth-number-hover')
                }}
                onClick={() => {
                    dispatch(setSelectedToothNumber(38));
                    if (toothActive.tooth38.active) {
                        dispatch(setNewToothActive({tooth38: {active: true}}))
                    } else {
                        dispatch(setDisactiveAll());
                        dispatch(setNewToothActive({tooth38: {active: true}}))
                    }
                    if (diagnozis) {
                        if (diagnozis === 'change_color')
                            teethDiagnozis.tooth38.change_color = !teethDiagnozis.tooth38.change_color;
                        else if (diagnozis === 'fissure')
                            teethDiagnozis.tooth38.fissure = !teethDiagnozis.tooth38.fissure;
                        else if (diagnozis === 'caries')
                            teethDiagnozis.tooth38.caries = !teethDiagnozis.tooth38.caries;
                        else if (diagnozis === 'cervical_caries')
                            teethDiagnozis.tooth38.cervical_caries = !teethDiagnozis.tooth38.cervical_caries;
                        else if (diagnozis === 'wedge_shaped_defect')
                            teethDiagnozis.tooth38.wedge_shaped_defect = !teethDiagnozis.tooth38.wedge_shaped_defect;
                        else if (diagnozis === 'tartar')
                            teethDiagnozis.tooth38.tartar = !teethDiagnozis.tooth38.tartar;
                        else if (diagnozis === 'pulpit') {
                            teethDiagnozis.tooth38.pulpit = !teethDiagnozis.tooth38.pulpit;
                            teethDiagnozis.tooth38.channel_class = teethDiagnozis.tooth38.pulpit ? 'pulpit' : ''
                        } else if (diagnozis === 'channel_not_sealed') {
                            teethDiagnozis.tooth38.channel_not_sealed = !teethDiagnozis.tooth38.channel_not_sealed;
                            teethDiagnozis.tooth38.channel_class = teethDiagnozis.tooth38.channel_not_sealed ? 'channel-not-sealed' : '';
                        } else if (diagnozis === 'channel_top_sealed') {
                            teethDiagnozis.tooth38.channel_top_sealed = !teethDiagnozis.tooth38.channel_top_sealed;
                            teethDiagnozis.tooth38.channel_class = teethDiagnozis.tooth38.channel_top_sealed ? 'channel-top-sealed' : '';
                        } else if (diagnozis === 'channel_part_sealed') {
                            teethDiagnozis.tooth38.channel_part_sealed = !teethDiagnozis.tooth38.channel_part_sealed;
                            teethDiagnozis.tooth38.channel_class = teethDiagnozis.tooth38.channel_part_sealed ? 'channel-part-sealed' : '';
                        } else if (diagnozis === 'periodontit') {
                            if (teethDiagnozis.tooth38.periodontit_stage !== subDiagnozis) {
                                teethDiagnozis.tooth38.periodontit_stage = subDiagnozis
                                teethDiagnozis.tooth38.periodontit = true;
                            } else {
                                teethDiagnozis.tooth38.periodontit = !teethDiagnozis.tooth38.periodontit;
                            }
                            teethDiagnozis.tooth38.channel_class = teethDiagnozis.tooth38.periodontit ? 'periodontit' : '';
                            if (!teethDiagnozis.tooth38.periodontit) dispatch(setSubDiagnosis(''));
                        } else if (diagnozis === 'seal') {
                            teethDiagnozis.tooth38.seal = !teethDiagnozis.tooth38.seal;
                        } else if (diagnozis === 'seal_cervical') {
                            if (!teethDiagnozis.tooth38.seal_cervical && teethDiagnozis.tooth38.seal_cervical_color === "") {
                                teethDiagnozis.tooth38.seal_cervical = true;
                                teethDiagnozis.tooth38.seal_cervical_color = wsDefectColor;
                            } else if (teethDiagnozis.tooth38.seal_cervical && teethDiagnozis.tooth38.seal_cervical_color != wsDefectColor) {
                                teethDiagnozis.tooth38.seal_cervical_color = wsDefectColor;
                            } else {
                                teethDiagnozis.tooth38.seal_cervical = false;
                                teethDiagnozis.tooth38.seal_cervical_color = "";
                            }
                        } else if (diagnozis === 'vinir') {
                            if (!teethDiagnozis.tooth38.vinir && teethDiagnozis.tooth38.vinir_color === "") {
                                teethDiagnozis.tooth38.vinir = true;
                                teethDiagnozis.tooth38.vinir_color = vinirColor;
                            } else if (teethDiagnozis.tooth38.vinir && teethDiagnozis.tooth38.vinir_color != vinirColor) {
                                teethDiagnozis.tooth38.vinir_color = vinirColor;
                            } else {
                                teethDiagnozis.tooth38.vinir = false;
                                teethDiagnozis.tooth38.vinir_color = "";
                            }
                        } else if (diagnozis === 'temporary_crown') {
                            teethDiagnozis.tooth38.temporary_crown = !teethDiagnozis.tooth38.temporary_crown;
                        } else if (diagnozis === 'ceramic_crown') {
                            if (!teethDiagnozis.tooth38.ceramic_crown && teethDiagnozis.tooth38.ceramic_crown_color === "") {
                                teethDiagnozis.tooth38.ceramic_crown = true;
                                teethDiagnozis.tooth38.ceramic_crown_color = ceramicCrownColor;
                            } else if (teethDiagnozis.tooth38.ceramic_crown && teethDiagnozis.tooth38.ceramic_crown_color != ceramicCrownColor) {
                                teethDiagnozis.tooth38.ceramic_crown_color = ceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth38.ceramic_crown = false;
                                teethDiagnozis.tooth38.ceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'mceramic_crown') {
                            if (!teethDiagnozis.tooth38.mceramic_crown && teethDiagnozis.tooth38.mceramic_crown_color === "") {
                                teethDiagnozis.tooth38.mceramic_crown = true;
                                teethDiagnozis.tooth38.mceramic_crown_color = mceramicCrownColor;
                            } else if (teethDiagnozis.tooth38.mceramic_crown && teethDiagnozis.tooth38.mceramic_crown_color != mceramicCrownColor) {
                                teethDiagnozis.tooth38.mceramic_crown_color = mceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth38.mceramic_crown = false;
                                teethDiagnozis.tooth38.mceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'metalic_crown') {
                            if (!teethDiagnozis.tooth38.metalic_crown && teethDiagnozis.tooth38.metalic_crown_color === "") {
                                teethDiagnozis.tooth38.metalic_crown = true;
                                teethDiagnozis.tooth38.metalic_crown_color = metalicCrownColor;
                            } else if (teethDiagnozis.tooth38.metalic_crown && teethDiagnozis.tooth38.metalic_crown_color != metalicCrownColor) {
                                teethDiagnozis.tooth38.mceramic_crown_color = metalicCrownColor;
                            } else {
                                teethDiagnozis.tooth38.metalic_crown = false;
                                teethDiagnozis.tooth38.metalic_crown_color = "";
                            }
                        } else if (diagnozis === 'zirconia_crown') {
                            if (!teethDiagnozis.tooth38.zirconia_crown && teethDiagnozis.tooth38.zirconia_crown_color === "") {
                                teethDiagnozis.tooth38.zirconia_crown = true;
                                teethDiagnozis.tooth38.zirconia_crown_color = zirconiaCrownColor;
                            } else if (teethDiagnozis.tooth38.zirconia_crown && teethDiagnozis.tooth38.zirconia_crown_color != zirconiaCrownColor) {
                                teethDiagnozis.tooth38.zirconia_crown_color = zirconiaCrownColor;
                            } else {
                                teethDiagnozis.tooth38.zirconia_crown = false;
                                teethDiagnozis.tooth38.zirconia_crown_color = "";
                            }
                        } else if (diagnozis === 'pin') {
                            teethDiagnozis.tooth38.pin = !teethDiagnozis.tooth38.pin;
                        } else if (diagnozis === 'culttab') {
                            teethDiagnozis.tooth38.culttab = !teethDiagnozis.tooth38.culttab;
                        } else if (diagnozis === 'abutment') {
                            teethDiagnozis.tooth38.abutment = !teethDiagnozis.tooth38.abutment;
                        } else if (diagnozis === 'shaper') {
                            teethDiagnozis.tooth38.shaper = !teethDiagnozis.tooth38.shaper;
                        } else if (diagnozis === 'implant') {
                            teethDiagnozis.tooth38.implant = !teethDiagnozis.tooth38.implant;
                        } else if (diagnozis === 'apex') {
                            teethDiagnozis.tooth38.apex = !teethDiagnozis.tooth38.apex;
                        } else if (diagnozis === 'absent') {
                            teethDiagnozis.tooth38.absent = !teethDiagnozis.tooth38.absent;
                        } else if (diagnozis === 'cervical_caries') {
                            teethDiagnozis.tooth38.cervical_caries = !teethDiagnozis.tooth38.cervical_caries;
                        } else if (diagnozis === 'caries') {
                            teethDiagnozis.tooth38.caries = !teethDiagnozis.tooth38.caries;
                        } else if (diagnozis === 'parodontit') {
                            if (teethDiagnozis.tooth38.parodontit) {
                                if (teethDiagnozis.tooth38.parodontit_stage === subDiagnozis) {
                                    teethDiagnozis.tooth38.parodontit = false;
                                    teethDiagnozis.tooth38.active = false;
                                } else {
                                    teethDiagnozis.tooth38.parodontit = true;
                                    teethDiagnozis.tooth38.parodontit_stage = subDiagnozis
                                }
                            } else {
                                teethDiagnozis.tooth38.parodontit = true;
                                teethDiagnozis.tooth38.parodontit_stage = subDiagnozis;
                                teethDiagnozis.tooth38.active = true;
                            }
                        }
                        dispatch(setToothDiagnoze(teethDiagnozis))
                    }
                }}
            >
                <g className="underlay" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <path className="st40" d="M1899,1187.9c0,0-4-45-3-65s0-43,0-49s-13-41-14-56c-1-15,14-36,16-69
                        s-6.2-115.7-16-137c-11-24-36-32-60-28s-48,9-55,58s-2,88,0,98s1,17,4,30s19,32,17,45c-2,13-20,42-20,64c0,12,2.4,24,5.4,33.9
                        c2.5,8.2,5.4,15,7.6,19.1c5,9,24.7,46.2,30,54c11,16,23,28,39,35c15.1,6.6,26,10,37,5C1902.9,1218.7,1900,1203.9,1899,1187.9z"
                    />
                </g>
                <g id="T_38_up" className="top-view" style={{visibility: tooth38Diagnozis.absent ? 'hidden' : 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR/APEX/CULTTAB */}
                    <g className="dentin">
                        <g className="hEmpty  hImplant" style={{visibility: !tooth38Diagnozis.culttab && !tooth38Diagnozis.implant && !tooth38Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st24 change-color ${tooth38Diagnozis?.change_color ? 'diagnoze-opacity' : ''} ${tooth38Diagnozis?.apex ? 'apex' : ''}`}
                                d="M1891.8,928.4c0.3,4.4,0.2,8.9,0,13.3c-0.3,6.8-0.9,13.8-4.9,19.9
                                c-3.9,6.1-10.7,10.8-18.4,14.2c-5.4,2.4-11.3,4.2-17.3,5.3c-7.5,1.4-15.1,1.9-22.8,2.1c-10.3,0.3-20.9,0.1-29.8-3.7
                                c-4.5-1.9-8.3-4.6-11.8-7.5c-3.5-2.8-6.8-5.8-8.7-9.4c-2.5-4.8-2.2-10-2.8-15.2c-0.7-6.3-3.1-12.7-2.8-19.1
                                c0.2-4.9,1.8-9.8,4.6-14.3c2.8-4.5,6.8-8.6,11.8-11.7c9.2-5.8,21.1-8.4,32.6-6.5c3.7,0.6,7.2,1.6,11,1.4c2.3-0.1,4.5-0.8,6.8-1.2
                                c4.3-0.8,8.8-0.6,13.2-0.4c5.1,0.2,10.3,0.6,15,2.1c5.7,1.9,10.3,5.2,14.2,8.9c2.7,2.6,5.2,5.3,6.9,8.4
                                C1890.8,919.2,1891.5,923.8,1891.8,928.4z"
                            />
                        </g>
                        <g className="hIntact hImplant hEmpty" style={{visibility: tooth38Diagnozis?.apex || tooth38Diagnozis?.change_color ? 'inherit' : 'hidden'}}>
                            <path className={`st24 change-color ${tooth38Diagnozis?.change_color ? 'diagnoze-opacity' : ''} ${tooth38Diagnozis?.apex ? 'apex' : ''}`}
                                d="M1891.8 928.4C1892.1 932.8 1892 937.3 1891.8 941.7C1891.5 948.5 1890.9 955.5 1886.9 961.6C1883 967.7 1876.2 972.4 1868.5 975.8C1863.1 978.2 1857.2 980 1851.2 981.1C1843.7 982.5 1836.1 983 1828.4 983.2C1818.1 983.5 1807.5 983.3 1798.6 979.5C1794.1 977.6 1790.3 974.9 1786.8 972C1783.3 969.2 1780 966.2 1778.1 962.6C1775.6 957.8 1775.9 952.6 1775.3 947.4C1774.6 941.1 1772.2 934.7 1772.5 928.3C1772.7 923.4 1774.3 918.5 1777.1 914C1779.9 909.5 1783.9 905.4 1788.9 902.3C1798.1 896.5 1810 893.9 1821.5 895.8C1825.2 896.4 1828.7 897.4 1832.5 897.2C1834.8 897.1 1837 896.4 1839.3 896C1843.6 895.2 1848.1 895.4 1852.5 895.6C1857.6 895.8 1862.8 896.2 1867.5 897.7C1873.2 899.6 1877.8 902.9 1881.7 906.6C1884.4 909.2 1886.9 911.9 1888.6 915C1890.8 919.2 
                                    1891.5 923.8 1891.8 928.4Z" 
                                />
                            <path className={`st24 change-color ${tooth38Diagnozis?.change_color ? 'diagnoze-opacity' : ''} ${tooth38Diagnozis?.apex ? 'apex' : ''}`} 
                                d="M1800 937C1800 944.5 1797.9 963 1831 963C1867.61 963 1863 938 1861.5 932.5C1860.18 927.652 1854 919 1833.67 919C1819 919 1800 922.976 1800 937Z" 
                            />
                        </g>
                    </g>
                    {/* PULPIT */}
                    <g className="pulp">
                        <g className="hIntact pulpitis-pfilling" style={{visibility: tooth38Diagnozis?.apex ? 'inherit' : 'hidden'}}>
                            <ellipse className="st22 target" rx="10.0966" ry="8.05456" transform="matrix(0.0164692 -0.999864 -0.999835 -0.0181353 1853.35 938.211)" style={{fill: 'rgb(254, 246, 249)'}}></ellipse>
                            <ellipse className="st22 target" rx="8.25802" ry="7.57128" transform="matrix(0.981917 -0.189312 -0.142513 -0.989793 1813.66 930.453)" style={{fill: 'rgb(254, 246, 249)'}}></ellipse>
                            <ellipse className="st22 target" rx="9.05222" ry="7.94373" transform="matrix(-0.997644 -0.068601 -0.0623222 0.998056 1813.98 950.549)" style={{fill: 'rgb(254, 246, 249)'}}></ellipse>
                        </g>
                    </g>
                    {/* IMPLANT */}
                    <g className="implant   impin" style={{visibility: tooth38Diagnozis.implant || tooth38Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <circle className="st48" cx="1833.5" cy="939.5" r="26.5" />
                        <g className="st27">
                            <mask id="implant_38" className="st49">
                                <path className="st50" 
                                    d="M1819.9 923.474L1816.46 922.352C1813.53 925.3 1811.35 928.994 1810.23 933.124L1812.93 935.55C1812.69 936.829 1812.56 938.15 1812.56 939.5C1812.56 940.85 1812.69 942.17 1812.93 943.45L1810.23 945.875C1811.35 950.006 1813.53 953.7 1816.46 956.648L1819.9 955.525C1821.9 957.242 1824.21 958.594 1826.74 959.478L1827.49 963.024C1829.48 963.548 1831.56 963.827 1833.71 963.827C1835.86 963.827 1837.95 963.548 1839.94 963.024L1840.69 959.477C1843.22 958.593 1845.53 957.241 1847.52 955.525L1850.97 956.647C1853.9 953.699 1856.08 950.004 1857.2 945.874L1854.5 943.448C1854.74 942.169 1854.87 940.849 1854.87 939.5C1854.87 938.15 1854.74 936.831 1854.5 935.552L1857.2 933.126C1856.08 928.995 1853.9 925.301 1850.97 922.352L1847.52 923.475C1845.53 921.758 1843.22 920.406 1840.69 919.522L1839.94 915.976C1837.95 915.452 1835.86 915.173 1833.71 915.173C1831.56 915.173 1829.48 915.452 1827.49 915.975L1826.74 919.521C1824.21 920.405 
                                    1821.9 921.758 1819.9 923.474Z"
                                />
                            </mask>
                            <path className="st50 st51" 
                                d="M1819.9 923.474L1816.46 922.352C1813.53 925.3 1811.35 928.994 1810.23 933.124L1812.93 935.55C1812.69 936.829 1812.56 938.15 1812.56 939.5C1812.56 940.85 1812.69 942.17 1812.93 943.45L1810.23 945.875C1811.35 950.006 1813.53 953.7 1816.46 956.648L1819.9 955.525C1821.9 957.242 1824.21 958.594 1826.74 959.478L1827.49 963.024C1829.48 963.548 1831.56 963.827 1833.71 963.827C1835.86 963.827 1837.95 963.548 1839.94 963.024L1840.69 959.477C1843.22 958.593 1845.53 957.241 1847.52 955.525L1850.97 956.647C1853.9 953.699 1856.08 950.004 1857.2 945.874L1854.5 943.448C1854.74 942.169 1854.87 940.849 1854.87 939.5C1854.87 938.15 1854.74 936.831 1854.5 935.552L1857.2 933.126C1856.08 928.995 1853.9 925.301 1850.97 922.352L1847.52 
                                923.475C1845.53 921.758 1843.22 920.406 1840.69 919.522L1839.94 915.976C1837.95 915.452 1835.86 915.173 1833.71 915.173C1831.56 915.173 1829.48 915.452 1827.49 915.975L1826.74 919.521C1824.21 920.405 1821.9 921.758 1819.9 
                                923.474Z"
                            />
                            <path className="st52" d="M1816.46 922.352L1817.08 920.45L1815.91 920.069L1815.04 920.942L1816.46 922.352ZM1819.9 923.474L1819.29 925.376L1820.36 925.725L1821.21 924.989L1819.9 923.474ZM1810.23 933.124L1808.3 932.601L1807.98 933.789L1808.89 934.611L1810.23 933.124ZM1812.93 935.55L1814.89 935.921L1815.1 934.815L1814.27 934.063L1812.93 935.55ZM1812.93 943.45L1814.27 944.937L1815.1 944.184L1814.89 943.079L1812.93 943.45ZM1810.23 945.875L1808.89 944.388L1807.98 945.211L1808.3 946.398L1810.23 945.875ZM1816.46 956.648L1815.04 958.057L1815.91 958.93L1817.08 958.549L1816.46 956.648ZM1819.9 955.525L1821.21 954.011L1820.36 953.275L1819.29 953.624L1819.9 955.525ZM1826.74 959.478L1828.7 959.063L1828.47 957.961L1827.4 957.59L1826.74 959.478ZM1827.49 963.024L1825.54 963.439L1825.79 964.644L1826.98 964.958L1827.49 963.024ZM1839.94 963.024L1840.45 964.958L1841.64 964.643L1841.89 963.438L1839.94 963.024ZM1840.69 959.477L1840.03 957.589L1838.96 957.96L1838.73 959.063L1840.69 959.477ZM1847.52 955.525L1848.14 953.623L1847.07 953.274L1846.22 954.01L1847.52 955.525ZM1850.97 956.647L1850.35 958.549L1851.52 958.93L1852.39 958.057L1850.97 956.647ZM1857.2 945.874L1859.13 946.396L1859.45 945.209L1858.53 944.386L1857.2 945.874ZM1854.5 943.448L1852.53 943.077L1852.33 944.183L1853.16 944.935L1854.5 943.448ZM1854.5 935.552L1853.16 934.064L1852.33 934.817L1852.53 935.923L1854.5 935.552ZM1857.2 933.126L1858.53 934.613L1859.45 
                                933.791L1859.13 932.603L1857.2 933.126ZM1850.97 922.352L1852.39 920.943L1851.52 920.07L1850.35 920.451L1850.97 922.352ZM1847.52 923.475L1846.22 924.989L1847.07 925.726L1848.14 925.376L1847.52 923.475ZM1840.69 919.522L1838.73 919.937L1838.96 921.039L1840.03 921.411L1840.69 919.522ZM1839.94 915.976L1841.89 915.561L1841.64 914.356L1840.45 914.042L1839.94 915.976ZM1827.49 915.975L1826.98 
                                914.041L1825.79 914.355L1825.54 915.561L1827.49 915.975ZM1826.74 919.521L1827.4 921.41L1828.47 921.039L1828.7 919.936L1826.74 919.521ZM1815.84 924.254L1819.29 925.376L1820.52 921.573L1817.08 920.45L1815.84 924.254ZM1812.16 933.647C1813.19 929.86 1815.19 926.469 1817.88 923.762L1815.04 920.942C1811.87 924.13 1809.51 928.128 1808.3 932.601L1812.16 933.647ZM1814.27 934.063L1811.57 931.637L1808.89 934.611L1811.59 937.037L1814.27 
                                934.063ZM1814.56 939.5C1814.56 938.275 1814.67 937.079 1814.89 935.921L1810.96 935.179C1810.7 936.58 1810.56 938.025 1810.56 939.5H1814.56ZM1814.89 943.079C1814.67 941.921 1814.56 940.725 1814.56 939.5H1810.56C1810.56 940.975 1810.7 942.42 1810.96 943.821L1814.89 943.079ZM1811.57 947.362L1814.27 944.937L1811.59 941.963L1808.89 944.388L1811.57 947.362ZM1817.88 955.238C1815.19 952.53 1813.19 949.14 1812.16 945.352L1808.3 946.398C1809.51 950.872 1811.87 954.869 1815.04 958.057L1817.88 955.238ZM1819.29 953.624L1815.84 954.746L1817.08 958.549L1820.52 957.427L1819.29 953.624ZM1827.4 957.59C1825.11 956.79 1823.01 955.566 1821.21 954.011L1818.6 957.04C1820.78 958.918 1823.31 960.398 1826.08 961.366L1827.4 957.59ZM1829.45 962.61L1828.7 959.063L1824.79 959.893L1825.54 963.439L1829.45 962.61ZM1833.71 961.827C1831.74 961.827 1829.82 961.57 1828 961.09L1826.98 964.958C1829.13 965.525 1831.39 965.827 1833.71 965.827V961.827ZM1839.43 961.09C1837.6 961.57 1835.69 961.827 1833.71 961.827V965.827C1836.04 965.827 1838.29 965.525 1840.45 964.958L1839.43 961.09ZM1838.73 959.063L1837.98 962.609L1841.89 963.438L1842.64 959.892L1838.73 
                                959.063ZM1846.22 954.01C1844.41 955.565 1842.32 956.789 1840.03 957.589L1841.35 961.365C1844.12 960.397 1846.65 958.917 1848.83 957.039L1846.22 954.01ZM1851.59 954.745L1848.14 953.623L1846.9 957.426L1850.35 958.549L1851.59 954.745ZM1855.27 945.351C1854.24 949.139 1852.24 952.53 1849.55 955.237L1852.39 958.057C1855.56 954.868 1857.92 950.87 1859.13 946.396L1855.27 945.351ZM1853.16 944.935L1855.86 947.361L1858.53 944.386L1855.84 941.961L1853.16 944.935ZM1852.87 939.5C1852.87 940.724 1852.75 941.92 1852.53 943.077L1856.46 943.819C1856.73 942.418 1856.87 940.974 1856.87 939.5H1852.87ZM1852.53 935.923C1852.75 937.08 1852.87 938.276 1852.87 939.5H1856.87C1856.87 938.025 1856.73 936.581 1856.46 935.18L1852.53 935.923ZM1855.86 931.639L1853.16 934.064L1855.84 937.039L1858.53 934.613L1855.86 931.639ZM1849.55 923.762C1852.24 926.47 1854.24 929.861 1855.27 933.649L1859.13 932.603C1857.92 928.129 1855.56 924.131 1852.39 920.943L1849.55 923.762ZM1848.14 925.376L1851.59 924.254L1850.35 920.451L1846.9 921.573L1848.14 925.376ZM1840.03 921.411C1842.32 922.21 1844.41 923.434 1846.22 924.989L1848.83 921.96C1846.65 920.083 1844.12 918.602 1841.35 917.634L1840.03 921.411ZM1837.98 916.39L1838.73 919.937L1842.64 919.108L1841.89 915.561L1837.98 916.39ZM1833.71 917.173C1835.69 917.173 1837.6 917.429 1839.43 917.91L1840.45 914.042C1838.29 913.475 1836.04 913.173 1833.71 913.173V917.173ZM1828 917.909C1829.82 917.429 1831.74 917.173 1833.71 917.173V913.173C1831.39 913.173 1829.13 913.474 1826.98 914.041L1828 917.909ZM1828.7 919.936L1829.45 916.39L1825.54 915.561L1824.79 919.107L1828.7 919.936ZM1821.21 924.989C1823.01 923.433 1825.11 922.209 1827.4 921.41L1826.08 917.633C1823.31 918.601 1820.78 920.082 
                                1818.6 921.96L1821.21 924.989Z" mask="url(#implant_38)"
                            />
                        </g>
                    </g>
                    <g className="shaper" style={{visibility: 'hidden', opacity: 0}} >
                        <circle className="st44" r="28.5" transform="matrix(-1 0 0 1 1833.5 938.5)"></circle>
                        <path className="st45" d="M1835.42 929.739C1834.87 927.804 1832.13 927.804 1831.58 929.739L1831.07 931.511C1830.77 932.549 1829.71 933.164 1828.66 932.902L1826.87 932.454C1824.92 931.965 1823.55 934.339 1824.95 935.785L1826.23 937.109C1826.98 937.884 1826.98 939.116 1826.23 939.891L1824.95 941.215C1823.55 942.661 1824.92 945.035 1826.87 944.546L1828.66 944.098C1829.71 943.836 1830.77 944.451 1831.07 945.489L1831.58 947.261C1832.13 949.196 1834.87 949.196 1835.42 947.261L1835.93 945.489C1836.23 944.451 1837.29 943.836 1838.34 944.098L1840.13 944.546C1842.08 945.035 1843.45 942.661 1842.05 941.215L1840.77 939.891C1840.02 939.116 1840.02 937.884 1840.77 937.109L1842.05 935.785C1843.45 934.339 1842.08 931.965 1840.13 932.454L1838.34 932.902C1837.29 933.164 1836.23 932.549 1835.93 931.511L1835.42 929.739Z"></path>
                    </g>
                    {/* ABUTMENT */}
                    <g className="abutment" style={{visibility: tooth38Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth38Diagnozis.abutment ? 1 : 0}}>
                        <path className="st47" d="M1890.44 928.168L1890.44 928.165C1890.14 923.592 1889.55 919.178 1887.36 915.181C1885.74 912.22 1883.33 909.606 1880.65 907.023C1876.82 903.391 1872.34 900.191 1866.83 898.351C1862.27 896.897 1857.19 896.499 1852.1 896.299L1852.09 896.299C1847.67 896.098 1843.29 895.908 1839.12 896.683L1839.12 896.683L1839.11 896.685C1838.35 896.818 1837.61 896.981 1836.85 897.149C1836.49 897.229 1836.12 897.311 1835.74 897.391C1834.6 897.632 1833.42 897.845 1832.19 897.899C1829.3 898.054 1826.43 897.505 1823.68 896.978C1822.76 896.803 1821.86 896.631 1820.98 896.487L1820.97 896.487C1809.72 894.627 1798.07 897.175 1789.07 902.846L1789.06 902.85C1784.19 905.869 1780.3 909.858 1777.59 914.229C1774.87 918.598 1773.33 923.332 1773.14 928.041L1773.14 928.047C1772.99 931.116 1773.49 934.214 1774.14 937.388C1774.29 938.111 1774.44 938.84 1774.6 939.574C1775.12 942.022 1775.66 944.518 1775.93 946.987C1776.08 948.263 1776.17 949.536 1776.26 950.779L1776.27 950.92C1776.37 952.217 1776.46 953.481 1776.62 954.729C1776.92 957.218 1777.45 959.586 1778.62 961.837C1780.42 965.237 1783.57 968.127 1787.06 970.919L1787.07 970.925L1787.07 970.93C1790.54 973.8 1794.25 976.432 1798.63 978.279L1798.63 978.281C1807.31 981.985 1817.7 982.201 1828.01 981.901L1828.01 981.901C1835.69 981.701 1843.23 981.203 1850.65 979.817L1850.66 979.817C1856.58 978.73 1862.41 976.953 1867.73 974.586L1867.73 974.585C1875.34 971.224 1881.94 966.627 1885.69 960.762L1885.69 960.762L1885.7 960.752C1889.53 954.904 1890.14 948.16 1890.44 941.356L1890.44 941.355C1890.64 936.967 1890.73 932.511 1890.44 928.168Z"></path>
                        <path className="st47" d="M1792.72 944.034C1792.82 944.924 1792.89 945.811 1792.95 946.67L1792.96 946.77C1793.03 947.668 1793.09 948.536 1793.2 949.391C1793.41 951.095 1793.77 952.691 1794.57 954.203C1795.8 956.496 1797.97 958.463 1800.42 960.394L1800.43 960.4L1800.44 960.405C1802.86 962.383 1805.45 964.186 1808.48 965.449L1808.49 965.45C1814.52 967.988 1821.77 968.142 1829.01 967.934L1829.02 967.934C1834.41 967.796 1839.69 967.452 1844.89 966.496L1844.89 966.496C1849.03 965.747 1853.11 964.523 1856.83 962.895L1856.83 962.894C1862.15 960.577 1866.73 957.425 1869.32 953.435L1869.32 953.435L1869.33 953.426C1871.97 949.456 1872.39 944.868 1872.6 940.158L1872.6 940.157C1872.74 937.122 1872.81 934.052 1872.61 931.064L1872.61 931.061C1872.4 927.903 1871.98 924.908 1870.48 922.204C1869.36 920.197 1867.7 918.414 1865.82 916.63C1863.15 914.136 1860.04 911.949 1856.22 910.693C1853.05 909.699 1849.52 909.424 1845.94 909.286L1845.94 909.286L1845.94 909.286C1842.82 909.147 1839.78 909.018 1836.88 909.548L1836.88 909.548L1836.87 909.55C1836.34 909.64 1835.84 909.751 1835.31 909.866C1835.05 909.922 1834.79 909.98 1834.52 910.036C1833.71 910.204 1832.86 910.355 1831.97 910.394C1829.91 910.503 1827.84 910.113 1825.9 909.747C1825.26 909.627 1824.64 909.509 1824.04 909.413L1824.03 909.412C1816.19 908.136 1808.07 909.886 1801.81 913.775L1801.8 913.779C1798.42 915.845 1795.72 918.574 1793.83 921.56C1791.95 924.544 1790.89 927.769 1790.75 930.967L1790.75 930.973C1790.65 933.056 1791 935.168 1791.45 937.361C1791.56 937.855 1791.66 938.355 1791.77 938.861C1792.14 940.558 1792.52 942.308 1792.72 944.034ZM1792.72 944.034C1792.72 944.035 1792.72 944.036 1792.72 944.037L1791.72 944.149L1792.72 944.033C1792.72 944.033 1792.72 944.034 1792.72 944.034Z"></path>
                        <circle className="st45" r="13" transform="matrix(-1 0 0 1 1831.74 940)"></circle>
                    </g>
                    {/* PIN */}
                    <g className="pin" style={{visibility: 'inherit', opacity: tooth38Diagnozis.pin ? 1 : 0}}>
                        <path className="st56 hIntact" d="M1890.44 928.169L1890.44 928.166C1890.14 923.593 1889.55 919.179 1887.36 915.182C1885.73 912.221 1883.33 909.607 1880.64 907.024C1876.82 903.392 1872.34 900.192 1866.83 898.352C1862.27 896.898 1857.19 896.5 1852.1 896.3L1852.09 896.3C1847.67 896.099 1843.29 895.909 1839.12 896.684L1839.12 896.684L1839.11 896.686C1838.34 896.819 1837.61 896.982 1836.85 897.15C1836.49 897.23 1836.12 897.312 1835.74 897.392C1834.6 897.633 1833.42 897.846 1832.18 897.9C1829.3 898.055 1826.43 897.506 1823.67 896.979C1822.76 896.804 1821.86 896.632 1820.98 896.488L1820.97 896.488C1809.72 894.628 1798.06 897.176 1789.07 902.847L1789.06 902.851C1784.19 905.87 1780.3 909.859 1777.58 914.23C1774.87 918.599 1773.33 923.333 1773.13 928.042L1773.13 928.048C1772.99 931.117 1773.49 934.215 1774.14 937.389C1774.29 938.112 1774.44 938.841 1774.6 939.575C1775.12 942.023 1775.65 944.519 1775.93 946.988C1776.08 948.264 1776.17 949.537 1776.26 950.78L1776.27 950.921C1776.37 952.218 1776.46 953.482 1776.62 954.73C1776.92 957.219 1777.45 959.587 1778.62 961.838C1780.42 965.238 1783.57 968.128 1787.06 970.92L1787.07 970.926L1787.07 970.931C1790.54 973.801 1794.25 976.433 1798.62 978.28L1798.63 978.282C1807.3 981.986 1817.7 982.202 1828.01 981.902L1828.01 981.902C1835.69 981.702 1843.23 981.204 1850.65 979.818L1850.66 979.818C1856.58 978.731 1862.41 976.954 1867.73 974.587L1867.73 974.586C1875.34 971.225 1881.94 966.628 1885.69 960.763L1885.69 960.763L1885.7 960.753C1889.53 954.905 1890.14 948.161 1890.44 941.357L1890.44 941.356C1890.64 936.968 1890.73 932.512 1890.44 928.169Z" style={{visibility: 'hidden'}}></path>
                        <path className="st56 hIntact" d="M1792.72 944.035C1792.82 944.925 1792.89 945.812 1792.95 946.671L1792.96 946.771C1793.02 947.669 1793.09 948.537 1793.2 949.392C1793.41 951.096 1793.77 952.692 1794.57 954.204C1795.8 956.497 1797.97 958.464 1800.42 960.395L1800.43 960.401L1800.44 960.406C1802.86 962.384 1805.45 964.187 1808.48 965.45L1808.49 965.451C1814.52 967.989 1821.77 968.143 1829.01 967.935L1829.02 967.935C1834.41 967.797 1839.69 967.453 1844.89 966.497L1844.89 966.497C1849.03 965.748 1853.11 964.524 1856.83 962.896L1856.83 962.895C1862.15 960.578 1866.73 957.426 1869.32 953.436L1869.32 953.436L1869.33 953.427C1871.97 949.457 1872.39 944.869 1872.6 940.159L1872.6 940.158C1872.74 937.123 1872.81 934.053 1872.61 931.065L1872.6 931.062C1872.4 927.904 1871.98 924.909 1870.48 922.205C1869.36 920.198 1867.7 918.415 1865.82 916.631C1863.15 914.137 1860.04 911.95 1856.22 910.694C1853.05 909.7 1849.52 909.425 1845.94 909.287L1845.94 909.287L1845.94 909.287C1842.82 909.148 1839.78 909.019 1836.88 909.548L1836.88 909.549L1836.87 909.551C1836.34 909.641 1835.84 909.752 1835.31 909.867C1835.05 909.923 1834.79 909.981 1834.52 910.037C1833.71 910.205 1832.86 910.356 1831.97 910.395C1829.91 910.504 1827.84 910.114 1825.9 909.748C1825.26 909.628 1824.64 909.51 1824.04 909.414L1824.03 909.413C1816.19 908.137 1808.07 909.887 1801.81 913.776L1801.8 913.78C1798.42 915.846 1795.72 918.575 1793.83 921.561C1791.95 924.545 1790.89 927.77 1790.75 930.968L1790.75 930.974C1790.65 933.057 1791 935.169 1791.45 937.361C1791.56 937.856 1791.66 938.356 1791.77 938.862C1792.14 940.559 1792.52 942.309 1792.72 944.035ZM1792.72 944.035C1792.72 944.036 1792.72 944.037 1792.72 944.038L1791.72 944.15L1792.72 944.034C1792.72 944.034 1792.72 944.035 1792.72 944.035Z" style={{visibility: 'hidden'}}></path>
                        <circle className="st57" r="12.25" transform="matrix(-1 0 0 1 1831.74 940.001)"></circle>
                    </g>
                    {/* CULTTAB */}
                    <g className="stump  hImplant" style={{visibility: !tooth38Diagnozis.culttab ? 'hidden' : 'inherit', opacity: !tooth38Diagnozis.culttab ? 0 : 1}}>
                        <path className="st47" d="M1890.44 928.168L1890.44 928.165C1890.14 923.592 1889.55 919.178 1887.36 915.181C1885.74 912.22 1883.33 909.606 1880.65 907.023C1876.82 903.391 1872.34 900.191 1866.83 898.351C1862.27 896.897 1857.19 896.499 1852.1 896.299L1852.09 896.299C1847.67 896.098 1843.29 895.908 1839.12 896.683L1839.12 896.683L1839.11 896.685C1838.35 896.818 1837.61 896.981 1836.85 897.149C1836.49 897.229 1836.12 897.311 1835.74 897.391C1834.6 897.632 1833.42 897.845 1832.19 897.899C1829.3 898.054 1826.43 897.505 1823.68 896.978C1822.76 896.803 1821.86 896.631 1820.98 896.487L1820.97 896.487C1809.72 894.627 1798.07 897.175 1789.07 902.846L1789.06 902.85C1784.19 905.869 1780.3 909.858 1777.59 914.229C1774.87 918.598 1773.33 923.332 1773.14 928.041L1773.14 928.047C1772.99 931.116 1773.49 934.214 1774.14 937.388C1774.29 938.111 1774.44 938.84 1774.6 939.574C1775.12 942.022 1775.66 944.518 1775.93 946.987C1776.08 948.263 1776.17 949.536 1776.26 950.779L1776.27 950.92C1776.37 952.217 1776.46 953.481 1776.62 954.729C1776.92 957.218 1777.45 959.586 1778.62 961.837C1780.42 965.237 1783.57 968.127 1787.06 970.919L1787.07 970.925L1787.07 970.93C1790.54 973.8 1794.25 976.432 1798.63 978.279L1798.63 978.281C1807.31 981.985 1817.7 982.201 1828.01 981.901L1828.01 981.901C1835.69 981.701 1843.23 981.203 1850.65 979.817L1850.66 979.817C1856.58 978.73 1862.41 976.953 1867.73 974.586L1867.73 974.585C1875.34 971.224 1881.94 966.627 1885.69 960.762L1885.69 960.762L1885.7 960.752C1889.53 954.904 1890.14 948.16 1890.44 941.356L1890.44 941.355C1890.64 936.967 1890.73 932.511 1890.44 928.168Z"></path>
                        <path className="st47" d="M1792.72 944.034C1792.82 944.924 1792.89 945.811 1792.95 946.67L1792.96 946.77C1793.03 947.668 1793.09 948.536 1793.2 949.391C1793.41 951.095 1793.77 952.691 1794.57 954.203C1795.8 956.496 1797.97 958.463 1800.42 960.394L1800.43 960.4L1800.44 960.405C1802.86 962.383 1805.45 964.186 1808.48 965.449L1808.49 965.45C1814.52 967.988 1821.77 968.142 1829.01 967.934L1829.02 967.934C1834.41 967.796 1839.69 967.452 1844.89 966.496L1844.89 966.496C1849.03 965.747 1853.11 964.523 1856.83 962.895L1856.83 962.894C1862.15 960.577 1866.73 957.425 1869.32 953.435L1869.32 953.435L1869.33 953.426C1871.97 949.456 1872.39 944.868 1872.6 940.158L1872.6 940.157C1872.74 937.122 1872.81 934.052 1872.61 931.064L1872.61 931.061C1872.4 927.903 1871.98 924.908 1870.48 922.204C1869.36 920.197 1867.7 918.414 1865.82 916.63C1863.15 914.136 1860.04 911.949 1856.22 910.693C1853.05 909.699 1849.52 909.424 1845.94 909.286L1845.94 909.286L1845.94 909.286C1842.82 909.147 1839.78 909.018 1836.88 909.548L1836.88 909.548L1836.87 909.55C1836.34 909.64 1835.84 909.751 1835.31 909.866C1835.05 909.922 1834.79 909.98 1834.52 910.036C1833.71 910.204 1832.86 910.355 1831.97 910.394C1829.91 910.503 1827.84 910.113 1825.9 909.747C1825.26 909.627 1824.64 909.509 1824.04 909.413L1824.03 909.412C1816.19 908.136 1808.07 909.886 1801.81 913.775L1801.8 913.779C1798.42 915.845 1795.72 918.574 1793.83 921.56C1791.95 924.544 1790.89 927.769 1790.75 930.967L1790.75 930.973C1790.65 933.056 1791 935.168 1791.45 937.361C1791.56 937.855 1791.66 938.355 1791.77 938.861C1792.14 940.558 1792.52 942.308 1792.72 944.034ZM1792.72 944.034C1792.72 944.035 1792.72 944.036 1792.72 944.037L1791.72 944.149L1792.72 944.033C1792.72 944.033 1792.72 944.034 1792.72 944.034Z"></path>
                    </g>
                    <g className=" hImplant hEmpty" style={{visibility: !tooth38Diagnozis.culttab && !tooth38Diagnozis.abutment && !tooth38Diagnozis.implant && !tooth38Diagnozis.shaper && !tooth38Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1897.5,923.6c-0.4-6.5-1.2-13.1-3.7-19.1c-1.9-4.4-4.7-8.3-7.8-12
                            c-0.4-0.4-0.7-0.8-1.1-1.3c-4.1-4.8-8.9-9.1-14.8-11.5c-5.2-2.2-11-2.8-16.6-3.2c-4.9-0.3-9.8-0.5-14.6,0.5
                            c-2.5,0.5-4.9,1.4-7.5,1.6c-4.2,0.3-8.2-1.2-12.2-2.1c-12.7-2.7-25.9,0.8-36.1,9c-5.4,4.4-9.8,10.1-12.8,16.4
                            c0,0.1-0.1,0.1-0.1,0.2c-3.1,6.3-4.8,13.2-5,20.3c-0.2,9.2,2.4,18.2,3.3,27.2c0.7,7.3,0.4,14.7,3.2,21.6c1.8,4.4,4.7,8.1,7.9,11.6
                            c0.6,0.6,1.2,1.3,1.8,1.9c4,4.1,8.2,8,13.2,10.7c10,5.5,21.7,5.9,33.1,5.6c8.5-0.2,17-0.8,25.2-2.8c6.7-1.6,13.2-4,19.2-7.3
                            c8.4-4.7,15.8-11.2,20.2-19.8c0-0.1,0.1-0.1,0.1-0.2c4.3-8.7,4.9-18.6,5.2-28.3C1897.8,936.2,1897.8,929.9,1897.5,923.6z"
                        />
                    </g>
                    {/*TARTAR*/}
                    <g className="tartar hImplant hEmpty" style={{visibility : 'inherit', opacity: teethDiagnozis.tooth38.tartar ? 1 : 0}}>
                        <path className="st61 level2" d="M1899.94 922.26C1900.28 928.962 1899.1 935.815 1898.88 942.516C1898.69 948.165 1899.47 953.905 1898.51 959.463C1897.72 964.095 1896.39 968.601 1894.34 972.823C1892.26 977.198 1891.59 982.354 1888.29 985.799C1884.59 989.67 1877.15 991.71 1872.54 994.45C1869.96 995.997 1867.27 998.634 1864.52 999.842C1860.77 1001.49 1856.9 1001.56 1852.99 1002.52C1849.06 1003.51 1845.1 1005.46 1841.12 1005.95C1836.52 1006.52 1831.88 1006.81 1827.22 1006.97C1821.38 1007.2 1815.46 1004.99 1809.74 1004.24C1804.05 1003.49 1798.55 1004.23 1793.53 1001.34C1790.77 999.77 1787.19 997.843 1784.82 995.704C1782.82 993.897 1779.94 991.939 1778.13 989.916C1774.17 985.652 1772.51 982.337 1770.36 976.854C1769.15 973.723 1768.52 968.062 1768.14 964.666L1768.12 964.48C1767.64 960.125 1767.58 955.661 1767.2 951.197C1766.82 946.665 1766.02 942.1 1765.31 937.516C1764.52 932.395 1763.85 927.252 1764.03 922.108C1764.16 918.014 1762.76 913.919 1763.79 909.926C1764.65 906.64 1765.8 903.423 1767.23 900.33C1768.98 896.532 1770.09 891.667 1772.64 888.399C1774.69 885.77 1780.05 883.616 1782.57 881.511C1786.46 878.204 1789.72 875.326 1794.28 873.489C1797.89 872.035 1802.72 871.074 1806.55 870.658C1810.8 870.194 1815.13 869.15 1819.42 871.357C1823.6 872.271 1826.49 872.54 1830.79 872.235C1833.39 872.083 1836.94 873.525 1839.54 872.916C1844.4 871.698 1849.48 870.748 1854.46 871.053C1860.22 871.357 1866.1 871.966 1871.41 874.251C1875.2 875.952 1881.75 879.645 1884.77 882.511C1886.88 884.519 1887.77 887.992 1889.59 890.314C1892.64 894.273 1894.4 897.131 1896.32 901.852C1897.64 905.239 1897.42 908.796 1897.97 912.434C1898.46 915.667 1899.78 918.964 1899.94 922.26ZM1891.8 941.702C1892 937.302 1892.1 932.802 1891.8 928.402C1891.5 923.802 1890.8 919.202 1888.6 915.002C1886.9 911.902 1884.4 909.202 1881.7 906.602C1877.8 902.902 1873.2 899.602 1867.5 897.702C1862.8 896.202 1857.6 895.802 1852.5 895.602C1848.1 895.402 1843.6 895.202 1839.3 896.002C1837 896.402 1834.8 897.102 1832.5 897.202C1828.7 897.402 1825.2 896.402 1821.5 895.802C1810 893.902 1798.1 896.502 1788.9 902.302C1783.9 905.402 1779.9 909.502 1777.1 914.002C1774.3 918.502 1772.7 923.402 1772.5 928.302C1772.2 934.702 1774.6 941.102 1775.3 947.402C1775.9 952.602 1775.6 957.802 1778.1 962.602C1780 966.202 1783.3 969.202 1786.8 972.002C1790.3 974.902 1794.1 977.602 1798.6 979.502C1807.5 983.302 1818.1 983.502 1828.4 983.202C1836.1 983.002 1843.7 982.502 1851.2 981.102C1857.2 980.002 1863.1 978.202 1868.5 975.802C1876.2 972.402 1883 967.702 1886.9 961.602C1890.9 955.502 1891.5 948.502 1891.8 941.702Z"></path>
                        <path className="st61 level1 " d="M1899.94 922.26C1900.28 928.962 1899.1 935.815 1898.88 942.516C1898.69 948.165 1899.47 953.905 1898.51 959.463C1897.72 964.095 1896.39 968.601 1894.34 972.823C1892.26 977.198 1891.59 982.354 1888.29 985.799C1884.59 989.67 1877.15 991.71 1872.54 994.45C1869.96 995.997 1867.27 998.634 1864.52 999.842C1860.77 1001.49 1856.9 1001.56 1852.99 1002.52C1849.06 1003.51 1845.1 1005.46 1841.12 1005.95C1836.52 1006.52 1831.88 1006.81 1827.22 1006.97C1821.38 1007.2 1815.46 1004.99 1809.74 1004.24C1804.05 1003.49 1798.55 1004.23 1793.53 1001.34C1790.77 999.77 1787.19 997.843 1784.82 995.704C1782.82 993.897 1779.94 991.939 1778.13 989.916C1774.17 985.652 1772.51 982.337 1770.36 976.854C1769.15 973.723 1768.52 968.062 1768.14 964.666L1768.12 964.48C1767.64 960.125 1767.58 955.661 1767.2 951.197C1766.82 946.665 1766.02 942.1 1765.31 937.516C1764.52 932.395 1763.85 927.252 1764.03 922.108C1764.16 918.014 1762.76 913.919 1763.79 909.926C1764.65 906.64 1765.8 903.423 1767.23 900.33C1768.98 896.532 1770.09 891.667 1772.64 888.399C1774.69 885.77 1780.05 883.616 1782.57 881.511C1786.46 878.204 1789.72 875.326 1794.28 873.489C1797.89 872.035 1802.72 871.074 1806.55 870.658C1810.8 870.194 1815.13 869.15 1819.42 871.357C1823.6 872.271 1826.49 872.54 1830.79 872.235C1833.39 872.083 1836.94 873.525 1839.54 872.916C1844.4 871.698 1849.48 870.748 1854.46 871.053C1860.22 871.357 1866.1 871.966 1871.41 874.251C1875.2 875.952 1881.75 879.645 1884.77 882.511C1886.88 884.519 1887.77 887.992 1889.59 890.314C1892.64 894.273 1894.4 897.131 1896.32 901.852C1897.64 905.239 1897.42 908.796 1897.97 912.434C1898.46 915.667 1899.78 918.964 1899.94 922.26ZM1891.8 941.702C1892 937.302 1892.1 932.802 1891.8 928.402C1891.5 923.802 1890.8 919.202 1888.6 915.002C1886.9 911.902 1884.4 909.202 1881.7 906.602C1877.8 902.902 1873.2 899.602 1867.5 897.702C1862.8 896.202 1857.6 895.802 1852.5 895.602C1848.1 895.402 1843.6 895.202 1839.3 896.002C1837 896.402 1834.8 897.102 1832.5 897.202C1828.7 897.402 1825.2 896.402 1821.5 895.802C1810 893.902 1798.1 896.502 1788.9 902.302C1783.9 905.402 1779.9 909.502 1777.1 914.002C1774.3 918.502 1772.7 923.402 1772.5 928.302C1772.2 934.702 1774.6 941.102 1775.3 947.402C1775.9 952.602 1775.6 957.802 1778.1 962.602C1780 966.202 1783.3 969.202 1786.8 972.002C1790.3 974.902 1794.1 977.602 1798.6 979.502C1807.5 983.302 1818.1 983.502 1828.4 983.202C1836.1 983.002 1843.7 982.502 1851.2 981.102C1857.2 980.002 1863.1 978.202 1868.5 975.802C1876.2 972.402 1883 967.702 1886.9 961.602C1890.9 955.502 1891.5 948.502 1891.8 941.702Z" style={{visibility: 'inherit'}}></path>
                        <path className="st61 level1" d="M1771.87 959C1771.42 955.528 1771.36 951.969 1771 948.409C1770.65 944.796 1769.9 941.155 1769.23 937.5C1768.49 933.417 1767.86 929.316 1768.03 925.214C1768.14 921.95 1768.71 918.685 1769.69 915.5C1770.49 912.881 1771.57 910.315 1772.92 907.849C1774.56 904.82 1775.6 900.941 1778 898.336C1779.93 896.239 1783.09 895.319 1785.45 893.64C1789.11 891.004 1792.18 887.912 1796.47 886.447C1799.86 885.287 1804.4 884.521 1808 884.189C1812 883.82 1816.07 882.987 1820.1 884.747C1824.03 885.475 1826.75 885.69 1830.79 885.447C1833.23 885.325 1836.57 886.475 1839.01 885.99C1843.58 885.018 1848.36 884.261 1853.04 884.504C1858.46 884.747 1863.98 885.232 1868.98 887.054C1872.54 888.411 1878.7 891.355 1881.53 893.64C1883.52 895.242 1884.36 898.011 1886.07 899.862C1888.94 903.019 1890.59 905.298 1892.4 909.063C1893.64 911.763 1893.43 914.6 1893.94 917.5C1894.4 920.078 1895.65 922.707 1895.8 925.336C1896.12 930.679 1895.01 936.144 1894.8 941.487C1894.62 945.992 1895.36 950.568 1894.46 955C1893.71 958.694 1891.52 962.286 1889.59 965.653C1887.64 969.142 1887.01 973.253 1883.91 976C1880.43 979.087 1874.37 980.713 1870.04 982.898C1867.61 984.131 1865.09 986.234 1862.5 987.198C1858.98 988.51 1855.33 988.564 1851.66 989.334C1847.96 990.122 1844.24 991.676 1840.5 992.067C1836.17 992.519 1831.82 992.754 1827.43 992.884C1821.94 993.067 1816.38 992.097 1811 991.501C1805.65 990.907 1800.48 990.693 1795.76 988.391C1793.17 987.14 1789.8 985.604 1787.57 983.898C1785.7 982.457 1783.93 980.896 1782.22 979.283C1778.5 975.883 1776 973.24 1773.98 968.868C1772.84 966.371 1772.25 961.857 1771.89 959.149M1771.87 959L1771.89 959.149M1771.87 959C1771.88 959.049 1771.89 959.099 1771.89 959.149M1891.8 928.4C1892.1 932.8 1892 937.3 1891.8 941.7C1891.5 948.5 1890.9 955.5 1886.9 961.6C1883 967.7 1876.2 972.4 1868.5 975.8C1863.1 978.2 1857.2 980 1851.2 981.1C1843.7 982.5 1836.1 983 1828.4 983.2C1818.1 983.5 1807.5 983.3 1798.6 979.5C1794.1 977.6 1790.3 974.9 1786.8 972C1783.3 969.2 1780 966.2 1778.1 962.6C1775.6 957.8 1775.9 952.6 1775.3 947.4C1774.6 941.1 1772.2 934.7 1772.5 928.3C1772.7 923.4 1774.3 918.5 1777.1 914C1779.9 909.5 1783.9 905.4 1788.9 902.3C1798.1 896.5 1810 893.9 1821.5 895.8C1825.2 896.4 1828.7 897.4 1832.5 897.2C1834.8 897.1 1837 896.4 1839.3 896C1843.6 895.2 1848.1 895.4 1852.5 895.6C1857.6 895.8 1862.8 896.2 1867.5 897.7C1873.2 899.6 1877.8 902.9 1881.7 906.6C1884.4 909.2 1886.9 911.9 1888.6 915C1890.8 919.2 1891.5 923.8 1891.8 928.4Z"></path>
                    </g>
                    {/*CARIES/SEAL*/}
                    <g className="header caries-filling" style={{visibility: (!tooth38Diagnozis.culttab && !tooth38Diagnozis.abutment && !tooth38Diagnozis.implant && !tooth38Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        {/*КАРИЕС ЦЕНТР*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'top');
                            }}
                        >
                            <path className="st7" d="M1892.4,971c-4.3,8.6-11.8,15.1-20.2,19.8c-6,3.3-12.5,5.8-19.2,7.3c-8.3,1.9-16.8,2.5-25.2,2.8
                                c-11.4,0.3-23.1-0.1-33.1-5.6c-5-2.8-9.2-6.6-13.2-10.7c-0.6-0.6-1.2-1.2-1.8-1.9c7.1-15,15.9-24.9,19.6-28.6
                                c9,11.3,25.7,18.2,36.2,18.8c14.4,0.9,27.6-8.2,27.6-8.2c3.1-1.6,5.8-4.9,7.9-9.1C1875.5,957.8,1884.6,963.1,1892.4,971z"
                            />
                            <path className={
                                    `st8 caries-top
                                    ${'caries-stroke'}
                                    ${teethDiagnozis.tooth38.caries_top ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth38.seal_top ? `seal-fill ${teethDiagnozis.tooth38.seal_top_color}` : ''}
                                `} 
                                d="M1892.4,971c-4.3,8.6-11.8,15.1-20.2,19.8c-6,3.3-12.5,5.8-19.2,7.3c-8.3,1.9-16.8,2.5-25.2,2.8
                                c-11.4,0.3-23.1-0.1-33.1-5.6c-5-2.8-9.2-6.6-13.2-10.7c-0.6-0.6-1.2-1.2-1.8-1.9c7.1-15,15.9-24.9,19.6-28.6
                                c9,11.3,25.7,18.2,36.2,18.8c14.4,0.9,27.6-8.2,27.6-8.2c3.1-1.6,5.8-4.9,7.9-9.1C1875.5,957.8,1884.6,963.1,1892.4,971z"
                            />
                        </g>
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                        >
                            <path className="st7" d="M1799.3,954c-3.7,3.7-12.5,13.6-19.6,28.6c-3.2-3.5-6.1-7.2-7.9-11.6c-2.8-6.9-2.5-14.3-3.2-21.6
                                c-0.9-9-3.5-18-3.3-27.2c0.1-7,1.9-13.9,5-20.3c0-0.1,0.1-0.1,0.1-0.2c6.8,5.5,16.2,11.8,27.8,16.3c-3.8,5.3-5.8,12.3-5.1,21
                                C1793.4,944.7,1795.8,949.6,1799.3,954z"
                            />
                            <path className={
                                    `st8 caries-center
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth38.caries_left ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth38.seal_left ? `seal-fill ${teethDiagnozis.tooth38.seal_left_color}` : ''}
                                `} 
                                d="M1799.3,954c-3.7,3.7-12.5,13.6-19.6,28.6c-3.2-3.5-6.1-7.2-7.9-11.6c-2.8-6.9-2.5-14.3-3.2-21.6
                                c-0.9-9-3.5-18-3.3-27.2c0.1-7,1.9-13.9,5-20.3c0-0.1,0.1-0.1,0.1-0.2c6.8,5.5,16.2,11.8,27.8,16.3c-3.8,5.3-5.8,12.3-5.1,21
                                C1793.4,944.7,1795.8,949.6,1799.3,954z"
                            />
                        </g>
                        {/*КАРИЕС НИЗ*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'bottom');
                            }}
                        >
                            <path className="st7" d="M1884.9,891.2c-5.6,7.6-11.6,17.1-15.3,27c-9.9-11.3-34.5-13.8-49.2-11.9c-9.4,1.2-17.4,5.1-22.3,11.8
                                c-11.6-4.5-21-10.8-27.8-16.3c3.1-6.3,7.4-12,12.8-16.4c10.1-8.2,23.3-11.6,36.1-9c4.1,0.9,8.1,2.4,12.2,2.1
                                c2.6-0.2,5-1.1,7.5-1.6c4.8-1,9.7-0.8,14.6-0.5c5.7,0.4,11.4,1,16.6,3.2C1876,882.1,1880.8,886.4,1884.9,891.2z"
                            />
                            <path className={
                                    `st8 caries-center
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth38.caries_bottom ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth38.seal_bottom ? `seal-fill ${teethDiagnozis.tooth38.seal_bottom_color}` : ''}
                                `} 
                                d="M1884.9,891.2c-5.6,7.6-11.6,17.1-15.3,27c-9.9-11.3-34.5-13.8-49.2-11.9c-9.4,1.2-17.4,5.1-22.3,11.8
                                c-11.6-4.5-21-10.8-27.8-16.3c3.1-6.3,7.4-12,12.8-16.4c10.1-8.2,23.3-11.6,36.1-9c4.1,0.9,8.1,2.4,12.2,2.1
                                c2.6-0.2,5-1.1,7.5-1.6c4.8-1,9.7-0.8,14.6-0.5c5.7,0.4,11.4,1,16.6,3.2C1876,882.1,1880.8,886.4,1884.9,891.2z"
                            />
                        </g>
                        {/*КАРИЕС RIGHT*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st7" d="M1897.7,942.5c-0.2,9.7-0.9,19.6-5.2,28.3c0,0.1-0.1,0.1-0.1,0.2c-7.8-7.8-16.9-13.1-21.4-15.5
                                c4.3-8.7,5.9-21.5,1.8-32.1c-0.7-1.9-1.8-3.7-3.2-5.2c3.7-9.9,9.7-19.4,15.3-27c0.4,0.4,0.7,0.8,1.1,1.3c3.1,3.7,5.9,7.6,7.8,12
                                c2.6,6,3.3,12.6,3.7,19.1C1897.8,929.9,1897.8,936.2,1897.7,942.5z"
                            />
                            <path className={
                                    `st8 caries-right
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth38.caries_right ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth38.seal_right ? `seal-fill ${teethDiagnozis.tooth38.seal_right_color}` : ''}
                                `} 
                                d="M1897.7,942.5c-0.2,9.7-0.9,19.6-5.2,28.3c0,0.1-0.1,0.1-0.1,0.2c-7.8-7.8-16.9-13.1-21.4-15.5
                                c4.3-8.7,5.9-21.5,1.8-32.1c-0.7-1.9-1.8-3.7-3.2-5.2c3.7-9.9,9.7-19.4,15.3-27c0.4,0.4,0.7,0.8,1.1,1.3c3.1,3.7,5.9,7.6,7.8,12
                                c2.6,6,3.3,12.6,3.7,19.1C1897.8,929.9,1897.8,936.2,1897.7,942.5z"
                            />
                        </g>
                        {/*КАРИЕС CENTER*/}
                        <g
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                            className="caries-filling"
                        >
                            <path className="st7" d="M1871,955.5c-2.1,4.3-4.9,7.6-7.9,9.1c0,0-13.2,9.1-27.6,8.2c-10.4-0.6-27.1-7.5-36.2-18.8
                                c-3.5-4.3-5.8-9.3-6.3-14.9c-0.7-8.8,1.2-15.8,5.1-21c4.9-6.8,12.9-10.7,22.3-11.8c14.7-1.8,39.3,0.7,49.2,11.9
                                c1.4,1.6,2.5,3.3,3.2,5.2C1876.9,934,1875.3,946.8,1871,955.5z"
                            />
                            <path className={
                                    `st8 caries-center
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth38.caries_center ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth38.seal_center ? `seal-fill ${teethDiagnozis.tooth38.seal_center_color}` : ''}
                                `} 
                                d="M1871,955.5c-2.1,4.3-4.9,7.6-7.9,9.1c0,0-13.2,9.1-27.6,8.2c-10.4-0.6-27.1-7.5-36.2-18.8
                                c-3.5-4.3-5.8-9.3-6.3-14.9c-0.7-8.8,1.2-15.8,5.1-21c4.9-6.8,12.9-10.7,22.3-11.8c14.7-1.8,39.3,0.7,49.2,11.9
                                c1.4,1.6,2.5,3.3,3.2,5.2C1876.9,934,1875.3,946.8,1871,955.5z"
                            />
                        </g>
                        <g className="with up">
                            {/*Черточка низ лево*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth38Diagnozis.seal_right && !tooth38Diagnozis.seal_top) ||
                                        (!tooth38Diagnozis.seal_right && tooth38Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M1871 956C1874.5 957.667 1882.9 962.3 1888.5 967.5" />
                            {/*Овал лево*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth38Diagnozis.seal_right && !tooth38Diagnozis.seal_center) ||
                                        (!tooth38Diagnozis.seal_right && tooth38Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}  
                                d="M1871 956C1875 948.5 1877.5 930.1 1869.5 918.5" />
                            {/*Черточка верх лево*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth38Diagnozis.seal_right && !tooth38Diagnozis.seal_bottom) ||
                                        (!tooth38Diagnozis.seal_right && tooth38Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }}  
                                d="M1869.5 918.5C1869.83 914.833 1872.7 905.2 1881.5 896" />
                            {/*Овал черточка верх*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth38Diagnozis.seal_center && !tooth38Diagnozis.seal_bottom) ||
                                        (!tooth38Diagnozis.seal_center && tooth38Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }} 
                                d="M1869.5 918.5C1865.5 910 1814 902.9 1798 918.5" />
                            {/*Черточка верх право*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth38Diagnozis.seal_left && !tooth38Diagnozis.seal_bottom) ||
                                        (!tooth38Diagnozis.seal_left && tooth38Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }}  
                                d="M1798 918.5C1794.5 918 1784.9 914.6 1774.5 905" />
                            {/*Овал черточка право*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (!tooth38Diagnozis.seal_left && tooth38Diagnozis.seal_center) ||
                                        (tooth38Diagnozis.seal_left && !tooth38Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1798 918.5C1794 927 1794.3 943.6 1799.5 954" />
                            {/*Черточка низ право*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth38Diagnozis.seal_left && !tooth38Diagnozis.seal_top) ||
                                        (!tooth38Diagnozis.seal_left && tooth38Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M1799.5 954C1796.5 956.5 1788.8 964.7 1782 977.5" />
                            {/*Овал черточка низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (!tooth38Diagnozis.seal_center && tooth38Diagnozis.seal_top) ||
                                        (tooth38Diagnozis.seal_center && !tooth38Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M1799 954C1808.17 966.475 1835.4 984.253 1871 955.559" />
                        </g>
                    </g>
                    {/*VINIR*/}
                    <g className="" style={{visibility: 'inherit'}}>
                        <g className="vinir"
                            style={
                                {
                                    visibility: tooth38Diagnozis.vinir ? 'inherit' : 'hidden',
                                    opacity: tooth38Diagnozis.vinir ? 1 : 0
                                }}
                        >
                            <path className={`vinir-fill ${tooth38Diagnozis.vinir_color}`} 
                                d="M1771.7 971.201C1773.5 975.601 1776.4 979.301 1779.6 982.801C1780.2 983.401 1780.8 984.101 1781.4 984.701C1785.4 988.801 1789.6 992.701 1794.6 995.401C1804.6 1000.9 1816.3 1001.3 1827.7 1001C1836.2 1000.8 1844.7 1000.2 1852.9 998.201C1859.6 996.601 1866.1 994.201 1872.1 990.901C1880.5 986.201 1887.9 979.701 1892.3 971.101C1892.3 971.001 1892.4 971.001 1892.4 970.901C1895.31 965.006 1896.53 958.561 1897.1 952C1893.98 952.486 
                                1887.41 954.466 1886.18 958.5C1885.55 961.175 1884.68 963.779 1883.45 966.269C1883.45 966.354 1883.36 966.354 1883.36 966.439C1879.61 973.773 1873.3 979.317 1866.14 983.325C1861.03 986.139 1855.49 988.186 1849.77 989.55C1842.78 991.256 1835.54 991.767 1828.29 991.938C1818.57 992.194 1808.6 991.853 1800.07 987.162C1795.81 984.86 1792.23 981.534 1788.82 
                                978.037C1788.31 977.526 1787.8 976.929 1787.28 976.417C1785.58 974.547 1783.97 972.609 1782.63 970.5C1781.13 967.3 1773.83 966.882 1770.38 967.073C1770.72 968.465 1771.15 969.843 
                                1771.7 971.201Z"
                            />
                        </g>
                    </g>
                    {/* ТИМЧАСОВА КОРОНКА/КЕРАМІЧНА КОРОНКА */}
                    <g className="crown" style={{
                        visibility: (tooth38Diagnozis.temporary_crown || tooth38Diagnozis.ceramic_crown || tooth38Diagnozis.mceramic_crown || tooth38Diagnozis.metalic_crown || tooth38Diagnozis.zirconia_crown) ? 'inherit' : 'hidden',
                        opacity: (tooth38Diagnozis.temporary_crown || tooth38Diagnozis.ceramic_crown || tooth38Diagnozis.mceramic_crown || tooth38Diagnozis.metalic_crown || tooth38Diagnozis.zirconia_crown)  ? 1 : 0
                    }}>
                        <path className={
                                `st46 target temporary-crown crown-fill ${diagnozis}
                                ${tooth38Diagnozis.ceramic_crown_color}
                                ${tooth38Diagnozis.mceramic_crown_color}
                                ${tooth38Diagnozis.metalic_crown_color}
                                ${tooth38Diagnozis.zirconia_crown_color}
                            `} 
                            d="M1897.5,923.6c-0.4-6.5-1.2-13.1-3.7-19.1c-1.9-4.4-4.7-8.3-7.8-12
                            c-0.4-0.4-0.7-0.8-1.1-1.3c-4.1-4.8-8.9-9.1-14.8-11.5c-5.2-2.2-11-2.8-16.6-3.2c-4.9-0.3-9.8-0.5-14.6,0.5
                            c-2.5,0.5-4.9,1.4-7.5,1.6c-4.2,0.3-8.2-1.2-12.2-2.1c-12.7-2.7-25.9,0.8-36.1,9c-5.4,4.4-9.8,10.1-12.8,16.4
                            c0,0.1-0.1,0.1-0.1,0.2c-3.1,6.3-4.8,13.2-5,20.3c-0.2,9.2,2.4,18.2,3.3,27.2c0.7,7.3,0.4,14.7,3.2,21.6c1.8,4.4,4.7,8.1,7.9,11.6
                            c0.6,0.6,1.2,1.3,1.8,1.9c4,4.1,8.2,8,13.2,10.7c10,5.5,21.7,5.9,33.1,5.6c8.5-0.2,17-0.8,25.2-2.8c6.7-1.6,13.2-4,19.2-7.3
                            c8.4-4.7,15.8-11.2,20.2-19.8c0-0.1,0.1-0.1,0.1-0.2c4.3-8.7,4.9-18.6,5.2-28.3C1897.8,936.2,1897.8,929.9,1897.5,923.6z"
                        />
                        <path className={`st3 fissure ${tooth38Diagnozis.fissure ? 'diagnoze' : tooth38Diagnozis.fissure ? 'hidden' : ''}`}  
                            d="M1873.7,921.4c-1,3.2-2.7,6.2-4.9,8.7c-2.1,2.4-4.3,3.9-6.6,4.6c-4,1.2-8.2-0.4-12.1-1.9
                            c-0.9-0.3-1.8-0.7-2.6-1c-4.1-1.4-8.3-2.2-12.7-2.4c0-1.5,0-3,0.1-4.2c0-0.8,0.1-1.7,0.1-2.6c0.2-5,0.5-10.1-0.6-15.1
                            c-0.7-3.3-2-6.5-3.9-9.3l-0.9,0.6c1.8,2.8,3,5.8,3.7,9c1.1,4.8,0.8,9.9,0.6,14.8c0,0.9-0.1,1.7-0.1,2.6c-0.1,1.3-0.1,2.7-0.1,4.3
                            c-3.5,0.6-7.1,1-10.7,1.1c-0.8,0-1.7,0-2.5,0.1c-2.2,0-4.4,0.1-6.5,0.3c-0.5-1.1-0.9-2.2-1.1-3.3c-0.2-0.8-0.3-1.6-0.4-2.4
                            c-0.1-0.7-0.2-1.4-0.3-2.1c-0.3-1.9-0.9-3.9-2.6-5.9c-1.7-1.9-3.7-4-6.9-5.3l-0.4,1c3,1.2,4.9,3.2,6.5,5c1.6,1.8,2.1,3.6,2.4,5.4
                            c0.1,0.7,0.2,1.3,0.3,2c0.1,0.8,0.2,1.6,0.4,2.5c0.2,1.1,0.6,2.2,1,3.2c-2.4,0.4-4.7,1-6.8,2.2c-2.6,1.4-4.7,3.6-6.1,6.2
                            c-1.2,2.3-1.8,4.9-1.6,7.4l1.1-0.1c-0.1-2.4,0.4-4.8,1.5-6.9c1.3-2.4,3.2-4.4,5.6-5.7c2.1-1.2,4.4-1.8,6.8-2.1
                            c0.9,1.9,2,3.7,3.2,5.4c1.7,2.6,3.5,5.1,5.4,7.7l0.9-0.6c-1.9-2.5-3.7-5-5.4-7.6c-1.1-1.6-2.1-3.2-2.9-5c2-0.2,4.1-0.3,6.1-0.3
                            c0.9,0,1.7,0,2.6-0.1c3.6-0.1,7.2-0.5,10.7-1.1c0,1.3,0.1,2.5,0.2,3.9c0.2,2.2,0.5,4.3,0.8,6.4l0.2,1.1c0.6,3.8,1.1,7.9,0.6,11.9
                            c-0.1,0.8-0.2,1.6-0.3,2.3c-0.3,1.9-0.6,3.9-0.4,5.9c0.4,3.2,2.1,6.1,4.8,7.9l0.6-0.9c-2.4-1.6-4-4.2-4.3-7.1
                            c-0.2-1.8,0.1-3.7,0.4-5.6c0.1-0.8,0.3-1.6,0.4-2.4c0.3-2.2,0.2-4.4,0-6.6c2.2-0.2,4.3,0.3,6.1,1.4c2.2,1.3,3.8,3.3,4.6,5.7l1-0.3
                            c-0.9-2.6-2.7-4.9-5.1-6.3c-2.1-1.2-4.4-1.7-6.8-1.5c-0.2-1.5-0.3-3-0.6-4.5l-0.2-1.1c-0.3-2.1-0.6-4.2-0.8-6.4
                            c-0.1-1.3-0.1-2.5-0.2-3.8c4.2,0.2,8.3,1,12.3,2.4c0.9,0.3,1.7,0.6,2.6,0.9c4.2,1.6,8.5,3.2,12.8,1.9c2.5-0.7,4.9-2.3,7.1-4.9
                            c2.3-2.7,4-5.7,5.1-9.1L1873.7,921.4z"
                        />
                    </g>
                    {/*FISSURES*/}
                    <g className="fissures" style={{visibility: (!tooth38Diagnozis.culttab && !tooth38Diagnozis.abutment && !tooth38Diagnozis.implant && !tooth38Diagnozis.apex && !tooth38Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className={`st3 fissure ${tooth38Diagnozis.fissure ? 'diagnoze' : ''}`}  
                            d="M1873.7,921.4c-1,3.2-2.7,6.2-4.9,8.7c-2.1,2.4-4.3,3.9-6.6,4.6c-4,1.2-8.2-0.4-12.1-1.9
                            c-0.9-0.3-1.8-0.7-2.6-1c-4.1-1.4-8.3-2.2-12.7-2.4c0-1.5,0-3,0.1-4.2c0-0.8,0.1-1.7,0.1-2.6c0.2-5,0.5-10.1-0.6-15.1
                            c-0.7-3.3-2-6.5-3.9-9.3l-0.9,0.6c1.8,2.8,3,5.8,3.7,9c1.1,4.8,0.8,9.9,0.6,14.8c0,0.9-0.1,1.7-0.1,2.6c-0.1,1.3-0.1,2.7-0.1,4.3
                            c-3.5,0.6-7.1,1-10.7,1.1c-0.8,0-1.7,0-2.5,0.1c-2.2,0-4.4,0.1-6.5,0.3c-0.5-1.1-0.9-2.2-1.1-3.3c-0.2-0.8-0.3-1.6-0.4-2.4
                            c-0.1-0.7-0.2-1.4-0.3-2.1c-0.3-1.9-0.9-3.9-2.6-5.9c-1.7-1.9-3.7-4-6.9-5.3l-0.4,1c3,1.2,4.9,3.2,6.5,5c1.6,1.8,2.1,3.6,2.4,5.4
                            c0.1,0.7,0.2,1.3,0.3,2c0.1,0.8,0.2,1.6,0.4,2.5c0.2,1.1,0.6,2.2,1,3.2c-2.4,0.4-4.7,1-6.8,2.2c-2.6,1.4-4.7,3.6-6.1,6.2
                            c-1.2,2.3-1.8,4.9-1.6,7.4l1.1-0.1c-0.1-2.4,0.4-4.8,1.5-6.9c1.3-2.4,3.2-4.4,5.6-5.7c2.1-1.2,4.4-1.8,6.8-2.1
                            c0.9,1.9,2,3.7,3.2,5.4c1.7,2.6,3.5,5.1,5.4,7.7l0.9-0.6c-1.9-2.5-3.7-5-5.4-7.6c-1.1-1.6-2.1-3.2-2.9-5c2-0.2,4.1-0.3,6.1-0.3
                            c0.9,0,1.7,0,2.6-0.1c3.6-0.1,7.2-0.5,10.7-1.1c0,1.3,0.1,2.5,0.2,3.9c0.2,2.2,0.5,4.3,0.8,6.4l0.2,1.1c0.6,3.8,1.1,7.9,0.6,11.9
                            c-0.1,0.8-0.2,1.6-0.3,2.3c-0.3,1.9-0.6,3.9-0.4,5.9c0.4,3.2,2.1,6.1,4.8,7.9l0.6-0.9c-2.4-1.6-4-4.2-4.3-7.1
                            c-0.2-1.8,0.1-3.7,0.4-5.6c0.1-0.8,0.3-1.6,0.4-2.4c0.3-2.2,0.2-4.4,0-6.6c2.2-0.2,4.3,0.3,6.1,1.4c2.2,1.3,3.8,3.3,4.6,5.7l1-0.3
                            c-0.9-2.6-2.7-4.9-5.1-6.3c-2.1-1.2-4.4-1.7-6.8-1.5c-0.2-1.5-0.3-3-0.6-4.5l-0.2-1.1c-0.3-2.1-0.6-4.2-0.8-6.4
                            c-0.1-1.3-0.1-2.5-0.2-3.8c4.2,0.2,8.3,1,12.3,2.4c0.9,0.3,1.7,0.6,2.6,0.9c4.2,1.6,8.5,3.2,12.8,1.9c2.5-0.7,4.9-2.3,7.1-4.9
                            c2.3-2.7,4-5.7,5.1-9.1L1873.7,921.4z"
                        />
                    </g>
                </g>
                <g id="T_48" className="common-view" style={{visibility: tooth38Diagnozis.absent ? 'hidden' : 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <g className="dentin">
                        <g id="dentin_v_38" className=" hImplant hEmpty" style={{visibility: !tooth38Diagnozis.implant && !tooth38Diagnozis.apex && !tooth38Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_v_38" className={`st9 change-color ${tooth38Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M1892,1087.7c-5,10.9-12.8,20.3-22.5,27.3c-2.3,1.6-4.6,3.1-7.1,4.5
                                c-9.6,5.4-20.3,8.6-31.2,10.5c-2.1,0.4-4.3,0.7-6.4,0.9c-12.4,1.5-24.9,1.2-37.2-0.8c-0.6-0.4-1.2-0.9-1.7-1.4c0,0,0,0,0,0
                                c-1.4-1.4-2.8-2.8-4.3-4.3c-1.3-8.2-2.6-18.8-3.1-27.1c-0.4-7.5-0.5-15.1-0.3-22.6c8.6,1.3,17.3,2.2,26,2.8
                                c8.7,0.6,17.4,0.8,26,0.6c6.4-3.5,12.6-7.4,18.4-11.7c5.7-4.2,11.1-8.8,16.1-13.8c5.3,4.3,10.3,9,14.8,14
                                c4.6,5.1,8.7,10.5,12.4,16.2C1892,1084.5,1892,1086.1,1892,1087.7z"
                            />
                        </g>
                        <g id="dentin_n_38" className="hImplant hEmpty" style={{visibility: !tooth38Diagnozis.culttab && !tooth38Diagnozis.abutment && !tooth38Diagnozis.implant && !tooth38Diagnozis.shaper && !tooth38Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                            <path id="dentin_n_38" className={`st10 change-color ${tooth38Diagnozis.change_color ? 'diagnoze' : ''}`}
                                d="M1890.7,1173.1c-0.6,12.8-1.9,26.4-12,35.2c-2.2,1.9-5.1,3.4-7.8,2.3
                                c-1.8-0.7-2.7-2.4-3.3-4.1c-1.8-5.8,0.5-11.7,0.9-17.7c0.4-6.8-1.8-13.5-3.3-20.2c-1.3-5.6-2.3-11.4-6-16
                                c-1.9-2.4-4.8-4.2-7.7-3.2c-3.4,1.2-3.9,5.1-3.6,8.7c0.6,6,2,11.8,4.1,17.5c2.8,7.5,7,14.6,10.9,21.7c1.5,2.7,3,5.5,2.8,8.6
                                c0,0.5-0.1,1-0.3,1.5c0,0.1,0,0.2-0.1,0.2c-0.4,1.2-1.1,2.2-2.2,3c-2.5,1.7-5.3,1.2-8.1,0.7c-2.9-0.5-6.1-0.9-9-1.9
                                c-4-1.4-7.8-3.7-11.3-6.3c-4.1-3-7.9-6.2-11.3-9.8c-6.8-7.2-11.4-15.9-15.1-24.8c-2.4-6-4.5-12.1-7.2-18c-3.9-8.6-9-15-15.3-21.6
                                c0.6,0.5,1.1,1,1.8,1.4c12.3,2,24.8,2.3,37.2,0.8c2.2-0.3,4.3-0.6,6.4-0.9c10.9-1.9,21.6-5.1,31.2-10.5c2.4-1.3,4.8-2.8,7.1-4.5
                                c9.8-7,17.5-16.4,22.5-27.3C1892.4,1116.2,1892,1144.7,1890.7,1173.1z" 
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g className="hEmpty  hImplant pulpitis-pfilling" style={{visibility: 'inherit'}}>
                            <path className={`st22 target top ${tooth38Diagnozis.channel_class} ${tooth38Diagnozis.channel_class} ${tooth38Diagnozis.pulpit ? 'pulpit' : ''} ${tooth38Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1862.4,1119.5c-0.6,0.3-1.2,0.6-1.8,1c-0.4,0.2-0.9,0.5-1.4,0.7
                                c-0.3,0.2-0.6,0.3-0.9,0.5c-0.5,0.2-1,0.5-1.5,0.7c-0.5,0.2-1,0.5-1.5,0.7c-0.2,0.1-0.3,0.1-0.5,0.2c-0.6,0.2-1.1,0.5-1.7,0.7
                                c-1.5,0.6-3.1,1.2-4.6,1.7c-0.6,0.2-1.1,0.4-1.7,0.6c-0.4,0.1-0.7,0.2-1.1,0.3c-0.7,0.2-1.3,0.4-2,0.6c-0.6,0.2-1.2,0.3-1.8,0.5
                                c-1.5,0.4-3.1,0.8-4.7,1.1c-0.6,0.1-1.2,0.3-1.8,0.4c-0.1,0-0.3,0-0.4,0.1c-0.6,0.1-1.2,0.2-1.8,0.3c-0.7,0.1-1.4,0.2-2.1,0.4
                                c-0.9,0.2-1.8,0.3-2.8,0.4c-0.1,0-0.3,0.1-0.5,0.1c-0.7,0.1-1.4,0.2-2.1,0.3c-0.4,0.1-0.8,0.1-1.2,0.2c-0.2-0.7-0.4-1.3-0.6-1.9
                                c-1.3-4-3.1-7.8-4.5-11.8c-1.3-3.7-2.1-7.4-2.6-11.3c5.9,2.8,13.9,3.2,21.6,0.8c7-2.1,13.1-6.3,16.9-11.7
                                c1.8,4.1,3.1,8.4,4.1,12.7C1860.6,1111.7,1861.2,1115.7,1862.4,1119.5z"
                            />
                        </g>
                        <g className="pulpitis-pfilling" style={{visibility: 'inherit'}}>
                            <path className={`st22 target top ${tooth38Diagnozis.channel_class} ${tooth38Diagnozis.channel_class} ${tooth38Diagnozis.pulpit ? 'pulpit' : ''} ${tooth38Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1881.1,1154.1c-0.9,0.4-1.8,0.7-2.7,1.1c-2.5-7.6-6.8-14.4-13.9-19.1
                                c-4.4-2.9-9.4-4.7-15.2-3.4c-8.2,1.8-13.2,8.7-15,15.7c-1.4,5.3-1.8,10.7-1.2,15.9c-1.3,0-2.6-0.1-3.8-0.1
                                c-2-11-1.5-22.5-4.5-33.2c0.4-0.1,0.8-0.1,1.2-0.2c0.7-0.1,1.4-0.2,2-0.3c0.2,0,0.3,0,0.5-0.1c0.9-0.1,1.8-0.3,2.8-0.4
                                c0.7-0.1,1.4-0.2,2.1-0.4c0.6-0.1,1.2-0.2,1.8-0.3c0.1,0,0.3-0.1,0.4-0.1c0.6-0.1,1.2-0.3,1.8-0.4c1.6-0.3,3.1-0.7,4.7-1.1
                                c0.6-0.2,1.2-0.3,1.8-0.5c0.7-0.2,1.4-0.4,2-0.6c0.4-0.1,0.7-0.2,1.1-0.3c0.6-0.2,1.2-0.4,1.7-0.6c1.6-0.5,3.1-1.1,4.6-1.7
                                c0.6-0.2,1.2-0.5,1.7-0.7c0.2-0.1,0.3-0.2,0.5-0.2c0.5-0.2,1-0.5,1.6-0.7c0.5-0.2,1-0.5,1.5-0.7c0.3-0.1,0.6-0.3,0.9-0.4
                                c0.5-0.2,0.9-0.4,1.4-0.7c0.6-0.3,1.2-0.6,1.8-1c0.1,0.4,0.3,0.8,0.4,1.3c3.1,8.3,9.7,15,14,22.9
                                C1878.7,1147,1880.1,1150.5,1881.1,1154.1z"
                            />
                        </g>
                        <g className="pulpitis-pfilling">
                            <path className={`st22 target top ${tooth38Diagnozis.channel_class} ${tooth38Diagnozis.channel_class} ${tooth38Diagnozis.pulpit ? 'pulpit' : ''} ${tooth38Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1837.4,1179.4c-2.2-4.8-3.7-9.9-4.3-15.1c-1.3,0-2.6-0.1-3.8-0.1c0.2,0.9,0.4,1.8,0.6,2.8
                                c1.9,8.5,5.6,16.5,11.3,23.5c6.1,7.4,14.4,13.2,24.3,17.1c0.8,0.3,1.6,0.6,2.4,0.9c-0.8-0.4-1.6-0.8-2.3-1.1
                                C1852.7,1200.9,1842.9,1191.2,1837.4,1179.4z" 
                            />
                            <path className={`st22 target top ${tooth38Diagnozis.channel_class} ${tooth38Diagnozis.channel_class} ${tooth38Diagnozis.pulpit ? 'pulpit' : ''} ${tooth38Diagnozis.periodontit ? 'periodontit' : ''}`}   
                                d="M1881.1,1154.1c-0.9,0.4-1.8,0.7-2.7,1.1c1.1,3.5,1.8,7.1,2.2,10.7c1.6,14.4-1.2,29.4-8.1,43.3
                                c5.6-10,9-20.5,10.2-31C1883.7,1170.1,1883.3,1161.9,1881.1,1154.1z"
                            />
                        </g>
                        <PeriodontitStage38 />
                    </g>
                    {/*PIN*/}
                    <g className="pin" style={{
                        visibility: 'inherit', opacity: tooth38Diagnozis.pin ? 1 : 0
                    }}>
                        <path className="st56 hIntact" d="M1892.2 1087.7C1887.5 1097.8 1880.4 1106.7 1871.6 1113.5C1871 1114 1870.3 1114.5 1869.7 1115C1867.4 1116.6 1865.1 1118.1 1862.6 1119.5C1861.4 1120.2 1860.3 1120.8 1859.1 1121.4C1850.4 1125.7 1841 1128.4 1831.4 1130.1C1829.3 1130.5 1827.1 1130.8 1825 1131C1812.6 1132.5 1800.1 1132.2 1787.8 1130.2C1787.2 1129.7 1786.6 1129.3 1786.1 1128.8C1784.7 1127.4 1783.3 1126 1781.8 1124.5C1780.4 1116.3 1779.2 1105.7 1778.7 1097.4C1778.3 1089.9 1778.2 1082.3 1778.5 1074.8C1787.1 1076.1 1795.8 1077 1804.5 1077.6C1813.2 1078.2 1821.8 1078.4 1830.5 1078.2C1836.9 1074.7 1843.1 1070.8 1848.9 1066.5C1854.6 1062.3 1860 1057.7 1865 1052.7C1870.3 1057 1875.3 1061.7 1879.8 1066.7C1884.4 1071.8 1888.5 1077.2 1892.2 1082.9C1892.1 1084.5 1892.1 
                            1086.1 1892.2 1087.7Z" style={{visibility: 'hidden'}} />
                        <path className="st57" d="M1835.21 1075.5L1859.11 1121.2L1873.61 1148.9L1879.41 1160.1C1879.91 1161.1 1881.21 1161.3 1881.91 1160.5C1882.31 1160.1 1882.51 1159.5 1882.31 1159L1851.21 1064.7C1850.51 1065.2 1849.91 1065.7 1849.21 1066.2C1849.11 1066.3 1849.01 1066.3 1848.91 1066.4C1848.21 1066.9 1847.41 1067.5 1846.71 1068C1846.01 1068.5 1845.31 1069 1844.61 1069.4C1844.51 1069.5 1844.41 1069.5 1844.31 1069.6C1843.61 1070.1 1842.91 1070.6 1842.11 1071.1C1842.11 1071.1 1842.01 1071.1 1842.01 1071.2C1841.31 1071.7 1840.51 1072.1 1839.81 1072.6C1839.01 1073.1 1838.31 1073.6 1837.51 
                            1074C1836.71 1074.5 1835.91 1075 1835.21 1075.4C1835.31 1075.5 1835.31 1075.5 1835.21 1075.5Z"
                            style={{fill: tooth38Diagnozis.pin ? '#dbd9d3' : 'none'}} 
                        />
                    </g>
                    {/* CULT TAB */}
                    <g className="stump  hImplant" style={{visibility: tooth38Diagnozis.culttab ? 'inherit' : 'hidden', opacity: tooth38Diagnozis.culttab ? 1 : 0}}>
                        <path className="st14" d="M1881.8,1160.5L1881.8,1160.5c-0.8,0.8-2.1,0.6-2.6-0.4l-20.2-38.8c1.2-0.6,2.4-1.2,3.5-1.9
                            c2.4-1.4,4.8-2.8,7.1-4.5c0.7-0.5,1.3-1,1.9-1.5l10.6,45.5C1882.3,1159.6,1882.2,1160.1,1881.8,1160.5z"
                        />
                        <path className="st15" d="M1892.2,1087.7c-4.7,10.1-11.8,19-20.6,25.8c-0.6,0.5-1.3,1-1.9,1.5c-2.3,1.6-4.6,3.1-7.1,4.5
                            c-1.2,0.7-2.3,1.3-3.5,1.9c-8.7,4.3-18.1,7-27.7,8.7c-2.1,0.4-4.3,0.7-6.4,0.9c-12.4,1.5-24.9,1.2-37.2-0.8
                            c-0.6-0.5-1.2-0.9-1.7-1.4c-1.4-1.4-2.8-2.8-4.3-4.3c-1.4-8.2-2.6-18.8-3.1-27.1c-0.4-7.5-0.5-15.1-0.2-22.6
                            c8.6,1.3,17.3,2.2,26,2.8c8.7,0.6,17.3,0.8,26,0.6c6.4-3.5,12.6-7.4,18.4-11.7c5.7-4.2,11.1-8.8,16.1-13.8
                            c5.3,4.3,10.3,9,14.8,14c4.6,5.1,8.7,10.5,12.4,16.2C1892.1,1084.5,1892.1,1086.1,1892.2,1087.7z"
                        />
                    </g>
                    <g className="abutment" style={{visibility: tooth38Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth38Diagnozis.abutment ? 1 : 0}}>
                        <path className="st16" d="M1786.7,1129.1l50.2,14.9l31.6-14.4l24.4-42.2c-5.9,10.6-14.2,19.7-24.2,26.5c-11.4,7.9-24.7,12.6-38.3,15
                            C1815.9,1131.6,1801.1,1131.6,1786.7,1129.1z"
                        />
                        <path className="st17" d="M1777.6,1096.3c0.5,8.3,1.4,18.6,2.8,26.8c1.3,1.3,2.5,2.5,3.6,3.8c0.9,0.8,1.8,1.6,2.7,2.3
                            c14.5,2.5,29.2,2.5,43.7-0.1c13.7-2.4,26.9-7.1,38.3-15c10-6.9,18.3-16,24.2-26.5c-3.7-5.8-9.7-16.8-14.1-21.8
                            c-4.5-5-9.5-9.7-14.8-14c-5,5-10.4,9.6-16.1,13.8c-5.8,4.3-12,8.2-18.4,11.7c-8.7,0.1-17.4-0.1-26-0.6c-8.7-0.6-17.4-1.5-26-2.8
                            C1777.1,1081.3,1777.1,1088.8,1777.6,1096.3z" 
                        />
                    </g>
                    {/* ФОРМУВАЧ */}
                    <g className="shaper" style={{visibility: 'hidden', opacity: 0}} >
                        <path className="st44" d="M1863.41 1090.01C1862.82 1087.6 1860.19 1086.31 1857.92 1087.31L1812.84 1107.14C1810.57 1108.13 1809.74 1110.94 1811.12 1113.01L1833.23 1146.35C1834.3 1147.97 1836.4 1148.59 1838.18 1147.79L1870.73 1133.35C1872.5 1132.56 1873.46 1130.62 1872.99 1128.73L1863.41 1090.01Z"></path>
                    </g>
                    {/* IMPLANT/CULTTAB */}
                    <g className="implant" style={{visibility: tooth38Diagnozis.abutment || tooth38Diagnozis.implant || tooth38Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <path className="st18" d="M1876.4,1127c0,0,8.8,27.5,11.9,39.6s7.2,39.1,7.4,40.5s-5.8,9.5-13.5,12.1s-15.1-1.1-15.6-1.4
                            c-0.5-0.4-25.2-43.1-28.9-50.8c-3.7-7.7-7.9-18.6-7.9-18.6L1876.4,1127z"
                        />
                        <line className="st19" x1="1882.4" y1="1131.5" x2="1831.9" y2="1163" />
                        <line className="st19" x1="1887.4" y1="1146.5" x2="1836.9" y2="1178" />
                        <line className="st19" x1="1893.4" y1="1161.5" x2="1842.9" y2="1193" />
                        <line className="st19" x1="1899.4" y1="1175.5" x2="1848.9" y2="1207" />
                        <line className="st19" x1="1904.4" y1="1191.5" x2="1853.9" y2="1223" />
                    </g>
                    <g className="toutline" style={{visibility: !tooth38Diagnozis.culttab && !tooth38Diagnozis.abutment && !tooth38Diagnozis.implant && !tooth38Diagnozis.shaper && !tooth38Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1894.3,1065.5c-1.2-5.2-3.6-10-6.5-14.5c-5.4-8.4-12.4-15.6-20.5-21.4l-8.4,1.1
                            c-0.9,3.4-2.9,6.4-5.7,8.6c-0.9,0.7-1.9,1.4-3,1.9c-7.2,3.9-16.8,4.8-19.6,12.8c-1.1,3.1-0.6,6.4-0.1,9.6
                            c0.6,3.6,1.2,7.3,1.8,10.9l-1.9,0c-0.5-4-1.6-8-3.1-11.8c-0.7-1.8-1.5-3.5-2.8-4.9c-3-3.2-7.6-3.8-11.9-3.5
                            c-10,0.7-19.9,5.5-29.7,2.8c0,0-0.1,0-0.1,0c-2.3-0.6-4.5-1.7-6.4-3.1l-3.7,1.1c-1.2,3.8-2.2,7.7-3,11.6c-1.8,9-2.5,18.1-1.4,27.2
                            c1.3,10.5,4.9,20.7,11.7,28.9c1.2,1.5,2.5,2.9,3.9,4.2l0,0c1.1,1,2.2,2,3.4,2.9c14.5,2.4,29.2,2.3,43.7-0.1
                            c13.7-2.3,27-6.9,38.3-15c10-7.2,17.9-16.9,22.9-28.2c0.6-1.3,1.1-2.7,1.5-4l0,0C1895.5,1077.2,1895.7,1071.2,1894.3,1065.5z"
                        />
                    </g>
                    {/*КЛИНОВИДНИЙ ЕФЕКТ/ПРИШИЙКОВА ПЛОМБА/ПРИШИЙКОВИЙ КАРІЄС*/}
                    <g className="wedge-shaped" style={{visibility: !tooth38Diagnozis.culttab && !tooth38Diagnozis.abutment ? 'inherit' : 'hidden'}}>
                        <path className="st7 st59" d="M1887.81 1051C1890.71 1055.5 1893.11 1060.3 1894.31 1065.5C1895.71 1071.2 1895.51 1077.2 1893.71 1082.6C1893.31 1083.9 1892.81 1085.3 1892.21 1086.6C1887.21 1097.9 1879.31 1107.6 1869.31 1114.8C1858.01 1122.9 1844.71 1127.5 1831.01 1129.8C1816.51 1132.2 1801.81 1132.3 1787.31 1129.9C1786.11 1129 1785.01 1128 1783.91 1127C1782.51 1125.7 1781.21 1124.3 1780.01 1122.8C1773.21 1114.6 1769.61 1104.4 1768.31 1093.9C1767.21 1084.8 1767.91 1075.7 1769.71 1066.7C1770.51 1062.8 1771.51 1058.9 1772.71 1055.1L1776.41 1054C1778.31 1055.4 1780.51 1056.5 1782.81 1057.1H1782.91C1789.23 1058.84 1795.59 1057.46 1801.99 1056.08C1805.51 1055.31 1809.06 1054.55 1812.61 1054.3C1816.91 1054 1821.51 1054.6 1824.51 1057.8C1825.81 1059.2 1826.61 1060.9 1827.31 1062.7C1828.81 1066.5 1829.91 1070.5 1830.41 1074.5H1832.31C1832.01 1072.7 1831.71 1070.87 1831.41 1069.05C1831.11 1067.22 1830.81 1065.4 1830.51 1063.6C1830.01 1060.4 1829.51 1057.1 1830.61 1054C1832.6 1048.3 1838.05 1046.2 1843.62 1044.06C1845.87 1043.19 1848.14 1042.32 1850.21 1041.2C1851.31 1040.7 1852.31 1040 1853.21 1039.3C1856.01 1037.1 1858.01 1034.1 1858.91 1030.7L1867.31 1029.6C1875.41 1035.4 1882.41 1042.6 1887.81 1051ZM1865.41 1112.25C1855.42 1119.35 1843.65 1123.38 1831.52 1125.39C1823.03 1126.81 1794.08 1130.8 1784.22 1116.61C1783.51 1115.59 1784.1 1114.23 1785.28 1113.86C1825.5 1101.4 1848.24 1093.93 1884.82 1081.12C1886.25 1080.61 1887.68 1081.83 1887.27 1083.28C1886.85 1084.75 1886.31 
                            1086.18 1885.68 1087.54C1881.25 1097.44 1874.26 1105.94 1865.41 1112.25Z"
                        />
                        <path className={`st7 ${tooth38Diagnozis?.cervical_caries ? 'cervical-caries' : ''}`}  
                            d="M1831.52 1125.39C1843.65 1123.38 1855.42 1119.35 1865.41 1112.25C1874.26 1105.94 1881.25 1097.44 1885.68 1087.54C1886.31 1086.18 1886.85 1084.75 1887.27 1083.28C1887.68 1081.83 1886.25 1080.61 1884.82 1081.12C1848.24 1093.93 1825.5 1101.4 1785.28 1113.86C1784.1 1114.23 1783.51 1115.59 1784.22 1116.61C1794.08 1130.8 1823.03 1126.81 
                            1831.52 1125.39Z" 
                        />
                        <path className={
                                `st60
                                    ${(tooth38Diagnozis?.wedge_shaped_defect) ? `shaped-defect-stroke` : ""}
                                    ${(tooth38Diagnozis?.seal_cervical) ? `seal-cervical-stroke` : ""}
                                    ${tooth38Diagnozis.seal_cervical_color}
                                `
                            }  
                            d="M1831.52 1125.39C1843.65 1123.38 1855.42 1119.35 1865.41 1112.25C1874.26 1105.94 1881.25 1097.44 1885.68 1087.54C1886.31 1086.18 1886.85 1084.75 1887.27 1083.28C1887.68 1081.83 1886.25 1080.61 1884.82 1081.12C1848.24 1093.93 1825.5 1101.4 1785.28 1113.86C1784.1 1114.23 1783.51 1115.59 1784.22 1116.61C1794.08 1130.8 
                            1823.03 1126.81 1831.52 1125.39Z" 
                        />
                    </g>
                    {/*TARTAR*/}
                    <g className="tartar hImplant hEmpty" style={{visibility: 'inherit', opacity: teethDiagnozis.tooth38.tartar ? 1 : 0}}>
                        <path className="st61 level2" d="M1895 1070L1893.5 1071.5L1893 1074L1892 1076.5L1891.5 1079L1889.5 1081.5V1084.22L1888 1087L1886.5 1091L1886 1093.5L1884.5 1095.5L1881.5 1099L1879 1102.5L1876.5 1105.5L1874.5 1109L1871.5 1110.5L1869.5 1112L1864.5 1116L1861 1118L1858.5 1119L1854.5 1121.5H1851.5L1849 1123.5L1844 1125H1841.5L1838 1126.5H1835L1829.5 1127.5L1825.5 1129H1819.5L1814.5 1130L1809 1129H1804.5L1799.5 1127.5L1796 1129L1792.5 1127.5L1790 1125H1787.5L1785.5 1123.5L1783 1120.5H1781.5L1779.5 1118L1779 1116.5L1777.5 1115.5L1777 1113.5L1776 1112.5L1773.5 1112L1773 1113.5L1774 1115L1774.5 1116.5L1775.5 1118.5L1777 1120.5L1777.5 1122.5L1779.5 1125L1780 1127L1781.5 1129L1784.5 1131L1785.5 1134L1787.5 1135L1790 1137.5L1791 1139.5L1792.5 1142L1795 1144.5L1796.5 1146L1797.5 1149L1799.5 1152L1801.5 1153L1805.5 1153.5L1809 1154L1814 1152.5L1819.5 1154H1827L1831.5 1155L1835.5 1153L1840 1152.5L1845.5 1150.5L1851.5 1148L1858 1147.5L1863 1144.5L1869 1142.5L1872.5 1139.5L1876.5 1137.5L1879 1133.5L1883 1131L1886 1127.5L1889.5 1126.5L1893 1122.5L1894 1116.5L1894.5 1112.5L1893.5 1109L1894.5 1105.5V1103L1895 1100L1894.5 1095.5L1894 1093.5L1894.5 1091V1089V1085.5L1895 1083L1896 1080V1077.5L1896.5 1075.5L1896 1073.5V1071.5L1895 1070Z"></path>
                        <path className="st61 level1" d="M1895 1070L1893.5 1071.5L1893 1074L1892 1076.5L1891.5 1079L1889.5 1081.5V1084.22L1888 1087L1886.5 1091L1886 1093.5L1884.5 1095.5L1881.5 1099L1879 1102.5L1876.5 1105.5L1874.5 1109L1871.5 1110.5L1869.5 1112L1864.5 1116L1861 1118L1858.5 1119L1854.5 1121.5H1851.5L1849 1123.5L1844 1125H1841.5L1838 1126.5H1835L1829.5 1127.5L1825.5 1129H1819.5L1814.5 1130L1809 1129H1804.5L1799.5 1127.5L1796 1129L1792.5 1127.5L1790 1125H1787.5L1785.5 1123.5L1783 1120.5H1781.5L1779.5 1118L1779 1116.5L1777.5 1115.5L1777 1113.5L1776 1112.5L1773.5 1112V1113.5L1774 1114.5L1775 1116L1775.5 1117L1776.5 1118.5L1777.5 1120L1778 1122L1779 1123L1780 1124.5L1781 1126.5L1782 1128.5L1783.5 1129L1785.5 1131L1786.5 1133L1788.5 1134L1790 1135.5L1791.5 1136.5L1792.5 1138.5L1794.5 1140.5H1797.5L1799.5 1139.5L1801.5 1140.5L1807 1138.5L1812 1139.5L1815.5 1138.5H1821L1825 1138H1830C1831.33 1137.5 1834.2 1136.5 1835 1136.5C1835.8 1136.5 1838.67 1135.5 1840 1135H1844L1847.5 1133L1853 1132.5L1856 1131L1859.5 1128L1862 1127.5L1864 1125.5L1867 1125L1871 1123L1873 1120L1876 1118L1876.5 1117L1880.5 1116L1882.5 1114.5L1884 1111.5L1886 1109L1888 1107L1889.5 1106L1890.5 1104L1891.5 1102.5L1893 1101.5L1894 1099L1893.5 1096.5L1893 1094V1092L1893.5 1090L1894.5 1088V1085.5L1895 1083V1081.5L1896 1079V1077L1896.5 1075L1896 1073V1071.5L1895 1070Z"></path>
                    </g>
                    {/*КАРИЕС*/}
                    <g className="caries-filling" style={{visibility: 'inherit'}}>
                        {/*КАРИЕС ЦЕНТР*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                        >
                            <path className="st58" d="M1867.2,1073.7c-8.1,10.9-24.9,18.6-42.1,23.1c-11.1,2.9-22.6,0.7-31-2.1v0c-1.1-4.2-2.4-8.3-3.3-11.4
                                c-1.2-4-4.8-16.1-7.7-26.1c9.8,2.6,19.6-2.2,29.7-2.8c4.4-0.3,8.9,0.3,11.9,3.5c1.3,1.4,2.1,3.1,2.8,4.9c1.5,3.8,2.5,7.8,3.1,11.8
                                l1.9,0c-0.6-3.6-1.2-7.3-1.8-10.9c-0.5-3.2-1-6.5,0.1-9.6c2.8-8,12.4-8.9,19.6-12.8C1854.3,1050.6,1862.2,1068.1,1867.2,1073.7z"
                            />
                            <path className={
                                    `st8 caries-center
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth38.caries_center ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth38.seal_center ? `seal-fill ${teethDiagnozis.tooth38.seal_center_color}` : ''}
                            `} 
                                d="M1867.2,1073.7c-8.1,10.9-24.9,18.6-42.1,23.1c-11.1,2.9-22.6,0.7-31-2.1v0c-1.1-4.2-2.4-8.3-3.3-11.4
                                c-1.2-4-4.8-16.1-7.7-26.1c9.8,2.6,19.6-2.2,29.7-2.8c4.4-0.3,8.9,0.3,11.9,3.5c1.3,1.4,2.1,3.1,2.8,4.9c1.5,3.8,2.5,7.8,3.1,11.8
                                l1.9,0c-0.6-3.6-1.2-7.3-1.8-10.9c-0.5-3.2-1-6.5,0.1-9.6c2.8-8,12.4-8.9,19.6-12.8C1854.3,1050.6,1862.2,1068.1,1867.2,1073.7z"
                            />
                        </g>
                        {/*КАРИЕС ПРАВО*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st58" d="M1893.9,1082.8c-3.3,0.7-7.2,1.4-10.1,1.4c-6.5,0.1-9.5-2.8-16.4-10.3c-0.1-0.1-0.1-0.1-0.2-0.2
                                c-5-5.6-12.9-23.2-16.9-32.5c1.1-0.6,2.1-1.2,3-1.9c2.8-2.2,4.8-5.2,5.7-8.6l8.3-1.1c8.1,5.7,15.1,13,20.5,21.4
                                c2.9,4.5,5.3,9.3,6.5,14.5C1895.7,1071.2,1895.5,1077.2,1893.9,1082.8z"
                            />
                            <path className={
                                    `st8 caries-center
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth38.caries_right ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth38.seal_right ? `seal-fill ${teethDiagnozis.tooth38.seal_right_color}` : ''}
                            `} 
                                d="M1893.9,1082.8c-3.3,0.7-7.2,1.4-10.1,1.4c-6.5,0.1-9.5-2.8-16.4-10.3c-0.1-0.1-0.1-0.1-0.2-0.2
                                c-5-5.6-12.9-23.2-16.9-32.5c1.1-0.6,2.1-1.2,3-1.9c2.8-2.2,4.8-5.2,5.7-8.6l8.3-1.1c8.1,5.7,15.1,13,20.5,21.4
                                c2.9,4.5,5.3,9.3,6.5,14.5C1895.7,1071.2,1895.5,1077.2,1893.9,1082.8z"
                            />
                        </g>
                        {/*КАРИЕС ЛЕВО*/}
                        <g className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                        >
                            <path className="st58" d="M1796.8,1110.7c-0.4,5.5-5.5,11.2-12.7,16.5c-1.4-1.3-2.7-2.7-3.9-4.2c-6.7-8.2-10.4-18.4-11.7-28.9
                                c-1.1-9.1-0.4-18.2,1.4-27.2c0.8-3.9,1.8-7.8,3-11.6l3.7-1.1c1.9,1.4,4.1,2.5,6.4,3.1c0,0,0.1,0,0.1,0c2.9,10,6.4,22.1,7.7,26.1
                                c0.9,3,2.2,7.1,3.3,11.4v0C1795.7,1100.7,1797.1,1106.9,1796.8,1110.7z" 
                            />
                            <path className={`
                                st8 target caries-left
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth38.caries_left ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth38.seal_left ? `seal-fill ${teethDiagnozis.tooth38.seal_left_color}` : ''}
                            `} 
                                d="M1796.8,1110.7c-0.4,5.5-5.5,11.2-12.7,16.5c-1.4-1.3-2.7-2.7-3.9-4.2c-6.7-8.2-10.4-18.4-11.7-28.9
                                c-1.1-9.1-0.4-18.2,1.4-27.2c0.8-3.9,1.8-7.8,3-11.6l3.7-1.1c1.9,1.4,4.1,2.5,6.4,3.1c0,0,0.1,0,0.1,0c2.9,10,6.4,22.1,7.7,26.1
                                c0.9,3,2.2,7.1,3.3,11.4v0C1795.7,1100.7,1797.1,1106.9,1796.8,1110.7z" 
                            />
                        </g>
                        {/*КАРИЕС У КОРНЯ*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'top');
                            }}
                        >
                            <path className="st58" d="M1893.9,1082.8c-0.4,1.4-0.9,2.7-1.5,4c-5,11.3-12.9,21-22.9,28.2c-11.3,8.1-24.6,12.7-38.3,15
                                c-14.4,2.5-29.2,2.5-43.7,0.1c-1.2-0.9-2.3-1.9-3.4-2.9c7.2-5.4,12.3-11,12.7-16.5c0.3-3.8-1.1-10-2.7-16c8.4,2.8,19.9,5,31,2.1
                                c17.2-4.5,33.9-12.2,42.1-23.1c0.1,0.1,0.1,0.2,0.2,0.2c6.9,7.4,9.8,10.4,16.4,10.3C1886.7,1084.2,1890.5,1083.5,1893.9,1082.8z"
                            />
                            <path className={
                                `st8 caries-bottom
                                ${diagnozis === 'caries' ? 'caries-stroke' : ''}
                                ${tooth38Diagnozis.caries_top ? 'caries-fill' : ''}
                                ${tooth38Diagnozis.seal_top ? `seal-fill ${teethDiagnozis.tooth38.seal_top_color}` : ''}
                            `} 
                                d="M1893.9,1082.8c-0.4,1.4-0.9,2.7-1.5,4c-5,11.3-12.9,21-22.9,28.2c-11.3,8.1-24.6,12.7-38.3,15
                                c-14.4,2.5-29.2,2.5-43.7,0.1c-1.2-0.9-2.3-1.9-3.4-2.9c7.2-5.4,12.3-11,12.7-16.5c0.3-3.8-1.1-10-2.7-16c8.4,2.8,19.9,5,31,2.1
                                c17.2-4.5,33.9-12.2,42.1-23.1c0.1,0.1,0.1,0.2,0.2,0.2c6.9,7.4,9.8,10.4,16.4,10.3C1886.7,1084.2,1890.5,1083.5,1893.9,1082.8z"
                            />
                        </g>
                        <g className="with">
                            {/*Черточка лево низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth38Diagnozis.seal_right && !tooth38Diagnozis.seal_top && !tooth38Diagnozis.seal_center) ||
                                        (tooth38Diagnozis.seal_right && tooth38Diagnozis.seal_top && !tooth38Diagnozis.seal_center) ||
                                        (!tooth38Diagnozis.seal_right && tooth38Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1866.5 1073.5C1864.33 1071.5 1858.4 1063.3 1852 1046.5" />
                            {/*Черточка лево низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth38Diagnozis.seal_right && !tooth38Diagnozis.seal_top) ||
                                        (!tooth38Diagnozis.seal_right && tooth38Diagnozis.seal_top && !tooth38Diagnozis.seal_center) ||
                                        (!tooth38Diagnozis.seal_right && tooth38Diagnozis.seal_top && tooth38Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1866.5 1073.5C1874 1082.5 1880.2 1082.7 1889 1083.5" />
                            {/*Черточка середина*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth38Diagnozis.seal_top && !tooth38Diagnozis.seal_center) ||
                                        (tooth38Diagnozis.seal_right && tooth38Diagnozis.seal_left && !tooth38Diagnozis.seal_center && tooth38Diagnozis.seal_top) ||
                                        (!tooth38Diagnozis.seal_bottom && !tooth38Diagnozis.seal_top && tooth38Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1866.5 1073.5C1859.5 1085 1818.3 1105.3 1793.5 1094.5" />
                            {/*Черточка право низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth38Diagnozis.seal_left && !tooth38Diagnozis.seal_top) ||
                                        (!tooth38Diagnozis.seal_left && tooth38Diagnozis.seal_top && !tooth38Diagnozis.seal_center) ||
                                        (!tooth38Diagnozis.seal_left && tooth38Diagnozis.seal_top && tooth38Diagnozis.seal_center)
                                    )
                                        ? 5 : 0
                                }}
                                d="M1793.5 1095C1798 1112.5 1796.8 1113.5 1788 1123.5" />
                            {/*Черточка право низ*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth38Diagnozis.seal_left && !tooth38Diagnozis.seal_top && !tooth38Diagnozis.seal_center) ||
                                        (tooth38Diagnozis.seal_left && tooth38Diagnozis.seal_top && !tooth38Diagnozis.seal_center) ||
                                        (!tooth38Diagnozis.seal_left && tooth38Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1793.5 1095L1784.5 1063" />
                        </g>
                    </g>
                    <g className="" style={{visibility: 'inherit'}}>
                        <g className="vinir"
                            style={{
                                visibility: tooth38Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth38Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className={`vinir-fill ${tooth38Diagnozis.vinir_color}`} 
                                d="M1894.3 1065.5C1893.1 1060.3 1890.7 1055.5 1887.8 1051C1882.4 1042.6 1875.4 1035.4 1867.3 1029.6L1858.9 1030.7C1858 1034.1 1856 1037.1 1853.2 1039.3C1852.3 1040 1851.3 1040.7 1850.2 1041.2C1843 1045.1 1833.4 1046 1830.6 1054C1829.5 1057.1 1830 1060.4 1830.5 1063.6C1831.1 1067.2 1831.7 1070.9 1832.3 
                                1074.5H1830.4C1829.9 1070.5 1828.8 1066.5 1827.3 1062.7C1826.6 1060.9 1825.8 1059.2 1824.5 1057.8C1821.5 1054.6 1816.9 1054 1812.6 1054.3C1802.6 1055 1792.7 1059.8 1782.9 1057.1H1782.8C1780.5 1056.5 1778.3 1055.4 1776.4 1054L1772.7 1055.1C1771.5 1058.9 1770.5 1062.8 1769.7 1066.7C1767.9 1075.7 1767.2 1084.8 1768.3 1093.9C1769.6 1104.4 1773.2 1114.6 1780 1122.8C1781.2 1124.3 1782.5 1125.7 1783.9 1127C1785 1128 1786.1 1129 1787.3 1129.9C1801.8 1132.3 1816.5 1132.2 1831 
                                1129.8C1844.7 1127.5 1858 1122.9 1869.3 1114.8C1879.3 1107.6 1887.2 1097.9 1892.2 1086.6C1892.8 1085.3 1893.3 1083.9 1893.7 1082.6C1895.5 1077.2 1895.7 1071.2 1894.3 1065.5Z"
                            />
                        </g>
                    </g>
                    {/* ТИМЧАСОВА/КЕРАМІЧНА/МЕТАЛОКЕРАМІЧНА КОРОНКА*/}
                    <g className="crown"
                        style={{
                            visibility: tooth38Diagnozis.temporary_crown || tooth38Diagnozis.ceramic_crown || tooth38Diagnozis.mceramic_crown || tooth38Diagnozis.metalic_crown || tooth38Diagnozis.zirconia_crown ? 'inherit' : 'hidden',
                            opacity: tooth38Diagnozis.temporary_crown || tooth38Diagnozis.ceramic_crown || tooth38Diagnozis.mceramic_crown || tooth38Diagnozis.metalic_crown || tooth38Diagnozis.zirconia_crown ? 1 : 0
                        }}
                    >
                        <path className={`
                                temporary-crown crown-fill
                                ${diagnozis}
                                ${tooth38Diagnozis.ceramic_crown_color}
                                ${tooth38Diagnozis.mceramic_crown_color}
                                ${tooth38Diagnozis.metalic_crown_color}
                                ${tooth38Diagnozis.zirconia_crown_color}
                            `}  
                            d="M1894.3,1065.5c-1.2-5.2-3.6-10-6.5-14.5c-5.4-8.4-12.4-15.6-20.5-21.4l-8.4,1.1
                            c-0.9,3.4-2.9,6.4-5.7,8.6c-0.9,0.7-1.9,1.4-3,1.9c-7.2,3.9-16.8,4.8-19.6,12.8c-1.1,3.1-0.6,6.4-0.1,9.6
                            c0.6,3.6,1.2,7.3,1.8,10.9l-1.9,0c-0.5-4-1.6-8-3.1-11.8c-0.7-1.8-1.5-3.5-2.8-4.9c-3-3.2-7.6-3.8-11.9-3.5
                            c-10,0.7-19.9,5.5-29.7,2.8c0,0-0.1,0-0.1,0c-2.3-0.6-4.5-1.7-6.4-3.1l-3.7,1.1c-1.2,3.8-2.2,7.7-3,11.6c-1.8,9-2.5,18.1-1.4,27.2
                            c1.3,10.5,4.9,20.7,11.7,28.9c1.2,1.5,2.5,2.9,3.9,4.2l0,0c1.1,1,2.2,2,3.4,2.9c14.5,2.4,29.2,2.3,43.7-0.1
                            c13.7-2.3,27-6.9,38.3-15c10-7.2,17.9-16.9,22.9-28.2c0.6-1.3,1.1-2.7,1.5-4l0,0C1895.5,1077.2,1895.7,1071.2,1894.3,1065.5z"
                        />
                    </g>
                </g>
            </g>
        </>
    )
}
