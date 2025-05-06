
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    getPerioZ1828VDataSelector,
    getPerioYK1828VDataSelector,

    getPerioZond1828VestDataSelector,
    getPerioZ1828ODataSelector,
    getPerioYK1828ODataSelector,
} from "../../../Redux/Formula/selectors";
import { setPZondChartUp, setPKrayChartUp, setPBarChartUp, setPKrayChartDown, setPZondChartDown, setPBarChartDown, setPerioZ1828VestData, setPerioZ1828OralData, setPerioYK1828VestData, setPerioYK1828OralData } from "../../../Redux/Formula";


export default function YasenKray({ type = 'vest', idx = 0 }) {
    const dispatch = useDispatch<any>();

    const zv1828Data = useSelector(getPerioZ1828VDataSelector);
    const ykv1828Data = useSelector(getPerioYK1828VDataSelector);
    const zo1828Data = useSelector(getPerioZ1828ODataSelector);
    const yko1828Data = useSelector(getPerioYK1828ODataSelector);

    // const [value, setValue] = useState(ykv1828Data[idx]);
    const [value, setValue] = useState(type === 'vest' ? ykv1828Data[idx] : yko1828Data[idx]);

    const inputStyle = {
        color: Number(value) > 5 ? 'red' : Number(value) === 5 ? 'blue' : 'green' // если больше 5 — красный, иначе черный
    };

    const recalcSlice = (type) => {
        let arrYasen = ykv1828Data;
        let arrZond = zv1828Data;
        let arrYasenOral = yko1828Data;
        let arrZondOral = zo1828Data;
        let result = [];

        if (type === 'vest') {
            const resNewYasn = [];
            const resNewZond = [];
            const chartnNewYasn = [];
            const chartNewZond = [];
console.log('ZOND VEST', arrZond);
console.log('YASEN VEST', arrYasen);
            for (let i = 0; i < arrYasen.length; i++) {
                const zondVal = !isNaN(parseInt(arrZond[i])) ? parseInt(arrZond[i]) : 0;
                const yasnVal = !isNaN(parseInt(arrYasen[i])) ? parseInt(arrYasen[i]) : 0;
console.log(zondVal, yasnVal);
                resNewZond.push(zondVal - yasnVal);
                resNewYasn.push(yasnVal)
            }
            // меняем яс край на минус
            for (let i = 0; i < resNewYasn.length; i++) {
                resNewYasn[i] = resNewYasn[i] != 0 ? -1 * resNewYasn[i] : 0
            }
// console.log('ZOND ORAL', resNewZond);
// console.log('YASEN ORAL', resNewYasn);
            // calculate values for zond chart
            for (let i = 0; i < resNewZond.length; i++) {
                chartNewZond.push(!isNaN(parseInt(resNewZond[i])) ? parseInt(resNewZond[i]) : 0);

                // После каждого третьего элемента (индекс 2, 5, 8, ...)
                if ((i + 1) % 3 === 0 && i + 1 < resNewZond.length) {
                    let avg = (resNewZond[i] + resNewZond[i + 1]) / 2;
                    chartNewZond.push(avg);
                }
            }
            chartNewZond.unshift(0);
            chartNewZond.push(0);
            dispatch(setPZondChartUp(chartNewZond));

            // calculate values for yesen chart
            for (let i = 0; i < resNewYasn.length; i++) {
                chartnNewYasn.push(!isNaN(parseInt(resNewYasn[i])) ? parseInt(resNewYasn[i]) : 0);

                // После каждого третьего элемента (индекс 2, 5, 8, ...)
                if ((i + 1) % 3 === 0 && i + 1 < resNewYasn.length) {
                    let avg = (resNewYasn[i] + resNewYasn[i + 1]) / 2;
                    chartnNewYasn.push(avg);
                }
            }
            chartnNewYasn.unshift(0);
            chartnNewYasn.push(0);
            dispatch(setPKrayChartUp(chartnNewYasn));

            // console.log('CHART ZOND ORAL', chartNewZond);
            // console.log('CHART YASN ORAL', chartnNewYasn);



            // for (let i = 0; i < arrYasen.length; i++) {
            //     result.push(!isNaN(parseInt(arrYasen[i])) ? parseInt(arrYasen[i]) : 0);

            //     // После каждого третьего элемента (индекс 2, 5, 8, ...)
            //     if ((i + 1) % 3 === 0 && i + 1 < arrYasen.length) {
            //       let avg = (arrYasen[i] + arrYasen[i + 1]) / 2;
            //       result.push(avg);
            //     }
            //   }
            //   // меняем на отрицательний знак
            //   for (let i = 0; i < arrYasen.length; i++) {
            //       result[i] = parseFloat(result[i]) != 0 ? -1 * parseFloat(result[i]) : 0;
            //   }
            //   result.unshift(0);
            //   result.push(0);
            //   dispatch(setPKrayChartUp(result));

            //   // пересчитиваем глибину зондування
            //   const _calcArr = [];
            //   for (let i = 0; i < arrYasen.length; i++) {
            //       const zondVal = isNaN(parseInt(arrZond[i])) ? 0 : parseInt(arrZond[i]);
            //       const yasenVal = isNaN(parseInt(arrYasen[i])) ? 0 : parseInt(arrYasen[i]);
            //       // _calcArr.push( yasenVal > zondVal  ? - yasenVal);
            //       _calcArr.push( yasenVal > zondVal  ? zondVal : zondVal);
            //   }
            //   // формируем новие значения для графика
            //   const resultZond = [];
            //   for (let i = 0; i < _calcArr.length; i++) {
            //       resultZond.push(_calcArr[i]);

            //       // После каждого третьего элемента (индекс 2, 5, 8, ...)
            //       if ((i + 1) % 3 === 0 && i + 1 < _calcArr.length) {
            //         let avg = (_calcArr[i] + _calcArr[i + 1]) / 2;
            //         resultZond.push(avg);
            //       }
            //   }
            //   resultZond.unshift(0);
            //   resultZond.push(0);
            //   dispatch(setPZondChartUp(resultZond));

            //   // prepare bar chart data
            //   const resultBar = [];
            //   for (let i = 1; i < resultZond.length - 1; i++) {
            //       if (i%4 === 0) {
            //           resultBar.push([0, 0]);
            //       } else {
            //           resultBar.push([result[i], resultZond[i]]);
            //       }
            //   }
            //   resultBar.unshift([0,0]);
            //   resultZond.push([0,0]);
            //   dispatch(setPBarChartUp(resultBar));

        } else {
            const resNewYasn = [];
            const resNewZond = [];
            const chartnNewYasn = [];
            const chartNewZond = [];
            for (let i = 0; i < arrYasenOral.length; i++) {
                // resNewYasn.push(arrZondOral[i] - arrZondOral[i]);
                const zondVal = !isNaN(parseInt(arrZondOral[i])) ? parseInt(arrZondOral[i]) : 0;
                const yasnVal = !isNaN(parseInt(arrYasenOral[i])) ? parseInt(arrYasenOral[i]) : 0;
                if (yasnVal > zondVal) {
                    resNewZond.push(yasnVal - zondVal);
                    resNewYasn.push(yasnVal)
                } else {
                    resNewZond.push(zondVal - yasnVal);
                    resNewYasn.push(yasnVal != 0 ? -1 * yasnVal : 0);
                }
            }
// console.log('ZOND ORAL', resNewZond);
// console.log('YASEN ORAL', resNewYasn);
            // calculate values for zond chart
            for (let i = 0; i < resNewZond.length; i++) {
                chartNewZond.push(!isNaN(parseInt(resNewZond[i])) ? parseInt(resNewZond[i]) : 0);

                // После каждого третьего элемента (индекс 2, 5, 8, ...)
                if ((i + 1) % 3 === 0 && i + 1 < resNewZond.length) {
                    let avg = (resNewZond[i] + resNewZond[i + 1]) / 2;
                    chartNewZond.push(avg);
                }
            }
            chartNewZond.unshift(0);
            chartNewZond.push(0);
            dispatch(setPZondChartDown(chartNewZond));
            // calculate values for yesen chart
            for (let i = 0; i < resNewYasn.length; i++) {
                chartnNewYasn.push(!isNaN(parseInt(resNewYasn[i])) ? parseInt(resNewYasn[i]) : 0);

                // После каждого третьего элемента (индекс 2, 5, 8, ...)
                if ((i + 1) % 3 === 0 && i + 1 < resNewYasn.length) {
                    let avg = (resNewYasn[i] + resNewYasn[i + 1]) / 2;
                    chartnNewYasn.push(avg);
                }
            }
            chartnNewYasn.unshift(0);
            chartnNewYasn.push(0);
            dispatch(setPKrayChartDown(chartnNewYasn));

            
console.log('CHART ZOND ORAL', chartNewZond);
console.log('CHART YASN ORAL', chartnNewYasn);
        }
    }

    return (
        <input
            onChange={(e) => {
                if (type === 'vest') {
                    const _pZData = ykv1828Data;
                    _pZData[idx] = parseInt(e.target.value);
                    setValue(parseInt(e.target.value));
                    console.log(_pZData)
                    dispatch(setPerioYK1828VestData(_pZData));
                } else {
                    const _pZData = yko1828Data;
                    _pZData[idx] = parseInt(e.target.value);
                    setValue(parseInt(e.target.value));
                    dispatch(setPerioYK1828OralData(_pZData));
                }
                e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                // e.target.style.color = Number(e.target.value) > 5 ? 'red' : Number(e.target.value) === 5 ? 'blue' : 'green';
                // const _pYKData = ykv1828Data;
                // _pYKData[idx] = parseInt(e.target.value);
                // setValue(parseInt(e.target.value));
                // dispatch(setPerioYK1828VData(_pYKData));
                recalcSlice(type);
            }}
            className="psr-input bottom focus:outline-hidden"
            value={isNaN(value) ? '' : value}
            maxLength={1}
            type="text"
        />
    )
}
