import React from 'react';

const SettingColor = ({bgColor, changeBgColor}) => {
    const changeColor = (e) => {
        changeBgColor(e.target.value)
    }

    return (
        <div className={'setting__color'}>
            <span>Color bg: </span>
            <input type={"color"} onChange={changeColor} value={bgColor}/>
        </div>
    );
};

export default SettingColor;
