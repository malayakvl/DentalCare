import { Transition } from '@headlessui/react';
import { Link, router, useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { appLangSelector } from "../../../Redux/Layout/selectors";
import Lang from "lang.js";
import lngMaterial from "../../../Lang/Material/translation";
import InputText from "../../../Components/Form/InputText";
import InputTreeSelect from "../../../Components/Form/InputTreeSelect";
import { emptyProducersAutocompleteAction, findProducersAction } from "../../../Redux/Clinic";
import { useDispatch, useSelector } from "react-redux";
import { userSearchResultsSelector } from "../../../Redux/Clinic/selectors";
import InputSelect from "../../../Components/Form/InputSelect";

import {
    getStatusesSelector,
    getActiveToothNumber
} from "../../../Redux/Formula/selectors";
import MovePerio from './Move';
import Furkacia from './Furkacia';
import FormulaPerio from './FormulaPerio';

export default function Formula() {
    const toothActive = useSelector(getStatusesSelector);
    const activeNumber = useSelector(getActiveToothNumber);

    return (
        <div className="w-full scroll-x">
            <table className="table-auto perio-table">
                <tbody>
                {/* <tr>
                    <td className="title"><span className="text-[14px]">Статус зуба</span></td>
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
                </tr> */}
                {/* <tr>
                    <td className="title"><span className="text-[14px]">Рухомість</span></td>
                    <td style={{width: '60px'}}>
                        <MovePerio />
                    </td>
                    <td>
                        <MovePerio />
                    </td>
                    <td>
                        <MovePerio />
                    </td>
                    <td>
                        <MovePerio />
                    </td>
                    <td>
                        <MovePerio />
                    </td>
                    <td>
                        <MovePerio />
                    </td>
                    <td>
                        <MovePerio />
                    </td>
                    <td>
                        <MovePerio />
                    </td>
                    <td>
                        <MovePerio />
                    </td>
                    <td>
                        <MovePerio />
                    </td>
                    <td>
                        <MovePerio />
                    </td>
                    <td>
                        <MovePerio />
                    </td>
                </tr> */}
                {/* <tr>
                    <td className="title"><span className="text-[14px]">Фуркація</span></td>
                    <td>
                        <Furkacia />
                    </td>
                    <td>
                        <Furkacia />
                    </td>
                    <td>
                        <Furkacia />
                    </td>
                    <td>
                        <Furkacia />
                    </td>
                    <td>
                        <Furkacia />
                    </td>
                    <td>
                        <Furkacia />
                    </td>
                    <td>
                        <Furkacia />
                    </td>
                    <td>
                        <Furkacia />
                    </td>
                    <td>
                        <Furkacia />
                    </td>
                    <td>
                        <Furkacia />
                    </td>
                    <td>
                        <Furkacia />
                    </td>
                    <td>
                        <Furkacia />
                    </td>
                </tr>
                <tr>
                    <td className="title"><span className="text-[14px]">Кровоточивість</span></td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="title"><span className="text-[14px]">Гноєтеча</span></td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="title"><span className="text-[14px]">Зубні відкладення</span></td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="title"><span className="text-[14px]">Ясенний край</span></td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="title"><span className="text-[14px]">Глибина зондування</span></td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="title"><span className="text-[14px]">Вестибулярно</span></td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                    <td>
                        <div className="flex flex-row">
                            <Furkacia />
                            <Furkacia />
                            <Furkacia />
                        </div>
                    </td>
                </tr> */}
                <tr>
                    <td className="title"></td>
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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="title"><span className="text-[14px]">Вестибулярно</span></td>
                    <td colSpan={16} style={{textAlign: 'center', width: '1024px'}}>
                        <FormulaPerio />
                    </td>
                </tr>
                </tbody>
                
            </table>
             
            </div>
    );
}
