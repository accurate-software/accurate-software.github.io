import { create } from 'apisauce';
import axios from 'axios';

// define the api
export const http = axios.create({
   baseURL: 'http://localhost:3333'
});