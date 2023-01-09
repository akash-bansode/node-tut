const { createReadStream } = require("fs");

const stream = createReadStream("./Content/big.txt", "utf8");

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));
