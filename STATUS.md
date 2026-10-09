# Fruit Ninja

Webcam Fruit Ninja copied from a reel (instagram.com/reel/Da76UBYJ6fu,
designedbyshreya). How to run it is in [fruit_ninja.md](fruit_ninja.md).

Where it stands: working on the real camera. Sensitivity is a live panel, and
the defaults (swipe 7, detection 6) were tuned by playing.

## Log

- 2026-10-08 - Built as a browser page plus a tiny Node server, like
  doomscroll-lock-in. Classic mode only: three lives, bombs end the game,
  combos for three or more fruit in one swipe. Everything is drawn in code, no
  asset files. Mouse mode added so it can be played and tested without a
  camera.
- 2026-10-08 - Too insensitive on the real camera. Made swipe speed and
  tracker confidence adjustable from a Sensitivity panel rather than guessing
  fixed numbers, since they depend on the camera, light and distance.
- 2026-10-08 - Swipe 7 and detection 6 felt right on the real camera; made
  them the defaults.
