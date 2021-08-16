const fetch = require("node-fetch");

exports.getById = async (req, res, next) => {
   res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
   res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
   res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
   
   let id = req.param('cep');

   let resposta = await getInfo(id);
   

   if(resposta.hasOwnProperty('erro') || resposta.hasOwnProperty('message')){
      res.status(400).send("ERRO");
   }else{
      res.json(resposta);
   }
   
};


async function getInfo(id) {

   return resposta = await fetch(
      `https://viacep.com.br/ws/${id}/json/`
   ).then((response) => {
      return response.json();
   }).catch((err) => {
      return err;
   });
}
