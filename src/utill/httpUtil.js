import axios from 'axios';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const API_BASE_URL = 'https://aidexpress-updatedui-13.onrender.com/api';

// Create an Axios instance
const http = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to convert Axios Promises to RxJS Observables
const toObservable = promise => from(promise).pipe(map(response => response.data));

const apiService = {
  get: (url, config = {}) => toObservable(http.get(url, config)),
  post: (url, data, config = {}) => toObservable(http.post(url, data, config)),
  put: (url, data, config = {}) => toObservable(http.put(url, data, config)),
  delete: (url, config = {}) => toObservable(http.delete(url, config)),
  patch: (url, data, config = {}) => toObservable(http.patch(url, data, config)),
};

export default apiService;
