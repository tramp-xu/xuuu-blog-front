import http from '../../utils/http';

export const _login = (data) => {
  return http.post('/api/login', data);
};

export const _register = (data) => {
  return http.post('/api/register', data);
};

export const _getUser = (data) => {
  return http.get('/api/user/get', data);
};

export const _searchUser = (data) => {
  return http.get('/api/user/search', data);
};