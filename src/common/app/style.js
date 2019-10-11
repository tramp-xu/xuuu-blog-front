import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font: 14px;
    color: #000;  
    a {
      color: #000;

      &:hover {
        color: #000;
      }
    }
  }
  .light {
    color: #8f8f8f;
  }

  .small {
    font-size: 12px;
  }
`;