// const showCarName = require("./cars");
// showCarName("Toyota");

//-------------------------------

//need instance
// const Cars = require("./cars");
// let car = new Cars();
// car.showCarName("Toyota");
// car.showCarColor("white");

//--------------------------------

// With static - no need instance
// const Cars = require("./cars");
// Cars.showCarName("Toyota");
// Cars.showCarColor("White");

//--------------------------------

const { showCarName, showCarColor } = require("./cars");
showCarName("Tesla");
showCarColor("Red");
