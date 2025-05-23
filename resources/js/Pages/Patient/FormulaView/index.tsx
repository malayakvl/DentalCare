import React from 'react';
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


export default function FormulaView({formulaData}) {
    return (
        <>
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

        
                    {formulaData.tooth48.show && <Tooth48 formulaToothData={formulaData.tooth48} />}
                    {formulaData.tooth47.show && <Tooth47 formulaToothData={formulaData.tooth47} />}
                    {formulaData.tooth46.show && <Tooth46 formulaToothData={formulaData.tooth47} />}
                    {formulaData.tooth45.show && <Tooth45 formulaToothData={formulaData.tooth45} />}
                    {formulaData.tooth85.show && <Tooth85 formulaToothData={formulaData.tooth85} />}
                    {formulaData.tooth44.show && <Tooth44 formulaToothData={formulaData.tooth44} />}
                    {formulaData.tooth84.show && <Tooth84 formulaToothData={formulaData.tooth84} />}
                    {formulaData.tooth43.show && <Tooth43 formulaToothData={formulaData.tooth43} />}
                    {formulaData.tooth83.show && <Tooth83 formulaToothData={formulaData.tooth83} />}
                    {formulaData.tooth42.show && <Tooth42 formulaToothData={formulaData.tooth42} />}
                    {formulaData.tooth82.show && <Tooth82 formulaToothData={formulaData.tooth82} />}
                    {formulaData.tooth41.show && <Tooth41 formulaToothData={formulaData.tooth41} />}
                    {formulaData.tooth81.show && <Tooth81 formulaToothData={formulaData.tooth81} />}
                    {formulaData.tooth31.show && <Tooth31 formulaToothData={formulaData.tooth31} />}
                    {formulaData.tooth71.show && <Tooth71 formulaToothData={formulaData.tooth71} />}
                    {formulaData.tooth32.show && <Tooth32 formulaToothData={formulaData.tooth32} />}
                    {formulaData.tooth72.show && <Tooth72 formulaToothData={formulaData.tooth72} />}
                    {formulaData.tooth33.show && <Tooth33 formulaToothData={formulaData.tooth33} />}
                    {formulaData.tooth73.show && <Tooth73 formulaToothData={formulaData.tooth73} />}
                    {formulaData.tooth34.show && <Tooth34 formulaToothData={formulaData.tooth34} />}
                    {formulaData.tooth74.show && <Tooth74 formulaToothData={formulaData.tooth74} />}
                    {formulaData.tooth35.show && <Tooth35 formulaToothData={formulaData.tooth35} />}
                    {formulaData.tooth75.show && <Tooth75 formulaToothData={formulaData.tooth75} />}
                    {formulaData.tooth36.show && <Tooth36 formulaToothData={formulaData.tooth36} />}
                    {formulaData.tooth37.show && <Tooth37 formulaToothData={formulaData.tooth37} />}
                    {formulaData.tooth38.show && <Tooth38 formulaToothData={formulaData.tooth38} />}

                    {formulaData.tooth28.show && <Tooth28 formulaToothData={formulaData.tooth28} />}
                    {formulaData.tooth27.show && <Tooth27 formulaToothData={formulaData.tooth27} />}
                    {formulaData.tooth26.show && <Tooth26 formulaToothData={formulaData.tooth26} />}
                    {formulaData.tooth25.show && <Tooth25 formulaToothData={formulaData.tooth25} />}
                    {formulaData.tooth65.show && <Tooth65 formulaToothData={formulaData.tooth65} />}
                    {formulaData.tooth24.show && <Tooth24 formulaToothData={formulaData.tooth24} />}
                    {formulaData.tooth64.show && <Tooth64 formulaToothData={formulaData.tooth64} />}
                    {formulaData.tooth23.show && <Tooth23 formulaToothData={formulaData.tooth23} />}
                    {formulaData.tooth63.show && <Tooth63 formulaToothData={formulaData.tooth63} />}
                    {formulaData.tooth22.show && <Tooth22 formulaToothData={formulaData.tooth22} />}
                    {formulaData.tooth62.show && <Tooth62 formulaToothData={formulaData.tooth62} />}
                    {formulaData.tooth21.show && <Tooth21 formulaToothData={formulaData.tooth21} />}
                    {formulaData.tooth61.show && <Tooth61 formulaToothData={formulaData.tooth61} />}
                    {formulaData.tooth11.show && <Tooth11 formulaToothData={formulaData.tooth11} />}
                    {formulaData.tooth51.show && <Tooth51 formulaToothData={formulaData.tooth51} />}
                    {formulaData.tooth12.show && <Tooth12 formulaToothData={formulaData.tooth12} />}
                    {formulaData.tooth52.show && <Tooth52 formulaToothData={formulaData.tooth52} />}
                    {formulaData.tooth13.show && <Tooth13 formulaToothData={formulaData.tooth13} />}
                    {formulaData.tooth53.show && <Tooth53 formulaToothData={formulaData.tooth53} />}
                    {formulaData.tooth14.show && <Tooth14 formulaToothData={formulaData.tooth14} />}
                    {formulaData.tooth54.show && <Tooth54 formulaToothData={formulaData.tooth54} />}
                    {formulaData.tooth15.show && <Tooth15 formulaToothData={formulaData.tooth15} />}
                    {formulaData.tooth55.show && <Tooth55 formulaToothData={formulaData.tooth55} />}
                    {formulaData.tooth16.show && <Tooth16 formulaToothData={formulaData.tooth16} />}
                    {formulaData.tooth17.show && <Tooth17 formulaToothData={formulaData.tooth17} />}
                    {formulaData.tooth18.show && <Tooth18 formulaToothData={formulaData.tooth18} />}
                    {/* <g className="pointers">
                        <path className="st35 st_pointers" d="M864.9,773l-4.3-15.9h18.7l-9.3,34.7 L864.9,773" id="pointer_83" style={{opacity: activeNumber == 83 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M772.4,773l-4.3-15.9h18.7l-9.3,34.7 L772.4,773" id="pointer_84" style={{opacity: activeNumber == 84 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M676.9,773l-4.3-15.9h18.7l-9.3,34.7 L676.9,773" id="pointer_85" style={{opacity: activeNumber == 85 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M267.3,739.2l5.1-18.8l9.3,34.7H263L267.3,739.2" id="pointer_18" style={{opacity: activeNumber == 18 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M267.9,773l-4.3-15.9h18.7l-9.3,34.7 L267.9,773" id="pointer_48" style={{opacity: activeNumber == 48 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M404.3,773l-4.3-15.9h18.7l-9.3,34.7 L404.3,773" id="pointer_47" style={{opacity: activeNumber == 47 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M562.1,773l-4.3-15.9h18.7l-9.3,34.7 L562.1,773" id="pointer_46" style={{opacity: activeNumber == 46 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M676.9,773l-4.3-15.9h18.7l-9.3,34.7 L676.9,773" id="pointer_45" style={{opacity: activeNumber == 45 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M772.4,773l-4.3-15.9h18.7l-9.3,34.7 L772.4,773" id="pointer_44" style={{opacity: activeNumber == 44 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M864.9,773l-4.3-15.9h18.7l-9.3,34.7 L864.9,773" id="pointer_43" style={{opacity: activeNumber == 43 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M948.6,773l-4.3-15.9H963l-9.3,34.7 L948.6,773" id="pointer_42"  style={{opacity: activeNumber == 42 || activeNumber == 82 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1007.3,773l-4.3-15.9h18.7l-9.3,34.7 L1007.3,773" id="pointer_41" style={{opacity: activeNumber == 41 || activeNumber == 81 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1831.3,773l-5.1,18.8l-9.3-34.7h18.7 L1831.3,773" id="pointer_38" style={{opacity: activeNumber == 38 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1694.9,773l-5.1,18.8l-9.3-34.7h18.7 L1694.9,773" id="pointer_37" style={{opacity: activeNumber == 37 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1537.1,773l-5.1,18.8l-9.3-34.7h18.7 L1537.1,773" id="pointer_36" style={{opacity: activeNumber == 36 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1422.2,773l-5.1,18.8l-9.3-34.7h18.7 L1422.2,773" id="pointer_35" style={{opacity: activeNumber == 35 || activeNumber == 75? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1326.7,773l-5.1,18.8l-9.3-34.7h18.7 L1326.7,773" id="pointer_34" style={{opacity: activeNumber == 34 || activeNumber == 74 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1234.3,773l-5.1,18.8l-9.3-34.7h18.7 L1234.3,773" id="pointer_33" style={{opacity: activeNumber == 33 || activeNumber == 73 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1150.6,773l-5.1,18.8l-9.3-34.7h18.7 L1150.6,773" id="pointer_32" style={{opacity: activeNumber == 32 || activeNumber == 72 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1091.9,773l-5.1,18.8l-9.3-34.7h18.7 L1091.9,773" id="pointer_31" style={{opacity: activeNumber == 31 || activeNumber == 71 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M384.7,739.2l5.1-18.8l9.3,34.7h-18.7 L384.7,739.2" id="pointer_17" style={{opacity: activeNumber == 17 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M527.7,739.2l5.1-18.8l9.3,34.7h-18.7 L527.7,739.2" id="pointer_16" style={{opacity: activeNumber == 16 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M656.4,739.2l5.1-18.8l9.3,34.7h-18.7 L656.4,739.2" id="pointer_15" style={{opacity: activeNumber == 15 || activeNumber == 55 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M734,739.2l5.1-18.8l9.3,34.7h-18.7 L734,739.2" id="pointer_14" style={{opacity: activeNumber == 14 ||  activeNumber == 54 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M827.9,739.2l5.1-18.8l9.3,34.7h-18.7 L827.9,739.2" id="pointer_13" style={{opacity: activeNumber == 13 || activeNumber == 53 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M907.6,739.2l5.1-18.8l9.3,34.7h-18.7 L907.6,739.2" id="pointer_12" style={{opacity: activeNumber == 12 || activeNumber == 52? 1 : 0}} />
                        <path className="st35 st_pointers" d="M998.5,739.2l5.1-18.8l9.3,34.7h-18.7 L998.5,739.2" id="pointer_11" style={{opacity: activeNumber == 11 || activeNumber == 51 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1831.2,739.2l4.3,15.9h-18.7l9.3-34.7 L1831.2,739.2" id="pointer_28" style={{opacity: formulaData.tooth28.show ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1713.8,739.2l4.3,15.9h-18.7l9.3-34.7 L1713.8,739.2" id="pointer_27" style={{opacity: activeNumber == 27 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1570.8,739.2l4.3,15.9h-18.7l9.3-34.7 L1570.8,739.2" id="pointer_26" style={{opacity: activeNumber == 26 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1442.1,739.2l4.3,15.9h-18.7l9.3-34.7 L1442.1,739.2" id="pointer_25" style={{opacity: activeNumber == 25 || activeNumber == 65 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1364.5,739.2l4.3,15.9h-18.7l9.3-34.7 L1364.5,739.2" id="pointer_24" style={{opacity: activeNumber == 24 || activeNumber == 64 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1270.6,739.2l4.3,15.9h-18.7l9.3-34.7 L1270.6,739.2" id="pointer_23" style={{opacity: activeNumber == 23 || activeNumber == 63 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1190.9,739.2l4.3,15.9h-18.7l9.3-34.7 L1190.9,739.2" id="pointer_22" style={{opacity: activeNumber == 22 || activeNumber == 62 ? 1 : 0}} />
                        <path className="st35 st_pointers" d="M1100,739.2l4.3,15.9h-18.7l9.3-34.7 L1100,739.2" id="pointer_21" style={{opacity: activeNumber == 21 || activeNumber == 61 ? 1 : 0}} />
                    </g> */}
                </svg>

            </section>
            <section className="selected-diagnozis">
                {/* <FormulaDiagnozis /> */}
            </section>
        </>
    );
}
