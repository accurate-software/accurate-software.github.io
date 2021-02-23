import React, { ChangeEvent, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import api from '../../services/api';

import Navbar from '../../components/navbar';
import Banner from '../../components/banner';
import Card from '../../components/card';
import Footer from '../../components/footer';



/* tipagens */
interface ApiUf{
  sigla: string;
}

interface ApiCity{
  nome: string;
}

interface ApiCategories{
  id: number;
  category: string;
}

interface ApiList{
  id: number;
  city: string;
  category: string;
  insert_in: string;
  photo: string;
  reward: string;
  type: string;
}



const Home = () =>{

  /* api ibge:busca de estados  */
  const [ufs, setUfs] = useState<string[]>([]);
  useEffect(()=>{
    axios.get<ApiUf[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response =>{
      const ufInitials = response.data.map(uf => uf.sigla);     
      setUfs(ufInitials);
    });
  },[]);


  /* pega o estado selecionado  */
  const [uf, setSelectedUf] = useState<string>('');
  function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>){
    const uf = event.target.value;
    setSelectedUf(uf)
  }


  /* api ibge: busca das cidades do estado selecionado  */
  const [cities, setCities] = useState<string[]>([]);
  useEffect(() => {
    if(uf === ''){
      return;
    }
    axios.get<ApiCity[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`).then(response =>{
      const cities = response.data.map(city => city.nome)      
      setCities(cities)
    });
  },[uf]);


  /* api:alimenta o campo categorias  */
  const [initialCategories, setInitialCategories] = useState<ApiCategories[]>([]);
  useEffect(()=>{
    api.get('categories').then(response =>{  
      setInitialCategories(response.data);      
    });
  },[]);


  /* api:listagem de achados   */
  const [initialFound, setinitialFound] = useState<ApiList[]>([]);
  useEffect(()=>{
    api.get('search-annoucement/1').then(response =>{  
      setinitialFound(response.data);  
    });
  },[]);

  /* api:listagem de perdidos  */
  const [initialLost, setinitialLost] = useState<ApiList[]>([]);
  useEffect(()=>{
    api.get('search-annoucement/2').then(response =>{  
      setinitialLost(response.data); 
    });
  },[]);


  /* api:valores de achados conlcuidos e perdidos   */
  const [valueType_found, setValueType_found] = useState<number[]>([]);
  const [valueType_lost, setValueType_lost] = useState<number[]>([]);
  const [valueType_concluded, setValueType_concluded] = useState<number[]>([]);
  useEffect(()=>{
    api.get('count').then(response =>{ 
     
      setValueType_found(response.data[0].achados); 
      setValueType_lost(response.data[0].perdidos); 
      setValueType_concluded(response.data[0].concluidos); 
    });
  },[]);





  return (    
    <div className='container'>

      {/*navbar*/}
      <Navbar/>


      {/*banner*/}
      <Banner>
        <p>Encontrou alguma coisa? O dono deve estar a procura! <br/>Mas você perdeu a chave do carro de novo? Será que alguém achou? </p>
        <p><strong> Crie seu anúncio que vamos te ajudar!!! :)</strong></p>
      </Banner>       
      

      {/*botoes de acesso aos forms*/}
      <div className="row buttons-lost-find">

        <div className="col-sm-12 col-md-6 col-lg-6">
          <Link className="btn buttom-find" to='/achei'>Achei alguma coisa! :)</Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end">
          <Link className="btn buttom-lost" to='/perdi'>Perdi algo! :(</Link>
        </div>

      </div>


      {/*busca*/}
      <form method='GET' action='/busca'>

        <div className="row box-search mb-1">
          <div className="col-12"><strong>Buscar Achado/Perdido/Concluído</strong></div>
        </div>

        <div className="row box-search mb-1">

          <div className="col-lg-4 mb-1">
            <select className='form-select' name='category' required>
              <option value=''>CATEGORIAS</option>
              {initialCategories.map(item => (<option key={item.id} value={item.id}>{item.category}</option>))}
            </select>
          </div>

          <div className="col-lg-4 mb-1">
            <select className='form-select' name='uf' onChange={handleSelectedUf} required>
              <option value=''>ESTADO</option>
              {ufs.map(uf => (<option key={uf} value={uf}>{uf}</option>))}
            </select>
          </div>

          <div className="col-lg-4 mb-1">
            <select className='form-select' name='city' required>
              <option value=''>CIDADE</option>
              { cities.map( city => (  <option key={city} value={city}>{city}</option>))}
            </select>
          </div>

        </div>

        <div className="row box-search mb-5">

          <div className="col-lg-12">

            <div className="input-group">
              <input type="search" className="form-control" name='description' placeholder="Digite uma palavra chave..."/>
              <button className="btn btn-outline-secondary" type="submit">Buscar!</button>
            </div>
            
          </div>

        </div>

      </form>


      {/*listagem de novos anuncios*/}
      <div className="row">
        <div className="col-6 ">Últimos <br/><span className="text-find"> Achados</span></div>
        <div className="col-6 text-right d-flex justify-content-end"><div className='text-right'>Últimos <br/><span className="text-lost"> Perdidos</span> </div></div>
      </div>

      <div className="row mb-3">
        <div className="col-6">

            
          {initialFound.map(item => (
            <Link key={item.id} to={`/anuncio/${item.type}/${item.id}`}>
              <Card key={item.id} city={item.city} time={item.insert_in} photo_background={item.photo} category={item.category} type_class='find' hasReward={item.reward} />   
            </Link>
          ))}         
                     
        </div>
        <div className="col-6">

          {initialLost.map(item => (
            <Link key={item.id} to={`/anuncio/${item.type}/${item.id}`}>
              <Card key={item.id} city={item.city} time={item.insert_in} photo_background={item.photo} category={item.category} type_class='lost' hasReward={item.reward} />   
            </Link>
          ))}              

        </div>
      </div>

      <div className="row">
        <div className="col-6 "> <a className='see-all-find' href="#">+ ver todos...</a> </div>
        <div className="col-6 text-right d-flex justify-content-end"> <a className='see-all-lost' href="#">+ ver todos...</a> </div>
      </div>


      {/* contagem */}
      <div className='row mt-5 mb-5'>
        <div className="col-12 text-center data-count">
          No momento estamos com <br/>
          <span className="text-find"> {valueType_found} Achados </span>
          <span className="text-lost"> {valueType_lost} Perdidos </span> 
          <span className="text-concluded"> {valueType_concluded} Concluidos</span>
        </div>
      </div>


      {/*footer*/}
      <Footer/>
    </div>   
  )
}

export default Home;