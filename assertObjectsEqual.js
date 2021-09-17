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

const eqObjects = (obj1, obj2) => {
	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
	}
	for (const obj in obj1) {
		if (Array.isArray(obj1[obj]) && Array.isArray(obj2[obj])) {
			return eqArrays(obj1[obj], obj2[obj]);
		} else if (obj1[obj] !== obj2[obj]) {
			return false;
		}
	}
	return true;
};

const assertObjectsEqual = (actual, expected) => {
	const inspect = require("util").inspect;
	if (eqObjects(actual, expected)) {
		console.log(
			`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
		);
	} else {
		console.log(
			`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
		);
	}
};

assertObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 });
