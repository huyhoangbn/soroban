
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/ChooseNumber.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87482wORc9KNaw1VnAOzH20', 'ChooseNumber');
// scripts/miniGame/ChooseNumber.ts

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
var ChooseNumber = /** @class */ (function (_super) {
    __extends(ChooseNumber, _super);
    function ChooseNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.listButton = [];
        _this.backSplash = null;
        _this.listResultLb = [];
        _this.result = 0;
        _this.listResult = [];
        _this.countResult = 0;
        return _this;
    }
    ChooseNumber.prototype.onLoad = function () {
        this.countResult = 0;
    };
    ChooseNumber.prototype.start = function () {
        this.setAction();
        this.node.setContentSize(cc.winSize.width, cc.winSize.height);
    };
    ChooseNumber.prototype.setAction = function () {
        this.result = this.getRanNum(0, 10);
        this.label.string = "Choose Number : " + this.result;
        this.listResult = [];
        for (var i = 0; i < 10; i++) {
            if (this.getRanNum(0, 10) % 2 == 0) {
                this.listResult.push(this.result);
            }
            else {
                this.listResult.push(this.getRanNum(0, 10));
            }
        }
        for (var i = 0; i < this.listButton.length; i++) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
            clickEventHandler.component = "ChooseNumber"; // This is the code file name
            clickEventHandler.handler = "onClickChoose";
            clickEventHandler.customEventData = "" + this.listResult[i];
            this.listResultLb[i].string = clickEventHandler.customEventData;
            this.listButton[i].clickEvents = [];
            this.listButton[i].clickEvents.push(clickEventHandler);
        }
        for (var i = 0; i < 10; i++) {
            if (this.listResult[i] == this.result)
                this.countResult++;
        }
        console.error(this.listResult);
        console.error(this.countResult);
    };
    ChooseNumber.prototype.onClickChoose = function (event, value) {
        if (value == this.result.toString()) {
            event.target.active = false;
            this.countResult--;
            if (this.countResult == 0) {
                this.label.string = "Finished!";
                this.backSplash.active = true;
            }
        }
    };
    ChooseNumber.prototype.checkLeftResult = function () {
        for (var i = 0; i < 10; i++) {
            if (this.getRanNum(0, 10) % 2 == 0) {
                this.listResult.push(this.result);
            }
            else {
                this.listResult.push(this.getRanNum(0, 10));
            }
        }
    };
    ChooseNumber.prototype.onBack = function () {
        this.node.destroy();
    };
    ChooseNumber.prototype.getRanNum = function (min_value, max_value) {
        var random_number = Math.random() * (max_value - min_value) + min_value;
        return Math.floor(random_number);
    };
    __decorate([
        property(cc.Label)
    ], ChooseNumber.prototype, "label", void 0);
    __decorate([
        property([cc.Button])
    ], ChooseNumber.prototype, "listButton", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseNumber.prototype, "backSplash", void 0);
    __decorate([
        property([cc.Label])
    ], ChooseNumber.prototype, "listResultLb", void 0);
    ChooseNumber = __decorate([
        ccclass
    ], ChooseNumber);
    return ChooseNumber;
}(cc.Component));
exports.default = ChooseNumber;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXENob29zZU51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQW9GQztRQWpGRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUc3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixrQkFBWSxHQUFlLEVBQUUsQ0FBQztRQUU5QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLGdCQUFVLEdBQWEsRUFBRSxDQUFDO1FBRTFCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDOztJQWtFNUIsQ0FBQztJQWhFRyw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFF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QUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxTQUFTLEVBQUUsU0FBUztRQUNoQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ3hFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBL0VFO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7b0RBQ007SUFHN0I7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDUTtJQUczQjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztzREFDUTtJQVpiLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FvRmhDO0lBQUQsbUJBQUM7Q0FwRkQsQUFvRkMsQ0FwRnlDLEVBQUUsQ0FBQyxTQUFTLEdBb0ZyRDtrQkFwRm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob29zZU51bWJlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5CdXR0b25dKVxyXG4gICAgbGlzdEJ1dHRvbjogY2MuQnV0dG9uW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBiYWNrU3BsYXNoOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5MYWJlbF0pXHJcbiAgICBsaXN0UmVzdWx0TGI6IGNjLkxhYmVsW10gPSBbXTtcclxuXHJcbiAgICByZXN1bHQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgbGlzdFJlc3VsdDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb3VudFJlc3VsdDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLmNvdW50UmVzdWx0ID0gMDtcclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuZ2V0UmFuTnVtKDAsMTApO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJDaG9vc2UgTnVtYmVyIDogXCIgKyB0aGlzLnJlc3VsdDtcclxuICAgICAgICB0aGlzLmxpc3RSZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5nZXRSYW5OdW0oMCwxMCkgJSAyID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UmVzdWx0LnB1c2godGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFJlc3VsdC5wdXNoKHRoaXMuZ2V0UmFuTnVtKDAsMTApKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QnV0dG9uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgLy8gVGhpcyBub2RlIGlzIHRoZSBub2RlIHRvIHdoaWNoIHlvdXIgZXZlbnQgaGFuZGxlciBjb2RlIGNvbXBvbmVudCBiZWxvbmdzXHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiQ2hvb3NlTnVtYmVyXCI7IC8vIFRoaXMgaXMgdGhlIGNvZGUgZmlsZSBuYW1lXHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIm9uQ2xpY2tDaG9vc2VcIjtcclxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gXCJcIiArICB0aGlzLmxpc3RSZXN1bHRbaV07XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFJlc3VsdExiW2ldLnN0cmluZyA9IGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YTtcclxuXHRcdFx0dGhpcy5saXN0QnV0dG9uW2ldLmNsaWNrRXZlbnRzID0gW107XHJcblx0XHRcdHRoaXMubGlzdEJ1dHRvbltpXS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHRcdH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5saXN0UmVzdWx0W2ldID09IHRoaXMucmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudFJlc3VsdCsrO1xyXG5cdFx0fVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5saXN0UmVzdWx0KTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMuY291bnRSZXN1bHQpO1xyXG4gICAgfVxyXG4gICAgb25DbGlja0Nob29zZShldmVudDogYW55LCB2YWx1ZTogc3RyaW5nICl7XHJcbiAgICAgICAgaWYodmFsdWUgPT0gdGhpcy5yZXN1bHQudG9TdHJpbmcoKSl7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudFJlc3VsdC0tO1xyXG4gICAgICAgICAgICBpZih0aGlzLmNvdW50UmVzdWx0ID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIkZpbmlzaGVkIVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrU3BsYXNoLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0xlZnRSZXN1bHQoKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5nZXRSYW5OdW0oMCwxMCkgJSAyID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UmVzdWx0LnB1c2godGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFJlc3VsdC5wdXNoKHRoaXMuZ2V0UmFuTnVtKDAsMTApKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmFjaygpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRSYW5OdW0obWluX3ZhbHVlLCBtYXhfdmFsdWUpIHtcclxuXHRcdGxldCByYW5kb21fbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIChtYXhfdmFsdWUgLSBtaW5fdmFsdWUpICsgbWluX3ZhbHVlO1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IocmFuZG9tX251bWJlcik7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=