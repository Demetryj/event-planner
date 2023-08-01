import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/event-planner">
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
