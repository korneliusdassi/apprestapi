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
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//tampilkan data mhs berdasarkan id

exports.tampildataid = function (req, res) {
  let id = req.params.id;
  connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa= ?', [id], function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
