import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './common/app';
import * as serviceWorker from './serviceWorker';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider  } from 'antd';

// if (process.env.NODE_ENV === 'development') {
//   require('./mock/index');
// }

ReactDOM.render(<ConfigProvider  locale={zhCN}><App /></ConfigProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
