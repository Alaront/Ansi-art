import React, {useState} from 'react';

const SettingStep = ({step, changeStep, min, max}) => {

    const changeValue = e => {
        changeStep(e.target.value)
    }

    return (
        <div className={'setting__step'}>
            <span>Value step: {step}</span>
            <div className={"setting__step-input"}>
                <input type={"range"} min={min} max={max} value={step} onChange={changeValue}/>
            </div>
        </div>
    );
};

export default SettingStep;
