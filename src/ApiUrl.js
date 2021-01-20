import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://v2.jokeapi.dev/',
});

export default Api;
