import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/'
});

export const getAllPets = async () => {
  const res = await api.get('all_pet');
  return res.data;
}

