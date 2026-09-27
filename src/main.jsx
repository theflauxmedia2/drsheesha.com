import { createRoot, hydrateRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App.jsx';

const rootEl = document.getElementById('root');
const app = <App />;

if (rootEl?.childElementCount) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
