const express = require('express');
const auth = require('./auth');
const router = express.Router();

//mendaftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);

module.exports = router;
