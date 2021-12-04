import React from "react"
import './LocafilmeEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function LocafilmeEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    const [codigo, setCodigo] = useState(0);

    const [filme, setFilme] = useState('');
    const [genero, setGenero] = useState('');
    const [ator, setAtor] = useState('');
    const [pais, setPais] = useState('');
    const [valortotal, setValortotal] = useState('');
    const [cliCod, setCliCod] = useState('');

    const [checked, setChecked] = useState(false);
    const { idLocafilme } = useParams();

    function IfCrud() {
        if (idLocafilme === 0) {
            idBoolean = true;
        } else {
        }
    }

    useEffect(() => {
        async function getLocafilme() {
            console.log('Filme: ' + idLocafilme + ' - ' + idBoolean)
            if (idLocafilme == 0) {
                setChecked(true);
            } else {
                const { data } = await urlapi.get('/locafilme/' + idLocafilme);
                console.log(data)
                setCodigo(data[0].loc_codigo);

                setFilme(data[0].loc_filme);
                setGenero(data[0].loc_genero);
                setAtor(data[0].loc_ator);
                setPais(data[0].loc_pais);
                setValortotal(data[0].loc_valortotal);
                setCliCod(data[0].cli_codigo);


            }
        }
        IfCrud();
        getLocafilme();
    }, []);


    async function handleLocafilme(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            if (filme.length === 0) {
                alert('Insira um nome válido')
            } else {
                if (idLocafilme == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('locafilme', data);
                } else {
                    await urlapi.put('/locafilme/' + idLocafilme, data);
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--autor" onSubmit={handleLocafilme} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="loc_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome do Filme </label>
                            <input type="text" className="form-control"
                                name="loc_filme"
                                value={filme}
                                onChange={e => setFilme(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Gênero </label>
                            <input type="text" className="form-control" name="loc_genero"
                                id="loc_genero"
                                value={genero}
                                onChange={e => setGenero(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Ator </label>
                            <input type="text" className="form-control" name="loc_ator"
                                id="loc_ator"
                                value={ator}
                                onChange={e => setAtor(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> País </label>
                            <input type="text" className="form-control" name="loc_pais"
                                id="loc_pais"
                                value={pais}
                                onChange={e => setPais(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Valor total </label>
                            <input type="text" className="form-control" name="loc_valortotal"
                                id="loc_valortotal"
                                value={valortotal}
                                onChange={e => setValortotal(e.target.value)}
                            />
                        </div>
                    </div>

                    
                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Código do Cliente </label>
                            <input type="text" className="form-control" name="cli_codigo"
                                id="cli_codigo"
                                value={cliCod}
                                onChange={e => setCliCod(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/locafilme" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
