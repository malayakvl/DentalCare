import React from 'react';
import { useSelector } from "react-redux";
import {
    getSubDiagnosisSelector,
    getTeethDiagnozisSelector,
    getPeriodontitStage17Selector
} from "../../../../Redux/Formula/selectors";



export default function PeriodontitStage17() {
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth17Diagnozis = teethDiagnozis.tooth17;
    const pStage = useSelector(getPeriodontitStage17Selector);

console.log('STAGE:', pStage);    
    return ( 
        <>
            <g className="level hEmpty hImplant periodontitis" data-level="1" data-position="17"
                style={{
                    opacity: ((tooth17Diagnozis.periodontit && pStage === 'st1' ) ? 1 : 0),
                    visibility: "inherit"
            }}>
                <circle className="st42" cx="362.8" cy="237.3" r="8.2"></circle>
                <circle className="st42" cx="414" cy="215" r="8.2"></circle>
                <circle className="st42" cx="433" cy="239.6" r="8.2"></circle>
            </g>
            <g className="level hEmpty hImplant periodontitis" data-level="2" data-position="17"
                style={{
                    opacity: ((tooth17Diagnozis.periodontit && pStage === 'st2' ) ? 1 : 0),
                    visibility: "inherit"
            }}>
                <circle className="st42" cx="364" cy="229.2" r="17.5"></circle>
                <circle className="st42" cx="416.4" cy="206.8" r="17.5"></circle>
                <circle className="st42" cx="435.8" cy="231.3" r="17.5"></circle>
            </g>
            <g className="level hEmpty hImplant periodontitis" data-level="3" data-position="17"
                style={{
                    opacity: ((tooth17Diagnozis.periodontit && pStage === 'st3' ) ? 1 : 0),
                    visibility: "inherit"
            }}>
                <circle className="st42" cx="433.9" cy="218.8" r="30"></circle>
                <circle className="st42" cx="412.6" cy="194.1" r="30"></circle>
                <circle className="st42" cx="364" cy="215.8" r="30"></circle>
            </g>
        </>
    )
}
