import { h, Component } from 'preact';

import { List } from 'material-ui/List';

import ReactPullToRefresh from 'react-pull-to-refresh';

import Item from '../../components/item';

import refactor from './refactor';

const isBrowser = typeof window !== 'undefined'

class Home extends Component {
	listItems = state =>
		refactor(
			state.items.filter(item => item.klasse == state.klasse)
		)
		.sort((a, b) => a.date > b.date)
		.map(item => (
			<Item {...item} />
		));

	refreshDataPromise = new Promise((resolve, reject) => {
		if (isBrowser) {
			const proxy = 'https://cors-anywhere.herokuapp.com/'
			const api = 'http://vplanapp.ema-bonn.de/api?type=json'
			fetch(proxy + api)
				.then(res => res.json())
				.then(items => {
					this.setState({ items });
					this.updateLocalStorage();

					resolve();
				})
				.catch(err => reject(err))
		}
		
	})

	updateLocalStorage = () => {
		if (isBrowser) {
			localStorage.setItem('items', JSON.stringify(this.state.items));
			localStorage.setItem('klasse', JSON.stringify(this.state.klasse));	
		}
	}

	constructor(props) {
		super(props);

		if (isBrowser) {
			let items = JSON.parse(localStorage.getItem('items'));
			let klasse = JSON.parse(localStorage.getItem('klasse'));
			
			// if (items == null) items = mockItems;
			if (klasse == null) klasse = 'Q1';
	
			this.state = {
				items,
				klasse,
			};
		} else {
			this.state = {
				items: [],
				klasse: '5A'
			}
		}
	}

	componentWillMount() {
		if (isBrowser) this.refreshDataPromise
	}

	handlePullToRefresh(resolve, reject) {
		if (isBrowser) {
			this.refreshDataPromise
				.then(() => resolve())
				.catch(() => reject())
		}
	}

	render(props, state) {
		const items = this.listItems(state);
		return (
			<ReactPullToRefresh
				onRefresh={this.handlePullToRefresh}
			>
			{
				items.length > 0 ?
				<List>
					{items}
				</List> :
				<p>Keine Vertretung!</p>
			}
			</ReactPullToRefresh>
		);
	}
}

export default Home;
