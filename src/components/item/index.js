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
		disabled
		primaryText={props.fach || props.statt}
		secondaryText={`Vertretung, ${props.vertreter} statt ${props.statt} ${props.bemerkung}`}
		style={{
			backgroundColor: props.marked ? '#3CA9FF' : null
		}}
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
		disabled
		primaryText={props.fach || props.statt}
		secondaryText={`Betreuung, ${props.vertreter} statt ${props.statt} ${props.bemerkung}`}
		style={{
			backgroundColor: props.marked ? '#3CA9FF' : null
		}}
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
		disabled
		primaryText={props.fach || props.statt}
		secondaryText={`Entfall, ${props.statt} ${props.bemerkung}`}
		style={{
			backgroundColor: props.marked ? '#3CA9FF' : null
		}}
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
		disabled
		primaryText={props.fach  || props.statt}
		secondaryText={`Raumvertretung ${props.statt}, ${props.raum} statt ${props.statt_raum} ${props.bemerkung}`}
		style={{
			backgroundColor: props.marked ? '#3CA9FF' : null
		}}
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
		disabled
		primaryText={props.fach || props.statt}
		secondaryText={`EVA ${props.statt} ${props.bemerkung}`}
		style={{
			backgroundColor: props.marked ? '#3CA9FF' : null
		}}
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
		disabled
		primaryText={props.fach || props.statt}
		secondaryText={`Klausur, ${props.vertreter}@${props.raum} ${props.bemerkung}`}
		style={{
			backgroundColor: props.marked ? '#3CA9FF' : null
		}}
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

const divider = date => (
	<div>
		<Divider />
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
