import http from '../../utils/http';

export const _addTag = (data) => {
  return http.post('/api/tag/add', data);
};

export const _searchTag = (data) => {
  return http.get('/api/tag/search', data);
};

export const _getTag = (data) => {
  return http.get('/api/tag/get', data);
};

export const _deleteTag = (data) => {
  return http.post('/api/tag/delete', data);
};

export const _editTag = (data) => {
  return http.post('/api/tag/edit', data);
};
