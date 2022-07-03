"use strict";
cc._RF.push(module, '26f0e2hTBxIqq7NqeDfyVYM', 'Node5_4');
// scripts/listLesson/lesson4/Node5_4.ts

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
var Node5_4 = /** @class */ (function (_super) {
    __extends(Node5_4, _super);
    function Node5_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_refer = null;
        _this.label_result = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node5_4.prototype.start = function () {
        this.setAction();
        this.label_result.node.active = false;
    };
    Node5_4.prototype.setAction = function () {
        var _this = this;
        var txt = this.node.getChildByName("text");
        var action1 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.YELLOW;
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 ";
        });
        var action2 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.YELLOW;
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.nodeBead[3].runAction(cc.moveTo(0.5, cc.v2(0, -201)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 + 3";
        });
        var action3 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.WHITE;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 + 3 = 4";
            _this.label_result.string = "4";
            _this.label_result.node.active = true;
            _this.label_result.node.color = cc.Color.YELLOW;
        });
        var hideAnim = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(2.0), action1, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action2, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action3, cc.delayTime(1.0), hideAnim));
    };
    __decorate([
        property(cc.Label)
    ], Node5_4.prototype, "label_refer", void 0);
    __decorate([
        property(cc.Label)
    ], Node5_4.prototype, "label_result", void 0);
    __decorate([
        property(cc.Node)
    ], Node5_4.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node5_4.prototype, "nodeBead", void 0);
    Node5_4 = __decorate([
        ccclass
    ], Node5_4);
    return Node5_4;
}(cc.Component));
exports.default = Node5_4;

cc._RF.pop();