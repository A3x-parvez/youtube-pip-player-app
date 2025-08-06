// const { app, BrowserWindow, ipcMain, session } = require('electron');
// const path = require('path');

// let win;

// function createWindow() {
//   win = new BrowserWindow({
//     width: 640,
//     height: 360,
//     minWidth: 480,
//     minHeight: 270,
//     frame: false,
//     alwaysOnTop: true,
//     resizable: true,
//     icon: path.join(__dirname, 'icon.png'), // Optional: app icon
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js'),
//       nodeIntegration: true,
//       contextIsolation: false,
//       enableRemoteModule: true,
//       webviewTag: true
//     }
//   });

//   // // Set spoofed headers for YouTube embedding
//   // session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
//   //   details.requestHeaders['Referer'] = 'https://www.youtube.com/';
//   //   details.requestHeaders['User-Agent'] =
//   //     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36';
//   //   callback({ requestHeaders: details.requestHeaders });
//   // });

//   win.loadFile('index.html');
//   win.setMenuBarVisibility(false);

//      // 🛡️ Prevent new tabs/windows from opening externally
//   win.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
// }

// app.whenReady().then(createWindow);

// ipcMain.on("close-window", () => {
//   if (win) win.close();
// });

// ipcMain.on("minimize-window", () => {
//   if (win) win.minimize();
// });

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") app.quit();
// });


const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 640,
    height: 360,
    minWidth: 480,
    minHeight: 270,
    frame: false,
    alwaysOnTop: true,
    resizable: true,
    icon: path.join(__dirname, 'icon.png'), // Optional: app icon
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webviewTag: true
    }
  });

  win.loadFile('index.html');
  win.setMenuBarVisibility(false);

  // 🛡️ Prevent new tabs/windows from opening externally
  win.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
}

app.whenReady().then(createWindow);

// Listeners for window controls from the renderer process (index.html)
ipcMain.on("toggle-fullscreen", () => {
  if (win) {
    win.setFullScreen(!win.isFullScreen());
  }
});

ipcMain.on("close-window", () => {
  if (win) win.close();
});

ipcMain.on("minimize-window", () => {
  if (win) win.minimize();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});