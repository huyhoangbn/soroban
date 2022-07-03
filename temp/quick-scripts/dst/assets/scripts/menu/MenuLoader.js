
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/menu/MenuLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59eb65+5GpO5J/T0qAd4EkG', 'MenuLoader');
// scripts/menu/MenuLoader.ts

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
var SoundManager = require("../manager/SoundManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuLoader = /** @class */ (function (_super) {
    __extends(MenuLoader, _super);
    function MenuLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menu = null;
        _this.challengeChoser = null;
        _this.tutorialChoser = null;
        _this.themeSelector = null;
        _this.miniGame = null;
        _this.startView = null;
        return _this;
    }
    MenuLoader.prototype.loadPlayground = function () {
        SoundManager.instance.playMouse();
        cc.director.loadScene("scenes/playground");
    };
    MenuLoader.prototype.loadListLesson = function (event, value) {
        SoundManager.instance.playMouse();
        cc.director.loadScene("scenes/listLesson");
        Global_1.Global.currentLesson = 0;
    };
    MenuLoader.prototype.loadLessonCurrent = function () {
        var _this = this;
        console.error(Global_1.Global.currentLesson);
        cc.resources.load("prefabs/lesson/Lesson" + Global_1.Global.currentLesson, cc.Prefab, function (error, asset) {
            if (error) {
                console.error(error);
            }
            else {
                console.error("Ok:", Global_1.Global.currentLesson);
                var node = cc.instantiate(asset);
                node.setContentSize(cc.winSize.width, cc.winSize.height);
                _this.startView.addChild(node);
            }
        });
    };
    MenuLoader.prototype.loadChallenge = function (event, value) {
        SoundManager.instance.playMouse();
        if (value == "addition" || value == "subtraction" || value == "multiplication" || value == "division") {
            Global_1.Global.currentChallenge = value;
            cc.director.loadScene("scenes/challenge");
        }
    };
    MenuLoader.prototype.loadTutorial = function (event, value) {
        SoundManager.instance.playMouse();
        if (value == "Basics" || value == "Addition" || value == "Subtraction") {
            Global_1.Global.currentTutorial = value;
            cc.director.loadScene("scenes/tutorial");
        }
        else if (value == "SMultiplication") {
            Global_1.Global.currentTutorial = value;
            cc.director.loadScene("scenes/tutorial_smul");
        }
        else if (value == "DMultiplication" || value == "Division") {
            Global_1.Global.currentTutorial = value;
            cc.director.loadScene("scenes/tutorial_ex");
        }
        else
            console.error("Invalid argument in MenuLoader.loadTutorial!");
    };
    MenuLoader.prototype.loadMiniGame = function (event, value) {
        var _this = this;
        SoundManager.instance.playMouse();
        cc.resources.load("prefabs/miniGame/" + value, cc.Prefab, function (error, asset) {
            if (error) {
                console.error(error);
            }
            else {
                var node = cc.instantiate(asset);
                _this.miniGame.addChild(node);
            }
        });
    };
    MenuLoader.prototype.switchLayout = function (event, value) {
        SoundManager.instance.playMouse();
        if (value == "menu") {
            this.menu.active = true;
            this.themeSelector.active = false;
            this.tutorialChoser.active = false;
            this.challengeChoser.active = false;
            this.startView.active = false;
            this.miniGame.active = false;
        }
        else if (value == "challenge") {
            this.menu.active = false;
            this.challengeChoser.active = true;
        }
        else if (value == "tutorial") {
            this.menu.active = false;
            this.tutorialChoser.active = true;
        }
        else if (value == "themeSelector") {
            this.themeSelector.active = true;
        }
        else if (value == "startView") {
            this.startView.active = true;
        }
        else if (value == "miniGame") {
            this.menu.active = false;
            this.startView.active = false;
            this.miniGame.active = true;
        }
    };
    MenuLoader.prototype.editBoxChanged = function (editBox) {
        Global_1.Global.resourcePack = editBox.string;
    };
    MenuLoader.prototype.onClickSound = function (event, value) {
        SoundManager.instance.playMouse();
        var music = cc.sys.localStorage.getItem("music");
        var state = '';
        if (music == "off") {
            event.currentTarget.opacity = 255;
            SoundManager.instance.playMusic();
            state = 'on';
        }
        else {
            event.currentTarget.opacity = 180;
            SoundManager.instance.stopMusic();
            state = 'off';
        }
        cc.sys.localStorage.setItem("music", state);
    };
    __decorate([
        property(cc.Node)
    ], MenuLoader.prototype, "menu", void 0);
    __decorate([
        property(cc.Node)
    ], MenuLoader.prototype, "challengeChoser", void 0);
    __decorate([
        property(cc.Node)
    ], MenuLoader.prototype, "tutorialChoser", void 0);
    __decorate([
        property(cc.Node)
    ], MenuLoader.prototype, "themeSelector", void 0);
    __decorate([
        property(cc.Node)
    ], MenuLoader.prototype, "miniGame", void 0);
    __decorate([
        property(cc.Node)
    ], MenuLoader.prototype, "startView", void 0);
    MenuLoader = __decorate([
        ccclass
    ], MenuLoader);
    return MenuLoader;
}(cc.Component));
exports.default = MenuLoader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWVudVxcTWVudUxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBbUM7QUFDbkMsc0RBQXVEO0FBR2pELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBZ0lDO1FBOUhHLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFHaEMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQVksSUFBSSxDQUFDOztJQStHOUIsQ0FBQztJQTdHRyxtQ0FBYyxHQUFkO1FBQ0ksWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxtQ0FBYyxHQUFkLFVBQWUsS0FBVSxFQUFFLEtBQWE7UUFDcEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzNDLGVBQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxzQ0FBaUIsR0FBakI7UUFBQSxpQkFZQztRQVhHLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLGVBQU0sQ0FBQyxhQUFhLEVBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQVks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QyxFQUFFLENBQUMsU0FBUyxHQWdJbkQ7a0JBaElvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0dsb2JhbFwiO1xyXG5pbXBvcnQgKiBhcyBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvU291bmRNYW5hZ2VyXCJcclxuaW1wb3J0ICogYXMgTGlzdExlc3NvbiBmcm9tIFwiLi4vbGlzdExlc3Nvbi9MaXN0TGVzc29uXCJcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUxvYWRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBtZW51OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBjaGFsbGVuZ2VDaG9zZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIHR1dG9yaWFsQ2hvc2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICB0aGVtZVNlbGVjdG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBtaW5pR2FtZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgc3RhcnRWaWV3OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgbG9hZFBsYXlncm91bmQoKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLnBsYXlNb3VzZSgpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lcy9wbGF5Z3JvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgbG9hZExpc3RMZXNzb24oZXZlbnQ6IGFueSwgdmFsdWU6IHN0cmluZyl7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLnBsYXlNb3VzZSgpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lcy9saXN0TGVzc29uXCIpO1xyXG4gICAgICAgIEdsb2JhbC5jdXJyZW50TGVzc29uID0gMDtcclxuICAgIH1cclxuICAgIGxvYWRMZXNzb25DdXJyZW50KCl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihHbG9iYWwuY3VycmVudExlc3Nvbik7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL2xlc3Nvbi9MZXNzb25cIiArIEdsb2JhbC5jdXJyZW50TGVzc29uICAsIGNjLlByZWZhYiwgKGVycm9yOiBFcnJvciwgYXNzZXQ6IGNjLlByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiT2s6XCIsR2xvYmFsLmN1cnJlbnRMZXNzb24pO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShhc3NldCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldENvbnRlbnRTaXplKGNjLndpblNpemUud2lkdGgsIGNjLndpblNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRWaWV3LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRDaGFsbGVuZ2UoZXZlbnQ6IGFueSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5pbnN0YW5jZS5wbGF5TW91c2UoKTtcclxuICAgICAgICBpZih2YWx1ZSA9PSBcImFkZGl0aW9uXCIgfHwgdmFsdWUgPT0gXCJzdWJ0cmFjdGlvblwiIHx8IHZhbHVlID09IFwibXVsdGlwbGljYXRpb25cIiB8fCB2YWx1ZSA9PSBcImRpdmlzaW9uXCIpIHtcclxuICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRDaGFsbGVuZ2UgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lcy9jaGFsbGVuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUdXRvcmlhbChldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLnBsYXlNb3VzZSgpO1xyXG4gICAgICAgIGlmKHZhbHVlID09IFwiQmFzaWNzXCIgfHwgdmFsdWUgPT0gXCJBZGRpdGlvblwiIHx8IHZhbHVlID09IFwiU3VidHJhY3Rpb25cIikge1xyXG4gICAgICAgICAgICBHbG9iYWwuY3VycmVudFR1dG9yaWFsID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzY2VuZXMvdHV0b3JpYWxcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09IFwiU011bHRpcGxpY2F0aW9uXCIpIHtcclxuICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRUdXRvcmlhbCA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbmVzL3R1dG9yaWFsX3NtdWxcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09IFwiRE11bHRpcGxpY2F0aW9uXCIgfHwgdmFsdWUgPT0gXCJEaXZpc2lvblwiKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbC5jdXJyZW50VHV0b3JpYWwgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lcy90dXRvcmlhbF9leFwiKTtcclxuICAgICAgICB9IGVsc2UgY29uc29sZS5lcnJvcihcIkludmFsaWQgYXJndW1lbnQgaW4gTWVudUxvYWRlci5sb2FkVHV0b3JpYWwhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRNaW5pR2FtZShldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLnBsYXlNb3VzZSgpO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9taW5pR2FtZS9cIiArIHZhbHVlLCBjYy5QcmVmYWIsIChlcnJvcjogRXJyb3IsIGFzc2V0OiBjYy5QcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShhc3NldCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbmlHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaExheW91dChldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLnBsYXlNb3VzZSgpO1xyXG4gICAgICAgIGlmKHZhbHVlID09IFwibWVudVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRoZW1lU2VsZWN0b3IuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWxDaG9zZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbGxlbmdlQ2hvc2VyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Vmlldy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5taW5pR2FtZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT0gXCJjaGFsbGVuZ2VcIikge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbGxlbmdlQ2hvc2VyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09IFwidHV0b3JpYWxcIikge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWxDaG9zZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT0gXCJ0aGVtZVNlbGVjdG9yXCIpIHtcclxuICAgICAgICAgICAgdGhpcy50aGVtZVNlbGVjdG9yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09IFwic3RhcnRWaWV3XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFZpZXcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT0gXCJtaW5pR2FtZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFZpZXcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubWluaUdhbWUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdEJveENoYW5nZWQoZWRpdEJveDogY2MuRWRpdEJveCkge1xyXG4gICAgICAgIEdsb2JhbC5yZXNvdXJjZVBhY2sgPSBlZGl0Qm94LnN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrU291bmQoZXZlbnQ6IGFueSwgdmFsdWU6IHN0cmluZyl7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLnBsYXlNb3VzZSgpO1xyXG4gICAgICAgIGxldCBtdXNpYyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm11c2ljXCIpO1xyXG4gICAgICAgIGxldCBzdGF0ZSA9ICcnO1xyXG4gICAgICAgIGlmIChtdXNpYyA9PSBcIm9mZlwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQub3BhY2l0eSA9IDI1NVxyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuaW5zdGFuY2UucGxheU11c2ljKCk7XHJcbiAgICAgICAgICAgIHN0YXRlID0gJ29uJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQub3BhY2l0eSA9IDE4MFxyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuaW5zdGFuY2Uuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIHN0YXRlID0gJ29mZic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljXCIsIHN0YXRlKTtcclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==