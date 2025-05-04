import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import {
    getPerioZ1828VDataSelector,
    getPerioYK1828VDataSelector,

    getPerioYasen1828VestDataSelector,
    getPerioZond1828VestDataSelector,
    chartZondUpSelector,
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
    const zond1828VestData = useSelector(chartZondUpSelector);
    const yasen1828VestData = useSelector(getPerioYasen1828VestDataSelector);

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

    const chartData = {
        labels: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        legend: {display: false},
        datasets: [
            {
                type: "line" as const,
                label: '',
                data: zond1828VestData,
                pointRadius: 1,
                fill: true,
                borderColor: 'rgb(219, 14, 79)',
                borderWidth: 2,
                // backgroundColor: 'transparent',
                backgroundColor: 'rgba(197, 54, 54, 0.4)',
                tension: 0.1
            },
                // {
                //     type: 'bar',
                //     label: '',
                //     data: zond1828VestData,
                //     borderColor: [
                //         'rgb(255, 99, 132)',
                //         'rgb(75, 192, 192)',
                //         'rgb(153, 102, 255)',
                //       ],
                //     backgroundColor: [
                //         'rgb(255, 99, 132)',
                //         'rgb(75, 192, 192)',
                //         'rgb(153, 102, 255)',
                //       ],                  
                //     fill: true,
                //     // borderColor: 'rgb(8, 84, 17)',
                //     borderWidth: 1,
                //     // backgroundColor: 'rgba(197, 54, 54, 0.4)',
                //     barThickness: 3,
                //     tension: 0.1
                // },
        ],
    };
       
    return (
        <>
            <div style={{width: '1195px', height: '60px'}} className='chart-perio-top-1'>
                <Line data={chartData} options={options} height={32}  />
            </div>
        </>
    )
}
