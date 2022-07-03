"use strict";
cc._RF.push(module, '3b2d8nhfM1BFavo9n1PI1gx', 'Node1_2');
// scripts/listLesson/lesson2/Node1_2.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Node1_2 = /** @class */ (function (_super) {
    __extends(Node1_2, _super);
    function Node1_2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeBead = null;
        _this.nodeLayout = null;
        _this.count = 1;
        return _this;
    }
    Node1_2.prototype.onLoad = function () {
    };
    Node1_2.prototype.start = function () {
        this.setAction();
    };
    Node1_2.prototype.setAction = function () {
        var _this = this;
        var action = cc.callFunc(function () {
            var newBead = cc.instantiate(_this.nodeBead);
            _this.count++;
            _this.nodeLayout.node.addChild(newBead);
            _this.label.string = _this.count + " đơn vị";
        });
        this.node.runAction(cc.repeat(cc.sequence(cc.delayTime(1), action, cc.delayTime(1)), 4));
    };
    __decorate([
        property(cc.Label)
    ], Node1_2.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node1_2.prototype, "nodeBead", void 0);
    __decorate([
        property(cc.Layout)
    ], Node1_2.prototype, "nodeLayout", void 0);
    Node1_2 = __decorate([
        ccclass
    ], Node1_2);
    return Node1_2;
}(cc.Component));
exports.default = Node1_2;

cc._RF.pop();