const express = require('express'); //chamando express do node modules
const bodyparser = require('body-parser'); //chamando body-parser do node modules
const cors = require('cors');//chamando cors do node modules
const api = express(); //instanciando express
const port = 3000;//definindo qual porta a api via escutar
const router = express.Router(); //instanciando Router
const portfolioRouter = require('./router/portfolioRouter');

api.use(cors()); //instancia de cors = faz a api atender requisições de portas diferentes

api.use(bodyparser.urlencoded({extended: true}));//trata as urls, simplifica como se fosse um json?
api.use(bodyparser.json());//a resposta da api será em json

//faz com que a rota padrao recebida via get faça alguma coisa
router.get('/', (req, res) => res.json({
    mensagem:'API online...'
}))

//middleware que cuida da rota padrao
api.use('/', router);
api.use('/portfolio', portfolioRouter);

//fica escutando a porta 3000
api.listen(port);

console.log("API rodando...");
