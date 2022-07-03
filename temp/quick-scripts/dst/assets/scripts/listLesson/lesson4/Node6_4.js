
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson4/Node6_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f036iT1mtK/Jfb3rpp4LHR', 'Node6_4');
// scripts/listLesson/lesson4/Node6_4.ts

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
var Node6_4 = /** @class */ (function (_super) {
    __extends(Node6_4, _super);
    function Node6_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_refer = null;
        _this.label_result = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node6_4.prototype.start = function () {
        this.setAction();
        this.label_result.node.active = false;
    };
    Node6_4.prototype.setAction = function () {
        var _this = this;
        var txt = this.node.getChildByName("text");
        var action1 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.YELLOW;
            _this.nodeHand.parent.active = false;
            _this.label_refer.string = "0 ";
        });
        var action2 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.YELLOW;
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.nodeBead[3].runAction(cc.moveTo(0.5, cc.v2(0, -201)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "0 + 4";
        });
        var action3 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.WHITE;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "0 + 4 = 4";
            _this.label_result.string = "4";
            _this.label_result.node.active = true;
            _this.label_result.node.color = cc.Color.YELLOW;
        });
        var hideAnim = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(2.0), action1, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action2, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action3, cc.delayTime(1.0), hideAnim));
    };
    __decorate([
        property(cc.Label)
    ], Node6_4.prototype, "label_refer", void 0);
    __decorate([
        property(cc.Label)
    ], Node6_4.prototype, "label_result", void 0);
    __decorate([
        property(cc.Node)
    ], Node6_4.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node6_4.prototype, "nodeBead", void 0);
    Node6_4 = __decorate([
        ccclass
    ], Node6_4);
    return Node6_4;
}(cc.Component));
exports.default = Node6_4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uNFxcTm9kZTZfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXdFQztRQXJFRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYyxFQUFFLENBQUM7O0lBNEQ3QixDQUFDO0lBMURHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUFBLGlCQW1EQztRQWxERyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNmLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxFQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFFBQVEsRUFDUixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsUUFBUSxFQUNSLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE9BQU8sRUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixRQUFRLENBQ1gsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQWxFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNVO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1c7SUFHOUI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUd6QjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2Q0FDSTtJQVpSLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F3RTNCO0lBQUQsY0FBQztDQXhFRCxBQXdFQyxDQXhFb0MsRUFBRSxDQUFDLFNBQVMsR0F3RWhEO2tCQXhFb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZTZfNCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxfcmVmZXI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbF9yZXN1bHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBub2RlSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChbY2MuTm9kZV0pXHJcbiAgICBub2RlQmVhZDogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9yZXN1bHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldEFjdGlvbigpe1xyXG4gICAgICAgIGxldCB0eHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uMSA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgdHh0LmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xyXG4gICAgICAgICAgIHRoaXMubm9kZUhhbmQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgIHRoaXMubGFiZWxfcmVmZXIuc3RyaW5nID0gXCIwIFwiO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24yID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdHh0LmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblsxXS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgICAgdGhpcy5ub2RlQmVhZFswXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSxjYy52MigwLDU1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMV0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMzApKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMl0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMTE1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbM10ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMjAxKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsXCJhbmltYXRpb25cIixmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVmZXIuc3RyaW5nID0gXCIwICsgNFwiO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24zID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdHh0LmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblsxXS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsXCJhbmltYXRpb25cIixmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVmZXIuc3RyaW5nID0gXCIwICsgNCA9IDRcIjtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9yZXN1bHQuc3RyaW5nID0gXCI0XCI7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVzdWx0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9yZXN1bHQubm9kZS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgaGlkZUFuaW0gPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgyLjApLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uMSxcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUFuaW0sXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMi4wKSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjIsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS4wKSxcclxuICAgICAgICAgICAgICAgIGhpZGVBbmltLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIuMCksXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24zLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuMCksXHJcbiAgICAgICAgICAgICAgICBoaWRlQW5pbSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=