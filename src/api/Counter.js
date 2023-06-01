import axios from 'axios';

const BASE_URL = "http://localhost:8000/api/";

export const countApi = axios.create({
  baseURL: BASE_URL
});

export const getCount = () => {
  const response = countApi.get(`getCount`);
  return response;
};

export const insertCount = async (count) => {
  const response = await countApi.post('insertCount', {counts: count});
  return response;
};

export const updateCount = async (countId: string, count: count) => {
  const response = await countApi.put(`updateCount/${countId}`, {counts: count});
  return response;
};