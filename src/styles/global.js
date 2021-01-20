import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('../assets/fonts/helveticaNeuaMed.ttf');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-family: ${theme.font.family};
      font-size: 100%;
      scroll-behavior: smooth;
    }

    body {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.texts};
    }

    button {
      cursor: pointer;
    }
  `}
`

export default GlobalStyle
