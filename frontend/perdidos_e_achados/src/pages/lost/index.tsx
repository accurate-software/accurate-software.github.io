import React, { useEffect, useState, ChangeEvent,FormEvent } from 'react';
import {MapContainer , TileLayer, Marker, Popup, MapConsumer} from 'react-leaflet'; 
import {LeafletMouseEvent} from 'leaflet'
import { Link } from 'react-router-dom';
import axios from 'axios';

import './style.css';

import OKgif from '../../assets/ok.gif'

import Navbar from '../../components/navbar';
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import LoaderPage from '../../components/loaderPage';

import api from '../../services/api';



interface ApiCategories{
  id: number;
  category: string;
}

interface ApiUf{
  sigla: string;
}

interface ApiCity{
  nome: string;
}





const LostAnnouncement = () =>{

  /*loaderpage */
  const [loaderPage, setLoaderPage] = useState(false);

  /**
   * busca de estados
   */
  const [ufs, setUfs] = useState<string[]>([]);
  useEffect(()=>{
    axios.get<ApiUf[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response =>{
      const ufInitials = response.data.map(uf => uf.sigla);     
      setUfs(ufInitials);
    });
  },[]);


  /**
   * pega o estado selecionado
   */
  const [uf, setSelectedUf] = useState<string>('');
  function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>){
    const uf = event.target.value;
    setSelectedUf(uf)
  }


  /**
   * busca das cidades do estado selecionado
   */
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


  /*pega localização */
  const [initialLatLng, setInitialLatLng] = useState<[number, number]>([-20.832914100000004,-49.395793499999996]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(positon => {
     const {latitude, longitude} = positon.coords;
    
     setLatLng([latitude, longitude]);
     setInitialLatLng([latitude, longitude]);
    })
  },[]);


  /*selecion nova localização */
  const [selectedLatLng, setLatLng] = useState<[number, number]>(initialLatLng);
  
  function handleMapClick(event: LeafletMouseEvent){
    setLatLng([event.latlng.lat, event.latlng.lng]);
  }

  /*form*/  
  const [codeConclusion, setCodeConclusion] = useState<number>();  

  const [initialCategories, setInitialCategories] = useState<ApiCategories[]>([]);
  useEffect(()=>{
    api.get('categories').then(response =>{  
      setInitialCategories(response.data);      
    });
  },[]);

  const [formData,setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    description: '',
    photo: '',
    reward: '0', 
    reward_value: '',   
    city: '',
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target;
    setFormData({ ...formData, [name]:value});
  }

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>){
    const {name, value} = event.target;
    setFormData({ ...formData, [name]:value});
  }

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>){
    const {name, value} = event.target;
    setFormData({ ...formData, [name]:value});
  }  

  /*submit */
  async function handleFormSubmit(event: FormEvent){
    event.preventDefault();

    const type = 2;
    const selectedUf = uf;
    const { name, email, phone, category, description, photo,  reward,  reward_value, city } = formData;
    const [ latitude, longitude ] = selectedLatLng;

    const data = {
      type,
      name,
      email,
      phone,
      category,
      description,
      photo,
      reward,
      reward_value,
      latitude,
      longitude,
      uf: selectedUf, 
      city
    }  

    const response = await api.post('create-annoucement', data);

    setLoaderPage(true)
    setCodeConclusion(response.data.code_conclusion)
  }


  return (
    <div className='container'>

      {/*loader page*/}
      {
        (loaderPage === true) ? 
        <LoaderPage>

          <img src={OKgif}/>

          <div className='container row'>
            <div className="col-12 text-center">
              Seu anuncio foi publicado com sucesso!
            </div>
            <div className="col-12 text-center">
              Foi gerado um código único para responder quando concluir o anuncio. ANOTE!
              <br/>Será enviado por email também!
            </div>

            <div className="col-12 alert alert-info text-center">
              <h1>{codeConclusion}</h1>
            </div>
          </div>

          <p><Link to='/' className='btn btn-info'>Clique aqui para voltar!</Link></p>

        </LoaderPage>
        :
        ''
      }  

      {/*navbar*/}
      <Navbar/>


      {/*banner*/}
      <Banner>
        <p>Este site não estará envolvido com qualquer transação, nem nas recompensações, nem envios, nem garantias de transações, nem serviços de custódia, nem oferece "proteção ao anunciante" ou "proteção ao contatante".
        </p>
      </Banner>  


      {/*titulo*/}
      <div className='row mt-5'>
        <div className="col-12 text-center text-lost">
          PERDI ALGO! :(
        </div>
      </div>

      <div className='row'>
        <div className="col-12 text-center">
          Não se preocupe, vamos te ajudar a encontrar o que perdeu! <br/>Preencha o formulário abaixo com as informações.
        </div>
      </div>


      {/*form*/}
      <form onSubmit={handleFormSubmit}>

        <div className="row mt-5">

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nome</label>
              <input type='text' className="form-control" id="name" name='name' onChange={handleInputChange} required/>               
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type='email' className="form-control" id="email" name='email' onChange={handleInputChange} required/>               
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Celular/Whatsapp</label>
              <input type='text' className="form-control" id="phone" name='phone' onChange={handleInputChange} required/>               
            </div>
          </div>

          <div className="col-lg-4 mb-1">
            <label htmlFor="uf" className="form-label">Estado</label>
            <select className='form-select' name='uf' id='uf' onChange={handleSelectedUf} required>
              <option value=''>...</option>
              {ufs.map(uf => (<option key={uf} value={uf}>{uf}</option>))}
            </select>
          </div>

          <div className="col-lg-4 mb-1">
          <label htmlFor="city" className="form-label">Cidade</label>
            <select className='form-select' name='city' id='city' onChange={handleSelectChange}>
              <option value=''>...</option>
              { cities.map( city => (  <option key={city} value={city}>{city}</option>))}
            </select>
          </div>

        </div>

        <div className='row mt-5'>

          <div className="col-sm-12 col-md-6 col-lg-4">

            <div className="mb-3">
              <label htmlFor="category" className="form-label">No que melhor se encaixa o ‘perdido’?</label>
              <select className="form-select" id="category" name='category' onChange={handleSelectChange}>
                <option value=''>CATEGORIAS</option>
                {initialCategories.map( item =>(  <option key={item.id} value={item.id}>{item.category}</option>) )}     
              </select>
            </div>
          
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">

            <div className="mb-3">
              <label htmlFor="reward" className="form-label">Haverá alguma recompensa?</label>
              <select className="form-select" id="reward" name='reward' onChange={handleSelectChange}>
                <option value='0'>Não</option>
                <option value='1'>Sim</option>
              </select>
            </div>
          
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4">

            <div className="mb-3">
              <label htmlFor="reward_value" className="form-label">O que será<br/></label>
              { (formData.reward === '0') ?
              <input type='text' className="form-control" id="reward_value" name='reward_value'  disabled onChange={handleInputChange}/>  
              :
              <input type='text' className="form-control" id="reward_value" name='reward_value'  onChange={handleInputChange}/>          
              }   
            </div>
          
          </div>
        </div>

        <div className="row">
          <div className="col-12">            
            <label htmlFor="photo" className="form-label">Envie fotos.</label>
            <input className="form-control" type="file" id="photo" name='photo' onChange={handleInputChange} disabled/>          
          </div>
        </div>

        <div className='row mt-2'>
          <div className="col-12">

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Faça uma descrição. 
                {/* <br/><span className='text-danger'> Não adicione números de telefone, endereços, ou outra forma de contato por aqui. Terá um local certo para isso logo mais a frente!  ;)</span> */}
                </label>
              <textarea className="form-control" id="description" name='description' onChange={handleTextareaChange}></textarea>              
            </div>
          
          </div>
        </div>

        <div className='row'>
          <div className="col-12">

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Pode apontar no mapa o local onde acha que perdeu?.               
              </label>
            
              <MapContainer center={initialLatLng} zoom={15} >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <MapConsumer>
                    {(map) => {               
                      map.on("click", handleMapClick);
                      return null;
                    }}
                  </MapConsumer>
                

                  <Marker position={selectedLatLng}>
                    <Popup>
                      Você está em:
                      <p>{`Latitude: ${selectedLatLng[0]}`} </p>
                      <p>{`Longitude: ${selectedLatLng[1]}`}</p>
                    </Popup>
                  </Marker>
                </MapContainer > 

            </div> 
         
          </div>
        </div>

        <div className='row d-flex justify-content-center'>
          <div className="col-sm-12 col-lg-3">
            <input type='submit' className='btn btn-success' value='Criar anuncio!'/>
          </div>
        </div>

      </form>
      

      {/*footer*/}
      <Footer/>

    </div>
  )
}

export default LostAnnouncement;