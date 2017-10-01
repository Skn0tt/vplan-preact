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
			style={{ position: 'fixed', bottom: 0, left: 0 }}
		/>
	</div>
);

export default About;