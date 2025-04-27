
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    getPerioZond1828OralDataSelector,
    getPerioZond1828VestDataSelector,
    getPerioZondSelector,
    getPsrChangeSelector,
    getTeethDiagnozisSelector,
} from "../../../Redux/Formula/selectors";
import { setDeepZondData, setPerioDeepZond, setPerioZond1828VestData, setPsrChange, setToothDiagnoze } from "../../../Redux/Formula";


export default function DeepZond({toothNum,type = 'vest'}) {
    const [value, setValue] = useState('');
    const dispatch = useDispatch<any>();
    const perioData = useSelector(getPerioZondSelector);
    const zond1828VestData = useSelector(getPerioZond1828VestDataSelector);
    const zond1828OralData = useSelector(getPerioZond1828OralDataSelector);
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
                    // value={value}
                    onChange={(e) => {
                        e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                        if ((toothNum >=18 && toothNum <= 28) && type === 'vest') {
                            const _pDataVestNew = zond1828VestData;
                            _pDataVestNew[toothNum - 17] = parseInt(e.target.value);
                            dispatch(setPerioZond1828VestData(_pDataVestNew));
                            dispatch(setPsrChange(!psrChange));
                            console.log(type, _pDataVestNew);
                        }
                        // console.log(toothNum, zondData);

                        // teethDiagnozis[`tooth${toothNum}`].psr1 = parseInt(e.target.value);
                        // dispatch(setToothDiagnoze(teethDiagnozis));
                        // dispatch(setPsrChange(!psrChange));
                        // const _pDataNew = zondData;
                        // _pDataNew[0] = parseInt(e.target.value);
                        // dispatch(setDeepZondData(_pDataNew));
                    }}
                    className="psr-input bottom focus:outline-hidden" 
                    type="text" 
                />
                <input 
                    onChange={(e) => {
                        e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                        if ((toothNum >=18 && toothNum <= 28) && type === 'vest') {
                            const _pDataVestNew = zond1828VestData;
                            _pDataVestNew[toothNum - 16] = parseInt(e.target.value);
                            dispatch(setPerioZond1828VestData(_pDataVestNew));
                            dispatch(setPsrChange(!psrChange));
                            console.log(type, _pDataVestNew);
                        }
                        // teethDiagnozis[`tooth${toothNum}`].psr2 = parseInt(e.target.value);
                        // dispatch(setToothDiagnoze(teethDiagnozis));
                        // dispatch(setPsrChange(!psrChange));
                        // const _pDataNew = zondData;
                        // _pDataNew[1] = parseInt(e.target.value);
                        // dispatch(setDeepZondData(_pDataNew));
                    }}
                    className="psr-input bottom focus:outline-hidden" 
                    type="text" 
                />
                <input 
                    onChange={(e) => {
                        e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                        if ((toothNum >=18 && toothNum <= 28) && type === 'vest') {
                            const _pDataVestNew = zond1828VestData;
                            _pDataVestNew[toothNum - 14] = 2.5;
                            _pDataVestNew[toothNum - 15] = parseInt(e.target.value);
                            dispatch(setPerioZond1828VestData(_pDataVestNew));
                            dispatch(setPsrChange(!psrChange));
                            console.log(type, _pDataVestNew);
                        }
                        // teethDiagnozis[`tooth${toothNum}`].psr3 = parseInt(e.target.value);
                        // dispatch(setToothDiagnoze(teethDiagnozis));
                        // dispatch(setPsrChange(!psrChange));
                        // const _pDataNew = zondData;
                        // _pDataNew[2] = parseInt(e.target.value);
                        // dispatch(setDeepZondData(_pDataNew));
                    }}
                    className="psr-input bottom focus:outline-hidden" 
                    type="text" 
                />
            </div>
        </>
    )
}
