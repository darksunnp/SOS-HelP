const { toTimeline } = require("./morse");

const messageInput = document.getElementById("message");
const startButton = document.getElementById("start")
const stopButton = document.getElementById("stop")
const flash = document.getElementById("flash")

const WPM = 8;

function sleep(ms) {
    return new Promise(function (resolve){
        setTimeout(resolve,ms);
    });
}

async function play() {
    const steps = toTimeline(messageInput.value,WPM);

    for (const step of steps){
        if (step.on === true){
            flash.classList.add("on")
        }
        else{
            flash.classList.remove("on")
        }

        await sleep(step.ms);
    }
    flash.classList.remove("on")
}

startButton.addEventListener("click", play)