# Morse Signal Flasher

Offline web app that flashes a typed message in Morse code using the screen.
Built for Hack Club Survive (survive.hackclub.com), which requires projects
that work without internet or are about the outdoors.

## Stack

Plain HTML, CSS and JavaScript. No framework, no build step, no npm packages.
Keep it that way.

## Files

- `index.html`: page structure
- `style.css`: all styles
- `morse.js`: pure logic (MORSE table, `encode`, `unitMs`, `toTimeline`). No DOM access here.
- `app.js`: UI wiring, playback loop, service worker registration
- `sw.js`: cache-first service worker for offline use
- `manifest.webmanifest`: PWA manifest
- `README.md`: project description for reviewers

## Run and test

```
python3 -m http.server 8000
```

Open http://localhost:8000. Service workers do not run from `file://`.

Quick logic check from the terminal:

```
node -e 'const m=require("./morse.js"); console.log(m.encode("sos"))'
```

Expected output: `... --- ...`

## Rules for this project

- **Must work offline.** No CDN links, web fonts, analytics or network calls of any kind. Everything ships in the repo.
- **Any new file must be added to `FILES` in `sw.js`, and `CACHE` must be bumped** (v1 to v2 and so on) whenever a cached file changes. Otherwise users keep the old version.
- **Keep pure logic in `morse.js` and DOM code in `app.js`.** Use classic scripts, not ES modules, so the `module.exports` line at the bottom of `morse.js` keeps working for Node tests.
- **Morse timing is fixed.** Dot = 1 unit, dash = 3, gap inside a letter = 1, between letters = 3, between words = 7. One unit = 1200 / WPM ms. Sanity check: "SOS" is 27 units, "PARIS" is 43.
- **Flash safety.** Default speed stays at 8 WPM and the speed slider is capped at 15 WPM. Never remove the flashing-lights warning from the page.
- Playback uses a run token (`currentRun` in `app.js`). Any new playback feature must respect it so Stop always works.
- Works on phone screens first. Test at 360px width.

## Still to build

Marked `TODO(you)` in the code:

1. Beep with the Web Audio API, in sync with the flash
2. Speed slider (5 to 15 WPM)
3. `decode(morse)` in `morse.js`
4. Practice mode: flash a random letter or word, user types a guess, keep score
5. Vibration on phones, save last message and speed in localStorage
6. Own styling, screenshot, README in my own words, deploy to GitHub Pages

## How to help me

- I am building this myself and my coding time is tracked with Hackatime. Prefer explaining, giving hints and reviewing my code over writing whole features, unless I ask for the code directly.
- Make small changes to one file at a time and say what changed and why.
- Do not rewrite files that already work.
- Write plain, readable code with short comments. No clever one-liners.
- Any text you write (README, UI copy, commit messages) should be short and natural, with no em dashes.
