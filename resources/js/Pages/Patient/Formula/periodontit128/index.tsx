import React from 'react';
import { useSelector } from "react-redux";
import {
    getTeethDiagnozisSelector,
} from "../../../../Redux/Formula/selectors";



export default function PeriodontitStage28() {
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth28Diagnozis = teethDiagnozis.tooth28;

    return ( 
        <>
            <g className="level hEmpty hImplant"
                style={{
                    visibility: 'inherit',
                    opacity: (tooth28Diagnozis.periodontit_stage === 'st1'  ? 1 : 0)
                    // opacity: ((tooth28Diagnozis.periodontit && (pStage === 'st1' || (activeNumber === 18 && subDiagnozis === 'st1')) ) ? 1 : 0)
                }}>
                <circle className="st42" cx="1836.5" cy="242.8" r="8.2" />
            </g>
            <g className="level hEmpty hImplant"
                style={{
                    visibility: 'inherit',
                    opacity: (tooth28Diagnozis.periodontit_stage === 'st2'  ? 1 : 0)
                }}>
                <circle className="st42" cx="1833.5" cy="236.5" r="17.5" />
            </g>
            <g className="level hEmpty hImplant"
                style={{
                    visibility: 'inherit',
                    opacity: (tooth28Diagnozis.periodontit_stage === 'st3'  ? 1 : 0)
                    // opacity: (((tooth28Diagnozis.periodontit && tooth28Diagnozis.periodontit_stage === 'st3') || activeNumber === '18' && tStage === 'st3')  ? 1 : 0)
                }}>
                <circle className="st42" cx="1836.5" cy="224" r="30" />
            </g>
        </>
    )
}
