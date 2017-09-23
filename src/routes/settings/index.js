import { h, Component } from 'preact';
import style from './style';

class Settings extends Component {
	stufen = ['5A', '5B', '5C', '5D', '6A', '6B', '6C', '6D', '7A', '7B', '7C', '7D', '8A', '8B', '8C', '8D', '9A', '9B', '9C', '9D', 'EF', 'Q1', 'Q2']
		.map(item => <option>{item}</option>)

	handleChange = event => {
		this.setState({
			klasse: event.target.value
		});

		this.updateLocalStorage();
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
			<div class={style.home}>
				<form>
					<label>
						Klasse:
						<select value={this.state.klasse} onChange={this.handleChange}>
							{this.stufen}
						</select>
					</label>
				</form>
			</div>
		);
	}
}

export default Settings;
