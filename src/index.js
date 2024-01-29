const express = require('express');

const expressConfig = require('./config/expressConfig');

const app = express();

expressConfig(app);

app.get('/', (req, res) => {
    res.send('Hello from express');
});


app.listen(3000, () => console.log(`App is listening on port 3000`));

