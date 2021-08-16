const CepController = require('../Controllers/CepController');

module.exports = (app) => {
   app.get('/cep', CepController.getById);
}