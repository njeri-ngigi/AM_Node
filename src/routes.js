const express = require('express');
const userController = require('./controllers/customers');
const stockController = require('./controllers/stock');
const { validateUser, validateStock } = require('./middlewares/validator');


const apiRouter = express();

apiRouter.post('/customers', validateUser(), userController.addCustomer);
apiRouter.get('/customers', userController.getCustomers);
apiRouter.get('/customers/:id', userController.getCustomer);

apiRouter.post('/stock', validateStock(), stockController.addStock);
apiRouter.get('/stock', stockController.getAllStock);
apiRouter.post('/stock/bulk', stockController.addStockInBulk);
apiRouter.get('/stock/:id', stockController.getStockById);


apiRouter.post('/order', userController.addCustomer);
apiRouter.get('/order', userController.getCustomers);

module.exports = apiRouter;
