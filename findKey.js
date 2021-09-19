const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

const findKey = (object, callback) => {
	for (let obj in object) {
		if (callback(object[obj])) {
			return obj;
		}
	}
	return undefined;
};

const results1 = findKey(
	{
		"Blue Hill": { stars: 1 },
		Akaleri: { stars: 3 },
		noma: { stars: 2 },
		elBulli: { stars: 3 },
		Ora: { stars: 2 },
		Akelarre: { stars: 3 }
	},
	(x) => x.stars === 2
);

const results2 = findKey(
	{
		"Blue Hill": { stars: 1 },
		Akaleri: { stars: 3 },
		noma: { stars: 2 },
		elBulli: { stars: 3 },
		Ora: { stars: 2 },
		Akelarre: { stars: 3 }
	},
	(x) => x.stars === 3
);

assertEqual(results1, "noma");
assertEqual(results2, "Akaleri");
