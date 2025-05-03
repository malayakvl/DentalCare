
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    getPerioZ1828VDataSelector,
    getPerioYK1828VDataSelector,

    getPerioZond1828OralDataSelector,
    getPerioZond1828VestDataSelector,
    getPsrChangeSelector,
} from "../../../Redux/Formula/selectors";
import { setPerioZond1828VestData, setPerioZ1828VData, setPsrChange } from "../../../Redux/Formula";


export default function DeepZond({toothNum,type = 'vest', idx = 0}) {
    const [value, setValue] = useState('');
    const dispatch = useDispatch<any>();
    // const perioData = useSelector(getPerioZondSelector);
    const zond1828VestData = useSelector(getPerioZond1828VestDataSelector);

    const zv1828Data = useSelector(getPerioZ1828VDataSelector);
    const ykv1828Data = useSelector(getPerioYK1828VDataSelector);


    // const zond1828OralData = useSelector(getPerioZond1828OralDataSelector);
    // const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const psrChange = useSelector(getPsrChangeSelector);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const inputStyle = {
        color: Number(value) > 5 ? 'red' : Number(value) === 5 ? 'blue' : 'green' // если больше 5 — красный, иначе черный
    };

    const recultArr = (data) => {
        console.log('DATA', zv1828Data);
        let arr = [1, 4, 5, 1, 5, 2, 4, 0, 1, 3, 5, 7];
let result = [];

for (let i = 0; i < arr.length; i++) {
  result.push(arr[i]);

  // После каждого третьего элемента (индекс 2, 5, 8, ...)
  if ((i + 1) % 3 === 0 && i + 1 < arr.length) {
    let avg = (arr[i] + arr[i + 1]) / 2;
    result.push(avg);
  }
}

console.log('RESULT', result);    
    }
    return ( 
        <>
            <div className="col-xs-12 action-zone-v" data-zone="22">
                <input 
                    onChange={(e) => {
                        e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                        if (((toothNum >=11 && toothNum <= 18) || (toothNum >=21 && toothNum <= 28)) && type === 'vest') {
                            const _pDataVestNew = zond1828VestData;
                            _pDataVestNew[(18-toothNum)*4 +1] = parseInt(e.target.value);

                            const _pZData = zv1828Data;
                            const _pYKData = ykv1828Data;
                            _pZData[idx] = parseInt(e.target.value);

                            
                            // _pZData[idx - 1] = (_pYKData[idx - 1] ? -_pYKData[idx - 1] : 0) + parseInt(e.target.value);
                            // console.log('Calc v:', _pZData[0]);

                            // prepare combine data
                            // console.log('Calc al:', _pZData.length);
                            // console.log('Calc al:', _pZData[0]);
                            // const combArray = [];
                            // combArray.push(0);

                            // let arr = _pZData; // Пример массива [1, 2, 3, ..., 48]
                            // let result = [];

                            


                            dispatch(setPerioZ1828VData(_pZData));
                            dispatch(setPerioZond1828VestData(_pDataVestNew));
                            dispatch(setPsrChange(!psrChange));

                            // recultArr(_pZData);
                            // перерасчет медиани
                            // if (toothNum != 18) {
                            //     _pDataVestNew[(18-toothNum)*4] = (_pDataVestNew[(18-toothNum)*4 +1] + _pDataVestNew[(18-toothNum)*4 -1])/2;
                            // }
                        }
                    }}
                    className="psr-input bottom focus:outline-hidden" 
                    value={zv1828Data[idx]}
                    type="text" 
                />
                <input 
                    onChange={(e) => {
                        e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                        if (((toothNum >=11 && toothNum <= 18) || (toothNum >=21 && toothNum <= 28)) && type === 'vest') {
                            const _pDataVestNew = zond1828VestData;
                            _pDataVestNew[(18-toothNum)*4 +2] = parseInt(e.target.value);
                            dispatch(setPerioZond1828VestData(_pDataVestNew));
                            dispatch(setPsrChange(!psrChange));

                            const _pZData = zv1828Data;
                            const _pYKData = ykv1828Data;
                            _pZData[idx + 1] =  parseInt(e.target.value);
                            dispatch(setPerioZ1828VData(_pZData));

                            // const combArray = [];
                            // combArray.push(0);
                            // for (var i=0; i<_pZData.length - 1;i++) {
                            //     combArray.push(_pZData[i]);
                            //     if ([2,6].includes(i)) {
                            //         combArray.push((_pZData[i] + _pZData[i+1])/2);
                            //         console.log('Calc mediana');
                            //     }
                            // }
                            
                            // const _pData = zond1828NewVestData;
                            // _pData[idx] = parseInt(e.target.value);
                            // dispatch(setPerioZondNew1828VestData(_pData));
                        }
                    }}
                    className="psr-input bottom focus:outline-hidden" 
                    // value={zv1828Data[idx]}
                    value={zv1828Data[idx + 1]}
                    type="text" 
                />
                <input 
                    onChange={(e) => {
                        e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                        if (((toothNum >=11 && toothNum <= 18) || (toothNum >=21 && toothNum <= 28)) && type === 'vest') {
                            const _pDataVestNew = zond1828VestData;
                            dispatch(setPerioZond1828VestData(_pDataVestNew));
                            dispatch(setPsrChange(!psrChange));
                            _pDataVestNew[(18-toothNum)*4 +3] = parseInt(e.target.value);
                            _pDataVestNew[(18-toothNum)*4 +4] = (_pDataVestNew[(18-toothNum)*4 +3] + _pDataVestNew[(18-toothNum)*4 +5])/2;


                            const _pZData = zv1828Data;
                            const _pYKData = ykv1828Data;
                            _pZData[idx + 2] =  parseInt(e.target.value);
                            // _pZData[idx + 1] = (_pYKData[idx + 1] ? -_pYKData[idx + 1] : 0) + parseInt(e.target.value);
                            dispatch(setPerioZ1828VData(_pZData));

                            // const combArray = [];
                            // combArray.push(0);
                            // for (var i=0; i<_pZData.length - 1;i++) {
                            //     combArray.push(_pZData[i]);
                            //     console.log(i, [2,6].includes(i));
                            //     if ([2,6].includes(i)) {
                            //         combArray.push((_pZData[i] + _pZData[i+1])/2);
                            //         console.log('Calc mediana');
                            //     }
                            // }    
                            // console.log(combArray);                        
                            // const _pData = zond1828NewVestData;
                            // _pData[idx + 1] = parseInt(e.target.value);
                            // dispatch(setPerioZondNew1828VestData(_pData));

                        }
                    }}
                    className="psr-input bottom focus:outline-hidden" 
                    // value={zv1828Data[idx + 1]}
                    value={zv1828Data[idx + 2]}
                    type="text" 
                />
            </div>
        </>
    )
}
