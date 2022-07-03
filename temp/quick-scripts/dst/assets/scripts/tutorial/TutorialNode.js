
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tutorial/TutorialNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '86728QrhvBIQ4yuj6TeNBOh', 'TutorialNode');
// scripts/tutorial/TutorialNode.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TutorialNode = /** @class */ (function (_super) {
    __extends(TutorialNode, _super);
    function TutorialNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.predefinedRows = [];
        _this.interactiveRows = []; // the beads that are allowed to move are stored in binary number (ex. 0b10000 for first [1] bead to be interactive)
        _this.completeValue = -1;
        return _this;
    }
    __decorate([
        property([cc.Integer])
    ], TutorialNode.prototype, "predefinedRows", void 0);
    __decorate([
        property([cc.Integer])
    ], TutorialNode.prototype, "interactiveRows", void 0);
    __decorate([
        property(cc.Integer)
    ], TutorialNode.prototype, "completeValue", void 0);
    TutorialNode = __decorate([
        ccclass
    ], TutorialNode);
    return TutorialNode;
}(cc.Component));
exports.default = TutorialNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdHV0b3JpYWxcXFR1dG9yaWFsTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQVNDO1FBUEcsb0JBQWMsR0FBYSxFQUFFLENBQUM7UUFHOUIscUJBQWUsR0FBYSxFQUFFLENBQUMsQ0FBQyxvSEFBb0g7UUFHcEosbUJBQWEsR0FBVyxDQUFDLENBQUMsQ0FBQzs7SUFDL0IsQ0FBQztJQVBHO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dEQUNPO0lBRzlCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lEQUNRO0lBRy9CO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUM7dURBQ0s7SUFSVixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBU2hDO0lBQUQsbUJBQUM7Q0FURCxBQVNDLENBVHlDLEVBQUUsQ0FBQyxTQUFTLEdBU3JEO2tCQVRvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdXRvcmlhbE5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KFtjYy5JbnRlZ2VyXSlcclxuICAgIHByZWRlZmluZWRSb3dzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuSW50ZWdlcl0pXHJcbiAgICBpbnRlcmFjdGl2ZVJvd3M6IG51bWJlcltdID0gW107IC8vIHRoZSBiZWFkcyB0aGF0IGFyZSBhbGxvd2VkIHRvIG1vdmUgYXJlIHN0b3JlZCBpbiBiaW5hcnkgbnVtYmVyIChleC4gMGIxMDAwMCBmb3IgZmlyc3QgWzFdIGJlYWQgdG8gYmUgaW50ZXJhY3RpdmUpXHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5JbnRlZ2VyKVxyXG4gICAgY29tcGxldGVWYWx1ZTogbnVtYmVyID0gLTE7XHJcbn1cclxuIl19