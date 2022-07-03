
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/Common.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcQ29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUFtQztBQUc3QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXNFQztRQW5FRyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFHbkMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUU5QixrQkFBWSxHQUFXLElBQUksQ0FBQzs7SUF3RGhDLENBQUM7SUF0REcsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUM7WUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFHLGVBQU0sQ0FBQyxTQUFTO1lBQUUsZUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDOUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFDSSxJQUFHLGVBQU0sQ0FBQyxTQUFTO1lBQUUsZUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDOUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsd0NBQWMsR0FBZDtRQUFBLGlCQWNDO1FBYkcsSUFBSSxVQUFVLEdBQUcsZUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sZUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFVBQVUsRUFBRyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBWSxFQUFFLEtBQWdCO1lBQy9GLElBQUcsS0FBSyxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0gsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6RCxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsZUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLGVBQU0sQ0FBQyxhQUFhLEdBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7UUFFdkIsSUFBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFDO1lBQzlDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQWpFRDtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsV0FBVyxDQUFDO3dEQUNTO0lBR25DO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDTztJQUcxQjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzswREFDUztJQVpiLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FzRW5DO0lBQUQsc0JBQUM7Q0F0RUQsQUFzRUMsQ0F0RTRDLEVBQUUsQ0FBQyxTQUFTLEdBc0V4RDtrQkF0RW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vR2xvYmFsXCI7XHJcbmltcG9ydCAqIGFzICBMaXN0TGVzc29uICBmcm9tIFwiLi9MaXN0TGVzc29uXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1dG9yaWFsTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Qcm9ncmVzc0JhcilcclxuICAgIHByb2dyZXNzQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgYmFja1NwbGFzaDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgYXJyb3dOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5Ob2RlXSlcclxuICAgIGxpc3RSZWZlcmVuY2U6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIGluZGV4Q3VycmVudDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5pbmRleEN1cnJlbnQgPSAwO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5pbmRleEN1cnJlbnQgPj0gdGhpcy5saXN0UmVmZXJlbmNlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja1NwbGFzaC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbdGhpcy5pbmRleEN1cnJlbnQtMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXhDdXJyZW50IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRNZW51KCkge1xyXG4gICAgICAgIGlmKEdsb2JhbC5maXJzdFRpbWUpIEdsb2JhbC5maXJzdFRpbWUgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzY2VuZXMvbWVudVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGlzdExlc3NvbigpIHtcclxuICAgICAgICBpZihHbG9iYWwuZmlyc3RUaW1lKSBHbG9iYWwuZmlyc3RUaW1lID0gZmFsc2U7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbmVzL2xpc3RMZXNzb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE5leHRMZXNzb24oKXtcclxuICAgICAgICBsZXQgbmV4dExlc3NvbiA9IEdsb2JhbC5jdXJyZW50TGVzc29uICsgMTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKG5leHRMZXNzb24pO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IodHlwZW9mIEdsb2JhbC5jdXJyZW50TGVzc29uKTtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvbGVzc29uL0xlc3NvblwiICsgbmV4dExlc3NvbiAsIGNjLlByZWZhYiwgKGVycm9yOiBFcnJvciwgYXNzZXQ6IGNjLlByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKGFzc2V0KTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0Q29udGVudFNpemUoY2Mud2luU2l6ZS53aWR0aCwgY2Mud2luU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRMZXNzb24gPSAoR2xvYmFsLmN1cnJlbnRMZXNzb24rMSk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFByb2dyZXNzKCl7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyArPSAxIC8gKHRoaXMubGlzdFJlZmVyZW5jZS5sZW5ndGgtMSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5kZXhDdXJyZW50ICs9IDE7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaW5kZXhDdXJyZW50ID49IHRoaXMubGlzdFJlZmVyZW5jZS5sZW5ndGgpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlzdFJlZmVyZW5jZVt0aGlzLmluZGV4Q3VycmVudF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbdGhpcy5pbmRleEN1cnJlbnQtMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiBcclxufVxyXG4iXX0=