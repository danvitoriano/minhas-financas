/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_FinancaController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var financaController = new _controller_FinancaController__WEBPACK_IMPORTED_MODULE_0__["FinancaController"]();
document.querySelector('form').onsubmit = financaController.adiciona.bind(financaController);
document.querySelector('#btn-import').onclick = financaController.importaFinancas.bind(financaController);
document.querySelector('#btn-apaga').onclick = financaController.apaga.bind(financaController);
document.querySelector('#btn-filtrar').onclick = financaController.filtra.bind(financaController);
document.querySelector('#btn-limpar').onclick = financaController.limpar.bind(financaController);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancaController", function() { return FinancaController; });
/* harmony import */ var _helpers_DateHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _models_Financa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _models_ListaFinancas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _models_Notificacao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _views_NotificacaoView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _views_FinancasView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _services_FinancaService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var FinancaController = /*#__PURE__*/function () {
  function FinancaController() {
    _classCallCheck(this, FinancaController);

    var $ = document.querySelector.bind(document);
    this._inputItem = $("#item");
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._inputFiltroData = $("#filtro-data");
    this._listaFinancas = new _models_ListaFinancas__WEBPACK_IMPORTED_MODULE_2__["ListaFinancas"]();
    this._financasView = new _views_FinancasView__WEBPACK_IMPORTED_MODULE_5__["FinancasView"]($("#financasView"), this);

    this._financasView.update(this._listaFinancas);

    this._notificacao = new _models_Notificacao__WEBPACK_IMPORTED_MODULE_3__["Notificacao"]();
    this._notificacaoView = new _views_NotificacaoView__WEBPACK_IMPORTED_MODULE_4__["NotificacaoView"]($("#notificacaoView"));

    this._notificacaoView.update(this._notificacao);

    this._ordemColuna = "";
    this._ordemAtual = "";
  }

  _createClass(FinancaController, [{
    key: "adiciona",
    value: function adiciona(evento) {
      evento.preventDefault();

      this._listaFinancas.adiciona(this._criaFinanca());

      this._financasView.update(this._listaFinancas);

      this._notificacao.texto = "Finança adicionada 2";

      this._notificacaoView.update(this._notificacao);

      this._limpaFormulario();
    }
  }, {
    key: "_criaFinanca",
    value: function _criaFinanca() {
      console.log(_helpers_DateHelper__WEBPACK_IMPORTED_MODULE_0__["DateHelper"].textoParaData(this._inputData.value));
      return new _models_Financa__WEBPACK_IMPORTED_MODULE_1__["Financa"](this._inputItem.value, _helpers_DateHelper__WEBPACK_IMPORTED_MODULE_0__["DateHelper"].textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
    }
  }, {
    key: "_limpaFormulario",
    value: function _limpaFormulario() {
      this._inputItem.value = "";
      this._inputData.value = "";
      this._inputQuantidade.value = "";
      this._inputValor.value = ""; // this._inputItem.focus()
    }
  }, {
    key: "apaga",
    value: function apaga() {
      this._listaFinancas.esvazia();

      this._financasView.update(this._listaFinancas);
    }
  }, {
    key: "importaFinancas",
    value: function importaFinancas() {
      var _this = this;

      var financaService = new _services_FinancaService__WEBPACK_IMPORTED_MODULE_6__["FinancaService"]();
      financaService.getFinancasSemana().then(function (financas) {
        return financas.map(function (financa) {
          _this._listaFinancas.adiciona(financa);

          _this._financasView.update(_this._listaFinancas);

          _this._notificacao.texto = "Finanças da semana importadas";

          _this._notificacaoView.update(_this._notificacao);
        });
      })["catch"](function (err) {
        console.error(err);
        return;
      });
    }
  }, {
    key: "ordena",
    value: function ordena(coluna) {
      if (coluna === 'item') this._listaFinancas.ordena(function (a, b) {
        return a[coluna].localeCompare(b[coluna]);
      });else this._listaFinancas.ordena(function (a, b) {
        return a[coluna] - b[coluna];
      });

      if (coluna === this._ordemAtual) {
        this._listaFinancas.reverse();

        this._ordemAtual = "";
      } else {
        this._ordemAtual = coluna;
      }

      this._ordemColuna = coluna;

      this._financasView.update(this._listaFinancas);
    }
  }, {
    key: "filtra",
    value: function filtra() {
      if (this._inputFiltroData.value === "") {
        this._notificacao.texto = "Preencha um data!";

        this._notificacaoView.update(this._notificacao, "danger");
      } else {
        var listaFiltrada = new _models_ListaFinancas__WEBPACK_IMPORTED_MODULE_2__["ListaFinancas"]();
        listaFiltrada._financas = this._listaFinancas.filtra(_helpers_DateHelper__WEBPACK_IMPORTED_MODULE_0__["DateHelper"].textoParaData(this._inputFiltroData.value));

        if (listaFiltrada._financas.length === 0) {
          this._notificacao.texto = "Não há resultados para esta data.";

          this._notificacaoView.update(this._notificacao, "warning");
        } else {
          this._notificacaoView.update("");

          this._financasView.update(listaFiltrada);
        }
      }
    }
  }, {
    key: "limpar",
    value: function limpar() {
      this._notificacaoView.update("");

      this._inputFiltroData.value = "";

      this._financasView.update(this._listaFinancas);
    }
  }, {
    key: "coluna",
    get: function get() {
      return this._ordemColuna;
    }
  }, {
    key: "ordem",
    get: function get() {
      return this._ordemAtual;
    }
  }]);

  return FinancaController;
}();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateHelper", function() { return DateHelper; });
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DateHelper = /*#__PURE__*/function () {
  function DateHelper() {
    _classCallCheck(this, DateHelper);

    throw new Error("Esta classe não pode ser instanciada");
  }

  _createClass(DateHelper, null, [{
    key: "dataParaTexto",
    value: function dataParaTexto(data) {
      return "".concat(data.getDate(), "/").concat(data.getMonth() + 1, "/").concat(data.getFullYear());
    }
  }, {
    key: "textoParaData",
    value: function textoParaData(texto) {
      return _construct(Date, _toConsumableArray(texto.split('-').map(function (item, indice) {
        return item - indice % 2;
      })));
    }
  }]);

  return DateHelper;
}();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Financa", function() { return Financa; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Financa = /*#__PURE__*/function () {
  function Financa(item, data, quantidade, valor) {
    _classCallCheck(this, Financa);

    this._item = item;
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this);
  }

  _createClass(Financa, [{
    key: "item",
    get: function get() {
      return this._item;
    }
  }, {
    key: "data",
    get: function get() {
      return new Date(this._data.getTime());
    }
  }, {
    key: "quantidade",
    get: function get() {
      return this._quantidade;
    }
  }, {
    key: "valor",
    get: function get() {
      return this._valor;
    }
  }, {
    key: "total",
    get: function get() {
      return this._quantidade * this._valor;
    }
  }]);

  return Financa;
}();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaFinancas", function() { return ListaFinancas; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ListaFinancas = /*#__PURE__*/function () {
  function ListaFinancas() {
    _classCallCheck(this, ListaFinancas);

    this._financas = [];
  }

  _createClass(ListaFinancas, [{
    key: "adiciona",
    value: function adiciona(financa) {
      this._financas.push(financa);
    }
  }, {
    key: "esvazia",
    value: function esvazia() {
      this._financas = [];
    }
  }, {
    key: "ordena",
    value: function ordena(criterio) {
      this._financas.sort(criterio);
    }
  }, {
    key: "reverse",
    value: function reverse() {
      this._financas.reverse();
    }
  }, {
    key: "filtra",
    value: function filtra(filtraData) {
      return this._financas.filter(function (financa) {
        return financa._data.setHours(0, 0, 0, 0).valueOf() === filtraData.valueOf();
      });
    }
  }, {
    key: "financas",
    get: function get() {
      return [].concat(this._financas);
    }
  }]);

  return ListaFinancas;
}();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notificacao", function() { return Notificacao; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Notificacao = /*#__PURE__*/function () {
  function Notificacao() {
    var texto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var tipo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, Notificacao);

    this._texto = texto;
    this._tipo = tipo;
  }

  _createClass(Notificacao, [{
    key: "texto",
    get: function get() {
      return this._texto;
    },
    set: function set(texto) {
      this._texto = texto;
    }
  }, {
    key: "tipo",
    get: function get() {
      return this._tipo;
    },
    set: function set(tipo) {
      this._tipo = tipo;
    }
  }]);

  return Notificacao;
}();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacaoView", function() { return NotificacaoView; });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var NotificacaoView = /*#__PURE__*/function (_View) {
  _inherits(NotificacaoView, _View);

  var _super = _createSuper(NotificacaoView);

  function NotificacaoView(elemento) {
    _classCallCheck(this, NotificacaoView);

    return _super.call(this, elemento);
  }

  _createClass(NotificacaoView, [{
    key: "template",
    value: function template(model, tipo) {
      return model.texto ? "<p class=\"alert alert-".concat(tipo, " my-3\">").concat(model.texto, "</p>") : "<p></p>";
    }
  }]);

  return NotificacaoView;
}(_View__WEBPACK_IMPORTED_MODULE_0__["View"]);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View = /*#__PURE__*/function () {
  function View(elemento) {
    _classCallCheck(this, View);

    this._elemento = elemento;
  }

  _createClass(View, [{
    key: "template",
    value: function template() {
      throw new Error('O método template deve ser implementado');
    }
  }, {
    key: "update",
    value: function update(modelo) {
      var tipo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'primary';
      this._elemento.innerHTML = this.template(modelo, tipo);
    }
  }]);

  return View;
}();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancasView", function() { return FinancasView; });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _helpers_DateHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var FinancasView = /*#__PURE__*/function (_View) {
  _inherits(FinancasView, _View);

  var _super = _createSuper(FinancasView);

  function FinancasView(elemento, controller) {
    var _this;

    _classCallCheck(this, FinancasView);

    _this = _super.call(this, elemento);
    _this._controller = controller;
    return _this;
  }

  _createClass(FinancasView, [{
    key: "template",
    value: function template(model) {
      return "<table class=\"table\">\n        <thead>\n          <tr>\n            <th data-col=\"item\" scope=\"col\">Item ".concat(this._controller.coluna === 'item' ? this._controller.ordem === 'item' ? '🔻' : '🔺' : '', "</th>\n            <th data-col=\"data\" scope=\"col\">Data ").concat(this._controller.coluna === 'data' ? this._controller.ordem === 'data' ? '🔻' : '🔺' : '', "</th>\n    <th data-col=\"quantidade\" scope=\"col\"># ").concat(this._controller.coluna === 'quantidade' ? this._controller.ordem === 'quantidade' ? '🔻' : '🔺' : '', "</th>\n    <th data-col=\"valor\" scope=\"col\">$ ").concat(this._controller.coluna === 'valor' ? this._controller.ordem === 'valor' ? '🔻' : '🔺' : '', "</th>\n    <th scope=\"col\">=</th>\n          </tr>\n        </thead>\n  <tbody>\n    ").concat(model.financas.map(function (financa) {
        return "<tr>\n                    <td>".concat(financa.item, "</td>\n                    <td>").concat(_helpers_DateHelper__WEBPACK_IMPORTED_MODULE_1__["DateHelper"].dataParaTexto(financa.data), "</td>\n                    <td>").concat(financa.quantidade, "</td>\n                    <td>").concat(financa.valor, "</td>\n                    <td>").concat(financa.total, "</td>\n                  </tr>");
      }).join(""), "\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan=\"4\"></td>\n      <td>").concat(model.financas.reduce(function (acc, financa) {
        return acc + financa.total;
      }, 0.0), "</td>\n    </tr>\n  </tfoot>\n      </table> ");
    }
  }, {
    key: "update",
    value: function update(modelo) {
      var _this2 = this;

      _get(_getPrototypeOf(FinancasView.prototype), "update", this).call(this, modelo);

      document.querySelectorAll('[data-col]').forEach(function (col) {
        return col.onclick = function () {
          return _this2._controller.ordena(col.dataset.col);
        };
      });
    }
  }]);

  return FinancasView;
}(_View__WEBPACK_IMPORTED_MODULE_0__["View"]);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancaService", function() { return FinancaService; });
/* harmony import */ var _models_Financa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var FinancaService = /*#__PURE__*/function () {
  function FinancaService() {
    _classCallCheck(this, FinancaService);
  }

  _createClass(FinancaService, [{
    key: "getFinancasSemana",
    value: function getFinancasSemana() {
      return new Promise(function (resolve, reject) {
        fetch('https://evening-badlands-20922.herokuapp.com/financas/anterior').then(function (res) {
          return res.json();
        }).then(function (financas) {
          resolve(financas.map(function (financa) {
            return new _models_Financa__WEBPACK_IMPORTED_MODULE_0__["Financa"](financa.item, new Date(financa.data), financa.quantidade, financa.valor);
          }));
        })["catch"](function (err) {
          console.error(err);
          reject("deu ruim");
        });
      });
    }
  }]);

  return FinancaService;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=_boot.bundle.js.map