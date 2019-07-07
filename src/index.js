const express = require('express');
const ENV = require('./environment');
const apiRouter = require('./routes');
const cors = require('cors');

const app = express();
const { PORT: port, ORIGIN_URL: origin } = ENV;
const corsOptions = { 
  origin
};


app.use(cors(corsOptions))
app.use(express.json());
app.use('/api/v1/am', apiRouter);

app.listen(port, () => console.log(`Server is running on port ${port} ...`));
