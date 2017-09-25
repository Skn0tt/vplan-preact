import { h } from 'preact';
import { Link } from 'preact-router/match';

import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Toolbar/style.css';

const Header = (props, state) => (
	<Toolbar className="toolbar">
		<Toolbar.Row>
			<Toolbar.Section align-start>
				<Toolbar.Title>
					<Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
						vplan
					</Link>
				</Toolbar.Title>
			</Toolbar.Section>
			<Toolbar.Section align-end>
				<Toolbar.Icon>
					<Link href="/settings/" style={{ color: 'white', textDecoration: 'none' }}>
						Settings
					</Link>
				</Toolbar.Icon>
			</Toolbar.Section>
		</Toolbar.Row>
	</Toolbar>
);

export default Header;
