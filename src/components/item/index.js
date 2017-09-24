import { h } from 'preact';

import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';

import Fab from 'preact-material-components/Fab';
import 'preact-material-components/Fab/style.css';

import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';

/*
const beispiel = {
	klasse: i.klasse,
	art: i.art,
	date: new Date(i.date.year, i.date.month, i.date.day, i.stunde),
	dauer: 1,
	statt: i.statt_lehrer,
	vertreter: i.vertreter,
	fach: i.fach,
	statt_raum: i.statt_raum,
	raum: i.raum,
	bemerkung: i.bemerkung,
	entfall: i.entfall
};
*/

const styles = {
	circle: {
		width: 50,
		height: 50,
		borderRadius: 50,
		backgroundColor: 'black',
		color: 'white',
		textAlign: 'center',
	}
};

const Circle = (props, state) => (
	<div style={styles.circle}>
		{props.children}
	</div>
);

const Vertretung = props => ("V");

const Betreuung = props => ("B");

const Entfall = props => ("E");

const RaumVertretung = props => ("R");

const EVA = props => ("EVA");

const Item = (props, state) => {
	switch (props.art) {
		case 'Vertretung': return Vertretung(props);
		case 'Betreuung': return Betreuung(props);
		case 'Entfall': return Entfall(props);
		case 'Raum-Vtr': return RaumVertretung(props);
		case 'EVA': return EVA(props);
	}
};

export default Item
