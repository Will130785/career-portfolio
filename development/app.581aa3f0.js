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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../src/scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/app.js":[function(require,module,exports) {
"use strict";

require("./scss/main.scss");

//Grab scroll position
var prevScrollPos = window.pageYOffset; // Function to controll navbar during scroll

window.onscroll = function () {
  //Grab current scroll position
  var currentScrollPos = window.pageYOffset; //Check position of scroll and displah navbar accordingly

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav").style.opacity = "1";
  } else {
    document.getElementById("nav").style.top = "-50px";
    document.getElementById("nav").style.opacity = "0";
  }

  prevScrollPos = currentScrollPos;
}; //Function to repeat landing section animation


setInterval(function () {
  document.querySelector(".landing__title").classList.toggle("title-animation");
  document.querySelector(".landing__sub").classList.toggle("sub-animation");
}, 4000); //Event listeners for intro, contact, skills, game and instructions buttons

var introducingLink = document.querySelector(".about__content--intro");
var contactLink = document.querySelector(".about__content--contact");
var skillsLink = document.querySelector(".about__content--skills");
var gameLink = document.querySelector(".education__game--game");
var instructionLink = document.querySelector(".education__game--inst");
var introducing = document.querySelector(".about__card-intro");
var contact = document.querySelector(".about__card-contact");
var skills = document.querySelector(".about__card-skills");
var game = document.querySelector(".game-container");
var instruction = document.querySelector(".instruction-container");
introducingLink.addEventListener("click", function () {
  introducingLink.classList.add("active");
  contactLink.classList.remove("active");
  skillsLink.classList.remove("active");
  introducing.style.display = "block";
  contact.style.display = "none";
  skills.style.display = "none";
});
contactLink.addEventListener("click", function () {
  introducingLink.classList.remove("active");
  contactLink.classList.add("active");
  skillsLink.classList.remove("active");
  introducing.style.display = "none";
  contact.style.display = "block";
  skills.style.display = "none";
});
skillsLink.addEventListener("click", function () {
  introducingLink.classList.remove("active");
  contactLink.classList.remove("active");
  skillsLink.classList.add("active");
  introducing.style.display = "none";
  contact.style.display = "none";
  skills.style.display = "block";
});
gameLink.addEventListener("click", function () {
  gameLink.classList.add("active");
  instructionLink.classList.remove("active");
  game.style.display = "grid";
  instruction.style.display = "none";
});
instructionLink.addEventListener("click", function () {
  gameLink.classList.remove("active");
  instructionLink.classList.add("active");
  game.style.display = "none";
  instruction.style.display = "flex";
}); //Event listener for hamburger

var hamburger = document.querySelectorAll(".hamburger");
var mobileNav = document.querySelector(".mobile-nav");
var mobileNavContent = document.querySelector(".mobile-nav__list");
var navbarActive = 0;
hamburger.forEach(function (burger) {
  burger.addEventListener("click", function (e) {
    if (navbarActive === 0) {
      mobileNav.style.height = "200px";
      mobileNavContent.style.display = "block";
      navbarActive = 1;
    } else if (navbarActive === 1) {
      mobileNav.style.height = "0px";
      mobileNavContent.style.display = "none";
      navbarActive = 0;
    }
  });
}); //Event listeners for portfolio modal

var projects = document.querySelectorAll(".portfolio__card");
var modal = document.querySelector(".modal");
var exitModal = document.querySelectorAll(".modal__content--exit"); //Individual project modal content

var modalOne = document.querySelector(".modal__content--1");
var modalTwo = document.querySelector(".modal__content--2");
var modalThree = document.querySelector(".modal__content--3");
var modalFour = document.querySelector(".modal__content--4");
var modalFive = document.querySelector(".modal__content--5");
var modalSix = document.querySelector(".modal__content--6");
var modalSeven = document.querySelector(".modal__content--7");
var modalEight = document.querySelector(".modal__content--8");
var modalNine = document.querySelector(".modal__content--9");
projects.forEach(function (project) {
  project.addEventListener("click", function (e) {
    modal.style.display = "block";

    if (project.classList.contains("portfolio__card--1")) {
      modalOne.style.display = "grid";
      modalTwo.style.display = "none";
      modalThree.style.display = "none";
      modalFour.style.display = "none";
      modalFive.style.display = "none";
      modalSix.style.display = "none";
      modalSeven.style.display = "none";
      modalEight.style.display = "none";
      modalNine.style.display = "none";
    } else if (project.classList.contains("portfolio__card--2")) {
      modalOne.style.display = "none";
      modalTwo.style.display = "grid";
      modalThree.style.display = "none";
      modalFour.style.display = "none";
      modalFive.style.display = "none";
      modalSix.style.display = "none";
      modalSeven.style.display = "none";
      modalEight.style.display = "none";
      modalNine.style.display = "none";
    } else if (project.classList.contains("portfolio__card--3")) {
      modalOne.style.display = "none";
      modalTwo.style.display = "none";
      modalThree.style.display = "grid";
      modalFour.style.display = "none";
      modalFive.style.display = "none";
      modalSix.style.display = "none";
      modalSeven.style.display = "none";
      modalEight.style.display = "none";
      modalNine.style.display = "none";
    } else if (project.classList.contains("portfolio__card--4")) {
      modalOne.style.display = "none";
      modalTwo.style.display = "none";
      modalThree.style.display = "none";
      modalFour.style.display = "grid";
      modalFive.style.display = "none";
      modalSix.style.display = "none";
      modalSeven.style.display = "none";
      modalEight.style.display = "none";
      modalNine.style.display = "none";
    } else if (project.classList.contains("portfolio__card--5")) {
      modalOne.style.display = "none";
      modalTwo.style.display = "none";
      modalThree.style.display = "none";
      modalFour.style.display = "none";
      modalFive.style.display = "grid";
      modalSix.style.display = "none";
      modalSeven.style.display = "none";
      modalEight.style.display = "none";
      modalNine.style.display = "none";
    } else if (project.classList.contains("portfolio__card--6")) {
      modalOne.style.display = "none";
      modalTwo.style.display = "none";
      modalThree.style.display = "none";
      modalFour.style.display = "none";
      modalFive.style.display = "none";
      modalSix.style.display = "grid";
      modalSeven.style.display = "none";
      modalEight.style.display = "none";
      modalNine.style.display = "none";
    } else if (project.classList.contains("portfolio__card--7")) {
      modalOne.style.display = "none";
      modalTwo.style.display = "none";
      modalThree.style.display = "none";
      modalFour.style.display = "none";
      modalFive.style.display = "none";
      modalSix.style.display = "none";
      modalSeven.style.display = "grid";
      modalEight.style.display = "none";
      modalNine.style.display = "none";
    } else if (project.classList.contains("portfolio__card--8")) {
      modalOne.style.display = "none";
      modalTwo.style.display = "none";
      modalThree.style.display = "none";
      modalFour.style.display = "none";
      modalFive.style.display = "none";
      modalSix.style.display = "none";
      modalSeven.style.display = "none";
      modalEight.style.display = "grid";
      modalNine.style.display = "none";
    } else if (project.classList.contains("portfolio__card--9")) {
      modalOne.style.display = "none";
      modalTwo.style.display = "none";
      modalThree.style.display = "none";
      modalFour.style.display = "none";
      modalFive.style.display = "none";
      modalSix.style.display = "none";
      modalSeven.style.display = "none";
      modalEight.style.display = "none";
      modalNine.style.display = "grid";
    }
  });
});
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
},{"./scss/main.scss":"../src/scss/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52777" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/app.js"], null)
//# sourceMappingURL=/app.581aa3f0.js.map