const express = require('express');
const controller = require('./controller');

const apiRouter = express();

apiRouter.post('/customers', controller.addCustomer);
apiRouter.get('/customers', controller.getCustomer);

apiRouter.post('/orders', controller.addCustomer);
apiRouter.get('/orders', controller.getCustomer);

apiRouter.post('/stock', controller.addCustomer);
apiRouter.get('/stock', controller.getCustomer);

module.exports = apiRouter;
