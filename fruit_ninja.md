# fruit_ninja

Webcam Fruit Ninja, after a reel by designedbyshreya
(instagram.com/reel/Da76UBYJ6fu). `fruit_ninja.js` serves `fruit_ninja.html` on
localhost; the page tracks your hands with MediaPipe Hand Landmarker in the
browser and uses each index fingertip as a blade over your mirrored camera feed.

## Usage

```bash
node "C:/Users/Anatta/email accounts/projects/fruit-ninja/fruit_ninja.js"
```

Opens http://localhost:4748 in the default browser. Optional first argument is
a port; `--no-open` skips opening the browser. Ctrl+C stops it.

In the page: "Play with webcam", allow the camera, then slice the watermelon to
start. "Play with mouse" skips the camera (hold the button and swipe). F toggles
fullscreen, M mutes.

## Inputs

- Webcam (browser permission), or mouse/touch.

## How it plays

Classic mode. Fruit is thrown up from the bottom in waves; a missed fruit costs
one of three lives, and slicing a bomb ends the game at once. One point per
fruit; three or more in a single swipe (slices less than 260 ms apart by the
same blade) adds a combo bonus equal to the count. Waves speed up and carry
more fruit and bombs over the first 90 seconds. Best score is kept in the
browser's localStorage.

A blade only cuts while it moves faster than 0.6 screen widths per second, so a
finger held still over a fruit does nothing; you have to swipe. Two hands give
two blades. Each fingertip is matched to the blade it was last frame, so the
hands never swap blades and draw one giant cut across the screen. Tuning
constants (slice speed, trail length, combo gap, gravity, lives) sit together
at the top of the script.

Fruit, halves, juice, and sound are all drawn and synthesized in code; there
are no image or audio files.

## Requirements

- Node (any recent version; uses only built-ins). No Python needed.
- A Chromium browser or Firefox. GPU delegate is tried first, CPU as fallback.
- Internet on first load: MediaPipe comes from jsDelivr, the hand model from
  Google Storage, the font from Google Fonts.

## Cost

Free. Everything runs locally in the browser; no API calls.

## Known issues

- The camera is blocked inside the Claude desktop browser pane, so hand
  tracking can only be tested in a real browser. Mouse mode works in the pane.
- The pane also screenshots badly: it resizes the viewport during capture, so
  frames come out stretched or quarter-size. The page itself is fine.

## Log

- 2026-10-08 - Built. Browser page plus Node server, same pattern as
  doomscroll-lock-in, because Python is not installed here. Mouse play
  (slicing, halves, juice, combos, bomb, game over, best score) and hand model
  load verified in the preview pane; hand tracking not yet verified on a real
  camera.
