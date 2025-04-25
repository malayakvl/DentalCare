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
    
    return (
        <>
            <g className={`f-tooth-active`}
            >
                <g className="underlay" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <path className="st40" d="M1287,1255.9c0,0,8,42,15,67s14,47,33,47s25-15,25-28s-4-22-5-46s1-71,2-84
                        s13-41,9-68s-21-54-22-79s23-45,21-77s-5.8-165.8-10-185c-5-23-35-31-52-21s-22,31-25,86s-7,102-7,120s2,35,15,71
                        c13,36-18,62-14,100S1282,1228.9,1287,1255.9z"
                    />
                </g>
                <g id="T_34" className="common-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin" >
                        <g id="dentin_v_34" style={{visibility: !tooth34Diagnozis.implant && !tooth34Diagnozis.apex && !tooth34Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_v_34" className={`st9 change-color-psr-up ${tooth34Diagnozis.change_color ? 'diagnoze' : ''}`}  
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
                            <path id="dentin_n_34" className={`st10 change-color-psr ${tooth34Diagnozis.change_color ? 'diagnoze' : ''}`} 
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
                    </g>
                    <g className="toutline" style={{visibility: !tooth34Diagnozis.culttab && !tooth34Diagnozis.abutment && !tooth34Diagnozis.implant && !tooth34Diagnozis.shaper && !tooth34Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1366.1,1146.2c-0.4-4.7-1.5-9.3-3.2-13.6c-2.6-4.5-6.1-8.3-10.2-11.2
                            c-4.2-3-9-4.9-13.4-7.6c-0.2-0.1-0.4-0.3-0.6-0.4c-3-1.8-5.8-4-8.2-6.6c-2.2-2.3-4.1-4.8-6.9-6.4c-4.4-2.5-9.7-2.1-14.2,0.2
                            c-4.2,2.2-7.3,5.6-10,9.5c-1.5,2.2-2.9,4.4-4.4,6.6c-1.4,2.1-3,4.1-4.9,5.8c-3.4,3-7.6,4.9-10.9,7.9c-3.6,3.2-6.1,7.5-7.1,12.3
                            c-0.4,6-0.2,12,0.7,18c1.6,11,5.2,21.6,11.1,30.8c1.1,1.8,2.3,3.5,3.6,5.1c4.9,6.3,11,11.5,18.1,14.9c8.2,3.9,17.4,5.2,26.1,2.5
                            c6.2-1.9,11.7-5.8,16.1-10.8c2.7-3.1,5-6.5,6.9-10.1c2.7-4.9,4.7-10.2,6.5-15.5C1364.5,1167.5,1367.1,1156.9,1366.1,1146.2z"
                        />
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
                </g>
            </g>
        </>
    )
}
