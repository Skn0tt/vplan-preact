import { h } from 'preact';

import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const getText = props => {
	if (props.dauer > 2)
		return `${props.date.getHours()}-${props.date.getHours() + props.dauer - 1}`;
	if (props.dauer === 2)
		return `${props.date.getHours()}/${props.date.getHours() + props.dauer - 1}`;
	return props.date.getHours();
};

const vertretung = props => (
	<ListItem
		leftAvatar={
			<Avatar
				children={getText(props)}
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
				children={getText(props)}
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
				children={getText(props)}
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
				children={getText(props)}
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
				children={getText(props)}
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
				children={getText(props)}
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
