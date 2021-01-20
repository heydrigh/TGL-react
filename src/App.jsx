import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

import theme from './styles/themes';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
