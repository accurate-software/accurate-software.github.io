const axios = require('axios');

module.exports = 
{
    async listLyricsIds(request, response)
    {   var lyricsIdArray = [];
        try
        {
            //get list of indexes of lyrics 
            const listIndexLyrics = await axios.get(`${process.env.MUSIXMATCH_API_URL}album.tracks.get?album_id=35618756&page=1&page_size=12&apikey=${process.env.MUSIXMATCH_API_KEY}`);
            
            //convert list to an array with the lyrics ids 
            listIndexLyrics.data.message.body.track_list.map((lyricsId) => 
            {
               lyricsIdArray.push(lyricsId.track.track_id);
            });

            return response.status(200).json(lyricsIdArray);
        }
       catch(err)
       {
           return response.status(401).json(err);
       }
    },
    async lyricById(request, response) 
    {
        const{id} = request.params; 
        
        const lyricById = await axios.get(`${process.env.MUSIXMATCH_API_URL}track.lyrics.get?track_id=${id}&apikey=${process.env.MUSIXMATCH_API_KEY}`); 
        
        const lyric = lyricById.data.message.body.lyrics.lyrics_body; //return the lyric text 
           
        return response.status(200).json(lyric);
    }
}