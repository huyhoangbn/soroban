
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tutorial/TutorialManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdHV0b3JpYWxcXFR1dG9yaWFsTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBbUM7QUFFN0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFtSUM7UUFqSUcsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBQ2hDLHNCQUFnQixHQUFXLElBQUksQ0FBQztRQUVoQyxtQkFBYSxHQUFXLElBQUksQ0FBQzs7SUFnSGpDLENBQUM7SUE5R0csZ0NBQU0sR0FBTjtRQUFBLGlCQWdDQztRQS9CRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFakMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZUFBTSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBWSxFQUFFLEtBQWdCO1lBQ3RHLElBQUcsS0FBSyxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0gsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFakMsT0FBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7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bnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0dsb2JhbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdXRvcmlhbE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbG9hZGluZ1NjcmVlbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgYWJhY3VzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBtYWluVHV0b3JpYWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIGFycm93Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgYmFja1NwbGFzaDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgdHV0b3JpYWxQYXJ0czogY2MuTm9kZVtdID0gbnVsbDtcclxuICAgIGN1cnJlbnRQYXJ0SW5kZXg6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgY29tcGxldGVWYWx1ZTogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2NyZWVuLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy90dXRvcmlhbC9cIiArIEdsb2JhbC5jdXJyZW50VHV0b3JpYWwsIGNjLlByZWZhYiwgKGVycm9yOiBFcnJvciwgYXNzZXQ6IGNjLlByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKGFzc2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZShub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBub2RlLmNoaWxkcmVuWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVHV0b3JpYWwuYWRkQ2hpbGQodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGVkIVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFiYWN1cy5nZXRDb21wb25lbnQoXCJBYmFjdXNcIikuaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihHbG9iYWwuZmlyc3RUaW1lKSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiQmFja1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VHV0b3JpYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTY3JlZW4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLmNvbXBsZXRlVmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmFiYWN1cy5nZXRDb21wb25lbnQoXCJBYmFjdXNcIikuc2NvcmUgPT0gdGhpcy5jb21wbGV0ZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVWYWx1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblRvdWNoU3RhcnQobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE1lbnUoKSB7XHJcbiAgICAgICAgaWYoR2xvYmFsLmZpcnN0VGltZSkgR2xvYmFsLmZpcnN0VGltZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzY2VuZXMvbWVudVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFR1dG9yaWFsKCkge1xyXG4gICAgICAgIHRoaXMudHV0b3JpYWxQYXJ0cyA9IHRoaXMubWFpblR1dG9yaWFsLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZVR1dG9yaWFsUGFydCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUdXRvcmlhbFBhcnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBpbmRleCBvZiB0dXRvcmlhbCBwYXJ0IVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PSB0aGlzLnR1dG9yaWFsUGFydHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja1NwbGFzaC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFycm93Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50UGFydEluZGV4ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy50dXRvcmlhbFBhcnRzW3RoaXMuY3VycmVudFBhcnRJbmRleF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRQYXJ0SW5kZXggPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnR1dG9yaWFsUGFydHNbdGhpcy5jdXJyZW50UGFydEluZGV4XTtcclxuICAgICAgICBsZXQgc2NyaXB0ID0gbm9kZS5nZXRDb21wb25lbnQoXCJUdXRvcmlhbE5vZGVcIik7XHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyByZXNldCBhYmFjdXMgdG8gbm9ybWFsIHN0YXRlIChldmVyeXRoaW5nIG9uIDAgYW5kIG5vdCBpbnRlcmFjdGl2ZSlcclxuICAgICAgICB0aGlzLmFiYWN1cy5nZXRDb21wb25lbnQoXCJBYmFjdXNcIikucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmFiYWN1cy5nZXRDb21wb25lbnQoXCJBYmFjdXNcIikuc2V0SW50ZXJhY3RpdmUoZmFsc2UpO1xyXG5cclxuICAgICAgICBpZihzY3JpcHQucHJlZGVmaW5lZFJvd3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2NyaXB0LnByZWRlZmluZWRSb3dzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFiYWN1cy5nZXRDb21wb25lbnQoXCJBYmFjdXNcIikuc2V0Um93VmFsdWUoaSwgc2NyaXB0LnByZWRlZmluZWRSb3dzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoc2NyaXB0LmludGVyYWN0aXZlUm93cy5sZW5ndGggPiAwICYmIHNjcmlwdC5jb21wbGV0ZVZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNjcmlwdC5pbnRlcmFjdGl2ZVJvd3MubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWJhY3VzLmdldENvbXBvbmVudChcIkFiYWN1c1wiKS5zZXRSb3dJbnRlcmFjdGl2ZShpLCBzY3JpcHQuaW50ZXJhY3RpdmVSb3dzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZVZhbHVlID0gc2NyaXB0LmNvbXBsZXRlVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGUgdmFsdWU6IFwiICsgdGhpcy5jb21wbGV0ZVZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3dOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3dOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5vZGUgbmFtZTogXCIgKyBub2RlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VUdXRvcmlhbFBhcnQodGhpcy5jdXJyZW50UGFydEluZGV4ICsgMSk7XHJcbiAgICB9XHJcbn1cclxuIl19