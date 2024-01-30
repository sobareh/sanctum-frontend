import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://sanctum-api.test',
});

const token = JSON.parse(localStorage.getItem('auth-sanctum')) ?? null;

if (token) {
  instance.defaults.headers.common['Authorization'] = 'Bearer ' + token.token;
}

instance.defaults.headers.post['Accept'] = 'application/json';
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.withCredentials = true;

export default instance;
