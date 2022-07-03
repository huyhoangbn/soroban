
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson2/Node3_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26415nvyfZGr4byOGW9TRlL', 'Node3_2');
// scripts/listLesson/lesson2/Node3_2.ts

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
var Node1_2 = /** @class */ (function (_super) {
    __extends(Node1_2, _super);
    function Node1_2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeBead = [];
        _this.count = 0;
        return _this;
    }
    Node1_2.prototype.onLoad = function () {
    };
    Node1_2.prototype.start = function () {
        this.setAction();
    };
    Node1_2.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.count++;
            _this.label.string = _this.count + " hạt dưới là số: " + _this.count;
            _this.label.node.active = true;
        });
        var action2 = cc.callFunc(function () {
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.count++;
            _this.label.string = _this.count + " hạt dưới là số: " + _this.count;
        });
        var action3 = cc.callFunc(function () {
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.count++;
            _this.label.string = _this.count + " hạt dưới là số: " + _this.count;
        });
        var action4 = cc.callFunc(function () {
            _this.nodeBead[3].runAction(cc.moveTo(0.5, cc.v2(0, -201)));
            _this.count++;
            _this.label.string = _this.count + " hạt dưới là số: " + _this.count;
        });
        var action5 = cc.callFunc(function () {
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -201)));
            _this.nodeBead[3].runAction(cc.moveTo(0.5, cc.v2(0, -286.5)));
        });
        var action6 = cc.callFunc(function () {
            _this.nodeBead[4].runAction(cc.moveTo(0.5, cc.v2(0, 195)));
            _this.count++;
            _this.label.string = "Hạt trên là số: " + _this.count;
        });
        this.node.runAction(cc.sequence(cc.delayTime(1.5), action1, cc.delayTime(1.5), action2, cc.delayTime(1.5), action3, cc.delayTime(1.5), action4, cc.delayTime(1.5), action5, cc.delayTime(1.0), action6));
    };
    __decorate([
        property(cc.Label)
    ], Node1_2.prototype, "label", void 0);
    __decorate([
        property([cc.Node])
    ], Node1_2.prototype, "nodeBead", void 0);
    Node1_2 = __decorate([
        ccclass
    ], Node1_2);
    return Node1_2;
}(cc.Component));
exports.default = Node1_2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uMlxcTm9kZTNfMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQW1FQztRQWhFRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFFekIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUEyRHRCLENBQUM7SUExREcsd0JBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQUEsaUJBaURDO1FBaERHLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQztZQUNsRSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWxDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFB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QUFLLENBQUMsTUFBTSxHQUFHLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDZixFQUFFLENBQUMsUUFBUSxDQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE9BQU8sRUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxFQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE9BQU8sRUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxDQUNWLENBQUMsQ0FBQztJQUNYLENBQUM7SUE5REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2Q0FDSTtJQU5SLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FtRTNCO0lBQUQsY0FBQztDQW5FRCxBQW1FQyxDQW5Fb0MsRUFBRSxDQUFDLFNBQVMsR0FtRWhEO2tCQW5Fb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZTFfMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5Ob2RlXSlcclxuICAgIG5vZGVCZWFkOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBjb3VudDogbnVtYmVyID0gMDtcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0QWN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVCZWFkWzBdLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC41LGNjLnYyKDAsNTUuNSkpKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMuY291bnQgKyBcIiBo4bqhdCBkxrDhu5tpIGzDoCBz4buROiBcIiArIHRoaXMuY291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb24yID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlQmVhZFsxXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSxjYy52MigwLC0zMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMuY291bnQgKyBcIiBo4bqhdCBkxrDhu5tpIGzDoCBz4buROiBcIiArIHRoaXMuY291bnQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMl0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMTE1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnQrKztcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLmNvdW50ICsgXCIgaOG6oXQgZMaw4bubaSBsw6Agc+G7kTogXCIgKyB0aGlzLmNvdW50O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGFjdGlvbjQgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVCZWFkWzNdLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC41LGNjLnYyKDAsLTIwMSkpKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMuY291bnQgKyBcIiBo4bqhdCBkxrDhu5tpIGzDoCBz4buROiBcIiArIHRoaXMuY291bnQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uNSA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMF0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMzApKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMV0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMTE1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMl0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMjAxKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVCZWFkWzNdLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC41LGNjLnYyKDAsLTI4Ni41KSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGFjdGlvbjYgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVCZWFkWzRdLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC41LGNjLnYyKDAsMTk1KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJI4bqhdCB0csOqbiBsw6Agc+G7kTogXCIgKyB0aGlzLmNvdW50O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS41KSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjEsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS41KSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjIsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS41KSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjMsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS41KSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjQsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS41KSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjUsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS4wKSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjZcclxuICAgICAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==