import { h, Component } from 'preact';

import { route } from 'preact-router';

import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import List, { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';


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

	handleAddClick = e => {
		e.preventDefault();

		const str = this.state.textField;
		if (!str || /^\s*$/.test(str)) return;

		this.addMark(str);
		this.setState({
			textField: ''
		});
	}

	removeMark = i => {
		this.setState({
			marked: this.state.marked.filter(item => item !== i)
		});

		this.updateLocalStorage();
	}

	addMark = i => {
		this.setState({
			marked: [...this.state.marked, i.toUpperCase()]
		});

		this.updateLocalStorage();
	}
		

	updateLocalStorage = () => {
		localStorage.setItem('klasse', JSON.stringify(this.state.klasse));
		localStorage.setItem('marked', JSON.stringify(this.state.marked));
	}
	
	constructor(props) {
		super(props);

		this.state = {
			textField: ''
		};
	}

	componentWillMount() {
		const klasse = JSON.parse(localStorage.getItem('klasse')) || 'Q1';
		const marked = JSON.parse(localStorage.getItem('marked')) || [];
		
		this.state = {
			klasse,
			marked
		};
	}

	componentDidUpdate(nextProps, nextState) {
		this.updateLocalStorage();
	}

	render() {
		return (
			<div style={styles.container}>
				<h3> Klasse </h3>
				<SelectField
					value={this.state.klasse}
					onChange={this.handleChange}
					fullWidth
				>
					{this.stufen}
				</SelectField>
				
				<h3> Kurse </h3>
				<form
					onSubmit={this.handleAddClick}
				>
					<TextField
						underlineFocusStyle={{
							borderColor: '#2196f3'
						}}
						hintText="Kurs hinzufügen"
						onChange={(event, newValue) => this.setState({ textField: newValue })}
					/>

					<FloatingActionButton
						mini
						backgroundColor="#2196f3"
						onClick={this.handleAddClick}
					>
						<ContentAdd />
					</FloatingActionButton>
				</form>
				<List>
					{
						this.state.marked.map(item => (
							<ListItem
								primaryText={item}
								rightIcon={
									<IconButton
										tooltip="Entfernen"
										onClick={() => this.removeMark(item)}
										style={{ top: -10 }}
									>
										<Clear
											hoverColor="#2196f3"
										/>
									</IconButton>
								}
							/>
						))
					}
				</List>
				
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
