import { Provider as InversifyProvider } from 'inversify-react';
import { Provider as ReduxProvider } from 'react-redux';
import { di } from './core/injection_container';
import { store } from './domain/redux/store';

import './App.scss';
import { Dashboard } from './presentation/pages';

function App() {
	return (
		<ReduxProvider store={store}>
			<InversifyProvider container={di}>
				<Dashboard />
			</InversifyProvider>
		</ReduxProvider>
	);
}

export default App;
