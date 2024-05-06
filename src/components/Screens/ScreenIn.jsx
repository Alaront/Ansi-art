import React, {useEffect, useRef, useState} from 'react';
import imgSrc from './tanks.png'

const ScreenIn = ({setNewImage}) => {
    const canvas = useRef(null)
    const [context, setContext] = useState(null);

    useEffect(() => {
        setContext(canvas.current.getContext("2d"))
    }, [])

    useEffect(() => {
        makePhotoInCanvas()
    }, [context])

    const makePhotoInCanvas = () => {
        const image1 = new Image();
        image1.src = imgSrc;

        if(context) {
            image1.onload = function () {
                imageOnload(image1)
            }
        }
    }

    const newPhoto = ({target}) => {
        let url = URL.createObjectURL(target.files[0])
        const image1 = new Image();
        image1.src = url;

        image1.onload = function () {
            imageOnload(image1)
        }
    }

    const imageOnload = (image1) => {
        canvas.current.width = image1.width;
        canvas.current.height = image1.height;
        context.drawImage(image1, 0, 0, image1.width, image1.height)
        setNewImage(context.getImageData(0, 0, image1.width, image1.height))
    }


    return (
        <div className={"screens__in"}>
            <canvas ref={canvas}/>
            <label className="screens__in-files" htmlFor={"file"}>
                <input type={"file"} className={"screens__in-input"} id={"file"} onChange={newPhoto}/>
                <span className={"screens__in-text"}>Choice file</span>
            </label>
        </div>
    );
};

export default ScreenIn;
