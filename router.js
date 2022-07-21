'use strict';

module.exports = function (app) {
  const jsonku = require('./handler');

  app.route('/').get(jsonku.index);
  app.route('/mahasiswa').get(jsonku.tampilData);
  app.route('/mahasiswa/:id').get(jsonku.tampildataId);
  app.route('/mahasiswa').post(jsonku.tambahMahasiswa);
  app.route('/mahasiswa/:id').put(jsonku.ubahDataMahasiswa);
  app.route('/mahasiswa/:id').delete(jsonku.deleteMahasiswa);
  app.route('/matakuliah').get(jsonku.tampilMatakuliah);
};
