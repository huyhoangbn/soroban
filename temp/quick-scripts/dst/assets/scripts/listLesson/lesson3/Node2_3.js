
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson3/Node2_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cf9clqY01JbZkgoEdkifp+', 'Node2_3');
// scripts/listLesson/lesson3/Node2_3.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Node2_3 = /** @class */ (function (_super) {
    __extends(Node2_3, _super);
    function Node2_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeHand = null;
        _this.count = 1;
        return _this;
    }
    Node2_3.prototype.onLoad = function () {
        this.nodeHand.setPosition(-872, -200);
    };
    Node2_3.prototype.start = function () {
        this.setAction();
    };
    Node2_3.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.label.string = "Các hạt dưới chúng mình gẩy lên bằng ngón tay cái";
            _this.nodeHand.setPosition(-1625, -200);
        });
        var action2 = cc.callFunc(function () {
            _this.label.string = "Và gẩy hạt xuống bằng ngón tay trỏ";
            _this.nodeHand.setPosition(-105, -200);
        });
        this.node.runAction(cc.sequence(cc.delayTime(2.0), action1, cc.delayTime(2.0), action2));
    };
    __decorate([
        property(cc.Label)
    ], Node2_3.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node2_3.prototype, "nodeHand", void 0);
    Node2_3 = __decorate([
        ccclass
    ], Node2_3);
    return Node2_3;
}(cc.Component));
exports.default = Node2_3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uM1xcTm9kZTJfMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTRCQztRQXpCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFvQnRCLENBQUM7SUFuQkcsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELDJCQUFTLEdBQVQ7UUFBQSxpQkFVQztRQVRHLElBQUksT0FBTyxHQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsbURBQW1ELENBQUM7WUFDeEUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksT0FBTyxHQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsb0NBQW9DLENBQUM7WUFDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxPQUFPLEVBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUF2QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBTlIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTRCM0I7SUFBRCxjQUFDO0NBNUJELEFBNEJDLENBNUJvQyxFQUFFLENBQUMsU0FBUyxHQTRCaEQ7a0JBNUJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZTJfMyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBub2RlSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgY291bnQ6IG51bWJlciA9IDE7XHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLm5vZGVIYW5kLnNldFBvc2l0aW9uKC04NzIsLTIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICBsZXQgYWN0aW9uMT0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIkPDoWMgaOG6oXQgZMaw4bubaSBjaMO6bmcgbcOsbmggZ+G6qXkgbMOqbiBi4bqxbmcgbmfDs24gdGF5IGPDoWlcIjtcclxuICAgICAgICAgICAgdGhpcy5ub2RlSGFuZC5zZXRQb3NpdGlvbigtMTYyNSwtMjAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb24yPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwiVsOgIGfhuql5IGjhuqF0IHh14buRbmcgYuG6sW5nIG5nw7NuIHRheSB0cuG7j1wiO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnNldFBvc2l0aW9uKC0xMDUsLTIwMCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyLjApLGFjdGlvbjEsY2MuZGVsYXlUaW1lKDIuMCksYWN0aW9uMikpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=