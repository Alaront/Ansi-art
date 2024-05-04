import React from 'react';

import './index.sass'

import ScreenIn from "./ScreenIn";
import ScreenOut from "./ScreenOut";

const Screens = ({children, ...props}) => {
    return (
        <div className={"screen"}>
            <ScreenIn />
            {children}
            <ScreenOut />
        </div>
    );
};

export default Screens;
