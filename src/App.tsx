import { Provider } from 'inversify-react';
import { di } from './core/injection_container';

import './App.scss';
import { Dashboard } from './presentation/pages';

function App() {
	return (
		<Provider container={di}>
			<Dashboard />
		</Provider>
	);
}

export default App;
