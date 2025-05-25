import React from 'react';

export default function PeriodontitStage72({toothData}) {
    const tooth72Diagnozis = toothData;

    return ( 
        <>
            <g style={{
                    visibility: 'inherit',
                    opacity: (tooth72Diagnozis.periodontit_stage === 'st1'  ? 1 : 0),
                }}
            >
                <circle className="st42" cx="1158.9" cy="1369.9" r="8.2"></circle>
            </g>
            <g style={{
                    visibility: 'inherit',
                    opacity: (tooth72Diagnozis.periodontit_stage === 'st2'  ? 1 : 0)
            }}
            >
                <circle className="st42" cx="1160.2" cy="1376.7" r="17.5"></circle>
            </g>
            <g style={{
                    visibility: 'inherit',
                    opacity: (tooth72Diagnozis.periodontit_stage === 'st3'  ? 1 : 0),
                }}
            >
                <circle className="st42" cx="1164.6" cy="1386.4" r="30"></circle>
            </g>
        </>
    )
}
