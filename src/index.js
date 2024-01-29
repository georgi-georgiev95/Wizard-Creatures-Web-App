const express = require('express');

const expressConfig = require('./config/expressConfig');

const app = express();

expressConfig(app);


app.listen(3000, () => console.log(`App is listening on port 3000`));

