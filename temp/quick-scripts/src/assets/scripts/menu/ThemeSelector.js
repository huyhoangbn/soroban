"use strict";
cc._RF.push(module, 'b0722Q3P1RCRrMW7sb0U+Qs', 'ThemeSelector');
// scripts/menu/ThemeSelector.ts

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
var ThemeList_1 = require("../ThemeList");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ThemeSelector = /** @class */ (function (_super) {
    __extends(ThemeSelector, _super);
    function ThemeSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.themeOptionPrefab = null;
        _this.content = null;
        return _this;
    }
    ThemeSelector.prototype.onLoad = function () {
        var _this = this;
        var TOTAL = ThemeList_1.ThemeList.length;
        var CURRENT = 0;
        ThemeList_1.ThemeList.forEach(function (value, index) {
            var node = cc.instantiate(_this.themeOptionPrefab);
            _this.content.addChild(node);
            node.setPosition(0, index * -node.getBoundingBox().height);
            node.getComponent("ThemeOption").initialize(value).then(function () {
                CURRENT++;
                if (TOTAL == CURRENT) {
                    _this.content.height = TOTAL * node.getBoundingBox().height;
                    console.log("Theme selector initialized");
                }
            }).catch(function (error) {
                console.error(error);
            });
        });
    };
    __decorate([
        property(cc.Prefab)
    ], ThemeSelector.prototype, "themeOptionPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], ThemeSelector.prototype, "content", void 0);
    ThemeSelector = __decorate([
        ccclass
    ], ThemeSelector);
    return ThemeSelector;
}(cc.Component));
exports.default = ThemeSelector;

cc._RF.pop();