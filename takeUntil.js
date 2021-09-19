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

const takeUntil = (array, callback) => {
	const results = [];
	for (let item of array) {
		if (!callback(item)) {
			results.push(item);
		} else {
			break;
		}
	}
	return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
	"I've",
	"been",
	"to",
	"Hollywood",
	",",
	"I've",
	"been",
	"to",
	"Redwood"
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
