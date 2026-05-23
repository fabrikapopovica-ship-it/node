const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: '#0e1621', // Темный фон приложения
    autoHideMenuBar: true,      // Скрываем верхнее меню Файл/Правка
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Загружаем наш HTML файл напрямую
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});