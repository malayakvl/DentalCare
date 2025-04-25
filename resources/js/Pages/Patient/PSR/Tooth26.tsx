import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSubDiagnosis, setToothDiagnoze, setNewToothActive, setDisactiveAll, setSelectedToothNumber, settooth26Active } from '../../../Redux/Formula';
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


export default function Tooth26() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth26Diagnozis = teethDiagnozis.tooth26;
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
                    <path className="st40" d="M1487,281.9c0,0-8,36-8,50s3.9,48.9,4.4,59c0.6,10,5.6,48,6.6,63s6,33,13,45
                        s-7,27-10,42s-2.6,30.7-1.8,48.8s11.8,82.2,21.8,108.2c6,15.6,20,38,57,38c35,0,63-20,73-46s11-55,6-69c-2.8-7.8-17-44-19-60
                        s-13.6-49.9-12-63c2-16,12-25,16-37c3.8-11.4,5-18,3-32s-10-33-17-50s-13-32-10-60c1.9-17.7,1.6-37.4-6.3-53.8
                        c-9.7-20.2-33.8-27.3-54.7-28.2C1527,235.9,1496,245.9,1487,281.9z"
                    />
                </g>
                <g id="T_26" className="common-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin">
                        <g id="dentin_v_26" className="hRoot hImplant hEmpty" style={{visibility: !tooth26Diagnozis.implant && !tooth26Diagnozis.apex && !tooth26Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st9 change-color-psr-up ${tooth26Diagnozis?.change_color ? 'diagnoze' : ''}`} d="M1606.9,448.9l-28-8.1l-29.3,12l-21.6-2.8l-18.3,13.1c-5.7-9.7-10.1-20-13-30.7
                                c-2.2-8.1-3.6-16.3-4.9-24.5c0.1-0.6,0.1-1.2,0.2-1.8c6.7-7.1,14.7-13.1,23.9-17.9c1.8-0.9,3.5-1.8,5.3-2.6
                                c15.3-6.9,32.4-10,49.4-9.4c4.5,0.2,9,0.6,13.5,1.3c9.9,1.5,19.4,4.4,28.1,8.4c0.1,0.1,0.1,0.2,0.2,0.2l0,0
                                c1.2,3.7,2.2,7.4,3,11.1C1618.7,414.8,1615.1,432.8,1606.9,448.9z" 
                            />
                        </g>
                        <g id="dentin_n_26" style={{visibility: !tooth26Diagnozis.implant && !tooth26Diagnozis.abutment && !tooth26Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st10 change-color-psr ${tooth26Diagnozis?.change_color ? 'diagnoze' : ''}`}
                                d="M1522.2,337.2c1.6,5,3.7,10,7.3,14c2,2.2,4.5,4.1,7.4,4.4c4.4,0.4,8.1-2.4,11-5.9
                                c1.9-2.2,3.5-4.7,5.2-7.1c1.4-2,3-3.9,4.5-5.8c2.7-3.3,5.3-6.7,7.9-10.2c-0.8-8.3-1.5-16.6-2-25c-0.7-10.1-1.2-20.2-2.2-30.3
                                c-0.7-7.9-1.7-15.8-2.8-23.6c-1.4-4.3-5.4-7.1-9.8-7c-3.1,0.1-6,1.6-7.8,4.1c-1.4,2-2,4.4-2.6,6.7c-3.2,12-6.9,23.9-10.5,35.9
                                c-3.1,10.5-6,21-8.7,31.6C1519.3,325.1,1520.3,331.3,1522.2,337.2z"
                            />
                            <path className={`st10 change-color-psr ${tooth26Diagnozis?.change_color ? 'diagnoze' : ''}`} 
                                d="M1612.4,386.1c-0.1-0.1-0.1-0.2-0.2-0.2c-8.8-4-18.2-6.8-28.1-8.3c-4.5-0.7-9-1.1-13.5-1.3
                                c-17-0.6-34.1,2.5-49.4,9.4c-1.8,0.8-3.6,1.7-5.3,2.6c-9.1,4.8-17.2,10.8-23.9,17.9c-0.1,0.6-0.1,1.2-0.2,1.8
                                c-0.4-2.3-0.7-4.5-1.1-6.8c-2.8-17.2-6.4-34.3-7.1-51.7c-0.8-18.9,1.9-37.8,6.2-56.3c2.2-9.5,4.8-18.9,9.1-27.7
                                c2.9-6,8.2-11.3,14.2-9.1c3.6,1.3,5.1,5,5.7,8.6c2,11.8-1.7,23.5-2.5,35.4c-0.8,11.9,1.4,23.7,3.7,35.5c1.8,8.8,5.8,17.9,13.4,20
                                c1.3,0.3,2.6,0.5,4.1,0.5c5.9-0.2,9.5-3.8,13.1-7.9c1.1-1.2,2.2-2.5,3.3-3.8c4.8-5.5,9.9-11.5,13.4-18.2
                                c3.3-6.2,5.8-12.7,7.6-19.3c2-7.4,3.1-15,3.4-22.7c0.2-6.5-0.3-12.9,1-19.3c0.7-3.6,2.2-7.3,5.8-8.6c7.8-2.9,13.8,5.8,15.6,15.3
                                c1.2,6.1,2.6,12.1,3.7,18.1c1.5,8.9,2.1,17.8,1.6,26.8c-0.7,12.6-3.6,25.2-2.4,37.8C1604.4,365.2,1609,375.6,1612.4,386.1z"
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g>
                            <path className={`st22 target top ${tooth26Diagnozis.channel_class} ${tooth26Diagnozis.channel_class} ${tooth26Diagnozis.pulpit ? 'pulpit' : ''} ${tooth26Diagnozis.periodontit ? 'periodontit' : ''}`}
                                d="M1575.8,422.5c-7.2-6.4-17.4-9-27.1-7c-8.6,1.8-15.9,7-19.8,14.2
                                c-1.9-3.9-3.2-8.1-3.8-12.4c-0.8-5.4-0.5-10.9-0.9-16.4c-0.4-5.4-1.5-10.5-3-15.7c0,0.1,0.1,0.2,0.1,0.3c0.2-0.1,0.4-0.2,0.5-0.2
                                c0.6-0.3,1.2-0.5,1.9-0.8c1.9-0.8,3.8-1.5,5.7-2.2c0.9-0.3,1.8-0.6,2.7-0.9c0.8-0.3,1.6-0.5,2.4-0.8c0.2-0.1,0.4-0.1,0.6-0.2
                                c1.7-0.5,3.5-1,5.2-1.4c0,0,0.1,0,0.1,0c1-0.2,1.9-0.4,2.9-0.6s1.9-0.4,2.9-0.5c0.8-0.1,1.5-0.3,2.3-0.4c0.3-0.1,0.6-0.1,0.9-0.1
                                c0.9-0.1,1.7-0.2,2.6-0.4c0.8-0.1,1.7-0.2,2.5-0.3c0.2,0,0.4,0,0.6-0.1c0.8-0.1,1.6-0.2,2.4-0.2c0.3,0,0.5,0,0.8-0.1
                                c0.8-0.1,1.5-0.1,2.3-0.1c0.1,0,0.2,0,0.3,0c0.9,0,1.8-0.1,2.8-0.1c0,0,0,0,0,0c1,0,1.9,0,2.9,0c1.4,0,2.8,0,4.1,0.1
                                c-0.2,11.6,4.4,22.9,5.4,34.5C1576.3,414.6,1576.3,418.6,1575.8,422.5z"
                            />
                        </g>
                        <g>
                            <path className={`st22 target middle ${tooth26Diagnozis.channel_class} ${tooth26Diagnozis.channel_class} ${tooth26Diagnozis.pulpit ? 'pulpit' : ''} ${tooth26Diagnozis.periodontit ? 'periodontit' : ''}`}
                                d="M1589.4,316.2c-2.1,9.9-5.3,19.6-9.3,28.9c-4,9.5-8.7,18.6-9.4,28.7
                                c-0.1,0.8-0.1,1.5-0.1,2.3c-1.4,0-2.8-0.1-4.1-0.1c-1,0-1.9,0-2.9,0c0,0,0,0,0,0c-0.9,0-1.8,0-2.8,0.1c-0.1,0-0.2,0-0.3,0
                                c-0.8,0-1.6,0.1-2.3,0.1c-0.3,0-0.5,0-0.8,0.1c-0.8,0.1-1.6,0.1-2.4,0.2c-0.2,0-0.4,0-0.6,0.1c-0.8,0.1-1.7,0.2-2.5,0.3
                                c-0.9,0.1-1.7,0.2-2.6,0.4c-0.3,0-0.6,0.1-0.9,0.1c-0.8,0.1-1.5,0.2-2.3,0.4c-0.9,0.2-1.9,0.4-2.9,0.6c-0.9,0.2-1.9,0.4-2.8,0.6
                                c0,0-0.1,0-0.1,0c-1.8,0.4-3.5,0.9-5.2,1.4c-0.2,0-0.4,0.1-0.6,0.2c-0.8,0.2-1.6,0.5-2.4,0.8c-0.9,0.3-1.8,0.6-2.7,0.9
                                c-1.9,0.7-3.9,1.4-5.7,2.2c-0.6,0.3-1.2,0.5-1.9,0.8l-0.5,0.2c-2.2-7.6-5.2-15-8.4-22.4c-4.3-10.2-8.8-20.4-10.8-31
                                c-0.3-1.6-0.6-3.2-0.8-4.9c1-0.6,2.1-1.2,3.3-1.9c0.2,1.3,0.5,2.6,0.8,4c1.8,7.5,4.8,14.6,9,21.3c4.2,6.9,10,13.1,16.9,16.6
                                c0.8-3.9,1.5-7.9,2.2-11.8c0.1-0.4,0.1-0.8,0.2-1.1c2.5-13.5,4.8-27.1,6.9-40.8c3.7-0.5,7.5-0.8,11.2-0.9
                                c0.5,9.7,1.2,19.4,1.9,29.2c0,0,0,0,0,0c0.1,0.8,0.1,1.6,0.2,2.4v0c0,0,0,0,0,0c0.6,7.6,1.3,15.2,2.1,22.7
                                c6.3-3.8,10.7-10.1,14.3-16.4c6.4-11.2,12-22.9,15.6-35.1C1587.1,315.8,1588.3,316,1589.4,316.2z" 
                            />
                        </g>
                        {/* Отростки периодонтита */}
                        <g>
                            <path className={`st22 target part ${tooth26Diagnozis.channel_class} ${tooth26Diagnozis.channel_class} ${tooth26Diagnozis.pulpit ? 'pulpit' : ''} ${tooth26Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`}
                                d="M1512,257.5c-4.3,12.1-7.5,24.4-9.5,36.8c-1.8,10.9-2.7,22.1-1.3,33.1c1-0.6,2.1-1.2,3.3-1.9
                                c-1.5-9-1.3-18.2-0.4-27.4C1505.4,284.4,1508,270.8,1512,257.5z"
                            />
                            <path className={`st22 target part ${tooth26Diagnozis.channel_class} ${tooth26Diagnozis.channel_class} ${tooth26Diagnozis.pulpit ? 'pulpit' : ''} ${tooth26Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`}
                                d="M1550.4,240.8c0-0.2,0-0.3,0-0.5C1550.4,240.5,1550.4,240.6,1550.4,240.8c-2.5,21.9-5.4,43.7-8.8,65.5
                                c-0.4,2.5-0.8,5-1.2,7.5c3.7-0.5,7.5-0.8,11.2-0.9c-0.2-4.1-0.4-8.3-0.6-12.5C1550.3,280.5,1550,260.6,1550.4,240.8z"
                            />
                            <path className={`st22 target part ${tooth26Diagnozis.channel_class} ${tooth26Diagnozis.channel_class} ${tooth26Diagnozis.pulpit ? 'pulpit' : ''} ${tooth26Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`}
                                d="M1591.9,283.3c-0.4-9.2-1.8-18.3-4-27.3c4.1,18.9,3.6,38.4-1.5,57.2c-0.2,0.8-0.4,1.6-0.7,2.4
                                c1.3,0.2,2.5,0.5,3.6,0.7c0.1-0.4,0.2-0.9,0.3-1.3C1591.7,304.5,1592.4,293.9,1591.9,283.3z" 
                            />
                        </g>
                    </g>
                    <g className="hRoot hImplant hEmpty" style={{visibility: !tooth26Diagnozis.culttab && !tooth26Diagnozis.abutment && !tooth26Diagnozis.implant && !tooth26Diagnozis.shaper && !tooth26Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1637.3,429c-0.9-5.3-2.5-10.4-4.9-15.3c-2.4-5-5.6-9.8-9-14.3c-3.4-4.6-7.1-9-11-13.2
                            c-0.1-0.1-0.1-0.2-0.2-0.2c-8.8-4-18.2-6.8-28.1-8.4c-23.2-3.6-47.7,0-68.2,10.7c-9.1,4.8-17.2,10.8-23.9,17.9c0,0.1,0,0.1,0,0.2
                            c-0.6,5.4-1.2,10.8-1.8,16.2c-0.7,6.9-1.4,13.9-1.3,20.8c0.1,6.6,0.9,13.2,2.4,19.7c1.9,4.2,4.5,8.1,7.7,11.7
                            c5.2,5.9,12,10.7,19.8,14.1l6.1-0.8c1.7-1.8,3.6-3.5,5.7-5c0.6-0.4,1.1-0.8,1.7-1.2c5.7-3.9,12.1-6.9,18.1-10.4
                            c1.9-1.1,3.7-2.2,5.5-3.4l-3.4-7.3l-1-9.9l-4.9-4.2l1-1.4l5.4,5.1l1.2,10.1l3.7,6.9c1.4,0.9,2.8,1.6,4.4,2.2
                            c5.1,1.9,10.9,2.3,16.3,3.6c4.7,1.2,9,3.1,12.7,5.7l4.6-0.3c0.9-0.5,1.7-1,2.6-1.6c2.9-1.8,5.7-3.7,8.4-5.8
                            c6.1-4.7,11.7-10,14.4-16.5c0.8-1.9,1.3-3.8,1.6-5.8l1.7,0.2c-0.2,1.9-0.7,3.7-1.4,5.5c-1.5,3.7-4.1,7.1-6.9,10.2
                            c-2.1,2.3-4.3,4.4-6.6,6.5c1.8,0.1,3.6,0.5,5.2,1.1c1,0.4,2,0.8,2.9,1.4l5.6-1.3c4.5-5.7,7.9-11.8,10.3-18.2
                            C1636.8,446,1638,437.4,1637.3,429z"
                        />
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir" 
                            style={{
                                visibility: tooth26Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth26Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className={`vinir-fill ${tooth26Diagnozis.vinir_color}`} 
                                d="M1637.3 429C1636.4 423.7 1634.8 418.6 1632.4 413.7C1630 408.7 1626.8 403.9 1623.4 399.4C1620 394.8 1616.3 390.4 1612.4 386.2C1612.3 386.1 1612.3 386 1612.2 386C1603.4 382 1594 379.2 1584.1 377.6C1560.9 374 1536.4 377.6 1515.9 388.3C1506.8 393.1 1498.7 399.1 1492 406.2C1492 406.3 1492 406.3 1492 406.4C1491.4 411.8 1490.8 417.2 1490.2 
                                422.6C1489.5 429.5 1488.8 436.5 1488.9 443.4C1489 450 1489.8 456.6 1491.3 463.1C1493.2 467.3 1495.8 471.2 1499 474.8C1504.2 480.7 1511 485.5 1518.8 488.9L1524.9 488.1C1526.6 486.3 1528.5 484.6 1530.6 483.1C1531.2 482.7 1531.7 482.3 1532.3 481.9C1538 478 1544.4 475 1550.4 471.5C1552.3 470.4 1554.1 469.3 1555.9 468.1L1552.5 460.8L1551.5 450.9L1546.6 446.7L1547.6 445.3L1553 450.4L1554.2 460.5L1557.9 467.4C1559.3 
                                468.3 1560.7 469 1562.3 469.6C1567.4 471.5 1573.2 471.9 1578.6 473.2C1583.3 474.4 1587.6 476.3 1591.3 478.9L1595.9 478.6C1596.8 478.1 1597.6 477.6 1598.5 477C1601.4 475.2 1604.2 473.3 1606.9 471.2C1613 466.5 1618.6 461.2 1621.3 454.7C1622.1 452.8 1622.6 450.9 1622.9 448.9L1624.6 449.1C1624.4 451 1623.9 452.8 1623.2 454.6C1621.7 458.3 1619.1 461.7 1616.3 464.8C1614.2 467.1 1612 469.2 1609.7 471.3C1611.5 471.4 1613.3 471.8 1614.9 472.4C1615.9 472.8 1616.9 473.2 
                                1617.8 473.8L1623.4 472.5C1627.9 466.8 1631.3 460.7 1633.7 454.3C1636.8 446 1638 437.4 1637.3 429Z"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </>
    )
}
