# Universal Meeting Bridge

## 🌍 Vision

Universal Meeting Bridge is a virtual meeting participant (“bot”) that joins Teams, Zoom, or Google Meet calls, translating and captioning all speech in real time for every user, in their chosen language—no installs, no plugins, full privacy.

---

## 🚀 Features

- Joins meetings as a bot participant, platform-agnostic
- Real-time speech-to-text and multi-language translation
- Delivers translations as captions, chat messages, or synthesized voice
- Each user gets output in their chosen language
- Multilingual meeting minutes and AI-generated summaries/Q&A
- Open-source, privacy-first, and extensible

---

## 🛠️ Architecture Overview

1. **Bot Integration:** Connects to Teams/Zoom/Meet via APIs or SDKs as a participant/bot
2. **Audio Capture:** Records audio from the meeting in real time
3. **Speech-to-Text (STT):** Converts audio to text (Whisper/Vosk/local cloud)
4. **Translation Engine:** LibreTranslate/DeepL/Google Translate API
5. **Text-to-Speech (TTS):** Converts translated text back to speech as needed (Coqui.ai/MozillaTTS)
6. **Output Delivery:** Sends captions (chat/overlay), or plays translated audio as bot
7. **Web Dashboard:** Lets users pick languages, download summaries, and manage preferences
8. **AI Summaries/Q&A:** GPT or open-source LLM for post-meeting insights

---

## ⚡ MVP Quickstart (Teams Bot Example)

### 1. Clone and Install

```bash
git clone https://github.com/Ranjithrosan17-dev/universal-meeting-bridge.git
cd universal-meeting-bridge
npm install
```

### 2. Configure Environment

Create a `.env` file:

```
MicrosoftAppId=YOUR_APP_ID
MicrosoftAppPassword=YOUR_APP_PASSWORD
PORT=3978
```

### 3. Start and Expose with ngrok

```bash
node index.js
grok http 3978
```
Set your bot's messaging endpoint in Azure to `https://<ngrok-url>.ngrok.io/api/messages`.

### 4. Add to Teams

- Add the bot to your team or chat (via App Studio/Developer Portal)
- The bot will auto-translate messages (English → Spanish by default)

---

## 🏗️ Folder Structure

```
universal-meeting-bridge/
├── index.js           # Main bot logic
├── .env.example       # Example environment variables
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── docs/ARCHITECTURE.md
├── .github/ISSUE_TEMPLATE/
│   ├── bug_report.md
│   ├── feature_request.md
├── package.json
```

---

## 📋 Contributing

- Open issues for bugs or features!
- See `CONTRIBUTING.md` for guidelines

---

## 📄 License

MIT

---