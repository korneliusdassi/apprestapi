const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

//parse app/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

//panggil routes
const router = require('./router');
router(app);

//daftarkan menu router dri index
app.use('/auth', require('./middleware'));

const port = 3000;
const host = 'localhost';

app.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
