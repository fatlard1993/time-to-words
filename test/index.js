const fs = require('fs');
const path = require('path');
const csvParse = require('csv-parse');

const timeToWords = require('../src/index');

const testCasesFilePath = path.join(__dirname, 'testCases.csv');

csvParse(fs.readFileSync(testCasesFilePath).toString().trim(), { columns: true }, (err, testCases) => {
	if(err) return console.error('Error parsing the CSV testCases file', err);

	testCases.forEach(({ hours, minutes, answer }, index) => {
		const result = timeToWords(hours, minutes);

		console.log(index, `${hours}:${minutes}`, result === answer ? `PASS .. ${result}` : `FAIL .. "${result}" !== "${answer}"`);
	});
});