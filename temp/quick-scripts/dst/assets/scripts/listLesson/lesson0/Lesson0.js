
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson0/Lesson0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2abebBym7FFtpgs0w2LvT06', 'Lesson0');
// scripts/listLesson/lesson0/Lesson0.ts

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
var Lesson0 = /** @class */ (function (_super) {
    __extends(Lesson0, _super);
    function Lesson0() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelText = null;
        // onLoad () {}
        _this.listReference = [];
        _this.arrow = null;
        _this.animHand = null;
        return _this;
        // runAction(action){
        //     this.node.stopAllActions();
        //     this.node.runAction(action);
        // }
    }
    Lesson0.prototype.start = function () {
        this.setAction();
    };
    Lesson0.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.arrow.active = false;
            _this.listReference[0].active = true;
            _this.listReference[1].active = false;
            _this.listReference[2].active = false;
        });
        var action2 = cc.callFunc(function () {
            _this.animHand.setPosition(-120, -200);
            _this.listReference[0].active = false;
            _this.listReference[1].active = true;
            _this.listReference[2].active = false;
        });
        var action3 = cc.callFunc(function () {
            _this.animHand.runAction(cc.moveTo(0.1, cc.v2(-940, -200)));
        });
        var action4 = cc.callFunc(function () {
            _this.listReference[0].active = false;
            _this.listReference[1].active = false;
            _this.listReference[2].active = true;
            _this.arrow.active = true;
        });
        this.node.runAction(cc.sequence(action1, cc.delayTime(2.5), action2, cc.delayTime(2.0), action3, cc.delayTime(3.0), action4));
    };
    __decorate([
        property(cc.Label)
    ], Lesson0.prototype, "labelText", void 0);
    __decorate([
        property([cc.Node])
    ], Lesson0.prototype, "listReference", void 0);
    __decorate([
        property(cc.Node)
    ], Lesson0.prototype, "arrow", void 0);
    __decorate([
        property(cc.Node)
    ], Lesson0.prototype, "animHand", void 0);
    Lesson0 = __decorate([
        ccclass
    ], Lesson0);
    return Lesson0;
}(cc.Component));
exports.default = Lesson0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uMFxcTGVzc29uMC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXdEQztRQXRERyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGVBQWU7UUFFZixtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUc5QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLGNBQVEsR0FBWSxJQUFJLENBQUM7O1FBeUN6QixxQkFBcUI7UUFDckIsa0NBQWtDO1FBQ2xDLG1DQUFtQztRQUNuQyxJQUFJO0lBQ1IsQ0FBQztJQTFDRyx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQUEsaUJBZ0NDO1FBL0JHLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNwQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDckMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNyQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDcEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDckMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNwQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDZixFQUFFLENBQUMsUUFBUSxDQUNDLE9BQU8sRUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxFQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE9BQU8sQ0FBQyxDQUN2QixDQUFBO0lBQ0wsQ0FBQztJQWhERDtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2tEQUNTO0lBRzlCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFHdEI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQVhSLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F3RDNCO0lBQUQsY0FBQztDQXhERCxBQXdEQyxDQXhEb0MsRUFBRSxDQUFDLFNBQVMsR0F3RGhEO2tCQXhEb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVzc29uMCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkgKGNjLkxhYmVsKVxyXG4gICAgbGFiZWxUZXh0OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIEBwcm9wZXJ0eSAoW2NjLk5vZGVdKVxyXG4gICAgbGlzdFJlZmVyZW5jZTogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgYXJyb3c6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIGFuaW1IYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmFycm93LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0UmVmZXJlbmNlWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbMl0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbUhhbmQuc2V0UG9zaXRpb24oLTEyMCwtMjAwKTtcclxuICAgICAgICAgICAgdGhpcy5saXN0UmVmZXJlbmNlWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0UmVmZXJlbmNlWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGFjdGlvbjMgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1IYW5kLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC4xLGNjLnYyKC05NDAsLTIwMCkpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb240ID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5saXN0UmVmZXJlbmNlWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFJlZmVyZW5jZVsyXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFycm93LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIuNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgyLjApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMy4wKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uNClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcnVuQWN0aW9uKGFjdGlvbil7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==