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

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
	const results = [];
	for (let item of array) {
		results.push(callback(item));
	}
	return results;
};

const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word[1]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["r", "o", "o", "a", "o"]);
