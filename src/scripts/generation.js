const findSymbolByNumber = (g, pattern) => {
    const symbols = "№@#W$9876543210?!abc;:+=-,._ ";
    const symbolsLength = pattern.length;
    const index = Math.round((g / 255) * (symbolsLength - 1));
    return pattern[index];
}

const generationArt = (pixels, step = 4, patternSymbols, colorFont, width, height) => {
    const pixelArtInfo = [];

    for(let y = 0; y < height; y += step) {
        for(let x = 0; x < width; x += step) {
            let posX = x * 4;
            let posY = y * 4;

            const posCurrent = (posY * width) + posX;

            if(pixels[posCurrent + 3] > 128) {
                let red = pixels[posCurrent];
                let green = pixels[posCurrent + 1];
                let blue = pixels[posCurrent + 2];

                let total = red + green + blue;
                let totalAverage = total / 3

                const color = colorFont.type === 'all' ? `rgb(${red}, ${green}, ${blue})` : colorFont.color ;

                const symbol = findSymbolByNumber(totalAverage, patternSymbols);

                // maybe use total 200
                pixelArtInfo.push({
                    x,
                    y,
                    color,
                    symbol
                })
            }
        }
    }

    return pixelArtInfo
}

export {
    generationArt
}
