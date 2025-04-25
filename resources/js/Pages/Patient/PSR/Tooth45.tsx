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

   return (
        <>
            <g className={`f-tooth-active`}
            >
                <g className="underlay" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    <path className="st40" d="M707.8,1213.9c0,0-12,33-17,51s-13,47-17,62s-4,36-28,34s-28-21-26-38
                        s11-50,13-65s6-42,5-66s-1-59,1-75s18-32,20-54s-20-52-22-79c0,0,3.6-77.5,4.3-100.8c0.4-12.7-1.2-39,2.3-61.4
                        c2.9-18.7,8.4-32.8,23.4-37.8c26.6-8.9,49,4,55,36s11,158,11,168c0,36-17,40-17,67c0,37.2,20,41,17,82
                        C731.4,1155.9,715.8,1191.9,707.8,1213.9z"
                    />
                </g>
                <g id="T_45" className="common-view" style={{visibility: 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/* CHANGE COLOR */}
                    <g className="dentin">
                        <g id="dentin_v_45" style={{visibility: !tooth45Diagnozis.implant && !tooth45Diagnozis.apex && !tooth45Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_v_45" className={`st10 change-color-psr-up ${tooth45Diagnozis.change_color ? 'diagnoze' : ''}`}  d="M717.1,1157.8c0,5-0.2,10.1-0.6,15.1c-2.8,8.6-5.5,17.2-8.1,25.8
                                c-0.8,2.7-1.6,5.3-2.4,8c0.8-2.7,1.6-5.3,2.4-8c1-3.2,1.9-6.3,2.9-9.4c-5.8,5.9-12.8,10.5-20.7,13.1c-2.9,0.9-5.8,1.6-8.8,1.9
                                c-5.4,0.6-10.9,0-16-2c-0.5-0.2-0.9-0.4-1.3-0.6c-5.9-2.6-10.9-7-14.6-12.3c-2.5-3.5-4.4-7.3-5.9-11.2c-0.2-4.8-0.5-9.6-0.9-14.3
                                c2-7.1,4.5-14.1,7.5-20.9c2.6-6,5.6-11.9,9-17.6l28.6,8.2l27-0.9C716.3,1141,717,1149.4,717.1,1157.8z"
                            />
                        </g>
                        <g id="dentin_n_45" style={{visibility: !tooth45Diagnozis.implant && !tooth45Diagnozis.abutment && !tooth45Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_n_45" className={`st10 change-color-psr ${tooth45Diagnozis.change_color ? 'diagnoze' : ''}`} 
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
                    </g>
                    <g className="toutline" style={{visibility: !tooth45Diagnozis.culttab && !tooth45Diagnozis.abutment && !tooth45Diagnozis.implant && !tooth45Diagnozis.shaper && !tooth45Diagnozis.apex  ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M731.8,1130c-1.3-2.2-2.9-4.2-4.7-6c-3.1-3.2-6.9-5.7-9.9-8.9c-1.7-1.9-3.2-4-4.5-6.3
                            c-1.1-1.9-2.2-3.8-3.3-5.6c-2-3.6-4.1-7-7.8-9.1c-4-2.2-8.7-2.1-13-0.6c-7.3,2.6-12.6,8.7-19.7,11.8c-0.6,0.2-1.1,0.5-1.7,0.7
                            c-4.1,1.5-8.4,2.2-12.4,3.9c-4.7,2-8.7,5.3-11.5,9.6c-2.2,4-3.9,8.2-4.9,12.7c-2.3,10.2-1,20.8,1.2,31c0.5,2.5,1.1,5,1.8,7.4
                            c1.8,6.7,4.4,13.1,8.4,18.8c3.8,5.3,8.7,9.7,14.7,12.3c8.3,3.6,17.6,3.5,26.2,0.7c9.5-3.1,17.6-9.1,24-16.7
                            c0.1-0.1,0.1-0.1,0.2-0.2c6.9-8.2,11.6-17.9,14.6-28.2c2.1-7.4,3.3-15.1,3.6-22.8L731.8,1130z"
                        />
                    </g>
                </g>
            </g>
        </>
    )
}
