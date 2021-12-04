import React from "react"
import './ClienteEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function ClienteEditar() {
    let idBoolean = false;        // edição

//    const history = useHistory();

    const [codigo, setCodigo] = useState(0);

    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cadastro, setCadastro] = useState('');
    const [checked, setChecked] = useState(false);

    const { idCliente } = useParams();

    function IfCrud() {
              if (idCliente === 0) {
            idBoolean = true;
        } else {
        }
    }

    useEffect(() => {
        async function getCliente() {
            if (idCliente == 0) {
                setChecked(true);
            } else {
                const { data } = await urlapi.get('/cliente/' + idCliente);

                setCodigo(data[0].cli_codigo);

                setNome(data[0].cli_nome);
                setApelido(data[0].cli_apelido);
                setTelefone(data[0].cli_telefone);
                setCadastro(data[0].cli_cadastro);
            }
        }
        IfCrud();
        getCliente();
    }, []);


    async function handleCliente(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                if (idCliente == 0) {
                    await urlapi.post('cliente', data)
                    .then(response =>  alert('inserção'))
                } else {
                    await urlapi.put('/cliente/' + idCliente, data)
                    .then(response =>  alert('alteração'))
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--autor" onSubmit={handleCliente} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="cli_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome do Cliente </label>
                            <input type="text" className="form-control"
                                name="cli_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Apelido </label>
                            <input type="text" className="form-control" name="cli_apelido"
                                id="cli_apelido"
                                value={apelido}
                                onChange={e => setApelido(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Telefone </label>
                            <input type="text" className="form-control" name="cli_telefone"
                                id="cli_telefone"
                                value={telefone}
                                onChange={e => setTelefone(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Data cadastro </label>
                            <input type="text" className="form-control" name="cli_cadastro"
                                id="cli_cadastro"
                                value={cadastro}
                                onChange={e => setCadastro(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/cliente" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
