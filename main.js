const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 640,
    height: 360,
    frame: false,
    alwaysOnTop: true,
    resizable: true,
    transparent: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,  // Required for using `require()` in renderer
      contextIsolation: false // Disable if you use nodeIntegration
    }
  });

  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);

ipcMain.on('close-window', () => {
  if (win) win.close();
});

ipcMain.on('minimize-window', () => {
  if (win) win.minimize();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
