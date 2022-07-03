"use strict";
cc._RF.push(module, '2abebBym7FFtpgs0w2LvT06', 'Lesson0');
// scripts/listLesson/lesson0/Lesson0.ts

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
var Lesson0 = /** @class */ (function (_super) {
    __extends(Lesson0, _super);
    function Lesson0() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelText = null;
        // onLoad () {}
        _this.listReference = [];
        _this.arrow = null;
        _this.animHand = null;
        return _this;
        // runAction(action){
        //     this.node.stopAllActions();
        //     this.node.runAction(action);
        // }
    }
    Lesson0.prototype.start = function () {
        this.setAction();
    };
    Lesson0.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.arrow.active = false;
            _this.listReference[0].active = true;
            _this.listReference[1].active = false;
            _this.listReference[2].active = false;
        });
        var action2 = cc.callFunc(function () {
            _this.animHand.setPosition(-120, -200);
            _this.listReference[0].active = false;
            _this.listReference[1].active = true;
            _this.listReference[2].active = false;
        });
        var action3 = cc.callFunc(function () {
            _this.animHand.runAction(cc.moveTo(0.1, cc.v2(-940, -200)));
        });
        var action4 = cc.callFunc(function () {
            _this.listReference[0].active = false;
            _this.listReference[1].active = false;
            _this.listReference[2].active = true;
            _this.arrow.active = true;
        });
        this.node.runAction(cc.sequence(action1, cc.delayTime(2.5), action2, cc.delayTime(2.0), action3, cc.delayTime(3.0), action4));
    };
    __decorate([
        property(cc.Label)
    ], Lesson0.prototype, "labelText", void 0);
    __decorate([
        property([cc.Node])
    ], Lesson0.prototype, "listReference", void 0);
    __decorate([
        property(cc.Node)
    ], Lesson0.prototype, "arrow", void 0);
    __decorate([
        property(cc.Node)
    ], Lesson0.prototype, "animHand", void 0);
    Lesson0 = __decorate([
        ccclass
    ], Lesson0);
    return Lesson0;
}(cc.Component));
exports.default = Lesson0;

cc._RF.pop();