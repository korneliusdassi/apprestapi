const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse app/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//panggil routes
var router = require('./router');
router(app);

app.listen(3000, () => {
  console.log('Server sedang berjalan pada port 3000');
});
