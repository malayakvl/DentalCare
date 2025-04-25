import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSubDiagnosis, setNewToothActive, setToothDiagnoze, setDisactiveAll, setSelectedToothNumber, settooth27Active } from '../../../Redux/Formula';
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

export default function tooth27() {
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth27Diagnozis = teethDiagnozis.tooth27;
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
                    <path className="st40" d="M1734.1,269c0,0-6.9,35.5-2.1,54.2s30.7,47.3,36.1,69.1
                        c3.9,15.9,3,47.1-4.2,67.9c-3.1,9-7.4,18.1-8.6,26.5c-2.3,16.6,3.1,24.6,5.4,40.5c4,27.7,12.7,61,11.7,92.3
                        c-1.6,49.2,5.2,120.4-65.1,117s-54.3-83.8-55.3-92.8c-0.5-4.3-0.6-14.9-4.3-27.7c-4-14-11.5-34.3-13.7-43
                        c-4.3-16.5,2.9-48.3,11.1-64.8c8.2-16.4,15.7-25.6,6.9-42.9s-13.5-18.7-16.3-50.9s-5.1-62.1-3.8-97.4s5.8-71.8,14.6-83.6
                        c8.8-11.8,25-19,37.2-17.6c12.2,1.4,29.4,0.7,42.9,13.5C1745,246.9,1738.3,253.5,1734.1,269z"
                    />
                </g>
                <g id="T_27" className="common-view" style={{visibility: tooth27Diagnozis.absent ? 'hidden' : 'inherit', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                    {/*CHANGE COLOR*/}
                    <g className="dentin">
                        <g id="dentin_v_27" className="hRoot hImplant hEmpty" style={{visibility: !tooth27Diagnozis.implant && !tooth27Diagnozis.apex && !tooth27Diagnozis.shaper ? 'inherit' : 'hidden'}}>
                            <path id="dentin_v_27" className={`st9 change-color-psr-up ${tooth27Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M1760.3,401.5c-0.1,10.4-3.5,20.7-9.7,29.7l-33.3-6.7l-33.6,10.1l-14.2,14.8
                                c-10-6.6-18.1-15.1-23.6-24.9c-3.3-5.9-5.6-12.2-6.8-18.7c-0.3-4.2-0.4-9-0.4-13.9c0-0.5,0-1,0-1.5c2.8-5.6,6.4-10.8,10.7-15.3
                                c6.5-6.7,14.4-11.9,23.1-15.3c0.2-0.1,0.5-0.2,0.7-0.3c9-3.5,18.6-5.1,28.2-5.8c2.8-0.2,5.5-0.4,8.3-0.5
                                c8.8-0.3,17.6,0.1,26.3,1.1c0.3,0.2,0.6,0.5,0.8,0.8c3.9,6.7,10,12.9,15.7,18.5C1757.8,382.2,1760.4,391.7,1760.3,401.5z"
                            />
                        </g>
                        <g className={`st10 change-color ${tooth27Diagnozis?.change_color ? 'diagnoze' : ''}`} style={{visibility: 'inherit'}}>
                            <path className={`st10 change-color-psr ${tooth27Diagnozis.change_color ? 'diagnoze' : ''}`} 
                                d="M1736.8,355.1c-0.3-0.3-0.6-0.5-0.8-0.8c-8.7-1.1-17.5-1.4-26.3-1.1c-2.8,0.1-5.6,0.2-8.3,0.5
                                c-9.6,0.8-19.2,2.4-28.2,5.8c-0.2,0.1-0.5,0.2-0.7,0.3c-8.7,3.4-16.6,8.6-23.1,15.3c-4.3,4.5-7.9,9.7-10.7,15.3c0,0.5,0,1,0,1.5
                                c0-2.5,0-5-0.1-7.4c-0.1-6.6,0.5-13.1-0.2-19.7c-0.8-8.6-2.1-17.1-2.4-25.7c-0.4-12.1,1.3-24.2,2.8-36.2
                                c1.6-12.6,3.1-25.1,6.2-37.5c1.3-5.3,3-10.6,6.2-15.3c1.3-1.9,2.9-3.8,5.3-4.6c1.7-0.5,3.5-0.5,5.1,0c1.4,0.4,2.5,1.2,3.6,2
                                c5.8,4.9,5.7,12.4,5.3,19.4c-0.5,10.5-0.6,21.2,0,31.6c0.3,5.6,0.9,11.1,1.6,16.8c0.5,4.7,1.1,9.4,3.1,13.7
                                c0.3,0.6,0.6,1.2,0.9,1.8c0.7,1.2,1.5,2.3,2.4,3.3c2.2-1.8,4.2-3.8,6-6c2.7-3.2,4.9-6.8,6.9-10.4c1.4-2.6,2.6-5.3,3.8-8
                                c3.3-7.5,6.2-15.2,8.8-22.9c2.8-8.4,5.1-16.9,7.4-25.4c1.6-5.9,3.3-11.9,7.8-16.5c1.7-1.7,3.8-3.1,6.4-3.3c3.4-0.2,6.3,1.9,8,4.5
                                c1,1.5,1.6,3,1.9,4.7c0.9,4.7-0.9,9.4-2.3,14c-2.9,9.7-3.9,19.7-4.3,29.6c-0.5,12.9,0,25.8,2.5,38.5c1.3,6.3,1,12.6,3.7,18.6
                                C1735.7,352.9,1736.2,354,1736.8,355.1z" 
                            />
                            <path className={`st10 change-color-psr ${tooth27Diagnozis?.change_color ? 'diagnoze' : ''}`}
                                d="M1672.2,259.9c0.1,11.2-0.6,22.4,0,33.6c0.3,6.3,0.9,12.5,1.7,18.8
                                c0.5,3.9,0.9,7.8,1.9,11.6c0.7,2.7,1.7,5.4,3,7.9c2-1.9,3.9-3.9,5.6-6.1c3.1-4.1,5.6-8.7,7.8-13.3c3.2-6.5,6.2-13.2,8.9-20
                                c0.9-12.5-0.5-25.1-4.2-37.1c-1.6-5.3-3.7-10.5-4.9-16c-0.5-2.6-0.9-5.2-1.6-7.7c-0.9-3.5-2.6-6.9-5.7-8.9
                                c-1.4-0.9-3.1-1.4-4.8-1c-2.3,0.6-3.8,2.8-4.9,5c-3.4,7-5.2,14.6-5.7,22.2c0.9,1.3,1.6,2.8,2.1,4.4
                                C1672.1,255.5,1672.2,257.7,1672.2,259.9z" 
                            />
                        </g>
                    </g>
                    {/*PULPIT/CHANNEL NOT SEALED/PART SALED*/}
                    <g className="pulp">
                        <g className="hEmpty hRoot hImplant pulpitis-pfilling">
                            <path className={`st22 target ${tooth27Diagnozis.channel_class}`}
                                d="M1719.1,399.8c-5.9-4.1-13.5-5.7-20.8-4.4c-8.6,1.5-15.8,6.8-19.3,14.1
                                c-2.9-5.3-4.6-11-5.1-16.9c-0.7-7.7,0.8-15.4,0.3-23.1c-0.2-3.3-0.9-6.5-1.7-9.7c0.2-0.1,0.5-0.2,0.7-0.3l0,0
                                c2.2-0.9,4.5-1.6,6.9-2.3c1-0.3,2-0.5,3.1-0.8c6-1.5,12.1-2.3,18.3-2.8c1.2-0.1,2.3-0.2,3.5-0.2c0.9-0.1,1.8-0.1,2.7-0.1
                                c0.6,0,1.2,0,1.8-0.1c0.1,0,0.2,0,0.3,0c0.3,7.2,1,14.4,3.5,21.2c1.6,4.4,3.9,8.5,5.2,13C1719.6,391.5,1719.8,395.7,1719.1,399.8z" 
                            />
                        </g>
                        <g className="hEmpty hImplant pulpitis-pfilling">
                            <path className={`st22 target top ${tooth27Diagnozis.channel_class} ${tooth27Diagnozis.channel_class} ${tooth27Diagnozis.pulpit ? 'pulpit' : ''} ${tooth27Diagnozis.periodontit ? 'periodontit' : ''}`}
                                d="M1713.2,298c-3.1,17.7-4.2,35.6-3.6,53.5c0,0.6,0,1.2,0.1,1.7c-0.1,0-0.2,0-0.3,0
                                c-0.6,0-1.2,0-1.8,0.1c-0.9,0-1.8,0.1-2.7,0.1c-1.2,0.1-2.3,0.2-3.5,0.2c-6.2,0.5-12.3,1.3-18.3,2.8c-1,0.2-2,0.5-3.1,0.8
                                c-2.3,0.7-4.6,1.4-6.8,2.3l0,0c-0.2,0.1-0.5,0.2-0.7,0.3c-2.1-7.9-5.7-15.5-8.6-23.2c-4.2-11-7.1-22.3-8.5-33.9
                                c-0.1-1.1-0.2-2.1-0.3-3.2c0.6-0.4,1.3-0.9,2-1.3c1.6,14,5.4,27.8,11.6,40.9c1.3,2.7,2.8,5.4,4.8,7.6c0.7-5.9,1.3-11.7,1.9-17.6
                                c0,0,0,0,0,0c0.2-1.8,0.4-3.6,0.5-5.5c1-10.8,1.9-21.5,2.7-32.3c2.5-0.3,5.1-0.4,8-0.4c0.3,0,0.6,0,0.9,0c1,8,2.2,15.9,3.6,23.9v0
                                c0.2,1,0.3,2,0.5,3c1.3,7.7,2.8,15.4,4.3,23.1c0.9-2,1.6-4.2,2.2-6.3c4.1-14,8.6-28,12.8-42.1c1.2,0.1,2.3,0.3,3.5,0.4
                                C1713.9,294.7,1713.5,296.3,1713.2,298z"
                            />
                        </g>
                        <g className="hEmpty hImplant pulpitis-pfilling" style={{visibility: 'inherit'}}>
                            <path className={`st22 part ${tooth27Diagnozis.channel_class} ${tooth27Diagnozis.channel_class} ${tooth27Diagnozis.pulpit ? 'pulpit' : ''} ${tooth27Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`} 
                                d="M1655,299.5c0.6-0.4,1.3-0.9,2-1.3c-1.9-17-0.5-34.2,4.3-50.9C1655.6,264.1,1653.4,281.9,1655,299.5z"
                            />
                            <path className={`st22 part ${tooth27Diagnozis.channel_class} ${tooth27Diagnozis.channel_class} ${tooth27Diagnozis.pulpit ? 'pulpit' : ''} ${tooth27Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`} 
                                d="M1681.6,222c-0.5,21.9-1.4,43.8-2.9,65.6c-0.1,1.2-0.2,2.5-0.3,3.7c2.5-0.3,5.1-0.4,8-0.4
                                c0.3,0,0.6,0,0.9,0c-0.4-3.2-0.8-6.4-1.2-9.6C1683.8,261.6,1682.3,241.8,1681.6,222z"
                            />
                            <path className={`st22 part ${tooth27Diagnozis.channel_class} ${tooth27Diagnozis.channel_class} ${tooth27Diagnozis.pulpit ? 'pulpit' : ''} ${tooth27Diagnozis.periodontit ? 'periodontit' : ''} top-sealed-part`} 
                                d="M1718.7,266.9c-2.8,7.5-4.9,15.1-7.1,22.8c-0.3,1-0.6,1.9-0.9,2.9c1.2,0.1,2.3,0.3,3.5,0.4
                                c3.4-17.1,8.8-33.9,15.9-49.9C1725.5,250.7,1721.7,258.7,1718.7,266.9z"
                            />
                        </g>
                    </g>
                    <g className="toutline hRoot hImplant hEmpty" style={{visibility: (!tooth27Diagnozis.culttab && !tooth27Diagnozis.abutment && !tooth27Diagnozis.implant && !tooth27Diagnozis.apex && !tooth27Diagnozis.shaper) ? 'inherit' : 'hidden'}}>
                        <path className="st46" d="M1768.7,393.4c-1.4-4.2-4-7.8-6.8-11.3c-7.8-10-16.4-19.2-25.8-27.7
                            c-0.1,0-0.1-0.1-0.1-0.1c-11.5-1.4-23.1-1.6-34.6-0.7c-9.6,0.8-19.2,2.4-28.2,5.8c-9,3.5-17.2,8.7-23.8,15.6
                            c-4.3,4.5-7.9,9.7-10.7,15.3c0,0.4,0,0.8,0,1.2c-0.2,5.4-0.5,10.7-0.9,16.1c-0.4,5.8-1,11.6-0.9,17.4c0.1,6.8,1.2,13.5,3.2,20
                            c0.8,1.4,1.7,2.8,2.7,4.1c5.8,7.9,14.2,13.3,23.4,16.9c4.2,1.7,8.6,2.9,13,3.8l5.4-1c0.4-1.9,1.3-3.8,2.6-5.3
                            c0.2-0.2,0.4-0.5,0.6-0.7c6.1-6.7,18-7,21.6-15.8c1.3-3.2,1-6.9,0-10.2c-0.7-2.4-1.6-4.7-2.8-6.9l1.9,0.1c0.7,2.7,1.8,5.4,3.1,7.8
                            c1.9,3.6,4.5,6.9,8.1,8.7c5.9,3,12.7,1.4,19.2,1.9c4.1,0.3,8.1,1.5,11.8,3.5l2.1-0.8l2.9-1.1c8.4-9.4,13.4-21.4,14.3-34
                            c0.1-2.1,0.2-4.1,0.2-6.2C1770.2,404.3,1770.5,398.7,1768.7,393.4z"
                        />
                    </g>
                    <g className="hEmpty hImplant hRoot" style={{visibility: 'inherit'}}>
                        <g className="vinir"
                                style={{
                                    visibility: tooth27Diagnozis.vinir ? 'inherit' : 'hidden',
                                    opacity: tooth27Diagnozis.vinir ? 1 : 0
                                }}
                            >
                            <path className={`vinir-fill ${tooth27Diagnozis.vinir_color}`}
                                d="M1768.7 393.399C1767.3 389.199 1764.7 385.599 1761.9 382.099C1754.1 372.099 1745.5 362.899 1736.1 354.399C1736 354.399 1736 354.299 1736 354.299C1724.5 352.899 1712.9 352.699 1701.4 353.599C1691.8 354.399 1682.2 355.999 1673.2 359.399C1664.2 362.899 1656 368.099 1649.4 374.999C1645.1 379.499 1641.5 384.699 1638.7 390.299C1638.7 390.699 1638.7 391.099 1638.7 391.499C1638.5 396.899 1638.2 402.199 1637.8 407.599C1637.4 413.399 1636.8 419.199 1636.9 424.999C1637 431.799 1638.1 
                                438.499 1640.1 444.999C1640.9 446.399 1641.8 447.799 1642.8 449.099C1648.6 456.999 1657 462.399 1666.2 465.999C1670.4 467.699 1674.8 468.899 1679.2 469.799L1684.6 468.799C1685 466.899 1685.9 464.999 1687.2 463.499C1687.4 463.299 1687.6 462.999 1687.8 462.799C1693.9 456.099 1705.8 455.799 1709.4 446.999C1710.7 443.799 1710.4 440.099 1709.4 436.799C1708.7 434.399 1707.8 432.099 1706.6 429.899L1708.5 429.999C1709.2 432.699 1710.3 435.399 1711.6 437.799C1713.5 441.399 
                                1716.1 444.699 1719.7 446.499C1725.6 449.499 1732.4 447.899 1738.9 448.399C1743 448.699 1747 449.899 1750.7 451.899L1752.8 451.099L1755.7 449.999C1764.1 440.599 1769.1 428.599 1770 415.999C1770.1 413.899 1770.2 411.899 1770.2 409.799C1770.2 404.299 1770.5 398.699 1768.7 393.399Z"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </>
    )
}
