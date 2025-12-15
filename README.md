# YouTube Player Bypass v2 (12-14-25)
# Updated by BandzCoderz via (ChatGPT) working ✅

A Tampermonkey userscript that replaces YouTube's default video player with an embedded iframe player. This script is designed to bypass certain restrictions, such as the 59-second limit, and provide a more customizable viewing experience.

---

## ⚠️ Disclaimer

This script is provided for educational purposes only. Using this script may violate YouTube's Terms of Service. Use it at your own discretion.

---

## Tested

Tested with AdBlock Plus And Ghostery Running on Chrome Beta 144.0.7559.20 (Official Build) beta (arm64); M2 Mac

---

## Description

YouTube Player Bypass is a modern Tampermonkey userscript that intercepts YouTube’s watch pages and replaces the native HTML5 player with a lightweight embedded iframe player. Designed specifically for YouTube’s single‑page application (SPA) architecture, it listens for navigation events, stops the original media playback, and dynamically injects a clean, configurable player without requiring page reloads. The script is resilient to frequent YouTube layout changes, avoids fragile internal APIs, and allows easy customization of autoplay behavior, controls, sizing, and appearance—making it a reliable solution for users seeking a simplified, distraction‑free YouTube playback experience.

---

## 🛠️ Technical

YouTube Player Bypass works by detecting the video player container on YouTube’s watch pages and replacing the native HTML5 player with a lightweight embedded iframe. It first stops all existing video and audio elements to prevent overlapping playback, then creates a configurable iframe with autoplay, controls, and quality settings. The script applies custom styles to the iframe, ensuring it fits seamlessly within the page layout, and uses retry logic to handle slow-loading or delayed player elements.

To handle YouTube’s single-page application (SPA) architecture, the script hooks into navigation events like yt-navigate-finish and yt-page-data-updated, ensuring the iframe replacement occurs whenever the user navigates between videos without a full page reload. Additionally, it includes a fallback URL-change watcher to catch navigation events that YouTube sometimes skips. This design makes the script resilient to frequent YouTube layout changes while maintaining a distraction-free and fully controllable player experience.

## 🤓 Diagram

![preview](https://i.imgur.com/RE0bNpr.jpeg)

---



## 📋 Features

- Replaces YouTube's default player with an embedded iframe player.
- Bypasses restrictions like the 59-second limit.
- Customizable player settings (e.g., autoplay, quality, language).
- Retry mechanism for robust player replacement.
- Lightweight and easy to use.

---

## 🛠️ Installation

1. **Install Tampermonkey**:
   - Install the [Tampermonkey extension](https://www.tampermonkey.net/) for your browser (Chrome, Firefox, Edge, Safari).

2. **Create a New Script**:
   - Open the Tampermonkey dashboard.
   - Click on the **"Create a new script"** button.

3. **Copy and Paste the Script**:
   - Replace the default template with the script provided below.

4. **Save the Script**:
   - Save the script by pressing `Ctrl+S` (Windows/Linux) or `Command+S` (Mac).

5. **Visit YouTube**:
   - Navigate to any YouTube video page (e.g., `https://www.youtube.com/watch?v=example`).
   - The script will automatically replace the default player with an embedded iframe player.

---

## ⚙️ Configuration

The script is configurable.
All config lives in one object near the top.

## Common tweaks
![preview2](https://i.imgur.com/iw46E46.jpeg)

1️⃣ Retry behavior (timing & reliability)
RETRY_ATTEMPTS: 10,   // How many times to wait for player
RETRY_DELAY: 800     // Delay (ms) between retries
👉 Increase if YouTube loads slowly.

2️⃣ Player container targeting
PLAYER_SELECTORS: [
    '#player',
    '#movie_player',
    'ytd-player'
]
👉 You can add/remove selectors if YouTube changes again.

3️⃣ Visual appearance (iframe)
IFRAME_STYLE: {
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '12px'
}

4️⃣ Player behavior (query params)
In createIframe():
const params = new URLSearchParams({
    autoplay: '1',           // change to '0'
    controls: '1',           // hide controls: '0'
    modestbranding: '1',
    rel: '0',
    enablejsapi: '1',
    fs: '1'
});

---

## 🐛 Known Issues

- none at this moment

## 🤝 Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

---

## 📝 License

This project is open source and available under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Enjoy a better YouTube experience! 🎉
