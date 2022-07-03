
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/raphael/utils/R.utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXHJhcGhhZWxcXHV0aWxzXFxSLnV0aWxzLmpzIl0sIm5hbWVzIjpbIm1peGluIiwiZHN0Iiwic3JjIiwiYWRkb24iLCJrZXkiLCJzdWJLZXkiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmaW5lQ2xhc3MiLCJkZWZpbmVzIiwicHJvcGVydGllcyIsInN0YXRpY3MiLCJpIiwiaWkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJkIiwicGF0aDJjdXJ2ZSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsS0FBVCxDQUFnQkMsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCQyxLQUExQixFQUFpQztBQUM3QixPQUFLLElBQUlDLEdBQVQsSUFBZ0JGLEdBQWhCLEVBQXFCO0FBQ2pCLFFBQUksQ0FBQ0MsS0FBRCxJQUFXQSxLQUFLLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxHQUFELENBQTVCLEVBQW9DO0FBQ2hDLFVBQUksT0FBT0YsR0FBRyxDQUFDRSxHQUFELENBQVYsS0FBb0IsUUFBeEIsRUFBa0M7QUFDOUJILFFBQUFBLEdBQUcsQ0FBQ0csR0FBRCxDQUFILEdBQVcsRUFBWDs7QUFDQSxhQUFLLElBQUlDLE1BQVQsSUFBbUJILEdBQUcsQ0FBQ0UsR0FBRCxDQUF0QixFQUE2QjtBQUN6QkgsVUFBQUEsR0FBRyxDQUFDRyxHQUFELENBQUgsQ0FBU0MsTUFBVCxJQUFtQkgsR0FBRyxDQUFDRSxHQUFELENBQUgsQ0FBU0MsTUFBVCxDQUFuQjtBQUNIO0FBQ0osT0FMRCxNQU1LO0FBQ0RKLFFBQUFBLEdBQUcsQ0FBQ0csR0FBRCxDQUFILEdBQVdGLEdBQUcsQ0FBQ0UsR0FBRCxDQUFkO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBRURFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiQyxFQUFBQSxXQUFXLEVBQUUsdUJBQVk7QUFDckIsUUFBSUMsT0FBTyxHQUFHO0FBQ1ZDLE1BQUFBLFVBQVUsRUFBRSxFQURGO0FBRVZDLE1BQUFBLE9BQU8sRUFBRTtBQUZDLEtBQWQ7O0FBS0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBUixFQUFXQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBL0IsRUFBdUNILENBQUMsR0FBR0MsRUFBM0MsRUFBK0NELENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsVUFBSUksQ0FBQyxHQUFHRixTQUFTLENBQUNGLENBQUQsQ0FBakI7QUFFQVosTUFBQUEsS0FBSyxDQUFDUyxPQUFPLENBQUNDLFVBQVQsRUFBcUJNLENBQUMsQ0FBQ04sVUFBdkIsQ0FBTDtBQUNBVixNQUFBQSxLQUFLLENBQUNTLE9BQU8sQ0FBQ0UsT0FBVCxFQUFrQkssQ0FBQyxDQUFDTCxPQUFwQixDQUFMO0FBQ0FYLE1BQUFBLEtBQUssQ0FBQ1MsT0FBRCxFQUFVTyxDQUFWLEVBQWEsSUFBYixDQUFMO0FBQ0g7O0FBRUQsV0FBT1AsT0FBUDtBQUNILEdBaEJZO0FBaUJiUSxFQUFBQSxVQUFVLEVBQUVDLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJEO0FBakJsQixDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWl4aW4gKGRzdCwgc3JjLCBhZGRvbikge1xuICAgIGZvciAobGV0IGtleSBpbiBzcmMpIHtcbiAgICAgICAgaWYgKCFhZGRvbiB8fCAoYWRkb24gJiYgIWRzdFtrZXldKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcmNba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHN1YktleSBpbiBzcmNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBkc3Rba2V5XVtzdWJLZXldID0gc3JjW2tleV1bc3ViS2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZpbmVDbGFzczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVmaW5lcyA9IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHt9LFxuICAgICAgICAgICAgc3RhdGljczoge31cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgdmFyIGQgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgICAgIG1peGluKGRlZmluZXMucHJvcGVydGllcywgZC5wcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIG1peGluKGRlZmluZXMuc3RhdGljcywgZC5zdGF0aWNzKTtcbiAgICAgICAgICAgIG1peGluKGRlZmluZXMsIGQsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmluZXM7XG4gICAgfSxcbiAgICBwYXRoMmN1cnZlOiByZXF1aXJlKCdSLmN1cnZlJykucGF0aDJjdXJ2ZSxcbn07XG4iXX0=