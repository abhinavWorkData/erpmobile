import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  setupInterceptors: () => {
    axios.interceptors.request.use(
      async request => {
        const token = await AsyncStorage.getItem('userToken');
        console.info('API token:', token);
        if (token) {
          request.headers.Authorization = `Bearer ${token}`;
        }
        console.info('API Request:', `${request.method} : ${request.url}`);
        if (request.data) {
          console.info('API Request data:', request.data);
        }
        if (request.params) {
          console.info('API Request params:', request.params);
        }
        return request;
      },
      error => Promise.reject(error),
    );

    axios.interceptors.response.use(response => {
      console.info('API Response:', response.data);
      return response;
    });
  },
};
