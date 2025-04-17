import React from 'react';
import { useSelector } from "react-redux";
import {
    getSubDiagnosisSelector,
    getTeethDiagnozisSelector,
    getPeriodontitStage12Selector
} from "../../../../Redux/Formula/selectors";



export default function PeriodontitStage12() {
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth12Diagnozis = teethDiagnozis.tooth12;
    const pStage = useSelector(getPeriodontitStage12Selector);

    return ( 
        <>
            <g style={{
                    visibility: 'inherit',
                    opacity: ((tooth12Diagnozis.periodontit && pStage === 'st1' ) ? 1 : 0)
                }}
            >
                <circle className="st42" cx="888.1" cy="273.3" r="8.2" />
            </g>
            <g style={{
                    visibility: 'inherit',
                    opacity: ((tooth12Diagnozis.periodontit && pStage === 'st2' ) ? 1 : 0)}}
            >
                <circle className="st42" cx="889.1" cy="264.8" r="17.5" />
            </g>
            <g style={{
                    visibility: 'inherit',
                    opacity: ((tooth12Diagnozis.periodontit && pStage === 'st3' ) ? 1 : 0)}}
            >
                <circle className="st42" cx="889.1" cy="252.3" r="30" />
            </g>
        </>
    )
}
