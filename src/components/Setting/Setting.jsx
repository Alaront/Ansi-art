import React from 'react';
import SettingStep from "./SettingStep";

import './index.sass'
import SettingColor from "./SettingColor";
import SettingSymbols from "./SettingSymbols";
import SettingColorFont from "./SettingColorFont";

const Setting = ({step, changeStep, bgColor, changeBgColor, changeSymbols, setDefaultSymbols, patternSymbols, changeColorFont, colorFont}) => {
    return (
        <div className={'setting'}>
            <SettingStep step={step} changeStep={changeStep} min={1} max={60}/>
            <SettingColor  bgColor={bgColor} changeBgColor={changeBgColor}/>
            <SettingSymbols changeSymbols={changeSymbols} setDefaultSymbols={setDefaultSymbols} patternSymbols={patternSymbols} />
            <SettingColorFont changeColorFont={changeColorFont} colorFont={colorFont}/>
        </div>
    );
};

export default Setting;
