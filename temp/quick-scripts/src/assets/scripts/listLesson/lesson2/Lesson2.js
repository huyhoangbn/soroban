"use strict";
cc._RF.push(module, '34e64jlXmBH/bSSuHADj+E4', 'Lesson2');
// scripts/listLesson/lesson2/Lesson2.ts

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
var Lesson2 = /** @class */ (function (_super) {
    __extends(Lesson2, _super);
    function Lesson2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelText = null;
        // onLoad () {}
        _this.listReference = [];
        return _this;
    }
    Lesson2.prototype.start = function () {
        this.setAction();
    };
    Lesson2.prototype.setAction = function () {
    };
    __decorate([
        property(cc.Label)
    ], Lesson2.prototype, "labelText", void 0);
    __decorate([
        property([cc.Node])
    ], Lesson2.prototype, "listReference", void 0);
    Lesson2 = __decorate([
        ccclass
    ], Lesson2);
    return Lesson2;
}(cc.Component));
exports.default = Lesson2;

cc._RF.pop();