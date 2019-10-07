const nodeID3 = require('./node_modules/node-id3/index.js')
const fs = require('fs')

// fs.readFile("06 Take Me.mp3", "utf8", 
//             function(error,data){
//                 console.log("Асинхронное чтение файла");
//                 if(error) throw error; // если возникла ошибка
//                 console.log(data);  // выводим считанные данные
// });

let file = fs.readFileSync("file.mp3");

let tags = nodeID3.read(file);

console.log(tags);
