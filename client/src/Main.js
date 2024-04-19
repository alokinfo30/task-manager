import { hydrate } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
hydrate(root, <App />);
