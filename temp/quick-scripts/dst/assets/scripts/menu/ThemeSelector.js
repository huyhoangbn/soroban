
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/menu/ThemeSelector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWVudVxcVGhlbWVTZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBeUM7QUFDbkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUE4QkM7UUE1QkcsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBR3BDLGFBQU8sR0FBWSxJQUFJLENBQUM7O0lBeUI1QixDQUFDO0lBdkJHLDhCQUFNLEdBQU47UUFBQSxpQkFzQkM7UUFyQkcsSUFBTSxLQUFLLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLHFCQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDM0IsSUFBSSxJQUFJLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUUzRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNwRCxPQUFPLEVBQUUsQ0FBQztnQkFFVixJQUFHLEtBQUssSUFBSSxPQUFPLEVBQUU7b0JBQ2pCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDO29CQUUzRCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7aUJBQzdDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBM0JEO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUM7NERBQ2U7SUFHcEM7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSztJQUxQLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0E4QmpDO0lBQUQsb0JBQUM7Q0E5QkQsQUE4QkMsQ0E5QjBDLEVBQUUsQ0FBQyxTQUFTLEdBOEJ0RDtrQkE5Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZUxpc3QgfSBmcm9tIFwiLi4vVGhlbWVMaXN0XCI7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVTZWxlY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkgKGNjLlByZWZhYilcclxuICAgIHRoZW1lT3B0aW9uUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zdCBUT1RBTCA9IFRoZW1lTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgbGV0IENVUlJFTlQgPSAwO1xyXG5cclxuICAgICAgICBUaGVtZUxpc3QuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aGVtZU9wdGlvblByZWZhYik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgaW5kZXggKiAtbm9kZS5nZXRCb3VuZGluZ0JveCgpLmhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChcIlRoZW1lT3B0aW9uXCIpLmluaXRpYWxpemUodmFsdWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ1VSUkVOVCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKFRPVEFMID09IENVUlJFTlQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuaGVpZ2h0ID0gVE9UQUwgKiBub2RlLmdldEJvdW5kaW5nQm94KCkuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZW1lIHNlbGVjdG9yIGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19