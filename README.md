# YouTube Player Bypass v2 (12-14-25)
# Updated by BandzCoderz via (ChatGPT) working ✅

A Tampermonkey userscript that replaces YouTube's default video player with an embedded iframe player. This script is designed to bypass certain restrictions, such as the 59-second limit, and provide a more customizable viewing experience.

---

## ⚠️ Disclaimer

This script is provided for educational purposes only. Using this script may violate YouTube's Terms of Service. Use it at your own discretion.

## Tested

Tested with AdBlock Plus And Ghostery Running on Chrome Beta 144.0.7559.20 (Official Build) beta (arm64); M2 Mac

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

Common tweaks
Feature----------------Change
Disable autoplay-------autoplay: '0'
Hide controls----------`controls: '0'
Disable fullscreen-----fs: '0'
Show related videos----rel: '1'

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
