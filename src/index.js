const express = require('express');
const ENV = require('./config');
const apiRouter = require('./routes');

const app = express()

const port = ENV.PORT;

app.use('/api/v1/am', apiRouter)

app.listen(port, () => console.log(`Server is running on port ${port} ...`))
