
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    getPerioZ1828VDataSelector,
    getPerioYK1828VDataSelector,
    chartKrayUpSelector,
    getPerioZ1828ODataSelector,
    getPerioYK1828ODataSelector,
} from "../../../Redux/Formula/selectors";
import { 
    setPZondChartUp, 
    setPBarChartUp, 
    setPZondChartDown, 
    setPBarChartDown, 
    setPerioZ1828OralData, 
} from "../../../Redux/Formula";
import { setPerioZ1828VestData, setPKrayChartDown, setPKrayChartUp } from '@/Redux/Formula/actions';


export default function DeepZond({type = 'vest', idx = 0}) {
    const dispatch = useDispatch<any>();
    const yasen1828VestData = useSelector(chartKrayUpSelector);

    const zv1828Data = useSelector(getPerioZ1828VDataSelector);
    const ykv1828Data = useSelector(getPerioYK1828VDataSelector);
    const zo1828Data = useSelector(getPerioZ1828ODataSelector);
    const yko1828Data = useSelector(getPerioYK1828ODataSelector);

    const [value, setValue] = useState(type === 'vest' ? zv1828Data[idx] : zo1828Data[idx]);

    const recalcSlice = (type) => {
        let arrYasen = ykv1828Data;
        let arrZond = zv1828Data;
        let arrYasenOral = yko1828Data;
        let arrZondOral = zo1828Data;
        const resNewYasn = [];
        const resNewZond = [];
        const chartnNewYasn = [];
        const chartNewZond = [];
        if (type === 'vest') {
            for (let i = 0; i < arrYasen.length; i++) {
                const zondVal = !isNaN(parseInt(arrZond[i])) ? parseInt(arrZond[i]) : 0;
                const yasnVal = !isNaN(parseInt(arrYasen[i])) ? parseInt(arrYasen[i]) : 0;
                console.log(zondVal, yasnVal)
                resNewYasn.push(-1*yasnVal);
                resNewZond.push(-1*(yasnVal - zondVal));
            }
        } else {
            for (let i = 0; i < arrYasenOral.length; i++) {
                const zondVal = !isNaN(parseInt(arrZondOral[i])) ? parseInt(arrZondOral[i]) : 0;
                const yasnVal = !isNaN(parseInt(arrYasenOral[i])) ? parseInt(arrYasenOral[i]) : 0;
                resNewYasn.push(yasnVal);
                resNewZond.push(yasnVal - zondVal);
            }
        }
        // calculate values for zond/yasen/bar chart
        const chartBar = [];
        for (let i = 0; i < resNewZond.length; i++) {
            chartNewZond.push(!isNaN(parseInt(resNewZond[i])) ? parseInt(resNewZond[i]) : 0);
            chartnNewYasn.push(!isNaN(parseInt(resNewYasn[i])) ? parseInt(resNewYasn[i]) : 0);
            chartBar.push([!isNaN(parseInt(resNewZond[i])) ? parseInt(resNewZond[i]) : 0, !isNaN(parseInt(resNewYasn[i])) ? parseInt(resNewYasn[i]) : 0])
            // После каждого третьего элемента (индекс 2, 5, 8, ...)
            if ((i + 1) % 3 === 0 && i + 1 < resNewZond.length) {
                let avgZond = (resNewZond[i] + resNewZond[i + 1]) / 2;
                chartNewZond.push(avgZond);
                let avgYasn = (resNewYasn[i] + resNewYasn[i + 1]) / 2;
                chartnNewYasn.push(avgYasn);
                chartBar.push([0, 0])
            }
        }
        chartNewZond.unshift(0);
        chartNewZond.push(0);
        chartnNewYasn.unshift(0);
        chartnNewYasn.push(0);
        chartBar.unshift(0);
        chartBar.push([0, 0]);

        if (type === 'vest') {
            dispatch(setPKrayChartUp(chartnNewYasn));
            dispatch(setPZondChartUp(chartNewZond));
            dispatch(setPBarChartUp(chartBar));
        } else {
            dispatch(setPKrayChartDown(chartnNewYasn));
            dispatch(setPZondChartDown(chartNewZond));
            dispatch(setPBarChartDown(chartBar));
        }
    }
    

    const recalcSliceOld = (type) => {
        let arrYasen = ykv1828Data;
        let arrOYasen = yko1828Data;
        
        let arrZond = zv1828Data;
        let arrOZond = zo1828Data;
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
                resultOral.push(!isNaN(parseInt(arrOZond[i])) ? parseInt(arrOZond[i]) : 0);

                // После каждого третьего элемента (индекс 2, 5, 8, ...)
                if ((i + 1) % 3 === 0 && i + 1 < arrOZond.length) {
                let avg = (arrOZond[i] + arrOZond[i + 1]) / 2;
                resultOral.push(avg);
                }
            }
            resultOral.unshift(0);
            resultOral.push(0);
            console.log('Oral zond values', resultOral)
            // console.log('Oral yasen values', arrOYasen)
            // // пересчитиваем глибину зондування
            // const _calcArr = [];
            // console.log('AAAA');
            // for (let i = 0; i < arrOYasen.length; i++) {
            //     const zondVal = isNaN(parseInt(arrOZond[i])) ? 0 : parseInt(arrOZond[i]);
            //     const yasenVal = isNaN(parseInt(arrOYasen[i])) ? 0 : parseInt(arrOYasen[i]);
            //     _calcArr.push( yasenVal > zondVal  ? -1*zondVal : zondVal);
            // }
            // console.log(_calcArr)

            // // формируем новие значения для графика
            // const resultZond = [];
            // for (let i = 0; i < _calcArr.length; i++) {
            //     resultZond.push(_calcArr[i]);
                
            //     // После каждого третьего элемента (индекс 2, 5, 8, ...)
            //     if ((i + 1) % 3 === 0 && i + 1 < _calcArr.length) {
            //         let avg = (_calcArr[i] + _calcArr[i + 1]) / 2;
            //         resultZond.push(avg);
            //     }
            // }
            // resultZond.unshift(0);
            // resultZond.push(0);
            // dispatch(setPerioZ1828OralData(resultZond));
            // // инвертируем график вдоль оси x
            // for (let i = 0; i < resultZond.length -1; i++) {
            //     resultZond[i] = -1*resultZond[i];
            // }
            // dispatch(setPZondChartDown(resultZond));
            // console.log('ORAL', resultZond)            

            // // prepare bar chart data
            // const resultBar = [];
            // for (let i = 1; i < resultZond.length - 1; i++) {
            //     if (i%4 === 0) {
            //         resultBar.push([0, 0]);
            //     } else {
            //         resultBar.push([resultZond[i], yasen1828OralData[i]]);
            //     }
            // }
            // resultBar.unshift([0,0]);
            // resultZond.push([0,0]);
            // dispatch(setPBarChartDown(resultBar));
        }
        
    }

    return ( 
        <input 
            onChange={(e) => {
                if (type === 'vest') {
                    const _pZData = zv1828Data;
                    _pZData[idx] = parseInt(e.target.value);
                    setValue(parseInt(e.target.value));
                    e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                    dispatch(setPerioZ1828VestData(_pZData));
                } else {
                    const _pZData = zo1828Data;
                    
                    _pZData[idx] = parseInt(e.target.value);
                    console.log(_pZData);
                    setValue(parseInt(e.target.value));
                    e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                    dispatch(setPerioZ1828OralData(_pZData));
                }
                
                recalcSlice(type);
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
