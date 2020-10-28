'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
function whisper(str) {
	let result = '*'+str.toLowerCase()+'*';
	return result; 
}

//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(whisper('ErtfEpp'), '*ertfepp*');
// End of tests */
