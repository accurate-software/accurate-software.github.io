const {Router} = require('express');

const LyricsController = require('./Controllers/LyricsController');



const routes = Router();

routes.get('/getListLyricsId', LyricsController.listLyricsIds); 
routes.get('/getListLyricsId/:id', LyricsController.lyricById); 

module.exports = routes; 