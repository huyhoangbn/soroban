
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/NumberSeed.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05c01uDKUtLkIyFjDcLo787', 'NumberSeed');
// scripts/miniGame/NumberSeed.ts

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
var NumberSeed = /** @class */ (function (_super) {
    __extends(NumberSeed, _super);
    function NumberSeed() {
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
    NumberSeed.prototype.onLoad = function () {
    };
    NumberSeed.prototype.start = function () {
        this.setAction();
        this.node.setContentSize(cc.winSize.width, cc.winSize.height);
    };
    NumberSeed.prototype.setAction = function () {
        this.result = this.getRanNum(1, 6);
        var randomBox = this.getRanNum(0, 4);
        this.listResult = [];
        this.listResult.push(this.result);
        for (var i = 0; i < this.listButton.length; i++) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
            clickEventHandler.component = "NumberSeed"; // This is the code file name
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
        // create node 
        this.nodeLayout.node.removeAllChildren();
        for (var i = 0; i < this.result; i++) {
            var nodeNew = cc.instantiate(this.nodeBead);
            this.nodeLayout.node.addChild(nodeNew);
        }
    };
    NumberSeed.prototype.onClickChoose = function (event, value) {
        if (value == this.result.toString()) {
            this.label.string = "Chính xác";
            this.setAction();
        }
        else {
            this.label.string = "Sai rồi";
        }
    };
    NumberSeed.prototype.onBackMenu = function () {
        this.node.destroy();
    };
    NumberSeed.prototype.getRanNum = function (min_value, max_value) {
        var random_number = Math.random() * (max_value - min_value) + min_value;
        if (this.listResult.includes(Math.floor(random_number))) {
            return this.getRanNum(min_value, max_value);
        }
        return Math.floor(random_number);
    };
    __decorate([
        property(cc.Label)
    ], NumberSeed.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], NumberSeed.prototype, "nodeBead", void 0);
    __decorate([
        property(cc.Layout)
    ], NumberSeed.prototype, "nodeLayout", void 0);
    __decorate([
        property([cc.Button])
    ], NumberSeed.prototype, "listButton", void 0);
    __decorate([
        property([cc.Label])
    ], NumberSeed.prototype, "listResultLb", void 0);
    NumberSeed = __decorate([
        ccclass
    ], NumberSeed);
    return NumberSeed;
}(cc.Component));
exports.default = NumberSeed;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXE51bWJlclNlZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUEyRUM7UUF4RUcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUc3QixrQkFBWSxHQUFlLEVBQUUsQ0FBQztRQUM5QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFVLEdBQWEsRUFBRSxDQUFDOztJQTBEOUIsQ0FBQztJQXpERywyQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUNELDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsOEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVB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QztJQXRFRTtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDUTtJQUc3QjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztrREFDTTtJQUc3QjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvREFDUTtJQWZiLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0EyRTlCO0lBQUQsaUJBQUM7Q0EzRUQsQUEyRUMsQ0EzRXVDLEVBQUUsQ0FBQyxTQUFTLEdBMkVuRDtrQkEzRW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlclNlZWQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbm9kZUJlYWQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTGF5b3V0KVxyXG4gICAgbm9kZUxheW91dDogY2MuTGF5b3V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5CdXR0b25dKVxyXG4gICAgbGlzdEJ1dHRvbjogY2MuQnV0dG9uW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5MYWJlbF0pXHJcbiAgICBsaXN0UmVzdWx0TGI6IGNjLkxhYmVsW10gPSBbXTtcclxuICAgIHJlc3VsdDogbnVtYmVyID0gMDtcclxuICAgIGxpc3RSZXN1bHQ6IG51bWJlcltdID0gW107XHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuZ2V0UmFuTnVtKDEsNik7XHJcbiAgICAgICAgbGV0IHJhbmRvbUJveCA9IHRoaXMuZ2V0UmFuTnVtKDAsNCk7XHJcbiAgICAgICAgdGhpcy5saXN0UmVzdWx0ID0gW107XHJcbiAgICAgICAgdGhpcy5saXN0UmVzdWx0LnB1c2godGhpcy5yZXN1bHQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QnV0dG9uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgLy8gVGhpcyBub2RlIGlzIHRoZSBub2RlIHRvIHdoaWNoIHlvdXIgZXZlbnQgaGFuZGxlciBjb2RlIGNvbXBvbmVudCBiZWxvbmdzXHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiTnVtYmVyU2VlZFwiOyAvLyBUaGlzIGlzIHRoZSBjb2RlIGZpbGUgbmFtZVxyXG5cdFx0XHRjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJvbkNsaWNrQ2hvb3NlXCI7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gcmFuZG9tQm94KXtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IFwiXCIgKyB0aGlzLnJlc3VsdDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tID0gdGhpcy5nZXRSYW5OdW0oMSwxMCk7XHJcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBcIlwiICsgcmFuZG9tO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UmVzdWx0LnB1c2gocmFuZG9tKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMubGlzdFJlc3VsdCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFJlc3VsdExiW2ldLnN0cmluZyA9IGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YTtcclxuXHRcdFx0dGhpcy5saXN0QnV0dG9uW2ldLmNsaWNrRXZlbnRzID0gW107XHJcblx0XHRcdHRoaXMubGlzdEJ1dHRvbltpXS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHRcdH1cclxuICAgICAgICAvLyBjcmVhdGUgbm9kZSBcclxuICAgICAgICB0aGlzLm5vZGVMYXlvdXQubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IG5vZGVOZXcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGVCZWFkKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlTGF5b3V0Lm5vZGUuYWRkQ2hpbGQobm9kZU5ldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25DbGlja0Nob29zZShldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKXtcclxuICAgICAgICBpZih2YWx1ZSA9PSB0aGlzLnJlc3VsdC50b1N0cmluZygpKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIkNow61uaCB4w6FjXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJTYWkgcuG7k2lcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrTWVudSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRSYW5OdW0obWluX3ZhbHVlLCBtYXhfdmFsdWUpIHtcclxuXHRcdGxldCByYW5kb21fbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIChtYXhfdmFsdWUgLSBtaW5fdmFsdWUpICsgbWluX3ZhbHVlO1xyXG4gICAgICAgIGlmKHRoaXMubGlzdFJlc3VsdC5pbmNsdWRlcyhNYXRoLmZsb29yKHJhbmRvbV9udW1iZXIpKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbk51bShtaW5fdmFsdWUsIG1heF92YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IocmFuZG9tX251bWJlcik7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=