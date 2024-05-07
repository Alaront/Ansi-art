import React from 'react';

const SettingSymbols = ({changeSymbols, setDefaultSymbols, patternSymbols}) => {
    const changePatternSymbols = e => {
        changeSymbols(e.target.value)
    }

    return (
        <div className={"setting__symbol"}>
            <span>Current symbol pattern: {patternSymbols}</span>
            <input type={"text"} value={patternSymbols} onChange={changePatternSymbols}/>
            <button onClick={setDefaultSymbols}>Set default symbols</button>
        </div>
    );
};

export default SettingSymbols;
