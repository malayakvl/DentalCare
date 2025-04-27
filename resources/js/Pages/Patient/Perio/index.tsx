import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import InputSelect from "../../../Components/Form/InputSelect";
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

  import {
    getStatusesSelector,
    getActiveToothNumber,
    getPerioZond18Selector,
    getPerioZondSelector,
    getPerioZondDataSelector,
    getTeethDiagnozisSelector
} from "../../../Redux/Formula/selectors";
import MovePerio from './Move';
import Furkacia from './Furkacia';
import FormulaPerio1828 from './FormulaPerio1828';
import FormulaPerio3848 from './FormulaPerio3848';
import DentalDeposits from './DentalDeposits';
import Fertilizer from './Fertilizer';
import Bleeding from './Bleeding';
import Moving from './Moving';
import DeepZond from './DeepZoond';
import ZondChart from './ZondChart';

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


export default function Index() {
    const toothActive = useSelector(getStatusesSelector);
    const activeNumber = useSelector(getActiveToothNumber);
    const zondData = useSelector(getPerioZondDataSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
console.log('SELECTOR DATA', teethDiagnozis);    
    useEffect(() => {
        console.log('ZOND DATA1', zondData)
    }, [zondData])

    const chartData = {
        labels: ['T1', 'T2','T3','T4','T5','T6','T7', 'T8', 'T9','T10','T11','T12','T13','T4', 'T15', 'T16'],
        datasets: [
            {
                type: 'line',
                label: '',
                data: [1, 3, 0, 18, 1, 1, 5, 5, 9, 0, 1, 6, 5, 4, 2, -2],
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
    return (
        <div className="w-full scroll-x">
            <div className='relative'>
                <ZondChart />
                {/* <div style={{width: '1154px'}} className='chart-perio-top-1'>
                    <Line data={chartData} options={options} height={32} />
                </div> */}
    
                            
            </div>
            <table className="table-auto perio-table">
                <tbody>
                <tr>
                    <td className="title">Статус зуба</td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td className="title">Рухомість</td>
                    <td><Moving toothNum={48} /></td>
                    <td><Moving toothNum={47} /></td>
                    <td><Moving toothNum={46} /></td>
                    <td><Moving toothNum={45} /></td>
                    <td><Moving toothNum={44} /></td>
                    <td><Moving toothNum={43} /></td>
                    <td><Moving toothNum={42} /></td>
                    <td><Moving toothNum={41} /></td>
                    <td><Moving toothNum={31} /></td>
                    <td><Moving toothNum={32} /></td>
                    <td><Moving toothNum={33} /></td>
                    <td><Moving toothNum={34} /></td>
                    <td><Moving toothNum={35} /></td>
                    <td><Moving toothNum={36} /></td>
                    <td><Moving toothNum={37} /></td>
                    <td><Moving toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Фуркація</td>
                    <td><Furkacia toothNum={48} /></td>
                    <td><Furkacia toothNum={47} /></td>
                    <td><Furkacia toothNum={46} /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Furkacia toothNum={38} /></td>
                    <td><Furkacia toothNum={38} /></td>
                    <td><Furkacia toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Кровоточивість</td>
                    <td><Bleeding toothNum={48} /></td>
                    <td><Bleeding toothNum={47} /></td>
                    <td><Bleeding toothNum={46} /></td>
                    <td><Bleeding toothNum={45} /></td>
                    <td><Bleeding toothNum={44} /></td>
                    <td><Bleeding toothNum={43} /></td>
                    <td><Bleeding toothNum={42} /></td>
                    <td><Bleeding toothNum={41} /></td>
                    <td><Bleeding toothNum={31} /></td>
                    <td><Bleeding toothNum={32} /></td>
                    <td><Bleeding toothNum={33} /></td>
                    <td><Bleeding toothNum={34} /></td>
                    <td><Bleeding toothNum={35} /></td>
                    <td><Bleeding toothNum={36} /></td>
                    <td><Bleeding toothNum={37} /></td>
                    <td><Bleeding toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Гноєтеча</td>
                    <td><Fertilizer toothNum={48} /></td>
                    <td><Fertilizer toothNum={47} /></td>
                    <td><Fertilizer toothNum={46} /></td>
                    <td><Fertilizer toothNum={45} /></td>
                    <td><Fertilizer toothNum={44} /></td>
                    <td><Fertilizer toothNum={43} /></td>
                    <td><Fertilizer toothNum={42} /></td>
                    <td><Fertilizer toothNum={41} /></td>
                    <td><Fertilizer toothNum={31} /></td>
                    <td><Fertilizer toothNum={32} /></td>
                    <td><Fertilizer toothNum={33} /></td>
                    <td><Fertilizer toothNum={34} /></td>
                    <td><Fertilizer toothNum={35} /></td>
                    <td><Fertilizer toothNum={36} /></td>
                    <td><Fertilizer toothNum={37} /></td>
                    <td><Fertilizer toothNum={38} /></td>
                </tr>
                <tr style={{paddingTop: '10px'}}>
                    <td style={{paddingTop: '10px'}} className="title">Зубні відкладення</td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={48} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={47} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={46} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={45} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={44} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={43} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={42} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={41} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={31} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={32} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={33} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={34} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={35} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={36} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={37} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={38} />
                    </td>
                </tr>
                <tr>
                    <td className="title">Ясений край</td>
                    <td><DeepZond toothNum={48} /></td>
                    <td><DeepZond toothNum={47} /></td>
                    <td><DeepZond toothNum={46} /></td>
                    <td><DeepZond toothNum={45} /></td>
                    <td><DeepZond toothNum={44} /></td>
                    <td><DeepZond toothNum={43} /></td>
                    <td><DeepZond toothNum={42} /></td>
                    <td><DeepZond toothNum={41} /></td>
                    <td><DeepZond toothNum={31} /></td>
                    <td><DeepZond toothNum={32} /></td>
                    <td><DeepZond toothNum={33} /></td>
                    <td><DeepZond toothNum={34} /></td>
                    <td><DeepZond toothNum={35} /></td>
                    <td><DeepZond toothNum={36} /></td>
                    <td><DeepZond toothNum={37} /></td>
                    <td><DeepZond toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Глибина зондування</td>
                    <td><DeepZond toothNum={18} /></td>
                    <td><DeepZond toothNum={47} /></td>
                    <td><DeepZond toothNum={46} /></td>
                    <td><DeepZond toothNum={45} /></td>
                    <td><DeepZond toothNum={44} /></td>
                    <td><DeepZond toothNum={43} /></td>
                    <td><DeepZond toothNum={42} /></td>
                    <td><DeepZond toothNum={41} /></td>
                    <td><DeepZond toothNum={31} /></td>
                    <td><DeepZond toothNum={32} /></td>
                    <td><DeepZond toothNum={33} /></td>
                    <td><DeepZond toothNum={34} /></td>
                    <td><DeepZond toothNum={35} /></td>
                    <td><DeepZond toothNum={36} /></td>
                    <td><DeepZond toothNum={37} /></td>
                    <td><DeepZond toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Вестибулярно</td>
                    <td colSpan={16} style={{textAlign: 'center', width: '1050px'}}>
                        <div className='relative'>
                            {/* <div style={{width: '1154px'}} className='chart-perio-top'>
                                <Line data={chartData} options={options} height={32} />
                            </div> */}
    
                            
                        </div>
                        <FormulaPerio1828 />
                    </td>
                </tr>
                <tr>
                    <td className="title">Глибина зондування</td>
                    <td><DeepZond toothNum={48} /></td>
                    <td><DeepZond toothNum={47} /></td>
                    <td><DeepZond toothNum={46} /></td>
                    <td><DeepZond toothNum={45} /></td>
                    <td><DeepZond toothNum={44} /></td>
                    <td><DeepZond toothNum={43} /></td>
                    <td><DeepZond toothNum={42} /></td>
                    <td><DeepZond toothNum={41} /></td>
                    <td><DeepZond toothNum={31} /></td>
                    <td><DeepZond toothNum={32} /></td>
                    <td><DeepZond toothNum={33} /></td>
                    <td><DeepZond toothNum={34} /></td>
                    <td><DeepZond toothNum={35} /></td>
                    <td><DeepZond toothNum={36} /></td>
                    <td><DeepZond toothNum={37} /></td>
                    <td><DeepZond toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Ясений край</td>
                    <td><DeepZond toothNum={48} /></td>
                    <td><DeepZond toothNum={47} /></td>
                    <td><DeepZond toothNum={46} /></td>
                    <td><DeepZond toothNum={45} /></td>
                    <td><DeepZond toothNum={44} /></td>
                    <td><DeepZond toothNum={43} /></td>
                    <td><DeepZond toothNum={42} /></td>
                    <td><DeepZond toothNum={41} /></td>
                    <td><DeepZond toothNum={31} /></td>
                    <td><DeepZond toothNum={32} /></td>
                    <td><DeepZond toothNum={33} /></td>
                    <td><DeepZond toothNum={34} /></td>
                    <td><DeepZond toothNum={35} /></td>
                    <td><DeepZond toothNum={36} /></td>
                    <td><DeepZond toothNum={37} /></td>
                    <td><DeepZond toothNum={38} /></td>
                </tr>
                <tr style={{paddingTop: '10px'}}>
                    <td style={{paddingTop: '10px'}} className="title">Зубні відкладення</td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={48} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={47} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={46} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={45} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={44} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={43} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={42} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={41} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={31} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={32} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={33} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={34} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={35} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={36} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={37} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={38} />
                    </td>
                </tr>
                <tr>
                    <td className="title">Гноєтеча</td>
                    <td><Fertilizer toothNum={48} /></td>
                    <td><Fertilizer toothNum={47} /></td>
                    <td><Fertilizer toothNum={46} /></td>
                    <td><Fertilizer toothNum={45} /></td>
                    <td><Fertilizer toothNum={44} /></td>
                    <td><Fertilizer toothNum={43} /></td>
                    <td><Fertilizer toothNum={42} /></td>
                    <td><Fertilizer toothNum={41} /></td>
                    <td><Fertilizer toothNum={31} /></td>
                    <td><Fertilizer toothNum={32} /></td>
                    <td><Fertilizer toothNum={33} /></td>
                    <td><Fertilizer toothNum={34} /></td>
                    <td><Fertilizer toothNum={35} /></td>
                    <td><Fertilizer toothNum={36} /></td>
                    <td><Fertilizer toothNum={37} /></td>
                    <td><Fertilizer toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Кровоточивість</td>
                    <td><Bleeding toothNum={48} /></td>
                    <td><Bleeding toothNum={47} /></td>
                    <td><Bleeding toothNum={46} /></td>
                    <td><Bleeding toothNum={45} /></td>
                    <td><Bleeding toothNum={44} /></td>
                    <td><Bleeding toothNum={43} /></td>
                    <td><Bleeding toothNum={42} /></td>
                    <td><Bleeding toothNum={41} /></td>
                    <td><Bleeding toothNum={31} /></td>
                    <td><Bleeding toothNum={32} /></td>
                    <td><Bleeding toothNum={33} /></td>
                    <td><Bleeding toothNum={34} /></td>
                    <td><Bleeding toothNum={35} /></td>
                    <td><Bleeding toothNum={36} /></td>
                    <td><Bleeding toothNum={37} /></td>
                    <td><Bleeding toothNum={38} /></td>
                </tr>
                
                <tr>
                    <td className="title">Фуркація</td>
                    <td><Furkacia toothNum={48} /></td>
                    <td><Furkacia toothNum={47} /></td>
                    <td><Furkacia toothNum={46} /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Furkacia toothNum={38} /></td>
                    <td><Furkacia toothNum={38} /></td>
                    <td><Furkacia toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Рухомість</td>
                    <td><Moving toothNum={48} /></td>
                    <td><Moving toothNum={47} /></td>
                    <td><Moving toothNum={46} /></td>
                    <td><Moving toothNum={45} /></td>
                    <td><Moving toothNum={44} /></td>
                    <td><Moving toothNum={43} /></td>
                    <td><Moving toothNum={42} /></td>
                    <td><Moving toothNum={41} /></td>
                    <td><Moving toothNum={31} /></td>
                    <td><Moving toothNum={32} /></td>
                    <td><Moving toothNum={33} /></td>
                    <td><Moving toothNum={34} /></td>
                    <td><Moving toothNum={35} /></td>
                    <td><Moving toothNum={36} /></td>
                    <td><Moving toothNum={37} /></td>
                    <td><Moving toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Вестибулярно</td>
                    <td colSpan={16} style={{textAlign: 'center', width: '1024px'}}>
                        <FormulaPerio3848 />
                    </td>
                </tr>
                <tr>
                    <td className="title">Глибина зондування</td>
                    <td><DeepZond toothNum={48} /></td>
                    <td><DeepZond toothNum={47} /></td>
                    <td><DeepZond toothNum={46} /></td>
                    <td><DeepZond toothNum={45} /></td>
                    <td><DeepZond toothNum={44} /></td>
                    <td><DeepZond toothNum={43} /></td>
                    <td><DeepZond toothNum={42} /></td>
                    <td><DeepZond toothNum={41} /></td>
                    <td><DeepZond toothNum={31} /></td>
                    <td><DeepZond toothNum={32} /></td>
                    <td><DeepZond toothNum={33} /></td>
                    <td><DeepZond toothNum={34} /></td>
                    <td><DeepZond toothNum={35} /></td>
                    <td><DeepZond toothNum={36} /></td>
                    <td><DeepZond toothNum={37} /></td>
                    <td><DeepZond toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Ясений край</td>
                    <td><DeepZond toothNum={48} /></td>
                    <td><DeepZond toothNum={47} /></td>
                    <td><DeepZond toothNum={46} /></td>
                    <td><DeepZond toothNum={45} /></td>
                    <td><DeepZond toothNum={44} /></td>
                    <td><DeepZond toothNum={43} /></td>
                    <td><DeepZond toothNum={42} /></td>
                    <td><DeepZond toothNum={41} /></td>
                    <td><DeepZond toothNum={31} /></td>
                    <td><DeepZond toothNum={32} /></td>
                    <td><DeepZond toothNum={33} /></td>
                    <td><DeepZond toothNum={34} /></td>
                    <td><DeepZond toothNum={35} /></td>
                    <td><DeepZond toothNum={36} /></td>
                    <td><DeepZond toothNum={37} /></td>
                    <td><DeepZond toothNum={38} /></td>
                </tr>
                <tr style={{paddingTop: '10px'}}>
                    <td style={{paddingTop: '10px'}} className="title">Зубні відкладення</td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={48} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={47} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={46} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={45} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={44} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={43} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={42} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={41} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={31} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={32} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={33} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={34} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={35} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={36} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={37} />
                    </td>
                    <td style={{paddingTop: '10px'}}>
                        <DentalDeposits toothNum={38} />
                    </td>
                </tr>
                <tr>
                    <td className="title">Гноєтеча</td>
                    <td><Fertilizer toothNum={48} /></td>
                    <td><Fertilizer toothNum={47} /></td>
                    <td><Fertilizer toothNum={46} /></td>
                    <td><Fertilizer toothNum={45} /></td>
                    <td><Fertilizer toothNum={44} /></td>
                    <td><Fertilizer toothNum={43} /></td>
                    <td><Fertilizer toothNum={42} /></td>
                    <td><Fertilizer toothNum={41} /></td>
                    <td><Fertilizer toothNum={31} /></td>
                    <td><Fertilizer toothNum={32} /></td>
                    <td><Fertilizer toothNum={33} /></td>
                    <td><Fertilizer toothNum={34} /></td>
                    <td><Fertilizer toothNum={35} /></td>
                    <td><Fertilizer toothNum={36} /></td>
                    <td><Fertilizer toothNum={37} /></td>
                    <td><Fertilizer toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Кровоточивість</td>
                    <td><Bleeding toothNum={48} /></td>
                    <td><Bleeding toothNum={47} /></td>
                    <td><Bleeding toothNum={46} /></td>
                    <td><Bleeding toothNum={45} /></td>
                    <td><Bleeding toothNum={44} /></td>
                    <td><Bleeding toothNum={43} /></td>
                    <td><Bleeding toothNum={42} /></td>
                    <td><Bleeding toothNum={41} /></td>
                    <td><Bleeding toothNum={31} /></td>
                    <td><Bleeding toothNum={32} /></td>
                    <td><Bleeding toothNum={33} /></td>
                    <td><Bleeding toothNum={34} /></td>
                    <td><Bleeding toothNum={35} /></td>
                    <td><Bleeding toothNum={36} /></td>
                    <td><Bleeding toothNum={37} /></td>
                    <td><Bleeding toothNum={38} /></td>
                </tr>
                
                <tr>
                    <td className="title">Фуркація</td>
                    <td><Furkacia toothNum={48} /></td>
                    <td><Furkacia toothNum={47} /></td>
                    <td><Furkacia toothNum={46} /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Furkacia toothNum={38} /></td>
                    <td><Furkacia toothNum={38} /></td>
                    <td><Furkacia toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Рухомість</td>
                    <td><Moving toothNum={48} /></td>
                    <td><Moving toothNum={47} /></td>
                    <td><Moving toothNum={46} /></td>
                    <td><Moving toothNum={45} /></td>
                    <td><Moving toothNum={44} /></td>
                    <td><Moving toothNum={43} /></td>
                    <td><Moving toothNum={42} /></td>
                    <td><Moving toothNum={41} /></td>
                    <td><Moving toothNum={31} /></td>
                    <td><Moving toothNum={32} /></td>
                    <td><Moving toothNum={33} /></td>
                    <td><Moving toothNum={34} /></td>
                    <td><Moving toothNum={35} /></td>
                    <td><Moving toothNum={36} /></td>
                    <td><Moving toothNum={37} /></td>
                    <td><Moving toothNum={38} /></td>
                </tr>
                <tr>
                    <td className="title">Статус зуба</td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                    <td>
                        <select className="perio-select" data-tooth="18">
                            <option value="other">Інший</option>
                            <option value="intact">Наявний</option>
                            <option value="empty">Відсутній</option>
                            <option value="implant">Імплант</option>
                            <option value="crown">Коронка</option>
                            <option value="pontic">Проміжна частина</option>
                        </select>
                    </td>
                </tr>

            </tbody>
                
            </table>
             
            </div>
    );
}
