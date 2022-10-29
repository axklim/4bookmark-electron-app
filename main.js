const { app, BrowserWindow } = require('electron');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 280,
        height: 500,
        backgroundColor: '#253238',
        show: false,
        frame: false,
        resizable: false,
    });
    mainWindow.loadFile('index.html');
    // mainWindow.webContents.openDevTools();
    mainWindow.once('ready-to-show', () => mainWindow.show());
};

app.on('ready', () => createWindow());
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
