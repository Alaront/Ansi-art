import React, {useEffect, useState} from 'react';

const SettingColorFont = ({changeColorFont, colorFont}) => {
    const [color, setColor] = useState(colorFont.color)

    useEffect(() => {
        changeColorFont({
            type: colorFont.type,
            color: color
        })
    }, [color])

    const changeColor = ({target}) => {
        setColor(target.value)
    }

    const changeColorFontType = (type) => {
        changeColorFont({
            type: type,
            color: color
        })
    }

    return (
        <div className={"setting__color-font"}>
            <span>Color font: {colorFont.type === 'all' ? 'All' : colorFont.color}</span>
            <div className={'setting__color-font-change'}>
                <div className={`setting__color-font-item ${colorFont.type === 'all' ? 'setting__color-font-item--current' : ''}`} >
                    <span onClick={() => changeColorFontType('all')}></span>
                    <p>All</p>
                </div>
                <div className={`setting__color-font-item ${colorFont.type === 'one' ? 'setting__color-font-item--current' : ''}`}>
                    <span onClick={() => changeColorFontType('one')}></span>
                    <p>One</p>
                    <input type={"color"} value={color} onChange={changeColor}/>
                </div>
            </div>
        </div>
    );
};

export default SettingColorFont;
