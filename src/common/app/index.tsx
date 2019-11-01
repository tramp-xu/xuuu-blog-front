import React from 'react';
import { GlobalStyle } from './style';
import Router from '../router';
import { HashRouter } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import rootReducer from "../../store/index";

let store = createStore(rootReducer)
console.log(store.getState())
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <HashRouter>
        <Router />
      </HashRouter>
    </Provider>
  );
};

export default App;
