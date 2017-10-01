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
