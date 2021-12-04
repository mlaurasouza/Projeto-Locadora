const conexao = require('../../config/conexao');

module.exports = {
    //    autoresMenu,
    locafilmeGetAll,
    locafilmeGetById,
    locafilmeNovo,
    locafilmeEditar,
}

function locafilmeGetAll(req, res) {
    conexao.query('select * from locafilme', (err, resposta) => {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function locafilmeGetById(req, res) {
    let cod = req.params.id
    conexao.query('select * from locafilme where loc_codigo = ?',[cod], function (err, resposta){
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function locafilmeNovo(req, res) {
    let dados = req.body;
    dados.loc_codigo = null;
    conexao.query('insert into locafilme set ? ', [dados], function (err, resposta) {
        if (err) {
            throw err;
        }
        else{
            res.json(resposta);
        }
    })
}

function locafilmeEditar(req, res) {
    let dados = req.body;
    const sql ="update locafilme set loc_filme = '" + dados.loc_filme + 
    "', loc_genero = '" + dados.loc_genero +
    "', loc_ator = '" + dados.loc_ator +
    "', loc_valortotal = '" + dados.valortotal +
    "', cli_codigo = '" + dados.cli_codigo +
    "' where loc_codigo = '" + dados.loc_codigo + "'"

    conexao.query(sql, function(err, resposta){
        if (err) {
            throw err;
        }else{
        res.json(resposta)
        }
    });
}