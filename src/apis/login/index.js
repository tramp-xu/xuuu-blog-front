import http from '../../utils/http';

export const _login = (data) => {
  return http.post('/api/login', data);
};