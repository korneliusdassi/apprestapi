const connection = require('../koneksi');
const mysql = require('mysql');
const md5 = require('md5');
const response = require('../res');
const jwt = require('jsonwebtoken');
const config = require('../config/secret');
const ip = require('ip');

//handler registrasi user
exports.registrasi = function (req, res) {
  var post = {
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
    role: req.body.role,
    tanggal_daftar: new Date(),
  };

  var query = 'SELECT email FROM ?? WHERE ??=?';
  var table = ['user', 'email', post.email];

  query = mysql.format(query, table);
  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      try {
        var query = 'INSERT INTO ?? SET ?';
        var table = ['user'];
        query = mysql.format(query, table);

        connection.query(query, post, function (error, rows) {
          if (!error) {
            response.ok('Berhasil Menambahkan Data Baru', res);
          } else {
            console.log(error);
          }
        });
      } catch (Exception) {
        response.ok('Email sudah terdaftar!', res);
      }
    }
  });
};
