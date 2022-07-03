
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/raphael/component/optional/R.simplify.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '618f7EABMxA0aL8yRPUN3ks', 'R.simplify');
// scripts/miniGame/raphael/component/optional/R.simplify.js

"use strict";

var EPSILON = 1e-12;
var TOLERANCE = 1e-6;
var Fitter = {
  fit: function fit(path, error) {
    this.commands = [];
    this.error = error || 10;
    var points = this.points = [];

    path._commands.forEach(function (cmd) {
      var c = cmd[0];

      if (c === 'M') {
        points.push(cc.v2(cmd[1], cmd[2]));
      } else if (c === 'C') {
        points.push(cc.v2(cmd[5], cmd[6]));
      }
    });

    var length = points.length;

    if (length > 1) {
      this.fitCubic(0, length - 1, // Left Tangent
      points[1].sub(points[0]).normalize(), // Right Tangent
      points[length - 2].sub(points[length - 1]).normalize());
    }

    return this.commands;
  },
  // Fit a Bezier curve to a (sub)set of digitized points
  fitCubic: function fitCubic(first, last, tan1, tan2) {
    //  Use heuristic if region only has two points in it
    if (last - first === 1) {
      var pt1 = this.points[first],
          pt2 = this.points[last],
          dist = pt1.sub(pt2).mag() / 3;
      this.addCurve([pt1, pt1.add(tan1.normalize().mulSelf(dist)), pt2.add(tan2.normalize().mulSelf(dist)), pt2]);
      return;
    } // Parameterize points, and attempt to fit curve


    var uPrime = this.chordLengthParameterize(first, last),
        maxError = Math.max(this.error, this.error * this.error),
        split,
        parametersInOrder = true; // Try 4 iterations

    for (var i = 0; i <= 4; i++) {
      var curve = this.generateBezier(first, last, uPrime, tan1, tan2); //  Find max deviation of points to fitted curve

      var max = this.findMaxError(first, last, curve, uPrime);

      if (max.error < this.error && parametersInOrder) {
        this.addCurve(curve);
        return;
      }

      split = max.index; // If error not too large, try reparameterization and iteration

      if (max.error >= maxError) break;
      parametersInOrder = this.reparameterize(first, last, uPrime, curve);
      maxError = max.error;
    } // Fitting failed -- split at max error point and fit recursively


    var V1 = this.points[split - 1].sub(this.points[split]),
        V2 = this.points[split].sub(this.points[split + 1]),
        tanCenter = V1.add(V2).div(2).normalize();
    this.fitCubic(first, split, tan1, tanCenter);
    this.fitCubic(split, last, tanCenter.mul(-1), tan2);
  },
  addCurve: function addCurve(curve) {
    if (this.commands.length === 0) {
      this.commands.push(['M', curve[0].x, curve[0].y]);
    } else {
      var cmd = this.commands[this.commands.length - 1];
      cmd[5] = curve[0].x;
      cmd[6] = curve[0].y;
    }

    this.commands.push(['C', curve[1].x, curve[1].y, curve[2].x, curve[2].y, curve[3].x, curve[3].y]);
  },
  // Use least-squares method to find Bezier control points for region.
  generateBezier: function generateBezier(first, last, uPrime, tan1, tan2) {
    var epsilon =
    /*#=*/
    EPSILON,
        pt1 = this.points[first],
        pt2 = this.points[last],
        // Create the C and X matrices
    C = [[0, 0], [0, 0]],
        X = [0, 0];

    for (var i = 0, l = last - first + 1; i < l; i++) {
      var u = uPrime[i],
          t = 1 - u,
          b = 3 * u * t,
          b0 = t * t * t,
          b1 = b * t,
          b2 = b * u,
          b3 = u * u * u,
          a1 = tan1.normalize().mulSelf(b1),
          a2 = tan2.normalize().mulSelf(b2),
          tmp = this.points[first + i].sub(pt1.mul(b0 + b1)).sub(pt2.mul(b2 + b3));
      C[0][0] += a1.dot(a1);
      C[0][1] += a1.dot(a2); // C[1][0] += a1.dot(a2);

      C[1][0] = C[0][1];
      C[1][1] += a2.dot(a2);
      X[0] += a1.dot(tmp);
      X[1] += a2.dot(tmp);
    } // Compute the determinants of C and X


    var detC0C1 = C[0][0] * C[1][1] - C[1][0] * C[0][1],
        alpha1,
        alpha2;

    if (Math.abs(detC0C1) > epsilon) {
      // Kramer's rule
      var detC0X = C[0][0] * X[1] - C[1][0] * X[0],
          detXC1 = X[0] * C[1][1] - X[1] * C[0][1]; // Derive alpha values

      alpha1 = detXC1 / detC0C1;
      alpha2 = detC0X / detC0C1;
    } else {
      // Matrix is under-determined, try assuming alpha1 == alpha2
      var c0 = C[0][0] + C[0][1],
          c1 = C[1][0] + C[1][1];

      if (Math.abs(c0) > epsilon) {
        alpha1 = alpha2 = X[0] / c0;
      } else if (Math.abs(c1) > epsilon) {
        alpha1 = alpha2 = X[1] / c1;
      } else {
        // Handle below
        alpha1 = alpha2 = 0;
      }
    } // If alpha negative, use the Wu/Barsky heuristic (see text)
    // (if alpha is 0, you get coincident control points that lead to
    // divide by zero in any subsequent NewtonRaphsonRootFind() call.


    var segLength = pt2.sub(pt1).mag(),
        eps = epsilon * segLength,
        handle1,
        handle2;

    if (alpha1 < eps || alpha2 < eps) {
      // fall back on standard (probably inaccurate) formula,
      // and subdivide further if needed.
      alpha1 = alpha2 = segLength / 3;
    } else {
      // Check if the found control points are in the right order when
      // projected onto the line through pt1 and pt2.
      var line = pt2.sub(pt1); // Control points 1 and 2 are positioned an alpha distance out
      // on the tangent vectors, left and right, respectively

      handle1 = tan1.normalize().mulSelf(alpha1);
      handle2 = tan2.normalize().mulSelf(alpha2);

      if (handle1.dot(line) - handle2.dot(line) > segLength * segLength) {
        // Fall back to the Wu/Barsky heuristic above.
        alpha1 = alpha2 = segLength / 3;
        handle1 = handle2 = null; // Force recalculation
      }
    } // First and last control points of the Bezier curve are
    // positioned exactly at the first and last data points


    return [pt1, pt1.add(handle1 || tan1.normalize().mulSelf(alpha1)), pt2.add(handle2 || tan2.normalize().mulSelf(alpha2)), pt2];
  },
  // Given set of points and their parameterization, try to find
  // a better parameterization.
  reparameterize: function reparameterize(first, last, u, curve) {
    for (var i = first; i <= last; i++) {
      u[i - first] = this.findRoot(curve, this.points[i], u[i - first]);
    } // Detect if the new parameterization has reordered the points.
    // In that case, we would fit the points of the path in the wrong order.


    for (var i = 1, l = u.length; i < l; i++) {
      if (u[i] <= u[i - 1]) return false;
    }

    return true;
  },
  // Use Newton-Raphson iteration to find better root.
  findRoot: function findRoot(curve, point, u) {
    var curve1 = [],
        curve2 = []; // Generate control vertices for Q'

    for (var i = 0; i <= 2; i++) {
      curve1[i] = curve[i + 1].sub(curve[i]).mul(3);
    } // Generate control vertices for Q''


    for (var i = 0; i <= 1; i++) {
      curve2[i] = curve1[i + 1].sub(curve1[i]).mul(2);
    } // Compute Q(u), Q'(u) and Q''(u)


    var pt = this.evaluate(3, curve, u),
        pt1 = this.evaluate(2, curve1, u),
        pt2 = this.evaluate(1, curve2, u),
        diff = pt.sub(point),
        df = pt1.dot(pt1) + diff.dot(pt2); // Compute f(u) / f'(u)

    if (Math.abs(df) <
    /*#=*/
    TOLERANCE) return u; // u = u - f(u) / f'(u)

    return u - diff.dot(pt1) / df;
  },
  // Evaluate a bezier curve at a particular parameter value
  evaluate: function evaluate(degree, curve, t) {
    // Copy array
    var tmp = curve.slice(); // Triangle computation

    for (var i = 1; i <= degree; i++) {
      for (var j = 0; j <= degree - i; j++) {
        tmp[j] = tmp[j].mul(1 - t).add(tmp[j + 1].mul(t));
      }
    }

    return tmp[0];
  },
  // Assign parameter values to digitized points
  // using relative distances between points.
  chordLengthParameterize: function chordLengthParameterize(first, last) {
    var u = [0];

    for (var i = first + 1; i <= last; i++) {
      u[i - first] = u[i - first - 1] + this.points[i].sub(this.points[i - 1]).mag();
    }

    for (var i = 1, m = last - first; i <= m; i++) {
      u[i] /= u[m];
    }

    return u;
  },
  // Find the maximum squared distance of digitized points to fitted curve.
  findMaxError: function findMaxError(first, last, curve, u) {
    var index = Math.floor((last - first + 1) / 2),
        maxDist = 0;

    for (var i = first + 1; i < last; i++) {
      var P = this.evaluate(3, curve, u[i - first]);
      var v = P.sub(this.points[i]);
      var dist = v.x * v.x + v.y * v.y; // squared

      if (dist >= maxDist) {
        maxDist = dist;
        index = i;
      }
    }

    return {
      error: maxDist,
      index: index
    };
  }
};
module.exports = {
  simplify: function simplify() {
    this._commands = Fitter.fit(this);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXHJhcGhhZWxcXGNvbXBvbmVudFxcb3B0aW9uYWxcXFIuc2ltcGxpZnkuanMiXSwibmFtZXMiOlsiRVBTSUxPTiIsIlRPTEVSQU5DRSIsIkZpdHRlciIsImZpdCIsInBhdGgiLCJlcnJvciIsImNvbW1hbmRzIiwicG9pbnRzIiwiX2NvbW1hbmRzIiwiZm9yRWFjaCIsImNtZCIsImMiLCJwdXNoIiwiY2MiLCJ2MiIsImxlbmd0aCIsImZpdEN1YmljIiwic3ViIiwibm9ybWFsaXplIiwiZmlyc3QiLCJsYXN0IiwidGFuMSIsInRhbjIiLCJwdDEiLCJwdDIiLCJkaXN0IiwibWFnIiwiYWRkQ3VydmUiLCJhZGQiLCJtdWxTZWxmIiwidVByaW1lIiwiY2hvcmRMZW5ndGhQYXJhbWV0ZXJpemUiLCJtYXhFcnJvciIsIk1hdGgiLCJtYXgiLCJzcGxpdCIsInBhcmFtZXRlcnNJbk9yZGVyIiwiaSIsImN1cnZlIiwiZ2VuZXJhdGVCZXppZXIiLCJmaW5kTWF4RXJyb3IiLCJpbmRleCIsInJlcGFyYW1ldGVyaXplIiwiVjEiLCJWMiIsInRhbkNlbnRlciIsImRpdiIsIm11bCIsIngiLCJ5IiwiZXBzaWxvbiIsIkMiLCJYIiwibCIsInUiLCJ0IiwiYiIsImIwIiwiYjEiLCJiMiIsImIzIiwiYTEiLCJhMiIsInRtcCIsImRvdCIsImRldEMwQzEiLCJhbHBoYTEiLCJhbHBoYTIiLCJhYnMiLCJkZXRDMFgiLCJkZXRYQzEiLCJjMCIsImMxIiwic2VnTGVuZ3RoIiwiZXBzIiwiaGFuZGxlMSIsImhhbmRsZTIiLCJsaW5lIiwiZmluZFJvb3QiLCJwb2ludCIsImN1cnZlMSIsImN1cnZlMiIsInB0IiwiZXZhbHVhdGUiLCJkaWZmIiwiZGYiLCJkZWdyZWUiLCJzbGljZSIsImoiLCJtIiwiZmxvb3IiLCJtYXhEaXN0IiwiUCIsInYiLCJtb2R1bGUiLCJleHBvcnRzIiwic2ltcGxpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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LENBQUMsRUFBbkMsRUFBdUM7QUFDbkMsVUFBSXVELENBQUMsR0FBRyxLQUFLVCxRQUFMLENBQWMsQ0FBZCxFQUFpQjdDLEtBQWpCLEVBQXdCZ0IsQ0FBQyxDQUFDakIsQ0FBQyxHQUFHbEIsS0FBTCxDQUF6QixDQUFSO0FBQ0EsVUFBSTBFLENBQUMsR0FBR0QsQ0FBQyxDQUFDM0UsR0FBRixDQUFNLEtBQUtWLE1BQUwsQ0FBWThCLENBQVosQ0FBTixDQUFSO0FBQ0EsVUFBSVosSUFBSSxHQUFHb0UsQ0FBQyxDQUFDN0MsQ0FBRixHQUFNNkMsQ0FBQyxDQUFDN0MsQ0FBUixHQUFZNkMsQ0FBQyxDQUFDNUMsQ0FBRixHQUFNNEMsQ0FBQyxDQUFDNUMsQ0FBL0IsQ0FIbUMsQ0FHRDs7QUFDbEMsVUFBSXhCLElBQUksSUFBSWtFLE9BQVosRUFBcUI7QUFDakJBLFFBQUFBLE9BQU8sR0FBR2xFLElBQVY7QUFDQWdCLFFBQUFBLEtBQUssR0FBR0osQ0FBUjtBQUNIO0FBQ0o7O0FBQ0QsV0FBTztBQUNIaEMsTUFBQUEsS0FBSyxFQUFFc0YsT0FESjtBQUVIbEQsTUFBQUEsS0FBSyxFQUFFQTtBQUZKLEtBQVA7QUFJSDtBQS9QUSxDQUFiO0FBa1FBcUQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JDLEVBQUFBLFFBQVEsRUFBRSxvQkFBWTtBQUNsQixTQUFLeEYsU0FBTCxHQUFpQk4sTUFBTSxDQUFDQyxHQUFQLENBQVcsSUFBWCxDQUFqQjtBQUNIO0FBSFksQ0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBFUFNJTE9OID0gMWUtMTI7XG52YXIgVE9MRVJBTkNFID0gMWUtNjtcblxudmFyIEZpdHRlciA9IHtcbiAgICBmaXQ6IGZ1bmN0aW9uIChwYXRoLCBlcnJvcikge1xuICAgICAgICB0aGlzLmNvbW1hbmRzID0gW107XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvciB8fCAxMDtcblxuICAgICAgICB2YXIgcG9pbnRzID0gdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgcGF0aC5fY29tbWFuZHMuZm9yRWFjaCggZnVuY3Rpb24gKGNtZCkge1xuICAgICAgICAgICAgdmFyIGMgPSBjbWRbMF07XG5cbiAgICAgICAgICAgIGlmIChjID09PSAnTScpIHtcbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaCggY2MudjIoY21kWzFdLCBjbWRbMl0pICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGMgPT09ICdDJykge1xuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKCBjYy52MihjbWRbNV0sIGNtZFs2XSkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB2YXIgbGVuZ3RoID0gcG9pbnRzLmxlbmd0aDtcblxuICAgICAgICBpZiAobGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5maXRDdWJpYygwLCBsZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIC8vIExlZnQgVGFuZ2VudFxuICAgICAgICAgICAgICAgIHBvaW50c1sxXS5zdWIocG9pbnRzWzBdKS5ub3JtYWxpemUoKSxcbiAgICAgICAgICAgICAgICAvLyBSaWdodCBUYW5nZW50XG4gICAgICAgICAgICAgICAgcG9pbnRzW2xlbmd0aCAtIDJdLnN1Yihwb2ludHNbbGVuZ3RoIC0gMV0pLm5vcm1hbGl6ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRzO1xuICAgIH0sXG5cbiAgICAvLyBGaXQgYSBCZXppZXIgY3VydmUgdG8gYSAoc3ViKXNldCBvZiBkaWdpdGl6ZWQgcG9pbnRzXG4gICAgZml0Q3ViaWM6IGZ1bmN0aW9uIChmaXJzdCwgbGFzdCwgdGFuMSwgdGFuMikge1xuICAgICAgICAvLyAgVXNlIGhldXJpc3RpYyBpZiByZWdpb24gb25seSBoYXMgdHdvIHBvaW50cyBpbiBpdFxuICAgICAgICBpZiAobGFzdCAtIGZpcnN0ID09PSAxKSB7XG4gICAgICAgICAgICB2YXIgcHQxID0gdGhpcy5wb2ludHNbZmlyc3RdLFxuICAgICAgICAgICAgICAgIHB0MiA9IHRoaXMucG9pbnRzW2xhc3RdLFxuICAgICAgICAgICAgICAgIGRpc3QgPSBwdDEuc3ViKHB0MikubWFnKCkgLyAzO1xuICAgICAgICAgICAgdGhpcy5hZGRDdXJ2ZShbcHQxLCBwdDEuYWRkKHRhbjEubm9ybWFsaXplKCkubXVsU2VsZihkaXN0KSksXG4gICAgICAgICAgICAgICAgICAgIHB0Mi5hZGQodGFuMi5ub3JtYWxpemUoKS5tdWxTZWxmKGRpc3QpKSwgcHQyXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gUGFyYW1ldGVyaXplIHBvaW50cywgYW5kIGF0dGVtcHQgdG8gZml0IGN1cnZlXG4gICAgICAgIHZhciB1UHJpbWUgPSB0aGlzLmNob3JkTGVuZ3RoUGFyYW1ldGVyaXplKGZpcnN0LCBsYXN0KSxcbiAgICAgICAgICAgIG1heEVycm9yID0gTWF0aC5tYXgodGhpcy5lcnJvciwgdGhpcy5lcnJvciAqIHRoaXMuZXJyb3IpLFxuICAgICAgICAgICAgc3BsaXQsXG4gICAgICAgICAgICBwYXJhbWV0ZXJzSW5PcmRlciA9IHRydWU7XG4gICAgICAgIC8vIFRyeSA0IGl0ZXJhdGlvbnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VydmUgPSB0aGlzLmdlbmVyYXRlQmV6aWVyKGZpcnN0LCBsYXN0LCB1UHJpbWUsIHRhbjEsIHRhbjIpO1xuICAgICAgICAgICAgLy8gIEZpbmQgbWF4IGRldmlhdGlvbiBvZiBwb2ludHMgdG8gZml0dGVkIGN1cnZlXG4gICAgICAgICAgICB2YXIgbWF4ID0gdGhpcy5maW5kTWF4RXJyb3IoZmlyc3QsIGxhc3QsIGN1cnZlLCB1UHJpbWUpO1xuICAgICAgICAgICAgaWYgKG1heC5lcnJvciA8IHRoaXMuZXJyb3IgJiYgcGFyYW1ldGVyc0luT3JkZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEN1cnZlKGN1cnZlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGxpdCA9IG1heC5pbmRleDtcbiAgICAgICAgICAgIC8vIElmIGVycm9yIG5vdCB0b28gbGFyZ2UsIHRyeSByZXBhcmFtZXRlcml6YXRpb24gYW5kIGl0ZXJhdGlvblxuICAgICAgICAgICAgaWYgKG1heC5lcnJvciA+PSBtYXhFcnJvcilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIHBhcmFtZXRlcnNJbk9yZGVyID0gdGhpcy5yZXBhcmFtZXRlcml6ZShmaXJzdCwgbGFzdCwgdVByaW1lLCBjdXJ2ZSk7XG4gICAgICAgICAgICBtYXhFcnJvciA9IG1heC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXR0aW5nIGZhaWxlZCAtLSBzcGxpdCBhdCBtYXggZXJyb3IgcG9pbnQgYW5kIGZpdCByZWN1cnNpdmVseVxuICAgICAgICB2YXIgVjEgPSB0aGlzLnBvaW50c1tzcGxpdCAtIDFdLnN1Yih0aGlzLnBvaW50c1tzcGxpdF0pLFxuICAgICAgICAgICAgVjIgPSB0aGlzLnBvaW50c1tzcGxpdF0uc3ViKHRoaXMucG9pbnRzW3NwbGl0ICsgMV0pLFxuICAgICAgICAgICAgdGFuQ2VudGVyID0gVjEuYWRkKFYyKS5kaXYoMikubm9ybWFsaXplKCk7XG4gICAgICAgIHRoaXMuZml0Q3ViaWMoZmlyc3QsIHNwbGl0LCB0YW4xLCB0YW5DZW50ZXIpO1xuICAgICAgICB0aGlzLmZpdEN1YmljKHNwbGl0LCBsYXN0LCB0YW5DZW50ZXIubXVsKC0xKSwgdGFuMik7XG4gICAgfSxcblxuICAgIGFkZEN1cnZlOiBmdW5jdGlvbihjdXJ2ZSkge1xuICAgICAgICBpZiAodGhpcy5jb21tYW5kcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMucHVzaChbJ00nLCBjdXJ2ZVswXS54LCBjdXJ2ZVswXS55XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgY21kID0gdGhpcy5jb21tYW5kc1t0aGlzLmNvbW1hbmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgY21kWzVdID0gY3VydmVbMF0ueDtcbiAgICAgICAgICAgIGNtZFs2XSA9IGN1cnZlWzBdLnk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbW1hbmRzLnB1c2goWydDJywgY3VydmVbMV0ueCwgY3VydmVbMV0ueSwgY3VydmVbMl0ueCwgY3VydmVbMl0ueSwgY3VydmVbM10ueCwgY3VydmVbM10ueV0pO1xuICAgIH0sXG5cbiAgICAvLyBVc2UgbGVhc3Qtc3F1YXJlcyBtZXRob2QgdG8gZmluZCBCZXppZXIgY29udHJvbCBwb2ludHMgZm9yIHJlZ2lvbi5cbiAgICBnZW5lcmF0ZUJlemllcjogZnVuY3Rpb24oZmlyc3QsIGxhc3QsIHVQcmltZSwgdGFuMSwgdGFuMikge1xuICAgICAgICB2YXIgZXBzaWxvbiA9IC8qIz0qL0VQU0lMT04sXG4gICAgICAgICAgICBwdDEgPSB0aGlzLnBvaW50c1tmaXJzdF0sXG4gICAgICAgICAgICBwdDIgPSB0aGlzLnBvaW50c1tsYXN0XSxcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgQyBhbmQgWCBtYXRyaWNlc1xuICAgICAgICAgICAgQyA9IFtbMCwgMF0sIFswLCAwXV0sXG4gICAgICAgICAgICBYID0gWzAsIDBdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGFzdCAtIGZpcnN0ICsgMTsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIHUgPSB1UHJpbWVbaV0sXG4gICAgICAgICAgICAgICAgdCA9IDEgLSB1LFxuICAgICAgICAgICAgICAgIGIgPSAzICogdSAqIHQsXG4gICAgICAgICAgICAgICAgYjAgPSB0ICogdCAqIHQsXG4gICAgICAgICAgICAgICAgYjEgPSBiICogdCxcbiAgICAgICAgICAgICAgICBiMiA9IGIgKiB1LFxuICAgICAgICAgICAgICAgIGIzID0gdSAqIHUgKiB1LFxuICAgICAgICAgICAgICAgIGExID0gdGFuMS5ub3JtYWxpemUoKS5tdWxTZWxmKGIxKSxcbiAgICAgICAgICAgICAgICBhMiA9IHRhbjIubm9ybWFsaXplKCkubXVsU2VsZihiMiksXG4gICAgICAgICAgICAgICAgdG1wID0gdGhpcy5wb2ludHNbZmlyc3QgKyBpXVxuICAgICAgICAgICAgICAgICAgICAuc3ViKHB0MS5tdWwoYjAgKyBiMSkpXG4gICAgICAgICAgICAgICAgICAgIC5zdWIocHQyLm11bChiMiArIGIzKSk7XG4gICAgICAgICAgICBDWzBdWzBdICs9IGExLmRvdChhMSk7XG4gICAgICAgICAgICBDWzBdWzFdICs9IGExLmRvdChhMik7XG4gICAgICAgICAgICAvLyBDWzFdWzBdICs9IGExLmRvdChhMik7XG4gICAgICAgICAgICBDWzFdWzBdID0gQ1swXVsxXTtcbiAgICAgICAgICAgIENbMV1bMV0gKz0gYTIuZG90KGEyKTtcbiAgICAgICAgICAgIFhbMF0gKz0gYTEuZG90KHRtcCk7XG4gICAgICAgICAgICBYWzFdICs9IGEyLmRvdCh0bXApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29tcHV0ZSB0aGUgZGV0ZXJtaW5hbnRzIG9mIEMgYW5kIFhcbiAgICAgICAgdmFyIGRldEMwQzEgPSBDWzBdWzBdICogQ1sxXVsxXSAtIENbMV1bMF0gKiBDWzBdWzFdLFxuICAgICAgICAgICAgYWxwaGExLCBhbHBoYTI7XG4gICAgICAgIGlmIChNYXRoLmFicyhkZXRDMEMxKSA+IGVwc2lsb24pIHtcbiAgICAgICAgICAgIC8vIEtyYW1lcidzIHJ1bGVcbiAgICAgICAgICAgIHZhciBkZXRDMFggID0gQ1swXVswXSAqIFhbMV0gICAgLSBDWzFdWzBdICogWFswXSxcbiAgICAgICAgICAgICAgICBkZXRYQzEgID0gWFswXSAgICAqIENbMV1bMV0gLSBYWzFdICAgICogQ1swXVsxXTtcbiAgICAgICAgICAgIC8vIERlcml2ZSBhbHBoYSB2YWx1ZXNcbiAgICAgICAgICAgIGFscGhhMSA9IGRldFhDMSAvIGRldEMwQzE7XG4gICAgICAgICAgICBhbHBoYTIgPSBkZXRDMFggLyBkZXRDMEMxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTWF0cml4IGlzIHVuZGVyLWRldGVybWluZWQsIHRyeSBhc3N1bWluZyBhbHBoYTEgPT0gYWxwaGEyXG4gICAgICAgICAgICB2YXIgYzAgPSBDWzBdWzBdICsgQ1swXVsxXSxcbiAgICAgICAgICAgICAgICBjMSA9IENbMV1bMF0gKyBDWzFdWzFdO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGMwKSA+IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICBhbHBoYTEgPSBhbHBoYTIgPSBYWzBdIC8gYzA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGMxKSA+IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICBhbHBoYTEgPSBhbHBoYTIgPSBYWzFdIC8gYzE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBiZWxvd1xuICAgICAgICAgICAgICAgIGFscGhhMSA9IGFscGhhMiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhbHBoYSBuZWdhdGl2ZSwgdXNlIHRoZSBXdS9CYXJza3kgaGV1cmlzdGljIChzZWUgdGV4dClcbiAgICAgICAgLy8gKGlmIGFscGhhIGlzIDAsIHlvdSBnZXQgY29pbmNpZGVudCBjb250cm9sIHBvaW50cyB0aGF0IGxlYWQgdG9cbiAgICAgICAgLy8gZGl2aWRlIGJ5IHplcm8gaW4gYW55IHN1YnNlcXVlbnQgTmV3dG9uUmFwaHNvblJvb3RGaW5kKCkgY2FsbC5cbiAgICAgICAgdmFyIHNlZ0xlbmd0aCA9IHB0Mi5zdWIocHQxKS5tYWcoKSxcbiAgICAgICAgICAgIGVwcyA9IGVwc2lsb24gKiBzZWdMZW5ndGgsXG4gICAgICAgICAgICBoYW5kbGUxLFxuICAgICAgICAgICAgaGFuZGxlMjtcbiAgICAgICAgaWYgKGFscGhhMSA8IGVwcyB8fCBhbHBoYTIgPCBlcHMpIHtcbiAgICAgICAgICAgIC8vIGZhbGwgYmFjayBvbiBzdGFuZGFyZCAocHJvYmFibHkgaW5hY2N1cmF0ZSkgZm9ybXVsYSxcbiAgICAgICAgICAgIC8vIGFuZCBzdWJkaXZpZGUgZnVydGhlciBpZiBuZWVkZWQuXG4gICAgICAgICAgICBhbHBoYTEgPSBhbHBoYTIgPSBzZWdMZW5ndGggLyAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGZvdW5kIGNvbnRyb2wgcG9pbnRzIGFyZSBpbiB0aGUgcmlnaHQgb3JkZXIgd2hlblxuICAgICAgICAgICAgLy8gcHJvamVjdGVkIG9udG8gdGhlIGxpbmUgdGhyb3VnaCBwdDEgYW5kIHB0Mi5cbiAgICAgICAgICAgIHZhciBsaW5lID0gcHQyLnN1YihwdDEpO1xuICAgICAgICAgICAgLy8gQ29udHJvbCBwb2ludHMgMSBhbmQgMiBhcmUgcG9zaXRpb25lZCBhbiBhbHBoYSBkaXN0YW5jZSBvdXRcbiAgICAgICAgICAgIC8vIG9uIHRoZSB0YW5nZW50IHZlY3RvcnMsIGxlZnQgYW5kIHJpZ2h0LCByZXNwZWN0aXZlbHlcbiAgICAgICAgICAgIGhhbmRsZTEgPSB0YW4xLm5vcm1hbGl6ZSgpLm11bFNlbGYoYWxwaGExKTtcbiAgICAgICAgICAgIGhhbmRsZTIgPSB0YW4yLm5vcm1hbGl6ZSgpLm11bFNlbGYoYWxwaGEyKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmRvdChsaW5lKSAtIGhhbmRsZTIuZG90KGxpbmUpID4gc2VnTGVuZ3RoICogc2VnTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gRmFsbCBiYWNrIHRvIHRoZSBXdS9CYXJza3kgaGV1cmlzdGljIGFib3ZlLlxuICAgICAgICAgICAgICAgIGFscGhhMSA9IGFscGhhMiA9IHNlZ0xlbmd0aCAvIDM7XG4gICAgICAgICAgICAgICAgaGFuZGxlMSA9IGhhbmRsZTIgPSBudWxsOyAvLyBGb3JjZSByZWNhbGN1bGF0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJzdCBhbmQgbGFzdCBjb250cm9sIHBvaW50cyBvZiB0aGUgQmV6aWVyIGN1cnZlIGFyZVxuICAgICAgICAvLyBwb3NpdGlvbmVkIGV4YWN0bHkgYXQgdGhlIGZpcnN0IGFuZCBsYXN0IGRhdGEgcG9pbnRzXG4gICAgICAgIHJldHVybiBbcHQxLCBwdDEuYWRkKGhhbmRsZTEgfHwgdGFuMS5ub3JtYWxpemUoKS5tdWxTZWxmKGFscGhhMSkpLFxuICAgICAgICAgICAgICAgIHB0Mi5hZGQoaGFuZGxlMiB8fCB0YW4yLm5vcm1hbGl6ZSgpLm11bFNlbGYoYWxwaGEyKSksIHB0Ml07XG4gICAgfSxcblxuICAgIC8vIEdpdmVuIHNldCBvZiBwb2ludHMgYW5kIHRoZWlyIHBhcmFtZXRlcml6YXRpb24sIHRyeSB0byBmaW5kXG4gICAgLy8gYSBiZXR0ZXIgcGFyYW1ldGVyaXphdGlvbi5cbiAgICByZXBhcmFtZXRlcml6ZTogZnVuY3Rpb24oZmlyc3QsIGxhc3QsIHUsIGN1cnZlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBmaXJzdDsgaSA8PSBsYXN0OyBpKyspIHtcbiAgICAgICAgICAgIHVbaSAtIGZpcnN0XSA9IHRoaXMuZmluZFJvb3QoY3VydmUsIHRoaXMucG9pbnRzW2ldLCB1W2kgLSBmaXJzdF0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIERldGVjdCBpZiB0aGUgbmV3IHBhcmFtZXRlcml6YXRpb24gaGFzIHJlb3JkZXJlZCB0aGUgcG9pbnRzLlxuICAgICAgICAvLyBJbiB0aGF0IGNhc2UsIHdlIHdvdWxkIGZpdCB0aGUgcG9pbnRzIG9mIHRoZSBwYXRoIGluIHRoZSB3cm9uZyBvcmRlci5cbiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGwgPSB1Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHVbaV0gPD0gdVtpIC0gMV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICAvLyBVc2UgTmV3dG9uLVJhcGhzb24gaXRlcmF0aW9uIHRvIGZpbmQgYmV0dGVyIHJvb3QuXG4gICAgZmluZFJvb3Q6IGZ1bmN0aW9uKGN1cnZlLCBwb2ludCwgdSkge1xuICAgICAgICB2YXIgY3VydmUxID0gW10sXG4gICAgICAgICAgICBjdXJ2ZTIgPSBbXTtcbiAgICAgICAgLy8gR2VuZXJhdGUgY29udHJvbCB2ZXJ0aWNlcyBmb3IgUSdcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gMjsgaSsrKSB7XG4gICAgICAgICAgICBjdXJ2ZTFbaV0gPSBjdXJ2ZVtpICsgMV0uc3ViKGN1cnZlW2ldKS5tdWwoMyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2VuZXJhdGUgY29udHJvbCB2ZXJ0aWNlcyBmb3IgUScnXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDE7IGkrKykge1xuICAgICAgICAgICAgY3VydmUyW2ldID0gY3VydmUxW2kgKyAxXS5zdWIoY3VydmUxW2ldKS5tdWwoMik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ29tcHV0ZSBRKHUpLCBRJyh1KSBhbmQgUScnKHUpXG4gICAgICAgIHZhciBwdCA9IHRoaXMuZXZhbHVhdGUoMywgY3VydmUsIHUpLFxuICAgICAgICAgICAgcHQxID0gdGhpcy5ldmFsdWF0ZSgyLCBjdXJ2ZTEsIHUpLFxuICAgICAgICAgICAgcHQyID0gdGhpcy5ldmFsdWF0ZSgxLCBjdXJ2ZTIsIHUpLFxuICAgICAgICAgICAgZGlmZiA9IHB0LnN1Yihwb2ludCksXG4gICAgICAgICAgICBkZiA9IHB0MS5kb3QocHQxKSArIGRpZmYuZG90KHB0Mik7XG4gICAgICAgIC8vIENvbXB1dGUgZih1KSAvIGYnKHUpXG4gICAgICAgIGlmIChNYXRoLmFicyhkZikgPCAvKiM9Ki9UT0xFUkFOQ0UpXG4gICAgICAgICAgICByZXR1cm4gdTtcbiAgICAgICAgLy8gdSA9IHUgLSBmKHUpIC8gZicodSlcbiAgICAgICAgcmV0dXJuIHUgLSBkaWZmLmRvdChwdDEpIC8gZGY7XG4gICAgfSxcblxuICAgIC8vIEV2YWx1YXRlIGEgYmV6aWVyIGN1cnZlIGF0IGEgcGFydGljdWxhciBwYXJhbWV0ZXIgdmFsdWVcbiAgICBldmFsdWF0ZTogZnVuY3Rpb24oZGVncmVlLCBjdXJ2ZSwgdCkge1xuICAgICAgICAvLyBDb3B5IGFycmF5XG4gICAgICAgIHZhciB0bXAgPSBjdXJ2ZS5zbGljZSgpO1xuICAgICAgICAvLyBUcmlhbmdsZSBjb21wdXRhdGlvblxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBkZWdyZWU7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPD0gZGVncmVlIC0gaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdG1wW2pdID0gdG1wW2pdLm11bCgxIC0gdCkuYWRkKHRtcFtqICsgMV0ubXVsKHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wWzBdO1xuICAgIH0sXG5cbiAgICAvLyBBc3NpZ24gcGFyYW1ldGVyIHZhbHVlcyB0byBkaWdpdGl6ZWQgcG9pbnRzXG4gICAgLy8gdXNpbmcgcmVsYXRpdmUgZGlzdGFuY2VzIGJldHdlZW4gcG9pbnRzLlxuICAgIGNob3JkTGVuZ3RoUGFyYW1ldGVyaXplOiBmdW5jdGlvbihmaXJzdCwgbGFzdCkge1xuICAgICAgICB2YXIgdSA9IFswXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IGZpcnN0ICsgMTsgaSA8PSBsYXN0OyBpKyspIHtcbiAgICAgICAgICAgIHVbaSAtIGZpcnN0XSA9IHVbaSAtIGZpcnN0IC0gMV1cbiAgICAgICAgICAgICAgICAgICAgKyB0aGlzLnBvaW50c1tpXS5zdWIodGhpcy5wb2ludHNbaSAtIDFdKS5tYWcoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMSwgbSA9IGxhc3QgLSBmaXJzdDsgaSA8PSBtOyBpKyspIHtcbiAgICAgICAgICAgIHVbaV0gLz0gdVttXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdTtcbiAgICB9LFxuXG4gICAgLy8gRmluZCB0aGUgbWF4aW11bSBzcXVhcmVkIGRpc3RhbmNlIG9mIGRpZ2l0aXplZCBwb2ludHMgdG8gZml0dGVkIGN1cnZlLlxuICAgIGZpbmRNYXhFcnJvcjogZnVuY3Rpb24oZmlyc3QsIGxhc3QsIGN1cnZlLCB1KSB7XG4gICAgICAgIHZhciBpbmRleCA9IE1hdGguZmxvb3IoKGxhc3QgLSBmaXJzdCArIDEpIC8gMiksXG4gICAgICAgICAgICBtYXhEaXN0ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IGZpcnN0ICsgMTsgaSA8IGxhc3Q7IGkrKykge1xuICAgICAgICAgICAgdmFyIFAgPSB0aGlzLmV2YWx1YXRlKDMsIGN1cnZlLCB1W2kgLSBmaXJzdF0pO1xuICAgICAgICAgICAgdmFyIHYgPSBQLnN1Yih0aGlzLnBvaW50c1tpXSk7XG4gICAgICAgICAgICB2YXIgZGlzdCA9IHYueCAqIHYueCArIHYueSAqIHYueTsgLy8gc3F1YXJlZFxuICAgICAgICAgICAgaWYgKGRpc3QgPj0gbWF4RGlzdCkge1xuICAgICAgICAgICAgICAgIG1heERpc3QgPSBkaXN0O1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXJyb3I6IG1heERpc3QsXG4gICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzaW1wbGlmeTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jb21tYW5kcyA9IEZpdHRlci5maXQodGhpcyk7XG4gICAgfVxufTtcbiJdfQ==