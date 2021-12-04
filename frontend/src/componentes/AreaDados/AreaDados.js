import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Locafilme from '../Locafilme/Locafilme';
import LocafilmeEditar from '../Locafilme/LocafilmeEditar';

import Cliente from '../Cliente/Cliente';
import ClienteEditar from '../Cliente/ClienteEditar';

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/locafilme" component={Locafilme}></Route>
        <Route exact path="/locafilme/:idLocafilme" component={LocafilmeEditar}></Route>

        <Route exact path="/cliente" component={Cliente}></Route>
        <Route exact path="/cliente/:idCliente" component={ClienteEditar}></Route>
      </Switch>

    </div>
  );
}

