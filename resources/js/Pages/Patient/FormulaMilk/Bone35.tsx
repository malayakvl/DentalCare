import { Transition } from '@headlessui/react';
import { Link, router, useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { appLangSelector } from "../../../Redux/Layout/selectors";
import Lang from "lang.js";
import lngMaterial from "../../../Lang/Material/translation";
import { useDispatch, useSelector } from "react-redux";


export default function Bone35({
  className = '',
}) {
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngMaterial,
        locale: appLang,
    });
    const dispatch = useDispatch();

    return (
        <g id="bone_35" className="df-bone bottom" data-number="35" opacity="0" style={{opacity: 0, transition: "opacity"}} inflammation="0" data-type="undefined" level="0">
            <g className="periodontal level" data-level="0" style={{visibility: "inherit"}}>
                <path className="st0" d="M1370.7,1206.3c6.3,40.9,14.5,83.3,24.5,123.3c10.6,42.2,25.3,91.9,40.2,133.4
                c3.8-0.7,7.5-1.4,11.3-2.2c31.6-6.4,62.3-15.9,93-25.2c-15.4-33.9-33.6-76.9-44.1-111.1c-12-39.4-21.2-81.7-27.3-122.6
                c-0.4,0-0.9,0-1.3,0c-2.9,0.2-5.4,1.8-7.8,3.4c-10.2,6.7-21.3,12.8-34,13.9c-15.6,1.4-30.2-4.9-44.5-10.3
                C1377.5,1207.8,1374.2,1206.6,1370.7,1206.3z" style={{strokeWidth: 2}}></path>
                <path className="st43" d="M1468.3,1202.1c-0.4,0-0.9,0-1.3,0c-2.9,0.2-5.4,1.8-7.8,3.4c-10.2,6.7-21.3,12.8-34,13.9
                c-15.6,1.4-30.2-4.9-44.5-10.3c-3.3-1.2-6.6-2.5-10-2.7" style={{strokeWidth: 2}}></path>
            </g>
            <g className="periodontal level" data-level="1" style={{visibility: "hidden"}}>
                <path className="st0" d="M1375,1232.4c5.6,32.6,12.4,65.7,20.3,97.3c10.6,42.2,25.3,91.9,40.2,133.4
                c3.8-0.7,7.5-1.4,11.3-2.2c31.6-6.4,62.2-15.9,93-25.2c-15.4-33.9-33.6-76.9-44.1-111.1c-9.5-31.3-17.3-64.3-23.1-97.1
                c-0.4,0-0.8,0-1.2,0.1c-7.9,1.7-22.7,17.3-51.8,17.2C1389.2,1244.9,1380.9,1232.3,1375,1232.4z" style={{strokeWidth: 2}}></path>
                <path className="st43" d="M1472.5,1227.6c-0.4,0-0.8,0-1.2,0.1c-7.9,1.7-22.7,17.3-51.8,17.2
                c-30.3-0.1-38.6-12.6-44.5-12.5" style={{strokeWidth: 2}}></path>
            </g>
            <g className="periodontal level" data-level="2" style={{visibility: "hidden"}}>
                <path className="st0" d="M1380.1,1260.4c4.5,23.4,9.6,46.7,15.2,69.3c10.6,42.2,25.3,91.9,40.2,133.4
                c3.8-0.7,7.5-1.4,11.3-2.2c31.6-6.4,62.2-15.9,93-25.2c-15.4-33.9-33.6-76.9-44.1-111.1c-6.9-22.8-12.9-46.5-17.9-70.4
                c-0.3,0-0.6,0-0.8,0.1c-7.5,1.1-21.6,20.6-50.7,20.6C1395.8,1274.8,1386.9,1260.4,1380.1,1260.4z" style={{strokeWidth: 2}}></path>
                <path className="st43" d="M1477.7,1254.3c-0.3,0-0.6,0-0.8,0.1c-7.5,1.1-21.6,20.6-50.7,20.6
                c-30.3-0.1-39.2-14.5-46.1-14.5" style={{strokeWidth: 2}}></path>
            </g>
            <g className="periodontal level" data-level="3" style={{visibility: "hidden"}}>
                
                <path className="st43" d="M1483.7,1280.9c-0.1,0-0.1,0-0.2,0c-8.1,1.5-21.6,18.4-50.7,18.4
                c-29.8-0.1-41.3-12.4-47.5-12.9" style={{strokeWidth: 2}}></path>
            </g>
        </g>
    )
}
