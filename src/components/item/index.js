import { h } from 'preact';

import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

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

const vertretung = props => (
	<ListItem
		leftAvatar={
			<Avatar
				children={`${props.date.getHours()} - ${props.date.getHours() + props.dauer - 1}`}
			/>
		}
		primaryText={`Vertretung ${props.fach}`}
		secondaryText={`${props.vertreter} statt ${props.statt} ${props.bemerkung}`}
	/>
);

const betreuung = props => (
	<ListItem
		leftAvatar={
			<Avatar
				children={`${props.date.getHours()} - ${props.date.getHours() + props.dauer - 1}`}
			/>
		}
		primaryText={`Betreuung ${props.fach}`}
		secondaryText={`${props.vertreter} statt ${props.statt} ${props.bemerkung}`}
	/>
);

const entfall = props => (
	<ListItem
		leftAvatar={
			<Avatar
				children={`${props.date.getHours()} - ${props.date.getHours() + props.dauer - 1}`}
			/>
		}
		primaryText={`Entfall ${props.fach}`}
		secondaryText={`${props.statt} ${props.bemerkung}`}
	/>
);

const raumVertretung = props => (
	<ListItem
		leftAvatar={
			<Avatar
				children={`${props.date.getHours()} - ${props.date.getHours() + props.dauer - 1}`}
			/>
		}
		primaryText={`Raumvertretung ${props.fach}`}
		secondaryText={`${props.raum} statt ${props.statt_raum} ${props.bemerkung}`}
	/>
);

const eva = props => (
	<ListItem
		leftAvatar={
			<Avatar
				children={`${props.date.getHours()} - ${props.date.getHours() + props.dauer - 1}`}
			/>
		}
		primaryText={`EVA ${props.fach}`}
		secondaryText={`${props.statt} ${props.bemerkung}`}
	/>
);

const klausur = props => (
	<ListItem
		leftAvatar={
			<Avatar
				children={`${props.date.getHours()} - ${props.date.getHours() + props.dauer - 1}`}
			/>
		}
		primaryText={`Klausur ${props.fach}`}
		secondaryText={`${props.vertreter} ${props.bemerkung}`}
	/>
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
	switchArt(props)
);

export default Item;
