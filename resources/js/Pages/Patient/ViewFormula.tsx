import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from "react";
import Lang from "lang.js";
import lngFormula from "../../Lang/Formula/translation";
import lngPatient from "../../Lang/Patient/translation";
import { useSelector, useDispatch } from "react-redux";
import { appLangSelector } from "../../Redux/Layout/selectors";
import { Link, router, useForm, usePage } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPrint, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import FormulaView from "./FormulaView/index";
import Formula from "./Formula/index";

import {
    getDiagnosisSelector,
    getSealColor1Selector,
    getSealColor2Selector,
    getSealColor3Selector,
    getSubDiagnosisSelector,
    teethTypeSelector,
    getSealServicalColorSelector,
    getVinirColorSelector,
    getCeramicCrownColorSelector,
    getCeramicMCrownColorSelector,
    getMetalicCrownColorSelector,
    getZirconiaCrownColorSelector,
    getTeethDiagnozisSelector,
} from '../../Redux/Formula/selectors';
import {
    setTeethType,
    setDiagnosis,
    setSubDiagnosis,
    setSealColor1,
    setSealColor2,
    setSealColor3,
    setSealServicalColor,
    setVinirColor,
    setCeramicCrownColor,
    setMCeramicCrownColor,
    setMetalicCrownColor,
    setZirconiaCrownColor,
    setDiagnosisClass,
    setToothDiagnoze,
    showAllAdult,
    showAllChild,
    setDataDiagnozes
} from '../../Redux/Formula'
import PrimaryButton from '../../Components/Form/PrimaryButton';
import Details from './Partials/Details';

export default function ViewFormula({ formulaData }) {
    const [tab, setTab] = useState('history');
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngPatient,
        locale: appLang,
    });
    const msgFormula = new Lang({
        messages: lngFormula,
        locale: appLang,
    });


    const dispatch = useDispatch<any>();
    const teethType = useSelector(teethTypeSelector);
    const tData = useSelector(getTeethDiagnozisSelector);
    const handleTabClick = (tabName) => {
        setTab(tabName);
    }
    const diagnozis = useSelector(getDiagnosisSelector);
    const subdiagnozis = useSelector(getSubDiagnosisSelector);
    const sealColor1 = useSelector(getSealColor1Selector);
    const sealColor2 = useSelector(getSealColor2Selector);
    const sealColor3 = useSelector(getSealColor3Selector);
    const scColor = useSelector(getSealServicalColorSelector);
    const vinirColor = useSelector(getVinirColorSelector);
    const ceramicCrownColor = useSelector(getCeramicCrownColorSelector);
    const mceramicCrownColor = useSelector(getCeramicMCrownColorSelector);
    const metalicCrownColor = useSelector(getMetalicCrownColorSelector);
    const zirconiaCrownColor = useSelector(getZirconiaCrownColorSelector);

    const fData = JSON.parse(formulaData.formula);
    
    return (
        <div className="py-0 w-full">
            <Formula formulaData={fData} action={'view'} />
        </div>
    );
}
