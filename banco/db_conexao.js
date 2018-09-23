const mysql = require('mysql');//chamando mysql do nodemodules

//criar uma conexao com o banco
const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_portfolio'
});

//exporta a conexao para outros arquivos poderem usarem.
module.exports = conexao;
