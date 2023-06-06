const figlet = require("figlet");
figlet.text(
  "Antonio",
  {
    width: 100,
    height:100,
    font: "Ghost",
  },
  function (err, data) {
    if (err) {
      console.log(err);
    } else console.log(data);
  }
);