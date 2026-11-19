# SOS-HelP
A small web app that flashes a message in Morse code using your phone screen. It works offline, so once you have opened it one time, you can use it with no signal at all.

Built for [Hack Club Survive](https://survive.hackclub.com).

<img width="800" height="376" alt="MorseSignalFlasher-Brave2026-11-1909-05-11-ezgif com-video-to-gif-converter" src="https://github.com/user-attachments/assets/f536024e-3cfe-4879-9042-507d7971230b" />

## Why

If you are lost or stuck somewhere without signal, your phone screen is still a light. This turns it into a signal lamp, so you can send SOS or a short message to someone who can see you.

## Features

- Type a message with letters and numbers and it flashes in Morse
- Speed slider from 5 to 15 WPM, starting at 8
- STOP cuts the signal right away
- Works offline after the first visit
- Made for phone screens mainly

## How to use

1. Open the page once while you are online, so it can save itself on your device.
2. Type a message, or leave it as SOS.
3. Pick a speed and tap START.
4. Turn your brightness all the way up and point the screen at whoever you are signalling.

## Run it yourself

There is no build step and nothing to install.

```
python -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` straight from the folder works too, but offline mode needs a server.

## How it works

- `morse.js` has the Morse table and turns text into a list of on and off steps. A dot is 1 unit, a dash is 3, the gap inside a letter is 1, between letters is 3 and between words is 7. One unit is 1200 / WPM milliseconds.
- `app.js` runs the flash loop, the STOP button and the speed slider.
- `sw.js` is a service worker that saves every file the first time you visit, so the app keeps working offline.

Plain HTML, CSS and JavaScript. No frameworks and no packages.

## Coming next

- A beep in sync with the flash
- Decoding Morse back into text
- A practice mode to learn the letters
- Vibration on phones, and remembering your last message and speed
