const fs = require('fs')
console.log('starting Programm')
 const contents = fs.readFileSync('./hello.txt','utf-8')

 console.log(contents)