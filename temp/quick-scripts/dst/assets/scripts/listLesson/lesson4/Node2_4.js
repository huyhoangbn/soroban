
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson4/Node2_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47a3aRhQy1KOaNTVI3xbpIO', 'Node2_4');
// scripts/listLesson/lesson4/Node2_4.ts

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
var Node2_4 = /** @class */ (function (_super) {
    __extends(Node2_4, _super);
    function Node2_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    Node2_4.prototype.start = function () {
        this.setAction();
    };
    Node2_4.prototype.setAction = function () {
        var _this = this;
        var txt = this.node.getChildByName("text");
        var lb = this.node.getChildByName("lb");
        txt.active = false;
        lb.active = false;
        var action1 = cc.callFunc(function () {
            _this.label.string = "Phép tính trên được đọc là 1 + 1 + 1 con nhé!";
            txt.active = true;
            lb.active = true;
        });
        var action2 = cc.callFunc(function () {
            _this.label.string = "Trong toán bàn tính soroban thường phép tính cộng không ghi là cộng và thường được viết theo cột dọc. Bây giờ chúng mình cùng biểu diễn phép tính 1 + 1 + 1 trên bàn tính soroban nào";
        });
        var action3 = cc.callFunc(function () {
            _this.label.string = "Phép tính trên được đọc là 1 + 1 + 1 con nhé!";
            txt.active = true;
            lb.active = true;
        });
        this.node.runAction(cc.sequence(cc.delayTime(3.0), action1, cc.delayTime(3.0), action2));
    };
    __decorate([
        property(cc.Label)
    ], Node2_4.prototype, "label", void 0);
    __decorate([
        property
    ], Node2_4.prototype, "text", void 0);
    Node2_4 = __decorate([
        ccclass
    ], Node2_4);
    return Node2_4;
}(cc.Component));
exports.default = Node2_4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uNFxcTm9kZTJfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXlDQztRQXRDRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O0lBbUMzQixDQUFDO0lBakNHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFBQSxpQkE0QkM7UUEzQkcsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN2QixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRywrQ0FBK0MsQ0FBQztZQUNwRSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsQixFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsdUxBQXVMLENBQUM7UUFDaE4sQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLCtDQUErQyxDQUFDO1lBQ3BFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO1FBR0gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxDQUNWLENBQ0osQ0FBQztJQUNOLENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSTtJQUd2QjtRQURDLFFBQVE7eUNBQ2M7SUFOTixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBeUMzQjtJQUFELGNBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q29DLEVBQUUsQ0FBQyxTQUFTLEdBeUNoRDtrQkF6Q29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUyXzQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGlvbigpe1xyXG4gICAgICAgIGxldCB0eHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpO1xyXG4gICAgICAgIGxldCBsYiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiXCIpO1xyXG4gICAgICAgIHR4dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsYi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYWN0aW9uMSA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIlBow6lwIHTDrW5oIHRyw6puIMSRxrDhu6NjIMSR4buNYyBsw6AgMSArIDEgKyAxIGNvbiBuaMOpIVwiO1xyXG4gICAgICAgICAgIHR4dC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgIGxiLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJUcm9uZyB0b8OhbiBiw6BuIHTDrW5oIHNvcm9iYW4gdGjGsOG7nW5nIHBow6lwIHTDrW5oIGPhu5luZyBraMO0bmcgZ2hpIGzDoCBj4buZbmcgdsOgIHRoxrDhu51uZyDEkcaw4bujYyB2aeG6v3QgdGhlbyBj4buZdCBk4buNYy4gQsOieSBnaeG7nSBjaMO6bmcgbcOsbmggY8O5bmcgYmnhu4N1IGRp4buFbiBwaMOpcCB0w61uaCAxICsgMSArIDEgdHLDqm4gYsOgbiB0w61uaCBzb3JvYmFuIG7DoG9cIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb24zID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIlBow6lwIHTDrW5oIHRyw6puIMSRxrDhu6NjIMSR4buNYyBsw6AgMSArIDEgKyAxIGNvbiBuaMOpIVwiO1xyXG4gICAgICAgICAgICB0eHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDMuMCksXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24xLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDMuMCksXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24yLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=