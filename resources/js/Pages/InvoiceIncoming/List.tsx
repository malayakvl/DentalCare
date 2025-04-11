import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appLangSelector } from "../../Redux/Layout/selectors";
import Lang from "lang.js";
import lngInvoice from "../../Lang/Invoice/translation";
import lngDropdown from "../../Lang/Dropdown/translation";
import PrimaryButton from "../../Components/Form/PrimaryButton";
import NavLink from "../../Components/Links/NavLink";
import DataTable from "../../Components/Table/DataTable";
import { PaginationType } from "../../Constants";
import { Link } from "@inertiajs/react";


export default function List({listData, permissions}) {
    const dispatch = useDispatch();
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngInvoice,
        locale: appLang,
    });
    const msgDropdown = new Lang({
        messages: lngDropdown,
        locale: appLang,
    });
    const sendRequest = useCallback(() => {
        // return dispatch(fetchItemsAction());
    }, [dispatch]);

    return (
        <AuthenticatedLayout
            header={
                <Head />
            }
        >
            <Head title={'Invoice Incoming'} />
            <div className="">
                <div>
                    <div className="p-4 sm:p-8 mb-8 content-data bg-content">
                        <section>
                            <header>
                                <div className="flex inline-flex">
                                    <h2>
                                        {msg.get('invoice.incoming.title.list')}
                                    </h2>
                                    <div className="pl-5 mt-2">
                                        <PrimaryButton>
                                            <NavLink
                                                href={'/invoice-incoming/create'}
                                            >
                                                {msg.get('invoice.create')}
                                            </NavLink>
                                        </PrimaryButton>
                                    </div>
                                </div>
                            </header>
                        </section>
                        <DataTable
                            paginationType={PaginationType.INCOMINGINVOICES}
                            sendRequest={sendRequest}>
                            {listData?.map((item) => (
                                <tr className="" key={item.id}>
                                    <td className="">{item.invoice_number}</td>
                                    <td className="">{item.invoice_date}</td>
                                    <td className="">
                                        <img
                                            src={`../../images/document-icons/${item.statusName}.svg`}
                                            title={msgDropdown.get(`dropdown.${item.statusName}`)}
                                            alt={msgDropdown.get(`dropdown.${item.statusName}`)}
                                            className="icon-doc"
                                        />
                                    </td>
                                    <td className="">{item.storeName}</td>
                                    <td className="">{item.producerName}</td>
                                    <td className="">{item.customerName}</td>
                                    <td className="text-right">
                                        <Link
                                            className="btn-edit"
                                            title={msg.get('filial.filial.edit')}
                                            href={`invoice-incoming/edit/${item.id}`}
                                        />
                                        <NavLink
                                            className="btn-delete"
                                            title={msg.get('filial.filial.delete')}
                                            href={`invoice-incoming/delete/${item.id}`}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </DataTable>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
