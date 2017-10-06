import { h, Component } from 'preact';
import { Router } from 'preact-router';
import ReactGA from 'react-ga';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './header';
import Home from '../routes/home';
import Settings from '../routes/settings';
import About from '../routes/about';

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
	ReactGA.initialize('UA-102336808-2');
}

const theme = getMuiTheme({
	appBar: {
		color: '#2196f3'
	}
});

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
		
		ReactGA.pageview(e.url);
	};

	onMark = kurs => {
		const marked = this.state.marked;

		const index = marked.indexOf(kurs);

		if (index > -1) marked.splice(index, 1);
		else marked.push(kurs);

		this.setState({ marked });

		this.updateLocalStorage();
	}

	updateLocalStorage = () => {
		if (isBrowser) {
			localStorage.setItem('marked', JSON.stringify(this.state.marked));
		}
	}

	constructor(props) {
		super(props);

		if (isBrowser) {
			const marked = JSON.parse(localStorage.getItem('marked')) || [];

			this.state = { marked };
		}
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={theme}>
				<div id="app">
					<Header />
					<div style={{ height: 56 }} />
					<Router onChange={this.handleRoute}>
						<Home path="/" marked={this.state.marked} onMark={this.onMark} />
						<Settings path="/settings/" />
						<About path="/about/" />
					</Router>
				</div>
			</MuiThemeProvider>
		);
	}
}
