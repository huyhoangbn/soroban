
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/writeNumber/WriteNumber.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92a78B5itNE1ZCRl44Gx4/b', 'WriteNumber');
// scripts/miniGame/writeNumber/WriteNumber.ts

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
var WriteNumber = /** @class */ (function (_super) {
    __extends(WriteNumber, _super);
    function WriteNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.listButton = [];
        _this.backSplash = null;
        _this.nodeAddChild = null;
        _this.nodeWrite = null;
        return _this;
    }
    WriteNumber.prototype.onLoad = function () {
        this.nodeAddChild.removeAllChildren();
    };
    WriteNumber.prototype.start = function () {
        this.setAction();
        this.node.setContentSize(cc.winSize.width, cc.winSize.height);
    };
    WriteNumber.prototype.setAction = function () {
        for (var i = 0; i < this.listButton.length; i++) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
            clickEventHandler.component = "WriteNumber"; // This is the code file name
            clickEventHandler.handler = "onClickChoose";
            clickEventHandler.customEventData = "" + (i + 1);
            this.listButton[i].clickEvents = [];
            this.listButton[i].clickEvents.push(clickEventHandler);
        }
    };
    WriteNumber.prototype.onClickChoose = function (event, value) {
        var nodeWrite = cc.instantiate(this.nodeWrite);
        nodeWrite.getChildByName("number").getComponent(cc.Label).string = value;
        nodeWrite.setContentSize(cc.winSize.width, cc.winSize.height);
        this.nodeAddChild.addChild(nodeWrite);
    };
    WriteNumber.prototype.onBackWrite = function () {
        this.nodeAddChild.removeAllChildren();
    };
    WriteNumber.prototype.onBack = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.Label)
    ], WriteNumber.prototype, "label", void 0);
    __decorate([
        property([cc.Button])
    ], WriteNumber.prototype, "listButton", void 0);
    __decorate([
        property(cc.Node)
    ], WriteNumber.prototype, "backSplash", void 0);
    __decorate([
        property(cc.Node)
    ], WriteNumber.prototype, "nodeAddChild", void 0);
    __decorate([
        property(cc.Prefab)
    ], WriteNumber.prototype, "nodeWrite", void 0);
    WriteNumber = __decorate([
        ccclass
    ], WriteNumber);
    return WriteNumber;
}(cc.Component));
exports.default = WriteNumber;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXHdyaXRlTnVtYmVyXFxXcml0ZU51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQW1EQztRQWhERyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUc3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQWMsSUFBSSxDQUFDOztJQW9DaEMsQ0FBQztJQWxDRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFDRCwyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNELCtCQUFTLEdBQVQ7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEQsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQywyRUFBMkU7WUFDakgsaUJBQWlCLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDLDZCQUE2QjtZQUMxRSxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1lBQ25DLGlCQUFpQixDQUFDLGVBQWUsR0FBRyxFQUFFLEdBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3ZEO0lBRUMsQ0FBQztJQUNELG1DQUFhLEdBQWIsVUFBYyxLQUFVLEVBQUUsS0FBYTtRQUNuQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6RSxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUE5Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzttREFDTTtJQUc3QjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1U7SUFHN0I7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDTztJQWZYLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FtRC9CO0lBQUQsa0JBQUM7Q0FuREQsQUFtREMsQ0FuRHdDLEVBQUUsQ0FBQyxTQUFTLEdBbURwRDtrQkFuRG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdyaXRlTnVtYmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoW2NjLkJ1dHRvbl0pXHJcbiAgICBsaXN0QnV0dG9uOiBjYy5CdXR0b25bXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIGJhY2tTcGxhc2g6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIG5vZGVBZGRDaGlsZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5QcmVmYWIpXHJcbiAgICBub2RlV3JpdGU6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlQWRkQ2hpbGQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJ1dHRvbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG5cdFx0XHRjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IC8vIFRoaXMgbm9kZSBpcyB0aGUgbm9kZSB0byB3aGljaCB5b3VyIGV2ZW50IGhhbmRsZXIgY29kZSBjb21wb25lbnQgYmVsb25nc1xyXG5cdFx0XHRjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIldyaXRlTnVtYmVyXCI7IC8vIFRoaXMgaXMgdGhlIGNvZGUgZmlsZSBuYW1lXHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIm9uQ2xpY2tDaG9vc2VcIjtcclxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gXCJcIiArICAoaSsxKTtcclxuXHRcdFx0dGhpcy5saXN0QnV0dG9uW2ldLmNsaWNrRXZlbnRzID0gW107XHJcblx0XHRcdHRoaXMubGlzdEJ1dHRvbltpXS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkNsaWNrQ2hvb3NlKGV2ZW50OiBhbnksIHZhbHVlOiBzdHJpbmcgKXtcclxuICAgICAgICBsZXQgbm9kZVdyaXRlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlV3JpdGUpO1xyXG4gICAgICAgIG5vZGVXcml0ZS5nZXRDaGlsZEJ5TmFtZShcIm51bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHZhbHVlO1xyXG4gICAgICAgIG5vZGVXcml0ZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5ub2RlQWRkQ2hpbGQuYWRkQ2hpbGQobm9kZVdyaXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJhY2tXcml0ZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGVBZGRDaGlsZC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmFjaygpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=