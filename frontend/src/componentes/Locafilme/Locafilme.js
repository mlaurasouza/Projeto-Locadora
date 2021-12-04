import React from "react"
import './Locafilme.css';
import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaLocafilme";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Locafilme() {
  const [locafilme, setLocafilme] = useState([])

  
  useEffect(() => {
    urlapi.get('locafilme')
      .then(response => setLocafilme(response.data));
  }, []
  )

  return (
    <>
        <div id="idLocafilme" className="locafilme">
          <div id="corpo_rel">
            <legend> Registros de Filmes Cadastrados</legend>

            <div>

              <Tabela
                items={locafilme}
                chave={'/locafilme/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Locafilme;

