import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import api from '../../services/api'

import Navbar from '../../components/navbar';
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import LoaderPage from '../../components/loaderPage';
import Card from '../../components/card';

import './style.css';



/* tipagens */
interface Announcements{
  id: number;
  city: string;
  category: string;
  insert_in: string;
  photo: string;
  reward: string;
  type: string;
}


const Search: React.FC = props =>{

  /* lista de anuncios */
  const [annoucements, setAnnoucements] = useState<Announcements[]>([]); 
  useEffect(() => {
    const urlParams = window.location.search.split('?')[1].split('&');   

    api.get(`search-annoucement${window.location.search}`).then(response =>{     
         
      if(Object.keys(response.data.data).length !== 0){
        setAnnoucements(response.data.data)   
      }   
    });
   
  },[]);


  

 


  return (
    <div className='container'>      


      {/*banner*/}
      <Navbar/>


      {/*banner*/}
      <Banner>
        <p>Este site não estará envolvido com qualquer transação, nem nas recompensações, nem envios, nem garantias de transações, nem serviços de custódia, nem oferece "proteção ao anunciante" ou "proteção ao contatante".
        </p>
      </Banner> 


      {/*titulo*/}
      <h3 className='mt-2'>Resultados da busca</h3>  
      <hr/>    


      {/* corpo do anuncio*/}
      {annoucements[0] !== undefined ? (
        <div className='row mt-5'>

          {annoucements.map(item => (
            <div key={item.id} className="col-4">
             
                <Link key={item.id} to={`/anuncio/${item.type}/${item.id}`}>
                  <Card key={item.id} city={item.city} time={item.insert_in} photo_background={item.photo} category={item.category} type_class={ item.type=='Achado' ? 'find' : item.type=='Perdido' ? 'lost' : 'recovered'} hasReward={item.reward} />   
                </Link>                    
    
            </div>
          ))}



        </div>
      ):
        <LoaderPage>
          <h1><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></h1>
        </LoaderPage>       
      } 


      {/* footer */}
      <Footer/>

    </div>
  )
}

export default Search;