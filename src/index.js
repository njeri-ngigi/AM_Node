const express = require('express');
const ENV = require('./environment');
const apiRouter = require('./routes');

const app = express();

const port = ENV.PORT;

app.use(express.json());
app.use('/api/v1/am', apiRouter);

app.listen(port, () => console.log(`Server is running on port ${port} ...`));
