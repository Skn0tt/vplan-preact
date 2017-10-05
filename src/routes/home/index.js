import { h, Component } from 'preact';

import { List } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import Item from '../../components/item';

import refactor from './refactor';

const isBrowser = typeof window !== 'undefined';

class Home extends Component {
	listItems = state =>
		isBrowser ?
			refactor(
				state.items.filter(item => item.klasse === state.klasse)
			)
				.sort((a, b) => a.date.getTime() - b.date.getTime())
				.map(item => (
					<Item {...item} />
				)) 
			: [];

	refreshData = () => {
		if (isBrowser && navigator.onLine) {
			this.setState({ refreshing: true });

			const proxy = 'https://cors-anywhere.herokuapp.com/';
			const api = 'http://vplanapp.ema-bonn.de/api?type=json';
			fetch(proxy + api)
				.then(res => res.json())
				.then(items => {
					this.setState({
						items,
						refreshing: false
					});

					this.updateLocalStorage();
				})
				.catch(err => console.error(err));
		}
	}

	updateLocalStorage = () => {
		if (isBrowser) {
			localStorage.setItem('items', JSON.stringify(this.state.items));
			localStorage.setItem('klasse', JSON.stringify(this.state.klasse));
		}
	}

	handleRefreshButton = () => this.refreshData();

	constructor(props) {
		super(props);

		if (isBrowser) {
			let items = JSON.parse(localStorage.getItem('items')) || [];
			let klasse = JSON.parse(localStorage.getItem('klasse')) || 'Q1';
	
			this.state = {
				refreshing: false,
				items,
				klasse
			};
		}
	}

	componentWillMount() {
		if (isBrowser) this.refreshData();
	}

	render() {
		const items = this.listItems(this.state);
		return (
			<div style={{ position: 'relative' }}>
				<RefreshIndicator
					size={50}
					loadingColor="#FF9800"
					left={-25}
					right={0}
					top={100}
					status={this.state.refreshing ? 'loading' : 'hide'}
					style={{ marginLeft: '50%', position: 'fixed' }}
				/>
				{
					items.length > 0 ?
						<List>
							{items}
						</List> :
						<p>Keine Vertretung!</p>
				}
				{
					isBrowser && navigator.onLine ?
						<RaisedButton
							label="Refresh"
							fullWidth
							onClick={this.handleRefreshButton}
						/> : null
				}
			</div>
		);
	}
}

export default Home;
