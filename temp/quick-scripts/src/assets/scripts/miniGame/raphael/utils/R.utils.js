"use strict";
cc._RF.push(module, '588929pZCZIpIto22fDnVAb', 'R.utils');
// scripts/miniGame/raphael/utils/R.utils.js

"use strict";

function mixin(dst, src, addon) {
  for (var key in src) {
    if (!addon || addon && !dst[key]) {
      if (typeof src[key] === 'object') {
        dst[key] = {};

        for (var subKey in src[key]) {
          dst[key][subKey] = src[key][subKey];
        }
      } else {
        dst[key] = src[key];
      }
    }
  }
}

module.exports = {
  defineClass: function defineClass() {
    var defines = {
      properties: {},
      statics: {}
    };

    for (var i = 0, ii = arguments.length; i < ii; i++) {
      var d = arguments[i];
      mixin(defines.properties, d.properties);
      mixin(defines.statics, d.statics);
      mixin(defines, d, true);
    }

    return defines;
  },
  path2curve: require('R.curve').path2curve
};

cc._RF.pop();