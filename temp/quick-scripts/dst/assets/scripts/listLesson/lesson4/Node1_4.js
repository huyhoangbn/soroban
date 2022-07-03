
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson4/Node1_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbf76vLbx9C4ZylmPPHJ8k8', 'Node1_4');
// scripts/listLesson/lesson4/Node1_4.ts

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
var Node1_4 = /** @class */ (function (_super) {
    __extends(Node1_4, _super);
    function Node1_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    Node1_4.prototype.onLoad = function () { };
    Node1_4.prototype.start = function () {
        this.setAction();
    };
    Node1_4.prototype.setAction = function () {
        var spr1 = this.node.getChildByName("spr1");
        var txt1 = this.node.getChildByName("text1");
        spr1.opacity = 0;
        txt1.opacity = 0;
        spr1.setPosition(cc.v2(-585, 250));
        var spr2 = this.node.getChildByName("spr2");
        var txt2 = this.node.getChildByName("text2");
        spr2.opacity = 0;
        txt2.opacity = 0;
        spr2.setPosition(cc.v2(-413, 250));
        var txt3 = this.node.getChildByName("text3");
        txt3.opacity = 0;
        var spr4 = this.node.getChildByName("spr4");
        var txt4 = this.node.getChildByName("text4");
        spr4.opacity = 0;
        txt4.opacity = 0;
        spr4.setPosition(cc.v2(77, 250));
        var actionSpr1 = cc.callFunc(function () {
            spr1.runAction(cc.sequence(cc.fadeTo(0.5, 255), cc.moveTo(0.5, cc.v2(-585, 0))));
        });
        var actionLb1 = cc.callFunc(function () {
            txt1.runAction(cc.fadeTo(0.5, 255));
        });
        var actionSpr2 = cc.callFunc(function () {
            spr2.runAction(cc.sequence(cc.fadeTo(0.5, 255), cc.moveTo(0.5, cc.v2(-413, 0))));
        });
        var actionLb2 = cc.callFunc(function () {
            txt2.runAction(cc.fadeTo(0.5, 255));
        });
        var actionSpr3_1 = cc.callFunc(function () {
            spr1.runAction(cc.moveTo(0.5, cc.v2(-500, 0)));
        });
        var actionSpr3_2 = cc.callFunc(function () {
            spr2.runAction(cc.moveTo(0.5, cc.v2(-500, 0)));
        });
        var actionText3 = cc.callFunc(function () {
            txt3.runAction(cc.fadeTo(0.5, 255));
        });
        var actionSpr4 = cc.callFunc(function () {
            spr4.runAction(cc.sequence(cc.fadeTo(0.5, 255), cc.moveTo(0.5, cc.v2(77, 0))));
        });
        var actionLb4 = cc.callFunc(function () {
            txt4.runAction(cc.fadeTo(0.5, 255));
        });
        this.node.runAction(cc.sequence(cc.delayTime(1.0), cc.sequence(actionLb1, cc.delayTime(0.5), actionSpr1), cc.delayTime(1.0), cc.sequence(actionLb2, cc.delayTime(0.5), actionSpr2), cc.delayTime(1.0), cc.sequence(actionText3, cc.delayTime(0.5), cc.spawn(actionSpr3_1, actionSpr3_2)), cc.delayTime(1.0), cc.sequence(actionSpr4, cc.delayTime(0.5), actionLb4)));
    };
    __decorate([
        property(cc.Label)
    ], Node1_4.prototype, "label", void 0);
    Node1_4 = __decorate([
        ccclass
    ], Node1_4);
    return Node1_4;
}(cc.Component));
exports.default = Node1_4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uNFxcTm9kZTFfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTRHQztRQXpHRyxXQUFLLEdBQWEsSUFBSSxDQUFDOztJQXlHM0IsQ0FBQztJQXRHRyx3QkFBTSxHQUFOLGNBQVcsQ0FBQztJQUVaLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELDJCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLENB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LENBQ1osQ0FDSixDQUNKLENBQUM7SUFDTixDQUFDO0lBdkdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0k7SUFITixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBNEczQjtJQUFELGNBQUM7Q0E1R0QsQUE0R0MsQ0E1R29DLEVBQUUsQ0FBQyxTQUFTLEdBNEdoRDtrQkE1R29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUxXzQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG5cclxuICAgIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0QWN0aW9uKCl7XHJcbiAgICAgICAgbGV0IHNwcjEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcHIxXCIpO1xyXG4gICAgICAgIGxldCB0eHQxID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGV4dDFcIik7XHJcbiAgICAgICAgc3ByMS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0eHQxLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHNwcjEuc2V0UG9zaXRpb24oY2MudjIoLTU4NSwyNTApKTtcclxuICAgICAgICBsZXQgc3ByMiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwcjJcIik7XHJcbiAgICAgICAgbGV0IHR4dDIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0MlwiKTtcclxuICAgICAgICBzcHIyLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHR4dDIub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgc3ByMi5zZXRQb3NpdGlvbihjYy52MigtNDEzLDI1MCkpO1xyXG4gICAgICAgIGxldCB0eHQzID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGV4dDNcIik7XHJcbiAgICAgICAgdHh0My5vcGFjaXR5ID0gMDtcclxuICAgICAgICBsZXQgc3ByNCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwcjRcIik7XHJcbiAgICAgICAgbGV0IHR4dDQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0NFwiKTtcclxuICAgICAgICBzcHI0Lm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHR4dDQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgc3ByNC5zZXRQb3NpdGlvbihjYy52Mig3NywyNTApKTtcclxuICAgICBcclxuICAgICAgICBsZXQgYWN0aW9uU3ByMSA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHNwcjEucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZmFkZVRvKDAuNSwyNTUpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuNSxjYy52MigtNTg1LDApKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb25MYjEgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0eHQxLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLmZhZGVUbygwLjUsMjU1KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgYWN0aW9uU3ByMiA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHNwcjIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZmFkZVRvKDAuNSwyNTUpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuNSxjYy52MigtNDEzLDApKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb25MYjIgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0eHQyLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLmZhZGVUbygwLjUsMjU1KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb25TcHIzXzEgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICBzcHIxLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsY2MudjIoLTUwMCwwKSkpICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb25TcHIzXzIgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICBzcHIyLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsY2MudjIoLTUwMCwwKSkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uVGV4dDMgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0eHQzLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLmZhZGVUbygwLjUsMjU1KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgYWN0aW9uU3ByNCA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHNwcjQucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZmFkZVRvKDAuNSwyNTUpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuNSxjYy52Mig3NywwKSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uTGI0ID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdHh0NC5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICBjYy5mYWRlVG8oMC41LDI1NSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjApLFxyXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uTGIxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblNwcjFcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS4wKSxcclxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkxiMixcclxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC41KSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25TcHIyXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuMCksXHJcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25UZXh0MyxcclxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC41KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihhY3Rpb25TcHIzXzEsYWN0aW9uU3ByM18yKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjApLFxyXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uU3ByNCxcclxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC41KSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25MYjQsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19