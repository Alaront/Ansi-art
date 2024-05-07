import React from 'react';

import './index.sass'

import ScreenIn from "./ScreenIn";
import ScreenOut from "./ScreenOut";

const Screens = ({children, ...props}) => {
    return (
        <div className={"screen"}>
            <ScreenIn setNewImage={props.setNewImage} changeCamera={props.changeCamera}/>
            {children}
            <ScreenOut artPixels={props.artPixels} artWidth={props.artWidth} artHeight={props.artHeight} artStep={props.artStep}/>
        </div>
    );
};

export default Screens;
