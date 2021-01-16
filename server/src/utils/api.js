const axios = require('axios'); 

const api = axios.create(
    {
        baseURL: 'https://api.musixmatch.com/ws/1.1/',
    }
); 

module.exports =  api; 
