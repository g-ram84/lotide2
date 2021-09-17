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

const letterPositions = (sentence) => {
	const results = {};
	for (let j = 0; j <= sentence.length - 1; j++) {
		let letter = sentence[j];
		if (results[letter]) {
			results[letter].push(j);
		} else {
			results[letter] = [j];
		}
	}
	return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
