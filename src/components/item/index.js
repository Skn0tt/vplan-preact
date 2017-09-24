import { h } from 'preact';

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
		display: 'inline-block',
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#444',
		color: 'white',
		textAlign: 'center',
		verticalAlign: 'middle',
		marginRight: 10
	}
};

const Circle = (props, state) => (
	<div style={styles.circle}>
		{props.children}
	</div>
);

const vertretung = props => (
	<List.TextContainer>
		<List.PrimaryText>
			Vertretung {props.fach}
		</List.PrimaryText>
		<List.SecondaryText>
			{props.vertreter} statt {props.statt} {props.bemerkung}
		</List.SecondaryText>
	</List.TextContainer>
);

const betreuung = props => (
	<List.TextContainer>
		<List.PrimaryText>
			Betreuung {props.fach}
		</List.PrimaryText>
		<List.SecondaryText>
			{props.vertreter} statt {props.statt} {props.bemerkung}
		</List.SecondaryText>
	</List.TextContainer>
);

const entfall = props => (
	<List.TextContainer>
		<List.PrimaryText>
			Entfall {props.fach}
		</List.PrimaryText>
		<List.SecondaryText>
			{props.statt} {props.bemerkung}
		</List.SecondaryText>
	</List.TextContainer>
);

const raumVertretung = props => (
	<List.TextContainer>
		<List.PrimaryText>
			Raumvertretung {props.fach}
		</List.PrimaryText>
		<List.SecondaryText>
			{props.raum} statt {props.statt_raum} {props.bemerkung}
		</List.SecondaryText>
	</List.TextContainer>
);

const eva = props => (
	<List.TextContainer>
		<List.PrimaryText>
			EVA {props.fach}
		</List.PrimaryText>
		<List.SecondaryText>
			{props.statt} {props.bemerkung}
		</List.SecondaryText>
	</List.TextContainer>
);

const klausur = props => ('K');

const switchArt = props => {
	switch (props.art) {
		case 'Vertr.': return vertretung(props);
		case 'Betreuung': return betreuung(props);
		case 'Entfall': return entfall(props);
		case 'Raum-Vtr.': return raumVertretung(props);
		case 'EVA': return eva(props);
		case 'Klausur': return klausur(props);
	}
};

const Item = (props, state) => (
	<List.Item>
		<Circle>
			{props.date.getHours()}-{props.date.getHours() + props.dauer}
		</Circle>
		{switchArt(props)}
	</List.Item>
);

export default Item;
