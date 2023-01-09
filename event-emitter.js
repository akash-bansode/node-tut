const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age)=>{
  console.log(`Data Recieved - User: ${name}, Age: ${age}`)
})

customEmitter.emit('response', 'John', 34)