import { app, BrowserWindow, ipcMain } from 'electron'
import { server } from './server.js';

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
    //win.webContents.openDevTools();
    win.loadURL('http://localhost:52674/');
    server.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
    //win.loadURL('http://localhost:61587/');
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