import api from './api';

export const newsService = {
  getNews: async (page = 1, limit = 10, search = '') => {
    const response = await api.get('/news', { params: { page, limit, search } });
    return response.data;
  },

  getNewsDetail: async (identifier) => {
    const response = await api.get(`/news/${identifier}`);
    return response.data;
  },

  getLatestNews: async (limit = 3) => {
    const response = await api.get('/news/latest', { params: { limit } });
    return response.data;
  },

  createNews: async (formData) => {
    const response = await api.post('/news', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  updateNews: async (id, formData) => {
    const response = await api.put(`/news/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  deleteNews: async (id) => {
    const response = await api.delete(`/news/${id}`);
    return response.data;
  }
};