import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function TabelaLocafilme(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
      
      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.loc_codigo}>
          <td> {item.loc_codigo} </td>
          <td> {item.loc_filme} </td>
          <td> {item.loc_genero} </td>
          <td> {item.loc_ator} </td>
          <td> {item.loc_pais} </td>
          <td> {item.loc_valortotal} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.loc_codigo} > Editar </a></td>
          {/*<td> <Link to={props.chave + item.loc_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

      <td> <i className="bi bi-trash"></i> </td>*/}
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'left' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Filme </th>
            <th scope="col"> Gênero </th>
            <th scope="col"> Ator </th>
            <th scope="col"> País </th>
            <th scope="col"> Valor Total </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Filme</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}