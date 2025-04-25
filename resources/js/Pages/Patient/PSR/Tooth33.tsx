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


export default function Tooth33() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth33Diagnozis = teethDiagnozis.tooth33;
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
                    <path className="st40" d="M1195,1239.9c0,0,5,56,6,71s7,66,11,75s12,28,30,27s26-16,26-34s-3-62-5-81
                        s1-75,3-87s6-36,6-52c0-31-29-61-28-89s26.2-45.3,27.1-78.2c0.9-32.8-3.1-144.8-4.1-169.8s-18-41-39-42s-38,17-40,52s-7,151-7,158
                        c0,29,22,50,24,73s-23,38-23,94C1182,1196.9,1193,1220.9,1195,1239.9z"
                    />
                </g>
                <g id="T_33" className="common-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin">
                        <g id="dentin_v_33" style={{visibility: !tooth33Diagnozis.implant && !tooth33Diagnozis.apex && !tooth33Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_v_33" className={`st9 change-color-psr-up ${tooth33Diagnozis.change_color ? 'diagnoze' : ''}`}  
                                d="M1263,1180.9c0,9.9-2.1,19.7-3.5,29.6c-0.3,0.7-0.6,1.3-0.9,1.9
                                c-4,8.3-9,16.3-16.3,21.9c-2.4,1.8-5,3.4-7.7,4.4c-2.2,0.8-4.4,1.2-6.8,1.1c-1.7-0.1-3.2-0.4-4.7-0.9c-6.2-2.1-11.1-7.4-15.1-12.9
                                c-4.1-5.7-7.6-11.7-10.8-17.9c2.4,21,6.4,41.8,9.1,62.7c1.5,11.6,2.6,23.2,3.6,34.8c0.8,10.3,1.6,20.7,2.5,31
                                c1.5,15.4,3.6,30.7,8.4,45.5c2.6,7.9,7.8,15.5,15.1,16c-7.3-0.4-12.6-8-15.2-16c-4.8-14.8-6.9-30.2-8.4-45.5
                                c-1-10.3-1.7-20.7-2.5-31c-1-11.6-2.1-23.2-3.6-34.8c-3-22.8-7.3-45.4-9.7-68.2c-0.8-7.9-1.4-15.9-1.8-23.8l1.3-17.2
                                c2.7-5.5,6.1-10.8,10-15.7c3.4-4.2,7.1-8,10.6-12.1c1.4-1.7,2.9-3.4,5.2-3.8c2.4-0.4,4.6,1,6.4,2.6c5.3,4.6,8.8,10.5,14,15.1
                                c4.2,3.7,9.2,6.4,14.7,8l2,1.6C1261.7,1164.9,1263,1172.9,1263,1180.9z"
                            />
                        </g>
                        <g id="dentin_n_33" style={{visibility: !tooth33Diagnozis.implant && !tooth33Diagnozis.abutment && !tooth33Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_n_33" className={`st10 change-color-psr ${tooth33Diagnozis.change_color ? 'diagnoze' : ''}`}  
                                d="M1259.6,1210.3c-0.3,1.9-0.6,3.9-0.8,5.9c-1.2,10-1.2,20.1-1.3,30.2
                                c-0.2,17-0.9,34-1.1,51.1c-0.2,14.8-0.2,29.6-1.9,44.3c-0.7,6.2-1.7,12.4-2.6,18.6c-0.9,6.2-1.6,12.4-2.1,18.7
                                c-0.6,8.2-2.5,17.1-10.7,18.9c-9,1.9-15.4-6.6-18.3-15.7c-4.8-14.8-6.9-30.2-8.4-45.5c-1-10.3-1.7-20.7-2.5-31
                                c-1-11.6-2.1-23.2-3.6-34.8c-2.7-21-6.7-41.8-9.1-62.7c3.2,6.2,6.7,12.2,10.8,17.9c4,5.6,8.9,10.9,15.1,12.9
                                c1.5,0.5,3.1,0.8,4.7,0.9c2.3,0.1,4.6-0.3,6.7-1.1c2.8-1,5.4-2.5,7.7-4.3c7.3-5.7,12.3-13.6,16.3-21.9
                                C1258.9,1211.7,1259.2,1211,1259.6,1210.3z"
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g>
                        <path className={`st22 target top ${tooth33Diagnozis.channel_class} ${tooth33Diagnozis.channel_class} ${tooth33Diagnozis.pulpit ? 'pulpit' : ''} ${tooth33Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1236.4,1190.3c-1.3,16.1-1.9,32.3-1.9,48.4c-0.5,0.2-0.9,0.3-1.4,0.4
                                c-0.3,0.1-0.6,0.2-0.9,0.2c-0.2,0.1-0.5,0.1-0.8,0.2c-0.1,0-0.3,0-0.4,0.1c-0.2,0-0.5,0.1-0.7,0.1c-0.2,0-0.4,0.1-0.6,0.1
                                c-0.1,0-0.3,0-0.4,0c-0.5,0-1,0-1.5,0c-1.7-0.1-3.2-0.4-4.7-0.9c0,0,0,0,0,0c-1.5-15.7-2.7-31.6-7.5-46.8
                                c-0.5-1.6-1.1-3.2-1.4-4.8c-0.9-4.1-0.3-8.3,1.4-12.1c0.6-1.4,1.5-2.7,2.2-4c1.1-2.3,2.2-4.6,4.9-4.9c3-0.4,4.8,2.2,6.8,4.3
                                c1.3,1.4,3.2,2.7,4.4,4.4c1.6,2.2,2.2,4.9,2.4,7.5C1236.6,1185.1,1236.6,1187.7,1236.4,1190.3z"
                            />
                        </g>
                        <g>
                            <path className={`st22 target top ${tooth33Diagnozis.channel_class} ${tooth33Diagnozis.channel_class} ${tooth33Diagnozis.pulpit ? 'pulpit' : ''} ${tooth33Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M1237.2,1317.2c-0.8,0.1-1.6,0.1-2.3,0.1c-0.8,0-1.6-0.1-2.5-0.2
                                c-0.1-1.3-0.2-2.6-0.4-3.8c-0.5-5.7-1.2-11.3-1.8-17c-2.1-18.1-5-36.1-6.9-54.2c-0.1-1.1-0.2-2.2-0.3-3.4v0c0,0,0,0,0,0
                                c1.5,0.5,3.1,0.8,4.7,0.9c0.5,0,1,0,1.5,0c0.1,0,0.3,0,0.4,0c0.2,0,0.4,0,0.6-0.1c0.2,0,0.5,0,0.7-0.1c0.1,0,0.3,0,0.4-0.1
                                l0.8-0.2c0.3-0.1,0.6-0.1,0.9-0.2c0.5-0.1,0.9-0.3,1.4-0.4c0,0,0,0,0,0c0,0.7,0,1.4,0,2.2c0.1,12.9,0.7,25.9,1.2,38.8
                                c0.5,11.2,0.9,22.3,1.3,33.5C1237.1,1314.5,1237.2,1315.9,1237.2,1317.2z" 
                            />
                        </g>
                        <g >
                            <path className={`st22 target top ${tooth33Diagnozis.channel_class} ${tooth33Diagnozis.channel_class} ${tooth33Diagnozis.pulpit ? 'pulpit' : ''} ${tooth33Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M1238.3,1396.1c-1-16.7-2.2-33.3-3.4-49.9c-0.7-9.7-1.5-19.3-2.4-29
                                c0.8,0.1,1.6,0.2,2.5,0.2c0.8,0,1.5,0,2.3-0.1c0,0.4,0,0.8,0,1.2C1238.1,1344.3,1238.4,1370.2,1238.3,1396.1z" 
                            />
                        </g>
                    </g>
                    <g className="toutline" style={{visibility: !tooth33Diagnozis.culttab && !tooth33Diagnozis.abutment && !tooth33Diagnozis.implant && !tooth33Diagnozis.shaper && !tooth33Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1271.8,1157.3c-0.4-6.3-2.1-12.5-4.8-18.2c-3.2-3.2-6.7-6.1-10.5-8.6
                            c-3.1-2-6.4-3.8-9.6-5.8c-1.9-1.2-3.8-2.5-5.5-4.1c-4.8-4.2-8.2-9.8-13.5-13.3c-2.3-1.5-4.8-2.5-7.6-2.6
                            c-7-0.3-11.8,4.5-16.1,10.3c-1.9,2.6-3.7,5.4-5.6,8.1c-3.4,4.9-7.4,9.3-12,13.1l-3.7,7.6c-1.4,10.4-0.9,21.1,1.4,31.4
                            c1.9,8.2,4.9,16.1,8.4,23.8c1.2,2.7,2.5,5.4,3.8,8c3.3,6.5,7,12.9,11.3,18.9c5,6.9,11.4,13.4,19.8,13.8c5.3,0.2,10.3-2.2,14.5-5.4
                            c7.3-5.7,12.3-13.6,16.2-21.9c1.6-3.4,3.1-6.9,4.5-10.5v0c2.5-6.7,4.5-13.5,6.2-20.5C1271,1173.5,1272.4,1165.4,1271.8,1157.3z"
                        />
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir" 
                            style={{
                                visibility: tooth33Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth33Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className="st55" d="M1271.8 1157.3C1271.4 1151 1269.7 1144.8 1267 1139.1C1263.8 1135.9 1260.3 1133 1256.5 1130.5C1253.4 1128.5 1250.1 1126.7 1246.9 1124.7C1245 1123.5 1243.1 1122.2 1241.4 1120.6C1236.6 1116.4 1233.2 1110.8 1227.9 1107.3C1225.6 1105.8 1223 1104.8 1220.3 1104.7C1213.3 1104.4 1208.5 1109.2 1204.2 1115C1202.3 1117.6 1200.5 1120.4 1198.6 1123.1C1195.2 1128 1191.2 1132.4 1186.6 1136.2L1182.9 1143.8C1181.5 1154.2 1182 1164.9 1184.3 1175.2C1186.2 1183.4 1189.2 1191.3 1192.7 1199C1193.9 1201.7 1195.2 1204.4 1196.5 1207C1199.8 1213.5 1203.5 1219.9 1207.8 1225.9C1212.8 1232.8 1219.2 1239.3 1227.6 1239.7C1232.9 1239.9 1237.9 1237.5 1242.1 1234.3C1249.4 1228.6 1254.4 1220.7 1258.3 1212.4C1259.9 1209 1261.4 1205.5 1262.8 1201.9C1265.3 1195.2 1267.3 1188.4 1269 1181.4C1271 1173.5 1272.4 1165.4 1271.8 1157.3Z"></path>
                        </g>
                    </g>
                </g>
            </g>
        </>
    )
}