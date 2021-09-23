const assertArraysEqual = require("./assertArraysEqual");

const middle = (array) => {
	let midVal = [];
	if (array.length < 3) {
		return midVal;
	} else if (array.length % 2 !== 0) {
		midVal.push(array[Math.floor(array.length / 2)]);
		return midVal;
	} else {
		midVal.push(array[array.length / 2 - 1]);
		midVal.push(array[array.length / 2]);
		return midVal;
	}
};

module.exports = middle;
