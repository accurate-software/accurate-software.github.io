import React, { useEffect, useState, FormEvent,ChangeEvent } from 'react';
import {MapContainer , TileLayer, Marker, Popup, MapConsumer} from 'react-leaflet'; 
import {Link} from 'react-router-dom';

import api from '../../services/api'

import Navbar from '../../components/navbar';
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import LoaderPage from '../../components/loaderPage';

import './style.css';

import OKgif from '../../assets/ok.gif'

interface AnnoucementInt {
  id: number;  
  category: string;
  description: string;
  photo: string;
  name: string;
  insert_in: string;
  updated_at: string;
  reward: number;
  reward_value: string;
  city: string;
  uf: string;
  phone: string;  
  email: string;
  latitude: number;  
  longitude: number;
  type: string;
}

const FoundAnnouncement = () =>{

  /*loaderpage */
  const [loaderPage, setLoaderPage] = useState(false);
  
  /*pegando dados do anuncio */
  const [annoucement, setAnnoucement] = useState<AnnoucementInt[]>([]); 
  useEffect(() => {
    const params = window.location.href.split('/');    
    
    api.get(`anuncio/${params[4]}/${params[5]}`).then(response =>{     
      setAnnoucement(response.data)   
    });
  

  },[]);


  /*exibe ou nao elementos */
  var status;
  var showButton = true;
  if(annoucement[0] !== undefined){
  
    if(annoucement[0].type === 'Achado') {
      status = <span className='danger'>Ainda não entregue!</span>;
     

    }else if(annoucement[0].type === 'Perdido'){
      status = <span className='danger'>Ainda não recuperado!</span>;
      

    } else{
      status = <span className='ok'>Recuperado!</span>;
      var showButton = false;
    }
      
  }

  // modal de conclusao
  const [modalConlusion, setModalConlusion ] = useState<boolean>(false)
  function handleModalConclusion(){
    if(modalConlusion === true)
      setModalConlusion(false);
    else
      setModalConlusion(true);
  }



  // submit do form de conclusao
  
  const [formData,setFormData] = useState({   
    code_conclusion: '',
    description_conclusion: '',    
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

  async function handleFormSubmit(event: FormEvent){
    event.preventDefault();

    const id = annoucement[0].id;
    const { code_conclusion, description_conclusion } = formData;   

    const data = {
      id,
      code_conclusion,
      description_conclusion 
    }  

    const response = await api.post('finish-annoucement', data);

    const message = response.data.data.message;

    if(message === '1')
      setLoaderPage(true)  
    else  
      if(message.errno === 1)
        alert('Erro interno. Acione o suporte! [ERRNO 1]');
         
      else if(message === '0')
        alert('Verifique seus dados e tente novamente! \nO código está correto?'); 
  }
 




  return (
    <div className='container'>

      {/* modal */}
      {modalConlusion === true && (
       
        <div className="modal-page">

          <div className="modal-dialog modal-dialog-centered">

            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Conclusão de anúncio</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleModalConclusion()}></button>  
              </div>

              <form onSubmit={handleFormSubmit}>     
                <div className="modal-body">
                  Para concluir, digite como foi finalizado o anúncio e o código gerado ao criar o anúncio.

                  <div className='row'>
                    <div className="col-12">
                      Código                     
                      <input type='text' className='form-control' name='code_conclusion' required onChange={handleInputChange}/>
                    </div>
                  </div>

                  <div className='row'>
                    <div className="col-12">
                      Descrição
                      <textarea className='form-control' name='description_conclusion' required onChange={handleTextareaChange}></textarea>
                    </div>
                  </div>
                  
                  
                </div>

                <div className="modal-footer">
                <input type='submit' className='btn btn-success' value='Encerrar anúncio'/>
              </div>

              </form>
      
            </div>

          </div>

        </div>
      )}




      {/*loader page*/}
      {
        (loaderPage === true) ? 
        <LoaderPage>

          <img src={OKgif}/>

          <div className='container row'>
            <div className="col-12 text-center">
              Anúncio encerrado!
            </div>             
          </div>

          <p><Link to='/' className='btn btn-info'>Clique aqui para voltar!</Link></p>

        </LoaderPage>
        :
        ''
      } 
     


      {/*banner*/}
      <Navbar/>


      {/*banner*/}
      <Banner>
        <p>Este site não estará envolvido com qualquer transação, nem nas recompensações, nem envios, nem garantias de transações, nem serviços de custódia, nem oferece "proteção ao anunciante" ou "proteção ao contatante".
        </p>
      </Banner> 

      

      {/* corpo do anuncio */}
      {annoucement[0] !== undefined ? (
        <div className='mt-5 data-annoucement'>

          <div className='row'>
            <div className="col-12 title">
              <h1>{annoucement[0].category}</h1>
            </div>
          </div>

          <div className='row mb-3'>
            <div className="col-12 sub-title">
              Anunciado por: <strong>{annoucement[0].name}</strong> em: <strong>{annoucement[0].insert_in}</strong>  atualizado em: <strong>{annoucement[0].updated_at}</strong> 
            </div>
          </div>

          <div className='row mb-5'>
            <div className="col-12 photo" style={{ backgroundImage: `url(${annoucement[0].photo})` }}>             
            </div>
          </div>

          <div className='row mb-3'>
            <div className="col-12 description">
              <h3><strong>Descrição:</strong></h3>
              <p>{annoucement[0].description}</p>
            </div>
          </div>

          <hr/>

          {annoucement[0].reward === 1 && (
            <div className='row'>
              <div className="col-12 reward mb-2">
                Recompensa de: {annoucement[0].reward_value}
              </div>

              <hr/>
            </div>           
          )}

        <div className='row'> 

          <div className="col-sm-12 col-lg-4 order-2">   

            <div className='row mb-3'>     
              <div className="col-12 status">
                Status: {status}   
                { showButton === true &&             
                  (
                  <p><button type='button' className='btn btn-success w-100 p-3' onClick={() => handleModalConclusion()}>Concluir o anúncio?</button></p>
                  )
                }
              </div>
            </div>


            <div className='row'>
              <div className="col-12 contact">Contatos</div>
              <div className="col-12 mb-2"> Nome: <strong>{annoucement[0].name}</strong> </div>
              <div className="col-12 mb-2"> Email: <strong>{annoucement[0].email}</strong> </div>
              <div className="col-12 mb-2"> Calular/Whataspp: <strong>{annoucement[0].phone}</strong> </div>
              <div className="col-12 mb-2"> Localidade: <strong>{annoucement[0].city} - {annoucement[0].uf}</strong> </div>
            </div>

          </div>

          <div className="col-sm-12 col-lg-8 order-1"> 
            <div className="mb-3">             
              <h4> Possivel ponto do objeto!</h4>              
              <MapContainer center={[annoucement[0].latitude,annoucement[0].longitude]} zoom={15} >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />                 
                

                  <Marker position={[annoucement[0].latitude,annoucement[0].longitude]}>
                    <Popup>
                      Você está em:
                      <p>{`Latitude: ${annoucement[0].latitude}`} </p>
                      <p>{`Longitude: ${annoucement[0].longitude}`}</p>
                    </Popup>
                  </Marker>
                </MapContainer > 

            </div> 
          </div>



        </div> 


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

export default FoundAnnouncement;