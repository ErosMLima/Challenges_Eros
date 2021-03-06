function checkPalindrome(inputString) {
	console.log(inputString.split(''));
	return inputString == inputString.split('').reverse().join('');
}
console.log(checkPalindrome('socorrammensubinoonibusemarrocos'));

// Array(32) [ "s", "o", "c", "o", "r", "r", "a", "m", "m", "e", … ]