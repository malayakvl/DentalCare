import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSubDiagnosis, setNewToothActive, setToothDiagnoze, setDisactiveAll, setSelectedToothNumber, setTooth17Active } from '../../../Redux/Formula';
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

export default function Tooth17() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth17Diagnozis = teethDiagnozis.tooth17;
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
                <g className="underlay" style={{visibility: "inherit"}}>
                    <path className="st40" d="M364,271c0,0,6.9,35.5,2.1,54.2s-31.7,47.3-37.1,69.1c-3.9,15.9-6,47.1,1.2,67.9
                        c3.1,9,11.4,18.1,12.6,26.5c2.3,16.6-3.1,24.6-5.4,40.5c-4,27.7-12.7,61-11.7,92.3c1.6,49.2-5.2,120.4,65.1,117
                        s54.3-83.8,55.3-92.8c0.5-4.3,0.6-14.9,4.3-27.7c4-14,11.5-34.3,13.7-43c4.3-16.5-2.9-48.3-11.1-64.8c-8.2-16.4-15.7-25.6-6.9-42.9
                        s13.5-18.7,16.3-50.9c2.7-32.3,5.1-62.1,3.8-97.4s-5.8-71.8-14.6-83.6c-8.8-11.8-25-19-37.2-17.6c-12.2,1.4-29.4,0.7-42.9,13.5
                        C353.1,248.9,359.8,255.5,364,271z"
                    />
                </g>
                <g id="T_17" className="common-view" style={{visibility: tooth17Diagnozis.absent ? 'hidden' : 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/*CHANGE COLOR*/}
                    <g className="dentin">
                        <g id="dentin_v_17" className="hRoot hImplant hEmpty" style={{visibility: !tooth17Diagnozis.implant && !tooth17Diagnozis.apex && !tooth17Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_v_17" className={`st9 change-color-psr-up ${tooth17Diagnozis.change_color ? 'diagnoze' : ''}`} d="M460,405.8c-1.2,6.5-4.5,12.8-7.8,18.7c-5.5,9.8-13.5,18.3-23.6,24.9
                                l-14.2-14.8l-33.6-10.1l-33.3,6.7c-6.2-9-9.6-19.3-9.7-29.7c-0.1-9.7,2.5-19.3,7.7-27.9c6.3-6.1,12.2-11.3,15.8-18.6
                                c0.2-0.2,0.5-0.4,0.7-0.6c8.7-1,17.5-1.4,26.3-1.1c2.8,0.1,5.5,0.2,8.3,0.5c9.6,0.8,19.2,2.4,28.2,5.8c0.2,0.1,0.5,0.2,0.7,0.3
                                c8.7,3.4,16.6,8.6,23.1,15.3c4.3,4.5,7.9,9.6,10.7,15.3c0,1.4,0.1,2.8,0.1,4.1C459.6,398.3,459.8,402.1,460,405.8z"
                            />
                        </g>
                        {/* CHANGE COLOR */}
                        <g id="dentin_n_17" style={{visibility: !tooth17Diagnozis.implant && !tooth17Diagnozis.abutment && !tooth17Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path className={`st10 change-color-psr ${tooth17Diagnozis.change_color ? 'diagnoze' : ''}`} d="M462,339.2c-0.3,8.6-1.5,17.1-2.4,25.7c-0.6,6.5,0,13.1-0.2,19.7
                                c-0.1,3.3-0.1,6.7,0,10c0-1.4-0.1-2.8-0.1-4.1c-2.8-5.6-6.4-10.8-10.7-15.3c-6.5-6.7-14.4-11.9-23.1-15.3
                                c-0.2-0.1-0.5-0.2-0.7-0.3c-9-3.5-18.6-5.1-28.2-5.8c-2.8-0.2-5.5-0.4-8.3-0.5c-8.8-0.3-17.6,0.1-26.3,1.1
                                c-0.2,0.2-0.5,0.4-0.7,0.6c0.2-0.4,0.4-0.8,0.6-1.2c2.7-6,3.5-14.2,4.7-20.6c2.5-12.7,3-25.6,2.5-38.5c-0.4-10-1.4-19.9-4.3-29.6
                                c-1.4-4.6-3.2-9.3-2.3-14c0.3-1.7,0.9-3.2,1.9-4.7c1.7-2.6,4.6-4.7,8-4.5c2.6,0.1,4.8,1.6,6.4,3.3c4.5,4.5,6.2,10.6,7.8,16.5
                                c2.3,8.5,4.6,17,7.4,25.4c2.5,7.7,5.5,15.4,8.8,22.9c1.2,2.7,2.4,5.4,3.8,8c1.9,3.6,4.1,7.1,6.9,10.4c1.8,2.1,3.8,4.1,6,6
                                c0.9-1,1.7-2.1,2.4-3.3c0.3-0.6,0.6-1.2,0.9-1.8v0c2-4.3,2.6-9,3.1-13.6c0.6-5.7,1.2-11.1,1.6-16.8c0.6-10.4,0.5-21.1,0-31.6
                                c-0.3-7-0.4-14.5,5.3-19.4c1-0.9,2.2-1.6,3.6-2c1.7-0.5,3.5-0.6,5.1,0c2.4,0.8,4,2.7,5.3,4.6c3.2,4.7,4.8,10,6.2,15.3
                                c3.1,12.3,4.6,24.9,6.2,37.5C460.8,315,462.4,327.1,462,339.2z"
                            />
                            <path className={`st10 change-color-psr ${tooth17Diagnozis?.change_color ? 'diagnoze' : ''}`} d="M405.9,312.3c2.3,4.6,4.7,9.2,7.8,13.3c1.7,2.2,3.5,4.3,5.6,6.1
                                c1.3-2.5,2.3-5.2,3-7.9c1-3.8,1.5-7.7,1.9-11.6c0.7-6.2,1.4-12.5,1.7-18.8c0.5-11.2-0.2-22.4,0-33.6c0-2.2,0.1-4.4,0.7-6.6
                                c0.4-1.6,1.1-3.1,2.1-4.4c-0.4-7.7-2.2-15.2-5.7-22.2c-1.1-2.2-2.6-4.4-4.9-5c-1.6-0.4-3.3,0.1-4.8,1c-3,1.9-4.7,5.4-5.6,8.9
                                c-0.7,2.5-1,5.1-1.6,7.7c-1.2,5.5-3.3,10.6-4.9,16c-3.7,12-5.1,24.6-4.2,37.1C399.7,299.1,402.7,305.7,405.9,312.3z"
                            />
                        </g>
                    </g>

                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g className={`hEmpty hRoot hImplant pulpitis-pfilling`}>
                            <path className={`st22 target ${tooth17Diagnozis.channel_class}`}
                                d="M424.2,392.7c-0.5,5.9-2.2,11.6-5.1,16.9c-3.5-7.3-10.7-12.6-19.3-14.1
                                c-7.3-1.3-14.9,0.3-20.8,4.4c-0.7-4.1-0.4-8.4,0.7-12.4c1.3-4.4,3.6-8.6,5.2-13c2.5-6.8,3.2-14,3.5-21.2c2.8,0.1,5.6,0.2,8.3,0.5
                                c9.6,0.8,19.2,2.4,28.2,5.8c0.2,0.1,0.5,0.2,0.7,0.3c-0.8,3.2-1.5,6.4-1.7,9.7C423.3,377.2,424.8,384.9,424.2,392.7z"
                            />
                        </g>
                        <g className="hEmpty hImplant pulpitis-pfilling">
                            <path className={`st22 target top ${tooth17Diagnozis.channel_class} ${tooth17Diagnozis.channel_class} ${tooth17Diagnozis.pulpit ? 'pulpit' : ''} ${tooth17Diagnozis.periodontit ? 'periodontit' : ''}`}
                                d="M443.5,290.9c-0.1,3.9-0.4,7.9-0.8,11.8c-1.3,11.6-4.3,22.9-8.5,33.9
                                c-2.9,7.7-6.5,15.3-8.6,23.2c-0.2-0.1-0.5-0.2-0.8-0.3c-9-3.5-18.6-5.1-28.2-5.8c-2.8-0.2-5.5-0.4-8.3-0.5c0-0.6,0-1.2,0.1-1.7
                                c0.6-17.9-0.5-35.9-3.6-53.5c-0.4-2.4-0.9-4.7-1.4-7h3.4c4.3,14.6,9,29.1,13.3,43.7c0.6,2.1,1.3,4.3,2.2,6.3
                                c1.6-7.7,3-15.4,4.3-23.2c0.2-1,0.3-2,0.5-3c1.3-7.9,2.5-15.9,3.6-23.9h8.9c0.8,10.9,1.7,21.8,2.7,32.7c0.2,1.8,0.4,3.6,0.5,5.5
                                c0.6,5.9,1.2,11.8,1.9,17.6c1.9-2.2,3.5-4.9,4.8-7.6c7.2-15.4,11.2-31.7,12.2-48.1H443.5z"
                            />
                        </g>
                        <g className="hEmpty hImplant pulpitis-pfilling">
                            <path className={`st22 part ${tooth17Diagnozis.channel_class} ${tooth17Diagnozis.channel_class} ${tooth17Diagnozis.pulpit ? 'pulpit' : ''} ${tooth17Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`} 
                                d="M379.4,266.9c-3-8.2-6.9-16.2-11.4-23.8c6.8,15.4,12,31.4,15.5,47.8h3.4c-0.1-0.4-0.2-0.8-0.4-1.3
                                C384.3,282,382.1,274.4,379.4,266.9z"
                            />
                            <path className={`st22 part ${tooth17Diagnozis.channel_class} ${tooth17Diagnozis.channel_class} ${tooth17Diagnozis.pulpit ? 'pulpit' : ''} ${tooth17Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`} 
                                d="M416.4,222c-0.7,19.8-2.2,39.6-4.5,59.3c-0.4,3.2-0.8,6.4-1.2,9.6h8.9c-0.1-1.1-0.2-2.2-0.2-3.3
                                C417.9,265.8,416.9,243.9,416.4,222z"
                            />
                            <path className={`st22 target part ${tooth17Diagnozis.channel_class} ${tooth17Diagnozis.channel_class} ${tooth17Diagnozis.pulpit ? 'pulpit' : ''} ${tooth17Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`} 
                                d="M436.7,247.3c4.1,14.3,5.8,29,5,43.6h1.8c0-0.9,0-1.8,0-2.8C443.5,274.3,441.2,260.5,436.7,247.3z" />
                        </g>
                    </g>
                    <g className="toutline hRoot hImplant hEmpty" style={{visibility: (!tooth17Diagnozis.culttab && !tooth17Diagnozis.abutment && !tooth17Diagnozis.implant && !tooth17Diagnozis.apex && !tooth17Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M460.3,407.7c-0.4-5.3-0.7-10.7-0.9-16.1c0-0.4,0-0.8,0-1.2
                            c-2.8-5.6-6.3-10.8-10.7-15.3c-6.7-6.9-14.8-12.1-23.8-15.6c-9-3.5-18.6-5.1-28.2-5.8c-11.5-0.9-23.1-0.7-34.6,0.7
                            c-0.1,0-0.1,0.1-0.1,0.1c-9.4,8.5-18,17.7-25.8,27.7c-2.7,3.5-5.4,7.1-6.8,11.3c-1.8,5.2-1.5,10.8-1.3,16.4
                            c0.1,2.1,0.1,4.1,0.2,6.2c0.9,12.6,5.9,24.6,14.3,34l2.9,1.1l2.1,0.8c3.6-2,7.6-3.1,11.8-3.5c6.5-0.5,13.3,1.1,19.2-1.9
                            c3.6-1.8,6.1-5.1,8.1-8.7c1.3-2.5,2.4-5.1,3.1-7.8l1.9-0.1c-1.2,2.2-2.1,4.5-2.8,6.9c-0.9,3.4-1.3,7,0,10.2
                            c3.6,8.8,15.5,9.1,21.6,15.8c0.2,0.2,0.4,0.5,0.6,0.7c1.2,1.6,2.1,3.4,2.6,5.3l5.4,1c4.4-0.9,8.8-2.1,13-3.8
                            c9.1-3.6,17.5-9,23.4-16.9c1-1.3,1.9-2.7,2.7-4.1c2-6.5,3-13.2,3.2-20C461.3,419.3,460.7,413.5,460.3,407.7z"
                        />
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{ visibility: "inherit" }}>
                        <g className="vinir"
                                style={{
                                    visibility: tooth17Diagnozis.vinir ? 'inherit' : 'hidden',
                                    opacity: tooth17Diagnozis.vinir ? 1 : 0
                                }}
                            >
                            <path className={`vinir-fill ${tooth17Diagnozis.vinir_color}`}
                                  d="M460.3 407.7C459.9 402.4 459.6 397 459.4 391.6C459.4 391.2 459.4 390.8 459.4 390.4C456.6 384.8 453.1
                                  379.6 448.7 375.1C442 368.2 433.9 363 424.9 359.5C415.9 356 406.3 354.4 396.7 353.7C385.2 352.8 373.6
                                  353 362.1 354.4C362 354.4 362 354.5 362 354.5C352.6 363 344 372.2 336.2 382.2C333.5 385.7 330.8 389.3
                                  329.4 393.5C327.6 398.7 327.9 404.3 328.1 409.9C328.2 412 328.2 414 328.3 416.1C329.2 428.7 334.2 440.7
                                  342.6 450.1L345.5 451.2L347.6 452C351.2 450 355.2 448.9 359.4 448.5C365.9 448 372.7 449.6 378.6 446.6C382.2
                                  444.8 384.7 441.5 386.7 437.9C388 435.4 389.1 432.8 389.8 430.1L391.7 430C390.5 432.2 389.6 434.5 388.9
                                  436.9C388 440.3 387.6 443.9 388.9 447.1C392.5 455.9 404.4 456.2 410.5 462.9C410.7 463.1 410.9 463.4 411.1
                                  463.6C412.3 465.2 413.2 467 413.7 468.9L419.1 469.9C423.5 469 427.9 467.8 432.1 466.1C441.2 462.5 449.6 457.1
                                  455.5 449.2C456.5 447.9 457.4 446.5 458.2 445.1C460.2 438.6 461.2 431.9 461.4 425.1C461.3 419.3 460.7 413.5
                                  460.3 407.7Z"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </>
    )
}
