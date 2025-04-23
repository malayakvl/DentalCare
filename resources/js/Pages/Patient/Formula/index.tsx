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
import {
    getStatusesSelector,
    getActiveToothNumber
} from "../../../Redux/Formula/selectors";

export default function Formula() {
    const toothActive = useSelector(getStatusesSelector);
    const activeNumber = useSelector(getActiveToothNumber);

    return (
        <section>
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
                <g className="pointers">
                    <path className="st35 st_pointers" d="M267.3,739.2l5.1-18.8l9.3,34.7H263L267.3,739.2" id="pointer_18" style={{opacity: toothActive.tooth18.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M267.9,773l-4.3-15.9h18.7l-9.3,34.7 L267.9,773" id="pointer_48" style={{opacity: toothActive.tooth48.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M404.3,773l-4.3-15.9h18.7l-9.3,34.7 L404.3,773" id="pointer_47" style={{opacity: toothActive.tooth47.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M562.1,773l-4.3-15.9h18.7l-9.3,34.7 L562.1,773" id="pointer_46" style={{opacity: toothActive.tooth46.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M676.9,773l-4.3-15.9h18.7l-9.3,34.7 L676.9,773" id="pointer_45" style={{opacity: toothActive.tooth45.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M772.4,773l-4.3-15.9h18.7l-9.3,34.7 L772.4,773" id="pointer_44" style={{opacity: toothActive.tooth44.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M864.9,773l-4.3-15.9h18.7l-9.3,34.7 L864.9,773" id="pointer_43" style={{opacity: toothActive.tooth43.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M948.6,773l-4.3-15.9H963l-9.3,34.7 L948.6,773" id="pointer_42"  style={{opacity: toothActive.tooth42.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1007.3,773l-4.3-15.9h18.7l-9.3,34.7 L1007.3,773" id="pointer_41" style={{opacity: toothActive.tooth41.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1831.3,773l-5.1,18.8l-9.3-34.7h18.7 L1831.3,773" id="pointer_38" style={{opacity: toothActive.tooth38.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1694.9,773l-5.1,18.8l-9.3-34.7h18.7 L1694.9,773" id="pointer_37" style={{opacity: toothActive.tooth37.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1537.1,773l-5.1,18.8l-9.3-34.7h18.7 L1537.1,773" id="pointer_36" style={{opacity: toothActive.tooth36.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1422.2,773l-5.1,18.8l-9.3-34.7h18.7 L1422.2,773" id="pointer_35" style={{opacity: toothActive.tooth35.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1326.7,773l-5.1,18.8l-9.3-34.7h18.7 L1326.7,773" id="pointer_34" style={{opacity: toothActive.tooth34.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1234.3,773l-5.1,18.8l-9.3-34.7h18.7 L1234.3,773" id="pointer_33" style={{opacity: toothActive.tooth33.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1150.6,773l-5.1,18.8l-9.3-34.7h18.7 L1150.6,773" id="pointer_32" style={{opacity: toothActive.tooth32.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1091.9,773l-5.1,18.8l-9.3-34.7h18.7 L1091.9,773" id="pointer_31" style={{opacity: toothActive.tooth31.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M384.7,739.2l5.1-18.8l9.3,34.7h-18.7 L384.7,739.2" id="pointer_17" style={{opacity: toothActive.tooth17.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M527.7,739.2l5.1-18.8l9.3,34.7h-18.7 L527.7,739.2" id="pointer_16" style={{opacity: toothActive.tooth16.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M656.4,739.2l5.1-18.8l9.3,34.7h-18.7 L656.4,739.2" id="pointer_15" style={{opacity: toothActive.tooth15.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M734,739.2l5.1-18.8l9.3,34.7h-18.7 L734,739.2" id="pointer_14" style={{opacity: toothActive.tooth14.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M827.9,739.2l5.1-18.8l9.3,34.7h-18.7 L827.9,739.2" id="pointer_13" style={{opacity: toothActive.tooth13.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M907.6,739.2l5.1-18.8l9.3,34.7h-18.7 L907.6,739.2" id="pointer_12" style={{opacity: toothActive.tooth12.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M998.5,739.2l5.1-18.8l9.3,34.7h-18.7 L998.5,739.2" id="pointer_11" style={{opacity: toothActive.tooth11.active ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1831.2,739.2l4.3,15.9h-18.7l9.3-34.7 L1831.2,739.2" id="pointer_28" style={{opacity: toothActive.tooth28.active || activeNumber === 28 ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1713.8,739.2l4.3,15.9h-18.7l9.3-34.7 L1713.8,739.2" id="pointer_27" style={{opacity: toothActive.tooth27.active || activeNumber === 27 ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1570.8,739.2l4.3,15.9h-18.7l9.3-34.7 L1570.8,739.2" id="pointer_26" style={{opacity: toothActive.tooth26.active || activeNumber === 26 ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1442.1,739.2l4.3,15.9h-18.7l9.3-34.7 L1442.1,739.2" id="pointer_25" style={{opacity: toothActive.tooth25.active || activeNumber === 25 ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1364.5,739.2l4.3,15.9h-18.7l9.3-34.7 L1364.5,739.2" id="pointer_24" style={{opacity: toothActive.tooth24.active || activeNumber === 24 ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1270.6,739.2l4.3,15.9h-18.7l9.3-34.7 L1270.6,739.2" id="pointer_23" style={{opacity: toothActive.tooth23.active || activeNumber === 23 ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1190.9,739.2l4.3,15.9h-18.7l9.3-34.7 L1190.9,739.2" id="pointer_22" style={{opacity: toothActive.tooth22.active || activeNumber === 22 ? 1 : 0}} />
                    <path className="st35 st_pointers" d="M1100,739.2l4.3,15.9h-18.7l9.3-34.7 L1100,739.2" id="pointer_21" style={{opacity: toothActive.tooth21.active ? 1 : 0}} />
                </g>
            </svg>

        </section>
    );
}
