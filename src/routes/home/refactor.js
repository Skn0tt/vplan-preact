import { fromJS } from 'immutable';

const getDauer = ({ stunden }) => stunden[0].hour ? 1 : stunden[0].hour_to - stunden[0].hour_from + 1;

const getStunde = ({ stunden }) => stunden[0].hour_from || stunden[0].hour;

const getItem = i => ({
	klasse: i.klasse,
	art: i.art,
	date: new Date(i.datum.jahr, i.datum.monat - 1, i.datum.tag, getStunde(i)).toString(),
	dauer: getDauer(i),
	statt: i.statt_lehrer,
	vertreter: i.vertreter,
	fach: i.fach,
	statt_raum: i.statt_raum,
	raum: i.raum,
	bemerkung: i.bemerkung,
	entfall: i.entfall
});

const refactor = json => {
	const arr = fromJS(json).delete('refresh_dateline').toList().valueSeq().toJS();
	return arr.map(i => getItem(i));
};

export default refactor;
