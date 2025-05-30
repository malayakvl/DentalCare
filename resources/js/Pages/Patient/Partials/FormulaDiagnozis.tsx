import InputLabel from '../../../Components/Form/InputLabel';
import PrimaryButton from '../../../Components/Form/PrimaryButton';
import { Transition } from '@headlessui/react';
import { Link, router, useForm, usePage } from '@inertiajs/react';
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from "react-redux";
import { appLangSelector } from "../../../Redux/Layout/selectors";
import Lang from "lang.js";
import lngFormula from "../../../Lang/Formula/translation";
import lngPatient from "../../../Lang/Patient/translation";
import InputText from "../../../Components/Form/InputText";
import InputSelect from "../../../Components/Form/InputSelect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent, faPhone, faEnvelope, faFemale, faLocationDot, faMale } from '@fortawesome/free-solid-svg-icons'
import InputTextarea from '../../../Components/Form/InputTextarea';
import { InputMask } from '@react-input/mask';
import moment from "moment";
import axios from 'axios';
import { faUserPlus, faFloppyDisk, faPencil, faTrash, faPrint, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { getTeethDiagnozisSelector } from '@/Redux/Formula/selectors';

export default function FormulaDiagnozis() {
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngPatient,
        locale: appLang,
    });
    const msgFormula = new Lang({
        messages: lngFormula,
        locale: appLang,
    });
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const jawDown = ['tooth48', 'tooth47', 'tooth46', 'tooth45', 'tooth44', 'tooth43', 'tooth42', 'tooth41', 'tooth31', 'tooth32', 'tooth33', 'tooth34', 'tooth35', 'tooth36', 'tooth37', 'tooth38'];
    const _dArray = ['change_color', 'fissure', 'pulpit']

    const renderDiagnoze = (num) => {
        let _diagnozisStr = false;
        const diagnozis = teethDiagnozis[`tooth${num}`];
        if (teethDiagnozis[`tooth${num}`]) {
            Object.keys(teethDiagnozis[`tooth${num}`]).forEach((key, _key) => {
                if (teethDiagnozis[`tooth${num}`][key]) {
                    _diagnozisStr = true;
                }
            });
        }  

        if (_diagnozisStr) {
            return (
                <li className='flex'>
                    <div className="min-w-[70px]">
                        <i className='icon-tooth float-left' />
                        <span className="descr-d"><b>{num}:</b></span>
                    </div>
                    <div className="flex flex-wrap">
                        {Object.keys(teethDiagnozis[`tooth${num}`]).map((_v, _k) => (
                            <React.Fragment key={_k}>{(teethDiagnozis[`tooth${num}`][_v] && _dArray.includes(_v)) && <span className="d-badge"><i className='d-badge-close' />{msgFormula.get(`formula.${_v}`)}</span>}</React.Fragment>
                        ))}
                    </div>
                </li>
            )
        } else {
            return;
        }
    }

    const renderJawUp = () => {
        const jawUp = [18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28];
        return (
            <>
                {jawUp.map((index, num) => (
                    <React.Fragment key={index}>
                        {renderDiagnoze(index)}
                    </React.Fragment>
                ))}
            </>
        );
    }
    
    return (
        <>
            <ul>
                {renderJawUp()}
            </ul>  
        </>
    );
}
