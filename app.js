const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')

let window = null
let win = null

app.once('ready', () => {
	window = new BrowserWindow({
		width: 400,
		height: 500,
		show: false,
		resizable: false
	})

	window.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))

	window.once('ready-to-show', () => {
		window.show()
	})

	/*ipcMain.on('openChildWindow', (event, arg) => {

		console.log(arg);
		win = new BrowserWindow({
			width: 800,
			height: 600,
			show: false,
			webPreferences: {
				nodeIntegration: false
			}
		})
		win.loadURL(arg)

		win.once('ready-to-show', () => {
			win.maximize()
			win.show()
		})
	}) */

})