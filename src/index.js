const express = require('express');

const expressConfig = require('./config/expressConfig');
const { PORT } = require('./helpers/constants');
const app = express();

expressConfig(app);


app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

