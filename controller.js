'use strict';

var response = require('./res');
var connection = require('./koneksi');
const e = require('express');

exports.index = function (req, res) {
  response.ok('Apk berhasil berjalan', res);
};

//menampilkan semua data mhs
exports.tampildata = function (req, res) {
  connection.query('SELECT * FROM mahasiswa', function (error, rows, fileds) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
