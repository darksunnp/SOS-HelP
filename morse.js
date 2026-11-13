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

if (typeof module !== "undefined") {
    module.exports = {MORSE, encode};
}

