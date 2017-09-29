import { h } from 'preact';

import RaisedButton from 'material-ui/RaisedButton';

import { route } from 'preact-router';

const handleZurueckOnClick = () => route('/');

const About = (props, state) => (
	<div>
	  <img src="https://simonknott.de/img/logo.svg" />
		<img src="https://upload.wikimedia.org/wikipedia/de/2/2d/EMA-Bonn.gif" />
		<RaisedButton
			label="Zurück"
			fullWidth
			onClick={handleZurueckOnClick}
			style={{ marginBottom: 60 }}
		/>
	</div>
);

export default About;