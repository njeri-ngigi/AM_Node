const express = require('express');
const controller = require('./controllers/customers');
const { validateUser } = require('./middlewares/validator');


const apiRouter = express();

apiRouter.post('/customers', validateUser(), controller.addCustomer);
apiRouter.get('/customers', controller.getCustomers);
apiRouter.get('/customers/:id', controller.getCustomer);

apiRouter.post('/orders', controller.addCustomer);
apiRouter.get('/orders', controller.getCustomers);

apiRouter.post('/stock', controller.addCustomer);
apiRouter.get('/stock', controller.getCustomers);

module.exports = apiRouter;
