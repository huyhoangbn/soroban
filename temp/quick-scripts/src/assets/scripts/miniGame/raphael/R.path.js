"use strict";
cc._RF.push(module, '7e039m0wZhNaIqogYMr6uCY', 'R.path');
// scripts/miniGame/raphael/R.path.js

'use strict';

var utils = require('./utils/R.utils');

var trasform = require('./component/R.transform');

var style = require('./component/R.style'); // optional


var simplify = require('./component/optional/R.simplify');

var drawer = {
  M: 'moveTo',
  L: 'lineTo',
  C: 'bezierCurveTo',
  Z: 'close'
};
var sqrt = Math.sqrt;
var max = Math.max;
var abs = Math.abs;
var selectedColor = cc.color(0, 157, 236);
var PathDefine = {
  "extends": cc.Component,
  properties: {
    _dirty: {
      "default": true,
      serializable: false,
      notify: function notify() {
        if (this.parent && this._dirty) {
          this.parent._dirty = true;

          if (this._commands) {
            this._commands.points = undefined;
          }
        }
      }
    }
  },
  init: function init(parent) {
    if (parent) {
      this.parent = parent;
      this.ctx = parent.ctx;
    }

    this._commands = [];
    this._dirty = true;
    this.showHandles = false;
    this.showBoundingBox = false;
  },
  onLoad: function onLoad() {
    this.init();

    if (!this.ctx) {
      var _gNode = new cc.Node();

      this.ctx = _gNode.addComponent(cc.Graphics);
      this.node.addChild(_gNode);

      this._applyStyle();
    }
  },
  ellipse: function ellipse(cx, cy, rx, ry) {
    if (!ry) {
      ry = rx;
    }

    var cmds = this._commands;
    cmds.push(['M', cx, cy]);
    cmds.push(['m', 0, -ry]);
    cmds.push(['a', rx, ry, 0, 1, 1, 0, 2 * ry]);
    cmds.push(['a', rx, ry, 0, 1, 1, 0, -2 * ry]); // cmds.push(['z']);
  },
  circle: function circle(cx, cy, r) {
    this.ellipse(cx, cy, r);
  },
  rect: function rect(x, y, w, h, r) {
    var cmds = this._commands;

    if (r) {
      cmds.push(['M', x + r, y]);
      cmds.push(['l', w - r * 2, 0]);
      cmds.push(['a', r, r, 0, 0, 1, r, r]);
      cmds.push(['l', 0, h - r * 2]);
      cmds.push(['a', r, r, 0, 0, 1, -r, r]);
      cmds.push(['l', r * 2 - w, 0]);
      cmds.push(['a', r, r, 0, 0, 1, -r, -r]);
      cmds.push(['l', 0, r * 2 - h]);
      cmds.push(['a', r, r, 0, 0, 1, r, -r]);
    } else {
      cmds.push(['M', x, y]);
      cmds.push(['l', w, 0]);
      cmds.push(['l', 0, h]);
      cmds.push(['l', -w, 0]);
    }

    cmds.push(['z']);
  },
  close: function close() {
    this._commands.push(['Z']);
  },
  points: function points(_points, closed) {
    if (_points.length <= 1) {
      return;
    }

    this.clear();
    var lastPoint = _points[0];
    this.M(lastPoint.x, lastPoint.y);

    for (var i = 1, ii = _points.length; i < ii; i++) {
      var point = _points[i];
      this.C(lastPoint.x, lastPoint.y, point.x, point.y, point.x, point.y);
      lastPoint = point;
    }

    if (closed) {
      this.C(lastPoint.x, lastPoint.y, _points[0].x, _points[0].y, _points[0].x, _points[0].y);
    }

    this.makePath();
  },
  makePath: function makePath() {
    this._commands = utils.path2curve(this._commands);
    this._dirty = true;
  },
  path: function path(_path) {
    this._commands = utils.path2curve(_path);
    this._dirty = true;
  },
  clear: function clear() {
    this._commands.length = 0;
  },
  getPathString: function getPathString() {
    var commands = this._commands;
    var string = [];

    for (var i = 0, ii = commands.length; i < ii; i++) {
      string[i] = commands[i].join(' ');
    }

    string = string.join(' ');
    return string;
  },
  getTotalLength: function getTotalLength() {
    if (this._commands.totalLength === undefined) {
      this._analysis();
    }

    return this._commands.totalLength;
  },
  getBbox: function getBbox() {
    if (this._commands.bbox === undefined) {
      this._analysis();
    }

    return this._commands.bbox;
  },
  getWorldBbox: function getWorldBbox() {
    if (this._commands.worldBbox === undefined || this._transformDirty) {
      this._analysis();
    }

    return this._commands.worldBbox;
  },
  center: function center(x, y) {
    x = x || 0;
    y = y || 0;
    var bbox = this.getBbox();
    this.position = this.position.add(cc.v2(-bbox.width / 2 - bbox.x + x, -bbox.height / 2 - bbox.y + y));
  },
  _curves: function _curves() {
    var cmds = this._commands;
    if (cmds.curves) return cmds.curves;
    var curves = [];
    var subCurves;
    var x, y;

    for (var i = 0, ii = cmds.length; i < ii; i++) {
      var cmd = cmds[i];
      var c = cmd[0];

      if (c === 'M') {
        subCurves = [];
        curves.push(subCurves);
        x = cmd[1];
        y = cmd[2];
      } else if (c === 'C' && x !== undefined && y !== undefined) {
        subCurves.push([x, y, cmd[1], cmd[2], cmd[3], cmd[4], cmd[5], cmd[6]]);
        x = cmd[5];
        y = cmd[6];
      }
    }

    cmds.curves = curves;
    return curves;
  },
  _analysis: function _analysis() {},
  //////////////////////////////////////
  _drawCommands: function _drawCommands() {
    var commands = this._commands;
    var ctx = this.ctx;
    var t = this.getWorldTransform();

    for (var i = 0, ii = commands.length; i < ii; i++) {
      var cmd = commands[i];
      var c = cmd[0];
      cmd = this._transformCommand(cmd, t);
      var func = ctx[drawer[c]];
      if (func) func.apply(ctx, cmd);
    }
  },
  _drawHandles: function _drawHandles() {
    var ctx = this.ctx;
    var commands = this._commands;
    var prev;
    var size = 5;
    var half = size / 2;
    var originLineWidth = ctx.lineWidth;
    var originStrokeColor = ctx.strokeColor;
    var originFillColor = ctx.fillColor;
    ctx.lineWidth = 1;
    ctx.strokeColor = selectedColor;
    ctx.fillColor = selectedColor;
    var t = this.getWorldTransform();

    function drawHandle(x1, y1, x2, y2) {
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.circle(x2, y2, half);
      ctx.fill();
    }

    for (var i = 0, ii = commands.length; i < ii; i++) {
      var cmd = commands[i];
      var c = cmd[0];
      cmd = this._transformCommand(cmd, t);

      if (c === 'M') {
        prev = cmd;
      } else if (c === 'C') {
        drawHandle(prev[0], prev[1], cmd[0], cmd[1]);
        drawHandle(cmd[4], cmd[5], cmd[2], cmd[3]);
        prev = [cmd[4], cmd[5]];
      }

      if (prev) ctx.fillRect(prev[0] - half, prev[1] - half, size, size);
    }

    ctx.lineWidth = originLineWidth;
    ctx.strokeColor = originStrokeColor;
    ctx.fillColor = originFillColor;
  },
  _drawDashPath: function _drawDashPath() {
    var cmds = this._commands;
    var ctx = this.ctx;
    var dashArray = this.dashArray;
    var dashOffset = this.dashOffset;
    var points;

    if (!cmds.points) {
      this._analysis();
    }

    points = cmds.points;
    var t = this.getWorldTransform();

    for (var i = 0, ii = points.length; i < ii; i++) {
      var subPoints = points[i];
      R.utils.drawDashPoints(subPoints, ctx, dashArray, dashOffset, t);
    }
  },
  //////////////////////////////////////
  update: function update(dt) {
    if (this._updateAnimate) {
      this._updateAnimate(dt);
    }

    if (this._commands.length === 0 || !this._dirty || this.parent && !this.parent._dirty) {
      return;
    }

    this._applyStyle();

    if (!this.parent) {
      this.ctx.clear();
    }

    if (this.dashArray.length > 0) {
      if (this.getStyledColor('fillColor')) {
        this._drawCommands();

        this.ctx.fill();
      }

      if (this.getStyledColor('strokeColor')) {
        this._drawDashPath();

        this.ctx.stroke();
      }
    } else {
      this._drawCommands();

      if (this.getStyledColor('fillColor')) this.ctx.fill();
      if (this.getStyledColor('strokeColor')) this.ctx.stroke();
    }

    if (this.showBoundingBox) {
      var bbox = this.getWorldBbox();
      this.ctx.rect(bbox.x, bbox.y, bbox.width, bbox.height);
      this.ctx.stroke();
    }

    if (this.showHandles) this._drawHandles();
    this._dirty = false;
  }
};
var Path = cc.Class(utils.defineClass(PathDefine, trasform, style, simplify));
['M', 'm', 'L', 'l', 'H', 'h', 'V', 'v', 'C', 'c', 'S', 's', 'Q', 'q', 'T', 't', 'A', 'a', 'Z', 'z'].forEach(function (cmd) {
  Path.prototype[cmd] = function () {
    var cmds = [cmd];

    for (var i = 0, l = arguments.length; i < l; i++) {
      cmds[i + 1] = arguments[i];
    }

    this._commands.push(cmds);
  };
});

cc._RF.pop();