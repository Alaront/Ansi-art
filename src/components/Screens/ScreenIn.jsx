import React, {useEffect, useRef, useState} from 'react';
import imgSrc from './tanks.png'

const ScreenIn = ({setNewImage, changeCamera}) => {
    const canvas = useRef(null)
    const [context, setContext] = useState(null);
    const [video, setVideo] = useState(null);
    const [stream, setStream] = useState(null);
    const timer = useRef(null)

    useEffect(() => {
        setContext(canvas.current.getContext("2d"))
    }, [])

    useEffect(() => {
        makePhotoInCanvas()
    }, [context])

    useEffect(() => {
        if(stream) {
            playCamera()

            timer.current = setInterval(() => {
                setNewImage(context.getImageData(0, 0, canvas.current.width, canvas.current.height))
            }, 200)
        } else {
            if(timer.current) {
                clearInterval(timer.current)
            }
            if(video) {
                video.autoplay = false;
                video.srcObject = null;
                video.remove();
            }
        }
        changeCamera(stream)
    }, [stream])

    const handleStartWebcam = async () => {
        setStream(true)
    };

    const handleStopWebcam = () => {
        setStream(false);
    };

    const playStream = (stream) => {
        const video = document.createElement('video');
        video.addEventListener('loadedmetadata', function() {
            const context = canvas.current.getContext('2d');
            const drawFrame = function() {
                context.drawImage(video, 0, 0);
                window.requestAnimationFrame(drawFrame);
            };
            drawFrame();
        });
        video.autoplay = true;
        video.srcObject = stream;

        setVideo(video)
    }

    const playCamera = () => {
        const devices = navigator.mediaDevices;
        if (devices && 'getUserMedia' in devices) {
            const constraints = {
                video: {
                    width: canvas.current.width,
                    height: canvas.current.height
                }
            };
            const promise = devices.getUserMedia(constraints);
            promise
                .then(function(stream) {
                    playStream(stream);
                })
                .catch(function(error) {
                    console.error(error.name + ': ' + error.message);
                });
        } else {
            console.error('Camera API is not supported.');
        }
    }

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
        context.clearRect(0, 0, image1.width, image1.height);
        context.drawImage(image1, 0, 0, image1.width, image1.height)
        setNewImage(context.getImageData(0, 0, image1.width, image1.height))
    }


    return (
        <div className={"screens__in"}>
            <canvas ref={canvas}/>
            <div className={"screens__btn"}>
                <label className="screens__in-files" htmlFor={"file"}>
                    <input type={"file"} className={"screens__in-input"} id={"file"} onChange={newPhoto}/>
                    <span className={"screens__in-text"}>Choice file</span>
                </label>
                <button className={"screen__in-camera"} onClick={handleStartWebcam}>Camera start</button>
                <button className={"screen__in-camera"} onClick={handleStopWebcam}>Camera stop</button>
            </div>
        </div>
    );
};

export default ScreenIn;
