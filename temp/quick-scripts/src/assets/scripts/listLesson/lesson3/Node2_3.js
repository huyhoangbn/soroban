"use strict";
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