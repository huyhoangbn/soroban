
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/raphael/component/R.style.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09b02JpT3VMDq9inGP6arE+', 'R.style');
// scripts/miniGame/raphael/component/R.style.js

"use strict";

var LineJoin = cc.Graphics.LineJoin;
var LineCap = cc.Graphics.LineCap;
var Style = {
  properties: {
    _lineWidth: undefined,
    _strokeColor: undefined,
    _fillColor: undefined,
    _lineJoin: undefined,
    _lineCap: undefined,
    _miterLimit: undefined,
    _dashOffset: undefined,
    _dashArray: undefined,
    lineWidth: {
      get: function get() {
        return this._lineWidth || 1;
      },
      set: function set(value) {
        this._lineWidth = value;
        this._dirty = true;
      }
    },
    lineJoin: {
      get: function get() {
        return this._lineJoin || LineJoin.MITER;
      },
      set: function set(value) {
        this._lineJoin = value;
        this._dirty = true;
      },
      type: LineJoin
    },
    lineCap: {
      get: function get() {
        return this._lineCap || LineCap.BUTT;
      },
      set: function set(value) {
        this._lineCap = value;
        this._dirty = true;
      },
      type: LineCap
    },
    strokeColor: {
      get: function get() {
        return this._strokeColor || cc.Color.BLACK;
      },
      set: function set(value) {
        this._strokeColor = value;
        this._dirty = true;
      }
    },
    fillColor: {
      get: function get() {
        return this._fillColor || cc.Color.WHITE;
      },
      set: function set(value) {
        this._fillColor = value;
        this._dirty = true;
      }
    },
    miterLimit: {
      get: function get() {
        return this._miterLimit || 10;
      },
      set: function set(value) {
        this._miterLimit = value;
        this._dirty = true;
      }
    },
    dashOffset: {
      get: function get() {
        return this._dashOffset || 0;
      },
      set: function set(value) {
        if (this._dashOffset === value) {
          return;
        }

        this._dashOffset = value;
        this._dirty = true;
      }
    },
    dashArray: {
      get: function get() {
        return this._dashArray || [];
      },
      set: function set(value) {
        if (!Array.isArray(value)) {
          return;
        }

        this._dashArray = value;
        this._dirty = true;
      }
    }
  },
  getStyled: function getStyled(type) {
    var value = this['_' + type];

    if (value === 'inherit' || value === undefined) {
      if (this.parent) value = this.parent.getStyled(type);else value = this[type];
    }

    return value;
  },
  getStyledColor: function getStyledColor(type) {
    var value = this.getStyled(type);

    if (value === 'none' || !value) {
      value = null;
    } else if (typeof value === 'string') {
      value = new cc.Color().fromHEX(value);
    }

    return value;
  },
  _applyStyle: function _applyStyle() {
    var ctx = this.ctx;
    ctx.lineWidth = this.getStyled('lineWidth');
    ctx.lineJoin = this.getStyled('lineJoin');
    ctx.lineCap = this.getStyled('lineCap');
    var strokeColor = this.getStyledColor('strokeColor');
    var fillColor = this.getStyledColor('fillColor');
    if (strokeColor) ctx.strokeColor = strokeColor;
    if (fillColor) ctx.fillColor = fillColor;
  }
};
module.exports = Style;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXHJhcGhhZWxcXGNvbXBvbmVudFxcUi5zdHlsZS5qcyJdLCJuYW1lcyI6WyJMaW5lSm9pbiIsImNjIiwiR3JhcGhpY3MiLCJMaW5lQ2FwIiwiU3R5bGUiLCJwcm9wZXJ0aWVzIiwiX2xpbmVXaWR0aCIsInVuZGVmaW5lZCIsIl9zdHJva2VDb2xvciIsIl9maWxsQ29sb3IiLCJfbGluZUpvaW4iLCJfbGluZUNhcCIsIl9taXRlckxpbWl0IiwiX2Rhc2hPZmZzZXQiLCJfZGFzaEFycmF5IiwibGluZVdpZHRoIiwiZ2V0Iiwic2V0IiwidmFsdWUiLCJfZGlydHkiLCJsaW5lSm9pbiIsIk1JVEVSIiwidHlwZSIsImxpbmVDYXAiLCJCVVRUIiwic3Ryb2tlQ29sb3IiLCJDb2xvciIsIkJMQUNLIiwiZmlsbENvbG9yIiwiV0hJVEUiLCJtaXRlckxpbWl0IiwiZGFzaE9mZnNldCIsImRhc2hBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsImdldFN0eWxlZCIsInBhcmVudCIsImdldFN0eWxlZENvbG9yIiwiZnJvbUhFWCIsIl9hcHBseVN0eWxlIiwiY3R4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZRixRQUEzQjtBQUNBLElBQUlHLE9BQU8sR0FBR0YsRUFBRSxDQUFDQyxRQUFILENBQVlDLE9BQTFCO0FBRUEsSUFBSUMsS0FBSyxHQUFHO0FBQ1JDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUVDLFNBREo7QUFFUkMsSUFBQUEsWUFBWSxFQUFFRCxTQUZOO0FBR1JFLElBQUFBLFVBQVUsRUFBRUYsU0FISjtBQUlSRyxJQUFBQSxTQUFTLEVBQUVILFNBSkg7QUFLUkksSUFBQUEsUUFBUSxFQUFFSixTQUxGO0FBTVJLLElBQUFBLFdBQVcsRUFBRUwsU0FOTDtBQVFSTSxJQUFBQSxX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Q0FBQ3BCLFFBQUosR0FBZSxLQUFLZSxTQUFMLENBQWUsVUFBZixDQUFmO0FBQ0FLLElBQUFBLEdBQUcsQ0FBQ2pCLE9BQUosR0FBYyxLQUFLWSxTQUFMLENBQWUsU0FBZixDQUFkO0FBRUEsUUFBSVYsV0FBVyxHQUFHLEtBQUtZLGNBQUwsQ0FBb0IsYUFBcEIsQ0FBbEI7QUFDQSxRQUFJVCxTQUFTLEdBQUcsS0FBS1MsY0FBTCxDQUFvQixXQUFwQixDQUFoQjtBQUVBLFFBQUlaLFdBQUosRUFDSWUsR0FBRyxDQUFDZixXQUFKLEdBQWtCQSxXQUFsQjtBQUNKLFFBQUlHLFNBQUosRUFDSVksR0FBRyxDQUFDWixTQUFKLEdBQWdCQSxTQUFoQjtBQUNQO0FBeklPLENBQVo7QUE0SUFhLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnRDLEtBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBMaW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luO1xudmFyIExpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwO1xuXG52YXIgU3R5bGUgPSB7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfbGluZVdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgIF9zdHJva2VDb2xvcjogdW5kZWZpbmVkLFxuICAgICAgICBfZmlsbENvbG9yOiB1bmRlZmluZWQsXG4gICAgICAgIF9saW5lSm9pbjogdW5kZWZpbmVkLFxuICAgICAgICBfbGluZUNhcDogdW5kZWZpbmVkLFxuICAgICAgICBfbWl0ZXJMaW1pdDogdW5kZWZpbmVkLFxuXG4gICAgICAgIF9kYXNoT2Zmc2V0OiB1bmRlZmluZWQsXG4gICAgICAgIF9kYXNoQXJyYXk6IHVuZGVmaW5lZCxcblxuICAgICAgICBsaW5lV2lkdGg6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9saW5lV2lkdGggfHwgMTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVXaWR0aCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBsaW5lSm9pbjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVKb2luIHx8IExpbmVKb2luLk1JVEVSO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGluZUpvaW4gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogTGluZUpvaW5cbiAgICAgICAgfSxcblxuICAgICAgICBsaW5lQ2FwOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbGluZUNhcCB8fCBMaW5lQ2FwLkJVVFQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ2FwID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IExpbmVDYXBcbiAgICAgICAgfSxcblxuICAgICAgICBzdHJva2VDb2xvcjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cm9rZUNvbG9yIHx8IGNjLkNvbG9yLkJMQUNLO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3Ryb2tlQ29sb3IgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsbENvbG9yOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZmlsbENvbG9yIHx8IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsbENvbG9yID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1pdGVyTGltaXQ6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9taXRlckxpbWl0IHx8IDEwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWl0ZXJMaW1pdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXNoT2Zmc2V0OiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGFzaE9mZnNldCB8fCAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Rhc2hPZmZzZXQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fZGFzaE9mZnNldCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGFzaEFycmF5OiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGFzaEFycmF5IHx8IFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2Rhc2hBcnJheSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZ2V0U3R5bGVkOiBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzWydfJyArIHR5cGVdO1xuICAgICAgICBcbiAgICAgICAgaWYgKHZhbHVlID09PSAnaW5oZXJpdCcgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB2YWx1ZSA9IHRoaXMucGFyZW50LmdldFN0eWxlZCh0eXBlKTtcbiAgICAgICAgICAgIGVsc2UgdmFsdWUgPSB0aGlzW3R5cGVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG5cbiAgICBnZXRTdHlsZWRDb2xvcjogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRTdHlsZWQodHlwZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnbm9uZScgfHwgIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuXG4gICAgX2FwcGx5U3R5bGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5nZXRTdHlsZWQoJ2xpbmVXaWR0aCcpO1xuICAgICAgICBjdHgubGluZUpvaW4gPSB0aGlzLmdldFN0eWxlZCgnbGluZUpvaW4nKTtcbiAgICAgICAgY3R4LmxpbmVDYXAgPSB0aGlzLmdldFN0eWxlZCgnbGluZUNhcCcpO1xuXG4gICAgICAgIHZhciBzdHJva2VDb2xvciA9IHRoaXMuZ2V0U3R5bGVkQ29sb3IoJ3N0cm9rZUNvbG9yJyk7XG4gICAgICAgIHZhciBmaWxsQ29sb3IgPSB0aGlzLmdldFN0eWxlZENvbG9yKCdmaWxsQ29sb3InKTtcblxuICAgICAgICBpZiAoc3Ryb2tlQ29sb3IpXG4gICAgICAgICAgICBjdHguc3Ryb2tlQ29sb3IgPSBzdHJva2VDb2xvcjtcbiAgICAgICAgaWYgKGZpbGxDb2xvcilcbiAgICAgICAgICAgIGN0eC5maWxsQ29sb3IgPSBmaWxsQ29sb3I7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdHlsZTtcbiJdfQ==