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
import {
    categoryPercentSelector,
    sizeSearchResultsSelector,
    unitSearchResultsSelector,

} from "../../../Redux/Material/selectors";
import {
    emptySizeAction,
    emptyUnitAction,
    findSizeAction,
    findUnitAction,
    findPercentAction,
    setPercentAction
} from "../../../Redux/Material";
import InputSelect from "../../../Components/Form/InputSelect";


export default function MaxilaryRight({
    className = '',
}) {
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngMaterial,
        locale: appLang,
    });
    const dispatch = useDispatch();

    return (
        <g id="Maxillary_r" className="df-sinus">
            <path id="Maxillary_x5F_r_2_" className="st36" d="M1792,92.6c6.7,16,9.6,32.5,8.8,49.1c-0.8,16.4-5.3,32.7-9.8,48.9
                c-2.2,8.2-4.6,16.4-7.2,24.5c-2.7,8.6-6.8,17.1-14.4,23.3c-5,4.1-9.3,8-15.7,10.9c-3.6,1.7-7.8,2.9-10.7-1.3
                c-1-1.5-2.1-3.3-2.8-4.9c-0.8-1.7-1.8-3.3-2.9-4.8c-1.8-2.4-5.7-4.5-9.5-4.7c-3.7-0.1-7.8,1.6-10.2,3.7c-2.1,1.8-3.8,3.9-5.3,6
                c-1.3,1.9-1.9,4-3.5,4.3c-2.2,0.5-3.3-0.7-5-2c-1.9-1.4-3.1-3.1-4-4.9c-2.2-4.2-3.9-9.8-5.8-14.1c-1.1-2.6-2.2-5.3-4.1-7.4
                c-1.9-2-5.8-3.4-8.6-3.3c-2.6,0.1-5.8,1.2-7.5,3.1c-1.8,2-3.3,4.6-4.2,7.1c-0.8,2.4-1.3,5-2.7,7.1c-0.5,0.8-1.2,1.6-2.3,2
                c-2.5,1-4.4,0.7-7.2,0.9c-3,0.2-5.2,1.8-6.8,3.5c-3,3.2-4.4,7-6.9,10.4c-4.6,6.4-12.5,11.2-22.8,11.1c-7.9-0.1-14.8-3.4-19.1-8.1
                c-4.1-4.5-7.5-10.3-14.9-9.7c-7,0.6-10.6,5.8-12.3,12.7c-0.9,3.5-1.2,6.1-4.2,6.3c-3.4,0.2-3.7-2.5-4.3-4.9
                c-0.9-3.6-1-7.8-1.9-11.8c-1.8-8.4-7.1-14.6-16.2-14c-5.2,0.3-8.7,3.6-10.8,7.1c-2.4,4-3.7,8.3-5.4,12.5c-1,2.4-3.5,9-5.8,10.8
                c-0.9,0.7-2.5,0.6-3.5,0c-1.6-1-1.5-6.8-1.5-7.9c0-3.5-1.7-7.2-5.5-8.9c-4.7-2-10.5-0.7-14.4,2.2c-4.6,3.4-6.5,8.2-9,12.4
                c-2.1,3.5-5,6.6-10.4,7.1c-9.1,0.8-10.8-4-12-10.3c-1.7-9-0.9-19.3-2.8-29.1c-0.2-0.9-0.4-1.7-0.7-2.6c-1.6-4.7-6-11-12.8-11.7
                c-9.3-0.9-16.6,6.8-19.6,13.1c-1.4,2.9-2.7,6-3.7,8.9c-1.2,3.5-2.5,7.2-3.3,10.6c-0.7,3-1.4,5.8-4.3,8.3c-7.5,6.4-14.4,4.7-18.6-3
                c-1.3-2.5-2.5-5.9-3.2-8.5c-0.9-3.1-1.4-6.5-2.4-9.7c-1.1-3.6-3.7-8.1-8.5-9.4c-2.9-0.8-6.1-0.6-9,0.2c-2.6,0.7-5.1,2.9-6.6,4.6
                c-1.4,1.7-2.2,3.9-5,4.2c-3.1,0.3-4.8-1.9-5.6-4.3c-4.5-13-6.1-26.9-8.2-40.4c-1.3-8.5-2.6-16.9-3.3-25.4
                c-1.9-22.1-2.4-44.2-1.4-66.4L1792,92.6z"></path>
        </g>

    )
}
