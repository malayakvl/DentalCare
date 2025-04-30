import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setNewToothActive, setSubDiagnosis, setToothDiagnoze, setDisactiveAll, setSelectedToothNumber } from '../../../Redux/Formula';
import {
    getDiagnosisSelector,
    getPerioZond1828OralDataSelector,
    getPerioZond1828VestDataSelector,
    getPerioZond18Selector,
    getPerioZondSelector,
    getPsrChangeSelector,
    getTeethDiagnozisSelector
} from "../../../Redux/Formula/selectors";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement
  } from 'chart.js';
  import { Line  } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function ZondChart() {
    const zondData18 = useSelector(getPerioZond18Selector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    const newZondData = useSelector(getPerioZond1828VestDataSelector);
    const zond1828VestData = useSelector(getPerioZond1828VestDataSelector);
    const psrChange = useSelector(getPsrChangeSelector);
    // const diagnoze = useSelector(getDiagnosisSelector);
    const [chartLineValues, setChartLineValues] = useState(newZondData);

    const options = {
        layout: {
            padding: 0
        },
        alignToPixels: true,
        scales: {
            x: {
                ticks: {
                display: false, // скрыть подписи на оси X
                },
                title: {
                display: false, // скрыть название оси X
                },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    display: false, // скрыть подписи на оси Y
                    stepSize: 20
                },
                title: {
                    display: false, // скрыть название оси Y
                },
                grid: {
                    display: false
                },
                
            },
        },
    };

    useEffect(() => {
        console.log('NZD:', newZondData)
    }, [newZondData, teethDiagnozis, psrChange])

    const chartData = {
        // labels: [1,2,3,4,5],
        labels: [0,1,2,3,4,5,6,7,8,9,20,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],
        legend: {display: false},
        datasets: [
            {
                type: "line",
                label: '',
                data: zond1828VestData,
                fill: true,
                borderColor: 'rgb(8, 84, 17)',
                borderWidth: 1,
                backgroundColor: 'rgba(197, 54, 54, 0.4)',
                tension: 0.1
            },
            {
                type: 'bar',
                label: '',
                data: zond1828VestData,
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                  ],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                  ],                  
                fill: true,
                // borderColor: 'rgb(8, 84, 17)',
                borderWidth: 1,
                // backgroundColor: 'rgba(197, 54, 54, 0.4)',
                barThickness: 3,
                tension: 0.1
            },
        ],
    };
       
// console.log(chartData);

    return (
        <>
            <div style={{width: '1200px'}} className='chart-perio-top-1'>
                <Line data={chartData} options={options} height={32}  />
            </div>
        </>
    )
}
