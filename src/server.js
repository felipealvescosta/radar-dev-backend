require('dotenv');
const app = require('./app');

app.listen(process.env.PORT || 3030);