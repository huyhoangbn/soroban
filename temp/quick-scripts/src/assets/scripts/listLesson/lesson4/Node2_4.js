"use strict";
cc._RF.push(module, '47a3aRhQy1KOaNTVI3xbpIO', 'Node2_4');
// scripts/listLesson/lesson4/Node2_4.ts

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
var Node2_4 = /** @class */ (function (_super) {
    __extends(Node2_4, _super);
    function Node2_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    Node2_4.prototype.start = function () {
        this.setAction();
    };
    Node2_4.prototype.setAction = function () {
        var _this = this;
        var txt = this.node.getChildByName("text");
        var lb = this.node.getChildByName("lb");
        txt.active = false;
        lb.active = false;
        var action1 = cc.callFunc(function () {
            _this.label.string = "Phép tính trên được đọc là 1 + 1 + 1 con nhé!";
            txt.active = true;
            lb.active = true;
        });
        var action2 = cc.callFunc(function () {
            _this.label.string = "Trong toán bàn tính soroban thường phép tính cộng không ghi là cộng và thường được viết theo cột dọc. Bây giờ chúng mình cùng biểu diễn phép tính 1 + 1 + 1 trên bàn tính soroban nào";
        });
        var action3 = cc.callFunc(function () {
            _this.label.string = "Phép tính trên được đọc là 1 + 1 + 1 con nhé!";
            txt.active = true;
            lb.active = true;
        });
        this.node.runAction(cc.sequence(cc.delayTime(3.0), action1, cc.delayTime(3.0), action2));
    };
    __decorate([
        property(cc.Label)
    ], Node2_4.prototype, "label", void 0);
    __decorate([
        property
    ], Node2_4.prototype, "text", void 0);
    Node2_4 = __decorate([
        ccclass
    ], Node2_4);
    return Node2_4;
}(cc.Component));
exports.default = Node2_4;

cc._RF.pop();