// const showCarName = (_name) => {
//   console.log("name", _name);
// };

// const showCarColor = (_color) => {
//   console.log("color", _color);
// }

// showCarName("Mazda");

// module.exports = showCarName; // It can call only one so it can't do module.exports to showCarColor

//---------------------------------------------

// class Cars {
//   showCarName(_name) {
//     console.log("name", _name);
//   }

//   showCarColor(_color) {
//     console.log("color", _color);
//   }
// }

// module.exports = Cars;

//-----------------------------------------------

// class Cars {
//   static showCarName(_name) {
//     console.log("name", _name);
//   }

//   static showCarColor(_color) {
//     console.log("color", _color);
//   }
// }

// module.exports = Cars;

//--------------------------------------

exports.showCarName = (_name) => {
  console.log("name", _name);
};

exports.showCarColor = (_color) => {
  console.log("color", _color);
};
