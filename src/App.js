import './index.sass'
import Screens from "./components/Screens/Screens";
import {useEffect, useRef, useState} from "react";
import {generationArt} from "./scripts/generation";
import Setting from "./components/Setting/Setting";

function App() {

    const [pixels, setPixels] = useState([]);
    const [pixelsArt, setPixelsArt] = useState([]);
    const [widthImage, setWidthImage] = useState(0);
    const [heightImage, setHeightImage] = useState(0);

    const [step, setStep] = useState(8);
    const [bgColor, setBgColor] = useState("#000000");
    const [patternSymbols, setPatternSymbols] = useState("№@#W$9876543210?!abc;:+=-,._ ");
    const [colorFont, setColorFont] = useState({
        type: 'all',
        color: '#ffffff'
    })

    const [isCamera, setIsCamera] = useState(false);


    useEffect(() => {
        if(isCamera) startGeneration()
    }, [pixels])

    const setNewImage = (newImage) => {
        setPixels(newImage.data);
        setWidthImage(newImage.width)
        setHeightImage(newImage.height)
    }

    const startGeneration = (e) => {
        e && e.preventDefault();

        setPixelsArt(generationArt(pixels, step, patternSymbols, colorFont, widthImage, heightImage))
    }

    const changeCamera = (state) => {
        setIsCamera(state)
    }

    const changeStep = (value) => {
        setStep(Number(value))
    }

    const changeBgColor = value => {
        setBgColor(value)
    }

    const changeSymbols = value => {
        setPatternSymbols(value)
    }

    const setDefaultSymbols = () => {
        setPatternSymbols("№@#W$9876543210?!abc;:+=-,._ ")
    }

    const changeColorFont = setting => {
        setColorFont(setting)
    }

    return (
        <div className="App">
          <Screens
              setNewImage={setNewImage}
              artPixels={pixelsArt}
              artWidth={widthImage}
              artHeight={heightImage}
              artStep={step}
              changeCamera={changeCamera}
              bgColor={bgColor}
          >
              <button onClick={startGeneration} className={"generation"}>Generation</button>
          </Screens>
          <Setting
              step={step}
              changeStep={changeStep}
              changeBgColor={changeBgColor}
              bgColor={bgColor}
              changeSymbols={changeSymbols}
              setDefaultSymbols={setDefaultSymbols}
              patternSymbols={patternSymbols}
              colorFont={colorFont}
              changeColorFont={changeColorFont}
          />
        </div>
    );
}

export default App;
