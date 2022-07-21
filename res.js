'use strict';

exports.ok = function (values, res) {
  const data = {
    status: 200,
    values: values,
  };
  res.json(data);
  res.end();
};

//respon untuk nested matakuliah
exports.okNested = function (values, res) {
  //lakukan akumulasi
  const hasil = values.reduce((akumulasikan, item) => {
    //tentukan key group
    if (akumulasikan[item.nama]) {
      //variabel group utk menampung nama mhs
      const group = akumulasikan[item.nama];

      //cek isi array adalah matakuliah
      if (Array.isArray[group.matakuliah]) {
        //tambahkan value ke dalam group matakuliah
        group.matakuliah.push(item.matakuliah);
      } else {
        group.matakuliah = [group.matakuliah, item.matakuliah];
      }
    } else {
      akumulasikan[item.nama] = item;
    }
    return akumulasikan;
  }, {});

  let data = {
    status: 200,
    values: hasil,
  };

  res.json(data);
  res.end();
};
