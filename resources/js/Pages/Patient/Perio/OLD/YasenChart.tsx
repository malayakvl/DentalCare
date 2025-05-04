import React from 'react';
import { useSelector } from "react-redux";
import {
    chartKrayUpSelector,
    getPerioYasen1828VestDataSelector,
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

export default function YasenChart() {
    const yasen1828VestData = useSelector(chartKrayUpSelector);

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
                            label = 'ЯК:' + context.parsed.y;
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

    const chartData = {
        labels: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        legend: {display: false},
        datasets: [
            {
                type: "line",
                label: '',
                data: yasen1828VestData,
                fill: true,
                pointRadius: 1,
                borderColor: 'rgb(153, 102, 255)',
                backgroundColor: 'rgba(153, 102, 255, 0.4)',
                borderWidth: 2,
                tension: 0.1
            },
                // {
                //     type: 'bar',
                //     label: '',
                //     data: yasen1828VestData,
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
            <div style={{width: '1195px', height: '60px'}} className='chart-yasen-top-1'>
                <Line data={chartData} options={options} height={32}  />
            </div>
        </>
    )
}
