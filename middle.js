const eqArrays = function (a, b) {
	if (a.length !== b.length) {
		return false;
	}
	for (let i = 0; i <= a.length; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}
	return true;
};

const assertArraysEqual = function (a, b) {
	if (eqArrays(a, b)) {
		console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${b} !== ${b}`);
	}
};

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

assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
