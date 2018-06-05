document.getElementById('pre-es6-1').innerHTML = convertHtmlToText(`
this.nums.forEach((i) => {
  if (v % 5 === 0)
    this.nomors.push(i)
})
`)

document.getElementById('pre-es5-1').innerHTML = convertHtmlToText(`
var _this = this;
this.nomor.forEach(function (i) {
  if (v % 5 === 0)
    _this.nomors.push(i);
})
`)

document.getElementById('pre-es6-2').innerHTML = convertHtmlToText(`
"use strict";

class Mobil {
  constructor(jenis) {
    console.log('Inisialisasi');
    this.jenis = jenis;
    this.warna = 'hitam';
  }

  setWarna(warna) {
    this.warna = warna;
  }

  bunyikanKlakson() {
    console.log('Mobil ' + this.jenis + ' ' + this.warna + ': tin! tin!');
  }

  var mobilSedan = new Mobil('Sedan');
  mobilSedan.setWarna('Merah');
  mobilSedan.bunyikanKlakson();
}
`)

document.getElementById('pre-es5-2').innerHTML = convertHtmlToText(`
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mobil = function () {
  function Mobil(jenis) {
    _classCallCheck(this, Mobil);

    console.log('Inisialisasi');
    this.jenis = jenis;
    this.warna = 'hitam';
  }

  _createClass(Mobil, [{
    key: 'setWarna',
    value: function setWarna(warna) {
      this.warna = warna;
    }
  }, {
    key: 'bunyikanKlakson',
    value: function bunyikanKlakson() {
      console.log('Mobil ' + this.jenis + ' ' + this.warna + ': tin! tin!');
    }
  }]);

  return Mobil;
}();

var mobilSedan = new Mobil('Sedan');
mobilSedan.setWarna('Merah');
mobilSedan.bunyikanKlakson();
`)

document.getElementById('pre-es6-3').innerHTML = convertHtmlToText(`
var daftarNilai = new Map();
daftarNilai.set('Solid Snake', 60);
daftarNilai.set('Liquid Snake', 70);

for (var[nama, nilai] of daftarNilai) {
  console.log(nama + ' memiliki nilai ' + nilai);
}
`)

document.getElementById('pre-es5-3').innerHTML = convertHtmlToText(`
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var daftarNilai = new Map();
daftarNilai.set('Solid Snake', 60);
daftarNilai.set('Liquid Snake', 70);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = daftarNilai[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2),
        nama = _step$value[0],
        nilai = _step$value[1];

    console.log(nama + ' memiliki nilai ' + nilai);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
`)

document.getElementById('pre-es6-4').innerHTML = convertHtmlToText(`
function getLaptop(make, model, year) {
  return {
    make,
    model,
    year
  }
}

getLaptop("Apple", "MacBook", "2015");
`)

document.getElementById('pre-es5-4').innerHTML = convertHtmlToText(`
"use strict";

function getLaptop(make, model, year) {
  return {
    make: make,
    model: model,
    year: year
  };
}

getLaptop("Apple", "MacBook", "2015");
`)

document.getElementById('pre-es6-5').innerHTML = convertHtmlToText(`
function getLaptop(make, model, year) {
  return{
    sayModel() {
      return model;
    }
  }
}

getLaptop("Apple", "MacBook", "2015").sayModel();
`)

document.getElementById('pre-es5-5').innerHTML = convertHtmlToText(`
"use strict";

function getLaptop(make, model, year) {
  return {
    sayModel: function sayModel() {
      return model;
    }
  };
}

getLaptop("Apple", "MacBook", "2015").sayModel();
`)

document.getElementById('pre-es6-6').innerHTML = convertHtmlToText(`
var name = "make";
var i = 0;

const laptop = {
  [name + ++i]: "Apple",
  [name + ++i]: "Dell",
  [name + ++i]: "HP"
}

console.log(laptop.make1);
console.log(laptop.make2);
console.log(laptop.make3);
`)

document.getElementById('pre-es5-6').innerHTML = convertHtmlToText(`
"use strict";

var _laptop;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var name = "make";
var i = 0;

var laptop = (_laptop = {}, _defineProperty(_laptop, name + ++i, "Apple"), _defineProperty(_laptop, name + ++i, "Dell"), _defineProperty(_laptop, name + ++i, "HP"), _laptop);

console.log(laptop.make1);
console.log(laptop.make2);
console.log(laptop.make3);
`)

document.getElementById('pre-es6-7').innerHTML = convertHtmlToText(`
let nama = "Billy";
alert(\`nama saya adalah \${nama} hai semuanya??\`);
`)

document.getElementById('pre-es5-7').innerHTML = convertHtmlToText(`
"use strict";

var nama = "Billy";
alert("nama saya adalah " + nama + " hai semuanya??");
`)
