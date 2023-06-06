const fs = require("fs");

fs.writeFile("./exercise7.txt", "Test ", (err) => {
  if (err) {
    console.error(err);
  } else console.log("Funge");
});