import { h } from 'preact';

import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';

const styles = {
	circle: {
		width: 55,
		display: 'inline-block',
		borderRadius: '50%',
		backgroundColor: '#444',
		color: 'white',
		textAlign: 'center',
		marginRight: 15
	}
};

const Circle = (props, state) => (
	<div style={styles.circle}>
		<p style={{ verticalAlign: 'middle' }}>{props.children}</p>
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

const klausur = props => (
	<List.TextContainer>
		<List.PrimaryText>
			Klausur {props.fach}
		</List.PrimaryText>
		<List.SecondaryText>
			{props.vertreter} {props.bemerkung}
		</List.SecondaryText>
	</List.TextContainer>
);

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
	<List.Item style={{ marginBottom: 2 }}>
		<Circle>
			{props.date.getHours()}-{props.date.getHours() + props.dauer}
		</Circle>
		{switchArt(props)}
	</List.Item>
);

export default Item;
