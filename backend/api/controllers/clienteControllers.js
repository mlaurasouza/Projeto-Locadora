const conexao = require('../../config/conexao');

module.exports = {
    //    autoresMenu,
    clienteGetAll,
    clienteGetById,
    clienteNovo,
    clienteEditar,
}

function clienteGetAll(req, res) {
    const sql = 'select * from cliente';
    conexao.query(sql, (err, resposta)=>{
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function clienteGetById(req, res) {
    let cod = req.params.id
    conexao.query('select * from cliente where cli_codigo = ?',[cod], function (err, resposta){
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function clienteNovo(req, res) {
    let dados = req.body;
    dados.cli_codigo = null;
    conexao.query('insert into cliente set ? ', dados, function (err, resposta) {
        if (err) {
            throw err;
        }
        else{
            res.json(resposta);
        }
    })
}

function clienteEditar(req, res) {
    let dados = req.body;
    const sql = "update cliente set cli_nome =' " + dados.cli_nome + 
    "', cli_apelido = '" + dados.cli_apelido +
    "', cli_telefone = '" + dados.cli_telefone +
    "', cli_cadastro = '" + dados.cli_cadastro +
    "' where cli_codigo = '"+ dados.cli_codigo + "'"

    conexao.query(sql, function(err, resposta){
        if (err) {
            throw err;
        }else{
        res.json(resposta)
        }
    });
}