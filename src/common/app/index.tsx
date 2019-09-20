import React from 'react';
import { GlobalStyle } from './style';
import Router from '../router';
import { HashRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Router />
      </HashRouter>
    </>
  );
};

export default App;
