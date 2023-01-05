const path = require("path");

let url = "http://fs1.co.il/bus/shop.php";

console.log(path.basename(url));
console.log(path.extname(url));
console.log(path.dirname(url));

//-------------------------------------------

console.log(__filename);
console.log(__dirname);
