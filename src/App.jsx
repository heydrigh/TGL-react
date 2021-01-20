import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

import theme from './styles/themes';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
