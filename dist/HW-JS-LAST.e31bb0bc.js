// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.element = null;
  }

  _createClass(App, [{
    key: "create",
    value: function create() {
      var newDiv = document.createElement('div');
      newDiv.classList.add('app');
      this.element = newDiv;
      fetch("https://fakestoreapi.com/products/").then(function (response) {
        return response.json();
      }).then(function (products) {
        localStorage.setItem('products', JSON.stringify(products));
      });
    }
  }, {
    key: "render",
    value: function render() {
      document.body.appendChild(this.element);
    }
  }, {
    key: "init",
    value: function init() {
      document.head.innerHTML += '<meta charset="UTF-8">';
      document.head.innerHTML += '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
      document.head.innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
      document.head.innerHTML += '<meta name="description" content="Домашняя работа">';
      document.head.innerHTML += '<meta name="author" content="Андрей Клименченко FE108">';
      document.head.innerHTML += '<title>Домашняя работа</title>';
      this.create();
      this.render();
    }
  }]);

  return App;
}();

var _default = new App().init();

exports.default = _default;
},{}],"components/cookieHelper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = getCookie;
exports.setCookie = setCookie;
exports.deleteCookie = deleteCookie;

function getCookie(name) {
  var result = name.replace(/([.$?*|{}()[]\\\/\+^])/g, '\\$1');
  var matches = document.cookie.match(new RegExp("(?:^|; )".concat(result, "=([^;]*)")));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value) {
  var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(JSON.stringify(value));
  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  var isCookie = getCookie(name);

  if (isCookie) {
    document.cookie = "".concat(name, "= ; expires = Thu, 01 Jan 1970 00:00:00 GMT");
  }
}
},{}],"components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.header = void 0;

var _cookieHelper = require("./cookieHelper.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);

    this.element = null;
    this.products = [];
  }

  _createClass(Header, [{
    key: "create",
    value: function create() {
      var header = document.createElement('header');
      header.classList.add('header');
      this.element = header;
    }
  }, {
    key: "createBasketPage",
    value: function createBasketPage() {
      var _this = this;

      var main = document.querySelector('.main');
      var products = JSON.parse((0, _cookieHelper.getCookie)('products'));
      main.innerHTML = null;
      window.location.hash = 'cart';
      var calculatedPrice = 0;
      var allProducts = JSON.parse(products);
      this.products = allProducts;
      console.log(allProducts);
      this.products.forEach(function (element) {
        var container = document.createElement('div');
        container.classList.add('container');
        container.setAttribute('id', element.id);
        var title = document.createElement('div');
        title.classList.add('title');
        var price = document.createElement('div');
        price.classList.add('price');
        var infoContainer = document.createElement('div');
        infoContainer.classList.add('infoContainer');
        var image = document.createElement('img');
        image.classList.add('img');
        image.setAttribute('alt', element.title);
        image.setAttribute('src', element.image);
        var description = document.createElement('p');
        description.classList.add('description');
        var category = document.createElement('span');
        category.classList.add('category');
        main.appendChild(container);
        container.appendChild(image);
        container.appendChild(infoContainer);
        infoContainer.appendChild(title);
        infoContainer.appendChild(price);
        infoContainer.appendChild(description);
        infoContainer.appendChild(category);
        description.innerHTML = element.description;
        title.innerHTML = element.title;
        price.innerHTML = "Price: ".concat(element.price, "$");
        category.innerHTML = "Category: ".concat(element.category);
        calculatedPrice = calculatedPrice + Number(element.price);
        var delBtn = document.createElement('button');
        delBtn.classList.add('delBtn');
        delBtn.innerHTML = 'remove';
        infoContainer.appendChild(delBtn);
        delBtn.addEventListener('click', function () {
          _this.products = _this.products.filter(function (item) {
            return item.id !== element.id;
          });
          (0, _cookieHelper.setCookie)('products', _this.products);
          var removeElement = document.getElementById("".concat(element.id));
          main.removeChild(removeElement);
          calculatedPrice = calculatedPrice - Number(element.price);
          totalPrice.innerHTML = "price: ".concat(calculatedPrice.toFixed(2));
          var counts = document.querySelector('.badge');
          counts.innerHTML = _this.products.length;

          if (_this.products.length === 0) {
            var _totalPrice = document.querySelector('.totalPrice');

            _totalPrice.innerHTML = 'price: 0';
          }
        });
      });
      var totalPrice = document.createElement('div');
      totalPrice.classList.add('totalPrice');
      main.appendChild(totalPrice);
      totalPrice.innerHTML = "price: ".concat(calculatedPrice.toFixed(2));
    }
  }, {
    key: "init",
    value: function init() {
      this.create();
      document.body.appendChild(this.element);
      var svgContainer = document.createElement('div');
      svgContainer.classList.add('svgContain');
      this.element.appendChild(svgContainer);
      svgContainer.innerHTML = "<svg class=\"svg\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n         viewBox=\"0 0 510 510\" style=\"enable-background:new 0 0 510 510;\" xml:space=\"preserve\">\n   <g>\n       <g id=\"shopping-cart\">\n           <path d=\"M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306\n               c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7\n               c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408\n               c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z\"/>\n       </g></g></svg>";
      var badge = document.createElement('div');
      badge.classList.add('badge');
      svgContainer.appendChild(badge);
      svgContainer.addEventListener('click', this.createBasketPage);
      badge.innerHTML = this.products.length;
    }
  }]);

  return Header;
}();

var header = new Header().init();
exports.header = header;
},{"./cookieHelper.js":"components/cookieHelper.js"}],"components/Main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

var _cookieHelper = require("./cookieHelper.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    this.element = null;
    this.products = [];
  }

  _createClass(Main, [{
    key: "create",
    value: function create() {
      var main = document.createElement('div');
      main.classList.add('main');
      this.element = main;
    }
  }, {
    key: "addToCart",
    value: function addToCart(e, product) {
      var isExist = this.products.find(function (item) {
        return item.id === product.id;
      });

      if (isExist) {
        alert('уже добавлен');
        return;
      }

      this.products.push(product);
      (0, _cookieHelper.setCookie)('products', JSON.stringify(this.products));
      var svgCart = document.querySelector('.svgContain');
      var badge = document.querySelector('.badge');
      badge.innerHTML = this.products.length;
    }
  }, {
    key: "getElementDetails",
    value: function getElementDetails(e, element) {
      var modalBcg = document.createElement('div');
      modalBcg.classList.add('modalBcg');
      document.body.appendChild(modalBcg);
      var modal = document.createElement('div');
      modal.classList.add('modal');
      modalBcg.appendChild(modal);
      var title = document.createElement('div');
      title.classList.add('title');
      var price = document.createElement('div');
      price.classList.add('price');
      var infoContainer = document.createElement('div');
      infoContainer.classList.add('infoContainer');
      var image = document.createElement('img');
      image.classList.add('img');
      image.setAttribute('alt', element.title);
      image.setAttribute('src', element.image);
      var description = document.createElement('p');
      description.classList.add('description');
      var category = document.createElement('span');
      category.classList.add('category');
      modal.appendChild(image);
      modal.appendChild(infoContainer);
      infoContainer.appendChild(title);
      infoContainer.appendChild(price);
      infoContainer.appendChild(description);
      infoContainer.appendChild(category);
      description.innerHTML = element.description;
      title.innerHTML = element.title;
      price.innerHTML = "Price: ".concat(element.price, "$");
      category.innerHTML = "Category: ".concat(element.category);
      var close = document.createElement('button');
      close.classList.add('close');
      close.innerHTML = 'X';
      modal.appendChild(close);
      close.addEventListener('click', function () {
        document.body.removeChild(modalBcg);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.create();
      document.body.appendChild(this.element);
      var savedProducts = localStorage.getItem('products');
      var products = JSON.parse(savedProducts);
      products.forEach(function (element) {
        var container = document.createElement('div');
        container.classList.add('container');
        container.addEventListener('click', function (e) {
          return _this.getElementDetails(e, element);
        });
        var title = document.createElement('div');
        title.classList.add('title');
        var price = document.createElement('div');
        price.classList.add('price');
        var infoContainer = document.createElement('div');
        infoContainer.classList.add('infoContainer');
        var image = document.createElement('img');
        image.classList.add('img');
        image.setAttribute('alt', element.title);
        image.setAttribute('src', element.image);
        var description = document.createElement('p');
        description.classList.add('description');
        var category = document.createElement('span');
        category.classList.add('category');

        _this.element.appendChild(container);

        container.appendChild(image);
        container.appendChild(infoContainer);
        infoContainer.appendChild(title);
        infoContainer.appendChild(price);
        infoContainer.appendChild(description);
        infoContainer.appendChild(category);
        description.innerHTML = element.description;
        title.innerHTML = element.title;
        price.innerHTML = "Price: ".concat(element.price, "$");
        category.innerHTML = "Category: ".concat(element.category);
        var addBtn = document.createElement('button');
        addBtn.classList.add('addBtn');
        addBtn.innerHTML = 'add';
        infoContainer.appendChild(addBtn);
        addBtn.addEventListener('click', function (e) {
          return _this.addToCart(e, element);
        });
      });
    }
  }]);

  return Main;
}();

var main = new Main().init();
exports.main = main;
},{"./cookieHelper.js":"components/cookieHelper.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _App = _interopRequireDefault(require("./components/App.js"));

var _Header = require("./components/Header.js");

var _Main = require("./components/Main.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./components/App.js":"components/App.js","./components/Header.js":"components/Header.js","./components/Main.js":"components/Main.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55025" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/HW-JS-LAST.e31bb0bc.js.map