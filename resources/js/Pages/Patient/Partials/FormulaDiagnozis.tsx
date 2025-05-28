import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { appLangSelector } from "../../../Redux/Layout/selectors";
import Lang from "lang.js";
import lngFormula from "../../../Lang/Formula/translation";
import lngPatient from "../../../Lang/Patient/translation";
import { getTeethDiagnozisSelector, getRemoveDiaSelector } from '../../../Redux/Formula/selectors';
import { setToothDiagnoze, setRemoveDia } from "../../../Redux/Formula";

export default function FormulaDiagnozis() {
    const dispatch = useDispatch<any>();
    const appLang = useSelector(appLangSelector);
    const removeDia = useSelector(getRemoveDiaSelector); //important for update state do not remove
    const msg = new Lang({
        messages: lngPatient,
        locale: appLang,
    });
    const msgFormula = new Lang({
        messages: lngFormula,
        locale: appLang,
    });
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const _dArray = [
        'absent',
        'abutment',
        'apex',
        'caries_bottom',
        'caries_center',
        'caries_left',
        'caries_right',
        'caries_top',
        'cervical_caries',
        'change_color',
        'channel_not_sealed',
        'channel_part_sealed',
        'channel_top_sealed',
        'culttab',
        'fissure',
        'implant',
        'parodontit',
        'periodontit',
        'pin',
        'pulpit',
        'shaper',
        'tartar',
        'temporary_crown',
        'wedge_shaped_defect',
    ];
    const dSealArray = [
        'ceramic_crown',
        'seal_cervical',
        'seal_bottom',
        'seal_center',
        'seal_left',
        'seal_right',
        'seal_top',
        'metalic_crown',
        'mceramic_crown',
        'zirconia_crown',
        'vinir',
    ];
    const dMetalicCrownArray = [
        'metalic_crown',
    ];

    const disableDia = (num, key) => {
        const currentDiagnozis = teethDiagnozis;
        currentDiagnozis[`tooth${num}`][`${key}`] = false;
        dispatch(setToothDiagnoze(currentDiagnozis));
        dispatch(setRemoveDia(true));
    }

    const renderDiagnoze = (num) => {
        let _diagnozisStr = false;
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
                        {/*Render tooth 18 dia*/}
                        {Object.keys(teethDiagnozis[`tooth${num}`]).map((_v, _k) => (
                            <React.Fragment key={_k}>
                                {(teethDiagnozis[`tooth${num}`][_v] && _dArray.includes(_v)) ?
                                    <span className="d-badge" onClick={() => disableDia(num, _v)}>
                                        <i className='d-badge-close' />
                                        {msgFormula.get(`formula.${_v}`)}
                                    </span>
                                    : ''
                                }
                                {(teethDiagnozis[`tooth${num}`][_v] && dSealArray.includes(_v)) ?
                                    <span className={`d-badge ${teethDiagnozis[`tooth${num}`][`${_v}_color`]}`} onClick={() => disableDia(num, _v)}>
                                        <i className='d-badge-close' />
                                        {msgFormula.get(`formula.${_v}`)}
                                    </span>
                                    : ''
                                }

                            </React.Fragment>
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
        const jawDown = [48,47,46,45,44,43,42,41,31,32,33,34,35,36,37,38];
        return (
            <div className="w-full flex">
                <div className="w-1/2">
                    {jawUp.map((index, num) => (
                        <React.Fragment key={index}>
                            {renderDiagnoze(index)}
                        </React.Fragment>
                    ))}
                </div>
                <div className="w-1/2">
                    {jawDown.map((index, num) => (
                        <React.Fragment key={index}>
                            {renderDiagnoze(index)}
                        </React.Fragment>
                    ))}
                </div>
            </div>
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
