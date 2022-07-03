
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson4/Node3_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f1feTEWhpLMo5/3hCGIB1h', 'Node3_4');
// scripts/listLesson/lesson4/Node3_4.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Node3_4 = /** @class */ (function (_super) {
    __extends(Node3_4, _super);
    function Node3_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_refer = null;
        _this.label_result = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node3_4.prototype.start = function () {
        this.setAction();
        this.label_result.node.active = false;
    };
    Node3_4.prototype.setAction = function () {
        var _this = this;
        var txt = this.node.getChildByName("text");
        var action1 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.YELLOW;
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 ";
        });
        var action2 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.YELLOW;
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 + 1";
        });
        var action3 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.WHITE;
            txt.children[2].color = cc.Color.YELLOW;
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 + 1 + 1";
        });
        var action4 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.WHITE;
            txt.children[2].color = cc.Color.WHITE;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 + 1 + 1 = 3";
            _this.label_result.string = "3";
            _this.label_result.node.active = true;
            _this.label_result.node.color = cc.Color.YELLOW;
        });
        var hideAnim = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(2.0), action1, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action2, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action3, cc.delayTime(1.0), hideAnim, cc.delayTime(1.0), action4));
    };
    __decorate([
        property(cc.Label)
    ], Node3_4.prototype, "label_refer", void 0);
    __decorate([
        property(cc.Label)
    ], Node3_4.prototype, "label_result", void 0);
    __decorate([
        property(cc.Node)
    ], Node3_4.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node3_4.prototype, "nodeBead", void 0);
    Node3_4 = __decorate([
        ccclass
    ], Node3_4);
    return Node3_4;
}(cc.Component));
exports.default = Node3_4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uNFxcTm9kZTNfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQW9GQztRQWpGRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYyxFQUFFLENBQUM7O0lBd0U3QixDQUFDO0lBdEVHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUFBLGlCQStEQztRQTlERyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxLQUFLLENBQUMsQ0FBQztZQUMxRSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDdkMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDdkMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO1lBQzFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQTtRQUVILElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNmLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxFQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFFBQVEsRUFDUixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsUUFBUSxFQUNSLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE9BQU8sRUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixRQUFRLEVBQ1IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxDQUNWLENBQ0osQ0FBQztJQUNOLENBQUM7SUE5RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNXO0lBRzlCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NkNBQ0k7SUFaUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBb0YzQjtJQUFELGNBQUM7Q0FwRkQsQUFvRkMsQ0FwRm9DLEVBQUUsQ0FBQyxTQUFTLEdBb0ZoRDtrQkFwRm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUzXzQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsX3JlZmVyOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxfcmVzdWx0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbm9kZUhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoW2NjLk5vZGVdKVxyXG4gICAgbm9kZUJlYWQ6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfcmVzdWx0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICBsZXQgdHh0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgIHR4dC5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgICB0aGlzLm5vZGVCZWFkWzBdLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC41LGNjLnYyKDAsNTUuNSkpKTtcclxuICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgIHRoaXMubm9kZUhhbmQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCxcImFuaW1hdGlvblwiLGZhbHNlKTtcclxuICAgICAgICAgICB0aGlzLmxhYmVsX3JlZmVyLnN0cmluZyA9IFwiMSBcIjtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB0eHQuY2hpbGRyZW5bMV0uY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMV0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMzApKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmQucGFyZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCxcImFuaW1hdGlvblwiLGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9yZWZlci5zdHJpbmcgPSBcIjEgKyAxXCI7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbjMgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0eHQuY2hpbGRyZW5bMF0uY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgdHh0LmNoaWxkcmVuWzFdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblsyXS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgICAgdGhpcy5ub2RlQmVhZFsyXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSxjYy52MigwLC0xMTUuNSkpKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlSGFuZC5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlSGFuZC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLFwiYW5pbWF0aW9uXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsX3JlZmVyLnN0cmluZyA9IFwiMSArIDEgKyAxXCI7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbjQgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0eHQuY2hpbGRyZW5bMF0uY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgdHh0LmNoaWxkcmVuWzFdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblsyXS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsXCJhbmltYXRpb25cIixmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVmZXIuc3RyaW5nID0gXCIxICsgMSArIDEgPSAzXCI7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVzdWx0LnN0cmluZyA9IFwiM1wiO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsX3Jlc3VsdC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVzdWx0Lm5vZGUuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XHJcbiAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBoaWRlQW5pbSA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIuMCksXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24xLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuMCksXHJcbiAgICAgICAgICAgICAgICBoaWRlQW5pbSxcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgyLjApLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uMixcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUFuaW0sXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMi4wKSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjMsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS4wKSxcclxuICAgICAgICAgICAgICAgIGhpZGVBbmltLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuMCksXHJcbiAgICAgICAgICAgICAgICBhY3Rpb240XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19