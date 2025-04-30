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
        maintainAspectRatio: false,
        plugins: {
            legend: {
              display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
console.log(context.dataset.label);
                        // if (label) {
                        //     label = 'AAA: ';
                        // }
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
                    display: true
                }
            },
            y: {
                ticks: {
                    display: false, // скрыть подписи на оси Y
                    stepSize: 24
                },
                title: {
                    display: false, // скрыть название оси Y
                },
                grid: {
                    display: true
                },
                
            },
        },
    };

    useEffect(() => {
        console.log('NZD:', newZondData)
    }, [newZondData, teethDiagnozis, psrChange])

    const getData = (data) => {
        var dataSize = Math.round(Math.random() * 100);
        var evenBackgroundColor = 'rgba(255, 99, 132, 0.2)';
        var evenBorderColor = 'rgba(255,99,132,1)';
        var oddBackgroundColor = 'rgba(75, 192, 192, 0.2)';
        var oddBorderColor = 'rgba(153, 102, 255, 1)';
      
        var labels = [];
      console.log('Data', data)
        var scoreData = {
          label: 'Mid-Term Exam 1',
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
          hoverBorderColor: 'rgba(200, 200, 200, 1)',
        };
      
        for (var i = 0; i < dataSize; i++) {
        //   scoreData.data.push(window.randomScalingFactor());
          labels.push("Score " + (i + 1));
      
          if (i % 2 === 0) {
            scoreData.backgroundColor.push(evenBackgroundColor);
            scoreData.borderColor.push(evenBorderColor);
          } else {
            scoreData.backgroundColor.push(oddBackgroundColor);
            scoreData.borderColor.push(oddBorderColor);
          }
        }
      
        return {
          labels: labels,
          datasets: [scoreData],
        };
      };

    const chartData = {
        // labels: [1,2,3,4,5],
        // labels: ['','','', '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','', ''],
        labels: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
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
            <div style={{width: '1200px', height: '60px'}} className='chart-perio-top-1'>
                <Line data={chartData} options={options} height={32}  />
            </div>
        </>
    )
}
