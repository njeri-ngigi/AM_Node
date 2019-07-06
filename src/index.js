const express = require('express');
const ENV = require('./environment');
const apiRouter = require('./routes');
const cors = require('cors');

const app = express();
const port = ENV.PORT;
const corsOptions = {
  origin: 'http://localhost:4200'
};


app.use(cors(corsOptions))
app.use(express.json());
app.use('/api/v1/am', apiRouter);

app.listen(port, () => console.log(`Server is running on port ${port} ...`));
