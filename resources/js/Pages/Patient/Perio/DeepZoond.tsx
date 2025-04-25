
import React from 'react';
import { useSelector } from "react-redux";
import {
    getTeethDiagnozisSelector,
} from "../../../Redux/Formula/selectors";



export default function DeepZond({toothNum}) {
    // const teethDiagnozis = useSelector(getTeethDiagnozisSelector);
    // const tooth11Diagnozis = teethDiagnozis.tooth11;

    return ( 
        <>
            <div className="col-xs-12 action-zone-v" data-zone="22">
                <input className="yasen-edge bottom t48_38" type="text" />
                <input className="yasen-edge bottom t48_38" type="text" />
                <input className="yasen-edge bottom t48_38" type="text" />
            </div>
        </>
    )
}
