// Ran the code through an online string escape-tool - http://www.freeformatter.com/javascript-escape.html#ad-output
module.exports = 'var app = require(\'app\');  \/\/ Module to control application life.\r\nvar BrowserWindow = require(\'browser-window\');  \/\/ Module to create native browser window.\r\n\r\n\/\/ Report crashes to our server.\r\nrequire(\'crash-reporter\').start();\r\n\r\n\/\/ Keep a global reference of the window object, if you don\'t, the window will\r\n\/\/ be closed automatically when the javascript object is GCed.\r\nvar mainWindow = null;\r\n\r\n\/\/ Quit when all windows are closed.\r\napp.on(\'window-all-closed\', function() {\r\n  if (process.platform != \'darwin\')\r\n    app.quit();\r\n});\r\n\r\n\/\/ This method will be called when Electron has done everything\r\n\/\/ initialization and ready for creating browser windows.\r\napp.on(\'ready\', function() {\r\n  \/\/ Create the browser window.\r\n  mainWindow = new BrowserWindow({width: 800, height: 600});\r\n\r\n  var url = process.env.ROOT_URL || \'http:\/\/localhost:3000\/\' \r\n  \/\/ and load the index.html of the app.\r\n  mainWindow.loadUrl(url);\r\n\r\n  \/\/ Emitted when the window is closed.\r\n  mainWindow.on(\'closed\', function() {\r\n    \/\/ Dereference the window object, usually you would store windows\r\n    \/\/ in an array if your app supports multi windows, this is the time\r\n    \/\/ when you should delete the corresponding element.\r\n    mainWindow = null;\r\n  });\r\n});'