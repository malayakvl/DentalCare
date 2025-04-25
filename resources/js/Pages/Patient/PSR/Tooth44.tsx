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



export default function Tooth44() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth44Diagnozis = teethDiagnozis.tooth44;
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
                <g className="underlay" style={{visibility:'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <path className="st40" d="M810.8,1255.9c0,0-8,42-15,67s-14,47-33,47s-25-15-25-28s4-22,5-46s-1-71-2-84
                        s-13-41-9-68s21-54,22-79s-23-45-21-77s5.8-165.8,10-185c5-23,35-31,52-21s22,31,25,86s7,102,7,120s-2,35-15,71
                        c-13,36,18,62,14,100S815.8,1228.9,810.8,1255.9z"
                    />
                </g>
                <g id="T_44" className="common-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin">
                        <g id="dentin_v_44" style={{visibility: !tooth44Diagnozis.implant && !tooth44Diagnozis.apex && !tooth44Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_v_44" className={`st9 change-color-psr-up ${tooth44Diagnozis.change_color ? 'diagnoze' : ''}`}  d="M816.2,1175.2c-1.2,11.4-2.5,22.7-4.1,34c-1.5,11-3.2,22-5.1,32.9
                                c-3.5,20.5-7.6,41-12.3,61.3c-1.9,8.2-3.9,16.4-7,24.3c-2.6,6.5-5.8,12.8-9.7,18.8c-3.2,5-7.6,9.6-12.5,12.4
                                c-2.3,1.3-4.9,2.2-7.4,2.3c2.5-0.1,5-1,7.3-2.3c4.9-2.8,9.3-7.4,12.5-12.4c3.9-6,7.1-12.3,9.7-18.8c3.1-7.9,5.1-16.1,7-24.3
                                c4.7-20.3,8.8-40.8,12.3-61.3c1.9-10.9,3.6-22,5.1-32.9c0.8-5.9,1.6-11.9,2.3-17.8c-0.1,0.1-0.1,0.2-0.2,0.3
                                c-5.5,8.5-12.7,15.7-21.7,20c-2.2,1.1-4.6,2-7,2.6c-5,1.4-10.3,1.7-15.4,0.8c-1.2-0.2-2.5-0.5-3.7-0.9
                                c-6.2-1.9-11.7-5.8-16.1-10.8c-2.6-2.9-4.7-6.1-6.6-9.4c-1.1-6.7-2.4-13.3-3.9-19.9c2.2-4.9,4.3-9.8,6.2-14.7
                                c3-7.6,5.6-15.3,7.9-23.1l28.4,4.6l26.6-4.4c2.2,9.3,4.2,18.6,5.7,28C815.2,1168,815.7,1171.6,816.2,1175.2z" style={{fill:'gb(253,222,136)'}}></path>
                        </g>
                        <g id="dentin_n_44" style={{visibility: !tooth44Diagnozis.implant && !tooth44Diagnozis.abutment && !tooth44Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_n_44" className={`st10 change-color-psr ${tooth44Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M814.3,1191.4c-0.7,5.9-1.5,11.9-2.3,17.8c-1.5,11-3.2,22-5.1,32.9
                                c-3.5,20.5-7.5,41-12.3,61.3c-1.9,8.2-3.9,16.4-7,24.3c-2.6,6.5-5.8,12.8-9.7,18.8c-3.2,5-7.6,9.6-12.5,12.4
                                c-2.3,1.3-4.8,2.2-7.3,2.3c-0.3,0-0.6,0-0.9,0c-1.1,0-2.3-0.2-3.4-0.7c0,0,0,0,0,0c-5.2-1.9-7.4-7.3-7.9-12.6
                                c-0.8-8.3,1.3-16.5,2.4-24.8c0.9-6.9,1.1-13.8,1.2-20.8c0.3-22.9,0-45.9-1.5-68.8c-0.8-12.2-2-24.3-3.8-36.4
                                c-0.2-1.2-0.4-2.5-0.6-3.7c0,0.1,0.1,0.2,0.2,0.3c1.9,3.4,4,6.6,6.6,9.4c4.4,4.9,9.8,8.8,16.1,10.8c1.2,0.4,2.4,0.7,3.7,0.9
                                c5.1,0.9,10.4,0.6,15.4-0.8c2.4-0.6,4.7-1.5,7-2.6c9-4.3,16.3-11.5,21.7-20C814.2,1191.6,814.2,1191.5,814.3,1191.4z" style={{fill:'gb(253,222,136)'}}></path>
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g>
                            <path className={`st22 target top ${tooth44Diagnozis.channel_class} ${tooth44Diagnozis.channel_class} ${tooth44Diagnozis.pulpit ? 'pulpit' : ''} ${tooth44Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M791.5,1179.3c0,1.4,0,2.7-0.1,4.1c-2,10.3-4,20.6-5.8,30.9c0,0-0.1,0-0.1,0
                                c-1.2,0.3-2.4,0.6-3.6,0.8c-0.7,0.1-1.4,0.2-2,0.3c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4,0c-0.3,0-0.6,0.1-0.8,0.1
                                c-0.1,0-0.2,0-0.3,0c-2.7,0.2-5.3,0-8-0.5c0-11.2-0.3-22.3-0.8-33.5c-0.4-2.2-0.4-4.5,0-6.7c0.4-2.3,1.2-4.4,2.3-6.5
                                c2.6,1.7,5.7,2.7,8.9,2.8c3.3,0.1,6.6-0.7,9.4-2.4C791,1172.3,791.5,1175.8,791.5,1179.3z"
                            />
                        </g>
                        <g>
                            <path className={`st22 target top ${tooth44Diagnozis.channel_class} ${tooth44Diagnozis.channel_class} ${tooth44Diagnozis.pulpit ? 'pulpit' : ''} ${tooth44Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M766.2,1287.2c1.8,0.2,3.6,0.3,5.3,0.2c0.7,0,1.4-0.1,2-0.2
                                c0.5-2.9,1-5.8,1.4-8.8c0.1-0.5,0.1-1,0.2-1.5c0.8-5.4,1.7-10.9,2.5-16.3c0.2-1.4,0.4-2.7,0.6-4.1c0.4-2.4,0.7-4.7,1.1-7.1
                                c0.4-2.8,0.9-5.6,1.4-8.4c0.5-3.2,1.1-6.4,1.6-9.5c0.5-3,1-5.9,1.5-8.9c0.5-2.8,1-5.6,1.5-8.4c0,0,0,0,0-0.1c-0.1,0-0.1,0-0.2,0.1
                                c-2,0.5-4,0.9-6,1.1c-0.4,0-0.8,0.1-1.2,0.1c-0.2,0-0.3,0-0.4,0c-2.6,0.1-5.1,0-7.6-0.5h0v0c0,18.2-0.7,36.3-2.2,54.5
                                c-0.2,2.9-0.5,5.8-0.8,8.7C766.9,1281.3,766.6,1284.3,766.2,1287.2z" 
                            />
                        </g>
                        <g>
                            <path className={`st22 target top ${tooth44Diagnozis.channel_class} ${tooth44Diagnozis.channel_class} ${tooth44Diagnozis.pulpit ? 'pulpit' : ''} ${tooth44Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M754,1360.7c1.9-4.8,3.6-9.6,5.3-14.5c1.3-3.9,2.6-7.8,3.7-11.7
                                c2.1-6.9,3.9-13.8,5.5-20.8c0.6-2.4,1.1-4.8,1.6-7.2c0.4-1.8,0.7-3.5,1-5.3c0.3-1.8,0.7-3.5,1-5.3s0.6-3.5,0.9-5.3v0
                                c0.2-1.1,0.4-2.2,0.6-3.3c-0.7,0.1-1.3,0.2-2,0.2c-1.7,0.1-3.5,0-5.3-0.2c-2.5,22.8-6.2,45.4-11,67.8
                                C754.8,1356.9,754.4,1358.8,754,1360.7z" 
                            />
                        </g>
                    </g>
                    <g className="toutline" style={{visibility: !tooth44Diagnozis.culttab && !tooth44Diagnozis.abutment && !tooth44Diagnozis.implant && !tooth44Diagnozis.shaper && !tooth44Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M826,1142.8c-1-4.8-3.5-9.1-7.1-12.3c-3.4-3-7.6-4.9-11-7.9c-1.9-1.7-3.4-3.7-4.9-5.8
                            c-1.5-2.2-2.9-4.4-4.4-6.6c-2.7-3.9-5.8-7.3-10-9.5c-4.5-2.3-9.8-2.7-14.2-0.2c-2.7,1.6-4.7,4.1-6.9,6.4c-2.5,2.5-5.2,4.7-8.2,6.6
                            c-0.2,0.1-0.4,0.3-0.7,0.4c-4.4,2.6-9.2,4.6-13.4,7.6c-4.2,2.9-7.6,6.8-10.2,11.2c-1.7,4.3-2.8,8.9-3.2,13.6
                            c-1,10.8,1.6,21.4,5,31.6c1.8,5.3,3.9,10.6,6.5,15.5c1.9,3.6,4.2,7,6.9,10.1c4.4,5,9.9,8.8,16.1,10.8c8.7,2.7,17.9,1.4,26.1-2.5
                            c7.1-3.4,13.2-8.7,18.1-14.9c1.3-1.6,2.5-3.3,3.6-5.1c5.9-9.3,9.6-19.9,11.1-30.8C826.2,1154.8,826.4,1148.8,826,1142.8z"
                        />
                    </g>
                    <g style={{visibility: 'inherit'}}>
                        <g className="vinir" 
                            style={{
                                visibility: tooth44Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth44Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className="st55" d="M826 1142.8C825 1138 822.5 1133.7 818.9 1130.5C815.5 1127.5 811.3 1125.6 807.9 1122.6C806 1120.9 804.5 1118.9 803 1116.8C801.5 1114.6 800.1 1112.4 798.6 1110.2C795.9 1106.3 792.8 1102.9 788.6 1100.7C784.1 1098.4 778.8 1098 774.4 1100.5C771.7 1102.1 769.7 1104.6 767.5 1106.9C765 1109.4 762.3 1111.6 759.3 1113.5C759.1 1113.6 758.9 1113.8 758.6 1113.9C754.2 1116.5 749.4 1118.5 745.2 1121.5C741 1124.4 737.6 1128.3 735 1132.7C733.3 1137 732.2 1141.6 731.8 1146.3C730.8 1157.1 733.4 1167.7 736.8 1177.9C738.6 1183.2 740.7 1188.5 743.3 1193.4C745.2 1197 747.5 1200.4 750.2 1203.5C754.6 1208.5 760.1 1212.3 766.3 1214.3C775 1217 784.2 1215.7 792.4 1211.8C799.5 1208.4 805.6 1203.1 810.5 1196.9C811.8 1195.3 813 1193.6 814.1 1191.8C820 1182.5 823.7 1171.9 825.2 1161C826.2 1154.8 826.4 1148.8 826 1142.8Z"></path>
                        </g>
                    </g>
                </g>
            </g>
        </>
    )
}
