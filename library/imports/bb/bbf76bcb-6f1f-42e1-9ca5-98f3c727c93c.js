"use strict";
cc._RF.push(module, 'bbf76vLbx9C4ZylmPPHJ8k8', 'Node1_4');
// scripts/listLesson/lesson4/Node1_4.ts

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
var Node1_4 = /** @class */ (function (_super) {
    __extends(Node1_4, _super);
    function Node1_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    Node1_4.prototype.onLoad = function () { };
    Node1_4.prototype.start = function () {
        this.setAction();
    };
    Node1_4.prototype.setAction = function () {
        var spr1 = this.node.getChildByName("spr1");
        var txt1 = this.node.getChildByName("text1");
        spr1.opacity = 0;
        txt1.opacity = 0;
        spr1.setPosition(cc.v2(-585, 250));
        var spr2 = this.node.getChildByName("spr2");
        var txt2 = this.node.getChildByName("text2");
        spr2.opacity = 0;
        txt2.opacity = 0;
        spr2.setPosition(cc.v2(-413, 250));
        var txt3 = this.node.getChildByName("text3");
        txt3.opacity = 0;
        var spr4 = this.node.getChildByName("spr4");
        var txt4 = this.node.getChildByName("text4");
        spr4.opacity = 0;
        txt4.opacity = 0;
        spr4.setPosition(cc.v2(77, 250));
        var actionSpr1 = cc.callFunc(function () {
            spr1.runAction(cc.sequence(cc.fadeTo(0.5, 255), cc.moveTo(0.5, cc.v2(-585, 0))));
        });
        var actionLb1 = cc.callFunc(function () {
            txt1.runAction(cc.fadeTo(0.5, 255));
        });
        var actionSpr2 = cc.callFunc(function () {
            spr2.runAction(cc.sequence(cc.fadeTo(0.5, 255), cc.moveTo(0.5, cc.v2(-413, 0))));
        });
        var actionLb2 = cc.callFunc(function () {
            txt2.runAction(cc.fadeTo(0.5, 255));
        });
        var actionSpr3_1 = cc.callFunc(function () {
            spr1.runAction(cc.moveTo(0.5, cc.v2(-500, 0)));
        });
        var actionSpr3_2 = cc.callFunc(function () {
            spr2.runAction(cc.moveTo(0.5, cc.v2(-500, 0)));
        });
        var actionText3 = cc.callFunc(function () {
            txt3.runAction(cc.fadeTo(0.5, 255));
        });
        var actionSpr4 = cc.callFunc(function () {
            spr4.runAction(cc.sequence(cc.fadeTo(0.5, 255), cc.moveTo(0.5, cc.v2(77, 0))));
        });
        var actionLb4 = cc.callFunc(function () {
            txt4.runAction(cc.fadeTo(0.5, 255));
        });
        this.node.runAction(cc.sequence(cc.delayTime(1.0), cc.sequence(actionLb1, cc.delayTime(0.5), actionSpr1), cc.delayTime(1.0), cc.sequence(actionLb2, cc.delayTime(0.5), actionSpr2), cc.delayTime(1.0), cc.sequence(actionText3, cc.delayTime(0.5), cc.spawn(actionSpr3_1, actionSpr3_2)), cc.delayTime(1.0), cc.sequence(actionSpr4, cc.delayTime(0.5), actionLb4)));
    };
    __decorate([
        property(cc.Label)
    ], Node1_4.prototype, "label", void 0);
    Node1_4 = __decorate([
        ccclass
    ], Node1_4);
    return Node1_4;
}(cc.Component));
exports.default = Node1_4;

cc._RF.pop();