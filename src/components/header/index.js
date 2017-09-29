import { h } from 'preact';
import { Link } from 'preact-router/match';

import AppBar from 'material-ui/AppBar';

import SettingsIcon from 'material-ui-icons/Settings';

const Header = (props, state) => (
	<AppBar
		title={
			<Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
				vplan
			</Link>
		}
		iconElementRight={
			<Link href="/settings/" style={{ color: 'white', textDecoration: 'none' }}>
				<SettingsIcon />
			</Link>
		}
		showMenuIconButton={false}
	/>
);

export default Header;
