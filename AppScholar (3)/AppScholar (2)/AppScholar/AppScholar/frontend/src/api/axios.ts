import axios from 'axios';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = Constants.manifest?.extra?.apiUrl ?? 'http://10.68.55.231:3000';

const api = axios.create({
  baseURL: `${API_URL}/api`,
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('@appscholar:token');
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
