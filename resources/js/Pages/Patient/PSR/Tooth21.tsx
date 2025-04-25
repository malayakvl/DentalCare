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



export default function Tooth21() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth21Diagnozis = teethDiagnozis.tooth21;
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
            <g id="21" className="df-tooth-text" style={{opacity: 1}}>
                <text transform="matrix(1 0 0 1 1076.7275 716.1968)" className={`st3 st4 st5 ${toothActive.tooth21.active ? 'num-active' : ''}`}>21</text>
            </g>
            <g className={`f-tooth-active`}>
                <g className="underlay" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <path className="st40" d="M1088,250.9c0,0-11,37-17,62s-17,119-19,135s-4,66,0,85s10,19,6,31
                        s-8.6,17.1-8.3,32.6c0.3,15.4,1.3,85.4,10.3,112.4s25,28,37,29s37.9-4.6,45-36c7-31,9-104,7-120s-15-20-15-35s14-15,15-58
                        s-1-96,0-111s-1-68-2-85s-6-44-10-53s-8-20-20-20S1097,226.9,1088,250.9z"
                    />
                </g>
                <g id="T_21" className="common-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin">
                        <g id="dentin_v_21" style={{visibility: !tooth21Diagnozis.implant && !tooth21Diagnozis.apex && !tooth21Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_v_21" className={`st10 change-color-psr-up ${tooth21Diagnozis.change_color ? 'diagnoze' : ''}`}  d="M1144,446.6c-0.5,14.5-2.3,29-5.5,43.1l-1.5,1.7l-2.4,1.6
                                c-5.2,0.5-10.4,1-15.6,1.4c-17.7,1.3-35.4,1.8-53.1,1.4l-2.7-1.2l-2.2-2.9c-1.3-9.1-2.3-18.2-2.8-27.3c-0.5-7.7-0.7-15.4-0.2-23v0
                                c3.9-9,9.5-17.3,16.9-23.8c4.8-4.1,10.2-7.4,16.1-9.7c0.9-0.4,1.9-0.7,2.9-1c6.3-2,12.9-2.7,19.2-1.5c2.6,0.5,5.1,1.4,7.4,2.6
                                c8.3,4.3,13.6,12.4,17.3,20.9c2.6,5.8,4.5,11.9,6,18.1c0,0.1,0.1,0.2,0.1,0.4C1143.9,447.2,1144,446.9,1144,446.6z" 
                            />
                        </g>
                        {/*змінений у кольорі*/}
                        <g id="dentin_n_21" style={{visibility: !tooth21Diagnozis.implant && !tooth21Diagnozis.abutment && !tooth21Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_n_21" className={`st10 change-color-psr ${tooth21Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M1144.2,347.6c-0.1,23.2-0.6,46.4-0.3,69.7c0.1,9.8,0.4,19.5,0.1,29.3
                                c0,0.3,0,0.6,0,0.9c0-0.1,0-0.2-0.1-0.4c-1.5-6.2-3.4-12.2-6-18.1c-3.7-8.5-9-16.6-17.3-20.9c-2.4-1.2-4.9-2.1-7.4-2.6
                                c-6.3-1.2-13-0.5-19.2,1.5c-1,0.3-1.9,0.6-2.9,1c-5.9,2.2-11.4,5.5-16.1,9.7c-7.5,6.5-13,14.8-16.9,23.8c0.2-2.4,0.4-4.8,0.7-7.2
                                c1-8,3-15.9,4.5-23.8c2.4-12.6,3.8-25.4,5.6-38.1c3.3-23.2,8-46.3,13-69.3c3.9-17.9,8-35.8,13.9-53.2c3.2-9.3,9-18.6,18.7-18.4
                                c3.3,0.1,6,1.2,8.2,3c0,0,0,0,0,0c5.1,4.1,7.8,11.8,9.9,19c2.2,7.8,5,15.4,6.9,23.3c1.8,7.7,2.8,15.6,3.5,23.5
                                C1144.2,316,1144.2,331.8,1144.2,347.6z"
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g>
                            <path className={`st22 target top ${tooth21Diagnozis.channel_class} ${tooth21Diagnozis.channel_class} ${tooth21Diagnozis.pulpit ? 'pulpit' : ''} ${tooth21Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M1116.7,428.4c0.3,5.5,0,11.1-0.7,16.6c-0.5,4.7-1.3,9.3-2.2,13.9l-1.8,2.1l-22.7,0
                                l-2.2-2.3c-2-7.6-2.7-15.5-1.9-23.3c0.8-7.6,2.8-14.9,4.6-22.4c0.4-1.7,0.8-3.4,1.2-5c0.4-0.2,0.9-0.3,1.3-0.5
                                c0.5-0.2,1-0.4,1.5-0.5c4.4-1.4,9-2.2,13.5-2c0.6,0,1.3,0,1.9,0.1c0.3,0,0.6,0.1,0.9,0.1c0.3,0,0.6,0.1,0.9,0.1
                                c0.3,0,0.6,0.1,0.9,0.1c0.4,0.1,0.7,0.1,1.1,0.2v0C1113,405.1,1116.2,420.2,1116.7,428.4z"
                            />
                        </g>
                        <g>
                            <path className={`st22 target top ${tooth21Diagnozis.channel_class} ${tooth21Diagnozis.channel_class} ${tooth21Diagnozis.pulpit ? 'pulpit' : ''} ${tooth21Diagnozis.periodontit ? 'periodontit' : ''}`} 
                                d="M1112.9,404.3c0.1,0.5,0.1,0.9,0.2,1.3v0c-0.4-0.1-0.7-0.1-1.1-0.2
                                c-0.3,0-0.6-0.1-0.9-0.1s-0.6-0.1-0.9-0.1c-0.3,0-0.6,0-0.9-0.1c-0.6,0-1.3-0.1-1.9-0.1c-4.5-0.1-9.1,0.7-13.5,2
                                c-0.5,0.2-1,0.3-1.5,0.5c-0.4,0.2-0.9,0.3-1.3,0.5c5.1-22.9,7.9-46.2,11.3-69.3c0.9-5.8,1.7-11.6,2.7-17.3
                                c0.6-0.1,1.3-0.2,1.9-0.2c2.6-0.2,5.1-0.2,7.6,0c-0.5,7.2-1,14.4-1.5,21.6C1111.5,363.4,1109.7,383.9,1112.9,404.3z"
                            />
                        </g>
                        <g>
                            <path className={`st22 target top ${tooth21Diagnozis.channel_class} ${tooth21Diagnozis.channel_class} ${tooth21Diagnozis.pulpit ? 'pulpit' : ''} ${tooth21Diagnozis.periodontit ? 'periodontit' : ''}`}  
                                d="M1122.6,234.3c0,0.1,0,0.2,0,0.3c-2.1,15.6-3.8,31.2-5.1,46.8
                                c-1.2,13.3-2.1,26.6-3,39.9c-2.5-0.2-5-0.3-7.6,0c-0.6,0.1-1.3,0.1-1.9,0.2c1.9-11.7,3.9-23.3,6.2-35c3.4-17.4,7.2-34.7,11.4-51.9
                                C1122.6,234.5,1122.6,234.4,1122.6,234.3z" 
                            />
                        </g>
                    </g>
                    <g className="toutline" style={{visibility: !tooth21Diagnozis.culttab && !tooth21Diagnozis.abutment && !tooth21Diagnozis.implant && !tooth21Diagnozis.shaper && !tooth21Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1147.4,467.4c-0.8-6.8-2-13.6-3.6-20.2c-1.5-6.2-3.4-12.2-6-18.1
                            c-3.7-8.5-9-16.6-17.3-20.9c-8.2-4.2-17.8-3.9-26.7-1.1c-7,2.2-13.5,5.9-19,10.7c-7.9,6.9-13.7,15.8-17.6,25.4
                            c-0.3,0.6-0.5,1.3-0.7,1.9c-2.6,6.9-4.3,14.2-5.5,21.5c-1.5,9.8-2,19.7-2,29.5c0,7.3,0.2,14.5,0.6,21.7c0.1,1.6,0.6,3.2,1.2,4.7
                            c0.6,1.3,1.4,2.5,2.4,3.6l2.9,1.2c4.3,0.2,8.6,0.3,12.9,0.3c10.3,0.1,20.6,0,30.9-0.4c7.5-0.3,15-0.7,22.6-1.3
                            c3-0.2,5.9-0.5,8.9-0.8c2.8-1.1,5.3-2.5,7.6-4.4c2.9-2.4,5.3-5.4,7-8.7c0.9-3.5,1.6-7.1,2-10.6
                            C1149.5,490.1,1148.8,478.7,1147.4,467.4z"
                        />
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir" 
                            style={{
                                visibility: tooth21Diagnozis.vinir ? 'inherit' : 'hidden',
                                opacity: tooth21Diagnozis.vinir ? 1 : 0
                            }}
                        >
                            <path className="st55" d="M1147.42 467.4C1146.62 460.6 1145.42 453.8 1143.82 447.2C1142.32 441 1140.42 435 1137.82 429.1C1134.12 420.6 1128.82 412.5 1120.52 408.2C1112.32 404 1102.72 404.3 1093.82 407.1C1086.82 409.3 1080.32 413 1074.82 417.8C1066.92 424.7 1061.12 433.6 1057.22 443.2C1056.92 443.8 1056.72 444.5 1056.52 445.1C1053.92 452 1052.22 459.3 1051.02 466.6C1049.52 476.4 1049.02 486.3 1049.02 496.1C1049.02 503.4 1049.22 510.6 1049.62 517.8C1049.72 519.4 1050.22 521 1050.82 522.5C1051.42 523.8 1052.22 525 1053.22 526.1L1056.12 527.3C1060.42 527.5 1064.72 527.6 1069.02 527.6C1079.32 527.7 1089.62 527.6 1099.92 527.2C1107.42 526.9 1114.92 526.5 1122.52 525.9C1125.52 525.7 1128.42 525.4 1131.42 525.1C1134.22 524 1136.72 522.6 1139.02 520.7C1141.92 518.3 1144.32 515.3 1146.02 512C1146.92 508.5 1147.62 504.9 1148.02 501.4C1149.52 490.1 1148.82 478.7 1147.42 467.4Z"></path>
                        </g>
                    </g>
                </g>
            </g>
        </>
    )
}
