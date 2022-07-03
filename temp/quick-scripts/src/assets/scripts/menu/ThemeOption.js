"use strict";
cc._RF.push(module, '71005466qlNdJlYxqIfRjfw', 'ThemeOption');
// scripts/menu/ThemeOption.ts

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
var Global_1 = require("../Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ThemeOption = /** @class */ (function (_super) {
    __extends(ThemeOption, _super);
    function ThemeOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLabel = null;
        _this.previewSprite = null;
        _this.button = null;
        return _this;
    }
    ThemeOption.prototype.initialize = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            cc.resources.load("themes/" + name + "/bead_inactive", cc.SpriteFrame, function (error, asset) {
                if (error) {
                    reject(error.name + " " + error.message);
                }
                name[0].toLocaleUpperCase();
                _this.nameLabel.string = name;
                _this.previewSprite.spriteFrame = asset;
                var clickEventHandler = new cc.Component.EventHandler();
                clickEventHandler.target = _this.node;
                clickEventHandler.component = "ThemeOption";
                clickEventHandler.handler = "buttonCallback";
                clickEventHandler.customEventData = name;
                _this.button.clickEvents.push(clickEventHandler);
                resolve("");
            });
        });
    };
    ThemeOption.prototype.buttonCallback = function (event, customEventData) {
        Global_1.Global.resourcePack = customEventData;
        console.log("Changed to " + customEventData);
    };
    __decorate([
        property(cc.Label)
    ], ThemeOption.prototype, "nameLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], ThemeOption.prototype, "previewSprite", void 0);
    __decorate([
        property(cc.Button)
    ], ThemeOption.prototype, "button", void 0);
    ThemeOption = __decorate([
        ccclass
    ], ThemeOption);
    return ThemeOption;
}(cc.Component));
exports.default = ThemeOption;

cc._RF.pop();