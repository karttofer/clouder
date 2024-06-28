const { app, BrowserWindow, session, screen } = require('electron')
const path = require('path')
const os = require('node:os')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

const reactDevToolsPath = path.join(
  os.homedir(),
  '.config/google-chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/5.2.0_0'
)

const reduxDevTools = path.join(
  os.homedir(),
  '.config/google-chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/3.1.6_0'
)

const createWindow = () => {
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      contextIsolation: true,
      nodeIntegration: true,
      enableRemoteModule: false,
      contextIsolation: false,
    },
  })

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

app.on('ready', () => {
  // Modify the CSP headers
  const filter = {
    urls: ['//127.0.0.1:8000/*'],
  }

  session.defaultSession.webRequest.onBeforeSendHeaders(
    filter,
    (details, callback) => {
      details.requestHeaders['User-Agent'] = 'MyAgent'
      callback({ requestHeaders: details.requestHeaders })
    }
  )

  createWindow()
})

app.whenReady().then(async () => {
  await session.defaultSession.loadExtension(reactDevToolsPath)
  await session.defaultSession.loadExtension(reduxDevTools)
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
