const { app, BrowserWindow,Notification  } = require('electron')
const path = require('path')
const fs = require('fs')

console.log(fs.readdirSync('/'))


const db = require('./js/database')

winConfig = db.get('win').value()

console.log(winConfig)
winConfig.webPreferences = {
  preload: path.join(__dirname, 'preload.js')
}
function showNotification (){
  const notification = {
    title: 'Basic Notification',
    body: 'Notification from the Main process'
  }
  new Notification(notification).show()
}

function createWindow() {
  const win = new BrowserWindow(winConfig)
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
}).then(showNotification)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
