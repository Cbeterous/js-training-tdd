'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:

function jadenCase(str) {
	let result;
	let j = str.split(' ');
	for (var i = 0; i < j.length; i++) {
		j[i] = j[i].toUpperCase().substring(0, 1)+ j[i].toLowerCase().substring(1);
	}
	result = j.join(' ');
	return result;
}

//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(jadenCase("How are you ?"), "How Are You ?");
assert.strictEqual(jadenCase('Je suis magNifique.'), 'Je Suis Magnifique.');
assert.strictEqual(jadenCase('blo blu bla'), 'Blo Blu Bla');
// End of tests */
