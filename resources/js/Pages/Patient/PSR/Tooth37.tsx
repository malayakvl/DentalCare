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


export default function Tooth37() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth37Diagnozis = teethDiagnozis.tooth37;
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
                    <path className="st40" d="M1663.7,1221.1c1.7,3.2,3.4,6.5,4.8,9.9c2.7,6.2,5.3,12.5,7.5,19
                        c4,12,8,24,19,35s22,20,39,20s37-3,52-8s30-20,31-39s0-33-7-52s-27-56-31-70c-2.8-9.8-7-25-10-35s-20-33-21-47s25-38,22-76
                        s-13.2-105-15-122c-3-28-15-81-65-82s-72,26-77,69s2,118,6,143s17,46,17,64s-25,54-19,78c4.7,19,13,36.8,22.6,53.7
                        C1647.1,1194.9,1656.5,1207.6,1663.7,1221.1z"
                    />
                </g>
                <g id="T_37" className="common-view" style={{visibility: tooth37Diagnozis.absent ? 'hidden' : 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <g className="dentin">
                        <g id="dentin_v_37" style={{visibility: !tooth37Diagnozis.implant && !tooth37Diagnozis.apex && !tooth37Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st9 change-color-psr-up ${tooth37Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M1775.1,1133c0,0.6,0,1.2-0.1,1.9c-10.4,10.8-22.8,21.8-35.7,29.7c-0.4,0.2-0.7,0.4-1.1,0.7
                                c-14.4,8.6-30.1,15-46.7,17.3c-1.3,0.2-2.6,0.3-3.9,0.5c-15.3,1.5-30.6-0.6-44.9-6.3c-0.1-0.1-0.2-0.2-0.3-0.4
                                c-2-8.1-4.7-29.5-5-37.7c-0.4-11.5,0.9-22.9,3.7-34.1l60.9,6.6l37.2-23.3c5.7,6,11.3,12,16.9,18.1
                                C1762.4,1112.8,1771.7,1121.7,1775.1,1133z"
                            />
                        </g>
                        <g id="dentin_n_37" style={{visibility: !tooth37Diagnozis.culttab && !tooth37Diagnozis.abutment && !tooth37Diagnozis.implant && !tooth37Diagnozis.shaper && !tooth37Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                            <path id="dentin_n_37" className={`st10 change-color-psr ${tooth37Diagnozis.change_color ? 'diagnoze' : ''}`}
                                d="M1810,1264.3c-1.3,5.8-3.9,11.9-10,13.3c-4.8,1.1-9.5-1.3-13.2-4.5
                                c-17.6-14.7-19.2-39.2-34.1-56c-3.3-3.7-7.2-7-12-9c-4.7-2-10.1-2.6-14.3,0.2c-3.5,2.3-4.9,6.4-5.8,10.3c-1.8,8-2.3,16.3,0,24.2
                                c1.9,6.6,5.7,12.7,10,18.2c4.2,5.3,9.1,10.4,11.7,16.6c1.6,3.7,2.2,7.9,0.6,11.6c-1.5,3.4-4.8,5.9-8.7,6.7
                                c-6.7,0.2-13.3-1-19.3-3.7c-14-6.3-22.8-18.8-29-32c-9-19-12-32.5-20.4-51.7c-5.8-13.5-13.3-20.1-22.7-31.6
                                c14.2,5.6,29.6,7.8,44.9,6.3c1.3-0.1,2.6-0.3,3.9-0.5c16.6-2.3,32.2-8.8,46.7-17.3c0.4-0.2,0.7-0.4,1.1-0.7
                                c12.9-7.8,25.3-18.9,35.7-29.7c0.1-0.7,0.1-1.3,0.1-1.9c0.1,0.5,0.3,0.9,0.4,1.4c1.2,11.2,3.5,15.3,7.5,26
                                c5.8,15.7,14.5,30.4,21,45.9c2.4,5.8,4.6,11.7,6.1,17.7C1813.3,1237.3,1813.1,1251,1810,1264.3z"
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g className=" pulpitis-pfilling" style={{visibility: 'inherit'}}>
                            <path className={`st22 target top ${tooth37Diagnozis.channel_class} ${tooth37Diagnozis.channel_class} ${tooth37Diagnozis.pulpit ? 'pulpit' : ''} ${tooth37Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M1739.3,1164.6c-0.4,0.2-0.7,0.4-1.1,0.7c-0.9,0.5-1.8,1.1-2.7,1.6
                                c-0.1,0-0.1,0.1-0.2,0.1c-0.8,0.5-1.7,0.9-2.5,1.4c-0.1,0.1-0.3,0.2-0.4,0.2c-0.8,0.4-1.6,0.8-2.4,1.2c-0.7,0.4-1.4,0.7-2.2,1.1
                                c-0.1,0-0.2,0.1-0.2,0.1c-0.4,0.2-0.8,0.4-1.3,0.6c-0.7,0.3-1.4,0.7-2.2,1c-0.8,0.4-1.7,0.8-2.5,1.1c-0.5,0.2-1,0.4-1.5,0.7
                                c-1,0.4-2.1,0.9-3.1,1.3c-0.5,0.2-1,0.4-1.6,0.6c-2.6,1-5.3,1.9-8,2.7c-0.5,0.2-1.1,0.3-1.6,0.5c-0.5,0.2-1.1,0.3-1.6,0.5
                                c-0.6,0.2-1.1,0.3-1.6,0.4c-0.4,0.1-0.7,0.2-1.1,0.3c-0.3,0.1-0.7,0.2-1,0.2c-0.9,0.2-1.9,0.4-2.8,0.6c-2,0.4-4.1,0.8-6.2,1.1
                                c-0.8-3.7-1.8-7.4-3.1-11c-2.6-7.1-6.6-13.8-9.1-20.9c-1.9-5.3-3-10.8-3.4-16.4c7.6,4.8,17.4,6.1,26.5,3.4
                                c7.5-2.2,13.8-6.8,17.6-12.9c3.5,3.3,6.1,7.2,7.8,11.5c1.7,4.5,2.3,9.3,3.8,13.9C1733.3,1155.4,1736,1160.1,1739.3,1164.6z" 
                            />
                        </g>
                        <g className="hEmpty hImplant pulpitis-pfilling" style={{visibility: 'inherit'}}>
                            <path className={`st22 target top ${tooth37Diagnozis.channel_class} ${tooth37Diagnozis.channel_class} ${tooth37Diagnozis.pulpit ? 'pulpit' : ''} ${tooth37Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1775.2,1211.5c-1.1,0.5-2.3,1-3.5,1.6c-4.8-7.3-10.3-14.3-16.9-20.5
                                c-13-12.4-32.4-19.3-45.1-8.8c-5.5,4.6-7.3,11.3-8.2,17.8c-1.2,9.5-0.9,18.9,0.6,28.1c-1.4,0-2.8-0.1-4.2-0.2
                                c-1.6-7.8-2.5-15.7-3.3-23.6c-0.8-7.8-1.4-15.7-3-23.3c2.1-0.3,4.1-0.6,6.2-1.1c0.9-0.2,1.9-0.4,2.8-0.6c0.3-0.1,0.7-0.2,1-0.2
                                c0.4-0.1,0.7-0.2,1.1-0.3c0.5-0.1,1.1-0.3,1.6-0.4c0.5-0.1,1.1-0.3,1.6-0.5c0.5-0.1,1.1-0.3,1.6-0.5c2.7-0.8,5.3-1.7,8-2.7
                                c0.5-0.2,1-0.4,1.6-0.6c1.1-0.4,2.1-0.8,3.1-1.3c0.5-0.2,1-0.4,1.5-0.7c0.8-0.4,1.7-0.7,2.5-1.1c0.7-0.3,1.4-0.7,2.1-1
                                c0.4-0.2,0.9-0.4,1.3-0.6c0.1,0,0.1-0.1,0.2-0.1c0.7-0.4,1.4-0.7,2.2-1.1c0.8-0.4,1.6-0.8,2.3-1.2c0.1-0.1,0.3-0.2,0.4-0.2
                                c0.9-0.5,1.7-0.9,2.5-1.4c0.1,0,0.1-0.1,0.2-0.1c0.9-0.5,1.8-1,2.7-1.6c0.4-0.2,0.7-0.4,1.1-0.7c3,4.2,6.4,8.2,9.8,12.1
                                C1758.5,1187.9,1767.6,1199.3,1775.2,1211.5z"
                            />
                        </g>
                        <g className="hEmpty hImplant pulpitis-pfilling" style={{visibility: 'inherit'}}>
                            <path className={`st22 target top ${tooth37Diagnozis.channel_class} ${tooth37Diagnozis.channel_class} ${tooth37Diagnozis.pulpit ? 'pulpit' : ''} ${tooth37Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1702.1,1229.7c-1.4,0-2.8-0.1-4.2-0.2c0.7,3.6,1.6,7.2,2.7,10.8c6.2,20.8,18.8,39.6,36.1,54.1
                                c-13-12.8-22.7-27.8-28.8-43.9C1705.3,1243.8,1703.3,1236.8,1702.1,1229.7z"
                            />
                            <path className={`st22 target top ${tooth37Diagnozis.channel_class} ${tooth37Diagnozis.channel_class} ${tooth37Diagnozis.pulpit ? 'pulpit' : ''} ${tooth37Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1781.1,1221.5c-1.8-3.4-3.8-6.8-5.9-10c-1.1,0.5-2.3,1-3.5,1.6c8.3,12.7,14.4,26.8,19.7,41
                                c2.8,7.4,5.3,14.9,7.7,22.4C1796.5,1257.3,1790.4,1238.7,1781.1,1221.5z" 
                            />
                        </g>
                    </g>
                    <g className="toutline " style={{visibility: !tooth37Diagnozis.culttab && !tooth37Diagnozis.abutment && !tooth37Diagnozis.implant && !tooth37Diagnozis.shaper && !tooth37Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1774.9,1128.6c-0.2-2-0.6-4.1-1-6.6c-1.4-9.9-5-19.3-9.6-28.2
                            c-2.9-5.6-6.1-11-9.6-16.2c-4.9-3.3-10-6.2-15.4-8.5c-2.6-1.2-5.3-2.2-8-3.1c-3.9-1.3-7.8-2.4-11.8-3.2l-6.9,2.4
                            c-1.8,4.1-4.6,7.6-8.1,10.3c-4.2,3.2-9.4,5.3-11.9,9.9c-1.4,2.5-1.8,5.3-1.5,8.1c0.4,3.7,1.8,7.1,4.2,9.9l-2,1.6
                            c-0.5-5.1-3.8-9.5-8.5-11.4c-4.4-1.7-9.3-1-13.9-2.1c-4.4-1-8.1-3.6-11.7-6.2c-3-2.1-5.9-4.2-9-6.3l-8.7,1.2
                            c-0.1,0.1-0.2,0.1-0.2,0.2c-4.9,3.2-9.2,7.2-12.8,11.9c-7.3,9.4-11.4,21-11.6,33c0.2,0.8,0.3,1.6,0.5,2.4
                            c1.6,7.7,3.5,15.3,6.5,22.5c2.3,5.4,5.2,10.6,8.6,15.3c2.9,4,6.2,7.8,9.8,11.2c14.3,5.7,29.9,7.9,45.2,6.4
                            c18-1.8,35-8.6,50.5-17.8c13.2-7.9,26.1-19.2,36.8-30.3C1775.2,1132.6,1775.1,1130.6,1774.9,1128.6z"
                        />
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                    <g className="vinir"
                            style={{
                                visibility: tooth37Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth37Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className={`vinir-fill ${tooth37Diagnozis.vinir_color}`}  
                                d="M1774.9 1128.6C1774.7 1126.6 1774.3 1124.5 1773.9 1122C1772.5 1112.1 1768.9 1102.7 1764.3 1093.8C1761.4 1088.2 1758.2 1082.8 1754.7 1077.6C1749.8 1074.3 1744.7 1071.4 1739.3 1069.1C1736.7 1067.9 1734 1066.9 1731.3 1066C1727.4 1064.7 1723.5 1063.6 1719.5 1062.8L1712.6 1065.2C1710.8 1069.3 1708 1072.8 1704.5 1075.5C1700.3 1078.7 1695.1 1080.8 1692.6 1085.4C1691.2 1087.9 1690.8 1090.7 1691.1 1093.5C1691.5 1097.2 1692.9 1100.6 1695.3 1103.4L1693.3 1105C1692.8 1099.9 1689.5 1095.5 1684.8 1093.6C1680.4 1091.9 1675.5 1092.6 1670.9 1091.5C1666.5 1090.5 1662.8 1087.9 1659.2 1085.3C1656.2 1083.2 1653.3 1081.1 1650.2 1079L1641.5 1080.2C1641.4 1080.3 1641.3 1080.3 1641.3 1080.4C1636.4 1083.6 1632.1 1087.6 1628.5 1092.3C1621.2 1101.7 1617.1 1113.3 1616.9 1125.3C1617.1 1126.1 1617.2 1126.9 1617.4 1127.7C1619 1135.4 1620.9 1143 1623.9 1150.2C1626.2 1155.6 1629.1 1160.8 1632.5 1165.5C1635.4 1169.5 1638.7 1173.3 1642.3 1176.7C1656.6 1182.4 1672.2 1184.6 1687.5 1183.1C1705.5 1181.3 1722.5 1174.5 1738 1165.3C1751.2 1157.4 1764.1 1146.1 1774.8 1135C1775.2 1132.6 1775.1 1130.6 1774.9 1128.6Z"></path>
                        </g>
                    </g>
                </g>
            </g>
        </>
    )
}
