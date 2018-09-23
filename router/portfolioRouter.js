var express = require('express');
var router = express.Router();
var PortfolioModel = require('../model/portfolio/PortfolioModel');
var RespostaClass = require('../model/RespostaClass');

//retorna todo os portfolios no banco
router.get("/", function(req, res, next){
    PortfolioModel.getTodos(function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro";
            console.log("erro", erro);
        }else{
            resposta.dados = retorno;
        }

        res.json(resposta);

    })
})

//retorna o portfolio passa via get
router.get("/:id?", function(req, res, next){

    PortfolioModel.getId(req.params.id,function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro";
            console.log("erro", erro);
        }else{
            resposta.dados = retorno;
        }

        res.json(resposta);//transforma a resposta em json

    })
})

//insere no db via post
router.post("/?", function(req, res, next){

    PortfolioModel.adicionar(req.body,function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro";
            console.log("erro", erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "Cadastro realizado com sucesso!";
            }else{
                resposta.erro = true;
                resposta.msg = "Não foi possível realizar a operação";
            }
        }
        console.log('resposta ', resposta);
        res.json(resposta);//transforma a resposta em json

    })
})

//DELETA REGISTRO PASSADO VIA delete
router.delete("/:id?", function(req, res, next){

    PortfolioModel.deletar(req.params.id,function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro";
            console.log("erro", erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "Registro excluido com sucesso!";
            }else{
                resposta.erro = true;
                resposta.msg = "Não foi possível excluir o registro!";
            }
        }
        console.log('resposta ', resposta);
        res.json(resposta);//transforma a resposta em json

    })
})

//EDITAR REGISTRO
router.put("/", function(req, res, next){

    PortfolioModel.editar(req.body,function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro";
            console.log("erro", erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "Registro Editado com sucesso!";
            }else{
                resposta.erro = true;
                resposta.msg = "Não foi possível editar o registro!";
            }
        }
        console.log('resposta ', resposta);
        res.json(resposta);//transforma a resposta em json

    })
})
module.exports = router;