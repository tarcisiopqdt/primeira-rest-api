const db = require('../../banco/db_conexao');

module.exports = class PortfolioModel {

    //recupera todos os portfolios do banco
    static getTodos(callback) {
        return db.query('SELECT * FROM portfolio', callback);
    }

    static getId(id, callback) {
        return db.query("SELECT * FROM portfolio WHERE idportfolio = ?", [id], callback)
    }

    static adicionar(portfolio, callback) {
        return db.query("INSERT INTO portfolio (descricao, detalhes) VALUES (?,?)",
            [portfolio.descricao, portfolio.detalhes], callback)
    }

    static deletar(id, callback) {
        return db.query("DELETE FROM portfolio WHERE idportfolio = ?",[id], callback)
    }

    static editar(portfolio, callback){
        return db.query("UPDATE portfolio SET descricao = ?, detalhes = ? WHERE idportfolio = ?",
        [portfolio.descricao, portfolio.detalhes,portfolio.idportfolio], callback)
    }
};
