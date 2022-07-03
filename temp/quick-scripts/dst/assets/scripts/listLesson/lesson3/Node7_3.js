
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson3/Node7_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '983d5nL4ghFabJ5f1TpMjKz', 'Node7_3');
// scripts/listLesson/lesson3/Node7_3.ts

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
var Node7_3 = /** @class */ (function (_super) {
    __extends(Node7_3, _super);
    function Node7_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node7_3.prototype.onLoad = function () {
    };
    Node7_3.prototype.start = function () {
        this.setAction();
    };
    Node7_3.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.nodeBead[3].runAction(cc.moveTo(0.5, cc.v2(0, -201)));
            _this.label.string = "4";
            _this.label.node.active = true;
            _this.nodeHand.parent.active = true;
        });
        var action2 = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(1.0), action1, cc.delayTime(1.0), action2));
    };
    __decorate([
        property(cc.Label)
    ], Node7_3.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node7_3.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node7_3.prototype, "nodeBead", void 0);
    Node7_3 = __decorate([
        ccclass
    ], Node7_3);
    return Node7_3;
}(cc.Component));
exports.default = Node7_3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uM1xcTm9kZTdfMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWtDQztRQS9CRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFjLEVBQUUsQ0FBQzs7SUF5QjdCLENBQUM7SUF2Qkcsd0JBQU0sR0FBTjtJQUNBLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQUEsaUJBZUM7UUFkRyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7WUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NkNBQ0k7SUFUUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBa0MzQjtJQUFELGNBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ29DLEVBQUUsQ0FBQyxTQUFTLEdBa0NoRDtrQkFsQ29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlN18zIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIG5vZGVIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5Ob2RlXSlcclxuICAgIG5vZGVCZWFkOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHNldEFjdGlvbigpe1xyXG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlQmVhZFswXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSxjYy52MigwLDU1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMV0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMzApKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMl0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMTE1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbM10ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMjAxKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwiNFwiXHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24yID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlSGFuZC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxLjApLGFjdGlvbjEsY2MuZGVsYXlUaW1lKDEuMCksYWN0aW9uMikpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=