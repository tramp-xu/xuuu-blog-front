import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          alt="logo"
          className="App-logo"
          src={logo}
        />
        <div>ddddddddddd</div>
        <Button>大数据分开了</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
