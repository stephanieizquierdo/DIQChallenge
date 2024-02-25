import './App.css';

import Home from './Pages/Home';
import DarkModeContext  from './Providers/DarkModeProvider';

function App() {
	return (
		<DarkModeContext>
			<Home/>
		</DarkModeContext>
	);
}

export default App;
