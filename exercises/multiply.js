'use strict';

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code:

function multiply(n1, n2) {
	let result = 0;
	let a; let b; let c = 0;
	if (n1<0) {
		a = -n1;
		c = c +1;
	} else {
		a = n1;
	}
	if (n2<0) {
		b = -n2;
		c = c+ 1;
	} else {
		b = n2;
	}
	for (var i = 0; i < a; i++) {
		result = result + b;
	}
	if (c == 1 && n1!==0 && n2!==0) {
		return - result;
	} else {
		return result
	}
	
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof multiply, 'function');
assert.strictEqual(multiply.length, 2);
assert.strictEqual(multiply.toString().includes('Math.imul'), false);
assert.strictEqual(multiply.toString().includes('*'), false);
assert.strictEqual(multiply.toString().includes('/'), false);
assert.strictEqual(multiply(34, 78), 2652);
assert.strictEqual(multiply(123, 0), 0);
assert.strictEqual(multiply(0, -230), 0);
assert.strictEqual(multiply(0, 0), 0);
assert.strictEqual(multiply(123, -22), -2706);
assert.strictEqual(multiply(-22, 123), -2706);
assert.strictEqual(multiply(-22, -123), 2706);
// End of tests */
