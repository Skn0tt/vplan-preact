import { h, Component } from 'preact';
import { Router } from 'preact-router';
import ReactGA from 'react-ga';

import Header from './header';
import Home from '../routes/home';
import Settings from '../routes/settings';

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
	ReactGA.initialize('UA-102336808-2');
}

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
		
		ReactGA.pageview(e.url);
	};

	comp

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Settings path="/settings/" />
				</Router>
			</div>
		);
	}
}
