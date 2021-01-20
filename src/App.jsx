import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import theme from './styles/themes';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
