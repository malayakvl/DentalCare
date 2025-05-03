
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    getPerioZ1828VDataSelector,
    getPerioYK1828VDataSelector,

    getPerioZond1828OralDataSelector,
    getPerioZond1828VestDataSelector,
    getPsrChangeSelector,
} from "../../../Redux/Formula/selectors";
import { setPerioZond1828VestData, setPerioZ1828VData, setPsrChange, setPZondChartUp, setPerioYK1828VData, setPKrayChartUp } from "../../../Redux/Formula";


export default function YasenKrayNew({type = 'vest', idx = 0}) {
    const dispatch = useDispatch<any>();
    const zond1828VestData = useSelector(getPerioZond1828VestDataSelector);

    const zv1828Data = useSelector(getPerioZ1828VDataSelector);
    const ykv1828Data = useSelector(getPerioYK1828VDataSelector);

    const [value, setValue] = useState(ykv1828Data[idx]);


    const inputStyle = {
        color: Number(value) > 5 ? 'red' : Number(value) === 5 ? 'blue' : 'green' // если больше 5 — красный, иначе черный
    };

    const recalcSlice = () => {
        let arrYasen = ykv1828Data;
        let arrZond = zv1828Data;
        let result = [];
        let _tmpCalc = [];
        
        for (let i = 0; i < arrYasen.length; i++) {
          result.push(!isNaN(parseInt(arrYasen[i])) ? parseInt(arrYasen[i]) : 0);
        
          // После каждого третьего элемента (индекс 2, 5, 8, ...)
          if ((i + 1) % 3 === 0 && i + 1 < arrYasen.length) {
            let avg = (arrYasen[i] + arrYasen[i + 1]) / 2;
            result.push(avg);
          }
        }
        // меняем на отрицательний знак
        for (let i = 0; i < arrYasen.length; i++) {
            result[i] = parseFloat(result[i]) != 0 ? -1 * parseFloat(result[i]) : 0;
        }
        result.unshift(0);
        result.push(0);
        dispatch(setPKrayChartUp(result));

        // пересчитиваем глибину зондування
        const _calcArr = [];
        for (let i = 0; i < arrYasen.length; i++) {
            const zondVal = isNaN(parseInt(arrZond[i])) ? 0 : parseInt(arrZond[i]);
            const yasenVal = isNaN(parseInt(arrYasen[i])) ? 0 : parseInt(arrYasen[i]);
            // _calcArr.push( yasenVal > zondVal  ? - yasenVal);
            _calcArr.push( yasenVal > zondVal  ? -1*zondVal : zondVal);
        }
        // формируем новие значения для графика
        const resultZond = [];
        for (let i = 0; i < _calcArr.length; i++) {
            resultZond.push(_calcArr[i]);
          
            // После каждого третьего элемента (индекс 2, 5, 8, ...)
            if ((i + 1) % 3 === 0 && i + 1 < _calcArr.length) {
              let avg = (_calcArr[i] + _calcArr[i + 1]) / 2;
              resultZond.push(avg);
            }
        }
        resultZond.unshift(0);
        resultZond.push(0);
        dispatch(setPZondChartUp(resultZond));
    }

    return ( 
        <input 
            onChange={(e) => {
                e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                const _pYKData = ykv1828Data;
                _pYKData[idx] = parseInt(e.target.value);
                setValue(parseInt(e.target.value));
                dispatch(setPerioYK1828VData(_pYKData));
                recalcSlice();
            }}
            className="psr-input bottom focus:outline-hidden" 
            value={isNaN(value) ? '' : value}
            type="text" 
        />
    )
}
