
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/menu/ThemeOption.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWVudVxcVGhlbWVPcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQW1DO0FBRTdCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBd0NDO1FBdENHLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFHaEMsWUFBTSxHQUFjLElBQUksQ0FBQzs7SUFnQzdCLENBQUM7SUE5QkcsZ0NBQVUsR0FBVixVQUFXLElBQVk7UUFBdkIsaUJBdUJDO1FBdEJHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLLEVBQUUsS0FBcUI7Z0JBQ2hHLElBQUcsS0FBSyxFQUFFO29CQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzVDO2dCQUVELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUM1QixLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBRTdCLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFFdkMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO2dCQUM1QyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQzdDLGlCQUFpQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBRXpDLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUVoRCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsS0FBVSxFQUFFLGVBQXVCO1FBQzlDLGVBQU0sQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDO1FBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDTztJQUczQjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNXO0lBR2hDO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ0k7SUFSUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBd0MvQjtJQUFELGtCQUFDO0NBeENELEFBd0NDLENBeEN3QyxFQUFFLENBQUMsU0FBUyxHQXdDcEQ7a0JBeENvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0dsb2JhbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVtZU9wdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkgKGNjLkxhYmVsKVxyXG4gICAgbmFtZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5TcHJpdGUpXHJcbiAgICBwcmV2aWV3U3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuQnV0dG9uKVxyXG4gICAgYnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIGluaXRpYWxpemUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJ0aGVtZXMvXCIgKyBuYW1lICsgXCIvYmVhZF9pbmFjdGl2ZVwiLCBjYy5TcHJpdGVGcmFtZSwgKGVycm9yLCBhc3NldDogY2MuU3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yLm5hbWUgKyBcIiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5hbWVbMF0udG9Mb2NhbGVVcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZyA9IG5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3U3ByaXRlLnNwcml0ZUZyYW1lID0gYXNzZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiVGhlbWVPcHRpb25cIjtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImJ1dHRvbkNhbGxiYWNrXCI7XHJcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBuYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoXCJcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbkNhbGxiYWNrKGV2ZW50OiBhbnksIGN1c3RvbUV2ZW50RGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgR2xvYmFsLnJlc291cmNlUGFjayA9IGN1c3RvbUV2ZW50RGF0YTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VkIHRvIFwiICsgY3VzdG9tRXZlbnREYXRhKTtcclxuICAgIH1cclxufVxyXG4iXX0=