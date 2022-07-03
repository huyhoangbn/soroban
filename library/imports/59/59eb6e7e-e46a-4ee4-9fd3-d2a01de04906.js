"use strict";
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