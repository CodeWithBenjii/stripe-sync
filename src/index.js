require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const webhookRoute = require('./routes');

const port = process.env.SERVER_PORT || 4242;

const app = express();

app.use(morgan('dev'));
app.use(compression());
app.use(helmet());
app.use('/', webhookRoute);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}`);
});
