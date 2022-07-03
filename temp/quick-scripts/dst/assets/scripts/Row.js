
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Row.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6eb15TA0LlND5OJAuO7PHgp', 'Row');
// scripts/Row.ts

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
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // horizontal on 120
        _this.numberLabel = null;
        _this.beads = [];
        _this.number = 0;
        _this.initialized = false;
        return _this;
    }
    Row.prototype.initialize = function () {
        var _this = this;
        this.node.children.forEach(function (value) {
            if (value.name == "Bead") {
                _this.beads.push(value);
                value.getComponent("Bead").initialize();
            }
            _this.initialized = true;
        });
    };
    Row.prototype.update = function (dt) {
        var _this = this;
        if (!this.initialized)
            return;
        this.number = 0;
        this.beads.forEach(function (value, index) {
            if (value.getComponent("Bead").placement == 1) {
                if (index < 4)
                    _this.number++;
                else
                    _this.number += 5;
            }
        });
        this.numberLabel.string = this.number.toString();
    };
    Row.prototype.setValue = function (value) {
        if (value < 0 || value > 9) {
            console.error("Invalid value passed to Row.setValue");
            return;
        }
        // reset row
        this.beads.forEach(function (value) {
            value.getComponent("Bead").setPlacement(0);
        });
        var index = 0; // keep track of (1) beads to set them in order
        while (value > 0) {
            var node = null;
            if (value >= 5) {
                node = this.beads[4];
                value -= 5;
            }
            else {
                node = this.beads[index];
                index++;
                value--;
            }
            node.getComponent("Bead").setPlacement(1);
        }
    };
    Row.prototype.setInteractive = function (value, which) {
        if (!value) {
            this.beads.forEach(function (node) {
                node.getComponent("Bead").setInteractive(false);
            });
        }
        else {
            for (var i = this.beads.length - 1; i >= 0; --i) {
                if (((which >> i) & 1) == 1) {
                    this.beads[this.beads.length - 1 - i].getComponent("Bead").setInteractive(true);
                }
            }
        }
    };
    Row.prototype.applyTheme = function (resourcePack) {
        this.beads.forEach(function (value) {
            value.getComponent("Bead").applyTheme(resourcePack);
        });
        this.node.getChildByName("MiddleVBar").getComponent(cc.Sprite).spriteFrame = resourcePack.vbar;
    };
    Row.prototype.reset = function () {
        this.beads.forEach(function (value) {
            value.getComponent("Bead").reset();
        });
    };
    __decorate([
        property(cc.Label)
    ], Row.prototype, "numberLabel", void 0);
    Row = __decorate([
        ccclass
    ], Row);
    return Row;
}(cc.Component));
exports.default = Row;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBNkZDO1FBNUZHLG9CQUFvQjtRQUVwQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBQ3RCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFFWCxpQkFBVyxHQUFZLEtBQUssQ0FBQzs7SUFxRmpDLENBQUM7SUFuRkcsd0JBQVUsR0FBVjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBYztZQUN0QyxJQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO2dCQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFdkIsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUMzQztZQUVELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9CQUFNLEdBQU4sVUFBTyxFQUFFO1FBQVQsaUJBYUM7UUFaRyxJQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBYyxFQUFFLEtBQWE7WUFDN0MsSUFBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFDLElBQUcsS0FB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QUUsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6RkQ7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDUztJQUhaLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0E2RnZCO0lBQUQsVUFBQztDQTdGRCxBQTZGQyxDQTdGZ0MsRUFBRSxDQUFDLFNBQVMsR0E2RjVDO2tCQTdGb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc291cmNlUGFjayB9IGZyb20gXCIuL1Jlc291cmNlUGFja1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy8gaG9yaXpvbnRhbCBvbiAxMjBcclxuICAgIEBwcm9wZXJ0eSAoY2MuTGFiZWwpXHJcbiAgICBudW1iZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGJlYWRzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIG51bWJlciA9IDA7XHJcblxyXG4gICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKCh2YWx1ZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZih2YWx1ZS5uYW1lID09IFwiQmVhZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlYWRzLnB1c2godmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhbHVlLmdldENvbXBvbmVudChcIkJlYWRcIikuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZighdGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuYmVhZHMuZm9yRWFjaCgodmFsdWU6IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYodmFsdWUuZ2V0Q29tcG9uZW50KFwiQmVhZFwiKS5wbGFjZW1lbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPCA0KSB0aGlzLm51bWJlcisrO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLm51bWJlciArPSA1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubnVtYmVyTGFiZWwuc3RyaW5nID0gdGhpcy5udW1iZXIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYodmFsdWUgPCAwIHx8IHZhbHVlID4gOSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCB2YWx1ZSBwYXNzZWQgdG8gUm93LnNldFZhbHVlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXNldCByb3dcclxuICAgICAgICB0aGlzLmJlYWRzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5nZXRDb21wb25lbnQoXCJCZWFkXCIpLnNldFBsYWNlbWVudCgwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDsgLy8ga2VlcCB0cmFjayBvZiAoMSkgYmVhZHMgdG8gc2V0IHRoZW0gaW4gb3JkZXJcclxuICAgICAgICB3aGlsZSh2YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYodmFsdWUgPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMuYmVhZHNbNF07XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSAtPSA1O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMuYmVhZHNbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS0tO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChcIkJlYWRcIikuc2V0UGxhY2VtZW50KDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcmFjdGl2ZSh2YWx1ZTogYm9vbGVhbiwgd2hpY2g6IG51bWJlcikge1xyXG4gICAgICAgIGlmKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJlYWRzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChcIkJlYWRcIikuc2V0SW50ZXJhY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSB0aGlzLmJlYWRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgICAgICBpZigoKHdoaWNoID4+IGkpICYgMSkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVhZHNbdGhpcy5iZWFkcy5sZW5ndGggLSAxIC0gaV0uZ2V0Q29tcG9uZW50KFwiQmVhZFwiKS5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcHBseVRoZW1lKHJlc291cmNlUGFjazogUmVzb3VyY2VQYWNrKSB7XHJcbiAgICAgICAgdGhpcy5iZWFkcy5mb3JFYWNoKCh2YWx1ZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5nZXRDb21wb25lbnQoXCJCZWFkXCIpLmFwcGx5VGhlbWUocmVzb3VyY2VQYWNrKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiTWlkZGxlVkJhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHJlc291cmNlUGFjay52YmFyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuYmVhZHMuZm9yRWFjaCgodmFsdWU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgdmFsdWUuZ2V0Q29tcG9uZW50KFwiQmVhZFwiKS5yZXNldCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==