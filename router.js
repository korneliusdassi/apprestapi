'use strict';

module.exports = function (app) {
  var jsonku = require('./handler');

  app.route('/').get(jsonku.index);
  app.route('/tampil').get(jsonku.tampildata);
  app.route('/tampil/:id').get(jsonku.tampildataid);
};
