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


export default function Tooth36() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth36Diagnozis = teethDiagnozis.tooth36;
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
            <g className={`f-tooth-active`}>
                <g className="underlay" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <path className="st40" d="M1503.8,1314c-6-12.2-9.4-25.9-11.8-39.1c-4-22-8-52-16-76s-15-33-16-56
                        s15-55,15-72s-18.4-49.1-15-83c6-59-27-207,54-220s87,54,89,74s12.2,120.3,15.1,140.7s-10.1,41.3-11.1,65.3
                        c-1,24,5.6,72.3,13.3,91.6c7.7,19.4,6.7,54.4,12.7,72.4s23,67,26,88s-4,42-51,49c-26.3,3.9-61,7.9-83.8-9.3
                        C1515.2,1332.9,1508.7,1323.9,1503.8,1314z"
                    />
                </g>
                <g id="T_36" className="common-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin">
                        <g id="dentin_v_46" style={{visibility: !tooth36Diagnozis.implant && !tooth36Diagnozis.apex && !tooth36Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_v_36" className={`change-color-psr-up ${tooth36Diagnozis.change_color ? 'diagnoze' : ''}`}   
                                d="M1623,1172.8c0,0.2-0.1,0.4-0.1,0.6c-3.4,4.4-7.3,8.3-11.7,11.6
                                c-8.6,6.6-18.8,10.8-29.2,13.7c-0.7,0.2-1.4,0.4-2.1,0.6c-10.6,2.7-21.5,4-32.4,4.6c-9.6,0.5-19.3,0.6-28.9-0.9
                                c-1.9-0.3-3.9-0.7-5.8-1.1c-13-2.9-25.2-9-35.4-17.7c-1.2-5.7-1.4-6-1.6-12c-0.3-8,0.2-16.1,1.9-24c1.2-5.7,3-11.2,5.4-16.5
                                l36.3,12.4l37.4-18.7l24.4,9.8l21-6.3L1623,1172.8z"
                            />
                        </g>
                        <g id="dentin_n_36" style={{visibility: !tooth36Diagnozis.culttab && !tooth36Diagnozis.abutment && !tooth36Diagnozis.implant && !tooth36Diagnozis.shaper && !tooth36Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                            <path id="dentin_n_46" className={`change-color-psr ${tooth36Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M1653,1311.7c-0.3,3.7-1.2,7.5-3.4,10.4c-1.8,2.5-4.5,4.2-7.8,4
                                c-0.2,0-0.5,0-0.7-0.1c-0.2,0-0.4-0.1-0.6-0.1c-3.6-0.7-5.7-3.4-7.9-6.4c-3.4-4.7-7.7-9.8-11-15.1c-5.9-9.5-10.8-19.4-16.8-28.8
                                c-4.5-7.2-9.6-14.1-15.1-20.7c-3.5-4.2-7.1-8.4-12-11.2c-4.3-2.5-9.3-3.8-14.3-3c-11.7,1.6-18.6,12.1-20.9,23.2
                                c-1.7,8-1.3,16.2,0,24.2c1.1,6.2,2.7,12.4,5.4,18.2c2.6,5.6,6,10.8,8.2,16.6c1.4,3.7,2.3,7.7,1.7,11.6c-0.3,2.1-1.1,4.3-2.9,5.6
                                c-2.3,1.7-5.2,1.7-8.1,1.2c-0.2,0-0.3-0.1-0.5-0.1c-0.2,0-0.5-0.1-0.8-0.1c-3.9-0.8-8.4-1.7-12.4-3.6c-13.4-6.5-21.1-19-26.7-32
                                c-8.1-18.8-12.1-38.7-14.7-58.7c-1.2-9.3-2-18.6-4-27.8c-2.1-9.9-6-25.3-10.6-34.4c0-0.1,0-0.2-0.1-0.3
                                c10.2,8.7,22.4,14.7,35.4,17.7c1.9,0.4,3.9,0.8,5.8,1.1c9.6,1.5,19.2,1.5,28.9,0.9c10.8-0.6,21.8-1.9,32.4-4.6
                                c0.7-0.2,1.4-0.4,2.1-0.6c10.4-2.8,20.5-7.1,29.2-13.7c4.4-3.3,8.3-7.2,11.7-11.6c-0.5,3.8-1.4,11-1.6,15.1
                                c-1,17.6,8.8,33.6,15.2,50.2c2.3,5.8,4.1,11.8,6.1,17.7C1648.4,1274.4,1654.7,1292.8,1653,1311.7z"
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g className="pulpitis-pfilling"  style={{visibility: 'inherit'}}>
                            <path className={`st22 target top ${tooth36Diagnozis.channel_class} ${tooth36Diagnozis.channel_class} ${tooth36Diagnozis.pulpit ? 'pulpit' : ''} ${tooth36Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1579.9,1199.2C1579.9,1199.2,1579.9,1199.2,1579.9,1199.2c-1.3,0.3-2.7,0.6-4,0.9
                                c-0.2,0.1-0.4,0.1-0.7,0.2c-0.6,0.1-1.1,0.2-1.7,0.3c0,0-0.1,0-0.1,0c-0.9,0.2-1.8,0.3-2.7,0.5c-0.3,0.1-0.6,0.1-0.9,0.2
                                c-0.9,0.2-1.8,0.3-2.7,0.4c-1.3,0.2-2.6,0.4-3.9,0.6c-0.9,0.1-1.8,0.2-2.7,0.3c-1,0.1-1.9,0.2-2.9,0.3c-0.2,0-0.4,0-0.7,0.1
                                c-0.8,0.1-1.6,0.1-2.4,0.2c-1.3,0.1-2.6,0.2-3.9,0.3c-1.1,0.1-2.1,0.1-3.2,0.2c-4.7,0.3-9.3,0.4-14,0.3c-0.7,0-1.3,0-2,0
                                c-0.5,0-1,0-1.5-0.1c-0.3,0-0.6,0-0.9,0c-0.5,0-1.1-0.1-1.6-0.1c-0.5,0-1-0.1-1.5-0.1c-0.5,0-1-0.1-1.5-0.1c-1-0.1-2-0.2-3-0.3
                                c-0.4-0.1-0.8-0.1-1.2-0.2c-0.6-0.1-1.2-0.2-1.8-0.3c0-0.2-0.1-0.4-0.1-0.6c-1.2-5.4-3.3-10.6-4.1-16.2c-0.6-4.3-0.4-8.8,0.6-13.3
                                c7,5.7,17.4,8.2,28.4,7c12.4-1.4,23.8-7.4,30.3-15.9c1.9,3.6,3.2,7.4,4.1,11.4C1579.5,1183.1,1579.1,1191.3,1579.9,1199.2z"
                            />
                        </g>
                        <g className="pulpitis-pfilling"  style={{visibility: 'inherit'}}>
                            <path className={`st22 target middle ${tooth36Diagnozis.channel_class} ${tooth36Diagnozis.channel_class} ${tooth36Diagnozis.pulpit ? 'pulpit' : ''} ${tooth36Diagnozis.periodontit ? 'periodontit' : ''}`}
                                d="M1618.6,1259.9c-1.7,0.5-3.6,1.1-5.7,1.7c-0.9-1.3-1.8-2.7-2.8-4
                                c-5.7-7.9-12.2-15.5-20-22.1c-8.3-7.1-18.9-12.9-32.1-11.4c-18.3,2.1-30.1,16-35.2,30.2c-1,2.7-1.8,5.5-2.4,8.2
                                c-0.5,2.3-0.9,4.7-1.2,7c-1.9-0.4-3.7-0.8-5.4-1.2c0-1.8,0.2-3.7,0.3-5.5c0.6-6.7,1.8-13.4,2.9-20.1c2.3-13.4,4.3-26.8,1.5-39.7
                                c0.6,0.1,1.2,0.2,1.8,0.3c0.4,0.1,0.8,0.1,1.2,0.2c1,0.1,2,0.2,3,0.3c0.5,0.1,1,0.1,1.5,0.1c0.5,0,1,0.1,1.5,0.1
                                c0.5,0,1.1,0.1,1.6,0.1c0.3,0,0.6,0,0.9,0c0.5,0,1,0,1.5,0.1c0.6,0,1.3,0,1.9,0.1c4.7,0.1,9.3,0,14-0.3c1.1-0.1,2.1-0.1,3.2-0.2
                                c1.3-0.1,2.6-0.2,3.9-0.3c0.8-0.1,1.6-0.1,2.4-0.2c0.2,0,0.4-0.1,0.7-0.1c1-0.1,1.9-0.2,2.9-0.3c0.9-0.1,1.8-0.2,2.7-0.3
                                c1.3-0.2,2.6-0.4,3.9-0.6c0.9-0.1,1.8-0.3,2.7-0.4c0.3-0.1,0.6-0.1,0.9-0.2c0.9-0.2,1.8-0.3,2.7-0.5c0,0,0.1,0,0.1,0
                                c0.6-0.1,1.1-0.2,1.7-0.4c0.2,0,0.5-0.1,0.7-0.1c1.3-0.3,2.7-0.6,4-0.9c0,0,0,0,0,0c0.5,4.7,1.4,9.2,3.4,13.5
                                c4.4,9.5,13.4,16.4,20.6,24.6c5.3,6.1,9.5,12.9,13.3,19.8C1617.7,1258.1,1618.1,1259,1618.6,1259.9z"
                        />
                        </g>
                        <g className="pulpitis-pfilling"  style={{visibility: 'inherit'}}>
                            <path className={`st22 target middle ${tooth36Diagnozis.channel_class} ${tooth36Diagnozis.channel_class} ${tooth36Diagnozis.pulpit ? 'pulpit' : ''} ${tooth36Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1547,1341.2c-7.7-10.4-14.2-21.2-19.5-32.6c-4.6-9.8-8.2-20-8.6-30.7c-0.1-2.8,0-5.7,0.3-8.5
                                c-1.9-0.4-3.7-0.8-5.4-1.2c-0.1,2.7,0,5.4,0.2,8.1c1.1,13,6.3,25.1,12.8,36.5c5.6,9.8,12.1,19.3,19.7,28.3c0,0,0,0,0,0
                                c1.2,1.4,2.3,2.8,3.6,4.1C1549.1,1343.9,1548.1,1342.6,1547,1341.2C1547,1341.2,1547,1341.2,1547,1341.2z"
                            />
                            <path className={`st22 target middle ${tooth36Diagnozis.channel_class} ${tooth36Diagnozis.channel_class} ${tooth36Diagnozis.pulpit ? 'pulpit' : ''} ${tooth36Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1641.9,1332.8c-0.2-2.2-0.5-4.5-0.8-6.7v0c-1.5-11.2-4.1-22.1-7.8-32.8c-3.5-10.2-7.9-20.1-12.9-29.9
                                c-0.6-1.2-1.2-2.3-1.8-3.5c-1.7,0.5-3.6,1.1-5.7,1.7c1,1.5,2,3.1,3,4.7c11.7,18.7,19.9,38.7,24.6,59.7c0,0,0,0,0,0
                                C1641,1328.2,1641.5,1330.5,1641.9,1332.8z"
                            />
                        </g>
                    </g>
                    <g className="toutline" style={{visibility: !tooth36Diagnozis.culttab && !tooth36Diagnozis.abutment && !tooth36Diagnozis.implant && !tooth36Diagnozis.shaper && !tooth36Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1621.8,1144.6c-1.1-7.5-2.9-14.8-5.2-22l-4.8-6.6l-11-7.4c-1.2,0.1-2.3,0.5-3.3,1.1
                            c-1.6,1-2.7,2.4-4.1,3.6c-1.8,1.4-3.9,2.2-6.1,2.5l-0.6,3.6l0.4,17.4c0,0,0,0,0,0l0,0.6l-1.9-0.1l-0.1-18.3l-7.2-11.3
                            c-2.5-1.6-5.1-3.1-7.7-4.6c-4.7-2.6-9.6-4.9-14.6-6.9l-7.1,0.4l-26.9,17.5l-1,3.6l4.5,6.8l0.5,10.7l-3.3,4.9l3.8,12l-1.6,0.3
                            l-4.4-12.5l3.5-6.2l-0.3-8.2l-6.2-8.8c-4.5-3.5-8.9-7-13.4-10.5c-3.1-2.4-6.1-4.8-9.1-7.2c-1.4-1.1-2.8-2.2-4.2-3.3l-6.8,0.9
                            c-3.5,2.1-6.7,4.6-9.5,7.5c-4,4.2-7.1,9.2-9.5,14.5c-1.9,4.1-3.2,8.5-4.2,12.9c-0.7,6.5-0.4,13,0.8,19.4
                            c1.8,9.8,5.8,19.1,11.6,27.1c1.5,2.1,3.1,4.1,4.9,6c10.3,8.7,22.4,14.8,35.5,17.7c11.4,2.6,23.1,2.7,34.7,2
                            c11.6-0.7,23.2-2.1,34.5-5.2c10.5-2.8,20.5-7.1,29.2-13.7c4.5-3.5,8.6-7.5,12-12c0-0.8,0.1-1.6,0.1-2.4
                            C1623.6,1161.9,1623.1,1153.2,1621.8,1144.6z"
                        />
                    </g>
                    <g className="hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir" 
                            style={{
                                visibility: tooth36Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth36Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className={`vinir-fill ${tooth36Diagnozis.vinir_color}`} 
                                d="M1621.8 1144.6C1620.7 1137.1 1618.9 1129.8 1616.6 1122.6L1611.8 1116L1600.8 1108.6C1599.6 1108.7 1598.5 1109.1 1597.5 1109.7C1595.9 1110.7 1594.8 1112.1 1593.4 1113.3C1591.6 1114.7 1589.5 1115.5 1587.3 1115.8L1586.7 1119.4L1587.1 1136.8V1137.4L1585.2 1137.3L1585.1 1119L1577.9 1107.7C1575.4 1106.1 1572.8 1104.6 1570.2 1103.1C1565.5 1100.5 1560.6 1098.2 1555.6 1096.2L1548.5 1096.6L1521.6 1114.1L1520.6 1117.7L1525.1 1124.5L1525.6 1135.2L1522.3 1140.1L1526.1 1152.1L1524.5 1152.4L1520.1 1139.9L1523.6 1133.7L1523.3 1125.5L1517.1 1116.7C1512.6 1113.2 1508.2 1109.7 1503.7 1106.2C1500.6 1103.8 1497.6 1101.4 1494.6 1099C1493.2 1097.9 1491.8 1096.8 1490.4 1095.7L1483.6 1096.6C1480.1 1098.7 1476.9 1101.2 1474.1 1104.1C1470.1 1108.3 1467 1113.3 1464.6 1118.6C1462.7 1122.7 1461.4 1127.1 1460.4 1131.5C1459.7 1138 1460 1144.5 1461.2 1150.9C1463 1160.7 1467 1170 1472.8 1178C1474.3 1180.1 1475.9 1182.1 1477.7 1184C1488 1192.7 1500.1 1198.8 1513.2 1201.7C1524.6 1204.3 1536.3 1204.4 1547.9 1203.7C1559.5 1203 1571.1 1201.6 1582.4 1198.5C1592.9 1195.7 1602.9 1191.4 1611.6 1184.8C1616.1 1181.3 1620.2 1177.3 1623.6 1172.8C1623.6 1172 1623.7 1171.2 1623.7 1170.4C1623.6 1161.9 1623.1 1153.2 1621.8 1144.6Z"></path>
                        </g>
                    </g>
                </g>
            </g>
        </>
    )
}
