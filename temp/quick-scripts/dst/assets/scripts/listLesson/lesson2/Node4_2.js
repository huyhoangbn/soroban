
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson2/Node4_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8daeERs6BMeoSs1yy36ato', 'Node4_2');
// scripts/listLesson/lesson2/Node4_2.ts

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
var Node4_2 = /** @class */ (function (_super) {
    __extends(Node4_2, _super);
    function Node4_2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeBead = null;
        _this.nodeLayout = null;
        _this.listButton = [];
        _this.listResultLb = [];
        _this.result = 0;
        _this.listResult = [];
        return _this;
    }
    Node4_2.prototype.onLoad = function () {
    };
    Node4_2.prototype.start = function () {
        this.setAction();
    };
    Node4_2.prototype.setAction = function () {
        this.result = this.getRanNum(1, 6);
        var randomBox = this.getRanNum(0, 4);
        console.error(randomBox);
        this.listResult = [];
        this.listResult.push(this.result);
        for (var i = 0; i < this.listButton.length; i++) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
            clickEventHandler.component = "Node4_2"; // This is the code file name
            clickEventHandler.handler = "onClickChoose";
            if (i == randomBox) {
                clickEventHandler.customEventData = "" + this.result;
            }
            else {
                var random = this.getRanNum(1, 10);
                clickEventHandler.customEventData = "" + random;
                this.listResult.push(random);
            }
            console.error(this.listResult);
            this.listResultLb[i].string = clickEventHandler.customEventData;
            this.listButton[i].clickEvents = [];
            this.listButton[i].clickEvents.push(clickEventHandler);
        }
        // console.error(this.listResult)
        // create node 
        this.nodeLayout.node.removeAllChildren();
        for (var i = 0; i < this.result; i++) {
            var nodeNew = cc.instantiate(this.nodeBead);
            this.nodeLayout.node.addChild(nodeNew);
        }
    };
    Node4_2.prototype.onClickChoose = function (event, value) {
        console.log(value);
        if (value == this.result.toString()) {
            this.label.string = "Chính xác";
            this.setAction();
        }
        else {
            this.label.string = "Sai rồi";
        }
    };
    Node4_2.prototype.onBackMenu = function () {
        this.node.destroy();
    };
    Node4_2.prototype.getRanNum = function (min_value, max_value) {
        var random_number = Math.random() * (max_value - min_value) + min_value;
        if (this.listResult.includes(Math.floor(random_number))) {
            return this.getRanNum(min_value, max_value);
        }
        return Math.floor(random_number);
    };
    __decorate([
        property(cc.Label)
    ], Node4_2.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node4_2.prototype, "nodeBead", void 0);
    __decorate([
        property(cc.Layout)
    ], Node4_2.prototype, "nodeLayout", void 0);
    __decorate([
        property([cc.Button])
    ], Node4_2.prototype, "listButton", void 0);
    __decorate([
        property([cc.Label])
    ], Node4_2.prototype, "listResultLb", void 0);
    Node4_2 = __decorate([
        ccclass
    ], Node4_2);
    return Node4_2;
}(cc.Component));
exports.default = Node4_2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uMlxcTm9kZTRfMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTZFQztRQTFFRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBRzdCLGtCQUFZLEdBQWUsRUFBRSxDQUFDO1FBQzlCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsZ0JBQVUsR0FBYSxFQUFFLENBQUM7O0lBNEQ5QixDQUFDO0lBM0RHLHdCQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0QsdUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsS0FB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QUFDO0lBeEVFO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUd6QjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNRO0lBRzdCO1FBREMsUUFBUSxDQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOytDQUNNO0lBRzdCO1FBREMsUUFBUSxDQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lEQUNRO0lBZmIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTZFM0I7SUFBRCxjQUFDO0NBN0VELEFBNkVDLENBN0VvQyxFQUFFLENBQUMsU0FBUyxHQTZFaEQ7a0JBN0VvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlNF8yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIG5vZGVCZWFkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLkxheW91dClcclxuICAgIG5vZGVMYXlvdXQ6IGNjLkxheW91dCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChbY2MuQnV0dG9uXSlcclxuICAgIGxpc3RCdXR0b246IGNjLkJ1dHRvbltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5IChbY2MuTGFiZWxdKVxyXG4gICAgbGlzdFJlc3VsdExiOiBjYy5MYWJlbFtdID0gW107XHJcbiAgICByZXN1bHQ6IG51bWJlciA9IDA7XHJcbiAgICBsaXN0UmVzdWx0OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHNldEFjdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5nZXRSYW5OdW0oMSw2KTtcclxuICAgICAgICBsZXQgcmFuZG9tQm94ID0gdGhpcy5nZXRSYW5OdW0oMCw0KTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHJhbmRvbUJveClcclxuICAgICAgICB0aGlzLmxpc3RSZXN1bHQgPSBbXTtcclxuICAgICAgICB0aGlzLmxpc3RSZXN1bHQucHVzaCh0aGlzLnJlc3VsdCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCdXR0b24ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuXHRcdFx0Y2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlOyAvLyBUaGlzIG5vZGUgaXMgdGhlIG5vZGUgdG8gd2hpY2ggeW91ciBldmVudCBoYW5kbGVyIGNvZGUgY29tcG9uZW50IGJlbG9uZ3NcclxuXHRcdFx0Y2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJOb2RlNF8yXCI7IC8vIFRoaXMgaXMgdGhlIGNvZGUgZmlsZSBuYW1lXHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIm9uQ2xpY2tDaG9vc2VcIjtcclxuICAgICAgICAgICAgaWYoaSA9PSByYW5kb21Cb3gpe1xyXG4gICAgICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gXCJcIiArIHRoaXMucmVzdWx0O1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kb20gPSB0aGlzLmdldFJhbk51bSgxLDEwKTtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IFwiXCIgKyByYW5kb207XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RSZXN1bHQucHVzaChyYW5kb20pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5saXN0UmVzdWx0KTtcclxuICAgICAgICAgICAgdGhpcy5saXN0UmVzdWx0TGJbaV0uc3RyaW5nID0gY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhO1xyXG5cdFx0XHR0aGlzLmxpc3RCdXR0b25baV0uY2xpY2tFdmVudHMgPSBbXTtcclxuXHRcdFx0dGhpcy5saXN0QnV0dG9uW2ldLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG5cdFx0fVxyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IodGhpcy5saXN0UmVzdWx0KVxyXG4gICAgICAgIC8vIGNyZWF0ZSBub2RlIFxyXG4gICAgICAgIHRoaXMubm9kZUxheW91dC5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucmVzdWx0OyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZU5ldyA9IGNjLmluc3RhbnRpYXRlKHRoaXMubm9kZUJlYWQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVMYXlvdXQubm9kZS5hZGRDaGlsZChub2RlTmV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrQ2hvb3NlKGV2ZW50OiBhbnksIHZhbHVlOiBzdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICBpZih2YWx1ZSA9PSB0aGlzLnJlc3VsdC50b1N0cmluZygpKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIkNow61uaCB4w6FjXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJTYWkgcuG7k2lcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrTWVudSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRSYW5OdW0obWluX3ZhbHVlLCBtYXhfdmFsdWUpIHtcclxuXHRcdGxldCByYW5kb21fbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIChtYXhfdmFsdWUgLSBtaW5fdmFsdWUpICsgbWluX3ZhbHVlO1xyXG4gICAgICAgIGlmKHRoaXMubGlzdFJlc3VsdC5pbmNsdWRlcyhNYXRoLmZsb29yKHJhbmRvbV9udW1iZXIpKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbk51bShtaW5fdmFsdWUsIG1heF92YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IocmFuZG9tX251bWJlcik7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=