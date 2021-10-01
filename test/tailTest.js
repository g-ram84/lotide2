const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
	it(`returns '[5, 6, 7]', from '[4, 5, 6, 7]`, () => {
		assert.deepEqual(tail([4, 5, 6, 7]), [5, 6, 7]);
	});
	it(`returns '[2, 3]', from '[1, 2, 3]'`, () => {
		assert.deepEqual(tail([1, 2, 3]), [2, 3]);
	});
});
