import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './style';
import App from './components/app';

const Index = (props, state) => (
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>
);

export default Index;
