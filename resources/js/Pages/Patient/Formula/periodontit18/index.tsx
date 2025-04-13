import React from 'react';
import { useSelector } from "react-redux";
import {
    getSubDiagnosisSelector,
    getTeethDiagnozisSelector,
    getPeriodontitStage18Selector
} from "../../../../Redux/Formula/selectors";



export default function PeriodontitStage18() {
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth18Diagnozis = teethDiagnozis.tooth18;
    const pStage = useSelector(getPeriodontitStage18Selector);

    return ( 
        <>
            <g className="level hEmpty hImplant"
                style={{
                    visibility: 'inherit',
                    opacity: ((tooth18Diagnozis.periodontit && pStage === 'st1' ) ? 1 : 0)
                }}>
                <circle className="st42" cx="261.6" cy="242.8" r="8.2"/>
            </g>
            <g className="level hEmpty hImplant"
                style={{
                    visibility: 'inherit',
                    opacity: ((tooth18Diagnozis.periodontit && pStage === 'st2' ) ? 1 : 0)
                }}>
                <circle className="st42" cx="264.7" cy="236.5" r="17.5"></circle>
            </g>
            <g className="level hEmpty hImplant"
                style={{
                    visibility: 'inherit',
                    opacity: ((tooth18Diagnozis.periodontit && pStage === 'st3' ) ? 1 : 0)
                }}>
                <circle className="st42" cx="262.6" cy="224" r="30"></circle>
            </g>
        </>
    )
}
