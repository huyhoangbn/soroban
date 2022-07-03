"use strict";
cc._RF.push(module, '803d3yn6LlMhaZ1kKxXUu/B', 'Node8_3');
// scripts/listLesson/lesson3/Node8_3.ts

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
var Node8_3 = /** @class */ (function (_super) {
    __extends(Node8_3, _super);
    function Node8_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node8_3.prototype.onLoad = function () {
    };
    Node8_3.prototype.start = function () {
        this.setAction();
    };
    Node8_3.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.nodeBead[4].runAction(cc.moveTo(0.5, cc.v2(0, 195)));
            _this.label.string = "5";
            _this.label.node.active = true;
            _this.nodeHand.parent.active = true;
        });
        var action2 = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(1.0), action1, cc.delayTime(1.0), action2));
    };
    __decorate([
        property(cc.Label)
    ], Node8_3.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node8_3.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node8_3.prototype, "nodeBead", void 0);
    Node8_3 = __decorate([
        ccclass
    ], Node8_3);
    return Node8_3;
}(cc.Component));
exports.default = Node8_3;

cc._RF.pop();