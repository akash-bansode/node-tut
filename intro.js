// Globals - __dirname, __filename, require, module, process

const amount = 12;

if (amount < 10) {
  console.log("Small number");
} else {
  console.log("Large number");
}

console.log(`Hey! It's my first node app. `);

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log("Hello World");
}, 1000);
