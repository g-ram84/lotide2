const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

const countLetters = (string) => {
	const results = {};
	for (const str of string) {
		if (results[str]) {
			results[str] += 1;
		} else {
			results[str] = 1;
		}
	}
	return results;
};

console.log(countLetters("Happy"));
