import React from "react";
import FormulaView from "./FormulaView/index";

export default function ViewFormula({ formulaData }) {
    const fData = JSON.parse(formulaData.formula);
    
    return (
        <div className="py-0 w-full">
            <FormulaView formulaData={fData} action={'view'} />
        </div>
    );
}
