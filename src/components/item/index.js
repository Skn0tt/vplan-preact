import { h } from 'preact';

import Subheader from 'material-ui/Subheader';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

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
				backgroundColor="#042540"
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
				backgroundColor="#084B7F"
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
				backgroundColor="#1095FF"
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
				backgroundColor="#0C70BF"
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
				backgroundColor="#1095FF"
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
				backgroundColor="#084B7F"
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

const dayDiff = (first, second) => {
	const a = new Date(first.getTime());
	const b = new Date(second.getTime());

	a.setHours(0, 0, 0, 0);
	b.setHours(0, 0, 0, 0);

	return a.getTime() - b.getTime();
};

let dividerCount = 0;
const divider = date => (
	<div>
		{
			dividerCount++ !== 0 ?
				<Divider />
				: null
		}
		<Subheader>
			{date.toLocaleDateString('de-DE', {
				weekday: 'long',
				day: '2-digit',
				month: 'long'
			})}
		</Subheader>
	</div>
);

let lastDate = new Date();
const Item = (props, state) => {
	let div = null;
	if (dayDiff(props.date, lastDate) !== 0) div = divider(props.date);
	lastDate = props.date;
	return (
		<div>
			{div}
			{switchArt(props)}
		</div>
	);
};

export default Item;
