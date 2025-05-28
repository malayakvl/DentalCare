import { Transition } from '@headlessui/react';
import { Link, router, useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { appLangSelector } from "../../../Redux/Layout/selectors";
import Lang from "lang.js";
import lngMaterial from "../../../Lang/Material/translation";
import { useDispatch, useSelector } from "react-redux";


export default function Bone37({
  className = '',
}) {
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngMaterial,
        locale: appLang,
    });
    const dispatch = useDispatch();

    return (
        <g id="bone_37" className="df-bone bottom" opacity="0" style={{opacity: 0, transition: 'opacity'}}>
            <g className="periodontal level" style={{visibility: 'inherit'}}>
                <path className="st0" d="M1635.6,1186.2c9.5,34.5,23.5,70.5,42,103.7c15.9,28.6,42.4,65.9,65.8,94.6
                            c14.9-3.2,29.6-6.4,44.3-9.9c31.3-7.3,61.7-15.5,92-25.8c7.7-2.6,15.3-5.3,22.8-8.1c-23-28.5-49.5-64.1-67.8-95.2
                            c-19-32.3-35.4-66-49.2-100.9c-1.1-0.2-2.2-0.1-3.3,0.5c-0.9,0.5-1.5,1.3-2.1,2.1c-6.8,9-15.6,16.8-26,22.5
                            c-12.2,6.7-26.2,12.4-40.2,15.5c-23.3,5.2-47.5,6.9-70.9,1.9C1640.6,1186.6,1638.1,1186,1635.6,1186.2z"
                      style={{strokeWidth: 2}}/>
                <path className="st43" d="M1785.6,1144.6c-1.1-0.2-2.2-0.1-3.3,0.5c-0.9,0.5-1.5,1.3-2.1,2.1c-6.8,9-15.6,16.8-26,22.5
                            c-12.2,6.7-26.2,12.4-40.2,15.5c-23.3,5.2-47.5,6.9-70.9,1.9c-2.5-0.5-4.9-1.1-7.4-0.9"
                      style={{strokeWidth: 2}}/>
            </g>
            <g className="periodontal level" style={{visibility: 'hidden'}}>
                <path className="st0" d="M1641,1204.3c9.1,28.8,21.4,58.1,36.6,85.5c15.9,28.6,42.4,65.9,65.8,94.6
                            c14.8-3.2,29.6-6.4,44.3-9.9c31.3-7.3,61.7-15.5,92.1-25.8c7.7-2.6,15.3-5.3,22.8-8.1c-23-28.5-49.5-64.1-67.8-95.2
                            c-16.2-27.5-30.5-56.1-42.9-85.5c-0.2,0.1-0.5,0.1-0.7,0.2c-11.8,4.3-28.4,37.2-75.1,48C1674.7,1217.8,1650.4,1203.1,1641,1204.3z"
                      style={{strokeWidth: 2}} />
                <path className="st43" d="M1791.8,1160c-0.2,0.1-0.5,0.1-0.7,0.2c-11.8,4.3-28.4,37.2-75.1,48
                            c-41.4,9.6-65.7-5.1-75.1-3.8" style={{strokeWidth: 2}}/>
            </g>
            <g className="periodontal level" style={{visibility: 'hidden'}}>
                <path className="st0" d="M1648.9,1227.4c7.9,21.2,17.5,42.3,28.6,62.5c15.9,28.6,42.4,65.9,65.8,94.6
                            c14.8-3.2,29.6-6.4,44.3-9.9c31.3-7.3,61.7-15.5,92.1-25.8c7.7-2.6,15.3-5.3,22.8-8.1c-23-28.5-49.5-64.1-67.8-95.2
                            c-12.5-21.2-23.8-43.1-34.1-65.5c-0.2,0-0.4,0.1-0.6,0.2c-12.8,3.8-22.7,33.3-75.1,46.9C1674.4,1240.2,1658.2,1226.7,1648.9,1227.4
                        z" style={{strokeWidth: 2}}/>
                <path className="st43" d="M1800.7,1180c-0.2,0-0.4,0.1-0.6,0.2c-12.8,3.8-22.7,33.3-75.1,46.9
                            c-50.6,13.2-66.8-0.3-76,0.4" style={{strokeWidth: 2}}/>
            </g>
            <g className="periodontal level" style={{visibility: 'hidden'}}>
                <path className="st0" d="M1657.8,1249.6c5.9,13.7,12.5,27.2,19.7,40.3c15.9,28.6,42.4,65.9,65.8,94.6
                            c14.8-3.2,29.6-6.4,44.3-9.9c31.3-7.3,61.7-15.5,92.1-25.8c7.7-2.6,15.3-5.3,22.8-8.1c-23-28.5-49.5-64.1-67.8-95.2
                            c-9.6-16.4-18.6-33.1-26.9-50.2c-0.3,0.1-0.6,0.2-0.8,0.3c-11.6,4.9-19.6,36.9-73.2,51.4
                            C1690.7,1258.7,1667.6,1247.3,1657.8,1249.6C1657.9,1249.6,1657.9,1249.6,1657.8,1249.6z"
                      style={{strokeWidth: 2}}/>
                <path className="st43" d="M1807.9,1195.3c-0.3,0.1-0.6,0.2-0.8,0.3c-11.6,4.9-19.6,36.9-73.2,51.4
                            c-43.1,11.7-66.3,0.3-76,2.6c0,0,0,0-0.1,0" style={{strokeWidth: 2}}/>
            </g>
        </g>
    )
}
