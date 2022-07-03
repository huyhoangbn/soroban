"use strict";
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