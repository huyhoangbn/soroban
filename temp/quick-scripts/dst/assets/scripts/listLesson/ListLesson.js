
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/ListLesson.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2729fpapghK77QQnB4jImdu', 'ListLesson');
// scripts/listLesson/ListLesson.ts

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
var ListLesson = /** @class */ (function (_super) {
    __extends(ListLesson, _super);
    function ListLesson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListLesson.prototype.start = function () {
    };
    ListLesson.prototype.onBackMenu = function () {
        cc.director.loadScene("scenes/menu");
    };
    ListLesson.prototype.loadPrefab = function (evt, data) {
        var _this = this;
        console.error(data);
        cc.resources.load("prefabs/lesson/Lesson" + data, cc.Prefab, function (error, asset) {
            if (error) {
                console.error(error);
            }
            else {
                var node = cc.instantiate(asset);
                node.setContentSize(cc.winSize.width, cc.winSize.height);
                _this.node.addChild(node);
                Global_1.Global.currentLesson = parseInt(data);
            }
        });
    };
    ListLesson = __decorate([
        ccclass
    ], ListLesson);
    return ListLesson;
}(cc.Component));
exports.default = ListLesson;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcTGlzdExlc3Nvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBbUM7QUFDN0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7O0lBbUJBLENBQUM7SUFsQkcsMEJBQUssR0FBTDtJQUNBLENBQUM7SUFDRCwrQkFBVSxHQUFWO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELCtCQUFVLEdBQVYsVUFBVyxHQUFHLEVBQUUsSUFBSTtRQUFwQixpQkFZQztRQVhHLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFZLEVBQUUsS0FBZ0I7WUFDeEYsSUFBRyxLQUFLLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtpQkFBTTtnQkFDSCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pELEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixlQUFNLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWxCZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQW1COUI7SUFBRCxpQkFBQztDQW5CRCxBQW1CQyxDQW5CdUMsRUFBRSxDQUFDLFNBQVMsR0FtQm5EO2tCQW5Cb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9HbG9iYWxcIjtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0TGVzc29uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgIH1cclxuICAgIG9uQmFja01lbnUoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbmVzL21lbnVcIik7XHJcbiAgICB9XHJcbiAgICBsb2FkUHJlZmFiKGV2dCwgZGF0YSl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKTtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvbGVzc29uL0xlc3NvblwiICsgZGF0YSwgY2MuUHJlZmFiLCAoZXJyb3I6IEVycm9yLCBhc3NldDogY2MuUHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoYXNzZXQpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuY3VycmVudExlc3NvbiA9IHBhcnNlSW50KGRhdGEpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=