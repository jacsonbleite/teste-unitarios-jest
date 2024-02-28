
const sum = (a, b) => {
	return a + b;
}

const inOneHour = () => {
	const now = Date.now();
	const inOneHourInMilisec = 1 * 60 *60 * 1000;

	return now + inOneHourInMilisec;
}

module.exports = { sum, inOneHour }