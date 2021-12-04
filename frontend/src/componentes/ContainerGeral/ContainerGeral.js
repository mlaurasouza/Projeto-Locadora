import React from 'react';
import ContainerSuperior from '../ContainerSuperior/ContainerSuperior';
import Rodape from '../Rodape/Rodape';
import { BrowserRouter } from 'react-router-dom';
import './ContainerGeral.css';
import AreaDados from '../AreaDados/AreaDados';

function ContainerGeral() {
  return (
    <div className="geral">
      <BrowserRouter>
      
        <ContainerSuperior />

        <AreaDados/>
        <Rodape/>

      </BrowserRouter>
    </div>
  );
}

export default ContainerGeral;
