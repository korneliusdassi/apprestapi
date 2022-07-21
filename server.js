const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse app/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//panggil routes
const router = require('./router');
router(app);

const port = 3000;
const host = 'localhost';

app.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
