
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    getPerioYasen1828VestDataSelector,
    getPerioYasen1828OralDataSelector,
    getPerioZond1828OralDataSelector,
    getPerioZondSelector,
    getPsrChangeSelector,
    getTeethDiagnozisSelector,
} from "../../../Redux/Formula/selectors";
import { setDeepZondData, setPerioDeepZond, setPerioYasen1828VestData, setPsrChange, setToothDiagnoze } from "../../../Redux/Formula";


export default function YasenKray({toothNum,type = 'vest', idx = 0}) {
    const [value, setValue] = useState('');
    const dispatch = useDispatch<any>();
    // const perioData = useSelector(getPerioZondSelector);
    const yasen1828VestData = useSelector(getPerioYasen1828VestDataSelector);
    const zond1828OralData = useSelector(getPerioYasen1828OralDataSelector);
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
                    id={`t_${idx}`}
                    onChange={(e) => {
                        e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                        if (((toothNum >=11 && toothNum <= 18) || (toothNum >=21 && toothNum <= 28)) && type === 'vest') {
                            const _pDataVestNew = yasen1828VestData;
                            _pDataVestNew[(18-toothNum)*4 +1] = -parseInt(e.target.value);
                            dispatch(setPerioYasen1828VestData(_pDataVestNew));
                            dispatch(setPsrChange(!psrChange));
                            // перерасчет медиани
                            if (toothNum != 18) {
                                _pDataVestNew[(18-toothNum)*4] = -((_pDataVestNew[(18-toothNum)*4 +1] + _pDataVestNew[(18-toothNum)*4 -1])/2);
                            }
                        }
                    }}
                    className="psr-input bottom focus:outline-hidden" 
                    value={-yasen1828VestData[idx]}
                    type="text" 
                />
                <input 
                    onChange={(e) => {
                        e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                        if (((toothNum >=11 && toothNum <= 18) || (toothNum >=21 && toothNum <= 28)) && type === 'vest') {
                            const _pDataVestNew = yasen1828VestData;
                            _pDataVestNew[(18-toothNum)*4 +2] = -parseInt(e.target.value);
                            dispatch(setPerioYasen1828VestData(_pDataVestNew));
                            dispatch(setPsrChange(!psrChange));
                        }
                    }}
                    className="psr-input bottom focus:outline-hidden" 
                    value={-yasen1828VestData[idx + 1]}
                    type="text" 
                />
                <input 
                    onChange={(e) => {
                        e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                        if (((toothNum >=11 && toothNum <= 18) || (toothNum >=21 && toothNum <= 28)) && type === 'vest') {
                            const _pDataVestNew = yasen1828VestData;
                            dispatch(setPerioYasen1828VestData(_pDataVestNew));
                            dispatch(setPsrChange(!psrChange));
                            _pDataVestNew[(18-toothNum)*4 +3] = -parseInt(e.target.value);
                            _pDataVestNew[(18-toothNum)*4 +4] = -((_pDataVestNew[(18-toothNum)*4 +3] + _pDataVestNew[(18-toothNum)*4 +5])/2);
                        }
                    }}
                    className="psr-input bottom focus:outline-hidden" 
                    value={-yasen1828VestData[idx + 2]}
                    type="text" 
                />
            </div>
        </>
    )
}
