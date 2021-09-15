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

const without = function (arr1, arr2) {
	const result = arr1.filter((item) => !arr2.includes(item));
	return result;
};

assertArraysEqual(without([1, 2, 3, 4], [4]), [1, 2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
