const { app, BrowserWindow,Notification  } = require('electron')


const db = require('./script/database')


function showNotification (){
  const notification = {
    title: 'Basic Notification',
    body: 'Notification from the Main process'
  }
  new Notification(notification).show()
}

function createWindow() {
  const win = new BrowserWindow(db.get('win').value())
  console.log(db.get('win'))
  win.loadFile('index.html').then(res=>{})
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

