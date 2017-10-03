import { h } from 'preact';

import { route } from 'preact-router';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import AppBar from 'material-ui/AppBar';

const handleSettingsClick = () => route('/settings');
const handleAboutClick = () => route('/about');
const handleTitleClick = () => route('/');

const Header = (props, state) => (
	<AppBar
		title="vplan"
		onTitleTouchTap={handleTitleClick}
		showMenuIconButton={false}
		style={{ position: 'fixed' }}
		iconElementRight={
			<IconMenu
				{...props}
				iconButtonElement={
					<IconButton label="More" >
						<MoreVertIcon />
					</IconButton>
				}
				targetOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			>
				<MenuItem
					primaryText="Settings"
					onClick={handleSettingsClick}
				/>
				<MenuItem
					primaryText="About"
					onClick={handleAboutClick}
				/>
			</IconMenu>
		}
	/>
);

export default Header;
