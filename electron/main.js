
const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    },
    frame: false, // Frameless window for cyberpunk UI
    transparent: true, // Enable transparency
    icon: path.join(__dirname, '../public/favicon.ico'),
  });

  // In production, load the bundled app
  if (app.isPackaged) {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  } else {
    // In development, load from the dev server
    mainWindow.loadURL('http://localhost:8080');
    // Open DevTools automatically in development
    mainWindow.webContents.openDevTools();
  }

  // Register global shortcut for voice activation (Ctrl+X)
  globalShortcut.register('CommandOrControl+X', () => {
    mainWindow.webContents.send('activate-voice');
  });

  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Create window when Electron is ready
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Clean up shortcuts when app is about to quit
app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

// Handle IPC messages from renderer
ipcMain.on('minimize-app', () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.on('maximize-app', () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  }
});

ipcMain.on('close-app', () => {
  if (mainWindow) mainWindow.close();
});
