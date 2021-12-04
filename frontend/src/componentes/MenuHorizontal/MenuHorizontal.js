import React from 'react';
import { Link } from 'react-router-dom';

import './MenuHorizontal.css';

export default function MenuHorizontal() {

  return (

      <div>
        <div className="menuHorizontal">
          <nav className="navMenu">
            <ul>
              <li> <Link to="/"> Início </Link> </li>
              <li> <Link to="/cliente"> Clientes   </Link> </li>
              <li> <Link to="/locafilme"> Filmes </Link> </li>
              <li> <Link to="/usuarios"> Usuários </Link> </li>
              <li> <Link to="/configuracoes"> Configurações </Link> </li>
            </ul>
          </nav>

        </div>

      </div>

  );
}


