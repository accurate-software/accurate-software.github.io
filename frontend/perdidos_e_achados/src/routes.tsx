import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/home';
import Achei from './pages/found';
import Perdi from './pages/lost';
import Anuncio from './pages/announcement';
import Busca from './pages/search';



const Routes = () =>{
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact/>
      <Route component={Achei} path='/achei'/>
      <Route component={Perdi} path='/perdi'/>
      <Route component={Anuncio} path='/anuncio/:type/:id'/>
      <Route component={Busca} path='/busca'/>
    </BrowserRouter>
  )
}

export default Routes;