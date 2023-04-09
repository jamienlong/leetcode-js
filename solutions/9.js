/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
	if (x < 0) {
		return false;
	}

	let number = x;
	let reverse = 0;

	while (number > 0) {
		reverse = (reverse * 10) + (number % 10);
		number = Number(number / 10);
	}

	return x === reverse;
};
