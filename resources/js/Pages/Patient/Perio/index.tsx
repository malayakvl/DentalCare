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
import YasenKray from './YasenKray';
import IntersectChart1828Up from './IntersectChart1828Up'
import IntersectChart1828Down from './IntersectChart1828Down'
import { checkAction } from '@/Redux/Formula';


export default function Index() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkAction());
    })
    

    return (
        <div className="w-full scroll-x">
            {/* <div className='relative'>
                <IntersectChart1828Down />
            </div> */}
            <table className="table-auto perio-table">
                <tbody>
                <tr>
                    <td className="title">Статус зуба</td>
                    <td style={{borderLeft: 'none', borderRight: 'none'}}>
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
                    <td style={{borderLeft: 'none', borderRight: 'none'}}><Moving toothNum={48} /></td>
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
                    <td style={{borderLeft: 'none', borderRight: 'none'}}><Furkacia toothNum={48} /></td>
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
                    <td style={{borderLeft: 'none', borderRight: 'none'}}><Bleeding toothNum={48} /></td>
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
                    <td style={{borderLeft: 'none', borderRight: 'none'}}><Fertilizer toothNum={48} /></td>
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
                    <td style={{paddingTop: '10px', borderLeft: 'none', borderRight: 'none'}}>
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
                    <td style={{borderLeft: 'none', borderRight: 'none'}}>
                        <div className="col-xs-12 action-zone-v">
                            <YasenKray type={'vest'} idx={0} />
                            <YasenKray type={'vest'} idx={1} />
                            <YasenKray type={'vest'} idx={2} />
                        </div>
                    </td>
                    <td>
                        <div className="col-xs-12 action-zone-v">
                            <YasenKray type={'vest'} idx={3} />
                            <YasenKray type={'vest'} idx={4} />
                            <YasenKray type={'vest'} idx={5} />
                        </div>
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={6} />
                        <YasenKray type={'vest'} idx={7} />
                        <YasenKray type={'vest'} idx={8} />
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={9} />
                        <YasenKray type={'vest'} idx={10} />
                        <YasenKray type={'vest'} idx={11} />
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={12} />
                        <YasenKray type={'vest'} idx={13} />
                        <YasenKray type={'vest'} idx={14} />
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={15} />
                        <YasenKray type={'vest'} idx={16} />
                        <YasenKray type={'vest'} idx={17} />
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={18} />
                        <YasenKray type={'vest'} idx={19} />
                        <YasenKray type={'vest'} idx={20} />
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={21} />
                        <YasenKray type={'vest'} idx={22} />
                        <YasenKray type={'vest'} idx={23} />
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={24} />
                        <YasenKray type={'vest'} idx={25} />
                        <YasenKray type={'vest'} idx={26} />
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={27} />
                        <YasenKray type={'vest'} idx={28} />
                        <YasenKray type={'vest'} idx={29} />
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={30} />
                        <YasenKray type={'vest'} idx={31} />
                        <YasenKray type={'vest'} idx={32} />
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={33} />
                        <YasenKray type={'vest'} idx={34} />
                        <YasenKray type={'vest'} idx={35} />
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={36} />
                        <YasenKray type={'vest'} idx={37} />
                        <YasenKray type={'vest'} idx={38} />
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={39} />
                        <YasenKray type={'vest'} idx={40} />
                        <YasenKray type={'vest'} idx={41} />
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={42} />
                        <YasenKray type={'vest'} idx={43} />
                        <YasenKray type={'vest'} idx={44} />
                    </td>
                    <td>
                        <YasenKray type={'vest'} idx={45} />
                        <YasenKray type={'vest'} idx={46} />
                        <YasenKray type={'vest'} idx={47} />
                    </td>
                </tr>
                <tr>
                    <td className="title">Глибина зондування</td>
                    <td style={{borderRight: 'none', borderLeft: 'none'}}>
                        <div className="col-xs-12 action-zone-v">
                            <DeepZond type={'vest'} idx={0} />
                            <DeepZond type={'vest'} idx={1} />
                            <DeepZond type={'vest'} idx={2} />
                        </div>
                    </td>
                    <td>
                        <div className="col-xs-12 action-zone-v">
                            <DeepZond type={'vest'} idx={3} />
                            <DeepZond type={'vest'} idx={4} />
                            <DeepZond type={'vest'} idx={5} />
                        </div>
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={6} />
                        <DeepZond type={'vest'} idx={7} />
                        <DeepZond type={'vest'} idx={8} />
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={9} />
                        <DeepZond type={'vest'} idx={10} />
                        <DeepZond type={'vest'} idx={11} />
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={12} />
                        <DeepZond type={'vest'} idx={13} />
                        <DeepZond type={'vest'} idx={14} />
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={15} />
                        <DeepZond type={'vest'} idx={16} />
                        <DeepZond type={'vest'} idx={17} />
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={18} />
                        <DeepZond type={'vest'} idx={19} />
                        <DeepZond type={'vest'} idx={20} />
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={21} />
                        <DeepZond type={'vest'} idx={22} />
                        <DeepZond type={'vest'} idx={23} />
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={24} />
                        <DeepZond type={'vest'} idx={25} />
                        <DeepZond type={'vest'} idx={26} />
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={27} />
                        <DeepZond type={'vest'} idx={28} />
                        <DeepZond type={'vest'} idx={29} />
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={30} />
                        <DeepZond type={'vest'} idx={31} />
                        <DeepZond type={'vest'} idx={32} />
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={33} />
                        <DeepZond type={'vest'} idx={34} />
                        <DeepZond type={'vest'} idx={35} />
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={36} />
                        <DeepZond type={'vest'} idx={37} />
                        <DeepZond type={'vest'} idx={38} />
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={39} />
                        <DeepZond type={'vest'} idx={40} />
                        <DeepZond type={'vest'} idx={41} />
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={42} />
                        <DeepZond type={'vest'} idx={43} />
                        <DeepZond type={'vest'} idx={44} />
                    </td>
                    <td>
                        <DeepZond type={'vest'} idx={45} />
                        <DeepZond type={'vest'} idx={46} />
                        <DeepZond type={'vest'} idx={47} />
                    </td>
                </tr>
                <tr>
                    <td className="title" style={{backgroundColor: 'none'}}>
                        <span style={{display: 'block', marginTop: '50px'}}>Вестибулярно/Орально</span>
                    </td>
                    <td colSpan={16} style={{textAlign: 'center', width: '1050px', borderRight: 'none', borderLeft: 'none'}}>
                        <div className='relative'>
                            <IntersectChart1828Up />
                        </div>
                        <FormulaPerio1828 />
                        <div className='relative'>
                            <IntersectChart1828Down />
                        </div>
                    </td>
                </tr>
                <tr><td colSpan={17} style={{height: '40px'}}></td></tr>
                <tr>
                    <td className="title">Глибина зондування</td>
                    <td style={{borderRight: 'none', borderLeft: 'none'}}>
                        <div className="col-xs-12 action-zone-v">
                            <DeepZond type={'oral'} idx={0} />
                            <DeepZond type={'oral'} idx={1} />
                            <DeepZond type={'oral'} idx={2} />
                        </div>
                    </td>
                    <td>
                        <div className="col-xs-12 action-zone-v">
                            <DeepZond type={'oral'} idx={3} />
                            <DeepZond type={'oral'} idx={4} />
                            <DeepZond type={'oral'} idx={5} />
                        </div>
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={6} />
                        <DeepZond type={'oral'} idx={7} />
                        <DeepZond type={'oral'} idx={8} />
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={9} />
                        <DeepZond type={'oral'} idx={10} />
                        <DeepZond type={'oral'} idx={11} />
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={12} />
                        <DeepZond type={'oral'} idx={13} />
                        <DeepZond type={'oral'} idx={14} />
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={15} />
                        <DeepZond type={'oral'} idx={16} />
                        <DeepZond type={'oral'} idx={17} />
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={18} />
                        <DeepZond type={'oral'} idx={19} />
                        <DeepZond type={'oral'} idx={20} />
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={21} />
                        <DeepZond type={'oral'} idx={22} />
                        <DeepZond type={'oral'} idx={23} />
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={24} />
                        <DeepZond type={'oral'} idx={25} />
                        <DeepZond type={'oral'} idx={26} />
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={27} />
                        <DeepZond type={'oral'} idx={28} />
                        <DeepZond type={'oral'} idx={29} />
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={30} />
                        <DeepZond type={'oral'} idx={31} />
                        <DeepZond type={'oral'} idx={32} />
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={33} />
                        <DeepZond type={'oral'} idx={34} />
                        <DeepZond type={'oral'} idx={35} />
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={36} />
                        <DeepZond type={'oral'} idx={37} />
                        <DeepZond type={'oral'} idx={38} />
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={39} />
                        <DeepZond type={'oral'} idx={40} />
                        <DeepZond type={'oral'} idx={41} />
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={42} />
                        <DeepZond type={'oral'} idx={43} />
                        <DeepZond type={'oral'} idx={44} />
                    </td>
                    <td>
                        <DeepZond type={'oral'} idx={45} />
                        <DeepZond type={'oral'} idx={46} />
                        <DeepZond type={'oral'} idx={47} />
                    </td>
                </tr>
                
                <tr>
                    <td className="title">Ясений край Down</td>
                    <td style={{borderLeft: 'none', borderRight: 'none'}}>
                        <div className="col-xs-12 action-zone-v">
                            <YasenKray type={'oral'} idx={0} />
                            <YasenKray type={'oral'} idx={1} />
                            <YasenKray type={'oral'} idx={2} />
                        </div>
                    </td>
                    <td>
                        <div className="col-xs-12 action-zone-v">
                            <YasenKray type={'oral'} idx={3} />
                            <YasenKray type={'oral'} idx={4} />
                            <YasenKray type={'oral'} idx={5} />
                        </div>
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={6} />
                        <YasenKray type={'oral'} idx={7} />
                        <YasenKray type={'oral'} idx={8} />
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={9} />
                        <YasenKray type={'oral'} idx={10} />
                        <YasenKray type={'oral'} idx={11} />
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={12} />
                        <YasenKray type={'oral'} idx={13} />
                        <YasenKray type={'oral'} idx={14} />
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={15} />
                        <YasenKray type={'oral'} idx={16} />
                        <YasenKray type={'oral'} idx={17} />
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={18} />
                        <YasenKray type={'oral'} idx={19} />
                        <YasenKray type={'oral'} idx={20} />
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={21} />
                        <YasenKray type={'oral'} idx={22} />
                        <YasenKray type={'oral'} idx={23} />
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={24} />
                        <YasenKray type={'oral'} idx={25} />
                        <YasenKray type={'oral'} idx={26} />
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={27} />
                        <YasenKray type={'oral'} idx={28} />
                        <YasenKray type={'oral'} idx={29} />
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={30} />
                        <YasenKray type={'oral'} idx={31} />
                        <YasenKray type={'oral'} idx={32} />
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={33} />
                        <YasenKray type={'oral'} idx={34} />
                        <YasenKray type={'oral'} idx={35} />
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={36} />
                        <YasenKray type={'oral'} idx={37} />
                        <YasenKray type={'oral'} idx={38} />
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={39} />
                        <YasenKray type={'oral'} idx={40} />
                        <YasenKray type={'oral'} idx={41} />
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={42} />
                        <YasenKray type={'oral'} idx={43} />
                        <YasenKray type={'oral'} idx={44} />
                    </td>
                    <td>
                        <YasenKray type={'oral'} idx={45} />
                        <YasenKray type={'oral'} idx={46} />
                        <YasenKray type={'oral'} idx={47} />
                    </td>
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
                    <td className="title" style={{backgroundColor: 'none'}}>
                        <span style={{display: 'block', marginTop: '50px'}}>Вестибулярно/Орально</span>
                    </td>
                    <td colSpan={16} style={{textAlign: 'center', width: '1024px'}}>
                        <FormulaPerio3848 />
                    </td>
                </tr>
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
