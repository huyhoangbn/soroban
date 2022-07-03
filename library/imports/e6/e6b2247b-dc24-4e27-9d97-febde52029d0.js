"use strict";
cc._RF.push(module, 'e6b22R73CROJ52X/r3lICnQ', 'Common');
// scripts/listLesson/Common.ts

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
var TutorialManager = /** @class */ (function (_super) {
    __extends(TutorialManager, _super);
    function TutorialManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressBar = null;
        _this.backSplash = null;
        _this.arrowNode = null;
        _this.listReference = [];
        _this.indexCurrent = null;
        return _this;
    }
    TutorialManager.prototype.onLoad = function () {
        this.progressBar.progress = 0;
        this.indexCurrent = 0;
    };
    TutorialManager.prototype.start = function () {
        this.listReference[0].active = true;
    };
    TutorialManager.prototype.update = function (dt) {
        if (this.indexCurrent >= this.listReference.length) {
            this.backSplash.active = true;
            this.listReference[this.indexCurrent - 1].active = false;
            this.indexCurrent -= 1;
        }
    };
    TutorialManager.prototype.loadMenu = function () {
        if (Global_1.Global.firstTime)
            Global_1.Global.firstTime = false;
        cc.director.loadScene("scenes/menu");
    };
    TutorialManager.prototype.loadListLesson = function () {
        if (Global_1.Global.firstTime)
            Global_1.Global.firstTime = false;
        cc.director.loadScene("scenes/listLesson");
    };
    TutorialManager.prototype.loadNextLesson = function () {
        var _this = this;
        var nextLesson = Global_1.Global.currentLesson + 1;
        console.error(nextLesson);
        console.error(typeof Global_1.Global.currentLesson);
        cc.resources.load("prefabs/lesson/Lesson" + nextLesson, cc.Prefab, function (error, asset) {
            if (error) {
                console.error(error);
            }
            else {
                var node = cc.instantiate(asset);
                node.setContentSize(cc.winSize.width, cc.winSize.height);
                _this.node.addChild(node);
                Global_1.Global.currentLesson = (Global_1.Global.currentLesson + 1);
            }
        });
    };
    TutorialManager.prototype.nextProgress = function () {
        this.progressBar.progress += 1 / (this.listReference.length - 1);
        this.indexCurrent += 1;
        if (this.indexCurrent >= this.listReference.length) {
            return;
        }
        this.listReference[this.indexCurrent].active = true;
        this.listReference[this.indexCurrent - 1].active = false;
    };
    __decorate([
        property(cc.ProgressBar)
    ], TutorialManager.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "backSplash", void 0);
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "arrowNode", void 0);
    __decorate([
        property([cc.Node])
    ], TutorialManager.prototype, "listReference", void 0);
    TutorialManager = __decorate([
        ccclass
    ], TutorialManager);
    return TutorialManager;
}(cc.Component));
exports.default = TutorialManager;

cc._RF.pop();