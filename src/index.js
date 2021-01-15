function timeToWords(hours, minutes){
	hours = parseInt(hours);
	minutes = parseInt(minutes);

	const words = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
		'twenty'
	];

	if(minutes === 0) return `${words[hours]} o' clock`;

	const isPastHalf = minutes > 30;

	if(isPastHalf){
		minutes = 60 - minutes;
		++hours;

		if(hours >= 12) hours -= 12;
	}

	hours = words[hours];

	if(minutes === 30) minutes = 'half';
	else if(minutes === 15) minutes = 'quarter';
	else {
		if(minutes > 20) minutes = `twenty ${words[minutes - 20]}`;
		else minutes = words[minutes];

		minutes += ` minute${minutes !== 'one' ? 's' : ''}`;
	}

	return `${minutes} ${isPastHalf ? 'to' : 'past'} ${hours}`;
}

module.exports = timeToWords;