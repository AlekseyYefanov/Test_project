import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Передбачається, що ви використовуєте react-router-dom
import App from './App';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);