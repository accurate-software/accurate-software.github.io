import React, {useState, useEffect} from 'react'; 
import api from '../../Services/api'; 
import logoImg from '../../Assets/Images/logo.png';
import randomNumber from '../../Utils/RandomNumber';
import './style.css';
export default function Home()
{
    const [lyricsIpsumList, setLyricsIpsumList] =  useState([]);
    const [lyricsIpsum, setLyricsIpsum] = useState('');
    const handleLyricsIpsumIdList = async() => 
    {
        try
        {
            const response = await api.get('getListLyricsId'); //array with id of the songs from Fine Line álbum 
    
            setLyricsIpsumList(response);
            //console.log(response);
        }
        catch(err)
        {
            console.log(err);
        }
         
    } 
    const handleLyricIpsumText = async ()=>
    {
        
        try
        {
            const id = lyricsIpsumList.data[randomNumber(0,11)]; //random number 0~11
            const response = await api.get(`getListLyricsId/${id}`); 
            
            //the response come with a warning '******* This Lyrics is NOT for Commercial use ******* (1409620957320) ...'
            const cleanLyricsWarning = response.data.replace("******* This Lyrics is NOT for Commercial use *******", ""); //removing ******* This Lyrics is NOT for Commercial use *******
            const cleanLyricsCode = cleanLyricsWarning.replace("(1409620958651)", "");// removing code from string
            const cleanLyrics = cleanLyricsCode.replace("...", ""); //removing the suspension points
            
            setLyricsIpsum(cleanLyrics);
            navigator.clipboard.writeText(`${cleanLyrics}`);
            
        }
        catch(err)
        {
            alert('Aguarde alguns segundos e tente novamente!');
        }
       
       
        
    }

    useEffect(()=>
    {
        handleLyricsIpsumIdList();
    
    }, []);

 
    return (
        <>
        <header className="homeHeader">
            <img src={logoImg} alt="Logo Harry Ipsum - O logo contém o Harry Styles em desenho e os escritos Harry Ipsum e Fine Line "/>
        </header>
        <main className="homeMain">
            <p>Todo Harry Ipsum após gerado é automaticamente copiado para área de transferência! </p>
            <section dangerouslySetInnerHTML={{__html: `<p>${lyricsIpsum}</p>`}}>

            </section>
         
                <button className="homeGenerateButton" onClick={handleLyricIpsumText}>Gerar Ipsum</button>
                    
                
        </main>
        <footer className="homeFooter">
            <p> Harry Ipsum • 2021</p>
        </footer>
        </>
    ); 
}