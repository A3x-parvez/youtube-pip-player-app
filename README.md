# 🎬 YouTube PiP Player App

A sleek floating YouTube Picture-in-Picture (PiP) player built with **Electron**, designed to stay always on top while you work or code. Just paste any YouTube link and start watching instantly in a lightweight mini player.

---

## 📦 Download

<p align="center">
  <a href="https://github.com/A3x-parvez/youtube-pip-player-app/releases/tag/v1.1.0">
    <img src="https://img.shields.io/badge/⬇%20Download%20Windows%20Installer-1.1.0-blue?style=for-the-badge&logo=windows" alt="Download .exe" />
  </a>
  <br/>
  <sub>Supports Windows 64-bit only</sub>
</p>

---

## ✨ Features

- 📌 Always on top mini-player
- 🎥 Paste and play any YouTube link
- 🧼 Minimal, glassy UI
- 🛑 Blocks browser popup and new window tabs
- 💻 Lightweight and efficient
- 🧪 Built with Electron

<!-- ---

## 📷 Screenshot

> Replace this image with your own screenshot

![Screenshot](screenshot.png) -->

---

## 🛠️ How to Build Locally

### 1. Clone this Repository

```bash
git clone https://github.com/A3x-parvez/youtube-pip-player.git
cd youtube-pip-player
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App in Dev Mode

```bash
npm start
```

### 4. Build Windows Installer (.exe)

```bash
npm run build
```

This will generate an installer in the `dist/` folder:

```
dist/
├── YouTube PiP Player Setup 1.1.0.exe
```

---

## 📁 File Structure

```
📦 youtube-pip-player
├── main.js              # Electron app main process
├── preload.js           # Preload script (optional)
├── index.html           # App UI
├── styles.css           # UI styles
├── icon.png             # App icon
├── package.json         # App metadata & build settings
└── dist/                # Output folder (installer .exe)
```

---

## 🚫 Git Ignore Suggestions

Make sure to ignore these in your `.gitignore`:

```
/node_modules
/dist
.DS_Store
*.log
```

---

## 📜 License

MIT © 2025 [A3x-parvez](https://github.com/A3x-parvez)

---

## 🤝 Contribute

Pull requests are welcome! For major changes, please open an issue first to discuss.

---

## 💡 Notes

* YouTube URLs like `https://www.youtube.com/watch?v=VIDEO_ID` are supported
* Keeps the video inside the PiP window (prevents new tab popups)

---

## 👤 Author & Links

- **Author:** A3x-parvez
- 🌐 [Portfolio](https://my-portfolio-2-alpha-sandy.vercel.app/)
- 🐦 [Twitter/X](https://x.com/parvez__404)
- 💼 [LinkedIn](https://linkedin.com/in/rijwanool-karim)
- 🐙 [GitHub](https://github.com/A3x-parvez)
- 📧 Email: rijwanoolkarim143r@gmail.com

---
