/*
const beispiel = {
	klasse: '9D',
	art: 'Vertr.',
	datum: '2017-09-25',
	stunde: 8,
	statt_lehrer: 'KNE',
	statt_fach: null,
	statt_raum: 'F003',
	vertreter: 'LEL',
	fach: 'PK',
	raum: 'F003',
	bemerkung: '',
	entfall: null,
	date: {
		year: 2017,
		month: 9,
		day: 25
	}
};
*/

const getItem = i => ({
	klasse: i.klasse,
	art: i.art,
	date: new Date(i.date.year, i.date.month - 1, i.date.day, i.stunde),
	dauer: 1,
	statt: i.statt_lehrer,
	vertreter: i.vertreter,
	fach: i.fach,
	statt_raum: i.statt_raum,
	raum: i.raum,
	bemerkung: i.bemerkung,
	entfall: i.entfall
});

const refactor = arr => {
	const result = [];

	arr.map(i => {
		const item = getItem(i);

		const sameBlock = result.find(i =>
			i.date.hour === item.date.hour &&
			i.fach === item.fach &&
			i.vertreter === item.vertreter
		);

		if (sameBlock) sameBlock.dauer += 1;
		else result.push(item);
	});

	return result;
};

export default refactor;
