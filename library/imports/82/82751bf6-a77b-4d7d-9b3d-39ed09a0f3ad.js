"use strict";
cc._RF.push(module, '82751v2p3tNfZs9Oe0JoPOt', 'TutorialManager');
// scripts/tutorial/TutorialManager.ts

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
        _this.loadingScreen = null;
        _this.abacus = null;
        _this.mainTutorial = null;
        _this.arrowNode = null;
        _this.backSplash = null;
        _this.tutorialParts = null;
        _this.currentPartIndex = null;
        _this.completeValue = null;
        return _this;
    }
    TutorialManager.prototype.onLoad = function () {
        var _this = this;
        this.loadingScreen.active = true;
        cc.resources.load("prefabs/tutorial/" + Global_1.Global.currentTutorial, cc.Prefab, function (error, asset) {
            if (error) {
                console.error(error);
            }
            else {
                var node = cc.instantiate(asset);
                while (node.children.length > 0) {
                    var value = node.children[0];
                    value.removeFromParent();
                    _this.mainTutorial.addChild(value);
                    console.log("Added!");
                }
                node.destroy();
                _this.abacus.getComponent("Abacus").initialize().then(function () {
                    _this.node.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart, _this);
                    if (Global_1.Global.firstTime)
                        _this.node.parent.getChildByName("Back").active = false;
                    _this.startTutorial();
                    _this.loadingScreen.active = false;
                }).catch(function (error) { return console.error(error); });
            }
        });
    };
    TutorialManager.prototype.update = function (dt) {
        if (this.completeValue != null) {
            if (this.abacus.getComponent("Abacus").score == this.completeValue) {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
                this.completeValue = null;
                this.onTouchStart(null);
            }
        }
    };
    TutorialManager.prototype.loadMenu = function () {
        if (Global_1.Global.firstTime)
            Global_1.Global.firstTime = false;
        cc.director.loadScene("scenes/menu");
    };
    TutorialManager.prototype.startTutorial = function () {
        this.tutorialParts = this.mainTutorial.children;
        this.changeTutorialPart(0);
    };
    TutorialManager.prototype.changeTutorialPart = function (value) {
        if (value < 0) {
            console.error("Invalid index of tutorial part!");
            return;
        }
        else if (value == this.tutorialParts.length) {
            this.backSplash.active = true;
            this.arrowNode.active = false;
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            return;
        }
        if (this.currentPartIndex != null) {
            this.tutorialParts[this.currentPartIndex].active = false;
        }
        this.currentPartIndex = value;
        var node = this.tutorialParts[this.currentPartIndex];
        var script = node.getComponent("TutorialNode");
        node.active = true;
        // reset abacus to normal state (everything on 0 and not interactive)
        this.abacus.getComponent("Abacus").reset();
        this.abacus.getComponent("Abacus").setInteractive(false);
        if (script.predefinedRows.length > 0) {
            for (var i = 0; i < script.predefinedRows.length; ++i) {
                this.abacus.getComponent("Abacus").setRowValue(i, script.predefinedRows[i]);
            }
        }
        if (script.interactiveRows.length > 0 && script.completeValue >= 0) {
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            for (var i = 0; i < script.interactiveRows.length; ++i) {
                this.abacus.getComponent("Abacus").setRowInteractive(i, script.interactiveRows[i]);
            }
            this.completeValue = script.completeValue;
            console.log("Complete value: " + this.completeValue);
            this.arrowNode.active = false;
        }
        else {
            this.arrowNode.active = true;
        }
        console.log("Node name: " + node.name);
    };
    TutorialManager.prototype.onTouchStart = function (event) {
        this.changeTutorialPart(this.currentPartIndex + 1);
    };
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "loadingScreen", void 0);
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "abacus", void 0);
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "mainTutorial", void 0);
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "arrowNode", void 0);
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "backSplash", void 0);
    TutorialManager = __decorate([
        ccclass
    ], TutorialManager);
    return TutorialManager;
}(cc.Component));
exports.default = TutorialManager;

cc._RF.pop();