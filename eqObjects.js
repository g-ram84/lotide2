const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

// assertEqual(
// 	eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
// 	false
// ); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); //
