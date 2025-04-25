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
import Tooth48 from './Tooth48';
import Tooth47 from './Tooth47';
import Tooth46 from './Tooth46';
import Tooth45 from './Tooth45';
import {
    getStatusesSelector,
    getActiveToothNumber
} from "../../../Redux/Formula/selectors";


export default function PSR() {
    const toothActive = useSelector(getStatusesSelector);
    const activeNumber = useSelector(getActiveToothNumber);

    return (
        <div className="w-full scroll-x">
            <section className="psr-jaw">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                    y="0px" viewBox="0 0 2085 1602.9"  xmlSpace="preserve">
                <Tooth48 />
                <Tooth47 />
                <Tooth46 />
                <Tooth45 />
                
                
                {/* <Tooth47 />
                <Tooth46 />
                <Tooth45 />
                <Tooth85 />
                <Tooth44 />
                <Tooth84 />
                <Tooth43 />
                <Tooth83 />
                <Tooth42 />
                <Tooth82 />
                <Tooth41 />
                <Tooth81 />
                <Tooth31 />
                <Tooth71 />
                <Tooth32 />
                <Tooth72 />
                <Tooth33 />
                <Tooth73 />
                <Tooth34 />
                <Tooth74 />
                <Tooth35 />
                <Tooth75 />
                <Tooth36 />
                <Tooth37 />
                <Tooth38 /> */}
                 </svg>
            </section>
        </div>
    );
}
