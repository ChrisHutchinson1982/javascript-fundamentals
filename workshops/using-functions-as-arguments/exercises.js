// Look at the README for instructions.

// Exercise 1. Edit this function
const doubleCall = (callback) => {
  callback();
  callback();
};

// Exercise 2. Edit this function
const obnoxiousFn = (callback) => {
  console.log("EXECUTING CALLBACK!");
  return callback();
};

// // Exercise 3. Edit this function
const currentTime = (callback) => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  callback(timeString);
};

// // Bonus Exercise. Edit this function
const myMap = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const newElement = callback(element);
    newArray.push(newElement);
  }
  return newArray;
};

module.exports = {
  doubleCall,
  obnoxiousFn,
  currentTime,
  myMap,
};
