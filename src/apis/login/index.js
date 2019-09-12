import http from '@/utils/http';

export function _login (data) {
  return http.get('/login/admin', data);
}