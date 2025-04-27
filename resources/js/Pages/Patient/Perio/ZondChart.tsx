import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setNewToothActive, setSubDiagnosis, setToothDiagnoze, setDisactiveAll, setSelectedToothNumber } from '../../../Redux/Formula';
import {
    getDiagnosisSelector,
    getPerioZond18Selector,
    getPerioZondDataSelector,
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
    const newZondData = useSelector(getPerioZondDataSelector);


    const options = {
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
            },
            title: {
            display: false, // скрыть название оси Y
            },
            grid: {
                display: false
            }
        },
        },
    };

    const chartData = {
        labels: ['T1', 'T2','T3','T4','T5','T6','T7', 'T8', 'T9','T10','T11','T12','T13','T4', 'T15', 'T16'],
        datasets: [
            {
                type: 'line',
                label: '',
                data: newZondData,
                fill: true,
                borderColor: 'rgb(8, 84, 17)',
                borderWidth: 1,
                backgroundColor: 'rgba(197, 54, 54, 0.4)',
                tension: 0.1
            },
            {
                type: 'bar',
                label: '',
                data: [1, 3, 0, 18, 1, 1, 5, 5, 9, 0, 1, 6, 5, 4, 2, 0],
                fill: true,
                borderColor: 'rgb(8, 84, 17)',
                borderWidth: 1,
                backgroundColor: 'rgba(197, 54, 54, 0.4)',
                barThickness: 1,
                tension: 0.1
            },
        ],
    };
       
// console.log(chartData);

    return (
        <>
            <div style={{width: '1154px'}} className='chart-perio-top-1'>
                <Line data={chartData} options={options} height={32} />
            </div>
        </>
    )
}
