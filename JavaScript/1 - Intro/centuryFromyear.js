function centuryFromYear(year) {
	if (year % 100 !== 0) {
		return Math.floor(year / 100 + 1);
	}

	return year / 100;
}

console.log(centuryFromYear(2000)); // 20
