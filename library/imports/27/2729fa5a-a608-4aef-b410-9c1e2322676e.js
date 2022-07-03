"use strict";
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