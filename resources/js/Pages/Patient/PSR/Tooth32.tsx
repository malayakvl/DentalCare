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


export default function Tooth32() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth32Diagnozis = teethDiagnozis.tooth32;
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
                    <path className="st40" d="M1119,1202.9c0,0,2,48,5,71s6,60,11,77s14,29,25,28s15-12,17-30s2-66,2-90
                        s2.7-79,3.3-98c1.7-62-17.3-79-16.3-107s15-43.5,15-67.2c0-23.8-0.6-158.8-2-173.8c-2-21-16-28-29-29s-34,4-36,38s0.8,161,1,167
                        c1,26,16,39,16,68s-17,49-15,87S1119,1202.9,1119,1202.9z"
                    />
                </g>
                <g id="T_32" className="common-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin">
                        <g id="dentin_v_32" style={{visibility: !tooth32Diagnozis.implant && !tooth32Diagnozis.apex && !tooth32Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st9 change-color-psr-up ${tooth32Diagnozis.change_color ? 'diagnoze' : ''}`}  d="M1172.6,1211.7c-2.3,5.4-5.5,10.3-10.4,13.5c-2,1.3-4.2,2.2-6.5,2.8
                                c-3.6,0.9-7.5,0.7-11.1-0.4c-1.5-0.5-3-1.1-4.4-1.9c-8.4-4.9-12.4-14.5-15.3-23.9c-0.4-1.4-0.9-2.8-1.3-4.2
                                c0.9,15.4,2.4,30.9,4.1,46.4c2.1,19.9,4.6,39.7,7.2,59.5c2.1,15.4,4.5,30.8,8.9,45.6c1.7,5.7,4.6,10.8,7.9,14.4
                                c2,2.1,4.2,3.6,6.7,3.9c-2.5-0.2-4.8-1.7-6.8-3.9c-3.3-3.5-6.2-8.7-7.9-14.4c-4.4-14.8-6.9-30.2-8.9-45.6
                                c-2.7-19.8-5.1-39.6-7.2-59.5c-2-18.5-3.8-37.1-4.5-55.6c-0.2-5.2-0.3-10.4-0.3-15.6c0-7.5,0.3-14.9,1-22.4l1.4-2.5l1.8-1
                                l37.9,0.1l1.6,1.4l0.9,1.5c1.8,8.6,3.2,17.3,4.1,26c0.5,5,0.9,10.1,1.1,15.2C1172.8,1197.9,1172.8,1204.8,1172.6,1211.7z"
                            />
                        </g>
                        <g id="dentin_n_32" style={{visibility: !tooth32Diagnozis.implant && !tooth32Diagnozis.abutment && !tooth32Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st10 change-color-psr ${tooth32Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M1172.5,1267.9c0.1,11,0,22-0.6,33c-0.4,8.3-1,16.6-1.4,24.9
                                c-0.3,6.7-0.4,13.3-0.7,20c-0.2,5.3-1,10.8-2.9,15.3c-1.1,2.7-2.5,4.9-5.3,5.7c-1,0.3-2,0.4-3,0.4c0,0-0.1,0-0.1,0
                                c-2.6-0.2-4.9-1.7-6.9-3.9c-3.3-3.5-6.2-8.7-7.9-14.4c-4.4-14.8-6.9-30.2-8.9-45.6c-2.7-19.8-5.1-39.6-7.2-59.5
                                c-1.7-15.4-3.2-30.9-4.1-46.4c0.4,1.4,0.8,2.8,1.3,4.2c3,9.4,6.9,19,15.3,23.9c1.4,0.8,2.9,1.5,4.4,1.9c3.6,1.1,7.4,1.3,11.1,0.4
                                c2.3-0.5,4.5-1.5,6.5-2.8c5-3.2,8.1-8.2,10.5-13.6c-0.2,8.4-0.5,16.9-0.6,25.4C1172,1247.3,1172.4,1257.6,1172.5,1267.9z"
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g>
                            <path className={`st22 target top ${tooth32Diagnozis.channel_class} ${tooth32Diagnozis.channel_class} ${tooth32Diagnozis.pulpit ? 'pulpit' : ''} ${tooth32Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M1156.5,1202.1c0,4.5-0.4,9-0.6,13.5c-0.2,4.1-0.3,8.2-0.3,12.3
                                c-0.1,0-0.2,0.1-0.4,0.1c-0.5,0.1-0.9,0.2-1.4,0.3h-0.1c-0.2,0-0.5,0.1-0.7,0.1c-0.2,0-0.5,0-0.7,0.1c-0.2,0-0.3,0-0.5,0
                                c-0.3,0-0.6,0-0.8,0h-0.1c-0.5,0-0.9,0-1.4-0.1c-0.1,0-0.2,0-0.2,0c-0.8-0.1-1.5-0.2-2.3-0.3c-0.3-0.1-0.6-0.1-0.9-0.2
                                c-0.5-0.1-1-0.3-1.5-0.4c0,0,0,0,0,0c-0.6-3.9-1.3-7.8-2-11.7c-1.1-6.5-2.3-12.9-3-19.5c-0.7-6.8-0.9-13.6-0.5-20.4l1.2-2l13-0.2
                                l1,1.8c0.6,4,1.1,8.1,1.5,12.1C1156.3,1192.5,1156.6,1197.3,1156.5,1202.1z" 
                            />
                        </g>
                        <g>
                            <path className={`st22 target top ${tooth32Diagnozis.channel_class} ${tooth32Diagnozis.channel_class} ${tooth32Diagnozis.pulpit ? 'pulpit' : ''} ${tooth32Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M1157.1,1297.7c-1.1,0.2-2.2,0.2-3.2,0.2c-0.6,0-1.2,0-1.8-0.1
                                c-0.2-2.6-0.4-5.2-0.6-7.8c-1-13.4-2.1-26.7-3.8-40c-0.9-7.5-2-15-3.2-22.5c0,0,0,0,0,0c0,0,0,0,0,0c0.5,0.2,1,0.3,1.5,0.4
                                c0.3,0.1,0.6,0.1,0.9,0.2c0.8,0.1,1.5,0.2,2.3,0.3c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.4,0h0.1c0.3,0,0.6,0,0.8,0c0.2,0,0.3,0,0.5,0
                                c0.2,0,0.5-0.1,0.7-0.1c0.2,0,0.5-0.1,0.7-0.1h0.1c0.5-0.1,1-0.2,1.4-0.3c0.1,0,0.2-0.1,0.4-0.1c0,0,0,0,0,0c0,4.8,0,9.6,0.1,14.5
                                c0.2,15.7,0.7,31.5,1.1,47.2C1156.9,1292.3,1157,1295,1157.1,1297.7z" 
                            />
                        </g>
                        <g>
                            <path className={`st22 target top ${tooth32Diagnozis.channel_class} ${tooth32Diagnozis.channel_class} ${tooth32Diagnozis.pulpit ? 'pulpit' : ''} ${tooth32Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1158.6,1367.2L1158.6,1367.2c-1.7-13.7-3.2-27.5-4.3-41.3
                                c-0.8-9.4-1.5-18.8-2.2-28.2c0.6,0.1,1.2,0.1,1.8,0.1c1,0,2.1,0,3.2-0.2c0.3,10.9,0.6,21.8,0.9,32.7c0.3,12.3,0.6,24.6,0.8,36.8
                                c0,0.4,0,0.7,0,1.1C1158.7,1367.9,1158.7,1367.6,1158.6,1367.2z"
                            />
                        </g>
                    </g>
                    <g className="toutline" style={{visibility: !tooth32Diagnozis.culttab && !tooth32Diagnozis.abutment && !tooth32Diagnozis.implant && !tooth32Diagnozis.shaper && !tooth32Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1181.3,1130.2c0.1-1.8-0.4-3.5-1.5-4.9c-1-1.3-2.3-2.2-3.8-2.6l-17.6,0.2l-28.2,0.2
                            l-9,0.1c-0.9-0.1-1.7,0.1-2.5,0.6c-1.9,1-2.9,3.2-2.5,5.3c-0.9,12.4-0.6,24.8,0.9,37.1c1.5,12.1,4.1,24,7.7,35.6
                            c0.1,0.4,0.2,0.7,0.3,1.1c2.9,9.1,6.9,18.1,15,22.8c6.9,4,15.3,3.9,22-0.4c5.2-3.4,8.4-8.7,10.8-14.4c1.5-3.7,2.7-7.6,3.7-11.5
                            c1.3-5.4,2.2-11,2.8-16.5C1181.6,1165.3,1182.2,1147.7,1181.3,1130.2z"
                        />
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir" 
                            style={{
                                visibility: tooth32Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth32Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className="st55" d="M1181.29 1130.2C1181.39 1128.4 1180.89 1126.7 1179.79 1125.3C1178.79 1124 1177.49 1123.1 1175.99 1122.7L1158.39 1122.9L1130.19 1123.1L1121.19 1123.2C1120.29 1123.1 1119.49 1123.3 1118.69 1123.8C1116.79 1124.8 1115.79 1127 1116.19 1129.1C1115.29 1141.5 1115.59 1153.9 1117.09 1166.2C1118.59 1178.3 1121.19 1190.2 1124.79 1201.8C1124.89 1202.2 1124.99 1202.5 1125.09 1202.9C1127.99 1212 1131.99 1221 1140.09 1225.7C1146.99 1229.7 1155.39 1229.6 1162.09 1225.3C1167.29 1221.9 1170.49 1216.6 1172.89 1210.9C1174.39 1207.2 1175.59 1203.3 1176.59 1199.4C1177.89 1194 1178.79 1188.4 1179.39 1182.9C1181.59 1165.3 1182.19 1147.7 1181.29 1130.2Z"></path>
                        </g>
                    </g>
                </g>
            </g>
        </>
    )
}
