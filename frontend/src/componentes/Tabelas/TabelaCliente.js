import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function TabelaCliente(props) {

  function getLinhas() {

    const arrayRegistros = props.items;

    return arrayRegistros.map((item, i) => {
      
      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.cli_codigo}>
          <td> {item.cli_codigo} </td>
          <td> {item.cli_nome} </td>
          <td> {item.cli_apelido} </td>
          <td> {item.cli_telefone} </td>
          <td> {item.cli_cadastro} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.cli_codigo} > Editar </a></td>
          {/*<td> <Link to={props.chave + item.cli_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>
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
            <th scope="col"> Nome </th>
            <th scope="col"> Apelido </th>
            <th scope="col"> Telefone </th>
            <th scope="col"> Cadastro </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Cliente</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}