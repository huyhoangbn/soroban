"use strict";
cc._RF.push(module, 'fb34fuJhhZKzbU4JVokLFw5', 'Lesson1');
// scripts/listLesson/lesson1/Lesson1.ts

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
var Blink = /** @class */ (function (_super) {
    __extends(Blink, _super);
    function Blink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeKhung = null;
        _this.listVbar = null;
        _this.middleBar = null;
        _this.listBear = null;
        _this.labelText = null;
        return _this;
    }
    // onLoad () {}
    Blink.prototype.start = function () {
        this.setAction();
    };
    Blink.prototype.setAction = function () {
        var _this = this;
        var blinkAction = cc.repeat(cc.sequence(cc.blink(0.1, 1), cc.delayTime(0.1)), 10);
        var action1 = cc.callFunc(function () {
            _this.nodeKhung.runAction(blinkAction);
            _this.labelText.string = "Khung ngoài";
        });
        var action2 = cc.callFunc(function () {
            _this.listVbar.runAction(blinkAction);
            _this.labelText.string = "Cột dọc";
        });
        var action3 = cc.callFunc(function () {
            _this.middleBar.runAction(blinkAction);
            _this.labelText.string = "Thanh giá trị ngang";
        });
        var action4 = cc.callFunc(function () {
            _this.listBear.runAction(blinkAction);
            _this.labelText.string = "Hạt giá trị";
        });
        this.node.runAction(cc.sequence(action1, cc.delayTime(3), action2, cc.delayTime(3), action3, cc.delayTime(3), action4));
    };
    __decorate([
        property(cc.Node)
    ], Blink.prototype, "nodeKhung", void 0);
    __decorate([
        property(cc.Node)
    ], Blink.prototype, "listVbar", void 0);
    __decorate([
        property(cc.Node)
    ], Blink.prototype, "middleBar", void 0);
    __decorate([
        property(cc.Node)
    ], Blink.prototype, "listBear", void 0);
    __decorate([
        property(cc.Label)
    ], Blink.prototype, "labelText", void 0);
    Blink = __decorate([
        ccclass
    ], Blink);
    return Blink;
}(cc.Component));
exports.default = Blink;

cc._RF.pop();