import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { store } from 'redux/store';
import { theme, GlobalStyles } from 'styles';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/event-planner">
          <GlobalStyles />
          <Suspense fallback={null}>
            <App />
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
