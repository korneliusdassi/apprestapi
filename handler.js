'use strict';

const response = require('./res');
const connection = require('./koneksi');
const express = require('express');

exports.index = function (req, res) {
  response.ok('Apk berhasil berjalan', res);
};

//menampilkan semua data mhs
exports.tampilData = function (req, res) {
  connection.query('SELECT * FROM mahasiswa', function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//tampilkan data mhs berdasarkan id

exports.tampildataId = function (req, res) {
  let id = req.params.id;
  connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa= ?', [id], function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//menambahkan data mahasiswa
exports.tambahMahasiswa = function (req, res) {
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;

  connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?,?,?)', [nim, nama, jurusan], function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      response.ok('Data Berhasil Ditambahakan!', res);
    }
  });
};

//mengubah data berdasarkan Id mahasiswa
exports.ubahDataMahasiswa = function (req, res) {
  let id = req.params.id;
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;

  connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id], function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      response.ok('Data Berhasil Diubah!', res);
    }
  });
};

//Menghapus data mahasiswa berdasarkan Id

exports.deleteMahasiswa = function (req, res) {
  let id = req.params.id;

  connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id], function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      response.ok('Data Berhasil Dihapus!', res);
    }
  });
};

//menampilkan matakuliah group
exports.tampilMatakuliah = function (req, res) {
  connection.query(
    'SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama,  mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah=matakuliah.id_matakuliah AND krs.id_mahasiswa=mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa;',
    function (error, rows) {
      if (error) {
        console.log(error);
      } else {
        response.okNested(rows, res);
      }
    }
  );
};
