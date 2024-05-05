import './index.sass'
import Screens from "./components/Screens/Screens";
import {useState} from "react";
import {generationArt} from "./scripts/generation";

function App() {

    const [pixels, setPixels] = useState([]);
    const [pixelsArt, setPixelsArt] = useState([]);
    const [widthImage, setWidthImage] = useState(0);
    const [heightImage, setHeightImage] = useState(0);
    const [step, setStep] = useState(7)

    const setNewImage = (newImage) => {
        setPixels(newImage.data);
        setWidthImage(newImage.width)
        setHeightImage(newImage.height)
    }

    const startGeneration = (e) => {
        e.preventDefault();

        setPixelsArt(generationArt(pixels, step, widthImage, heightImage))

    }


    return (
        <div className="App">
          <Screens setNewImage={setNewImage} artPixels={pixelsArt} artWidth={widthImage} artHeight={heightImage} artStep={step}>
              <button onClick={startGeneration} className={"generation"}>Generation</button>
          </Screens>
        </div>
    );
}

export default App;
