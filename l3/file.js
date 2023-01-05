const fs = require("fs");

fs.writeFile("books.txt", "harry potter", (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("file created/updated");
});
