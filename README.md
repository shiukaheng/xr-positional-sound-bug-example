# xr-positional-sound-example
WebXR does not seem to be compatible with positional audio, specifically when put in VR mode. The audio would start stuttering once you are near the audio source and I suspect it is because the audio listener is switching between the left eye position and right eye position rapidly. However, positional audio seems to work fine in A-Frame, which is based on three.js, so I wonder if there is an easy fix to this. This is a barebones example. Please use the [WebXR API Emulator](https://chrome.google.com/webstore/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje?hl=en) if you don't have a VR device with you.

[Click here to launch the example.](https://shiukaheng.github.io/xr-positional-sound-bug-example/build/)
