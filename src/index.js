require('dotenv').config();
const express = require('express');
const { logger } = require('./utils/logger');

const webhookRoute = require('./routes');

const port = process.env.SERVER_PORT || 4242;
const app = express();

app.use('/', webhookRoute);

app.listen(port, () => {
  logger.log(`Server is listening on port ${port}`);
});
