'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:

function keepFirst(str) {
	// body...
	let result = str.slice(0,2);
	return result;
}
function keepLast(str) {
	// body...
	let result = str.slice(-2);
	return result;
	
}
function keepFirstLast(str) {
	// body...
	let result = str.slice(2);
	return result;
}

//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(keepFirst('mamounette'), 'ma');
assert.strictEqual(keepLast('mamounette'), 'te');
assert.strictEqual(keepFirstLast('mamounette'), 'mounette');
// End of tests */
