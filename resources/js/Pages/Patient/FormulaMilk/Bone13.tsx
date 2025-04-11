import { Transition } from '@headlessui/react';
import { Link, router, useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { appLangSelector } from "../../../Redux/Layout/selectors";
import Lang from "lang.js";
import lngMaterial from "../../../Lang/Material/translation";
import { useDispatch, useSelector } from "react-redux";


export default function Bone13({
  className = '',
}) {
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngMaterial,
        locale: appLang,
    });
    const dispatch = useDispatch();

    return (
        <g id="bone_13" className="df-bone top" data-number="13" opacity="0" style={{opacity: 0, transition: "opacity"}} inflammation="0" data-type="undefined" level="0">
            <g className="periodontal level" data-level="0" style={{visibility: "inherit"}}>
                <path className="st0" d="M871.3,413.3c-0.1,0-0.1,0-0.2,0c-3.1-0.3-4.7-2.5-5.8-3.8c-0.6-0.7-1.3-1.4-1.9-2.2
                c-9.6-11.1-19.6-24.3-38.2-24.8c-16.7-0.4-33.5,11.5-44.1,23.6c-1.2,1.3-2.5,2.7-4.3,2.7h0c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.2,0
                l-27.2-276.5h0.2l68.5-0.2l15.4,0l0.3,2.2v0c0,3.8,0.5,7.6,1.5,11.3c0,0.1,0,0.2,0.1,0.3L871.3,413.3z" style={{strokeWidth: 2}}></path>
                <path className="st43" d="M871.3,413.5c-0.1,0-0.1,0-0.2,0c-3.1-0.3-4.7-2.5-5.8-3.8c-0.6-0.7-1.3-1.4-1.9-2.2
                c-9.6-11.1-19.6-24.3-38.2-24.8c-16.7-0.4-33.5,11.5-44.1,23.6c-1.2,1.3-2.5,2.7-4.3,2.7h0c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.2,0" style={{strokeWidth: 2}}></path>
            </g>
            <g className="periodontal level" data-level="1" style={{visibility: "hidden"}}>
                <path className="st0" d="M867.5,385.1c-7.5-2.7-16.6-24.4-47.2-23.1c-32.9,1.4-38.5,26.7-45.6,24.6
                c-0.2-0.1-0.3-0.1-0.5-0.2l-25-254.2h0.2l68.5-0.2l15.3,0l0.3,2.2v0c0,3.8,0.5,7.6,1.5,11.3c0,0.1,0,0.2,0.1,0.3L867.5,385.1z" style={{strokeWidth: 2}}></path>
                <path className="st43" d="M867.5,385.3c-7.5-2.7-16.6-24.4-47.2-23.1c-32.9,1.4-38.5,26.7-45.6,24.6
                c-0.2-0.1-0.3-0.1-0.5-0.2" style={{strokeWidth: 2}}></path>
            </g>
            <g className="periodontal level" data-level="2" style={{visibility: "hidden"}}>
                <path className="st0" d="M863.2,352.8c-7.1-2.4-12-26.8-46.5-26.8c-32.9,0.1-39.3,24.7-45.8,24.8h-0.1
                l-21.5-218.5h0.2l68.5-0.2l15.3,0l0.3,2.2v0c0,3.8,0.5,7.6,1.5,11.3c0,0.1,0,0.2,0.1,0.3L863.2,352.8z" style={{strokeWidth: 2}}></path>
                <path className="st43" d="M863.2,353c-7.1-2.4-12-26.8-46.5-26.8c-32.9,0.1-39.3,24.7-45.8,24.8h-0.1" style={{strokeWidth: 2}}></path>
            </g>
            <g className="periodontal level" data-level="3" style={{visibility: "hidden"}}>
                <path className="st0" d="M858.3,316.7C858.3,316.7,858.2,316.7,858.3,316.7c-5.9-1.4-10-34.7-49.6-34.9
                c-31.9-0.1-36.5,24-41.9,28.2l-17.5-177.7h0.2l68.5-0.2l15.3,0l0.3,2.2v0c0,3.8,0.5,7.6,1.5,11.3c0,0.1,0,0.2,0.1,0.3L858.3,316.7z" style={{strokeWidth: 2}}></path>
                <path className="st43" d="M858.3,316.9C858.3,316.9,858.2,316.9,858.3,316.9c-5.9-1.4-10-34.7-49.6-34.9
                c-31.9-0.1-36.5,24-41.9,28.2" style={{strokeWidth: 2}}></path>
            </g>
        </g>
    )
}
