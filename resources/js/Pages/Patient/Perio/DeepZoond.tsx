
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    getPerioZ1828VDataSelector,
    getPerioYK1828VDataSelector,
    chartKrayUpSelector,
    chartKrayDownSelector,
    getPerioZ1828ODataSelector,
    getPerioYK1828ODataSelector,
} from "../../../Redux/Formula/selectors";
import { setPerioZ1828VData, setPZondChartUp, setPBarChartUp, setPZondChartDown, setPBarChartDown, setPerioZ1828OData } from "../../../Redux/Formula";


export default function DeepZond({type = 'vest', idx = 0}) {
    const dispatch = useDispatch<any>();
    const yasen1828VestData = useSelector(chartKrayUpSelector);
    const yasen1828OralData = useSelector(chartKrayDownSelector);

    const zv1828Data = useSelector(getPerioZ1828VDataSelector);
    const ykv1828Data = useSelector(getPerioYK1828VDataSelector);
    const zo1828Data = useSelector(getPerioZ1828ODataSelector);
    const yko1828Data = useSelector(getPerioYK1828ODataSelector);

    const [value, setValue] = useState(zv1828Data[idx]);

    const recalcSlice = () => {
        let arrYasen = ykv1828Data;
        let arrZond = zv1828Data;
        let arrOZond = zo1828Data;
        let arrOYasen = yko1828Data;
        let result = [];
        let resultOral = [];

        if (type === 'vest') {
            // пересчитиваем глибину зондування
            for (let i = 0; i < arrZond.length; i++) {
                result.push(!isNaN(parseInt(arrZond[i])) ? parseInt(arrZond[i]) : 0);
            
                // После каждого третьего элемента (индекс 2, 5, 8, ...)
                if ((i + 1) % 3 === 0 && i + 1 < arrZond.length) {
                let avg = (arrZond[i] + arrZond[i + 1]) / 2;
                result.push(avg);
                }
            }
            result.unshift(0);
            result.push(0);

            // пересчитиваем глибину зондування
            const _calcArr = [];
            for (let i = 0; i < arrYasen.length; i++) {
                const zondVal = isNaN(parseInt(arrZond[i])) ? 0 : parseInt(arrZond[i]);
                const yasenVal = isNaN(parseInt(arrYasen[i])) ? 0 : parseInt(arrYasen[i]);
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

            // prepare bar chart data
            const resultBar = [];
            for (let i = 1; i < resultZond.length - 1; i++) {
                if (i%4 === 0) {
                    resultBar.push([0, 0]);
                } else {
                    resultBar.push([resultZond[i], yasen1828VestData[i]]);
                }
            }
            resultBar.unshift([0,0]);
            resultZond.push([0,0]);
            dispatch(setPBarChartUp(resultBar));
        } else {
            // пересчитиваем глибину зондування
            for (let i = 0; i < arrOZond.length; i++) {
                result.push(!isNaN(parseInt(arrZond[i])) ? parseInt(arrZond[i]) : 0);

                // После каждого третьего элемента (индекс 2, 5, 8, ...)
                if ((i + 1) % 3 === 0 && i + 1 < arrZond.length) {
                let avg = (arrZond[i] + arrZond[i + 1]) / 2;
                result.push(avg);
                }
            }
            result.unshift(0);
            result.push(0);
            // пересчитиваем глибину зондування
            const _calcArr = [];
            for (let i = 0; i < arrYasen.length; i++) {
                const zondVal = isNaN(parseInt(arrZond[i])) ? 0 : parseInt(arrZond[i]);
                const yasenVal = isNaN(parseInt(arrYasen[i])) ? 0 : parseInt(arrYasen[i]);
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
            // инвертируем график вдоль оси x
            for (let i = 0; i < resultZond.length -1; i++) {
                resultZond[i] = -1*resultZond[i];
            }
            dispatch(setPZondChartDown(resultZond));
            console.log('ORAL')            

            // prepare bar chart data
            const resultBar = [];
            for (let i = 1; i < resultZond.length - 1; i++) {
                if (i%4 === 0) {
                    resultBar.push([0, 0]);
                } else {
                    resultBar.push([resultZond[i], yasen1828OralData[i]]);
                }
            }
            resultBar.unshift([0,0]);
            resultZond.push([0,0]);
            dispatch(setPBarChartDown(resultBar));
        }
        
    }

    return ( 
        <input 
            onChange={(e) => {
                e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                const _pZData = zv1828Data;
                _pZData[idx] = parseInt(e.target.value);
                setValue(parseInt(e.target.value));
                // console.log('TYPE', type)
                // if (type === 'vest') {
                //     dispatch(setPerioZ1828VData(_pZData));
                // } else {
                //     dispatch(setPerioZ1828OData(_pZData)); 
                // }
                recalcSlice();
            }}
            className="psr-input bottom focus:outline-hidden" 
            value={value}
            maxLength={2}
            max={19}
            min={0}
            type="text" 
        />
    )
}
