import React, { useEffect, useState } from 'react';
import { appLangSelector } from "../../../../Redux/Layout/selectors";
import Lang from "lang.js";
import lngMaterial from "../../../../Lang/Material/translation";
import { useDispatch, useSelector } from "react-redux";
import { setSubDiagnosis, setTooth16Active, setToothDiagnoze, setNewToothActive, setDisactiveAll } from '../../../../Redux/Formula';
import {
    allTeethSelector,
    getDiagnosisSelector,
    getSealColor1Selector,
    getSealColor2Selector,
    getSealColor3Selector,
    getSubDiagnosisSelector,
    getTeethDiagnozisSelector,
    tooth16Selector,
    getSealServicalColorSelector,
    getVinirColorSelector,
    getCeramicCrownColorSelector,
    getCeramicMCrownColorSelector,
    getMetalicCrownColorSelector,
    getZirconiaCrownColorSelector,
    getStatusesSelector,
    getPeriodontitStageSelector
} from "../../../../Redux/Formula/selectors";



export default function PeriodontitStage16({
  className = '',
}) {
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngMaterial,
        locale: appLang,
    });
    const dispatch = useDispatch<any>();
    const toothActive = useSelector(getStatusesSelector);
    const allTeeth = useSelector(allTeethSelector);
    const diagnozis = useSelector(getDiagnosisSelector);
    const subDiagnozis = useSelector(getSubDiagnosisSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const tooth16Diagnozis = teethDiagnozis.tooth16;
    const [diagnozeClass, setDiagnozeClass] = useState('');
    const sealColor1 = useSelector(getSealColor1Selector);
    const sealColor2 = useSelector(getSealColor2Selector);
    const sealColor3 = useSelector(getSealColor3Selector);
    const wsDefectColor = useSelector(getSealServicalColorSelector);
    const vinirColor = useSelector(getVinirColorSelector);
    const ceramicCrownColor = useSelector(getCeramicCrownColorSelector);
    const mceramicCrownColor = useSelector(getCeramicMCrownColorSelector);
    const metalicCrownColor = useSelector(getMetalicCrownColorSelector);
    const zirconiaCrownColor = useSelector(getZirconiaCrownColorSelector);
    const periodontitStage = useSelector(getPeriodontitStageSelector);
console.log('stageAAAA', periodontitStage)
    useEffect(() => {
        console.log('stageAAAA', periodontitStage);
    }, [periodontitStage])

    return ( 
        <>
            <g style={{
                                visibility: 'inherit',
                                opacity: ((tooth16Diagnozis.periodontit && (tooth16Diagnozis.periodontit_stage === 'st1' || subDiagnozis === 'st1' )) ? 1 : 0)
                            }}
                        >
                            <circle className="st42" cx="509.3" cy="248.9" r="8.2" />
                            <circle className="st42" cx="544.9" cy="233.4" r="8.2" />
                            <circle className="st42" cx="582.5" cy="249.9" r="8.2" />
                        </g>
                        <g style={{
                                visibility: 'inherit',
                                opacity: ((tooth16Diagnozis.periodontit && (tooth16Diagnozis.periodontit_stage === 'st2' || subDiagnozis === 'st2')) ? 1 : 0)
                            }}
                        >
                            <circle className="st42" cx="510.6" cy="241.8" r="17.5" />
                            <circle className="st42" cx="547.2" cy="226.2" r="17.5" />
                            <circle className="st42" cx="583.3" cy="241.8" r="17.5" />
                        </g>
                        <g style={{
                                visibility: 'inherit',
                                opacity: ((tooth16Diagnozis.periodontit && (tooth16Diagnozis.periodontit_stage === 'st3' || subDiagnozis === 'st3')) ? 1 : 0)
                            }}
                        >
                            <circle className="st42" cx="581.2" cy="228.1" r="30" />
                            <circle className="st42" cx="545.9" cy="214.1" r="30" />
                            <circle className="st42" cx="509.6" cy="229.3" r="30" />
                        </g>
        </>
    )
}
