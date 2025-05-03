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
import DeepZondNew from './DeepZoondNew';
import YasenKray from './YasenKray'
import ZondChart from './ZondChart';
import YasenKrayNew from './YasenKrayNew';
import YasenChart from './YasenChart';
import IntersectChart from './IntersectChart'

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
    // const zondData = useSelector(getPerioZondDataSelector);
    const teethDiagnozis = useSelector(getTeethDiagnozisSelector);

    // useEffect(() => {
    //     console.log('ZOND DATA1', zondData)
    // }, [zondData])

    // const chartData = {
    //     labels: ['T1', 'T2','T3','T4','T5','T6','T7', 'T8', 'T9','T10','T11','T12','T13','T4', 'T15', 'T16'],
    //     datasets: [
    //         {
    //             type: 'line',
    //             label: '',
    //             data: [1, 3, 0, 18, 1, 1, 5, 5, 9, 0, 1, 6, 5, 4, 2, -2],
    //             fill: true,
    //             borderColor: 'rgb(8, 84, 17)',
    //             borderWidth: 1,
    //             backgroundColor: 'rgba(197, 54, 54, 0.4)',
    //             tension: 0.1
    //         },
    //         {
    //             type: 'bar',
    //             label: '',
    //             data: [1, 3, 0, 18, 1, 1, 5, 5, 9, 0, 1, 6, 5, 4, 2, 0],
    //             fill: true,
    //             borderColor: 'rgb(174, 7, 7)',
    //             borderWidth: 3,
    //             backgroundColor: 'rgba(197, 54, 54, 0.4)',
    //             barThickness: 1,
    //             tension: 0.1
    //         },
    //     ],
    //   };
           
    //   const options = {
    //     scales: {
    //       x: {
    //         ticks: {
    //           display: false, // скрыть подписи на оси X
    //         },
    //         title: {
    //           display: false, // скрыть название оси X
    //         },
    //         grid: {
    //             display: false
    //         }
    //       },
    //       y: {
    //         ticks: {
    //           display: false, // скрыть подписи на оси Y
    //         },
    //         title: {
    //           display: false, // скрыть название оси Y
    //         },
    //         grid: {
    //             display: false
    //         }
    //       },
    //     },
    //   };
    return (
        <div className="w-full scroll-x">
            <div className='relative'>
                {/* <ZondChart /> */}
    
                {/* <YasenChart />*/}

                <IntersectChart />
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
                    <td>
                        <div className="col-xs-12 action-zone-v">
                            <YasenKrayNew type={'vest'} idx={0} />
                            <YasenKrayNew type={'vest'} idx={1} />
                            <YasenKrayNew type={'vest'} idx={2} />
                        </div>
                    </td>
                    <td>
                        <div className="col-xs-12 action-zone-v">
                            <YasenKrayNew type={'vest'} idx={3} />
                            <YasenKrayNew type={'vest'} idx={4} />
                            <YasenKrayNew type={'vest'} idx={5} />
                        </div>
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={6} />
                        <YasenKrayNew type={'vest'} idx={7} />
                        <YasenKrayNew type={'vest'} idx={8} />
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={9} />
                        <YasenKrayNew type={'vest'} idx={10} />
                        <YasenKrayNew type={'vest'} idx={11} />
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={12} />
                        <YasenKrayNew type={'vest'} idx={13} />
                        <YasenKrayNew type={'vest'} idx={14} />
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={15} />
                        <YasenKrayNew type={'vest'} idx={16} />
                        <YasenKrayNew type={'vest'} idx={17} />
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={18} />
                        <YasenKrayNew type={'vest'} idx={19} />
                        <YasenKrayNew type={'vest'} idx={20} />
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={21} />
                        <YasenKrayNew type={'vest'} idx={22} />
                        <YasenKrayNew type={'vest'} idx={23} />
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={24} />
                        <YasenKrayNew type={'vest'} idx={25} />
                        <YasenKrayNew type={'vest'} idx={26} />
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={27} />
                        <YasenKrayNew type={'vest'} idx={28} />
                        <YasenKrayNew type={'vest'} idx={29} />
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={30} />
                        <YasenKrayNew type={'vest'} idx={31} />
                        <YasenKrayNew type={'vest'} idx={32} />
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={33} />
                        <YasenKrayNew type={'vest'} idx={34} />
                        <YasenKrayNew type={'vest'} idx={35} />
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={36} />
                        <YasenKrayNew type={'vest'} idx={37} />
                        <YasenKrayNew type={'vest'} idx={38} />
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={39} />
                        <YasenKrayNew type={'vest'} idx={40} />
                        <YasenKrayNew type={'vest'} idx={41} />
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={42} />
                        <YasenKrayNew type={'vest'} idx={43} />
                        <YasenKrayNew type={'vest'} idx={44} />
                    </td>
                    <td>
                        <YasenKrayNew type={'vest'} idx={45} />
                        <YasenKrayNew type={'vest'} idx={46} />
                        <YasenKrayNew type={'vest'} idx={47} />
                    </td>
                </tr>
                <tr>
                    <td className="title">Глибина зондування</td>
                    <td>
                        <div className="col-xs-12 action-zone-v">
                            <DeepZondNew type={'vest'} idx={0} />
                            <DeepZondNew type={'vest'} idx={1} />
                            <DeepZondNew type={'vest'} idx={2} />
                        </div>
                    </td>
                    <td>
                        <div className="col-xs-12 action-zone-v">
                            <DeepZondNew type={'vest'} idx={3} />
                            <DeepZondNew type={'vest'} idx={4} />
                            <DeepZondNew type={'vest'} idx={5} />
                        </div>
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={6} />
                        <DeepZondNew type={'vest'} idx={7} />
                        <DeepZondNew type={'vest'} idx={8} />
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={9} />
                        <DeepZondNew type={'vest'} idx={10} />
                        <DeepZondNew type={'vest'} idx={11} />
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={12} />
                        <DeepZondNew type={'vest'} idx={13} />
                        <DeepZondNew type={'vest'} idx={14} />
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={15} />
                        <DeepZondNew type={'vest'} idx={16} />
                        <DeepZondNew type={'vest'} idx={17} />
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={18} />
                        <DeepZondNew type={'vest'} idx={19} />
                        <DeepZondNew type={'vest'} idx={20} />
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={21} />
                        <DeepZondNew type={'vest'} idx={22} />
                        <DeepZondNew type={'vest'} idx={23} />
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={24} />
                        <DeepZondNew type={'vest'} idx={25} />
                        <DeepZondNew type={'vest'} idx={26} />
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={27} />
                        <DeepZondNew type={'vest'} idx={28} />
                        <DeepZondNew type={'vest'} idx={29} />
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={30} />
                        <DeepZondNew type={'vest'} idx={31} />
                        <DeepZondNew type={'vest'} idx={32} />
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={33} />
                        <DeepZondNew type={'vest'} idx={34} />
                        <DeepZondNew type={'vest'} idx={35} />
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={36} />
                        <DeepZondNew type={'vest'} idx={37} />
                        <DeepZondNew type={'vest'} idx={38} />
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={39} />
                        <DeepZondNew type={'vest'} idx={40} />
                        <DeepZondNew type={'vest'} idx={41} />
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={42} />
                        <DeepZondNew type={'vest'} idx={43} />
                        <DeepZondNew type={'vest'} idx={44} />
                    </td>
                    <td>
                        <DeepZondNew type={'vest'} idx={45} />
                        <DeepZondNew type={'vest'} idx={46} />
                        <DeepZondNew type={'vest'} idx={47} />
                    </td>
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
                <tr><td colSpan={17} style={{height: '40px'}}></td></tr>
                {/* <tr>
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
                </tr> */}
                {/* <tr>
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
                </tr> */}
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
