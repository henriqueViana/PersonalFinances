const express = require('express');

module.exports = (server) => {

    //Define a URL base para todas as rotas
    const router = express.Router();
    server.use('/api', router);

    //Rotas do ciclo de pagamento
    const PayCycle = require('../api/payCycle/payCycleService');
    PayCycle.register(router, '/payCycles');
}