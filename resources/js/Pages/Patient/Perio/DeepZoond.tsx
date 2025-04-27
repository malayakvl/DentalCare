
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    getPerioZondDataSelector,
    getPerioZondSelector,
    getPsrChangeSelector,
    getTeethDiagnozisSelector,
} from "../../../Redux/Formula/selectors";
import { setDeepZondData, setPerioDeepZond, setPsrChange, setToothDiagnoze } from "../../../Redux/Formula";


export default function DeepZond({toothNum}) {
    const [value, setValue] = useState('');
    const dispatch = useDispatch<any>();
    const perioData = useSelector(getPerioZondSelector);
    const zondData = useSelector(getPerioZondDataSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const psrChange = useSelector(getPsrChangeSelector);
    // const tooth11Diagnozis = teethDiagnozis.tooth11;
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const inputStyle = {
        color: Number(value) > 5 ? 'red' : Number(value) === 5 ? 'blue' : 'green' // если больше 5 — красный, иначе черный
      };


    return ( 
        <>
            <div className="col-xs-12 action-zone-v" data-zone="22">
                <input 
                    onChange={(e) => {
                        e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                        const _pData = perioData[toothNum];
                        teethDiagnozis[`tooth${toothNum}`].psr1 = parseInt(e.target.value);
                        dispatch(setToothDiagnoze(teethDiagnozis));
                        dispatch(setPsrChange(!psrChange));
                        const _pDataNew = zondData;
                        _pDataNew[0] = parseInt(e.target.value);
                        dispatch(setDeepZondData(_pDataNew));
                    }}
                    className="psr-input bottom focus:outline-hidden" 
                    type="text" 
                />
                <input 
                    // value={value}
                    onChange={(e) => {
                        e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green'
                    }}
                    className="psr-input bottom focus:outline-hidden" 
                    type="text" 
                />
                <input 
                    // value={value}
                    onChange={(e) => {
                        e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green'
                    }}
                    className="psr-input bottom focus:outline-hidden" 
                    type="text" 
                />
            </div>
        </>
    )
}
