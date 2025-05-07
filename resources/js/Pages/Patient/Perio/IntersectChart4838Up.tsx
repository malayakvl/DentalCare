import React from 'react';
import { useSelector } from "react-redux";
import {
    chartZondUp2Selector,
    chartKrayUp2Selector,
    chartBarUp2Selector,
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

export default function IntersectChart4838Up() {
    const zond1828VestData = useSelector(chartZondUp2Selector);
    const yasen1828VestData = useSelector(chartKrayUp2Selector);
    const bar1828VestData = useSelector(chartBarUp2Selector);
    // const zv1828Data = useSelector(getPerioZ1828VDataSelector);
    // const ykv1828Data = useSelector(getPerioYK1828VDataSelector);

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
                            label = 'ГЗ:' + context.parsed.x+' ЯК: '+context.parsed.y;
                        }
                        return label;
                    }
                }
            }
        },
        alignToPixels: false,
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
                min: -19,
                max:19
            },
        },
    };

    const data = {
        labels: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
        datasets: [
          {
            label: 'Глибина зондування',
            pointRadius: 0,
            borderWidth: 2,
            data: zond1828VestData,
            borderColor: 'red',
            fill: 'rgba(243, 128, 153, 0.4)' // или target: 'Линия B'
          },
          {
            label: 'Ясений край',
            pointRadius: 0,
            borderWidth: 2,
            data: yasen1828VestData,
            borderColor: 'blue',
            fill: '-1' // заполняет между этой и предыдущей линией
          },
          {
            type: 'bar',
            options: {
                barPercentage: 1
            },
            backgroundColor: 'green',
            barThickness: 1,
            with: 2,
            data: bar1828VestData,
          }
        ]
    };
   
       
    return (
        <>
            <div style={{width: '1215px', height: '100px'}} className='chart-intersect-up'>
                <Line data={data} options={options} height={100}  />
            </div>
        </>
    )
}
