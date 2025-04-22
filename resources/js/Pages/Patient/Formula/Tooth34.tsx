import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSubDiagnosis, setToothDiagnoze, setNewToothActive, setDisactiveAll, setSelectedToothNumber } from '../../../Redux/Formula';
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
import PeriodontitStage34 from './periodontit34';


export default function Tooth34() {
        const dispatch = useDispatch<any>();
        const toothActive = useSelector(getStatusesSelector);
        const allTeeth = useSelector(allTeethSelector);
        const diagnozis = useSelector(getDiagnosisSelector);
        const subDiagnozis = useSelector(getSubDiagnosisSelector);
        const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
        const tooth34Diagnozis = teethDiagnozis.tooth34;
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
                    teethDiagnozis.tooth34.caries_bottom = !teethDiagnozis.tooth34.caries_bottom;
                }
                if (toothPart === 'center') {
                    teethDiagnozis.tooth34.caries_center = !teethDiagnozis.tooth34.caries_center;
                }
                if (toothPart === 'left') {
                    teethDiagnozis.tooth34.caries_left = !teethDiagnozis.tooth34.caries_left;
                }
                if (toothPart === 'right') {
                    teethDiagnozis.tooth34.caries_right = !teethDiagnozis.tooth34.caries_right;
                }
                if (toothPart === 'top') {
                    teethDiagnozis.tooth34.caries_top = !teethDiagnozis.tooth34.caries_top;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (diagnozis === 'seal') {
                if (toothPart === 'center') {
                    if (teethDiagnozis.tooth34.seal_center_color != sealColor1 && sealColor1 != '') {
                        teethDiagnozis.tooth34.seal_center_color = sealColor1;
                        teethDiagnozis.tooth34.seal_center = true;
                    } else if (teethDiagnozis.tooth34.seal_center_color != sealColor2 && sealColor2 != '') {
                        teethDiagnozis.tooth34.seal_center_color = sealColor2;
                        teethDiagnozis.tooth34.seal_center = true;
                    } else if (teethDiagnozis.tooth34.seal_center_color != sealColor3 && sealColor3 != '') {
                        teethDiagnozis.tooth34.seal_center_color = sealColor3;
                        teethDiagnozis.tooth34.seal_center = true;
                    } else {
                        teethDiagnozis.tooth34.seal_center = !teethDiagnozis.tooth34.seal_center;
                    }
                    dispatch(setToothDiagnoze(teethDiagnozis));
                }
                if (toothPart === 'bottom') {
                    if (teethDiagnozis.tooth34.seal_bottom_color != sealColor1 && sealColor1 != '') {
                        teethDiagnozis.tooth34.seal_bottom_color = sealColor1;
                        teethDiagnozis.tooth34.seal_bottom = true;
                    } else if (teethDiagnozis.tooth34.seal_bottom_color != sealColor2 && sealColor2 != '') {
                        teethDiagnozis.tooth34.seal_bottom_color = sealColor2;
                        teethDiagnozis.tooth34.seal_bottom = true;
                    } else if (teethDiagnozis.tooth34.seal_bottom_color != sealColor3 && sealColor3 != '') {
                        teethDiagnozis.tooth34.seal_bottom_color = sealColor3;
                        teethDiagnozis.tooth34.seal_bottom = true;
                    } else {
                        teethDiagnozis.tooth34.seal_bottom = !teethDiagnozis.tooth34.seal_bottom;
                    }
                    dispatch(setToothDiagnoze(teethDiagnozis));
                }
                if (toothPart === 'left') {
                    if (teethDiagnozis.tooth34.seal_left_color != sealColor1 && sealColor1 != '') {
                        teethDiagnozis.tooth34.seal_left_color = sealColor1;
                        teethDiagnozis.tooth34.seal_left = true;
                    } else if (teethDiagnozis.tooth34.seal_left_color != sealColor2 && sealColor2 != '') {
                        teethDiagnozis.tooth34.seal_left_color = sealColor2;
                        teethDiagnozis.tooth34.seal_left = true;
                    } else if (teethDiagnozis.tooth34.seal_left_color != sealColor3 && sealColor3 != '') {
                        teethDiagnozis.tooth34.seal_left_color = sealColor3;
                        teethDiagnozis.tooth34.seal_left = true;
                    } else {
                        teethDiagnozis.tooth34.seal_left = !teethDiagnozis.tooth34.seal_left;
                    }
                    dispatch(setToothDiagnoze(teethDiagnozis));
                }
                if (toothPart === 'right') {
                    if (teethDiagnozis.tooth34.seal_right_color != sealColor1 && sealColor1 != '') {
                        teethDiagnozis.tooth34.seal_right_color = sealColor1;
                        teethDiagnozis.tooth34.seal_right = true;
                    } else if (teethDiagnozis.tooth34.seal_right_color != sealColor2 && sealColor2 != '') {
                        teethDiagnozis.tooth34.seal_right_color = sealColor2;
                        teethDiagnozis.tooth34.seal_right = true;
                    } else if (teethDiagnozis.tooth34.seal_right_color != sealColor3 && sealColor3 != '') {
                        teethDiagnozis.tooth34.seal_right_color = sealColor3;
                        teethDiagnozis.tooth34.seal_right = true;
                    } else {
                        teethDiagnozis.tooth34.seal_right = !teethDiagnozis.tooth34.seal_right;
                    }
                    dispatch(setToothDiagnoze(teethDiagnozis));
                }
                if (toothPart === 'top') {
                    if (teethDiagnozis.tooth34.seal_top_color != sealColor1 && sealColor1 != '') {
                        teethDiagnozis.tooth34.seal_top_color = sealColor1;
                        teethDiagnozis.tooth34.seal_top = true;
                    } else if (teethDiagnozis.tooth34.seal_top_color != sealColor2 && sealColor2 != '') {
                        teethDiagnozis.tooth34.seal_top_color = sealColor2;
                        teethDiagnozis.tooth34.seal_top = true;
                    } else if (teethDiagnozis.tooth34.seal_top_color != sealColor3 && sealColor3 != '') {
                        teethDiagnozis.tooth34.seal_top_color = sealColor3;
                        teethDiagnozis.tooth34.seal_top = true;
                    } else {
                        teethDiagnozis.tooth34.seal_top = !teethDiagnozis.tooth34.seal_top;
                    }
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
            if (diagnozis === 'wedge_shaped_defect') {
                if (teethDiagnozis.tooth34.wedge_shaped_defect_color != wsDefectColor && wsDefectColor != '') {
                    teethDiagnozis.tooth34.wedge_shaped_defect_color = wsDefectColor;
                } else {
                    teethDiagnozis.tooth34.wedge_shaped_defect_color = !teethDiagnozis.tooth34.wedge_shaped_defect_color;
                }
                dispatch(setToothDiagnoze(teethDiagnozis));
            }
        }

    return (
        <>
            <g id="34" className="df-tooth-text">
                <text transform="matrix(1 0 0 1 1304.4775 842.0025)" className={`st3 st4 st5 ${toothActive.tooth34.active ? 'num-active' : ''}`}>34</text>
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
                    if (toothActive.tooth34.active) {
                        dispatch(setNewToothActive({tooth34: {active: true}}))
                    } else {
                        dispatch(setDisactiveAll());
                        dispatch(setNewToothActive({tooth34: {active: true}}))
                    }
                    if (diagnozis) {
                        if (diagnozis === 'change_color')
                            teethDiagnozis.tooth34.change_color = !teethDiagnozis.tooth34.change_color;
                        else if (diagnozis === 'fissure')
                            teethDiagnozis.tooth34.fissure = !teethDiagnozis.tooth34.fissure;
                        else if (diagnozis === 'caries')
                            teethDiagnozis.tooth34.caries = !teethDiagnozis.tooth34.caries;
                        else if (diagnozis === 'cervical_caries')
                            teethDiagnozis.tooth34.cervical_caries = !teethDiagnozis.tooth34.cervical_caries;
                        else if (diagnozis === 'wedge_shaped_defect')
                            teethDiagnozis.tooth34.wedge_shaped_defect = !teethDiagnozis.tooth34.wedge_shaped_defect;
                        else if (diagnozis === 'tartar')
                            teethDiagnozis.tooth34.tartar = !teethDiagnozis.tooth34.tartar;
                        else if (diagnozis === 'pulpit') {
                            teethDiagnozis.tooth34.pulpit = !teethDiagnozis.tooth34.pulpit;
                            teethDiagnozis.tooth34.channel_class = teethDiagnozis.tooth34.pulpit ? 'pulpit' : ''
                        } else if (diagnozis === 'channel_not_sealed') {
                            teethDiagnozis.tooth34.channel_not_sealed = !teethDiagnozis.tooth34.channel_not_sealed;
                            teethDiagnozis.tooth34.channel_class = teethDiagnozis.tooth34.channel_not_sealed ? 'channel-not-sealed' : '';
                        } else if (diagnozis === 'channel_top_sealed') {
                            teethDiagnozis.tooth34.channel_top_sealed = !teethDiagnozis.tooth34.channel_top_sealed;
                            teethDiagnozis.tooth34.channel_class = teethDiagnozis.tooth34.channel_top_sealed ? 'channel-top-sealed' : '';
                        } else if (diagnozis === 'channel_part_sealed') {
                            teethDiagnozis.tooth34.channel_part_sealed = !teethDiagnozis.tooth34.channel_part_sealed;
                            teethDiagnozis.tooth34.channel_class = teethDiagnozis.tooth34.channel_part_sealed ? 'channel-part-sealed' : '';
                        } else if (diagnozis === 'periodontit') {
                            if (teethDiagnozis.tooth34.periodontit_stage !== subDiagnozis) {
                                teethDiagnozis.tooth34.periodontit_stage = subDiagnozis
                                teethDiagnozis.tooth34.periodontit = true;
                            } else {
                                teethDiagnozis.tooth34.periodontit = !teethDiagnozis.tooth34.periodontit;
                            }
                            teethDiagnozis.tooth34.channel_class = teethDiagnozis.tooth34.periodontit ? 'periodontit' : '';
                            if (!teethDiagnozis.tooth34.periodontit) dispatch(setSubDiagnosis(''));
                        } else if (diagnozis === 'seal_cervical') {
                            if (!teethDiagnozis.tooth34.seal_cervical && teethDiagnozis.tooth34.seal_cervical_color === "") {
                                teethDiagnozis.tooth34.seal_cervical = true;
                                teethDiagnozis.tooth34.seal_cervical_color = wsDefectColor;
                            } else if (teethDiagnozis.tooth34.seal_cervical && teethDiagnozis.tooth34.seal_cervical_color != wsDefectColor) {
                                teethDiagnozis.tooth34.seal_cervical_color = wsDefectColor;
                            } else {
                                teethDiagnozis.tooth34.seal_cervical = false;
                                teethDiagnozis.tooth34.seal_cervical_color = "";
                            }
                        } else if (diagnozis === 'vinir') {
                            if (!teethDiagnozis.tooth34.vinir && teethDiagnozis.tooth34.vinir_color === "") {
                                teethDiagnozis.tooth34.vinir = true;
                                teethDiagnozis.tooth34.vinir_color = vinirColor;
                            } else if (teethDiagnozis.tooth34.vinir && teethDiagnozis.tooth34.vinir_color != vinirColor) {
                                teethDiagnozis.tooth34.vinir_color = vinirColor;
                            } else {
                                teethDiagnozis.tooth34.vinir = false;
                                teethDiagnozis.tooth34.vinir_color = "";
                            }
                        } else if (diagnozis === 'temporary_crown') {
                            teethDiagnozis.tooth34.temporary_crown = !teethDiagnozis.tooth34.temporary_crown;
                        } else if (diagnozis === 'ceramic_crown') {
                            if (!teethDiagnozis.tooth34.ceramic_crown && teethDiagnozis.tooth34.ceramic_crown_color === "") {
                                teethDiagnozis.tooth34.ceramic_crown = true;
                                teethDiagnozis.tooth34.ceramic_crown_color = ceramicCrownColor;
                            } else if (teethDiagnozis.tooth34.ceramic_crown && teethDiagnozis.tooth34.ceramic_crown_color != ceramicCrownColor) {
                                teethDiagnozis.tooth34.ceramic_crown_color = ceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth34.ceramic_crown = false;
                                teethDiagnozis.tooth34.ceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'mceramic_crown') {
                            if (!teethDiagnozis.tooth34.mceramic_crown && teethDiagnozis.tooth34.mceramic_crown_color === "") {
                                teethDiagnozis.tooth34.mceramic_crown = true;
                                teethDiagnozis.tooth34.mceramic_crown_color = mceramicCrownColor;
                            } else if (teethDiagnozis.tooth34.mceramic_crown && teethDiagnozis.tooth34.mceramic_crown_color != mceramicCrownColor) {
                                teethDiagnozis.tooth34.mceramic_crown_color = mceramicCrownColor;
                            } else {
                                teethDiagnozis.tooth34.mceramic_crown = false;
                                teethDiagnozis.tooth34.mceramic_crown_color = "";
                            }
                        } else if (diagnozis === 'metalic_crown') {
                            if (!teethDiagnozis.tooth34.metalic_crown && teethDiagnozis.tooth34.metalic_crown_color === "") {
                                teethDiagnozis.tooth34.metalic_crown = true;
                                teethDiagnozis.tooth34.metalic_crown_color = metalicCrownColor;
                            } else if (teethDiagnozis.tooth34.metalic_crown && teethDiagnozis.tooth34.metalic_crown_color != metalicCrownColor) {
                                teethDiagnozis.tooth34.mceramic_crown_color = metalicCrownColor;
                            } else {
                                teethDiagnozis.tooth34.metalic_crown = false;
                                teethDiagnozis.tooth34.metalic_crown_color = "";
                            }
                        } else if (diagnozis === 'zirconia_crown') {
                            if (!teethDiagnozis.tooth34.zirconia_crown && teethDiagnozis.tooth34.zirconia_crown_color === "") {
                                teethDiagnozis.tooth34.zirconia_crown = true;
                                teethDiagnozis.tooth34.zirconia_crown_color = zirconiaCrownColor;
                            } else if (teethDiagnozis.tooth34.zirconia_crown && teethDiagnozis.tooth34.zirconia_crown_color != zirconiaCrownColor) {
                                teethDiagnozis.tooth34.zirconia_crown_color = zirconiaCrownColor;
                            } else {
                                teethDiagnozis.tooth34.zirconia_crown = false;
                                teethDiagnozis.tooth34.zirconia_crown_color = "";
                            }
                        } else if (diagnozis === 'pin') {
                            teethDiagnozis.tooth34.pin = !teethDiagnozis.tooth34.pin;
                        } else if (diagnozis === 'culttab') {
                            teethDiagnozis.tooth34.culttab = !teethDiagnozis.tooth34.culttab;
                        } else if (diagnozis === 'abutment') {
                            teethDiagnozis.tooth34.abutment = !teethDiagnozis.tooth34.abutment;
                        } else if (diagnozis === 'shaper') {
                            teethDiagnozis.tooth34.shaper = !teethDiagnozis.tooth34.shaper;
                        } else if (diagnozis === 'implant') {
                            teethDiagnozis.tooth34.implant = !teethDiagnozis.tooth34.implant;
                        } else if (diagnozis === 'apex') {
                            teethDiagnozis.tooth34.apex = !teethDiagnozis.tooth34.apex;
                        } else if (diagnozis === 'absent') {
                            teethDiagnozis.tooth34.absent = !teethDiagnozis.tooth34.absent;
                        } else if (diagnozis === 'cervical_caries') {
                            teethDiagnozis.tooth34.cervical_caries = !teethDiagnozis.tooth34.cervical_caries;
                        } else if (diagnozis === 'caries') {
                            teethDiagnozis.tooth34.caries = !teethDiagnozis.tooth34.caries;
                        } else if (diagnozis === 'parodontit') {
                            if (teethDiagnozis.tooth34.parodontit) {
                                if (teethDiagnozis.tooth34.parodontit_stage === subDiagnozis) {
                                    teethDiagnozis.tooth34.parodontit = false;
                                    teethDiagnozis.tooth34.active = false;
                                } else {
                                    teethDiagnozis.tooth34.parodontit = true;
                                    teethDiagnozis.tooth34.parodontit_stage = subDiagnozis
                                }
                            } else {
                                teethDiagnozis.tooth34.parodontit = true;
                                teethDiagnozis.tooth34.parodontit_stage = subDiagnozis;
                                teethDiagnozis.tooth34.active = true;
                            }
                        }
                        dispatch(setToothDiagnoze(teethDiagnozis))
                    }
                }}
            >
                <g className="underlay" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <path className="st40" d="M1287,1255.9c0,0,8,42,15,67s14,47,33,47s25-15,25-28s-4-22-5-46s1-71,2-84
                        s13-41,9-68s-21-54-22-79s23-45,21-77s-5.8-165.8-10-185c-5-23-35-31-52-21s-22,31-25,86s-7,102-7,120s2,35,15,71
                        c13,36-18,62-14,100S1282,1228.9,1287,1255.9z"
                    />
                </g>
                <g id="T_34_up" className="top-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR/APEX/CULTTAB */}
                    <g className="dentin">
                        <g style={{visibility: !tooth34Diagnozis.implant && !tooth34Diagnozis.apex && !tooth34Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st9 change-color ${tooth34Diagnozis.change_color ? 'diagnoze' : ''}`}  
                                d="M1356.3,981.7c1.2,6,0.8,12-2.2,17.3c-3.1,5.5-8.6,9.8-14.6,13.2
                                c-7.2,4.1-15.4,7.3-24.2,6.7c-9.4-0.7-17.2-5.4-23.5-10.9c-3.2-2.8-6.1-6-8.2-9.4c-2.4-4-3.8-8.3-3.4-12.8
                                c0.5-7.4,5.4-13.6,9.6-19.7c3-4.4,5.8-8.7,9.3-13c2.4-2.8,5.2-5.6,8.8-7.4c4.5-2.3,9.9-3.1,15-3c4.5,0,9,0.8,13,2.6
                                c4.9,2.2,8.6,5.8,10.9,9.8c2.1,3.7,3,7.8,4.3,11.7C1352.8,971.6,1355.2,976.3,1356.3,981.7z"
                            />
                        </g>
                        <g style={{visibility: tooth34Diagnozis?.apex || tooth34Diagnozis.change_color ? 'inherit' : 'hidden'}}>
                            <path className={`st9 change-color ${tooth34Diagnozis.change_color ? 'diagnoze' : ''}`}
                                d="M1356.3 981.7C1357.5 987.7 1357.1 993.7 1354.1 999C1351 1004.5 1345.5 1008.8 1339.5 1012.2C1332.3 1016.3 1324.1 1019.5 1315.3 1018.9C1305.9 1018.2 1298.1 1013.5 1291.8 1008C1288.6 1005.2 1285.7 1002 1283.6 998.6C1281.2 994.6 1279.8 990.3 1280.2 985.8C1280.7 978.4 1285.6 972.2 1289.8 966.1C1292.8 961.7 1295.6 957.4 1299.1 953.1C1301.5 950.3 1304.3 947.5 1307.9 945.7C1312.4 943.4 1317.8 942.6 1322.9 942.7C1327.4 942.7 1331.9 943.5 1335.9 945.3C1340.8 947.5 1344.5 951.1 1346.8 955.1C1348.9 958.8 1349.8 962.9 1351.1 966.8C1352.8 971.6 1355.2 976.3 1356.3 981.7Z"
                            />
                        </g>
                    </g>
                    <g className="pulp">
                        <g className="pulpitis-pfilling" style={{visibility: tooth34Diagnozis.apex ? 'inherit' : 'hidden'}}>
                            <path className="st22 target" d="M1320.22 991.299C1323.84 991.408 1328.85 987.936 1329.03 981.838C1329.22 975.739 1324.5 969.324 1320.88 969.215C1317.25 969.107 1313.51 973.944 1313.33 980.042C1313.15 986.14 1316.59 991.191 1320.22 991.299Z" style={{fill: 'rgb(254, 246, 249)'}}></path>
                        </g>
                    </g>
                    {/* IMPLANT/CULTTAB */}
                    <g style={{visibility: tooth34Diagnozis.implant || tooth34Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <circle className="st48" cx="1319.5" cy="982.5" r="20.5" />
                        <g className="st27">
                            <mask id="implant_34" className="st49">
                                <path className="st50" d="M1308.87 969.971L1306.18 969.093C1303.89 971.398 1302.18 974.286 1301.31 977.515L1303.42 979.412C1303.23 980.412 1303.13 981.444 1303.13 982.5C1303.13 983.555 1303.23 984.588 1303.42 985.588L1301.31 987.484C1302.18 990.713 1303.89 993.602 1306.18 995.906L1308.87 995.029C1310.43 996.371 1312.24 997.428 1314.22 998.119L1314.8 1000.89C1316.36 1001.3 1317.99 1001.52 1319.67 1001.52C1321.35 1001.52 1322.98 1001.3 1324.53 1000.89L1325.12 998.118C1327.1 997.427 1328.91 996.37 1330.46 995.028L1333.16 995.906C1335.45 993.601 1337.15 990.712 1338.03 987.483L1335.92 985.587C1336.11 984.587 1336.21 983.555 1336.21 982.5C1336.21 981.445 1336.11 980.413 1335.92 979.413L1338.03 977.517C1337.15 974.287 1335.45 971.399 1333.16 969.094L1330.46 969.971C1328.91 968.629 1327.1 967.572 1325.12 966.881L1324.53 964.108C1322.98 963.699 1321.35 963.48 1319.67 963.48C1317.99 963.48 1316.36 963.698 1314.8 964.108L1314.22 966.88C1312.24 967.571 1310.43 968.629 1308.87 969.971Z"></path>
                            </mask>
                            <path className="st50 st51" d="M1308.87 969.971L1306.18 969.093C1303.89 971.398 1302.18 974.286 1301.31 977.515L1303.42 979.412C1303.23 980.412 1303.13 981.444 1303.13 982.5C1303.13 983.555 1303.23 984.588 1303.42 985.588L1301.31 987.484C1302.18 990.713 1303.89 993.602 1306.18 995.906L1308.87 995.029C1310.43 996.371 1312.24 997.428 1314.22 998.119L1314.8 1000.89C1316.36 1001.3 1317.99 1001.52 1319.67 1001.52C1321.35 1001.52 1322.98 1001.3 1324.53 1000.89L1325.12 998.118C1327.1 997.427 1328.91 996.37 1330.46 995.028L1333.16 995.906C1335.45 993.601 1337.15 990.712 1338.03 987.483L1335.92 985.587C1336.11 984.587 1336.21 983.555 1336.21 982.5C1336.21 981.445 1336.11 980.413 1335.92 979.413L1338.03 977.517C1337.15 974.287 1335.45 971.399 1333.16 969.094L1330.46 969.971C1328.91 968.629 1327.1 967.572 1325.12 966.881L1324.53 964.108C1322.98 963.699 1321.35 963.48 1319.67 963.48C1317.99 963.48 1316.36 963.698 1314.8 964.108L1314.22 966.88C1312.24 967.571 1310.43 968.629 1308.87 969.971Z"></path>
                            <path className="st52" d="M1306.18 969.093L1306.8 967.192L1305.63 966.81L1304.76 967.683L1306.18 969.093ZM1308.87 969.971L1308.25 971.872L1309.32 972.221L1310.18 971.485L1308.87 969.971ZM1301.31 977.515L1299.38 976.992L1299.06 978.18L1299.97 979.002L1301.31 977.515ZM1303.42 979.412L1305.38 979.783L1305.59 978.677L1304.75 977.924L1303.42 979.412ZM1303.42 985.588L1304.75 987.075L1305.59 986.323L1305.38 985.217L1303.42 985.588ZM1301.31 987.484L1299.97 985.997L1299.06 986.82L1299.38 988.007L1301.31 987.484ZM1306.18 995.906L1304.76 997.316L1305.63 998.189L1306.8 997.808L1306.18 995.906ZM1308.87 995.029L1310.18 993.514L1309.32 992.778L1308.25 993.127L1308.87 995.029ZM1314.22 998.119L1316.17 997.705L1315.94 996.602L1314.88 996.231L1314.22 998.119ZM1314.8 1000.89L1312.85 1001.31L1313.1 1002.51L1314.29 1002.83L1314.8 1000.89ZM1324.53 1000.89L1325.04 1002.82L1326.23 1002.51L1326.49 1001.31L1324.53 1000.89ZM1325.12 998.118L1324.46 996.23L1323.4 996.602L1323.16 997.704L1325.12 998.118ZM1330.46 995.028L1331.08 993.127L1330.01 992.778L1329.16 993.514L1330.46 995.028ZM1333.16 995.906L1332.54 997.808L1333.71 998.189L1334.58 997.316L1333.16 995.906ZM1338.03 987.483L1339.96 988.006L1340.28 986.818L1339.36 985.996L1338.03 987.483ZM1335.92 985.587L1333.95 985.216L1333.74 986.321L1334.58 987.074L1335.92 985.587ZM1335.92 979.413L1334.58 977.926L1333.74 978.678L1333.95 979.784L1335.92 979.413ZM1338.03 977.517L1339.36 979.004L1340.28 978.181L1339.96 976.994L1338.03 977.517ZM1333.16 969.094L1334.58 967.684L1333.71 966.811L1332.54 967.192L1333.16 969.094ZM1330.46 969.971L1329.16 971.486L1330.01 972.222L1331.08 971.873L1330.46 969.971ZM1325.12 966.881L1323.16 967.296L1323.4 968.398L1324.46 968.769L1325.12 966.881ZM1324.53 964.108L1326.49 963.694L1326.23 962.489L1325.04 962.174L1324.53 964.108ZM1314.8 964.108L1314.29 962.174L1313.1 962.488L1312.85 963.693L1314.8 964.108ZM1314.22 966.88L1314.88 968.769L1315.94 968.397L1316.17 967.295L1314.22 966.88ZM1305.56 970.995L1308.25 971.872L1309.49 968.069L1306.8 967.192L1305.56 970.995ZM1303.24 978.038C1304.02 975.152 1305.54 972.567 1307.6 970.503L1304.76 967.683C1302.23 970.228 1300.34 973.42 1299.38 976.992L1303.24 978.038ZM1304.75 977.924L1302.65 976.028L1299.97 979.002L1302.08 980.899L1304.75 977.924ZM1305.13 982.5C1305.13 981.57 1305.22 980.661 1305.38 979.783L1301.45 979.04C1301.24 980.163 1301.13 981.319 1301.13 982.5H1305.13ZM1305.38 985.217C1305.22 984.338 1305.13 983.43 1305.13 982.5H1301.13C1301.13 983.68 1301.24 984.837 1301.45 985.959L1305.38 985.217ZM1302.65 988.971L1304.75 987.075L1302.08 984.101L1299.97 985.997L1302.65 988.971ZM1307.6 994.496C1305.54 992.432 1304.02 989.847 1303.24 986.961L1299.38 988.007C1300.34 991.579 1302.23 994.771 1304.76 997.316L1307.6 994.496ZM1308.25 993.127L1305.56 994.005L1306.8 997.808L1309.49 996.931L1308.25 993.127ZM1314.88 996.231C1313.14 995.624 1311.55 994.695 1310.18 993.514L1307.56 996.543C1309.31 998.047 1311.34 999.232 1313.56 1000.01L1314.88 996.231ZM1316.76 1000.48L1316.17 997.705L1312.26 998.534L1312.85 1001.31L1316.76 1000.48ZM1319.67 999.519C1318.16 999.519 1316.7 999.324 1315.31 998.958L1314.29 1002.83C1316.01 1003.28 1317.81 1003.52 1319.67 1003.52V999.519ZM1324.02 998.957C1322.63 999.323 1321.17 999.519 1319.67 999.519V1003.52C1321.52 1003.52 1323.32 1003.28 1325.04 1002.82L1324.02 998.957ZM1323.16 997.704L1322.58 1000.48L1326.49 1001.31L1327.08 998.533L1323.16 997.704ZM1329.16 993.514C1327.79 994.695 1326.2 995.623 1324.46 996.23L1325.78 1000.01C1328 999.231 1330.03 998.046 1331.77 996.543L1329.16 993.514ZM1333.78 994.004L1331.08 993.127L1329.84 996.93L1332.54 997.808L1333.78 994.004ZM1336.1 986.96C1335.31 989.847 1333.79 992.431 1331.74 994.496L1334.58 997.316C1337.11 994.77 1338.99 991.578 1339.96 988.006L1336.1 986.96ZM1334.58 987.074L1336.69 988.97L1339.36 985.996L1337.26 984.099L1334.58 987.074ZM1334.21 982.5C1334.21 983.43 1334.12 984.337 1333.95 985.216L1337.88 985.958C1338.1 984.836 1338.21 983.68 1338.21 982.5H1334.21ZM1333.95 979.784C1334.12 980.662 1334.21 981.57 1334.21 982.5H1338.21C1338.21 981.32 1338.1 980.164 1337.88 979.042L1333.95 979.784ZM1336.69 976.029L1334.58 977.926L1337.26 980.9L1339.36 979.004L1336.69 976.029ZM1331.74 970.503C1333.79 972.568 1335.31 975.153 1336.1 978.039L1339.96 976.994C1338.99 973.421 1337.11 970.229 1334.58 967.684L1331.74 970.503ZM1331.08 971.873L1333.78 970.995L1332.54 967.192L1329.84 968.069L1331.08 971.873ZM1324.46 968.769C1326.2 969.376 1327.79 970.305 1329.16 971.486L1331.77 968.457C1330.03 966.954 1328 965.768 1325.78 964.993L1324.46 968.769ZM1322.58 964.523L1323.16 967.296L1327.08 966.467L1326.49 963.694L1322.58 964.523ZM1319.67 965.48C1321.17 965.48 1322.63 965.676 1324.02 966.042L1325.04 962.174C1323.32 961.721 1321.52 961.48 1319.67 961.48V965.48ZM1315.31 966.042C1316.7 965.676 1318.16 965.48 1319.67 965.48V961.48C1317.81 961.48 1316.01 961.721 1314.29 962.174L1315.31 966.042ZM1316.17 967.295L1316.76 964.522L1312.85 963.693L1312.26 966.466L1316.17 967.295ZM1310.18 971.485C1311.55 970.304 1313.14 969.376 1314.88 968.769L1313.56 964.992C1311.34 965.767 1309.31 966.953 1307.56 968.456L1310.18 971.485Z" mask="url(#implant_34)"></path>
                        </g>
                    </g>
                    {/* SHAPER */}
                    <g className="shaper hEmpty hIntact hRoot" style={{visibility: 'hidden', opacity: 0}} >
                        <circle className="st44" r="22.5" transform="matrix(-1 0 0 1 1319.5 982.5)" />
                        <path className="st45" d="M1321.42 973.739C1320.87 971.804 1318.13 971.804 1317.58 973.739L1317.07 975.511C1316.77 976.549 1315.71 977.164 1314.66 976.902L1312.87 976.454C1310.92 975.965 1309.55 978.339 1310.95 979.785L1312.23 981.109C1312.98 981.884 1312.98 983.116 1312.23 983.891L1310.95 985.215C1309.55 986.661 1310.92 989.035 1312.87 988.546L1314.66 988.098C1315.71 987.836 1316.77 988.451 1317.07 989.489L1317.58 991.261C1318.13 993.196 1320.87 993.196 1321.42 991.261L1321.93 989.489C1322.23 988.451 1323.29 987.836 1324.34 988.098L1326.13 988.546C1328.08 989.035 1329.45 986.661 1328.05 985.215L1326.77 983.891C1326.02 983.116 1326.02 981.884 1326.77 981.109L1328.05 979.785C1329.45 978.339 1328.08 975.965 1326.13 976.454L1324.34 976.902C1323.29 977.164 1322.23 976.549 1321.93 975.511L1321.42 973.739Z"></path>
                    </g>
                    {/* ABUTMENT */}
                    <g className="abutment" style={{visibility: tooth34Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth34Diagnozis.abutment ? 1 : 0}}>
                        <path className="st47" d="M1353.17 998.509L1353.17 998.507C1356.02 993.472 1356.42 987.732 1355.26 981.897C1354.73 979.284 1353.85 976.824 1352.89 974.39C1352.63 973.717 1352.36 973.041 1352.08 972.364C1351.38 970.621 1350.67 968.868 1350.09 967.116C1349.73 966.049 1349.41 964.992 1349.1 963.947C1348.22 961.042 1347.37 958.233 1345.87 955.596C1343.67 951.771 1340.13 948.321 1335.43 946.212L1335.43 946.212C1331.58 944.48 1327.22 943.7 1322.84 943.7H1322.83L1322.82 943.699C1317.82 943.601 1312.6 944.389 1308.29 946.59L1308.29 946.59L1308.29 946.594C1304.87 948.302 1302.18 950.976 1299.81 953.741C1296.9 957.317 1294.48 960.889 1291.99 964.561C1291.52 965.258 1291.04 965.958 1290.56 966.663L1290.56 966.667C1290.1 967.336 1289.64 968.001 1289.17 968.665C1287.49 971.068 1285.82 973.456 1284.42 975.951C1282.65 979.117 1281.37 982.37 1281.14 985.867L1281.14 985.878L1281.13 985.888C1280.76 990.114 1282.07 994.201 1284.39 998.079C1286.43 1001.37 1289.25 1004.5 1292.4 1007.25C1298.61 1012.67 1306.21 1017.22 1315.31 1017.9C1323.82 1018.48 1331.82 1015.39 1338.94 1011.33L1338.94 1011.33C1344.88 1007.97 1350.2 1003.78 1353.17 998.509Z"></path>
                        <path className="st47" d="M1342.12 992.889L1342.12 992.888C1344.04 989.541 1344.32 985.714 1343.52 981.792C1343.16 980.039 1342.57 978.383 1341.91 976.729C1341.73 976.276 1341.54 975.819 1341.35 975.36C1340.87 974.168 1340.37 972.959 1339.97 971.754C1339.72 971.007 1339.49 970.275 1339.27 969.556C1338.67 967.588 1338.09 965.723 1337.08 963.959C1335.6 961.408 1333.2 959.103 1330.02 957.692L1330.02 957.692C1327.41 956.532 1324.45 956.006 1321.45 956.006H1321.44L1321.43 956.005C1318.01 955.939 1314.46 956.473 1311.55 957.943L1311.55 957.943L1311.54 957.947C1309.24 959.084 1307.42 960.868 1305.79 962.741C1303.79 965.166 1302.14 967.587 1300.42 970.089C1300.09 970.565 1299.77 971.043 1299.43 971.525L1299.43 971.529C1299.11 971.99 1298.79 972.446 1298.46 972.901C1297.31 974.537 1296.16 976.148 1295.21 977.833C1294 979.969 1293.14 982.138 1292.98 984.455L1292.98 984.465L1292.98 984.476C1292.73 987.266 1293.6 989.982 1295.18 992.588C1296.57 994.797 1298.49 996.903 1300.64 998.764C1304.9 1002.44 1310.09 1005.5 1316.28 1005.95C1322.07 1006.34 1327.53 1004.26 1332.42 1001.51L1332.42 1001.51C1336.5 999.228 1340.11 996.406 1342.12 992.889Z"></path>
                        <circle className="st45" r="13" transform="matrix(-1 0 0 1 1318.94 982)" />
                    </g>
                    {/* PIN */}
                    <g className="pin" style={{visibility: 'inherit', opacity: tooth34Diagnozis.pin ? 1 : 0}}>
                        <path className="st56 hIntact" d="M1353.17 998.51L1353.17 998.508C1356.02 993.473 1356.42 987.733 1355.26 981.898C1354.72 979.285 1353.85 976.825 1352.89 974.391C1352.63 973.718 1352.36 973.042 1352.08 972.365C1351.38 970.622 1350.67 968.869 1350.09 967.117C1349.73 966.05 1349.41 964.993 1349.1 963.948C1348.22 961.043 1347.37 958.234 1345.87 955.597C1343.67 951.772 1340.13 948.322 1335.43 946.213L1335.43 946.213C1331.58 944.481 1327.22 943.701 1322.84 943.701H1322.83L1322.82 943.7C1317.82 943.602 1312.6 944.39 1308.29 946.591L1308.29 946.591L1308.28 946.595C1304.87 948.303 1302.18 950.977 1299.8 953.742C1296.9 957.318 1294.48 960.89 1291.99 964.562C1291.52 965.259 1291.04 965.959 1290.56 966.664L1290.56 966.668C1290.1 967.337 1289.63 968.002 1289.17 968.666C1287.49 971.069 1285.82 973.457 1284.42 975.952C1282.65 979.118 1281.37 982.371 1281.14 985.868L1281.13 985.879L1281.13 985.889C1280.76 990.115 1282.07 994.202 1284.39 998.08C1286.43 1001.37 1289.25 1004.5 1292.4 1007.25C1298.61 1012.67 1306.21 1017.22 1315.31 1017.9C1323.82 1018.48 1331.82 1015.39 1338.94 1011.33L1338.94 1011.33C1344.88 1007.97 1350.2 1003.78 1353.17 998.51Z" style={{visibility: 'hidden'}}></path>
                        <path className="st56 hIntact" d="M1342.12 992.889L1342.12 992.888C1344.03 989.541 1344.32 985.714 1343.52 981.792C1343.16 980.039 1342.57 978.383 1341.91 976.729C1341.73 976.276 1341.54 975.819 1341.35 975.36C1340.87 974.168 1340.37 972.959 1339.97 971.754C1339.71 971.007 1339.49 970.275 1339.27 969.556C1338.67 967.588 1338.09 965.723 1337.08 963.959C1335.6 961.408 1333.2 959.103 1330.02 957.692L1330.02 957.692C1327.41 956.532 1324.45 956.006 1321.45 956.006H1321.44L1321.43 956.005C1318.01 955.939 1314.46 956.473 1311.55 957.943L1311.55 957.943L1311.54 957.947C1309.24 959.084 1307.42 960.868 1305.79 962.741C1303.79 965.166 1302.13 967.587 1300.42 970.089C1300.09 970.565 1299.77 971.043 1299.43 971.525L1299.43 971.529C1299.11 971.99 1298.79 972.446 1298.46 972.901C1297.3 974.537 1296.16 976.148 1295.21 977.833C1294 979.969 1293.14 982.138 1292.98 984.455L1292.98 984.465L1292.98 984.476C1292.73 987.266 1293.6 989.982 1295.18 992.588C1296.56 994.797 1298.49 996.903 1300.64 998.764C1304.9 1002.44 1310.09 1005.5 1316.28 1005.95C1322.07 1006.34 1327.52 1004.26 1332.42 1001.51L1332.42 1001.51C1336.5 999.228 1340.11 996.406 1342.12 992.889Z" style={{visibility: 'hidden'}}></path>
                        <circle className="st57" r="12.25" transform="matrix(-1 0 0 1 1318.94 982)" style={{fill: 'black', opacity: tooth34Diagnozis.pin ? 1 : 0}} />
                    </g>
                    <g className="stump" style={{visibility: !tooth34Diagnozis.culttab ? 'hidden' : 'inherit', opacity: !tooth34Diagnozis.culttab ? 0 : 1}}>
                        <path className="st47" d="M1353.17 998.509L1353.17 998.507C1356.02 993.472 1356.42 987.732 1355.26 981.897C1354.73 979.284 1353.85 976.824 1352.89 974.39C1352.63 973.717 1352.36 973.041 1352.08 972.364C1351.38 970.621 1350.67 968.868 1350.09 967.116C1349.73 966.049 1349.41 964.992 1349.1 963.947C1348.22 961.042 1347.37 958.233 1345.87 955.596C1343.67 951.771 1340.13 948.321 1335.43 946.212L1335.43 946.212C1331.58 944.48 1327.22 943.7 1322.84 943.7H1322.83L1322.82 943.699C1317.82 943.601 1312.6 944.389 1308.29 946.59L1308.29 946.59L1308.29 946.594C1304.87 948.302 1302.18 950.976 1299.81 953.741C1296.9 957.317 1294.48 960.889 1291.99 964.561C1291.52 965.258 1291.04 965.958 1290.56 966.663L1290.56 966.667C1290.1 967.336 1289.64 968.001 1289.17 968.665C1287.49 971.068 1285.82 973.456 1284.42 975.951C1282.65 979.117 1281.37 982.37 1281.14 985.867L1281.14 985.878L1281.13 985.888C1280.76 990.114 1282.07 994.201 1284.39 998.079C1286.43 1001.37 1289.25 1004.5 1292.4 1007.25C1298.61 1012.67 1306.21 1017.22 1315.31 1017.9C1323.82 1018.48 1331.82 1015.39 1338.94 1011.33L1338.94 1011.33C1344.88 1007.97 1350.2 1003.78 1353.17 998.509Z"></path>
                        <path className="st47" d="M1342.12 992.889L1342.12 992.888C1344.04 989.541 1344.32 985.714 1343.52 981.792C1343.16 980.039 1342.57 978.383 1341.91 976.729C1341.73 976.276 1341.54 975.819 1341.35 975.36C1340.87 974.168 1340.37 972.959 1339.97 971.754C1339.72 971.007 1339.49 970.275 1339.27 969.556C1338.67 967.588 1338.09 965.723 1337.08 963.959C1335.6 961.408 1333.2 959.103 1330.02 957.692L1330.02 957.692C1327.41 956.532 1324.45 956.006 1321.45 956.006H1321.44L1321.43 956.005C1318.01 955.939 1314.46 956.473 1311.55 957.943L1311.55 957.943L1311.54 957.947C1309.24 959.084 1307.42 960.868 1305.79 962.741C1303.79 965.166 1302.14 967.587 1300.42 970.089C1300.09 970.565 1299.77 971.043 1299.43 971.525L1299.43 971.529C1299.11 971.99 1298.79 972.446 1298.46 972.901C1297.31 974.537 1296.16 976.148 1295.21 977.833C1294 979.969 1293.14 982.138 1292.98 984.455L1292.98 984.465L1292.98 984.476C1292.73 987.266 1293.6 989.982 1295.18 992.588C1296.57 994.797 1298.49 996.903 1300.64 998.764C1304.9 1002.44 1310.09 1005.5 1316.28 1005.95C1322.07 1006.34 1327.53 1004.26 1332.42 1001.51L1332.42 1001.51C1336.5 999.228 1340.11 996.406 1342.12 992.889Z"></path>
                    </g>
                    <g style={{visibility: (!tooth34Diagnozis.culttab && !tooth34Diagnozis.abutment && !tooth34Diagnozis.implant && !tooth34Diagnozis.apex && !tooth34Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1363.9,979.2c-1.3-7.4-4.3-13.8-6.3-20.7c-0.5-1.6-0.9-3.2-1.3-4.8c-1-3.8-2-7.7-3.8-11.3
                            c-2.8-5.6-7.3-10.5-13.2-13.5c-4.9-2.5-10.4-3.4-15.8-3.5c-6.3,0-12.7,1.1-18.3,4.3c-4.4,2.5-7.9,6.4-10.8,10.3
                            c-3.2,4.3-5.8,8.6-8.4,13c-1,1.6-2,3.2-3,4.9c-5.2,8.4-11.1,17.1-11.8,27.2c-0.4,6.1,1.2,12.1,4.1,17.6c1.5,2.8,3.3,5.4,5.3,7.9
                            c1.4,1.8,3,3.4,4.6,5c7.6,7.6,17.1,14.1,28.5,14.9c10.7,0.8,20.8-3.6,29.5-9.3c3.1-2,6.2-4.3,8.9-6.8c3.7-3.4,6.8-7.2,9-11.5
                            C1364.7,995.7,1365.3,987.5,1363.9,979.2z"
                        />
                    </g>
                    {/*TARTAR*/}
                    <g style={{opacity: teethDiagnozis.tooth34.tartar ? 1 : 0, visibility: "inherit"}}>
                        <path className="st61 level2" d="M1292.23 932.908C1295.2 928.573 1299.9 925.787 1304.35 923C1307.18 921.19 1310.29 920.981 1313.5 920.249C1316.61 919.54 1319.8 919.563 1322.9 919.639C1325.58 919.639 1328.26 918.642 1330.86 919.249C1333.68 919.904 1336.42 922.217 1338.99 923.664C1341.7 925.187 1344.11 925.859 1346.2 928.11C1348.79 930.893 1352.9 934.129 1354.47 937.553C1355.8 940.478 1357.73 942.564 1358.55 945.688C1359.33 948.683 1359.12 952.712 1359.91 955.667C1360.88 959.117 1360.93 961.533 1362.03 965.04C1363.3 969.088 1363.49 974.256 1364.22 978.735C1364.87 982.791 1365.14 986.846 1364.93 990.812C1364.66 995.929 1364.71 1000.9 1362.62 1005.52C1360.81 1009.53 1357.23 1013.12 1354.36 1016.36C1351.12 1019.99 1348.49 1024.45 1344.56 1027.24C1341.79 1029.21 1337.78 1029.77 1334.78 1031.34C1331.6 1033.01 1328.29 1035.66 1324.89 1036.55C1321.2 1037.52 1317.4 1036.66 1313.5 1036.33C1310.3 1036.03 1307.25 1036.55 1304.35 1035.41C1300.46 1033.89 1295.71 1030.43 1292.35 1027.85C1289.1 1025.36 1287.21 1022.48 1284.43 1019.45C1282.56 1017.4 1279.64 1016.48 1278 1014.18C1276.18 1011.63 1274.54 1008.95 1273.17 1006.18C1271.6 1002.9 1271.49 998.203 1270.76 994.682C1270.11 991.561 1269.85 988.356 1270.08 985.083C1270.28 981.401 1271.04 977.91 1272.16 974.556L1272.24 972.308C1273.48 968.577 1275.13 965.589 1276.93 962.17C1278.56 959.072 1279.07 954.498 1280.72 951.487C1282.88 947.53 1284.95 945.174 1287.16 941.292C1288.75 938.49 1290.41 935.699 1292.23 932.908ZM1354.1 999C1357.1 993.7 1357.5 987.7 1356.3 981.7C1355.2 976.3 1352.8 971.6 1351.1 966.8C1349.8 962.9 1348.9 958.8 1346.8 955.1C1344.5 951.1 1340.8 947.5 1335.9 945.3C1331.9 943.5 1327.4 942.7 1322.9 942.7C1317.8 942.6 1312.4 943.4 1307.9 945.7C1304.3 947.5 1301.5 950.3 1299.1 953.1C1295.6 957.4 1292.8 961.7 1289.8 966.1C1285.6 972.2 1280.7 978.4 1280.2 985.8C1279.8 990.3 1281.2 994.6 1283.6 998.6C1285.7 1002 1288.6 1005.2 1291.8 1008C1298.1 1013.5 1305.9 1018.2 1315.3 1018.9C1324.1 1019.5 1332.3 1016.3 1339.5 1012.2C1345.5 1008.8 1351 1004.5 1354.1 999Z"></path>
                        <path className="st61 level1 hRoot" d="M1292.23 932.908C1295.2 928.573 1299.9 925.787 1304.35 923C1307.18 921.19 1310.29 920.981 1313.5 920.249C1316.61 919.54 1319.8 919.563 1322.9 919.639C1325.58 919.639 1328.26 918.642 1330.86 919.249C1333.68 919.904 1336.42 922.217 1338.99 923.664C1341.7 925.187 1344.11 925.859 1346.2 928.11C1348.79 930.893 1352.9 934.129 1354.47 937.553C1355.8 940.478 1357.73 942.564 1358.55 945.688C1359.33 948.683 1359.12 952.712 1359.91 955.667C1360.88 959.117 1360.93 961.533 1362.03 965.04C1363.3 969.088 1363.49 974.256 1364.22 978.735C1364.87 982.791 1365.14 986.846 1364.93 990.812C1364.66 995.929 1364.71 1000.9 1362.62 1005.52C1360.81 1009.53 1357.23 1013.12 1354.36 1016.36C1351.12 1019.99 1348.49 1024.45 1344.56 1027.24C1341.79 1029.21 1337.78 1029.77 1334.78 1031.34C1331.6 1033.01 1328.29 1035.66 1324.89 1036.55C1321.2 1037.52 1317.4 1036.66 1313.5 1036.33C1310.3 1036.03 1307.25 1036.55 1304.35 1035.41C1300.46 1033.89 1295.71 1030.43 1292.35 1027.85C1289.1 1025.36 1287.21 1022.48 1284.43 1019.45C1282.56 1017.4 1279.64 1016.48 1278 1014.18C1276.18 1011.63 1274.54 1008.95 1273.17 1006.18C1271.6 1002.9 1271.49 998.203 1270.76 994.682C1270.11 991.561 1269.85 988.356 1270.08 985.083C1270.28 981.401 1271.04 977.91 1272.16 974.556L1272.24 972.308C1273.48 968.577 1275.13 965.589 1276.93 962.17C1278.56 959.072 1279.07 954.498 1280.72 951.487C1282.88 947.53 1284.95 945.174 1287.16 941.292C1288.75 938.49 1290.41 935.699 1292.23 932.908ZM1354.1 999C1357.1 993.7 1357.5 987.7 1356.3 981.7C1355.2 976.3 1352.8 971.6 1351.1 966.8C1349.8 962.9 1348.9 958.8 1346.8 955.1C1344.5 951.1 1340.8 947.5 1335.9 945.3C1331.9 943.5 1327.4 942.7 1322.9 942.7C1317.8 942.6 1312.4 943.4 1307.9 945.7C1304.3 947.5 1301.5 950.3 1299.1 953.1C1295.6 957.4 1292.8 961.7 1289.8 966.1C1285.6 972.2 1280.7 978.4 1280.2 985.8C1279.8 990.3 1281.2 994.6 1283.6 998.6C1285.7 1002 1288.6 1005.2 1291.8 1008C1298.1 1013.5 1305.9 1018.2 1315.3 1018.9C1324.1 1019.5 1332.3 1016.3 1339.5 1012.2C1345.5 1008.8 1351 1004.5 1354.1 999Z" style={{visibility: 'inherit'}}></path>
                        <path className="st61 level1" d="M1277.93 978.79C1276.93 981.404 1276.25 984.123 1276.08 986.991C1275.87 989.541 1276.1 992.038 1276.68 994.469C1277.33 997.212 1277.43 1000.87 1278.84 1003.43C1280.06 1005.58 1281.53 1007.67 1283.16 1009.66C1284.63 1011.45 1287.23 1012.16 1288.91 1013.77C1291.4 1016.13 1293.09 1018.36 1295.99 1020.31C1299.01 1022.32 1303.25 1025.02 1306.73 1026.2C1309.33 1027.08 1312.06 1026.68 1314.92 1026.91C1318.41 1027.17 1321.81 1027.84 1325.11 1027.09C1328.15 1026.39 1331.11 1024.33 1333.96 1023.03C1336.64 1021.8 1340.23 1021.37 1342.71 1019.83C1346.22 1017.66 1348.58 1014.19 1351.48 1011.35C1354.05 1008.84 1357.25 1006.03 1358.87 1002.91C1360.74 999.31 1360.7 995.441 1360.94 991.454C1361.13 988.365 1360.88 985.206 1360.3 982.046C1359.65 978.557 1358.59 975.31 1357.45 972.157C1356.46 969.425 1356.42 966.763 1355.55 964.076C1354.84 961.774 1353.25 959.414 1352.55 957.081C1351.82 954.647 1350.98 952.243 1349.79 949.965C1348.38 947.297 1346.5 944.777 1344.18 942.608C1342.31 940.855 1340.15 940.331 1337.72 939.145C1335.43 938.018 1332.98 936.216 1330.46 935.705C1328.12 935.233 1325.73 936.01 1323.34 936.01C1320.56 935.95 1317.7 935.154 1314.92 935.705C1312.05 936.276 1309.26 937.218 1306.73 938.628C1302.75 940.799 1298.54 942.97 1295.89 946.347C1294.26 948.521 1292.78 950.694 1291.35 952.877C1289.38 955.902 1287.52 957.737 1285.59 960.819C1284.11 963.165 1283.66 966.729 1282.2 969.142C1280.59 971.806 1279.11 975.691 1278 978.597M1277.93 978.79L1278 978.597M1277.93 978.79C1277.95 978.727 1277.98 978.662 1278 978.597M1356.3 981.699C1357.5 987.699 1357.1 993.699 1354.1 998.999C1351 1004.5 1345.5 1008.8 1339.5 1012.2C1332.3 1016.3 1324.1 1019.5 1315.3 1018.9C1305.9 1018.2 1298.1 1013.5 1291.8 1008C1288.6 1005.2 1285.7 1002 1283.6 998.599C1281.2 994.599 1279.8 990.299 1280.2 985.799C1280.7 978.399 1285.6 972.199 1289.8 966.099C1292.8 961.699 1295.6 957.399 1299.1 953.099C1301.5 950.299 1304.3 947.499 1307.9 945.699C1312.4 943.399 1317.8 942.599 1322.9 942.699C1327.4 942.699 1331.9 943.499 1335.9 945.299C1340.8 947.499 1344.5 951.099 1346.8 955.099C1348.9 958.799 1349.8 962.899 1351.1 966.799C1352.8 971.599 1355.2 976.299 1356.3 981.699Z"></path>
                    </g>
                    {/*КАРИЕС*/}
                    <g className="header caries-filling hRoot hImplant hEmpty" style={{visibility: (!tooth34Diagnozis.culttab && !tooth34Diagnozis.abutment && !tooth34Diagnozis.implant && !tooth34Diagnozis.shaper && ! tooth34Diagnozis.apex) ? 'inherit' : 'hidden'}}>
                        {/*КАРИЕС C*/}
                        <g id="s_header_14_5" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                            className="caries-filling"
                        >
                            <path className="st7" d="M1337.1,988.7c-0.7,2-2.2,5.3-4.9,8.1c-3.6,3.8-9.5,6.6-18.7,4.1c-5.5-1.5-9.3-3.5-11.7-5.9
                                c-4.6-4.4-4.7-9.9-3.9-15.1c0.5-3.6,2.2-8.3,4-12.4c2.1-5,4.2-9,4.2-9c10.3-16.6,26.5-11.8,31.1-3.6c1,1.7,1.6,4.1,2,6.7
                                C1340.5,971.3,1338.4,984.9,1337.1,988.7z"
                            />
                            <path className={
                                    `st8 caries-center
                                    ${'caries-stroke'}
                                    ${teethDiagnozis.tooth34.caries_center ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth34.seal_center ? `seal-fill ${teethDiagnozis.tooth34.seal_center_color}` : ''}
                                `} 
                                d="M1337.1,988.7c-0.7,2-2.2,5.3-4.9,8.1c-3.6,3.8-9.5,6.6-18.7,4.1c-5.5-1.5-9.3-3.5-11.7-5.9
                                c-4.6-4.4-4.7-9.9-3.9-15.1c0.5-3.6,2.2-8.3,4-12.4c2.1-5,4.2-9,4.2-9c10.3-16.6,26.5-11.8,31.1-3.6c1,1.7,1.6,4.1,2,6.7
                                C1340.5,971.3,1338.4,984.9,1337.1,988.7z" 
                            />
                        </g>
                        {/*КАРИЕС RIGHT*/}
                        <g id="s_header_14_4" className="caries-filling" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st7" d="M1361,1003c-2.2,4.3-5.3,8.1-9,11.5c-3.6-7.7-14-14.4-19.9-17.7c2.7-2.8,4.2-6.1,4.9-8.1
                                c1.3-3.8,3.4-17.4,2-27.1c6.3-4.9,13.3-7,17.2-7.9c0.4,1.6,0.8,3.2,1.3,4.8c2,6.8,5,13.2,6.3,20.7
                                C1365.3,987.5,1364.7,995.7,1361,1003z"
                            />
                            <path className={
                                    `st8 caries-right
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth34.caries_right ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth34.seal_right ? `seal-fill ${teethDiagnozis.tooth34.seal_right_color}` : ''}
                                `} 
                                d="M1361,1003c-2.2,4.3-5.3,8.1-9,11.5c-3.6-7.7-14-14.4-19.9-17.7c2.7-2.8,4.2-6.1,4.9-8.1
                                c1.3-3.8,3.4-17.4,2-27.1c6.3-4.9,13.3-7,17.2-7.9c0.4,1.6,0.8,3.2,1.3,4.8c2,6.8,5,13.2,6.3,20.7
                                C1365.3,987.5,1364.7,995.7,1361,1003z"
                            />
                        </g>
                        {/*КАРИЕС TOP*/}
                        <g id="s_header_15_3 hoho-bottom" className="caries-filling" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'top');
                            }}
                        >
                            <path className="st7" d="M1356.3,953.8c-3.9,0.9-10.9,3-17.2,7.9c-0.4-2.6-1-4.9-2-6.7c-4.6-8.2-20.8-13-31.1,3.6c0,0-2.1,4-4.2,9
                                c-7.7-4.8-13-10.7-15.9-14.4c2.6-4.4,5.3-8.7,8.4-13c2.9-3.9,6.4-7.8,10.8-10.3c5.5-3.2,12-4.3,18.3-4.3c5.5,0,10.9,1,15.9,3.5
                                c5.9,3,10.5,7.9,13.2,13.5C1354.2,946.1,1355.3,949.9,1356.3,953.8z"
                            />
                            <path className={
                                    `st8 caries-top
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth34.caries_top ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth34.seal_top ? `seal-fill ${teethDiagnozis.tooth34.seal_top_color}` : ''}
                                `} 
                                d="M1356.3,953.8c-3.9,0.9-10.9,3-17.2,7.9c-0.4-2.6-1-4.9-2-6.7c-4.6-8.2-20.8-13-31.1,3.6c0,0-2.1,4-4.2,9
                                c-7.7-4.8-13-10.7-15.9-14.4c2.6-4.4,5.3-8.7,8.4-13c2.9-3.9,6.4-7.8,10.8-10.3c5.5-3.2,12-4.3,18.3-4.3c5.5,0,10.9,1,15.9,3.5
                                c5.9,3,10.5,7.9,13.2,13.5C1354.2,946.1,1355.3,949.9,1356.3,953.8z" 
                            />
                        </g>
                        {/*КАРИЕС LEFT*/}
                        <g id="s_header_14_2" className="caries-filling" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }} 
                        >
                            <path className="st7" d="M1301.7,995.1c-3.9,1.8-9.9,4.8-14.2,7.7c-3.1,2.1-5.4,5.1-7,7.9c-2-2.5-3.8-5.1-5.3-7.9
                                c-2.9-5.5-4.5-11.5-4.1-17.6c0.7-10.2,6.6-18.8,11.8-27.2c1-1.6,2-3.2,3-4.9c2.9,3.7,8.2,9.7,15.9,14.4c-1.7,4.1-3.5,8.8-4,12.4
                                C1297.1,985.2,1297.1,990.7,1301.7,995.1z"
                            />
                            <path className={`
                                    st8 target caries-left
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth34.caries_left ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth34.seal_left ? `seal-fill ${teethDiagnozis.tooth34.seal_left_color}` : ''}
                                `} 
                                d="M1301.7,995.1c-3.9,1.8-9.9,4.8-14.2,7.7c-3.1,2.1-5.4,5.1-7,7.9c-2-2.5-3.8-5.1-5.3-7.9
                                c-2.9-5.5-4.5-11.5-4.1-17.6c0.7-10.2,6.6-18.8,11.8-27.2c1-1.6,2-3.2,3-4.9c2.9,3.7,8.2,9.7,15.9,14.4c-1.7,4.1-3.5,8.8-4,12.4
                                C1297.1,985.2,1297.1,990.7,1301.7,995.1z"
                            />
                        </g>
                        {/*КАРИЕС BOTTOM*/}
                        <g id="s_header_14_1" className="caries-filling" 
                            onClick={() => {
                                setColordedPart(diagnozis, 'bottom');
                            }}
                        >
                            <path className="st7" d="M1352.1,1014.5c-2.7,2.5-5.8,4.8-8.9,6.8c-8.8,5.7-18.8,10.1-29.5,9.3c-11.4-0.9-20.9-7.3-28.5-14.9
                                c-1.6-1.6-3.1-3.3-4.6-5c1.6-2.8,3.9-5.8,7-7.9c4.3-2.9,10.3-5.9,14.2-7.7c2.4,2.4,6.2,4.4,11.7,5.9c9.2,2.5,15.1-0.4,18.7-4.1
                                C1338,1000.2,1348.4,1006.9,1352.1,1014.5z"
                            />
                            <path className={`
                                    st8 target caries-bottom
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth34.caries_bottom ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth34.seal_bottom ? `seal-fill ${teethDiagnozis.tooth34.seal_bottom_color}` : ''}
                                `}  
                                d="M1352.1,1014.5c-2.7,2.5-5.8,4.8-8.9,6.8c-8.8,5.7-18.8,10.1-29.5,9.3c-11.4-0.9-20.9-7.3-28.5-14.9
                                c-1.6-1.6-3.1-3.3-4.6-5c1.6-2.8,3.9-5.8,7-7.9c4.3-2.9,10.3-5.9,14.2-7.7c2.4,2.4,6.2,4.4,11.7,5.9c9.2,2.5,15.1-0.4,18.7-4.1
                                C1338,1000.2,1348.4,1006.9,1352.1,1014.5z"
                            />
                        </g>
                        <g className="with up">
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth34Diagnozis.seal_left && !tooth34Diagnozis.seal_bottom && !tooth34Diagnozis.seal_center) ||
                                        (tooth34Diagnozis.seal_left && !tooth34Diagnozis.seal_bottom ) || 
                                        (tooth34Diagnozis.seal_bottom && tooth34Diagnozis.seal_center && !tooth34Diagnozis.seal_left) || 
                                        (tooth34Diagnozis.seal_bottom && !tooth34Diagnozis.seal_center && !tooth34Diagnozis.seal_left) 
                                    ) ? 5 : 0
                                }}
                                d="M1333 997C1336 998.333 1343.6 1002.8 1350 1010"  />
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth34Diagnozis.seal_left && !tooth34Diagnozis.seal_center) ||
                                        (!tooth34Diagnozis.seal_left && tooth34Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1333 997C1337.17 995 1344.4 985.1 1340 961.5"  />
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth34Diagnozis.seal_left && !tooth34Diagnozis.seal_top) ||
                                        (!tooth34Diagnozis.seal_left && tooth34Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M1339.5 961.5C1341.67 959.833 1347.3 956.2 1352.5 955"  />
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth34Diagnozis.seal_center && !tooth34Diagnozis.seal_top) ||
                                        (!tooth34Diagnozis.seal_center && tooth34Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }} 
                                d="M1339.5 961.5C1335 949 1317 943 1303 967"  />
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth34Diagnozis.seal_right && !tooth34Diagnozis.seal_top) ||
                                        (!tooth34Diagnozis.seal_right && tooth34Diagnozis.seal_top)
                                    ) ? 5 : 0
                                }}  
                                d="M1303 967C1300.5 965.833 1294.4 962.2 1290 957"  />
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (!tooth34Diagnozis.seal_right && tooth34Diagnozis.seal_center) ||
                                        (tooth34Diagnozis.seal_right && !tooth34Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}  
                                d="M1303 967C1300 972.5 1295.8 985.8 1303 995"  />
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth34Diagnozis.seal_right && !tooth34Diagnozis.seal_bottom) ||
                                        (!tooth34Diagnozis.seal_right && tooth34Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }} 
                                d="M1303 995C1298.83 996.333 1289.3 1000.5 1284.5 1006.5"  />
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth34Diagnozis.seal_center && !tooth34Diagnozis.seal_bottom) ||
                                        (!tooth34Diagnozis.seal_center && tooth34Diagnozis.seal_bottom)
                                    ) ? 5 : 0
                                }} 
                                d="M1303 995C1307.33 999.333 1319.5 1005.8 1333.5 997"  />
                        </g>
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir" style={
                            {
                                visibility: tooth34Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth34Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className="st55" d="M1275.3 1002.7C1276.8 1005.5 1278.6 1008.1 1280.6 1010.6C1282 1012.4 1283.6 1014 1285.2 1015.6C1292.8 1023.2 1302.3 1029.7 1313.7 1030.5C1324.4 1031.3 1334.5 1026.9 1343.2 1021.2C1346.3 1019.2 1349.4 1016.9 1352.1 1014.4C1355.8 1011 1358.9 1007.2 1361.1 1002.9C1363.53 998.041 1364.59 992.727 1364.6 987.233C1361.52 987.489 1355.12 988.9 1354.18 992.5C1353.73 994.355 1353.09 996.156 1352.23 997.885C1350.49 1001.32 1348.03 1004.35 1345.1 1007.07C1342.97 1009.06 1340.51 1010.9 1338.06 1012.5C1331.17 1017.05 1323.17 1020.56 1314.7 1019.92C1305.67 1019.29 1298.15 1014.1 1292.13 1008.03C1290.87 1006.75 1289.6 1005.47 1288.49 1004.03C1286.91 1002.04 1285.48 999.961 1284.29 997.725C1283.54 996.282 1282.9 994.796 1282.38 993.278C1280.86 989.1 1274.28 988.352 1271.18 988.5C1271.44 993.421 1272.94 998.226 1275.3 1002.7Z"></path>
                        </g>
                    </g>
                    {/* ТИМЧАСОВА КОРОНКА/КЕРАМІЧНА КОРОНКА */}
                    <g className="crown" style={{
                        visibility: (tooth34Diagnozis.temporary_crown || tooth34Diagnozis.ceramic_crown || tooth34Diagnozis.mceramic_crown || tooth34Diagnozis.metalic_crown || tooth34Diagnozis.zirconia_crown) ? 'inherit' : 'hidden',
                        opacity: (tooth34Diagnozis.temporary_crown || tooth34Diagnozis.ceramic_crown || tooth34Diagnozis.mceramic_crown || tooth34Diagnozis.metalic_crown || tooth34Diagnozis.zirconia_crown)  ? 1 : 0
                    }}>
                        <path className={
                                `st46 target temporary-crown crown-fill ${diagnozis}
                                ${tooth34Diagnozis.ceramic_crown_color}
                                ${tooth34Diagnozis.mceramic_crown_color}
                                ${tooth34Diagnozis.metalic_crown_color}
                                ${tooth34Diagnozis.zirconia_crown_color}
                            `} 
                            d="M1363.9,979.2c-1.3-7.4-4.3-13.8-6.3-20.7c-0.5-1.6-0.9-3.2-1.3-4.8c-1-3.8-2-7.7-3.8-11.3
                            c-2.8-5.6-7.3-10.5-13.2-13.5c-4.9-2.5-10.4-3.4-15.8-3.5c-6.3,0-12.7,1.1-18.3,4.3c-4.4,2.5-7.9,6.4-10.8,10.3
                            c-3.2,4.3-5.8,8.6-8.4,13c-1,1.6-2,3.2-3,4.9c-5.2,8.4-11.1,17.1-11.8,27.2c-0.4,6.1,1.2,12.1,4.1,17.6c1.5,2.8,3.3,5.4,5.3,7.9
                            c1.4,1.8,3,3.4,4.6,5c7.6,7.6,17.1,14.1,28.5,14.9c10.7,0.8,20.8-3.6,29.5-9.3c3.1-2,6.2-4.3,8.9-6.8c3.7-3.4,6.8-7.2,9-11.5
                            C1364.7,995.7,1365.3,987.5,1363.9,979.2z"
                        />
                        <path className={`st3 fissure ${tooth34Diagnozis.fissure ? 'diagnoze' : tooth34Diagnozis.fissure ? 'hidden' : ''}`}   
                            d="M1337,983.7c-0.4-1.3-0.7-2.7-0.7-4.1l0-0.8c-0.1-3.1-0.2-6.3-2.8-7c-1.3-0.3-2.3,0.2-3.6,0.9
                            c-0.5,0.3-1,0.5-1.5,0.7c-2.1,0.9-4.5,0.7-6.7,0.6c-0.4,0-0.9,0-1.3-0.1c-0.4,0-0.8,0-1.2,0c-2.1,0-4.3-0.1-6.3-1
                            c-0.9-0.4-1.7-0.9-2.5-1.4c-1.7-1.1-3.3-2.2-5.1-1.6c-1.8,0.6-2.6,2.5-3.4,4.3l-0.1,0.2c-0.9,2.1-1.9,4.1-2.9,6l-1-0.5
                            c1-1.9,2-3.8,2.9-6l0.1-0.2c0.8-1.9,1.8-4.2,4.1-4.9c2.2-0.7,4.2,0.5,6,1.7c0.8,0.5,1.5,1,2.3,1.4c1.8,0.8,3.8,0.9,5.9,0.9
                            c0.4,0,0.8,0,1.2,0c0.4,0,0.9,0,1.3,0.1c2.2,0.1,4.4,0.2,6.3-0.5c0.5-0.2,1-0.4,1.4-0.7c1.3-0.7,2.7-1.4,4.3-0.9
                            c3.3,0.9,3.5,4.7,3.6,8l0,0.8c0.1,1.3,0.3,2.6,0.7,3.8L1337,983.7z"
                        />
                    </g>
                    <g className="fissures" style={{visibility: (!tooth34Diagnozis.culttab && !tooth34Diagnozis.abutment && !tooth34Diagnozis.implant && !tooth34Diagnozis.apex && !tooth34Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className={`st3 fissure ${tooth34Diagnozis.fissure ? 'diagnoze' : ''}`} 
                            d="M1337,983.7c-0.4-1.3-0.7-2.7-0.7-4.1l0-0.8c-0.1-3.1-0.2-6.3-2.8-7c-1.3-0.3-2.3,0.2-3.6,0.9
                            c-0.5,0.3-1,0.5-1.5,0.7c-2.1,0.9-4.5,0.7-6.7,0.6c-0.4,0-0.9,0-1.3-0.1c-0.4,0-0.8,0-1.2,0c-2.1,0-4.3-0.1-6.3-1
                            c-0.9-0.4-1.7-0.9-2.5-1.4c-1.7-1.1-3.3-2.2-5.1-1.6c-1.8,0.6-2.6,2.5-3.4,4.3l-0.1,0.2c-0.9,2.1-1.9,4.1-2.9,6l-1-0.5
                            c1-1.9,2-3.8,2.9-6l0.1-0.2c0.8-1.9,1.8-4.2,4.1-4.9c2.2-0.7,4.2,0.5,6,1.7c0.8,0.5,1.5,1,2.3,1.4c1.8,0.8,3.8,0.9,5.9,0.9
                            c0.4,0,0.8,0,1.2,0c0.4,0,0.9,0,1.3,0.1c2.2,0.1,4.4,0.2,6.3-0.5c0.5-0.2,1-0.4,1.4-0.7c1.3-0.7,2.7-1.4,4.3-0.9
                            c3.3,0.9,3.5,4.7,3.6,8l0,0.8c0.1,1.3,0.3,2.6,0.7,3.8L1337,983.7z" 
                        />
                    </g>
                </g>
                <g id="T_34" className="common-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin" >
                        <g id="dentin_v_34" style={{visibility: !tooth34Diagnozis.implant && !tooth34Diagnozis.apex && !tooth34Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_v_34" className="st9" 
                                d="M1358.3,1174c-1.5,6.7-2.8,13.4-3.9,20.1c-1.8,3.3-4,6.4-6.5,9.2
                                c-4.4,4.9-9.8,8.8-16.1,10.8c-1.2,0.4-2.4,0.7-3.7,0.9c-5.1,0.9-10.4,0.6-15.4-0.8c-2.4-0.6-4.7-1.5-6.9-2.6
                                c-9-4.3-16.3-11.5-21.7-20c-0.1-0.1-0.1-0.2-0.2-0.3c0.7,5.9,1.5,11.9,2.3,17.8c1.5,11,3.2,22,5,32.9c3.5,20.5,7.6,41,12.3,61.3
                                c1.9,8.2,3.9,16.4,7,24.3c2.6,6.5,5.8,12.8,9.7,18.8c3.2,5,7.6,9.6,12.5,12.4c2.3,1.3,4.8,2.2,7.3,2.3c-2.6-0.1-5.1-1-7.5-2.3
                                c-4.9-2.8-9.3-7.4-12.5-12.4c-3.9-6-7.1-12.3-9.7-18.8c-3.1-7.9-5.1-16.1-7-24.3c-4.7-20.3-8.8-40.8-12.3-61.3
                                c-1.9-10.9-3.5-22-5-32.9c-1.6-11.3-2.9-22.6-4.1-34c0.5-3.6,1-7.2,1.6-10.8c1.6-9.4,3.5-18.7,5.7-28l26.6,4.4l28.4-4.6
                                c2.3,7.8,5,15.5,7.9,23.1C1354,1164.2,1356.1,1169.1,1358.3,1174z" 
                            />
                        </g>
                        <g id="dentin_n_34" style={{visibility: !tooth34Diagnozis.implant && !tooth34Diagnozis.abutment && !tooth34Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_n_34" className={`st10 change-color ${tooth34Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M1350.2,1233.7c-1.5,22.9-1.9,45.9-1.5,68.8c0.1,6.9,0.3,13.9,1.2,20.8
                                c1.1,8.2,3.2,16.5,2.4,24.8c-0.5,5.3-2.7,10.7-7.9,12.6c0,0,0,0,0,0c-4,1.5-8,0.4-11.6-1.7c-4.9-2.8-9.3-7.4-12.5-12.4
                                c-3.9-6-7.1-12.3-9.7-18.8c-3.1-7.9-5.1-16.1-7-24.3c-4.7-20.3-8.8-40.8-12.3-61.3c-1.9-10.9-3.5-22-5.1-32.9
                                c-0.8-5.9-1.6-11.9-2.3-17.8c0.1,0.1,0.1,0.2,0.2,0.3c5.4,8.5,12.7,15.7,21.7,20c2.2,1.1,4.6,1.9,6.9,2.6
                                c5.1,1.4,10.3,1.7,15.4,0.8c1.2-0.2,2.5-0.5,3.7-0.9c6.2-1.9,11.7-5.8,16.1-10.8c2.6-3,4.8-6.2,6.8-9.7c-0.2,1.2-0.4,2.5-0.6,3.7
                                C1352.2,1209.4,1351,1221.5,1350.2,1233.7z" 
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g>
                        <path className={`st22 target top ${tooth34Diagnozis.channel_class} ${tooth34Diagnozis.channel_class} ${tooth34Diagnozis.pulpit ? 'pulpit' : ''} ${tooth34Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1328.7,1181.6c-0.5,11.2-0.8,22.3-0.8,33.5c-2.5,0.5-5.1,0.6-7.6,0.5
                c-0.2,0-0.3,0-0.4,0c-0.4,0-0.8-0.1-1.2-0.1c-2-0.2-4-0.6-6-1.1c-0.1,0-0.1,0-0.2-0.1c-1.9-10.3-3.8-20.6-5.8-30.9
                c-0.1-1.4-0.2-2.7-0.1-4.1c0.1-3.5,0.6-7,1.6-10.4c2.8,1.6,6,2.5,9.3,2.4c3.2-0.1,6.3-1.1,8.9-2.8c1.2,2,1.9,4.2,2.3,6.5
                C1329,1177.1,1329.1,1179.4,1328.7,1181.6z" 
                />
                        </g>
                        <g>
                            <path className={`st22 target top ${tooth34Diagnozis.channel_class} ${tooth34Diagnozis.channel_class} ${tooth34Diagnozis.pulpit ? 'pulpit' : ''} ${tooth34Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1331.8,1287.2c-1.8,0.2-3.6,0.3-5.3,0.2c-0.7,0-1.4-0.1-2-0.2
                                c-0.5-2.9-1-5.8-1.4-8.8c-0.1-0.5-0.1-1-0.2-1.5c-0.8-5.4-1.7-10.9-2.5-16.3c-0.2-1.4-0.4-2.7-0.6-4.1c-0.4-2.4-0.7-4.7-1.1-7.1
                                c-0.4-2.8-0.9-5.6-1.4-8.4c-0.5-3.2-1.1-6.4-1.6-9.5c-0.5-3-1-5.9-1.5-8.9c-0.5-2.8-1-5.6-1.5-8.4c0,0,0,0,0-0.1
                                c0.1,0,0.1,0,0.2,0.1c2,0.5,4,0.9,6,1.1c0.4,0,0.8,0.1,1.2,0.1c0.1,0,0.3,0,0.4,0c2.6,0.1,5.1,0,7.6-0.5h0v0
                                c0,18.2,0.7,36.3,2.2,54.5c0.2,2.9,0.5,5.8,0.8,8.7C1331.2,1281.3,1331.5,1284.3,1331.8,1287.2z"
                            />
                        </g>
                        <g>
                            <path className={`st22 target top ${tooth34Diagnozis.channel_class} ${tooth34Diagnozis.channel_class} ${tooth34Diagnozis.pulpit ? 'pulpit' : ''} ${tooth34Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M1344.1,1360.7c-1.9-4.8-3.6-9.6-5.3-14.5c-1.3-3.9-2.6-7.8-3.7-11.7
                                c-2.1-6.9-3.9-13.8-5.5-20.8c-0.6-2.4-1.1-4.8-1.6-7.2c-0.4-1.8-0.7-3.5-1-5.3c-0.3-1.8-0.7-3.5-1-5.3c-0.3-1.8-0.6-3.5-0.9-5.3v0
                                c-0.2-1.1-0.4-2.2-0.6-3.3c0.7,0.1,1.3,0.2,2,0.2c1.7,0.1,3.5,0,5.3-0.2c2.5,22.8,6.2,45.4,11,67.8
                                C1343.2,1356.9,1343.7,1358.8,1344.1,1360.7z" 
                            />
                        </g>
                        <PeriodontitStage34 />
                        {/* <g className="level hEmpty hImplant periodontitis"  dataposition="34"  style={{visibility: 'inherit', opacity:0}}>
                            <circle className="st42" cx="1345.6" cy="1360.7" r="8.2"></circle>
                        </g>
                        <g className="level hEmpty hImplant periodontitis"  dataposition="34"  style={{visibility: 'inherit', opacity:0}}>
                            <circle className="st42" cx="1347.6" cy="1368.9" r="17.5"></circle>
                        </g>
                        <g className="level hEmpty hImplant periodontitis"  dataposition="34"  style={{visibility: 'inherit', opacity:0}}>
                            <circle className="st42" cx="1349.2" cy="1379.2" r="30"></circle>
                        </g> */}
                    </g>
                    {/*PIN*/}
                    <g className="pin" style={{
                        visibility: 'inherit', opacity: tooth34Diagnozis.pin ? 1 : 0
                    }}>
                        <path className="st56 hIntact" d="M1358.3 1174C1356.8 1180.5 1355.5 1187.1 1354.4 1193.6C1352.5 1197.1 1350.3 1200.4 1347.7 1203.3C1343.3 1208.2 1337.8 1212.1 1331.6 1214.1C1330.9 1214.3 1330.2 1214.5 1329.6 1214.7C1329.1 1214.8 1328.5 1214.9 1328 1215C1322.9 1216 1317.6 1215.6 1312.6 1214.2C1312.3 1214.1 1311.9 1214 1311.6 1213.9C1309.6 1213.3 1307.6 1212.5 1305.7 1211.6C1296.7 1207.3 1289.4 1200.1 1284 1191.6C1283.9 1191.5 1283.9 1191.4 1283.8 1191.3C1283.1 1185.9 1282.6 1180.5 1282 1175.1C1282.5 1171.5 1283.1 1167.9 1283.7 1164.3C1285.3 1154.9 1287.2 1145.6 1289.4 1136.3L1316 1140.7L1344.4 1136.1C1346.7 1143.9 1349.4 1151.6 1352.3 1159.2C1354 1164.2 1356.1 1169.1 1358.3 1174Z" style={{visibility: 'hidden'}}></path>
                        <path className="st57" 
                            style={{fill: tooth34Diagnozis.pin ? '#dbd9d3' : 'none'}} 
                            d="M1303.9 1138.9L1326.7 1301C1327 1302.8 1328.6 1304.1 1330.4 1304.1C1332.6 1304.1 1334.3 1302.3 1334.2 1300.1L1333 1277.5V1277.2L1325.9 1139.2L1315.8 1140.8L1303.9 1138.9Z"></path>
                    </g>
                    {/* CULTTAB */}
                    <g className="stump" style={{visibility: !tooth34Diagnozis.culttab ? 'hidden' : 'inherit', opacity: !tooth34Diagnozis.culttab ? 0 : 1}}>
                        <path className="st14" d="M1330.5,1304L1330.5,1304c-1.8,0-3.4-1.3-3.7-3.1l-15.3-86.9c0.3,0.1,0.7,0.2,1,0.3
                            c5,1.4,10.3,1.7,15.4,0.8c0.6-0.1,1.1-0.2,1.6-0.3l4.7,85.3C1334.4,1302.2,1332.7,1304,1330.5,1304z"
                        />
                        <path className="st15" d="M1358.3,1174c-1.5,6.5-2.8,13.1-3.9,19.6c-1.9,3.5-4.1,6.8-6.7,9.7c-4.4,4.9-9.9,8.8-16.1,10.8
                            c-0.7,0.2-1.4,0.4-2,0.6c-0.5,0.1-1.1,0.2-1.6,0.3c-5.1,1-10.4,0.6-15.4-0.8c-0.3-0.1-0.7-0.2-1-0.3c-2-0.6-4-1.4-5.9-2.3
                            c-9-4.3-16.3-11.5-21.7-20c-0.1-0.1-0.1-0.2-0.2-0.3c-0.7-5.4-1.2-10.8-1.8-16.2c0.5-3.6,1.1-7.2,1.7-10.8
                            c1.6-9.4,3.5-18.7,5.7-28l26.6,4.4l28.4-4.6c2.3,7.8,5,15.5,7.9,23.1C1354,1164.2,1356.1,1169.1,1358.3,1174z"
                        />
                    </g>
                    {/* ABUTMENT */}
                    <g className="abutment hEmpty hIntact hRoot" style={{visibility: tooth34Diagnozis.abutment ? 'inherit' : 'hidden', opacity: tooth34Diagnozis.abutment ? 1 : 0}}>
                        <path className="st16" d="M1283.8,1191.7l24.3,38l28.5-5.1l17.9-31c-1.9,3.5-4.1,6.8-6.8,9.7c-4.4,5-9.8,8.9-16.1,10.8
                            c-8.7,2.7-17.9,1.4-26.1-2.5C1296.5,1207.4,1289.2,1200.2,1283.8,1191.7z"
                        />
                        <path className="st17" d="M1281.8,1175.2c0.6,5.4,1.2,10.8,1.8,16.2c0,0.1,0.1,0.2,0.2,0.3c5.5,8.5,12.8,15.7,21.7,20
                            c8.2,3.9,17.4,5.2,26.1,2.5c6.2-1.9,11.7-5.8,16.1-10.8c2.6-3,4.9-6.3,6.8-9.7c1.1-6.6,2.4-13.1,3.9-19.6
                            c-2.2-4.9-4.3-9.8-6.2-14.7c-3-7.6-5.6-15.3-7.9-23.1l-28.4,4.6l-26.6-4.4c-2.2,9.3-4.1,18.6-5.7,28
                            C1282.9,1168,1282.3,1171.6,1281.8,1175.2z"
                        />
                    </g>
                    {/* ФОРМУВАЧ */}
                    <g className="shaper hEmpty hIntact hRoot" style={{visibility: 'hidden', opacity: 0}} >
                        <path className="st44" d="M1341.27 1183.72C1341.32 1181.29 1339.21 1179.38 1336.8 1179.66L1299.81 1184.02C1297.4 1184.3 1295.8 1186.65 1296.41 1189L1306.41 1227.51C1306.92 1229.45 1308.78 1230.72 1310.77 1230.47L1336.95 1227.28C1338.93 1227.04 1340.42 1225.38 1340.46 1223.39L1341.27 1183.72Z"></path>
                    </g>
                    {/* IMPLANT/CULTTAB */}
                    <g className="implant" style={{visibility: tooth34Diagnozis.abutment || tooth34Diagnozis.implant || tooth34Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                        <path className="st18" d="M1340.7,1224.9c0,0,4.5,42.8,5.3,54.1s3.8,77.4,3.8,77.4s-4,8.2-16.2,7.7c-12.2-0.6-11.7-5.5-12.3-8.2
                            c-0.6-2.7-7.6-42.8-10.2-55c-2.6-12.2-13-70.9-13-70.9L1340.7,1224.9z"
                        />
                        <line className="st19" x1="1345.9" y1="1236.2" x2="1296.7" y2="1249" />
                        <line className="st19" x1="1348.9" y1="1261.2" x2="1299.7" y2="1274" />
                        <line className="st19" x1="1352.9" y1="1287.2" x2="1303.7" y2="1300" />
                        <line className="st19" x1="1356.9" y1="1312.2" x2="1307.7" y2="1325" />
                        <line className="st19" x1="1359.9" y1="1338.2" x2="1310.7" y2="1351" />
                    </g>
                    <g className="toutline" style={{visibility: !tooth34Diagnozis.culttab && !tooth34Diagnozis.abutment && !tooth34Diagnozis.implant && !tooth34Diagnozis.shaper && !tooth34Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1366.1,1146.2c-0.4-4.7-1.5-9.3-3.2-13.6c-2.6-4.5-6.1-8.3-10.2-11.2
                            c-4.2-3-9-4.9-13.4-7.6c-0.2-0.1-0.4-0.3-0.6-0.4c-3-1.8-5.8-4-8.2-6.6c-2.2-2.3-4.1-4.8-6.9-6.4c-4.4-2.5-9.7-2.1-14.2,0.2
                            c-4.2,2.2-7.3,5.6-10,9.5c-1.5,2.2-2.9,4.4-4.4,6.6c-1.4,2.1-3,4.1-4.9,5.8c-3.4,3-7.6,4.9-10.9,7.9c-3.6,3.2-6.1,7.5-7.1,12.3
                            c-0.4,6-0.2,12,0.7,18c1.6,11,5.2,21.6,11.1,30.8c1.1,1.8,2.3,3.5,3.6,5.1c4.9,6.3,11,11.5,18.1,14.9c8.2,3.9,17.4,5.2,26.1,2.5
                            c6.2-1.9,11.7-5.8,16.1-10.8c2.7-3.1,5-6.5,6.9-10.1c2.7-4.9,4.7-10.2,6.5-15.5C1364.5,1167.5,1367.1,1156.9,1366.1,1146.2z"
                        />
                    </g>
                    {/*КЛИНОВИДНИЙ ЕФЕКТ/ПРИШИЙКОВА ПЛОМБА/ПРИШИЙКОВИЙ КАРІЄС*/}
                    <g className="wedge-shaped" style={{visibility: !tooth34Diagnozis.culttab && !tooth34Diagnozis.abutment ? 'inherit' : 'hidden'}}>
                        <path className="st7 st59" d="M1362.9 1132.6C1364.6 1136.9 1365.7 1141.5 1366.1 1146.2C1367.1 1156.9 1364.5 1167.5 1361.2 1177.6C1359.4 1182.9 1357.4 1188.2 1354.7 1193.1C1352.8 1196.7 1350.5 1200.1 1347.8 1203.2C1343.4 1208.2 1337.9 1212.1 1331.7 1214C1323 1216.7 1313.8 1215.4 1305.6 1211.5C1298.5 1208.1 1292.4 1202.9 1287.5 1196.6C1286.2 1195 1285 1193.3 1283.9 1191.5C1278 1182.3 1274.4 1171.7 1272.8 1160.7C1271.9 1154.7 1271.7 1148.7 1272.1 1142.7C1273.1 1137.9 1275.6 1133.6 1279.2 1130.4C1280.88 1128.87 1282.8 1127.63 1284.73 1126.38C1286.58 1125.18 1288.44 1123.97 1290.1 1122.5C1292 1120.8 1293.6 1118.8 1295 1116.7C1295.75 1115.6 1296.48 1114.5 1297.2 1113.4C1297.93 1112.3 1298.65 1111.2 1299.4 1110.1C1302.1 1106.2 1305.2 1102.8 1309.4 1100.6C1313.9 1098.3 1319.2 1097.9 1323.6 1100.4C1325.79 1101.65 1327.43 1103.45 1329.09 1105.27C1329.55 1105.78 1330.02 1106.3 1330.5 1106.8C1332.9 1109.4 1335.7 1111.6 1338.7 1113.4C1338.8 1113.45 1338.9 1113.53 1339 1113.6C1339.1 1113.68 1339.2 1113.75 1339.3 1113.8C1341.13 1114.93 1343.04 1115.91 1344.94 1116.9C1347.6 1118.27 1350.25 1119.65 1352.7 1121.4C1356.8 1124.3 1360.3 1128.1 1362.9 1132.6ZM1297.62 1195.36C1296.74 1194.29 1295.93 1193.15 1295.18 1191.94C1294.52 1190.92 1293.91 1189.88 1293.34 1188.82C1292.66 1187.57 1293.57 1186.08 1294.99 1186.03L1344.05 1184.11C1345.47 1184.06 1346.49 1185.45 1345.97 1186.77C1345.14 1188.91 1344.2 1191.01 1343.09 1193.01C1341.8 1195.43 1340.24 1197.71 1338.42 1199.79C1335.44 1203.15 1331.72 1205.77 1327.52 1207.04C1321.64 1208.86 1315.41 1207.98 1309.86 1205.36C1305.06 1203.08 1300.93 1199.59 1297.62 1195.36Z"></path>
                        <path className={`st7 ${tooth34Diagnozis?.cervical_caries ? 'cervical-caries' : ''}`} d="M1295.18 1191.94C1295.93 1193.15 1296.74 1194.29 1297.62 1195.36C1300.93 1199.59 1305.06 1203.08 1309.86 1205.36C1315.41 1207.98 1321.64 1208.86 1327.52 1207.04C1331.72 1205.77 1335.44 1203.15 1338.42 1199.79C1340.24 1197.71 1341.8 1195.43 1343.09 1193.01C1344.2 1191.01 1345.14 1188.91 1345.97 1186.77C1346.49 1185.45 1345.47 1184.06 1344.05 1184.11L1294.99 1186.03C1293.57 1186.08 1292.66 1187.57 1293.34 1188.82C1293.91 1189.88 1294.52 1190.92 1295.18 1191.94Z" />
                        <path className={
                                `st60
                                    ${(tooth34Diagnozis?.wedge_shaped_defect) ? `shaped-defect-stroke` : ""}
                                    ${(tooth34Diagnozis?.seal_cervical) ? `seal-cervical-stroke` : ""}
                                    ${tooth34Diagnozis.seal_cervical_color}
                                `
                            } 
                            d="M1295.18 1191.94C1295.93 1193.15 1296.74 1194.29 1297.62 1195.36C1300.93 1199.59 1305.06 1203.08 1309.86 1205.36C1315.41 1207.98 1321.64 1208.86 1327.52 1207.04C1331.72 1205.77 1335.44 1203.15 1338.42 1199.79C1340.24 1197.71 1341.8 1195.43 1343.09 1193.01C1344.2 1191.01 1345.14 1188.91 1345.97 1186.77C1346.49 1185.45 1345.47 1184.06 1344.05 1184.11L1294.99 1186.03C1293.57 1186.08 1292.66 1187.57 1293.34 1188.82C1293.91 1189.88 1294.52 1190.92 1295.18 1191.94Z" />
                    </g>
                    {/* TARTAR */}
                    <g className="tartar" style={{visibility: 'inherit', opacity: teethDiagnozis.tooth34.tartar ? 1 : 0}}>
                        <path className="st61 level2" d="M1278 1180L1279.5 1180.5L1281 1181.5L1281.5 1182.5L1283 1183.5L1284.5 1185L1286.5 1188L1288 1189L1290 1190.5L1290.5 1192L1293 1194.5L1293.5 1196L1295.5 1199.5L1299.5 1203L1302.5 1204.5L1304.5 1207L1309.5 1210.5H1313.5H1317L1319.5 1212H1322L1325 1210.5H1327.5L1330.5 1209H1334.5L1336 1207L1340 1203L1344 1201.5L1347.5 1196L1351 1192V1189L1353.5 1185L1356 1182.5L1357.5 1180.5L1358.5 1178.5L1359.5 1177L1362 1176L1362.5 1177V1178.5L1362 1180.5V1182.5L1361.5 1184L1361 1185L1360.5 1186.5L1360 1189L1359.5 1192L1358.5 1193.5L1357.5 1196L1356 1199.5V1201.5L1355.5 1203.5L1355 1207V1208V1209.5L1354.5 1211.5L1353.5 1214V1217V1222L1352.5 1227.5L1351 1234.5L1347.5 1237H1342.5L1336 1241H1330.5L1325 1244.5H1319.5H1315.5H1309.5L1301.5 1242.5L1297 1239.5L1291.5 1238.5L1289 1236L1288 1232.5V1228.5L1286.5 1224V1221L1285.5 1219.5L1286 1218L1285.5 1214L1284.5 1213L1283 1209.5L1283.5 1206L1282 1203.5L1281 1201.5V1196V1193.5L1279.5 1189.5V1188L1278.5 1186.5L1277 1183.5V1181.5L1278 1180Z"></path>
                        <path className="st61 level1" d="M1278 1180L1279.5 1180.5L1281 1181.5L1281.5 1182.5L1283 1183.5L1284.5 1185L1286.5 1188L1288 1189L1290 1190.5L1290.5 1192L1293 1194.5L1293.5 1196L1295.5 1199.5L1299.5 1203L1302.5 1204.5L1304.5 1207L1309.5 1210.5H1313.5H1317L1319.5 1212H1322L1325 1210.5H1327.5L1330.5 1209H1334.5L1336 1207L1340 1203L1344 1201.5L1347.5 1196L1351 1192V1189L1353.5 1185L1356 1182.5L1357.5 1180.5L1358.5 1178.5L1359.5 1177L1362 1176V1178.5L1361 1180.5V1183.5L1359.5 1186.5V1190L1357.5 1193L1356 1198L1355.5 1201.5L1354.5 1204.5V1207.5L1352.5 1209L1349 1212L1346.5 1213.5L1344 1217H1341.5L1337 1220.5L1334.5 1222L1331.5 1223H1328L1322.5 1224L1316.5 1223.5H1312.5L1309.5 1222H1305.5L1301.5 1219.5L1298 1218L1293 1217L1290.5 1215.5H1288L1285.5 1213.5L1285 1212V1210.5L1284 1209V1205.5L1283 1203L1282.5 1200.5V1198L1281.5 1196L1281 1193L1280.5 1190L1279.5 1189V1186.5L1278.5 1184.5L1278 1182.5V1180Z"></path>
                    </g>
                    {/*КАРИЕС*/}
                    <g className="header caries-filling" style={{visibility: (!tooth34Diagnozis.culttab && !tooth34Diagnozis.abutment && !tooth34Diagnozis.implant && !tooth34Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        {/*КАРИЕС C*/}
                        <g className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'center');
                            }}
                        >
                            <path className="st58" d="M1341.3,1152.8c-4.4,4.7-13.3,12.5-24.3,12.6c-9.2,0.1-17.2-4.8-22.1-8.9c0.1-10.6,0-29.3,0-39.8
                                c1.5-2.2,2.9-4.4,4.4-6.6c2.7-3.9,5.8-7.3,10-9.5c4.5-2.3,9.8-2.7,14.2-0.2c2.7,1.6,4.7,4.1,6.9,6.4c2.5,2.5,5.2,4.7,8.2,6.6
                                c0.4,8.5,1,21,2,31.6C1340.8,1147.6,1341.1,1150.2,1341.3,1152.8z"
                            />
                            <path className={`
                                st8 target caries-center 
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth34.caries_center ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth34.seal_center ? `seal-fill ${teethDiagnozis.tooth34.seal_center_color}` : ''}
                            `} 
                                d="M1341.3,1152.8c-4.4,4.7-13.3,12.5-24.3,12.6c-9.2,0.1-17.2-4.8-22.1-8.9c0.1-10.6,0-29.3,0-39.8
                                c1.5-2.2,2.9-4.4,4.4-6.6c2.7-3.9,5.8-7.3,10-9.5c4.5-2.3,9.8-2.7,14.2-0.2c2.7,1.6,4.7,4.1,6.9,6.4c2.5,2.5,5.2,4.7,8.2,6.6
                                c0.4,8.5,1,21,2,31.6C1340.8,1147.6,1341.1,1150.2,1341.3,1152.8z"
                            />
                        </g>
                        {/*КАРИЕС L*/}
                        <g
                            className="caries-filling"
                            onClick={() => {
                                setColordedPart(diagnozis, 'right');
                            }}
                        >
                            <path className="st58" d="M1361.1,1177.8c-1.8,5.3-3.8,10.6-6.5,15.5c-3.1-2.2-7.6-5.7-8.2-7.7c-0.8-2.6-3.3-17.3-5-32.8
                                c-0.3-2.6-0.6-5.2-0.8-7.8c-1-10.6-1.6-23.1-2-31.6c0.2,0.1,0.4,0.3,0.7,0.4c4.4,2.6,9.2,4.6,13.4,7.6c4.2,2.9,7.6,6.8,10.2,11.2
                                c1.7,4.3,2.8,8.9,3.2,13.6C1367.1,1156.9,1364.5,1167.5,1361.1,1177.8z"
                            />
                            <path className={
                                `st8 caries-right
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth34.caries_right ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth34.seal_right ? `seal-fill ${teethDiagnozis.tooth34.seal_right_color}` : ''}
                            `} 
                                d="M1361.1,1177.8c-1.8,5.3-3.8,10.6-6.5,15.5c-3.1-2.2-7.6-5.7-8.2-7.7c-0.8-2.6-3.3-17.3-5-32.8
                                c-0.3-2.6-0.6-5.2-0.8-7.8c-1-10.6-1.6-23.1-2-31.6c0.2,0.1,0.4,0.3,0.7,0.4c4.4,2.6,9.2,4.6,13.4,7.6c4.2,2.9,7.6,6.8,10.2,11.2
                                c1.7,4.3,2.8,8.9,3.2,13.6C1367.1,1156.9,1364.5,1167.5,1361.1,1177.8z"  
                            />
                        </g>
                        {/* КАРИЕС R */}
                        <g className="caries-filling hoho1"
                            onClick={() => {
                                setColordedPart(diagnozis, 'left');
                            }}
                        >
                            <path className="st58" d="M1295,1156.6c0,1.9,0,3.5-0.1,4.8c-0.4,11.8,0.3,24.5-1.2,27.5c-0.9,1.7-3.8,5.2-6.2,7.8
                                c-1.3-1.6-2.5-3.3-3.6-5.1c-5.9-9.3-9.6-19.9-11.1-30.8c-0.8-6-1.1-12-0.7-18c1-4.8,3.5-9.1,7.1-12.3c3.4-3,7.6-4.9,11-7.9
                                c1.9-1.7,3.4-3.7,4.9-5.8C1295,1127.3,1295.1,1146,1295,1156.6z"
                            />
                            <path className={
                                    `st8 caries-left
                                ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                ${teethDiagnozis.tooth34.caries_left ? 'caries-fill' : ''}
                                ${teethDiagnozis.tooth34.seal_left ? `seal-fill ${teethDiagnozis.tooth34.seal_left_color}` : ''}
                            `} 
                                d="M1295,1156.6c0,1.9,0,3.5-0.1,4.8c-0.4,11.8,0.3,24.5-1.2,27.5c-0.9,1.7-3.8,5.2-6.2,7.8
                                c-1.3-1.6-2.5-3.3-3.6-5.1c-5.9-9.3-9.6-19.9-11.1-30.8c-0.8-6-1.1-12-0.7-18c1-4.8,3.5-9.1,7.1-12.3c3.4-3,7.6-4.9,11-7.9
                                c1.9-1.7,3.4-3.7,4.9-5.8C1295,1127.3,1295.1,1146,1295,1156.6z"
                            />
                        </g>
                        {/*КАРИЕС B*/}
                        <g className="caries-filling bottom"
                            onClick={() => {
                                setColordedPart(diagnozis, 'bottom');
                            }}
                        >
                            <path className="st58" d="M1354.6,1193.3c-1.9,3.6-4.2,7-6.9,10.1c-4.4,5-9.9,8.8-16.1,10.8c-8.7,2.7-17.9,1.4-26.1-2.5
                                c-7.1-3.4-13.2-8.7-18.1-14.9c2.4-2.7,5.3-6.1,6.2-7.8c1.6-3,0.9-15.8,1.2-27.5c0-1.3,0.1-2.9,0.1-4.8c5,4.1,12.9,9,22.1,8.9
                                c11-0.1,19.9-8,24.3-12.6c1.7,15.5,4.2,30.3,5,32.8C1347,1187.6,1351.5,1191.1,1354.6,1193.3z"
                            />
                            <path className={`
                                    st8 target caries-bottom
                                    ${['caries', 'seal'].includes(diagnozis) ? 'caries-stroke' : ''}
                                    ${teethDiagnozis.tooth34.caries_bottom ? 'caries-fill' : ''}
                                    ${teethDiagnozis.tooth34.seal_bottom ? `seal-fill ${teethDiagnozis.tooth34.seal_bottom_color}` : ''}
                                `}  
                                d="M1354.6,1193.3c-1.9,3.6-4.2,7-6.9,10.1c-4.4,5-9.9,8.8-16.1,10.8c-8.7,2.7-17.9,1.4-26.1-2.5
                                c-7.1-3.4-13.2-8.7-18.1-14.9c2.4-2.7,5.3-6.1,6.2-7.8c1.6-3,0.9-15.8,1.2-27.5c0-1.3,0.1-2.9,0.1-4.8c5,4.1,12.9,9,22.1,8.9
                                c11-0.1,19.9-8,24.3-12.6c1.7,15.5,4.2,30.3,5,32.8C1347,1187.6,1351.5,1191.1,1354.6,1193.3z"
                            />
                        </g>
                        <g className="with down">
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth34Diagnozis.seal_right && !tooth34Diagnozis.seal_top && !tooth34Diagnozis.seal_center) ||
                                        (tooth34Diagnozis.seal_right && tooth34Diagnozis.seal_top && !tooth34Diagnozis.seal_center) ||
                                        (!tooth34Diagnozis.seal_right && tooth34Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1341.5 1152.5L1339.5 1120"  />
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth34Diagnozis.seal_right && !tooth34Diagnozis.seal_bottom) ||
                                        (!tooth34Diagnozis.seal_right && tooth34Diagnozis.seal_bottom && !tooth34Diagnozis.seal_center) ||
                                        (!tooth34Diagnozis.seal_right && tooth34Diagnozis.seal_bottom && tooth34Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }}
                                d="M1341.5 1152.5C1344 1181 1341.3 1184 1350.5 1190"  />
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth34Diagnozis.seal_bottom && !tooth34Diagnozis.seal_center) ||
                                        (!tooth34Diagnozis.seal_bottom && tooth34Diagnozis.seal_center) ||
                                        (!tooth34Diagnozis.seal_top && !tooth34Diagnozis.seal_bottom && tooth34Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1341.5 1152.5C1334.5 1160.67 1315.5 1172.9 1295.5 1156.5"  />
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth34Diagnozis.seal_left && !tooth34Diagnozis.seal_bottom) ||
                                        (!tooth34Diagnozis.seal_left && tooth34Diagnozis.seal_bottom && !tooth34Diagnozis.seal_center) ||
                                        (!tooth34Diagnozis.seal_left && tooth34Diagnozis.seal_bottom && tooth34Diagnozis.seal_center)
                                    )
                                        ? 5 : 0
                                }}  
                                d="M1295.5 1156.5C1295.5 1185 1297 1186.5 1291 1192.5"  />
                            <path className="st54" style={{
                                    stroke: 'rgb(81, 79, 72)',
                                    strokeWidth: (
                                        (tooth34Diagnozis.seal_left && !tooth34Diagnozis.seal_bottom && !tooth34Diagnozis.seal_center) ||
                                        (tooth34Diagnozis.seal_left && tooth34Diagnozis.seal_bottom && !tooth34Diagnozis.seal_center) ||
                                        (!tooth34Diagnozis.seal_left && tooth34Diagnozis.seal_center)
                                    ) ? 5 : 0
                                }} 
                                d="M1295.5 1156.5V1125.5"  />
                        </g>
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir" 
                            style={{
                                visibility: tooth34Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth34Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className="st55" d="M1366.1 1146.2C1365.7 1141.5 1364.6 1136.9 1362.9 1132.6C1360.3 1128.1 1356.8 1124.3 1352.7 1121.4C1348.5 1118.4 1343.7 1116.5 1339.3 1113.8C1339.1 1113.7 1338.9 1113.5 1338.7 1113.4C1335.7 1111.6 1332.9 1109.4 1330.5 1106.8C1328.3 1104.5 1326.4 1102 1323.6 1100.4C1319.2 1097.9 1313.9 1098.3 1309.4 1100.6C1305.2 1102.8 1302.1 1106.2 1299.4 1110.1C1297.9 1112.3 1296.5 1114.5 1295 1116.7C1293.6 1118.8 1292 1120.8 1290.1 1122.5C1286.7 1125.5 1282.5 1127.4 1279.2 1130.4C1275.6 1133.6 1273.1 1137.9 1272.1 1142.7C1271.7 1148.7 1271.9 1154.7 1272.8 1160.7C1274.4 1171.7 1278 1182.3 1283.9 1191.5C1285 1193.3 1286.2 1195 1287.5 1196.6C1292.4 1202.9 1298.5 1208.1 1305.6 1211.5C1313.8 1215.4 1323 1216.7 1331.7 1214C1337.9 1212.1 1343.4 1208.2 1347.8 1203.2C1350.5 1200.1 1352.8 1196.7 1354.7 1193.1C1357.4 1188.2 1359.4 1182.9 1361.2 1177.6C1364.5 1167.5 1367.1 1156.9 1366.1 1146.2Z"></path>
                        </g>
                    </g>
                    {/* ТИМЧАСОВА КОРОНКА/КЕРАМІЧНА КОРОНКА */}
                    <g className="crown" style={{
                        visibility: (tooth34Diagnozis.temporary_crown || tooth34Diagnozis.ceramic_crown || tooth34Diagnozis.mceramic_crown || tooth34Diagnozis.metalic_crown || tooth34Diagnozis.zirconia_crown) ? 'inherit' : 'hidden',
                        opacity: (tooth34Diagnozis.temporary_crown || tooth34Diagnozis.ceramic_crown || tooth34Diagnozis.mceramic_crown || tooth34Diagnozis.metalic_crown || tooth34Diagnozis.zirconia_crown)  ? 1 : 0
                    }}>                        
                        <path className={
                                `st46 target temporary-crown crown-fill ${diagnozis}
                                ${tooth34Diagnozis.ceramic_crown_color}
                                ${tooth34Diagnozis.mceramic_crown_color}
                                ${tooth34Diagnozis.metalic_crown_color}
                                ${tooth34Diagnozis.zirconia_crown_color}
                            `}
                            d="M1366.1,1146.2c-0.4-4.7-1.5-9.3-3.2-13.6c-2.6-4.5-6.1-8.3-10.2-11.2
                            c-4.2-3-9-4.9-13.4-7.6c-0.2-0.1-0.4-0.3-0.6-0.4c-3-1.8-5.8-4-8.2-6.6c-2.2-2.3-4.1-4.8-6.9-6.4c-4.4-2.5-9.7-2.1-14.2,0.2
                            c-4.2,2.2-7.3,5.6-10,9.5c-1.5,2.2-2.9,4.4-4.4,6.6c-1.4,2.1-3,4.1-4.9,5.8c-3.4,3-7.6,4.9-10.9,7.9c-3.6,3.2-6.1,7.5-7.1,12.3
                            c-0.4,6-0.2,12,0.7,18c1.6,11,5.2,21.6,11.1,30.8c1.1,1.8,2.3,3.5,3.6,5.1c4.9,6.3,11,11.5,18.1,14.9c8.2,3.9,17.4,5.2,26.1,2.5
                            c6.2-1.9,11.7-5.8,16.1-10.8c2.7-3.1,5-6.5,6.9-10.1c2.7-4.9,4.7-10.2,6.5-15.5C1364.5,1167.5,1367.1,1156.9,1366.1,1146.2z"
                        />
                    </g>
                </g>
            </g>
        </>
    )
}
