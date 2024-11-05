import { app, BrowserWindow, ipcMain } from 'electron'

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        }
    })
//open dev tools
    win.webContents.openDevTools();
    win.loadURL('http://localhost:4200');//TODO: delte in production
}


app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin')
          app.quit();
    });
})

ipcMain.on('click', () => {
    console.log('pong');
});