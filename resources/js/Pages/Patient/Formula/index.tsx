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
import MaxilaryLeft from "./MaxilaryLeft";
import MaxilaryRight from "./MaxilaryRight";
import Bone31 from "./Bone31";
import Bone32 from "./Bone32";
import Bone33 from "./Bone33";
import Bone34 from "./Bone34";
import Bone35 from "./Bone35";
import Bone36 from "./Bone36";
import Bone37 from "./Bone37";
import Bone38 from "./Bone38";
import Bone41 from "./Bone41";
import Bone42 from "./Bone42";
import Bone43 from "./Bone43";
import Bone44 from "./Bone44";
import Bone45 from "./Bone45";
import Bone46 from "./Bone46";
import Bone47 from "./Bone47";
import Bone48 from "./Bone48";
import Bone18 from "./Bone18";
import Bone17 from "./Bone17";
import Bone16 from "./Bone16";
import Bone15 from "./Bone15";
import Bone14 from "./Bone14";
import Bone13 from "./Bone13";
import Bone12 from "./Bone12";
import Bone11 from "./Bone11";
import Bone21 from "./Bone21";
import Bone22 from "./Bone22";
import Bone23 from "./Bone23";
import Bone24 from "./Bone24";
import Bone25 from "./Bone25";
import Bone26 from "./Bone26";
import Bone27 from "./Bone27";
import Bone28 from "./Bone28";
import Tooth48 from "./Tooth48";
import Tooth47 from "./Tooth47";
import Tooth46 from "./Tooth46";
import Tooth45 from "./Tooth45";
import BoneR from "./BoneR";
import BoneRR from "./BoneRR";
import BoneL from "./BoneL";
import BoneLL from "./BoneLL";
import Tooth85 from "./Tooth85";
import Tooth44 from "./Tooth44";
import Tooth84 from "./Tooth84";
import Tooth43 from "./Tooth43";
import Tooth83 from "./Tooth83";
import Tooth42 from "./Tooth42";
import Tooth82 from "./Tooth82";
import Tooth41 from "./Tooth41";
import Tooth81 from "./Tooth81";
import Tooth31 from "./Tooth31";
import Tooth71 from "./Tooth71";
import Tooth32 from "./Tooth32";
import Tooth72 from "./Tooth72";
import Tooth33 from "./Tooth33";
import Tooth73 from "./Tooth73";
import Tooth34 from "./Tooth34";
import Tooth74 from "./Tooth74";
import Tooth35 from "./Tooth35";
import Tooth75 from "./Tooth75";
import Tooth36 from "./Tooth36";
import Tooth37 from "./Tooth37";
import Tooth38 from "./Tooth38";
import Tooth28 from "./Tooth28";
import Tooth27 from "./Tooth27";
import Tooth26 from "./Tooth26";
import Tooth25 from "./Tooth25";
import Tooth65 from "./Tooth65";
import Tooth24 from "./Tooth24";
import Tooth64 from "./Tooth64";
import Tooth23 from "./Tooth23";
import Tooth63 from "./Tooth63";
import Tooth22 from "./Tooth22";
import Tooth62 from "./Tooth62";
import Tooth21 from "./Tooth21";
import Tooth61 from "./Tooth61";
import Tooth11 from "./Tooth11";
import Tooth51 from "./Tooth51";
import Tooth12 from "./Tooth12";
import Tooth52 from "./Tooth52";
import Tooth13 from "./Tooth13";
import Tooth53 from "./Tooth53";
import Tooth14 from "./Tooth14";
import Tooth54 from "./Tooth54";
import Tooth15 from "./Tooth15";
import Tooth55 from "./Tooth55";
import Tooth16 from "./Tooth16";
import Tooth17 from "./Tooth17";
import Tooth18 from "./Tooth18";


export default function Formula({
   className = '',
}) {
    const appLang = useSelector(appLangSelector);
    const msg = new Lang({
        messages: lngMaterial,
        locale: appLang,
    });
    const dispatch = useDispatch();


    return (
        <section className={className}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                 y="0px" viewBox="0 0 2085 1602.9"  xmlSpace="preserve">
                <MaxilaryLeft />
                <MaxilaryRight />
                <g id="line">
                    <polygon id="line_1_" className="st37" points="2045.7,755.2 1050,755.2 1050,127 1047.9,127 1047.9,755.2 47.9,755.2 47.9,757.4
                        1047.9,757.4 1047.9,1516.5 1050,1516.5 1050,757.4 2045.7,757.4" />
                </g>
                <g className="lower">
                    <Bone31 />
                    <Bone32 />
                    <Bone33 />
                    <Bone34 />
                    <Bone35 />
                    <Bone36 />
                    <Bone37 />
                    <Bone38 />
                    <Bone41 />
                    <Bone42 />
                    <Bone43 />
                    <Bone44 />
                    <Bone45 />
                    <Bone46 />
                    <Bone47 />
                    <Bone48 />
                </g>
                <BoneR />
                <BoneL />
                <g className="upper">
                    <Bone18 />
                    <Bone17 />
                    <Bone16 />
                    <Bone15 />
                    <Bone14 />
                    <Bone13 />
                    <Bone12 />
                    <Bone11 />
                    <Bone21 />
                    <Bone22 />
                    <Bone23 />
                    <Bone24 />
                    <Bone25 />
                    <Bone26 />
                    <Bone27 />
                    <Bone28 />
                </g>
                <BoneLL />
                <BoneRR />

                <Tooth48 />
                <Tooth47 />
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
                <Tooth38 />

                <Tooth28 />
                <Tooth27 />
                <Tooth26 />
                <Tooth25 />
                <Tooth65 />
                <Tooth24 />
                <Tooth64 />
                <Tooth23 />
                <Tooth63 />
                <Tooth22 />
                <Tooth62 />
                <Tooth21 />
                <Tooth61 />
                <Tooth11 />
                <Tooth51 />
                <Tooth12 />
                <Tooth52 />
                <Tooth13 />
                <Tooth53 />
                <Tooth14 />
                <Tooth54 />
                <Tooth15 />
                <Tooth55 />
                <Tooth16 />
                <Tooth17 />
                <Tooth18 />
            </svg>
        </section>
    );
}
