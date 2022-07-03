
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson1/Lesson1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb34fuJhhZKzbU4JVokLFw5', 'Lesson1');
// scripts/listLesson/lesson1/Lesson1.ts

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
var Blink = /** @class */ (function (_super) {
    __extends(Blink, _super);
    function Blink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeKhung = null;
        _this.listVbar = null;
        _this.middleBar = null;
        _this.listBear = null;
        _this.labelText = null;
        return _this;
    }
    // onLoad () {}
    Blink.prototype.start = function () {
        this.setAction();
    };
    Blink.prototype.setAction = function () {
        var _this = this;
        var blinkAction = cc.repeat(cc.sequence(cc.blink(0.1, 1), cc.delayTime(0.1)), 10);
        var action1 = cc.callFunc(function () {
            _this.nodeKhung.runAction(blinkAction);
            _this.labelText.string = "Khung ngoài";
        });
        var action2 = cc.callFunc(function () {
            _this.listVbar.runAction(blinkAction);
            _this.labelText.string = "Cột dọc";
        });
        var action3 = cc.callFunc(function () {
            _this.middleBar.runAction(blinkAction);
            _this.labelText.string = "Thanh giá trị ngang";
        });
        var action4 = cc.callFunc(function () {
            _this.listBear.runAction(blinkAction);
            _this.labelText.string = "Hạt giá trị";
        });
        this.node.runAction(cc.sequence(action1, cc.delayTime(3), action2, cc.delayTime(3), action3, cc.delayTime(3), action4));
    };
    __decorate([
        property(cc.Node)
    ], Blink.prototype, "nodeKhung", void 0);
    __decorate([
        property(cc.Node)
    ], Blink.prototype, "listVbar", void 0);
    __decorate([
        property(cc.Node)
    ], Blink.prototype, "middleBar", void 0);
    __decorate([
        property(cc.Node)
    ], Blink.prototype, "listBear", void 0);
    __decorate([
        property(cc.Label)
    ], Blink.prototype, "labelText", void 0);
    Blink = __decorate([
        ccclass
    ], Blink);
    return Blink;
}(cc.Component));
exports.default = Blink;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uMVxcTGVzc29uMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQXlDQztRQXZDRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBYSxJQUFJLENBQUM7O0lBMkIvQixDQUFDO0lBMUJHLGVBQWU7SUFFZixxQkFBSyxHQUFMO1FBQ0csSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx5QkFBUyxHQUFUO1FBQUEsaUJBbUJDO1FBbEJHLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN0SCxDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ087SUFHMUI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTTtJQUd6QjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDTztJQWRWLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0F5Q3pCO0lBQUQsWUFBQztDQXpDRCxBQXlDQyxDQXpDa0MsRUFBRSxDQUFDLFNBQVMsR0F5QzlDO2tCQXpDb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxpbmsgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbm9kZUtodW5nOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBsaXN0VmJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbWlkZGxlQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBsaXN0QmVhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5MYWJlbClcclxuICAgIGxhYmVsVGV4dDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICBsZXQgYmxpbmtBY3Rpb24gPSBjYy5yZXBlYXQoY2Muc2VxdWVuY2UoY2MuYmxpbmsoMC4xLCAxKSxjYy5kZWxheVRpbWUoMC4xKSksMTApO1xyXG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlS2h1bmcucnVuQWN0aW9uKGJsaW5rQWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbFRleHQuc3RyaW5nID0gXCJLaHVuZyBuZ2/DoGlcIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb24yID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5saXN0VmJhci5ydW5BY3Rpb24oYmxpbmtBY3Rpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsVGV4dC5zdHJpbmcgPSBcIkPhu5l0IGThu41jXCI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubWlkZGxlQmFyLnJ1bkFjdGlvbihibGlua0FjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxUZXh0LnN0cmluZyA9IFwiVGhhbmggZ2nDoSB0cuG7iyBuZ2FuZ1wiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGFjdGlvbjQgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RCZWFyLnJ1bkFjdGlvbihibGlua0FjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxUZXh0LnN0cmluZyA9IFwiSOG6oXQgZ2nDoSB0cuG7i1wiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3Rpb24xLGNjLmRlbGF5VGltZSgzKSxhY3Rpb24yLGNjLmRlbGF5VGltZSgzKSxhY3Rpb24zLGNjLmRlbGF5VGltZSgzKSxhY3Rpb240KSk7XHJcbiAgICB9XHJcbn1cclxuIl19