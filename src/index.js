const app = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const { PORT } = require('./utils/const');
const mongoose = require('./config/dbConfig');

mongoose();
handlebarsConfig(app);

app.listen(PORT, console.log(`App is listening on port ${PORT}`));