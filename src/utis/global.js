const BASE_URL={
  local: {
    baseUrl: 'http://localhost:8888',
    redirect: '/#/login'
  },
  test: {
    baseUrl: 'http://xxxx:8888',
    redirect: '/'
  }
};

export default function getBaseUrl(){
  let currentEnv='';
  const hostName = window.location.host;
  switch(hostName){
  case 'xxxx:7000':
    currentEnv = 'test';
    break;
  default:
    currentEnv = 'local';
    break;
  }
  return BASE_URL[currentEnv];
}