// Lookup table

const MORSE = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
}

function encode(text) {
    const words = text.toUpperCase().split(" ");
    const codedWords = [];

    for (const word of words) {
        const codes = [];

        for (const letter of word) {
            const code = MORSE[letter];

            if (code !== undefined) {
                codes.push(code)
            }
        }
        if (codes.length >0){
            codedWords.push(codes.join(" "))
        }
    }
    return codedWords.join(" / ")
}

function unitMs(wpm){
    return 1200/wpm
}

function toTimeline(text, wpm){
    const unit = unitMs(wpm);
    const steps = [];
    const words = encode(text).split(" / ");

    for (let i = 0; i < words.length; i++) {
        const letters = words[i].split(" ");

        for (let j=0; j < letters.length; j++) {
            const symbols = letters[j];

            for (let k=0; k < symbols.length; k++){
                if (symbols[k] === "."){
                    steps.push({ on: true, ms:unit})
                }
                else{
                    steps.push({ on:true, ms: 3*unit})
                }
                // Gap inside a letter, but not after the last symbol
                if (k< symbols.length -1){
                    steps.push({ on:false, ms:unit})
                }
            }
            if (j<letters.length-1){
                steps.push({ on:false, ms:unit*3})
            }
        }
        if (i<words.length-1){
                steps.push({ on:false, ms:unit*7})
            }
    }
    return steps;
}

if (typeof module !== "undefined") {
    module.exports = {MORSE, encode, unitMs, toTimeline};
}

