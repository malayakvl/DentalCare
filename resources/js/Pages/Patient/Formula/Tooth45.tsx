import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSubDiagnosis, setToothDiagnoze, setNewToothActive, setDisactiveAll, setSelectedToothNumber, settooth45Active } from '../../../Redux/Formula';
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
import PeriodontitStage45 from './periodontit45';


export default function Tooth45() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth45Diagnozis = teethDiagnozis.tooth45;
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
                teethDiagnozis.tooth45.caries_bottom = !teethDiagnozis.tooth45.caries_bottom;
            }
            if (toothPart === 'center') {
                teethDiagnozis.tooth45.caries_center = !teethDiagnozis.tooth45.caries_center;
            }
            if (toothPart === 'left') {
                teethDiagnozis.tooth45.caries_left = !teethDiagnozis.tooth45.caries_left;
            }
            if (toothPart === 'right') {
                teethDiagnozis.tooth45.caries_right = !teethDiagnozis.tooth45.caries_right;
            }
            if (toothPart === 'top') {
                teethDiagnozis.tooth45.caries_top = !teethDiagnozis.tooth45.caries_top;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'seal') {
            if (toothPart === 'center') {
                if (teethDiagnozis.tooth45.seal_center_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth45.seal_center_color = sealColor1;
                    teethDiagnozis.tooth45.seal_center = true;
                } else if (teethDiagnozis.tooth45.seal_center_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth45.seal_center_color = sealColor2;
                    teethDiagnozis.tooth45.seal_center = true;
                } else if (teethDiagnozis.tooth45.seal_center_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth45.seal_center_color = sealColor3;
                    teethDiagnozis.tooth45.seal_center = true;
                } else {
                    teethDiagnozis.tooth45.seal_center = !teethDiagnozis.tooth45.seal_center;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'bottom') {
                if (teethDiagnozis.tooth45.seal_bottom_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth45.seal_bottom_color = sealColor1;
                    teethDiagnozis.tooth45.seal_bottom = true;
                } else if (teethDiagnozis.tooth45.seal_bottom_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth45.seal_bottom_color = sealColor2;
                    teethDiagnozis.tooth45.seal_bottom = true;
                } else if (teethDiagnozis.tooth45.seal_bottom_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth45.seal_bottom_color = sealColor3;
                    teethDiagnozis.tooth45.seal_bottom = true;
                } else {
                    teethDiagnozis.tooth45.seal_bottom = !teethDiagnozis.tooth45.seal_bottom;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'left') {
                if (teethDiagnozis.tooth45.seal_left_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth45.seal_left_color = sealColor1;
                    teethDiagnozis.tooth45.seal_left = true;
                } else if (teethDiagnozis.tooth45.seal_left_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth45.seal_left_color = sealColor2;
                    teethDiagnozis.tooth45.seal_left = true;
                } else if (teethDiagnozis.tooth45.seal_left_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth45.seal_left_color = sealColor3;
                    teethDiagnozis.tooth45.seal_left = true;
                } else {
                    teethDiagnozis.tooth45.seal_left = !teethDiagnozis.tooth45.seal_left;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'right') {
                if (teethDiagnozis.tooth45.seal_right_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth45.seal_right_color = sealColor1;
                    teethDiagnozis.tooth45.seal_right = true;
                } else if (teethDiagnozis.tooth45.seal_right_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth45.seal_right_color = sealColor2;
                    teethDiagnozis.tooth45.seal_right = true;
                } else if (teethDiagnozis.tooth45.seal_right_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth45.seal_right_color = sealColor3;
                    teethDiagnozis.tooth45.seal_right = true;
                } else {
                    teethDiagnozis.tooth45.seal_right = !teethDiagnozis.tooth45.seal_right;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (toothPart === 'top') {
                if (teethDiagnozis.tooth45.seal_top_color != sealColor1 && sealColor1 != '') {
                    teethDiagnozis.tooth45.seal_top_color = sealColor1;
                    teethDiagnozis.tooth45.seal_top = true;
                } else if (teethDiagnozis.tooth45.seal_top_color != sealColor2 && sealColor2 != '') {
                    teethDiagnozis.tooth45.seal_top_color = sealColor2;
                    teethDiagnozis.tooth45.seal_top = true;
                } else if (teethDiagnozis.tooth45.seal_top_color != sealColor3 && sealColor3 != '') {
                    teethDiagnozis.tooth45.seal_top_color = sealColor3;
                    teethDiagnozis.tooth45.seal_top = true;
                } else {
                    teethDiagnozis.tooth45.seal_top = !teethDiagnozis.tooth45.seal_top;
                }
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
        if (diagnozis === 'wedge_shaped_defect') {
            if (teethDiagnozis.tooth45.wedge_shaped_defect_color != wsDefectColor && wsDefectColor != '') {
                teethDiagnozis.tooth45.wedge_shaped_defect_color = wsDefectColor;
            } else {
                teethDiagnozis.tooth45.wedge_shaped_defect_color = !teethDiagnozis.tooth45.wedge_shaped_defect_color;
            }
            dispatch(setToothDiagnoze(teethDiagnozis));
        }
    }


    return (
        <>
            <g id="45" className="df-tooth-text">
                <text transform="matrix(1 0 0 1 659.2891 842.0025)" className={`st3 st4 st5 ${toothActive.tooth45.active ? 'num-active' : ''}`}>45</text>
            </g>
            <g className={`f-tooth-active`}
                onMouseOver={() => {
                    (!toothActive && !allTeeth) && document.getElementById('45').classList.add('tooth-number-hover')
                }}
                onMouseLeave={() => {
                    (!toothActive && !allTeeth) && document.getElementById('45').classList.remove('tooth-number-hover')
                }}
                onClick={() => {
                    dispatch(setSelectedToothNumber(16));
                    if (toothActive.tooth45.active) {
                        dispatch(setNewToothActive({tooth45: {active: true}}))
                    } else {
                        dispatch(setDisactiveAll());
                        dispatch(setNewToothActive({tooth45: {active: true}}))
                    }
                    if (diagnozis) {
                        if (diagnozis === 'change_color')
                            teethDiagnozis.tooth45.change_color = !teethDiagnozis.tooth45.change_color;
                        else if (diagnozis === 'fissure')
                            teethDiagnozis.tooth45.fissure = !teethDiagnozis.tooth45.fissure;
                        else if (diagnozis === 'caries')
                            teethDiagnozis.tooth45.caries = !teethDiagnozis.tooth45.caries;
                        else if (diagnozis === 'cervical_caries')
                            teethDiagnozis.tooth45.cervical_caries = !teethDiagnozis.tooth45.cervical_caries;
                        else if (diagnozis === 'wedge_shaped_defect')
                            teethDiagnozis.tooth45.wedge_shaped_defect = !teethDiagnozis.tooth45.wedge_shaped_defect;
                        else if (diagnozis === 'tartar')
                            teethDiagnozis.tooth45.tartar = !teethDiagnozis.tooth45.tartar;
                        else if (diagnozis === 'pulpit') {
                            teethDiagnozis.tooth45.pulpit = !teethDiagnozis.tooth45.pulpit;
                            teethDiagnozis.tooth45.channel_class = teethDiagnozis.tooth45.pulpit ? 'pulpit' : ''
                        } else if (diagnozis === 'channel_not_sealed') {
                            teethDiagnozis.tooth45.channel_not_sealed = !teethDiagnozis.tooth45.channel_not_sealed;
                            teethDiagnozis.tooth45.channel_class = teethDiagnozis.tooth45.channel_not_sealed ? 'channel-not-sealed' : '';
                        } else if (diagnozis === 'channel_top_sealed') {
                            teethDiagnozis.tooth45.channel_top_sealed = !teethDiagnozis.tooth45.channel_top_sealed;
                            teethDiagnozis.tooth45.channel_class = teethDiagnozis.tooth45.channel_top_sealed ? 'channel-top-sealed' : '';
                        } else if (diagnozis === 'channel_part_sealed') {
                            teethDiagnozis.tooth45.channel_part_sealed = !teethDiagnozis.tooth45.channel_part_sealed;
                            teethDiagnozis.tooth45.channel_class = teethDiagnozis.tooth45.channel_part_sealed ? 'channel-part-sealed' : '';
                        } else if (diagnozis === 'periodontit') {
                            if (teethDiagnozis.tooth45.periodontit_stage !== subDiagnozis) {
                                teethDiagnozis.tooth45.periodontit_stage = subDiagnozis
                                teethDiagnozis.tooth45.periodontit = true;
                            } else {
                                teethDiagnozis.tooth45.periodontit = !teethDiagnozis.tooth45.periodontit;
                            }
                            teethDiagnozis.tooth45.channel_class = teethDiagnozis.tooth45.periodontit ? 'periodontit' : '';
                            if (!teethDiagnozis.tooth45.periodontit) dispatch(setSubDiagnosis(''));
                        } else if (diagnozis === 'seal_cervical') {
                            if (!teethDiagnozis.tooth45.seal_cervical && teethDiagnozis.tooth45.seal_cervical_color === "") {
                                teethDiagnozis.tooth45.seal_cervical = true;
                                teethDiagnozis.tooth45.seal_cervical_color = wsDefectColor;
                            } else if (teethDiagnozis.tooth45.seal_cervical && teethDiagnozis.tooth45.seal_cervical_color != wsDefectColor) {
                                teethDiagnozis.tooth45.seal_cervical_color = wsDefectColor;
                            } else {
                                teethDiagnozis.tooth45.seal_cervical = false;
                                teethDiagnozis.tooth45.seal_cervical_color = "";
                            }
                        } else if (diagnozis === 'vinir') {
                            if (!teethDiagnozis.tooth45.vinir && teethDiagnozis.tooth45.vinir_color === "") {
                                teethDiagnozis.tooth45.vinir = true;
                                teethDiagnozis.tooth45.vinir_color = vinirColor;
                            } else if (teethDiagnozis.tooth45.vinir && teethDiagnozis.tooth45.vinir_color != vinirColor) {
                                teethDiagnozis.tooth45.vinir_color = vinirColor;
                            } else {
                                teethDiagnozis.tooth45.vinir = false;
                                teethDiagnozis.tooth45.vinir_color = "";
                            }
                        } else if (diagnozis === 'temporary_crown') {
                            teethDiagnozis.tooth45.temporary_crown = !teethDiagnozis.tooth45.temporary_crown;
                        } else if (diagnozis === 'ceramic_crown') {
                            if (!teethDiagnozis.tooth45.ceramic_crown && teethDiagnozis.tooth45.ceramic_crown_color === "") {
                                teethDiagnozis.tooth45.ceramic_crown = true;
                                teethDiagnozis.tooth45.ceramic_crown_color = ceramicCrownColor;
                            } else if (teethDiagnozis.tooth45.ceramic_crown && teethDiagnozis.tooth45.ceramic_crown_color != ceramicCrownColor) {
                                teethDiagnozis.tooth45.ceramic_crown_color = ceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth45.ceramic_crown = false;
                                teethDiagnozis.tooth45.ceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'mceramic_crown') {
                            if (!teethDiagnozis.tooth45.mceramic_crown && teethDiagnozis.tooth45.mceramic_crown_color === "") {
                                teethDiagnozis.tooth45.mceramic_crown = true;
                                teethDiagnozis.tooth45.mceramic_crown_color = mceramicCrownColor;
                            } else if (teethDiagnozis.tooth45.mceramic_crown && teethDiagnozis.tooth45.mceramic_crown_color != mceramicCrownColor) {
                                teethDiagnozis.tooth45.mceramic_crown_color = mceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth45.mceramic_crown = false;
                                teethDiagnozis.tooth45.mceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'metalic_crown') {
                            if (!teethDiagnozis.tooth45.metalic_crown && teethDiagnozis.tooth45.metalic_crown_color === "") {
                                teethDiagnozis.tooth45.metalic_crown = true;
                                teethDiagnozis.tooth45.metalic_crown_color = metalicCrownColor;
                            } else if (teethDiagnozis.tooth45.metalic_crown && teethDiagnozis.tooth45.metalic_crown_color != metalicCrownColor) {
                                teethDiagnozis.tooth45.mceramic_crown_color = metalicCrownColor;
                            } else {
                                teethDiagnozis.tooth45.metalic_crown = false;
                                teethDiagnozis.tooth45.metalic_crown_color = "";
                            }
                        } else if (diagnozis === 'zirconia_crown') {
                            if (!teethDiagnozis.tooth45.zirconia_crown && teethDiagnozis.tooth45.zirconia_crown_color === "") {
                                teethDiagnozis.tooth45.zirconia_crown = true;
                                teethDiagnozis.tooth45.zirconia_crown_color = zirconiaCrownColor;
                            } else if (teethDiagnozis.tooth45.zirconia_crown && teethDiagnozis.tooth45.zirconia_crown_color != zirconiaCrownColor) {
                                teethDiagnozis.tooth45.zirconia_crown_color = zirconiaCrownColor;
                            } else {
                                teethDiagnozis.tooth45.zirconia_crown = false;
                                teethDiagnozis.tooth45.zirconia_crown_color = "";
                            }
                        } else if (diagnozis === 'pin') {
                            teethDiagnozis.tooth45.pin = !teethDiagnozis.tooth45.pin;
                        } else if (diagnozis === 'culttab') {
                            teethDiagnozis.tooth45.culttab = !teethDiagnozis.tooth45.culttab;
                        } else if (diagnozis === 'abutment') {
                            teethDiagnozis.tooth45.abutment = !teethDiagnozis.tooth45.abutment;
                        } else if (diagnozis === 'shaper') {
                            teethDiagnozis.tooth45.shaper = !teethDiagnozis.tooth45.shaper;
                        } else if (diagnozis === 'implant') {
                            teethDiagnozis.tooth45.implant = !teethDiagnozis.tooth45.implant;
                        } else if (diagnozis === 'apex') {
                            teethDiagnozis.tooth45.apex = !teethDiagnozis.tooth45.apex;
                        } else if (diagnozis === 'absent') {
                            teethDiagnozis.tooth45.absent = !teethDiagnozis.tooth45.absent;
                        } else if (diagnozis === 'cervical_caries') {
                            teethDiagnozis.tooth45.cervical_caries = !teethDiagnozis.tooth45.cervical_caries;
                        } else if (diagnozis === 'caries') {
                            teethDiagnozis.tooth45.caries = !teethDiagnozis.tooth45.caries;
                        } else if (diagnozis === 'parodontit') {
                            if (teethDiagnozis.tooth45.parodontit) {
                                if (teethDiagnozis.tooth45.parodontit_stage === subDiagnozis) {
                                    teethDiagnozis.tooth45.parodontit = false;
                                    teethDiagnozis.tooth45.active = false;
                                } else {
                                    teethDiagnozis.tooth45.parodontit = true;
                                    teethDiagnozis.tooth45.parodontit_stage = subDiagnozis
                                }
                            } else {
                                teethDiagnozis.tooth45.parodontit = true;
                                teethDiagnozis.tooth45.parodontit_stage = subDiagnozis;
                                teethDiagnozis.tooth45.active = true;
                            }
                        }
                        dispatch(setToothDiagnoze(teethDiagnozis))
                    }
                }}
            >
                <g className="underlay" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <path className="st40" d="M707.8,1213.9c0,0-12,33-17,51s-13,47-17,62s-4,36-28,34s-28-21-26-38
                        s11-50,13-65s6-42,5-66s-1-59,1-75s18-32,20-54s-20-52-22-79c0,0,3.6-77.5,4.3-100.8c0.4-12.7-1.2-39,2.3-61.4
                        c2.9-18.7,8.4-32.8,23.4-37.8c26.6-8.9,49,4,55,36s11,158,11,168c0,36-17,40-17,67c0,37.2,20,41,17,82
                        C731.4,1155.9,715.8,1191.9,707.8,1213.9z"
                    />
                </g>
                <g id="T_45_up" className="top-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR/APEX/CULTTAB */}
                    <g className="dentin">
                        <g style={{visibility: !tooth45Diagnozis.culttab && !tooth45Diagnozis.implant && !tooth45Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st9 change-color ${tooth45Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M644.6,978.7c-1.2,6.4,0.7,12.6,4.9,18c3.4,4.3,8.1,8.1,13.5,11.2
                                c7.6,4.4,16.9,7.8,26.7,6.2c5.3-0.9,9.6-3.1,14.2-5.1c3.9-1.8,8.3-3.4,11.9-5.6c4.2-2.5,7.3-5.6,9.1-9.1c2-3.9,2.1-8.1,1.5-12.2
                                c-1-6.9-4-13.2-8-19.1c-2.9-4.3-6.2-8.4-10.2-12.4c-2.6-2.7-5.7-5.3-9.7-7.1c-5-2.2-10.9-2.9-16.6-2.8c-5,0.1-9.9,0.8-14.4,2.6
                                c-5.4,2.2-9.6,5.6-12.1,9.5c-2.3,3.6-3.3,7.5-4.8,11.3C648.5,969,645.5,973.5,644.6,978.7z"
                            />
                        </g>
                        <g style={{visibility: tooth45Diagnozis?.apex || tooth45Diagnozis.change_color ? 'inherit' : 'hidden'}}>
                        <path className={`st9 change-color ${tooth45Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M644.6 978.7C643.4 985.1 645.3 991.3 649.5 996.7C652.9 1001 657.6 1004.8 663 1007.9C670.6 1012.3 679.9 1015.7 689.7 1014.1C695 1013.2 699.3 1011 703.9 1009C707.8 1007.2 712.2 1005.6 715.8 1003.4C720 1000.9 723.1 997.8 724.9 994.3C726.9 990.4 727 986.2 726.4 982.1C725.4 975.2 722.4 968.9 718.4 963C715.5 958.7 712.2 954.6 708.2 950.6C705.6 947.9 702.5 945.3 698.5 943.5C693.5 941.3 687.6 940.6 681.9 940.7C676.9 940.8 672 941.5 667.5 943.3C662.1 945.5 657.9 948.9 655.4 952.8C653.1 956.4 652.1 960.3 650.6 964.1C648.5 969 645.5 973.5 644.6 978.7Z" style={{fill: 'rgb(248, 223, 168)'}}></path>
                        </g>
                    </g>
                    <g className="pulp">
                        <g className="pulpitis-pfilling" style={{visibility: tooth45Diagnozis.apex ? 'inherit' : 'hidden'}}>
                            <path className="st22 target" d="M676 979.5C676 972.044 680.5 964 684.5 964C688.5 964 693 971.544 693 979C693 986.456 688 991 684.5 991C681.5 991 676 986.956 676 979.5Z" style={{fill: 'rgb(254, 246, 249)'}}></path>
                        </g>
                    </g>
                    {/* IMPLANT/CULTTAB */}
                    <g style={{visibility: tooth45Diagnozis.implant || tooth45Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <g className="st27">
                            <mask id="implant_45" className="st49">
                                <path className="st50" d="M674.871 966.971L672.176 966.093C669.886 968.398 668.182 971.286 667.308 974.515L669.416 976.412C669.227 977.412 669.129 978.444 669.129 979.5C669.129 980.555 669.227 981.588 669.416 982.588L667.308 984.484C668.182 987.713 669.886 990.602 672.177 992.906L674.871 992.029C676.427 993.371 678.236 994.428 680.217 995.119L680.804 997.892C682.357 998.301 683.986 998.519 685.667 998.519C687.349 998.519 688.979 998.301 690.532 997.891L691.119 995.118C693.099 994.427 694.908 993.37 696.464 992.028L699.158 992.906C701.449 990.601 703.152 987.712 704.027 984.483L701.918 982.587C702.107 981.587 702.206 980.555 702.206 979.5C702.206 978.445 702.107 977.413 701.918 976.413L704.027 974.517C703.152 971.287 701.449 968.399 699.158 966.094L696.464 966.971C694.908 965.629 693.099 964.572 691.119 963.881L690.532 961.108C688.979 960.699 687.349 960.48 685.667 960.48C683.986 960.48 682.357 960.698 680.804 961.108L680.217 963.88C678.236 964.571 676.427 965.629 674.871 966.971Z"></path>
                            </mask>
                            <path className="st50 st51" d="M674.871 966.971L672.176 966.093C669.886 968.398 668.182 971.286 667.308 974.515L669.416 976.412C669.227 977.412 669.129 978.444 669.129 979.5C669.129 980.555 669.227 981.588 669.416 982.588L667.308 984.484C668.182 987.713 669.886 990.602 672.177 992.906L674.871 992.029C676.427 993.371 678.236 994.428 680.217 995.119L680.804 997.892C682.357 998.301 683.986 998.519 685.667 998.519C687.349 998.519 688.979 998.301 690.532 997.891L691.119 995.118C693.099 994.427 694.908 993.37 696.464 992.028L699.158 992.906C701.449 990.601 703.152 987.712 704.027 984.483L701.918 982.587C702.107 981.587 702.206 980.555 702.206 979.5C702.206 978.445 702.107 977.413 701.918 976.413L704.027 974.517C703.152 971.287 701.449 968.399 699.158 966.094L696.464 966.971C694.908 965.629 693.099 964.572 691.119 963.881L690.532 961.108C688.979 960.699 687.349 960.48 685.667 960.48C683.986 960.48 682.357 960.698 680.804 961.108L680.217 963.88C678.236 964.571 676.427 965.629 674.871 966.971Z"></path>
                            <path className="st52" d="M672.176 966.093L672.796 964.192L671.625 963.81L670.758 964.683L672.176 966.093ZM674.871 966.971L674.252 968.872L675.324 969.221L676.177 968.485L674.871 966.971ZM667.308 974.515L665.377 973.992L665.056 975.18L665.97 976.002L667.308 974.515ZM669.416 976.412L671.382 976.783L671.591 975.677L670.754 974.924L669.416 976.412ZM669.416 982.588L670.754 984.075L671.591 983.323L671.382 982.217L669.416 982.588ZM667.308 984.484L665.97 982.997L665.056 983.82L665.377 985.007L667.308 984.484ZM672.177 992.906L670.758 994.316L671.626 995.189L672.796 994.808L672.177 992.906ZM674.871 992.029L676.177 990.514L675.324 989.778L674.252 990.127L674.871 992.029ZM680.217 995.119L682.173 994.705L681.94 993.602L680.876 993.231L680.217 995.119ZM680.804 997.892L678.848 998.306L679.103 999.511L680.294 999.826L680.804 997.892ZM690.532 997.891L691.042 999.825L692.233 999.511L692.488 998.306L690.532 997.891ZM691.119 995.118L690.46 993.23L689.396 993.602L689.163 994.704L691.119 995.118ZM696.464 992.028L697.083 990.127L696.011 989.778L695.157 990.514L696.464 992.028ZM699.158 992.906L698.539 994.808L699.709 995.189L700.577 994.316L699.158 992.906ZM704.027 984.483L705.957 985.006L706.279 983.818L705.364 982.996L704.027 984.483ZM701.918 982.587L699.953 982.216L699.744 983.321L700.581 984.074L701.918 982.587ZM701.918 976.413L700.581 974.926L699.744 975.678L699.953 976.784L701.918 976.413ZM704.027 974.517L705.364 976.004L706.279 975.181L705.957 973.994L704.027 974.517ZM699.158 966.094L700.577 964.684L699.709 963.811L698.539 964.192L699.158 966.094ZM696.464 966.971L695.157 968.486L696.011 969.222L697.083 968.873L696.464 966.971ZM691.119 963.881L689.163 964.296L689.396 965.398L690.46 965.769L691.119 963.881ZM690.532 961.108L692.488 960.694L692.233 959.489L691.042 959.174L690.532 961.108ZM680.804 961.108L680.294 959.174L679.103 959.488L678.848 960.693L680.804 961.108ZM680.217 963.88L680.876 965.769L681.94 965.397L682.173 964.295L680.217 963.88ZM671.557 967.995L674.252 968.872L675.49 965.069L672.796 964.192L671.557 967.995ZM669.238 975.038C670.02 972.152 671.543 969.567 673.595 967.503L670.758 964.683C668.229 967.228 666.345 970.42 665.377 973.992L669.238 975.038ZM670.754 974.924L668.645 973.028L665.97 976.002L668.079 977.899L670.754 974.924ZM671.129 979.5C671.129 978.57 671.216 977.661 671.382 976.783L667.451 976.04C667.239 977.163 667.129 978.319 667.129 979.5H671.129ZM671.382 982.217C671.216 981.338 671.129 980.43 671.129 979.5H667.129C667.129 980.68 667.239 981.837 667.451 982.959L671.382 982.217ZM668.645 985.971L670.754 984.075L668.079 981.101L665.97 982.997L668.645 985.971ZM673.595 991.496C671.544 989.432 670.02 986.847 669.238 983.961L665.377 985.007C666.345 988.579 668.229 991.771 670.758 994.316L673.595 991.496ZM674.252 990.127L671.557 991.005L672.796 994.808L675.49 993.931L674.252 990.127ZM680.876 993.231C679.137 992.624 677.547 991.695 676.177 990.514L673.565 993.543C675.308 995.047 677.336 996.232 679.558 997.008L680.876 993.231ZM682.761 997.477L682.173 994.705L678.26 995.534L678.848 998.306L682.761 997.477ZM685.667 996.519C684.16 996.519 682.702 996.324 681.314 995.958L680.294 999.826C682.012 1000.28 683.813 1000.52 685.667 1000.52V996.519ZM690.022 995.957C688.634 996.323 687.175 996.519 685.667 996.519V1000.52C687.522 1000.52 689.324 1000.28 691.042 999.825L690.022 995.957ZM689.163 994.704L688.575 997.477L692.488 998.306L693.076 995.533L689.163 994.704ZM695.157 990.514C693.788 991.695 692.199 992.623 690.46 993.23L691.778 997.007C694 996.231 696.027 995.046 697.77 993.543L695.157 990.514ZM699.777 991.004L697.083 990.127L695.844 993.93L698.539 994.808L699.777 991.004ZM702.096 983.96C701.315 986.847 699.791 989.431 697.739 991.496L700.577 994.316C703.106 991.77 704.99 988.578 705.957 985.006L702.096 983.96ZM700.581 984.074L702.69 985.97L705.364 982.996L703.255 981.099L700.581 984.074ZM700.206 979.5C700.206 980.43 700.119 981.337 699.953 982.216L703.883 982.958C704.095 981.836 704.206 980.68 704.206 979.5H700.206ZM699.953 976.784C700.119 977.662 700.206 978.57 700.206 979.5H704.206C704.206 978.32 704.095 977.164 703.883 976.042L699.953 976.784ZM702.69 973.029L700.581 974.926L703.255 977.9L705.364 976.004L702.69 973.029ZM697.74 967.503C699.791 969.568 701.315 972.153 702.096 975.039L705.957 973.994C704.99 970.421 703.106 967.229 700.577 964.684L697.74 967.503ZM697.083 968.873L699.777 967.995L698.539 964.192L695.844 965.069L697.083 968.873ZM690.46 965.769C692.199 966.376 693.788 967.305 695.157 968.486L697.77 965.457C696.027 963.954 694 962.768 691.778 961.993L690.46 965.769ZM688.575 961.523L689.163 964.296L693.076 963.467L692.488 960.694L688.575 961.523ZM685.667 962.48C687.175 962.48 688.634 962.676 690.022 963.042L691.042 959.174C689.324 958.721 687.522 958.48 685.667 958.48V962.48ZM681.314 963.042C682.702 962.676 684.16 962.48 685.667 962.48V958.48C683.813 958.48 682.012 958.721 680.294 959.174L681.314 963.042ZM682.173 964.295L682.761 961.522L678.848 960.693L678.26 963.466L682.173 964.295ZM676.177 968.485C677.547 967.304 679.137 966.376 680.876 965.769L679.558 961.992C677.336 962.767 675.308 963.953 673.565 965.456L676.177 968.485Z" mask="url(#implant_45)"></path>
                        </g>
                        <circle className="st48" cx="685.5" cy="979.5" r="20.5"></circle>
                    </g>
                    {/* SHAPER */}
                    <g className="shaper" style={{visibility: 'hidden', opacity: 0}} >
                        <circle className="st44" cx="685.5" cy="979.5" r="22.5"></circle>
                        <path className="st45" d="M683.577 970.739C684.129 968.804 686.871 968.804 687.423 970.739L687.929 972.511C688.225 973.549 689.291 974.164 690.338 973.902L692.126 973.454C694.077 972.965 695.448 975.339 694.049 976.785L692.767 978.109C692.016 978.884 692.016 980.116 692.767 980.891L694.049 982.215C695.448 983.661 694.077 986.035 692.126 985.546L690.338 985.098C689.291 984.836 688.225 985.451 687.929 986.489L687.423 988.261C686.871 990.196 684.129 990.196 683.577 988.261L683.071 986.489C682.775 985.451 681.709 984.836 680.662 985.098L678.874 985.546C676.923 986.035 675.552 983.661 676.951 982.215L678.233 980.891C678.984 980.116 678.984 978.884 678.233 978.109L676.951 976.785C675.552 975.339 676.923 972.965 678.874 973.454L680.662 973.902C681.709 974.164 682.775 973.549 683.071 972.511L683.577 970.739Z"></path>
                    </g>
                    {/* ABUTMENT */}
                    <g className="abutment" style={{visibility: tooth45Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth45Diagnozis.abutment ? 1 : 0}}>
                        <path className="st47" d="M645.583 978.884L645.583 978.884L645.585 978.87C646.012 976.402 646.943 974.073 648.055 971.713C648.462 970.849 648.903 969.963 649.351 969.064C650.096 967.565 650.861 966.03 651.519 964.494L651.525 964.48L651.53 964.467C651.971 963.35 652.361 962.255 652.744 961.179C653.715 958.449 654.642 955.843 656.242 953.339C658.613 949.641 662.634 946.362 667.874 944.227C672.226 942.487 676.995 941.798 681.919 941.699C687.539 941.601 693.277 942.295 698.093 944.413C701.936 946.143 704.933 948.649 707.48 951.293L707.486 951.3L707.493 951.307C711.444 955.258 714.704 959.308 717.571 963.559L717.572 963.561C721.52 969.383 724.439 975.541 725.41 982.243L725.411 982.244C725.995 986.241 725.877 990.202 724.011 993.842C722.315 997.139 719.366 1000.11 715.288 1002.54L715.288 1002.54L715.279 1002.55C712.84 1004.04 710.064 1005.23 707.26 1006.43C706 1006.97 704.734 1007.51 703.491 1008.09C702.739 1008.41 702 1008.74 701.269 1009.07C697.462 1010.77 693.848 1012.38 689.536 1013.11C680.063 1014.66 671.008 1011.38 663.501 1007.03L663.498 1007.03C658.182 1003.98 653.59 1000.26 650.287 996.083C646.231 990.866 644.445 984.951 645.583 978.884Z"></path>
                        <path className="st47" d="M659.219 978.418L659.219 978.418L659.222 978.404C659.499 976.81 660.104 975.296 660.841 973.74C661.106 973.18 661.397 972.598 661.694 972.003C662.195 971 662.714 969.962 663.156 968.936L663.162 968.922L663.167 968.909C663.47 968.144 663.735 967.403 663.993 966.682C664.636 964.884 665.235 963.208 666.28 961.579C667.817 959.193 670.439 957.056 673.88 955.66C676.733 954.525 679.871 954.071 683.129 954.006C686.85 953.941 690.623 954.4 693.775 955.779C696.285 956.904 698.249 958.537 699.93 960.274L699.936 960.28L699.943 960.287C702.561 962.894 704.722 965.565 706.622 968.371L706.624 968.373C709.238 972.212 711.158 976.252 711.796 980.634L711.796 980.635C712.181 983.253 712.095 985.802 710.896 988.131C709.8 990.251 707.885 992.182 705.207 993.769L705.207 993.769L705.197 993.775C703.592 994.752 701.777 995.527 699.918 996.32C699.074 996.681 698.22 997.045 697.373 997.434C696.867 997.653 696.372 997.873 695.883 998.09C693.346 999.217 690.979 1000.27 688.148 1000.75C681.939 1001.75 675.981 999.618 671.006 996.751L671.003 996.749C667.486 994.739 664.46 992.295 662.29 989.563C659.633 986.162 658.482 982.332 659.219 978.418Z"></path>
                        <circle className="st45" cx="686" cy="979" r="13" />
                    </g>
                    {/* PIN */}
                    <g className="pin" style={{visibility: 'inherit', opacity: tooth45Diagnozis.pin ? 1 : 0}}>
                        <path className="st56 hIntact" d="M645.583 978.884L645.583 978.884L645.585 978.87C646.013 976.402 646.943 974.073 648.055 971.713C648.462 970.849 648.903 969.963 649.351 969.064C650.096 967.565 650.861 966.03 651.519 964.494L651.525 964.48L651.53 964.467C651.971 963.35 652.361 962.255 652.744 961.179C653.715 958.449 654.642 955.843 656.242 953.339C658.613 949.641 662.634 946.362 667.874 944.227C672.226 942.487 676.995 941.798 681.919 941.699C687.539 941.601 693.277 942.295 698.093 944.413C701.936 946.143 704.933 948.649 707.48 951.293L707.486 951.3L707.493 951.307C711.444 955.258 714.704 959.308 717.571 963.559L717.572 963.561C721.52 969.383 724.439 975.541 725.41 982.243L725.411 982.244C725.995 986.241 725.877 990.202 724.011 993.842C722.315 997.139 719.366 1000.11 715.289 1002.54L715.289 1002.54L715.279 1002.55C712.841 1004.04 710.064 1005.23 707.26 1006.43C706 1006.97 704.734 1007.51 703.491 1008.09C702.739 1008.41 702 1008.74 701.269 1009.07C697.462 1010.77 693.848 1012.38 689.536 1013.11C680.063 1014.66 671.008 1011.38 663.501 1007.03L663.498 1007.03C658.182 1003.98 653.59 1000.26 650.287 996.083C646.231 990.866 644.445 984.951 645.583 978.884Z" style={{visibility: 'hidden'}}></path>
                        <path className="st56 hIntact" d="M659.219 978.418L659.219 978.418L659.222 978.404C659.499 976.81 660.104 975.296 660.841 973.74C661.106 973.18 661.397 972.598 661.694 972.003C662.195 971 662.714 969.962 663.156 968.936L663.162 968.922L663.167 968.909C663.47 968.144 663.735 967.403 663.993 966.682C664.636 964.884 665.235 963.208 666.28 961.579C667.817 959.193 670.439 957.056 673.88 955.66C676.733 954.525 679.871 954.071 683.129 954.006C686.85 953.941 690.623 954.4 693.775 955.779C696.285 956.904 698.249 958.537 699.93 960.274L699.936 960.28L699.943 960.287C702.561 962.894 704.722 965.565 706.622 968.371L706.624 968.373C709.238 972.212 711.158 976.252 711.796 980.634L711.796 980.635C712.181 983.253 712.095 985.802 710.896 988.131C709.8 990.251 707.885 992.182 705.207 993.769L705.207 993.769L705.197 993.775C703.592 994.752 701.777 995.527 699.918 996.32C699.074 996.681 698.22 997.045 697.373 997.434C696.867 997.653 696.372 997.873 695.883 998.09C693.346 999.217 690.979 1000.27 688.148 1000.75C681.939 1001.75 675.981 999.618 671.006 996.751L671.003 996.749C667.486 994.739 664.46 992.295 662.29 989.563C659.633 986.162 658.482 982.332 659.219 978.418Z" style={{visibility: 'hidden'}}></path>
                        <circle className="st57" cx="686" cy="979" r="12.25" style={{fill: 'black', opacity: tooth45Diagnozis.pin ? 1 : 0}} />
                    </g>
                    <g className="stump" style={{visibility: !tooth45Diagnozis.culttab ? 'hidden' : 'inherit', opacity: !tooth45Diagnozis.culttab ? 0 : 1}}>
                        <path className="st47" d="M645.583 978.884L645.583 978.884L645.585 978.87C646.012 976.402 646.943 974.073 648.055 971.713C648.462 970.849 648.903 969.963 649.351 969.064C650.096 967.565 650.861 966.03 651.519 964.494L651.525 964.48L651.53 964.467C651.971 963.35 652.361 962.255 652.744 961.179C653.715 958.449 654.642 955.843 656.242 953.339C658.613 949.641 662.634 946.362 667.874 944.227C672.226 942.487 676.995 941.798 681.919 941.699C687.539 941.601 693.277 942.295 698.093 944.413C701.936 946.143 704.933 948.649 707.48 951.293L707.486 951.3L707.493 951.307C711.444 955.258 714.704 959.308 717.571 963.559L717.572 963.561C721.52 969.383 724.439 975.541 725.41 982.243L725.411 982.244C725.995 986.241 725.877 990.202 724.011 993.842C722.315 997.139 719.366 1000.11 715.288 1002.54L715.288 1002.54L715.279 1002.55C712.84 1004.04 710.064 1005.23 707.26 1006.43C706 1006.97 704.734 1007.51 703.491 1008.09C702.739 1008.41 702 1008.74 701.269 1009.07C697.462 1010.77 693.848 1012.38 689.536 1013.11C680.063 1014.66 671.008 1011.38 663.501 1007.03L663.498 1007.03C658.182 1003.98 653.59 1000.26 650.287 996.083C646.231 990.866 644.445 984.951 645.583 978.884Z"></path>
                        <path className="st47" d="M659.219 978.418L659.219 978.418L659.222 978.404C659.499 976.81 660.104 975.296 660.841 973.74C661.106 973.18 661.397 972.598 661.694 972.003C662.195 971 662.714 969.962 663.156 968.936L663.162 968.922L663.167 968.909C663.47 968.144 663.735 967.403 663.993 966.682C664.636 964.884 665.235 963.208 666.28 961.579C667.817 959.193 670.439 957.056 673.88 955.66C676.733 954.525 679.871 954.071 683.129 954.006C686.85 953.941 690.623 954.4 693.775 955.779C696.285 956.904 698.249 958.537 699.93 960.274L699.936 960.28L699.943 960.287C702.561 962.894 704.722 965.565 706.622 968.371L706.624 968.373C709.238 972.212 711.158 976.252 711.796 980.634L711.796 980.635C712.181 983.253 712.095 985.802 710.896 988.131C709.8 990.251 707.885 992.182 705.207 993.769L705.207 993.769L705.197 993.775C703.592 994.752 701.777 995.527 699.918 996.32C699.074 996.681 698.22 997.045 697.373 997.434C696.867 997.653 696.372 997.873 695.883 998.09C693.346 999.217 690.979 1000.27 688.148 1000.75C681.939 1001.75 675.981 999.618 671.006 996.751L671.003 996.749C667.486 994.739 664.46 992.295 662.29 989.563C659.633 986.162 658.482 982.332 659.219 978.418Z"></path>
                    </g>
                    <g style={{visibility: (!tooth45Diagnozis.culttab && !tooth45Diagnozis.abutment && !tooth45Diagnozis.implant && !tooth45Diagnozis.apex && !tooth45Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M733.1,984c-1.3-9.9-4.8-19.1-9.5-27.6c-1.6-2.9-3.2-5.7-5-8.4
                            c-2.1-3.2-4.4-6.4-6.9-9.6c-3.1-3.9-6.7-7.8-11.4-10.3c-5.8-3.2-12.7-4.3-19.4-4.2c-5.8,0.1-11.6,1.1-16.8,3.6
                            c-6.3,3.1-11.2,8-14.1,13.6c-0.9,1.7-1.6,3.5-2.2,5.3c-1.3,3.6-2.1,7.3-3.3,11c-2.2,6.9-5.7,13.4-6.8,20.9
                            c-1.3,9.2,0.9,18.2,5.8,26.1c0.6,1,1.3,1.9,2,2.9c3.7,5.1,8.6,9.6,13.9,13.5c8.9,6.5,19.8,11.5,31.3,9.3
                            c6.2-1.2,11.2-4.4,16.5-7.3c4.6-2.5,9.6-4.8,13.8-7.9c2.6-1.9,4.8-4.1,6.7-6.4c1.6-2.1,2.9-4.3,3.9-6.6
                            C733.8,996,733.9,990,733.1,984z"></path>
                    </g>
                    {/*TARTAR*/}
                    <g style={{opacity: teethDiagnozis.tooth45.tartar ? 1 : 0, visibility: "inherit"}}>
                        <path className="st61 level2" d="M733.769 1004.06C736.218 997.891 736.34 991.25 735.605 984.768C734.968 979.093 734.803 973.675 733.013 968.469C731.362 963.667 729.294 959.045 726.944 954.57C725.337 951.494 723.63 947.172 721.789 944.211C719.56 940.627 718.27 937.116 715.587 933.653C712.404 929.384 707.473 925.273 702.574 922.428C699.237 920.532 694.437 920.651 690.663 919.986C687.513 919.43 684.287 917.929 681.111 918.001C677.79 918.086 674.505 919.762 671.315 920.532C668.623 921.182 665.999 920.809 663.477 922.111C659.949 923.967 656.839 927.675 654.24 930.443C651.968 932.863 650.088 935.567 648.66 938.443C647.523 940.739 645.511 943.113 644.748 945.522C643.62 949.084 642.742 952.725 641.647 956.309C640.336 960.454 639.775 964.419 638.312 968.469C637.041 971.987 635.946 975.57 635.434 979.392C634.708 984.39 634.908 989.31 635.916 994.038C636.95 998.885 638.831 1006.15 641.435 1010.47C643.486 1013.82 645.923 1014.36 648.66 1017.29C651.477 1020.3 654.612 1024.38 657.966 1026.87C660.9 1029.06 664.041 1032.41 667.343 1034.09C670.814 1035.86 674.464 1034.61 678.238 1035.36C682.26 1036.16 686.423 1036.26 690.663 1035.36C693.694 1034.7 696.459 1033.58 699.118 1032.26C702.152 1030.76 705.05 1031.61 708.052 1029.92C710.835 1028.26 713.825 1025.4 716.708 1023.71C718.774 1022.49 721.919 1021.21 723.759 1019.76C726.368 1017.75 727.495 1014.19 729.379 1011.74C731.209 1009.36 732.682 1006.78 733.769 1004.06ZM649.401 996.699C645.201 991.299 643.301 985.099 644.501 978.699C645.401 973.499 648.501 968.999 650.501 964.099C652.001 960.299 653.001 956.399 655.301 952.799C657.801 948.899 662.001 945.499 667.401 943.299C671.901 941.499 676.801 940.799 681.801 940.699C687.501 940.599 693.401 941.299 698.401 943.499C702.401 945.299 705.501 947.899 708.101 950.599C712.101 954.599 715.401 958.699 718.301 962.999C722.301 968.899 725.301 975.199 726.301 982.099C726.901 986.199 726.801 990.399 724.801 994.299C723.001 997.799 719.901 1000.9 715.701 1003.4C712.101 1005.6 707.701 1007.2 703.801 1009C699.201 1011 694.901 1013.2 689.601 1014.1C679.801 1015.7 670.501 1012.3 662.901 1007.9C657.501 1004.8 652.801 1001 649.401 996.699Z"></path>
                        <path className="st61 level1 hRoot" d="M733.769 1004.06C736.218 997.891 736.34 991.25 735.605 984.768C734.968 979.093 734.803 973.675 733.013 968.469C731.362 963.667 729.294 959.045 726.944 954.57C725.337 951.494 723.63 947.172 721.789 944.211C719.56 940.627 718.27 937.116 715.587 933.653C712.404 929.384 707.473 925.273 702.574 922.428C699.237 920.532 694.437 920.651 690.663 919.986C687.513 919.43 684.287 917.929 681.111 918.001C677.79 918.086 674.505 919.762 671.315 920.532C668.623 921.182 665.999 920.809 663.477 922.111C659.949 923.967 656.839 927.675 654.24 930.443C651.968 932.863 650.088 935.567 648.66 938.443C647.523 940.739 645.511 943.113 644.748 945.522C643.62 949.084 642.742 952.725 641.647 956.309C640.336 960.454 639.775 964.419 638.312 968.469C637.041 971.987 635.946 975.57 635.434 979.392C634.708 984.39 634.908 989.31 635.916 994.038C636.95 998.885 638.831 1006.15 641.435 1010.47C643.486 1013.82 645.923 1014.36 648.66 1017.29C651.477 1020.3 654.612 1024.38 657.966 1026.87C660.9 1029.06 664.041 1032.41 667.343 1034.09C670.814 1035.86 674.464 1034.61 678.238 1035.36C682.26 1036.16 686.423 1036.26 690.663 1035.36C693.694 1034.7 696.459 1033.58 699.118 1032.26C702.152 1030.76 705.05 1031.61 708.052 1029.92C710.835 1028.26 713.825 1025.4 716.708 1023.71C718.774 1022.49 721.919 1021.21 723.759 1019.76C726.368 1017.75 727.495 1014.19 729.379 1011.74C731.209 1009.36 732.682 1006.78 733.769 1004.06ZM649.401 996.699C645.201 991.299 643.301 985.099 644.501 978.699C645.401 973.499 648.501 968.999 650.501 964.099C652.001 960.299 653.001 956.399 655.301 952.799C657.801 948.899 662.001 945.499 667.401 943.299C671.901 941.499 676.801 940.799 681.801 940.699C687.501 940.599 693.401 941.299 698.401 943.499C702.401 945.299 705.501 947.899 708.101 950.599C712.101 954.599 715.401 958.699 718.301 962.999C722.301 968.899 725.301 975.199 726.301 982.099C726.901 986.199 726.801 990.399 724.801 994.299C723.001 997.799 719.901 1000.9 715.701 1003.4C712.101 1005.6 707.701 1007.2 703.801 1009C699.201 1011 694.901 1013.2 689.601 1014.1C679.801 1015.7 670.501 1012.3 662.901 1007.9C657.501 1004.8 652.801 1001 649.401 996.699Z" style={{visibility: 'inherit'}}></path>
                        <path className="st61 level1" d="M728.034 997.639C730.192 992.937 730.3 987.872 729.652 982.929C729.091 978.601 728.946 974.469 727.368 970.499C725.913 966.836 724.091 963.312 722.02 959.899C720.604 957.553 719.1 954.257 717.477 951.999C715.514 949.265 714.376 946.588 712.013 943.947C709.207 940.691 704.862 937.556 700.546 935.386C697.605 933.94 693.375 934.031 690.05 933.524C687.274 933.1 684.431 931.955 681.633 932.01C678.706 932.075 675.811 933.353 673 933.941C670.628 934.436 668.316 934.152 666.094 935.145C662.984 936.56 660.244 939.388 657.954 941.499C655.952 943.344 654.295 945.406 653.037 947.6C652.035 949.351 650.262 951.161 649.59 952.999C648.596 955.715 647.823 958.492 646.857 961.225C645.702 964.386 645.207 967.41 643.918 970.499C642.798 973.182 641.834 975.914 641.382 978.829C640.743 982.64 640.919 986.392 641.808 989.999C642.718 993.695 644.376 999.238 646.67 1002.53C648.478 1005.09 650.626 1005.5 653.037 1007.73C655.52 1010.03 658.281 1013.14 661.238 1015.04C663.823 1016.71 666.591 1019.26 669.5 1020.54C672.559 1021.89 675.775 1020.94 679.101 1021.51C682.645 1022.12 686.313 1022.2 690.05 1021.51C692.721 1021.01 695.157 1020.16 697.5 1019.15C700.174 1018 702.727 1018.65 705.373 1017.36C707.824 1016.1 710.459 1013.92 713 1012.63C714.82 1011.7 717.592 1010.72 719.214 1009.61C721.512 1008.08 722.506 1005.37 724.165 1003.5C725.778 1001.68 727.076 999.719 728.034 997.639ZM649.401 996.699C645.201 991.299 643.301 985.099 644.501 978.699C645.401 973.499 648.501 968.999 650.501 964.099C652.001 960.299 653.001 956.399 655.301 952.799C657.801 948.899 662.001 945.499 667.401 943.299C671.901 941.499 676.801 940.799 681.801 940.699C687.501 940.599 693.401 941.299 698.401 943.499C702.401 945.299 705.501 947.899 708.101 950.599C712.101 954.599 715.401 958.699 718.301 962.999C722.301 968.899 725.301 975.199 726.301 982.099C726.901 986.199 726.801 990.399 724.801 994.299C723.001 997.799 719.901 1000.9 715.701 1003.4C712.101 1005.6 707.701 1007.2 703.801 1009C699.201 1011 694.901 1013.2 689.601 1014.1C679.801 1015.7 670.501 1012.3 662.901 1007.9C657.501 1004.8 652.801 1001 649.401 996.699Z"></path>
                    </g>
                    {/*КАРИЕС*/}
                    <g className="header caries-filling" style={{visibility: (!tooth45Diagnozis.culttab && !tooth45Diagnozis.abutment && !tooth45Diagnozis.implant && !tooth45Diagnozis.shaper && !tooth45Diagnozis.apex) ? 'inherit' : 'hidden'}}>
                        {/*КАРИЕС C*/}
                        <g id="s_header_14_5" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                            className="caries-filling"
                        >
                            <path className="st7" d="M665,982.6c0.6,3.8,1.6,6.8,2.9,9.2c4.4,8.2,12.6,9.6,23,9.1c7.2-0.3,12.4-4.1,15.7-8.8
                                c3-4.2,4.5-9.3,4.4-13.3c0-6.9-4.6-15.1-6.4-18.1c-0.5-0.8-0.7-1.2-0.7-1.2c-7.6-9.3-16.2-14.7-25.5-12c-5.2,1.5-9.5,7-11.9,14.4
                                C664.5,968,663.8,975.2,665,982.6z" />
                            <path className={
                                    `st8 caries-center
                                    ${'caries-stroke'}
                                    ${teethDiagnozis.tooth45.caries_center ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth45.seal_center ? `seal-fill ${teethDiagnozis.tooth45.seal_center_color}` : ''}
                                `} 
                                d="M665,982.6c0.6,3.8,1.6,6.8,2.9,9.2c4.4,8.2,12.6,9.6,23,9.1c7.2-0.3,12.4-4.1,15.7-8.8
                                c3-4.2,4.5-9.3,4.4-13.3c0-6.9-4.6-15.1-6.4-18.1c-0.5-0.8-0.7-1.2-0.7-1.2c-7.6-9.3-16.2-14.7-25.5-12c-5.2,1.5-9.5,7-11.9,14.4
                                C664.5,968,663.8,975.2,665,982.6z" 
                            />
                        </g>
                        {/*КАРИЕС RIGHT*/}
                        <g id="s_header_14_4" className="caries-filling" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st7" d="M711.1,978.8c0,4.1-1.4,9.1-4.4,13.3c7.1,7.6,16,13.3,21,16.2c1.6-2.1,2.9-4.3,3.9-6.6
                                c2.3-5.6,2.4-11.6,1.6-17.6c-1.3-9.9-4.8-19.1-9.5-27.6c-1.6-2.9-3.2-5.7-5-8.4c-3,3.7-7.9,8.8-14,12.7
                                C706.5,963.7,711.1,971.9,711.1,978.8z"
                            />
                            <path className={
                                    `st8 caries-right
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth45.caries_right ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth45.seal_right ? `seal-fill ${teethDiagnozis.tooth45.seal_right_color}` : ''}
                                `} 
                                d="M711.1,978.8c0,4.1-1.4,9.1-4.4,13.3c7.1,7.6,16,13.3,21,16.2c1.6-2.1,2.9-4.3,3.9-6.6
                                c2.3-5.6,2.4-11.6,1.6-17.6c-1.3-9.9-4.8-19.1-9.5-27.6c-1.6-2.9-3.2-5.7-5-8.4c-3,3.7-7.9,8.8-14,12.7
                                C706.5,963.7,711.1,971.9,711.1,978.8z"
                            />
                        </g>
                        {/*КАРИЕС TOP*/}
                        <g id="s_header_15_3 hoho-bottom" className="caries-filling" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'top');
                            }}
                        >
                            <path className="st7" d="M647.8,946.4c4.6,2.7,12.6,8,18.7,15.5c2.4-7.4,6.7-12.9,11.9-14.4c9.3-2.7,17.9,2.7,25.5,12
                                c0,0,0.3,0.4,0.7,1.2c6.1-3.9,10.9-9,14-12.7c-2.1-3.2-4.4-6.4-6.9-9.6c-3.1-3.9-6.7-7.8-11.4-10.3c-5.8-3.2-12.7-4.3-19.4-4.2
                                c-5.8,0.1-11.6,1.1-16.8,3.6c-6.3,3.1-11.2,8-14.1,13.6C649.1,942.8,648.4,944.6,647.8,946.4z"
                            />
                            <path className={
                                    `st8 caries-top
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth45.caries_top ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth45.seal_top ? `seal-fill ${teethDiagnozis.tooth45.seal_top_color}` : ''}
                                `} 
                                d="M647.8,946.4c4.6,2.7,12.6,8,18.7,15.5c2.4-7.4,6.7-12.9,11.9-14.4c9.3-2.7,17.9,2.7,25.5,12
                                c0,0,0.3,0.4,0.7,1.2c6.1-3.9,10.9-9,14-12.7c-2.1-3.2-4.4-6.4-6.9-9.6c-3.1-3.9-6.7-7.8-11.4-10.3c-5.8-3.2-12.7-4.3-19.4-4.2
                                c-5.8,0.1-11.6,1.1-16.8,3.6c-6.3,3.1-11.2,8-14.1,13.6C649.1,942.8,648.4,944.6,647.8,946.4z"  
                            />
                        </g>
                        {/*КАРИЕС LEFT*/}
                        <g id="s_header_14_2" className="caries-filling" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }} 
                        >
                            <path className="st7" d="M643.6,1004.3c0.6,1,1.3,1.9,2,2.9c11.7-5.2,18.8-11.4,22.4-15.4c-1.3-2.4-2.3-5.4-2.9-9.2
                                c-1.2-7.3-0.5-14.6,1.5-20.7c-6-7.5-14.1-12.8-18.7-15.5c-1.3,3.6-2.1,7.3-3.3,11c-2.2,6.9-5.7,13.4-6.8,20.9
                                C636.4,987.5,638.6,996.4,643.6,1004.3z"
                            />
                            <path className={`
                                    st8 target caries-left
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth45.caries_left ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth45.seal_left ? `seal-fill ${teethDiagnozis.tooth45.seal_left_color}` : ''}
                                `} 
                                d="M643.6,1004.3c0.6,1,1.3,1.9,2,2.9c11.7-5.2,18.8-11.4,22.4-15.4c-1.3-2.4-2.3-5.4-2.9-9.2
                                c-1.2-7.3-0.5-14.6,1.5-20.7c-6-7.5-14.1-12.8-18.7-15.5c-1.3,3.6-2.1,7.3-3.3,11c-2.2,6.9-5.7,13.4-6.8,20.9
                                C636.4,987.5,638.6,996.4,643.6,1004.3z"
                            />
                        </g>
                        {/*КАРИЕС TOP*/}
                        <g id="s_header_14_1" className="caries-filling" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'bottom');
                            }}
                        >
                            <path className="st7" d="M645.5,1007.2c3.7,5.1,8.6,9.6,13.9,13.5c8.9,6.5,19.8,11.5,31.3,9.3c6.2-1.2,11.2-4.4,16.5-7.3
                                c4.6-2.5,9.6-4.8,13.8-7.9c2.6-1.9,4.8-4.1,6.7-6.4c-5-2.9-13.9-8.6-21-16.2c-3.3,4.7-8.6,8.5-15.7,8.8c-10.4,0.4-18.6-0.9-23-9.1
                                C664.3,995.8,657.2,1002,645.5,1007.2z"
                            />
                            <path className={`
                                    st8 target caries-bottom
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth45.caries_bottom ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth45.seal_bottom ? `seal-fill ${teethDiagnozis.tooth45.seal_bottom_color}` : ''}
                                `} 
                                d="M645.5,1007.2c3.7,5.1,8.6,9.6,13.9,13.5c8.9,6.5,19.8,11.5,31.3,9.3c6.2-1.2,11.2-4.4,16.5-7.3
                                c4.6-2.5,9.6-4.8,13.8-7.9c2.6-1.9,4.8-4.1,6.7-6.4c-5-2.9-13.9-8.6-21-16.2c-3.3,4.7-8.6,8.5-15.7,8.8c-10.4,0.4-18.6-0.9-23-9.1
                                C664.3,995.8,657.2,1002,645.5,1007.2z" 
                            />
                        </g>
                        <g className="with down">
                            {/* лево низ */}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth45Diagnozis.seal_left && !tooth45Diagnozis.seal_bottom && !tooth45Diagnozis.seal_center) ||
                                        (tooth45Diagnozis.seal_left && !tooth45Diagnozis.seal_bottom ) || 
                                        (tooth45Diagnozis.seal_bottom && tooth45Diagnozis.seal_center && !tooth45Diagnozis.seal_left) || 
                                        (tooth45Diagnozis.seal_bottom && !tooth45Diagnozis.seal_center && !tooth45Diagnozis.seal_left) 
                                    ) ? 5 : 0
                                }} 
                                d="M668 992C665.833 994.667 659.1 1001.1 649.5 1005.5" />
                            {/* овал лево */}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth45Diagnozis.seal_left && !tooth45Diagnozis.seal_center) ||
                                        (!tooth45Diagnozis.seal_left && tooth45Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M668 992C665.167 987.667 660.9 975.6 666.5 962" />
                            {/* лево верх */}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth45Diagnozis.seal_left && !tooth45Diagnozis.seal_top) ||
                                        (!tooth45Diagnozis.seal_left && tooth45Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M666.5 962C665.333 959.667 660.8 953.8 652 949" />
                            {/* овал верх */}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth45Diagnozis.seal_center && !tooth45Diagnozis.seal_top) ||
                                        (!tooth45Diagnozis.seal_center && tooth45Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M666.5 962C669.833 952.334 682.1 938.4 704.5 960" />
                            {/* право верх */}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth45Diagnozis.seal_right && !tooth45Diagnozis.seal_top) ||
                                        (!tooth45Diagnozis.seal_right && tooth45Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M704.5 960C706.5 959 711.4 956 715 952" />
                            {/* овал право */}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (!tooth45Diagnozis.seal_right && tooth45Diagnozis.seal_center) ||
                                        (tooth45Diagnozis.seal_right && !tooth45Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M704.5 960C708.833 966.167 715.4 981.2 707 992" />
                            {/* право низ */}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth45Diagnozis.seal_right && !tooth45Diagnozis.seal_bottom) ||
                                        (!tooth45Diagnozis.seal_right && tooth45Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }} 
                                d="M707 992C708 994.5 712.6 1000.7 723 1005.5" />
                            {/* овал низ */}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth45Diagnozis.seal_center && !tooth45Diagnozis.seal_bottom) ||
                                        (!tooth45Diagnozis.seal_center && tooth45Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }} 
                                d="M707 992C699.5 1002 677.6 1003.2 668 992" />
                        </g>
                    </g>
                    <g style={{visibility: 'inherit'}}>
                        <g className="vinir" style={
                            {
                                visibility: tooth45Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth45Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className="st55" d="M731.603 1001.6C730.703 1003.9 729.403 1006.2 727.703 1008.2C725.903 1010.6 723.603 1012.7 721.003 1014.6C716.803 1017.7 711.703 1020 707.203 1022.5C701.903 1025.4 696.903 1028.6 690.703 1029.8C679.303 1032 668.303 1027 659.403 1020.5C654.103 1016.6 649.303 1012.1 645.503 1007C644.803 1006.1 644.203 1005.1 643.503 1004.1C639.88 998.288 637.738 991.792 637.464 985C640.684 985.5 647.372 987.3 648.364 990.5C649.189 993.224 650.403 995.84 651.959 998.301C652.519 999.09 652.999 999.88 653.559 1000.59C656.6 1004.61 660.441 1008.17 664.682 1011.24C671.804 1016.37 680.607 1020.32 689.73 1018.58C694.691 1017.64 698.692 1015.11 702.933 1012.82C706.535 1010.85 710.616 1009.03 713.977 1006.59C716.057 1005.09 717.898 1003.43 719.338 1001.54C720.699 999.959 721.739 998.143 722.459 996.328C723.048 994.914 723.457 993.468 723.719 992C725.412 988 730.973 987.181 733.542 987.272C733.893 992.169 733.484 997.018 731.603 1001.6Z"></path>
                        </g>
                    </g>
                    {/* ТИМЧАСОВА КОРОНКА/КЕРАМІЧНА КОРОНКА */}
                    <g className="crown" style={{
                        visibility: (tooth45Diagnozis.temporary_crown || tooth45Diagnozis.ceramic_crown || tooth45Diagnozis.mceramic_crown || tooth45Diagnozis.metalic_crown || tooth45Diagnozis.zirconia_crown) ? 'inherit' : 'hidden',
                        opacity: (tooth45Diagnozis.temporary_crown || tooth45Diagnozis.ceramic_crown || tooth45Diagnozis.mceramic_crown || tooth45Diagnozis.metalic_crown || tooth45Diagnozis.zirconia_crown)  ? 1 : 0
                    }}>
                        <path className={
                                `st46 target temporary-crown crown-fill ${diagnozis}
                                ${tooth45Diagnozis.ceramic_crown_color}
                                ${tooth45Diagnozis.mceramic_crown_color}
                                ${tooth45Diagnozis.metalic_crown_color}
                                ${tooth45Diagnozis.zirconia_crown_color}
                            `} 
                            d="M733.1,984c-1.3-9.9-4.8-19.1-9.5-27.6c-1.6-2.9-3.2-5.7-5-8.4
                            c-2.1-3.2-4.4-6.4-6.9-9.6c-3.1-3.9-6.7-7.8-11.4-10.3c-5.8-3.2-12.7-4.3-19.4-4.2c-5.8,0.1-11.6,1.1-16.8,3.6
                            c-6.3,3.1-11.2,8-14.1,13.6c-0.9,1.7-1.6,3.5-2.2,5.3c-1.3,3.6-2.1,7.3-3.3,11c-2.2,6.9-5.7,13.4-6.8,20.9
                            c-1.3,9.2,0.9,18.2,5.8,26.1c0.6,1,1.3,1.9,2,2.9c3.7,5.1,8.6,9.6,13.9,13.5c8.9,6.5,19.8,11.5,31.3,9.3
                            c6.2-1.2,11.2-4.4,16.5-7.3c4.6-2.5,9.6-4.8,13.8-7.9c2.6-1.9,4.8-4.1,6.7-6.4c1.6-2.1,2.9-4.3,3.9-6.6
                            C733.8,996,733.9,990,733.1,984z"
                        />
                        <path className={`st3 fissure ${tooth45Diagnozis.fissure ? 'diagnoze' : tooth45Diagnozis.fissure ? 'hidden' : ''}`}  
                            d="M667,980l-1-0.3c0.6-1.9,1.3-3.8,2-5.6c0.6-1.4,1.2-2.9,2.6-3.8c1.8-1.2,3.7-0.8,5.7-0.5
                            c0.9,0.1,1.9,0.3,2.7,0.3c2.1,0,4-1,6-2c1.1-0.5,2.2-1.1,3.4-1.5c2.4-0.8,4.7-0.9,6.7-0.1c2.2,0.8,4,2.5,5.7,5.4
                            c1.3,2.2,2.3,4.6,3,7.1l-1,0.3c-0.6-2.4-1.6-4.7-2.9-6.8c-1.6-2.7-3.2-4.2-5.1-5c-2.2-0.8-4.5-0.4-6,0.1
                            c-1.1,0.4-2.2,0.9-3.3,1.5c-2,1-4.1,2-6.4,2.1c-1,0-2-0.1-2.9-0.3c-1.8-0.3-3.5-0.5-4.9,0.4c-1.1,0.7-1.6,1.9-2.2,3.3
                            C668.3,976.2,667.6,978.1,667,980z"></path>
                    </g>
                    <g className="fissures" style={{visibility: (!tooth45Diagnozis.culttab && !tooth45Diagnozis.abutment && !tooth45Diagnozis.implant && !tooth45Diagnozis.apex && !tooth45Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className={`st3 fissure ${tooth45Diagnozis.fissure ? 'diagnoze' : ''}`}
                            d="M667,980l-1-0.3c0.6-1.9,1.3-3.8,2-5.6c0.6-1.4,1.2-2.9,2.6-3.8c1.8-1.2,3.7-0.8,5.7-0.5
                            c0.9,0.1,1.9,0.3,2.7,0.3c2.1,0,4-1,6-2c1.1-0.5,2.2-1.1,3.4-1.5c2.4-0.8,4.7-0.9,6.7-0.1c2.2,0.8,4,2.5,5.7,5.4
                            c1.3,2.2,2.3,4.6,3,7.1l-1,0.3c-0.6-2.4-1.6-4.7-2.9-6.8c-1.6-2.7-3.2-4.2-5.1-5c-2.2-0.8-4.5-0.4-6,0.1
                            c-1.1,0.4-2.2,0.9-3.3,1.5c-2,1-4.1,2-6.4,2.1c-1,0-2-0.1-2.9-0.3c-1.8-0.3-3.5-0.5-4.9,0.4c-1.1,0.7-1.6,1.9-2.2,3.3
                            C668.3,976.2,667.6,978.1,667,980z" />
                    </g>
                </g>
                <g id="T_45" className="common-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin">
                        <g id="dentin_v_45" style={{visibility: !tooth45Diagnozis.implant && !tooth45Diagnozis.apex && !tooth45Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_v_45" className={`st9 change-color ${tooth45Diagnozis.change_color ? 'diagnoze' : ''}`} d="M717.1,1157.8c0,5-0.2,10.1-0.6,15.1c-2.8,8.6-5.5,17.2-8.1,25.8
                                c-0.8,2.7-1.6,5.3-2.4,8c0.8-2.7,1.6-5.3,2.4-8c1-3.2,1.9-6.3,2.9-9.4c-5.8,5.9-12.8,10.5-20.7,13.1c-2.9,0.9-5.8,1.6-8.8,1.9
                                c-5.4,0.6-10.9,0-16-2c-0.5-0.2-0.9-0.4-1.3-0.6c-5.9-2.6-10.9-7-14.6-12.3c-2.5-3.5-4.4-7.3-5.9-11.2c-0.2-4.8-0.5-9.6-0.9-14.3
                                c2-7.1,4.5-14.1,7.5-20.9c2.6-6,5.6-11.9,9-17.6l28.6,8.2l27-0.9C716.3,1141,717,1149.4,717.1,1157.8z"
                            />
                        </g>
                        <g id="dentin_n_45" style={{visibility: !tooth45Diagnozis.implant && !tooth45Diagnozis.abutment && !tooth45Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_n_45" className={`st10 change-color ${tooth45Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M711.3,1189.2c-1,3.1-1.9,6.3-2.9,9.4c-3.2,10.7-6.4,21.4-10,32
                                c-6.7,19.6-15,38.8-23.6,57.8c-6.2,13.8-12.6,27.7-21,40.5c-2.9,4.4-6.7,8.4-10.3,11.5c-3.3,2.8-7,4.7-11.3,3.5
                                c-7.9-2.2-7.5-11.7-6.1-20c1.1-6.8,1.1-13.6,2-20.4c0.9-6.9,2.6-13.7,4.3-20.4c3.3-13.7,6.2-27.4,8.3-41.3
                                c3.1-21.1,4.2-42.3,3.3-63.6c1.5,4,3.5,7.7,5.9,11.2c3.8,5.3,8.7,9.7,14.6,12.3c0.4,0.2,0.9,0.4,1.3,0.6c5.1,2,10.6,2.5,16,2
                                c3-0.3,5.9-0.9,8.8-1.9C698.5,1199.8,705.5,1195.1,711.3,1189.2z"
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g>
                            <path className={`st22 target top ${tooth45Diagnozis.channel_class} ${tooth45Diagnozis.channel_class} ${tooth45Diagnozis.pulpit ? 'pulpit' : ''} ${tooth45Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M690.6,1171.2c-0.1,1.3-0.3,2.6-0.6,3.8c-2.7,9.7-5.4,19.5-8.3,29.2
                                c-0.2,0-0.4,0-0.6,0.1c0,0-0.1,0-0.1,0c-0.5,0-1,0.1-1.6,0.1c-0.8,0-1.6,0-2.5,0c-0.6,0-1.2,0-1.7-0.1c-0.3,0-0.6,0-0.9-0.1
                                c-0.6-0.1-1.1-0.1-1.7-0.2c-0.3,0-0.6-0.1-0.9-0.1c-0.3-0.1-0.6-0.1-0.8-0.2c-0.6-0.1-1.1-0.2-1.7-0.4c-0.3-0.1-0.6-0.2-0.8-0.2
                                c-0.3-0.1-0.6-0.2-0.9-0.3c-0.2-0.1-0.5-0.2-0.7-0.2c-0.3-0.1-0.6-0.2-0.9-0.3c-0.1,0-0.2-0.1-0.3-0.1c1.1-10.3,2-20.7,2.6-31.1
                                c-0.2-2.1,0.1-4.2,0.7-6.2c0.6-2.1,1.6-4,3-5.8c2.4,1.8,5.4,3.1,8.5,3.5c3.3,0.4,6.6,0,9.5-1.3
                                C690.8,1164.5,690.9,1167.9,690.6,1171.2z"
                            />
                        </g>
                        <g>
                            <path className={`st22 target top ${tooth45Diagnozis.channel_class} ${tooth45Diagnozis.channel_class} ${tooth45Diagnozis.pulpit ? 'pulpit' : ''} ${tooth45Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M654,1272.3C654,1272.3,654,1272.3,654,1272.3c2.1,0.2,4,0.3,5.8,0.2
                                c0.6-1.7,1.2-3.5,1.8-5.2c2.4-7,4.8-14,7.1-21.1c4.6-13.9,8.9-27.9,13.1-42l0,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0
                                c0,0-0.1,0-0.1,0c-0.5,0-1,0.1-1.6,0.1c-0.8,0-1.6,0-2.5,0c-0.6,0-1.1,0-1.7-0.1c-0.3,0-0.6-0.1-0.9-0.1c-0.3,0-0.6-0.1-0.9-0.1
                                c-0.2,0-0.4-0.1-0.7-0.1c-0.1,0-0.1,0-0.2,0c-0.3-0.1-0.6-0.1-0.9-0.2c-0.3,0-0.6-0.1-0.9-0.2c-0.6-0.1-1.1-0.2-1.7-0.4
                                c-0.3-0.1-0.6-0.2-0.8-0.2c-0.3-0.1-0.6-0.2-0.9-0.3c-0.1,0-0.1,0-0.1-0.1c-0.2-0.1-0.4-0.1-0.6-0.2c-0.3-0.1-0.6-0.2-0.9-0.3
                                c-0.1,0-0.2-0.1-0.3-0.1v0c-1.9,17.2-4.4,34.4-7.8,51.4c-0.8,4.2-1.7,8.4-2.6,12.6C654.9,1268.2,654.5,1270.2,654,1272.3z" 
                            />
                        </g>
                        <g className="pulpitis-pfilling">
                            <path className={`st22 target top ${tooth45Diagnozis.channel_class} ${tooth45Diagnozis.channel_class} ${tooth45Diagnozis.pulpit ? 'pulpit' : ''} ${tooth45Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M633.1,1342.9c9.5-23.2,18.4-46.7,26.7-70.4c-1.8,0.1-3.7,0-5.7-0.2
                                c0,0,0,0-0.1,0C648.5,1296.2,641.5,1319.7,633.1,1342.9z"
                            />
                        </g>
                        <PeriodontitStage45 />
                    </g>
                    {/*PIN*/}
                    <g className="pin" style={{
                        visibility: 'inherit', opacity: tooth45Diagnozis.pin ? 1 : 0
                    }}>
                        <path className="st56 hIntact" d="M642.9 1163.8C643.3 1168.6 643.6 1173.4 643.8 1178.1C645.3 1182 647.3 1185.8 649.7 1189.3C653.4 1194.5 658.2 1198.8 664 1201.4C664.1 1201.5 664.2 1201.5 664.4 1201.6C664.8 1201.8 665.3 1202 665.7 1202.2C670.8 1204.2 676.3 1204.7 681.7 1204.2C682.1 1204.2 682.4 1204.1 682.8 1204.1C685.4 1203.8 688 1203.2 690.5 1202.4C698.4 1199.8 705.4 1195.2 711.2 1189.3C712.9 1183.9 714.6 1178.4 716.4 1173C716.9 1168 717.1 1162.9 717.1 1157.9C717.1 1149.5 716.3 1141.1 715 1132.7L688 1133.6L659.4 1125.4C656 1131.1 653 1137 650.4 1143C647.4 1149.7 644.9 1156.7 642.9 1163.8Z"
                            style={{visibility: 'hidden'}}
                        />
                        <path className="st57" d="M699.2 1133.2L658.5 1275.3C658 1276.6 656.8 1277.5 655.4 1277.4C653.6 1277.3 652.2 1275.6 652.5 1273.8L656.1 1250.9L664 
                            1201.4L675.5 1129.9L687.9 1133.5L699.2 1133.2Z"
                            style={{fill: tooth45Diagnozis.pin ? '#dbd9d3' : 'none'}}
                        />
                    </g>
                    {/* CULTTAB */}
                    <g className="stump" style={{visibility: !tooth45Diagnozis.culttab ? 'hidden' : 'inherit', opacity: !tooth45Diagnozis.culttab ? 0 : 1}}>
                        <path className="st14" d="M655.4,1277.4L655.4,1277.4c1.4,0.1,2.6-0.8,3.1-2.1l24.4-71.3c-0.4,0-0.8,0.1-1.1,0.1
                            c-5.4,0.5-10.9,0-16-2c-0.6-0.2-1.2-0.5-1.7-0.7c0,0,0,0,0,0l-11.5,72.4C652.2,1275.7,653.6,1277.3,655.4,1277.4z"
                        />
                        <path className="st15" d="M642.9,1163.8c0.4,4.8,0.7,9.6,0.9,14.3c1.5,3.9,3.5,7.7,5.9,11.2c3.7,5.2,8.5,9.5,14.3,12.1
                            c0.1,0.1,0.2,0.1,0.4,0.2c0.4,0.2,0.9,0.4,1.3,0.6c5.1,2,10.6,2.5,16,2c0.4,0,0.7-0.1,1.1-0.1c2.6-0.3,5.2-0.9,7.7-1.7
                            c7.9-2.6,14.9-7.2,20.7-13.1c1.7-5.4,3.4-10.9,5.2-16.3c0.5-5,0.7-10.1,0.7-15.1c0-8.4-0.8-16.8-2.1-25.2l-27,0.9l-28.6-8.2
                            c-3.4,5.7-6.4,11.6-9,17.6C647.4,1149.7,644.9,1156.7,642.9,1163.8z"
                        />
                    </g>
                    {/* ABUTMENT */}
                    <g className="abutment hEmpty hIntact hRoot" style={{visibility: tooth45Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth45Diagnozis.abutment ? 1 : 0}}>
                        <path className="st16" d="M711.3,1189.2l-24.4,31.9l-31.8-7.1l-11.3-35.9c1.5,3.9,3.5,7.7,5.9,11.2c3.8,5.3,8.7,9.7,14.6,12.3
                            c8.3,3.6,17.6,3.5,26.2,0.7C698.5,1199.8,705.5,1195.1,711.3,1189.2z"
                        />
                        <path className="st17" d="M717.1,1157.8c0,5-0.2,10.1-0.6,15.1c-1.8,5.4-3.5,10.9-5.2,16.3c-5.8,5.9-12.8,10.5-20.7,13.1
                            c-8.6,2.8-17.9,2.9-26.2-0.7c-5.9-2.6-10.9-7-14.6-12.3c-2.5-3.5-4.4-7.3-5.9-11.2c-0.2-4.8-0.5-9.6-0.9-14.3
                            c2-7.1,4.5-14.1,7.5-20.9c2.6-6,5.6-11.9,9-17.6l28.6,8.2l27-0.9C716.3,1141,717,1149.4,717.1,1157.8z"
                        />
                    </g>
                    {/* ФОРМУВАЧ */}
                    <g className="shaper" style={{visibility: 'hidden', opacity: 0}} >
                        <path className="st44" d="M654.777 1173.81C654.88 1171.38 657.112 1169.61 659.505 1170.05L697.51 1177.13C699.902 1177.57 701.346 1180.03 700.569 1182.34L687.855 1220.06C687.217 1221.96 685.28 1223.09 683.317 1222.72L656.339 1217.58C654.389 1217.21 653.006 1215.47 653.09 1213.48L654.777 1173.81Z"></path>
                    </g>
                    {/* IMPLANT/CULTTAB */}
                    <g className="implant" style={{visibility: tooth45Diagnozis.abutment || tooth45Diagnozis.implant || tooth45Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <path className="st18" d="M649.1,1213c0,0-5.5,32.2-7.1,40.3s-6.8,45.5-7.6,51.8c-0.8,6.3-4.1,38.3-4.1,38.9s6,9.5,16.1,8.4
                            c10.1-1.1,11.6-5,11.6-5s10.8-42.4,13.7-51.7c2.9-9.3,19.2-74.5,19.2-74.5L649.1,1213z"
                        />
                        <line className="st19" x1="643.3" y1="1223.7" x2="690.7" y2="1239.2" />
                        <line className="st19" x1="638.3" y1="1248.7" x2="685.7" y2="1264.2" />
                        <line className="st19" x1="632.3" y1="1274.7" x2="679.7" y2="1290.2" />
                        <line className="st19" x1="622.3" y1="1324.7" x2="669.7" y2="1340.2" />
                        <line className="st19" x1="627.3" y1="1299.7" x2="674.7" y2="1315.2" />
                    </g>
                    <g className="toutline" style={{visibility: !tooth45Diagnozis.culttab && !tooth45Diagnozis.abutment && !tooth45Diagnozis.implant && !tooth45Diagnozis.shaper && !tooth45Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M731.8,1130c-1.3-2.2-2.9-4.2-4.7-6c-3.1-3.2-6.9-5.7-9.9-8.9c-1.7-1.9-3.2-4-4.5-6.3
                            c-1.1-1.9-2.2-3.8-3.3-5.6c-2-3.6-4.1-7-7.8-9.1c-4-2.2-8.7-2.1-13-0.6c-7.3,2.6-12.6,8.7-19.7,11.8c-0.6,0.2-1.1,0.5-1.7,0.7
                            c-4.1,1.5-8.4,2.2-12.4,3.9c-4.7,2-8.7,5.3-11.5,9.6c-2.2,4-3.9,8.2-4.9,12.7c-2.3,10.2-1,20.8,1.2,31c0.5,2.5,1.1,5,1.8,7.4
                            c1.8,6.7,4.4,13.1,8.4,18.8c3.8,5.3,8.7,9.7,14.7,12.3c8.3,3.6,17.6,3.5,26.2,0.7c9.5-3.1,17.6-9.1,24-16.7
                            c0.1-0.1,0.1-0.1,0.2-0.2c6.9-8.2,11.6-17.9,14.6-28.2c2.1-7.4,3.3-15.1,3.6-22.8L731.8,1130z"
                        />
                    </g>
                    {/*КЛИНОВИДНИЙ ЕФЕКТ/ПРИШИЙКОВА ПЛОМБА/ПРИШИЙКОВИЙ КАРІЄС*/}
                    <g className="wedge-shaped" style={{visibility: !tooth45Diagnozis.culttab && !tooth45Diagnozis.abutment ? 'inherit' : 'hidden'}}>
                        <path className="st7 st59" 
                            d="M643.426 1119.4C641.126 1123.4 639.526 1127.7 638.526 1132.1C636.326 1142.4 637.526 1152.9 639.626 1163C640.126 1165.5 640.726 1167.9 641.426 1170.4C643.226 1177.1 645.826 1183.5 649.826 1189.2C653.526 1194.5 658.526 1198.9 664.426 1201.5C672.726 1205.1 682.026 1205 690.626 1202.2C700.026 1199.1 708.226 1193.1 714.626 1185.5L714.826 1185.3C721.726 1177.1 726.426 1167.4 729.426 1157.1C731.626 1149.7 732.826 1142 733.026 1134.3L731.926 1129.9C730.626 1127.7 729.026 1125.7 727.226 1123.9C725.842 1122.52 724.318 1121.25 722.789 1119.98C720.892 1118.41 718.987 1116.83 717.326 1115C715.626 1113.1 714.226 1110.9 712.827 1108.7L712.826 1108.7C711.963 1107.41 
                            711.203 1106.06 710.435 1104.7C710.136 1104.17 709.835 1103.63 709.526 1103.1C707.426 1099.5 705.326 1096.1 701.726 1094C697.826 1091.8 693.026 1091.9 688.726 1093.4C684.792 1094.75 681.438 1097.17 678.07 1099.6C675.19 1101.68 672.299 1103.77 669.026 1105.2C668.526 1105.5 667.926 1105.7 667.326 1105.9C665.517 1106.56 663.669 1107.07 661.824 1107.57C659.49 1108.21 657.161 1108.85 654.926 1109.8C650.226 1111.8 646.226 1115.2 643.426 1119.4ZM704.072 1185.3L704.208 1185.17C704.538 1184.78 704.86 1184.38 705.176 1183.98C706.131 1182.77 705.285 1181.04 703.743 1180.95L658.18 1178.18C656.766 1178.09 655.715 
                            1179.46 656.251 1180.78C657.259 1183.24 658.502 1185.6 660.055 1187.81C662.568 1191.4 665.965 1194.37 669.972 1196.13C675.61 1198.57 681.928 1198.5 687.769 1196.61C694.155 1194.51 699.725 1190.45 704.072 1185.3Z"
                        />
                        <path className={`st7 ${tooth45Diagnozis?.cervical_caries ? 'cervical-caries' : ''}`} 
                            d="M703.987 1185.17L703.851 1185.3C699.504 1190.45 693.934 1194.51 687.549 1196.61C681.707 1198.5 675.39 1198.57 669.752 1196.13C665.744 1194.37 662.348 1191.4 659.834 1187.81C658.281 1185.6 657.039 1183.24 656.031 1180.78C655.495 1179.46 656.545 1178.09 657.959 1178.18L703.522 1180.95C705.065 1181.04 705.91 1182.77 704.955 1183.98C704.64 1184.38 704.317 1184.78 703.987 1185.17Z"
                        />
                        <path className={
                                `st60
                                    ${(tooth45Diagnozis?.wedge_shaped_defect) ? `shaped-defect-stroke` : ""}
                                    ${(tooth45Diagnozis?.seal_cervical) ? `seal-cervical-stroke` : ""}
                                    ${tooth45Diagnozis.seal_cervical_color}
                                `
                            } 
                            d="M703.987 1185.17L703.851 1185.3C699.504 1190.45 693.934 1194.51 687.549 1196.61C681.707 1198.5 675.39 1198.57 669.752 1196.13C665.744 1194.37 662.348 1191.4 659.834 1187.81C658.281 1185.6 657.039 1183.24 656.031 1180.78C655.495 1179.46 656.545 1178.09 657.959 1178.18L703.522 1180.95C705.065 1181.04 705.91 1182.77 704.955 1183.98C704.64 1184.38 704.317 1184.78 703.987 1185.17Z" 
                        />
                    </g>
                    {/* TARTAR */}
                    <g className="tartar" style={{visibility: 'inherit', opacity: teethDiagnozis.tooth45.tartar ? 1 : 0}}>
                        <path className="st61 level2" d="M722.5 1175L721 1175.5L720.5 1176L720 1177L718.5 1178L717.5 1180L716 1182L715.5 1182.5L714.5 1183L713 1185.5L711 1186.5L708.5 1187.5L707.5 1189L705 1192L703.5 1192.5L702 1194L700 1194.5L697 1196L693.5 1198L690 1199L685.5 1200.5H681L677.5 1201.5L671.5 1200.5L670.5 1199.5L667.5 1199L665 1197.5H663.5L661.5 1196L656.5 1191.5L655.5 1189.5L652.5 1187L650.5 1183.5L648.5 1182.5L648 1178L646.5 1175.5L645.5 1174.5L645 1172.5L643.5 1170.5L640.5 1168L640 1170.5L640.5 1173.5L641.5 1175.5V1177L642.5 1181V1183.5L643 1188V1192L643.5 1195L643 1197.5L643.5 1199.5V1202V1205.5L642.5 1208L643 1210L643.5 1213.5V1216L643 1219.5L643.5 1223.5L646.5 1225L650 1227L655 1228.5H659.5L665 1231.5L671.5 1232.5H677.5L683 1230.5L687.5 1231.5L691.5 1230.5L695 1230L698.5 1228L701 1227L702.5 1224L703.5 1221L705.5 1217.5L706 1214.5L707.5 1212L708.5 1210L709 1209V1207.5L710 1205.5L711 1203.5L712 1201.5L713 1197.5L714.5 1195.5L715 1193L716.5 1190L717.5 1187.5L719 1186L720.5 1183V1181L722.5 1178.5V1177V1175Z"></path>
                        <path className="st61 level1" d="M722.5 1175L721 1175.5L720.5 1176L720 1177L718.5 1178L717.5 1180L716 1182L715.5 1182.5L714.5 1183L713 1185.5L711 1186.5L708.5 1187.5L707.5 1189L705 1192L703.5 1192.5L702 1194L700 1194.5L697 1196L693.5 1198L690 1199L685.5 1200.5H681L677.5 1201.5L671.5 1200.5L670.5 1199.5L667.5 1199L665 1197.5H663.5L661.5 1196L656.5 1191.5L655.5 1189.5L652.5 1187L650.5 1183.5L648.5 1182.5L648 1178L646.5 1175.5L645.5 1174.5L645 1172.5L643.5 1170.5L640.5 1168V1171.5L642 1175V1178L642.5 1180.5L643 1181.5V1184L643.5 1185.5V1187.5V1190.5L644 1193L643.5 1195L644 1196.5V1198L645.5 1200.5L647 1201L648.5 1203L652.5 1205L655 1207L658.5 1208.5L663 1209L667.5 1211L670.5 1211.5L673.5 1211L677.5 1211.5L681 1212.5L685.5 1211.5H690L694 1210.5L696 1208.5L699.5 1209L702.5 1207.5L705.5 1207L706.5 1207.5L707.5 1206L708 1203.5L709 1201.5L710.5 1200L711 1198L712.5 1195L713.5 1193.5L714.5 1190.5L716 1189.5L717.5 1186.5L718.5 1185.5L720 1183.5L720.5 1181.5L721 1180L722 1177.5L722.5 1176V1175Z"></path>
                    </g>
                    {/*КАРИЕС*/}
                    <g className="header caries-filling" style={{visibility: (!tooth45Diagnozis.culttab && !tooth45Diagnozis.abutment && !tooth45Diagnozis.implant && !tooth45Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        {/*КАРИЕС C*/}
                        <g className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                        >
                            <path className="st58" d="M659.1,1140.2c2.3,4.5,6.8,11,14.5,14.5c11.4,5.2,25.1,4.5,36.6,1.8c0.1-1.6,0.1-3.3,0.2-4.9
                                c0.6-8.8,1.7-31.5,2.3-42.8c-1.1-1.9-2.2-3.8-3.3-5.6c-2-3.6-4.1-7-7.8-9.1c-4-2.2-8.7-2.1-13-0.6c-7.3,2.6-12.6,8.7-19.7,11.8
                                c-0.6,0.2-1.1,0.5-1.7,0.7c-1.7,8.8-4.5,22.2-6.9,30.1C659.9,1137.5,659.5,1138.8,659.1,1140.2z"
                            />
                            <path className={`
                                st8 target caries-right 
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth45.caries_center ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth45.seal_center ? `seal-fill ${teethDiagnozis.tooth45.seal_center_color}` : ''}
                            `} 
                                d="M659.1,1140.2c2.3,4.5,6.8,11,14.5,14.5c11.4,5.2,25.1,4.5,36.6,1.8c0.1-1.6,0.1-3.3,0.2-4.9
                                c0.6-8.8,1.7-31.5,2.3-42.8c-1.1-1.9-2.2-3.8-3.3-5.6c-2-3.6-4.1-7-7.8-9.1c-4-2.2-8.7-2.1-13-0.6c-7.3,2.6-12.6,8.7-19.7,11.8
                                c-0.6,0.2-1.1,0.5-1.7,0.7c-1.7,8.8-4.5,22.2-6.9,30.1C659.9,1137.5,659.5,1138.8,659.1,1140.2z"  
                            />
                        </g>
                        {/*КАРИЕС L*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st58" d="M712.4,1181.3c0.4,1.1,1.3,2.6,2.3,4.2c6.9-8.2,11.6-17.9,14.6-28.2c2.1-7.4,3.3-15.1,3.6-22.8l-1.1-4.4
                                c-1.3-2.2-2.9-4.2-4.7-6c-3.1-3.2-6.9-5.6-9.9-8.9c-1.7-1.9-3.2-4-4.5-6.3c-0.5,11.3-1.7,34-2.3,42.8c-0.1,1.7-0.2,3.3-0.2,4.9
                                C709.8,1166.7,710.5,1176.5,712.4,1181.3z" 
                            />
                            <path className={
                                `st8 caries-right
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth45.caries_right ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth45.seal_right ? `seal-fill ${teethDiagnozis.tooth45.seal_right_color}` : ''}
                            `} 
                                d="M712.4,1181.3c0.4,1.1,1.3,2.6,2.3,4.2c6.9-8.2,11.6-17.9,14.6-28.2c2.1-7.4,3.3-15.1,3.6-22.8l-1.1-4.4
                                c-1.3-2.2-2.9-4.2-4.7-6c-3.1-3.2-6.9-5.6-9.9-8.9c-1.7-1.9-3.2-4-4.5-6.3c-0.5,11.3-1.7,34-2.3,42.8c-0.1,1.7-0.2,3.3-0.2,4.9
                                C709.8,1166.7,710.5,1176.5,712.4,1181.3z" 
                            />
                        </g>
                        {/* КАРИЕС R */}
                        <g className="caries-filling hoho1"
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                        >
                            <path className="st58" d="M639.6,1163.1c0.5,2.5,1.1,5,1.8,7.4c2.7-1.2,5.5-2.8,7.5-5.1c4-4.8,7-14.4,10.3-25.2
                                c0.4-1.3,0.8-2.7,1.2-4.1c2.4-7.9,5.2-21.4,6.9-30.1c-4.1,1.5-8.4,2.2-12.4,3.9c-4.7,2-8.7,5.3-11.5,9.6c-2.2,4-3.9,8.2-4.9,12.7
                                C636.1,1142.4,637.4,1152.9,639.6,1163.1z"
                            />
                            <path className={
                                    `st8 caries-left
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth45.caries_left ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth45.seal_left ? `seal-fill ${teethDiagnozis.tooth45.seal_left_color}` : ''}
                            `} 
                                d="M639.6,1163.1c0.5,2.5,1.1,5,1.8,7.4c2.7-1.2,5.5-2.8,7.5-5.1c4-4.8,7-14.4,10.3-25.2
                                c0.4-1.3,0.8-2.7,1.2-4.1c2.4-7.9,5.2-21.4,6.9-30.1c-4.1,1.5-8.4,2.2-12.4,3.9c-4.7,2-8.7,5.3-11.5,9.6c-2.2,4-3.9,8.2-4.9,12.7
                                C636.1,1142.4,637.4,1152.9,639.6,1163.1z"
                            />
                        </g>
                        {/*КАРИЕС B*/}
                        <g className="caries-filling bottom"
                            onClick={() => {
                                setColordedPart(diagnozis, 'bottom');
                            }}
                        >
                            <path className="st58" d="M641.3,1170.6c1.8,6.7,4.4,13.2,8.4,18.8c3.8,5.3,8.7,9.7,14.7,12.3c8.3,3.6,17.6,3.5,26.2,0.7
                                c9.5-3.1,17.6-9.1,24-16.7c0.1-0.1,0.1-0.1,0.2-0.2c-1-1.6-1.9-3.1-2.3-4.2c-1.9-4.8-2.6-14.6-2.2-24.8
                                c-11.4,2.6-25.2,3.4-36.6-1.8c-7.7-3.5-12.2-10-14.5-14.5c-3.2,10.9-6.2,20.5-10.3,25.2C646.9,1167.7,644,1169.4,641.3,1170.6z"
                            />
                            <path className={`
                                    st8 target caries-bottom
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth45.caries_bottom ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth45.seal_bottom ? `seal-fill ${teethDiagnozis.tooth45.seal_bottom_color}` : ''}
                                `}  
                                d="M641.3,1170.6c1.8,6.7,4.4,13.2,8.4,18.8c3.8,5.3,8.7,9.7,14.7,12.3c8.3,3.6,17.6,3.5,26.2,0.7
                                c9.5-3.1,17.6-9.1,24-16.7c0.1-0.1,0.1-0.1,0.2-0.2c-1-1.6-1.9-3.1-2.3-4.2c-1.9-4.8-2.6-14.6-2.2-24.8
                                c-11.4,2.6-25.2,3.4-36.6-1.8c-7.7-3.5-12.2-10-14.5-14.5c-3.2,10.9-6.2,20.5-10.3,25.2C646.9,1167.7,644,1169.4,641.3,1170.6z"
                            />
                        </g>
                        <g className="with up">
                            {/* лево верх черточка*/}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth45Diagnozis.seal_left && !tooth45Diagnozis.seal_top && !tooth45Diagnozis.seal_center) ||
                                        (tooth45Diagnozis.seal_left && tooth45Diagnozis.seal_top && !tooth45Diagnozis.seal_center) ||
                                        (!tooth45Diagnozis.seal_left && tooth45Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M659.5 1140L666.5 1111.5" />
                            {/* лево низ черточка */}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth45Diagnozis.seal_left && !tooth45Diagnozis.seal_bottom) ||
                                        (!tooth45Diagnozis.seal_left && tooth45Diagnozis.seal_bottom && !tooth45Diagnozis.seal_center) ||
                                        (!tooth45Diagnozis.seal_left && tooth45Diagnozis.seal_bottom && tooth45Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M659.5 1140C657 1147 656.2 1162.1 645 1168.5" />
                            {/* поперечная полоска */}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth45Diagnozis.seal_bottom && !tooth45Diagnozis.seal_center) ||
                                        (!tooth45Diagnozis.seal_bottom && tooth45Diagnozis.seal_center) ||
                                        (tooth45Diagnozis.seal_right && tooth45Diagnozis.seal_left && !tooth45Diagnozis.seal_center && !tooth45Diagnozis.seal_top) ||
                                        (!tooth45Diagnozis.seal_top && !tooth45Diagnozis.seal_bottom && tooth45Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}  
                                d="M659.5 1140C669.5 1156.5 695.2 1160.9 710 1156.5" />
                            {/* право низ черточка */}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth45Diagnozis.seal_right && !tooth45Diagnozis.seal_bottom) ||
                                        (!tooth45Diagnozis.seal_right && tooth45Diagnozis.seal_bottom && !tooth45Diagnozis.seal_center) ||
                                        (!tooth45Diagnozis.seal_right && tooth45Diagnozis.seal_bottom && tooth45Diagnozis.seal_center)
                                    )
                                        ? 5 : 0
                                }} 
                                d="M710 1156.5C710 1163.5 709 1172.5 712 1180" />
                            {/* право верх черточка */}
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth45Diagnozis.seal_right && !tooth45Diagnozis.seal_bottom && !tooth45Diagnozis.seal_center) ||
                                        (tooth45Diagnozis.seal_right && tooth45Diagnozis.seal_bottom && !tooth45Diagnozis.seal_center) ||
                                        (!tooth45Diagnozis.seal_right && tooth45Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M710 1156.5L712 1117" />
                        </g>
                    </g>
                    <g>
                        <g className="vinir" 
                            style={{
                                visibility: tooth45Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth45Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className={`vinir-fill ${tooth45Diagnozis.vinir_color}`}
                                d="M731.8 1130C730.5 1127.8 728.9 1125.8 727.1 1124C724 1120.8 720.2 1118.3 717.2 1115.1C715.5 1113.2 714 1111.1 712.7 1108.8C711.6 1106.9 710.5 1105 709.4 1103.2C707.4 1099.6 705.3 1096.2 701.6 1094.1C697.6 1091.9 692.9 1092 688.6 1093.5C681.3 1096.1 676 1102.2 668.9 1105.3C668.3 1105.5 667.8 1105.8 667.2 1106C663.1 1107.5 658.8 1108.2 654.8 1109.9C650.1 1111.9 646.1 1115.2 643.3 1119.5C641.1 1123.5 639.4 1127.7 638.4 1132.2C636.1 1142.4 637.4 1153 639.6 1163.2C640.1 1165.7 640.7 1168.2 641.4 1170.6C643.2 1177.3 645.8 1183.7 649.8 1189.4C653.6 1194.7 658.5 1199.1 664.5 1201.7C672.8 1205.3 682.1 1205.2 690.7 1202.4C700.2 1199.3 708.3 1193.3 714.7 1185.7C714.8 1185.6 714.8 1185.6 714.9 1185.5C721.8 1177.3 726.5 1167.6 729.5 1157.3C731.6 1149.9 732.8 1142.2 733.1 1134.5L731.8 1130Z"></path>
                        </g>
                    </g>
                    {/* ТИМЧАСОВА КОРОНКА/КЕРАМІЧНА КОРОНКА */}
                    <g className="crown" style={{
                        visibility: (tooth45Diagnozis.temporary_crown || tooth45Diagnozis.ceramic_crown || tooth45Diagnozis.mceramic_crown || tooth45Diagnozis.metalic_crown || tooth45Diagnozis.zirconia_crown) ? 'inherit' : 'hidden',
                        opacity: (tooth45Diagnozis.temporary_crown || tooth45Diagnozis.ceramic_crown || tooth45Diagnozis.mceramic_crown || tooth45Diagnozis.metalic_crown || tooth45Diagnozis.zirconia_crown)  ? 1 : 0
                    }}>
                        <path className={
                                `st46 target temporary-crown crown-fill ${diagnozis}
                                ${tooth45Diagnozis.ceramic_crown_color}
                                ${tooth45Diagnozis.mceramic_crown_color}
                                ${tooth45Diagnozis.metalic_crown_color}
                                ${tooth45Diagnozis.zirconia_crown_color}
                            `} 
                            d="M731.8,1130c-1.3-2.2-2.9-4.2-4.7-6c-3.1-3.2-6.9-5.7-9.9-8.9c-1.7-1.9-3.2-4-4.5-6.3
                            c-1.1-1.9-2.2-3.8-3.3-5.6c-2-3.6-4.1-7-7.8-9.1c-4-2.2-8.7-2.1-13-0.6c-7.3,2.6-12.6,8.7-19.7,11.8c-0.6,0.2-1.1,0.5-1.7,0.7
                            c-4.1,1.5-8.4,2.2-12.4,3.9c-4.7,2-8.7,5.3-11.5,9.6c-2.2,4-3.9,8.2-4.9,12.7c-2.3,10.2-1,20.8,1.2,31c0.5,2.5,1.1,5,1.8,7.4
                            c1.8,6.7,4.4,13.1,8.4,18.8c3.8,5.3,8.7,9.7,14.7,12.3c8.3,3.6,17.6,3.5,26.2,0.7c9.5-3.1,17.6-9.1,24-16.7
                            c0.1-0.1,0.1-0.1,0.2-0.2c6.9-8.2,11.6-17.9,14.6-28.2c2.1-7.4,3.3-15.1,3.6-22.8L731.8,1130z"></path>
                    </g>
                </g>
            </g>
        </>
    )
}
