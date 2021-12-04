import React from "react"
import './Cliente.css';
import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaCliente";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Cliente() {
  const [cliente, setCliente] = useState([])

  useEffect(() => {
    urlapi.get('cliente')
    .then(response => response.data)
      .then(response => setCliente(response));
  }, []
  )

  return (
    <>
        <div id="idCliente" className="cliente">
          <div id="corpo_rel">
            <legend> Registros de Clientes Cadastrados</legend>
            <div>

              <Tabela
                items={cliente}
                chave={'/cliente/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Cliente;

