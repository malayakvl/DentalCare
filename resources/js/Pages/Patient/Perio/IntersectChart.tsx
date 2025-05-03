import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import {
    getPerioZ1828VDataSelector,
    getPerioYK1828VDataSelector,

    getPerioYasen1828VestDataSelector,
    getPerioZond1828VestDataSelector,
    chartZondUpSelector,
    chartKrayUpSelector,
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

export default function IntersectChart() {
    const zond1828VestData = useSelector(chartZondUpSelector);
    const yasen1828VestData = useSelector(chartKrayUpSelector);

    const zv1828Data = useSelector(getPerioZ1828VDataSelector);
    const ykv1828Data = useSelector(getPerioYK1828VDataSelector);

    const options = {
        layout: {
            padding: 0
        },
        maintainAspectRatio: false,
        plugins: {
            legend: {
              display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (context.parsed.y !== null) {
                            label = 'ГЗ:' + context.parsed.y;
                        }
                        return label;
                    }
                }
            }
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

    // const calculateData =() => {
    //     const preparedzondData = [];
    //     preparedzondData.push(0);
    //     preparedzondData.push(0);
    //     // for (var i = 0; i< zond1828VestDataNew.length; i++) {
    //     //     console.log(i, zond1828VestDataNew[i]);

    //     //     // preparedzondData.push(zond1828VestData[i] + yasen1828VestData[i]);
    //     // }
    //     // console.log(preparedzondData);
    //     return preparedzondData;
    //     // return zond1828VestData;
    // }

    // useEffect(() => {
    //     console.log('change');
    // }, [zond1828VestDataNew])
    // console.log('GLYB ZOND:', zond1828VestData)
    // console.log('YASEN KRAY:', yasen1828VestData)

    const data = {
        labels: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        datasets: [
          {
            label: 'Глибина зондування',
            pointRadius: 2,
            borderWidth: 2,
            data: zond1828VestData,
            borderColor: 'blue',
            fill: 'rgba(153, 102, 255, 0.4)' // или target: 'Линия B'
          },
          {
            label: 'Ясений край',
            pointRadius: 2,
            borderWidth: 2,
            data: yasen1828VestData,
            borderColor: 'red',
            fill: '-1' // заполняет между этой и предыдущей линией
          }
        ]
    };
       
    return (
        <>
            <div style={{width: '1195px', height: '100px'}} className='chart-intersect-up'>
                <Line data={data} options={options} height={100}  />
            </div>
        </>
    )
}
