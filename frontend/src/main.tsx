import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { store } from './redux/store.ts';

const theme = {
  bgColor: '#F0F0F0',
  TextColor: '#333333',
  TextColor_md: '#898989',
  TextColor_sm: '#B0B0B0',
  red: '#E97171',
  blue: '#2EC1AC',
  gold: '#B88E2F',
  Gold_md: '#FFF3E3',
  Gold_sm: '#F9F1E7',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
