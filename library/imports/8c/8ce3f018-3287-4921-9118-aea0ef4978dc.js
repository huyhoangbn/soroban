"use strict";
cc._RF.push(module, '8ce3fAYModJIZEYrqDvSXjc', 'Abacus');
// scripts/Abacus.ts

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
var ResourcePack_1 = require("./ResourcePack");
var Global_1 = require("./Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Abacus = /** @class */ (function (_super) {
    __extends(Abacus, _super);
    function Abacus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vbars = null;
        _this.hbars = null;
        _this.resourcePack = null;
        _this.rows = [];
        _this.score = 0;
        _this.initialized = false;
        return _this;
    }
    Abacus.prototype.onLoad = function () {
        this.initialize();
    };
    Abacus.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.rows = [];
            _this.node.children.forEach(function (value) {
                if (value.name == "Row")
                    _this.rows.push(value);
            });
            _this.resourcePack = new ResourcePack_1.ResourcePack();
            _this.resourcePack.loadTheme(Global_1.Global.resourcePack).then(function () {
                _this.rows.forEach(function (value) {
                    value.getComponent("Row").initialize();
                    value.getComponent("Row").applyTheme(_this.resourcePack);
                });
                _this.vbars.children.forEach(function (value) {
                    value.getComponent(cc.Sprite).spriteFrame = _this.resourcePack.vborder;
                });
                _this.hbars.children.forEach(function (value) {
                    if (value.name == "Middle")
                        value.getComponent(cc.Sprite).spriteFrame = _this.resourcePack.mbar;
                    else
                        value.getComponent(cc.Sprite).spriteFrame = _this.resourcePack.hbar;
                });
                _this.initialized = true;
                resolve("");
            }).catch(function (error) { return reject(error); });
        });
    };
    Abacus.prototype.update = function (dt) {
        var _this = this;
        if (!this.initialized)
            return;
        this.score = 0;
        this.rows.forEach(function (value, index) {
            var number = value.getComponent("Row").number;
            for (var i = _this.rows.length - 1 - index; i > 0; --i)
                number *= 10;
            _this.score += number;
        });
    };
    Abacus.prototype.setInteractive = function (value) {
        this.rows.forEach(function (node) {
            node.getComponent("Row").setInteractive(value);
        });
    };
    Abacus.prototype.setRowInteractive = function (row, which) {
        if (row < 0 || row >= this.rows.length) {
            console.error("Invalid row index on Abacus.setRowValue");
            return;
        }
        this.rows[row].getComponent("Row").setInteractive(true, which);
    };
    Abacus.prototype.setRowValue = function (row, value) {
        if (row < 0 || row >= this.rows.length) {
            console.error("Invalid row index on Abacus.setRowValue");
            return;
        }
        this.rows[row].getComponent("Row").setValue(value);
    };
    Abacus.prototype.reset = function () {
        this.rows.forEach(function (value) {
            value.getComponent("Row").reset();
        });
    };
    __decorate([
        property(cc.Node)
    ], Abacus.prototype, "vbars", void 0);
    __decorate([
        property(cc.Node)
    ], Abacus.prototype, "hbars", void 0);
    Abacus = __decorate([
        ccclass
    ], Abacus);
    return Abacus;
}(cc.Component));
exports.default = Abacus;

cc._RF.pop();