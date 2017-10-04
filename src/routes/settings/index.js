import { h, Component } from 'preact';

import { route } from 'preact-router';

import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

import RaisedButton from 'material-ui/RaisedButton';

const styles = {
	container: {
		marginTop: 40,
		marginLeft: 20,
		marginRight: 20
	},
	button: {
		position: 'fixed',
		bottom: 0,
		left: 0
	}
};

class Settings extends Component {
	stufen = ['5A', '5B', '5C', '5D', '6A', '6B', '6C', '6D', '7A', '7B', '7C', '7D', '8A', '8B', '8C', '8D', '9A', '9B', '9C', '9D', 'EF', 'Q1', 'Q2']
		.map(item => <MenuItem value={item} primaryText={item} />)

	handleChange = event => {
		this.setState({
			klasse: event.target.innerText
		});

		this.updateLocalStorage();
	}

	handleZurueckOnClick = event => {
		route('/');
	}

	updateLocalStorage = () => {
		localStorage.setItem('klasse', JSON.stringify(this.state.klasse));
	}
	
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentWillMount() {
		const klasse = JSON.parse(localStorage.getItem('klasse'));
		this.state = {
			klasse
		};
	}

	componentDidUpdate(nextProps,nextState) {
		this.updateLocalStorage();
	}

	render() {
		return (
			<div style={styles.container}>
				<h3>
					Klasse
				</h3>
				<SelectField
					value={this.state.klasse}
					onChange={this.handleChange}
					fullWidth
				>
					{this.stufen}
				</SelectField>
				
				<RaisedButton
					label="Zurück"
					fullWidth
					onClick={this.handleZurueckOnClick}
					style={styles.button}
				/>
			</div>
		);
	}
}

export default Settings;
