'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:

function cutFirst(str) {
	let result = str.slice(2);
	return result;
}
function cutLast(str) {
	// body...
	let result = str.slice(0, -2);
	return result;
}
function cutFirstLast(str) {
	// body...
	let result = str.slice(2, -2);
	return result;
}
//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(cutFirst('ErtfEpp'), 'tfEpp');
assert.strictEqual(cutLast('ErtfEpp'), 'ErtfE');
assert.strictEqual(cutFirstLast('ErtfEpp'), 'tfE');
// End of tests */
