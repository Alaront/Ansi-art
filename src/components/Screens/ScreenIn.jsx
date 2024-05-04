import React from 'react';

const ScreenIn = () => {
    return (
        <div className={"screens__in"}>
            <canvas />
            <label className="screens__in-files" for={"file"}>
                <input type={"file"} className={"screens__in-input"} id={"file"}/>
                <span className={"screens__in-text"}>Choice file</span>
            </label>
        </div>
    );
};

export default ScreenIn;
