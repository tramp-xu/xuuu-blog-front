import http from '../../utils/http';

export const _addArticle = (data) => {
  return http.post('/api/article/add', data);
};

export const _searchArticle = (data) => {
  return http.get('/api/article/search', data);
};

export const _getArticle = (data) => {
  return http.get('/api/article/get', data);
};

