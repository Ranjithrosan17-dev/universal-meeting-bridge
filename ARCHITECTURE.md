# Universal Meeting Bridge - Architecture

## Overview

- Joins meetings as a bot participant on Teams, Zoom, and Meet
- Captures audio, runs STT, translates, and delivers chat or voice translations

## Main Components

- **Bot Service:** Platform-specific bot interface (Node.js for Teams MVP)
- **Audio Capture:** Uses meeting APIs or virtual audio cable for platforms
- **STT Service:** Converts speech to text (Whisper, Vosk)
- **Translation Service:** LibreTranslate API (self-hosted or public)
- **TTS Service:** Coqui.ai, MozillaTTS (optional, for spoken output)
- **Output Delivery:** Posts translated text as message/chat/captions, or plays audio
- **Web Dashboard:** Lets users set language preferences, download meeting summaries
- **AI Assistant:** GPT-based summaries, Q&A

## Expansion Plan

- Add multi-language simultaneous captioning/voice
- Support more platforms (Zoom, Meet, Slack)
- Add overlay/browser extension for captions
- Voice cloning, sign language avatar, accessibility features

## Security/Privacy

- No audio/text leaves user/company infra unless explicitly configured
- All core services can be run 100% self-hosted
