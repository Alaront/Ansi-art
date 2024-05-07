import React, {useEffect, useRef, useState} from 'react';

const ScreenOut = ({artPixels, artWidth, artHeight, artStep, bgColor}) => {
    const canvas = useRef(null)
    const [context, setContext] = useState();

    useEffect(() => {
        setContext(canvas.current.getContext("2d"))
    }, [])

    useEffect(() => {
        drawAnsi();
    }, [artPixels])

    let drawAnsi = () =>{
        if(context) {
            canvas.current.width = artWidth;
            canvas.current.height = artHeight;

            context.clearRect(0, 0, artWidth, artHeight);
            context.fillStyle = bgColor;
            context.fillRect(0, 0, artWidth, artHeight);
            context.font = `normal ${artStep}px Verdana`
            context.font = `normal ${artStep}px Verdana`

            let pixel= null;

            for(let i = 0; i < artPixels.length; i++) {
                pixel = artPixels[i];
                context.fillStyle = pixel.color;
                context.fillText(pixel.symbol, pixel.x, pixel.y)
            }
        }
    }

    const downloadArt = e => {
        e.preventDefault();
        let canvasUrl = canvas.current.toDataURL("image/png", 1);
        const createEl = document.createElement('a');
        createEl.href = canvasUrl;
        createEl.download = "ansi-art";
        createEl.click();
        createEl.remove();
    }

    return (
        <div className={"screen__out"}>
            <canvas ref={canvas}/>
            <button className={"screen__out-button"} onClick={downloadArt}>Download</button>
        </div>
    );
};

export default ScreenOut;
