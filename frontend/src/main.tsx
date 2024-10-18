import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { store } from './redux/store.ts';
import { theme } from './Utils/Themes.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
