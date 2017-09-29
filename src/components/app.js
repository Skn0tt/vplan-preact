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

	render() {
		return (
			<MuiThemeProvider muiTheme={theme}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Settings path="/settings/" />
						<About path="/about/" />
					</Router>
				</div>
			</MuiThemeProvider>
		);
	}
}
