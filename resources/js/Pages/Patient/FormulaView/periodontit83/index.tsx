import React from 'react';
import { useSelector } from "react-redux";
import {
    getTeethDiagnozisSelector,
} from "../../../../Redux/Formula/selectors";



export default function PeriodontitStage83() {
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth83Diagnozis = teethDiagnozis.tooth83;

    return ( 
        <>
            <g style={{
                    visibility: 'inherit',
                    opacity: (tooth83Diagnozis.periodontit_stage === 'st1'  ? 1 : 0),
                }}
            >
                <circle className="st42" cx="856.8" cy="1396.1" r="8.2"></circle>
            </g>
            <g style={{
                    visibility: 'inherit',
                    opacity: (tooth83Diagnozis.periodontit_stage === 'st2'  ? 1 : 0)
            }}
            >
                <circle className="st42" cx="856" cy="1402.3" r="17.5"></circle>
            </g>
            <g style={{
                    visibility: 'inherit',
                    opacity: (tooth83Diagnozis.periodontit_stage === 'st3'  ? 1 : 0),
                }}
            >
                <circle className="st42" cx="852.3" cy="1414.8" r="30"></circle>
            </g>
        </>
    )
}
