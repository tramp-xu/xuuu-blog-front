import axios from 'axios';
// import qs from 'qs'; // 用来将payload方式转成formdata
import {message} from 'antd';
// import global from './global';
// const env = global();

// //  测试环境
// axios.defaults.baseURL = env.baseUrl;
// axios.defaults.baseURL = 'http://localhost:8888';
// 配置允许跨域携带cookie
axios.defaults.withCredentials = true;

axios.defaults.ContentType = "application/x-www-form-urlencoded; charset=UTF-8"

// 配置超时时间
axios.defaults.timeout = 100000;

// request拦截器
axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(
  response => {
    const data = response.data;
    const code = data.code;
    const resMessage = data.message;
    if (code === 200) {
      if (resMessage) {
        message.success(resMessage);
      }
      return Promise.resolve(data);
    } else if (code === 'user-not-login') {
      message.error(resMessage);
      // setTimeout(() => {
      //   window.location.href = env.redirect;
      // }, 200);
      return Promise.reject(new Error('用户未登录'));
    } else if(code === '201'){
      message.info(resMessage);
      return Promise.reject(new Error(resMessage));
    } else {
      message.error(resMessage);
      return Promise.reject(new Error(resMessage));
    }
  },
  err => {
    let error = {};
    if (err && err.response) {
      const {status, statusText} = err.response;
      switch (status) {
      case 400:
        message.error(`请求错误：${status}`);
        break;
      case 401:
        message.error(`未授权，或登录过期：${status}`);
        // setTimeout(() => {
        //   window.location.href = env.redirect;
        // }, 200);
        break;
      case 408:
        message.error(`请求超时：${status}`);
        break;
      case 500:
        message.error(`服务器内部错误：${status}`);
        break;
      case 502:
        message.error(`网关错误：${status}`);
        break;
      case 503:
        message.error(`服务不可用：${status}`);
        break;
      case 504:
        message.error(`网关超时：${status}`);
        break;
      default:
        message.error(`其他错误：${statusText || ''}, 错误代码：${status}`);
        break;
      }
      error = {
        code: status,
        statusText: statusText
      };
    }
    // if (err.status)
    return Promise.reject(error);
  }
);

let http = {
  post: '',
  get: '',
  delete:''
};
// 上传文件的 post 方法
http.urlencodedPost = (api, data) => {
  let fd = null;
  for (const [key, value] of Object.entries(data)) {
    if (!fd) {
      fd = `${key}=${value}`;
    } else {
      fd = `${fd}&${key}=${value}`;
    }
  }
  let config = {
    headers: {
      ContentType: 'application/x-www-form-urlencoded'
    }
  };
  return new Promise((resolve,reject) => {
    axios.post(api, fd, config).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
};

http.get = (api, data) => {
  let params = {...data};
  params._ = Date.now();
  return new Promise((resolve,reject) => {
    axios.get(api, {params}).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
};

http.post = (api, data) => {
  // let params = qs.stringify(data);
  return new Promise((resolve,reject) => {
    axios.post(api, data).then((res) => {
      resolve(res);
    }).catch((err) => {
      console.error(err)
      reject(err)
    });
  });
};


export default http;