
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Bead.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab206Dcn6xGmacuYaqK1bKL', 'Bead');
// scripts/Bead.ts

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
var Bead = /** @class */ (function (_super) {
    __extends(Bead, _super);
    function Bead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bodyNode = null;
        _this.startNode = null;
        _this.endNode = null;
        _this.showDebug = false;
        _this.activeSF = null;
        _this.focusedSF = null;
        _this.inactiveSF = null;
        _this.reverted = false;
        _this.placement = 0;
        _this.touched = false;
        _this.nearBeads = [];
        _this.dragged = false;
        _this.initialized = false;
        return _this;
    }
    Bead.prototype.initialize = function () {
        this.reverted = (this.startNode.getPosition().y > this.endNode.getPosition().y);
        this.bodyNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.bodyNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.bodyNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.bodyNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.initialized = true;
    };
    Bead.prototype.update = function (dt) {
        if (!this.initialized)
            return;
        // snap body to the predefined positions
        if (this.touched) {
            if (!this.reverted) {
                if (this.bodyNode.y >= this.endNode.y)
                    this.setPlacement(1);
                else if (this.bodyNode.y <= this.startNode.y)
                    this.setPlacement(0);
            }
            else {
                if (this.bodyNode.y <= this.endNode.y)
                    this.setPlacement(1);
                else if (this.bodyNode.y >= this.startNode.y)
                    this.setPlacement(0);
            }
        }
        if (this.showDebug) {
            console.log("Placement: " + this.placement);
        }
    };
    Bead.prototype.applyTheme = function (resourcePack) {
        this.activeSF = resourcePack.bead_active;
        this.focusedSF = resourcePack.bead_focused;
        this.inactiveSF = resourcePack.bead_inactive;
        this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.inactiveSF;
    };
    Bead.prototype.reset = function () {
        this.onTouchEnd(null);
        this.setPlacement(0);
    };
    Bead.prototype.setPlacement = function (value) {
        if (value == 0) {
            // disable bead movement if placement changes only if the bead is dragged by other
            if (this.placement == 1 && this.dragged)
                this.onTouchEnd(null);
            this.bodyNode.setPosition(this.startNode.getPosition());
            this.placement = 0;
        }
        else {
            if (this.placement == 0 && this.dragged)
                this.onTouchEnd(null);
            this.bodyNode.setPosition(this.endNode.getPosition());
            this.placement = 1;
        }
    };
    Bead.prototype.setInteractive = function (value) {
        // sloppy shit
        console.log("interactive off");
        this.bodyNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.bodyNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.bodyNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.bodyNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        if (value) {
            console.log("interactive on");
            this.bodyNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.bodyNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.bodyNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.bodyNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
    };
    Bead.prototype.onTouchStart = function (event) {
        this.touched = true;
        this.dragged = false;
        this.nearBeads = [];
        // don't drag any beads if user choose (5) bead
        if (this.reverted) {
            this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.activeSF;
            return;
        }
        if (!event) {
            this.dragged = true; // dragged beads don't drag any beads with them
            this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.focusedSF;
        }
        else {
            var foundThis = false;
            for (var i = 1; i < 5; ++i) { // don't count last beard (top one)
                var value = this.node.getParent().children[i];
                if (this.node == value) {
                    foundThis = true;
                    continue;
                }
                // add only upper beads for first placement and down beads if second placement
                if ((this.placement == 0 && !foundThis) || (this.placement == 1 && foundThis)) {
                    // add only beads with the same placement
                    if (value.name == "Bead" && value.getComponent("Bead").placement == this.placement) {
                        value.getComponent("Bead").onTouchStart(null);
                        this.nearBeads.push(value);
                    }
                }
            }
            this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.activeSF;
        }
    };
    Bead.prototype.onTouchMove = function (event) {
        if (!this.touched)
            return;
        var delta_y = event.getDeltaY();
        if (this.dragged ||
            (delta_y > 0 && event.getLocationY() >= this.bodyNode.getBoundingBoxToWorld().center.y) ||
            (delta_y < 0 && event.getLocationY() <= this.bodyNode.getBoundingBoxToWorld().center.y)) {
            this.bodyNode.y += delta_y;
            // prevent beads dragged from first position to go down and from second position to go up
            if ((this.placement == 0 && delta_y > 0) || (this.placement == 1 && delta_y < 0))
                this.nearBeads.forEach(function (value) {
                    value.getComponent("Bead").onTouchMove(event);
                });
        }
    };
    Bead.prototype.onTouchEnd = function (event) {
        this.bodyNode.setPosition((this.placement == 0 ? this.startNode.getPosition() : this.endNode.getPosition()));
        this.nearBeads.forEach(function (value) {
            value.getComponent("Bead").onTouchEnd(event);
        });
        this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.inactiveSF;
        this.touched = false;
        this.dragged = false;
        this.nearBeads = [];
    };
    __decorate([
        property(cc.Node)
    ], Bead.prototype, "bodyNode", void 0);
    __decorate([
        property(cc.Node)
    ], Bead.prototype, "startNode", void 0);
    __decorate([
        property(cc.Node)
    ], Bead.prototype, "endNode", void 0);
    __decorate([
        property(cc.Boolean)
    ], Bead.prototype, "showDebug", void 0);
    Bead = __decorate([
        ccclass
    ], Bead);
    return Bead;
}(cc.Component));
exports.default = Bead;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQStLQztRQTdLRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBQ2hDLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBQ2pDLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFFdEIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixlQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBb0pqQyxDQUFDO0lBbEpHLHlCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUs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RyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQTVLRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzJDQUNIO0lBWEQsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQStLeEI7SUFBRCxXQUFDO0NBL0tELEFBK0tDLENBL0tpQyxFQUFFLENBQUMsU0FBUyxHQStLN0M7a0JBL0tvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzb3VyY2VQYWNrIH0gZnJvbSBcIi4vUmVzb3VyY2VQYWNrXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYWQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib2R5Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzdGFydE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBzaG93RGVidWcgPSBmYWxzZTtcclxuXHJcbiAgICBhY3RpdmVTRjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgZm9jdXNlZFNGOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBpbmFjdGl2ZVNGOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgcmV2ZXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwbGFjZW1lbnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgdG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG5lYXJCZWFkczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgZHJhZ2dlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLnJldmVydGVkID0gKHRoaXMuc3RhcnROb2RlLmdldFBvc2l0aW9uKCkueSA+IHRoaXMuZW5kTm9kZS5nZXRQb3NpdGlvbigpLnkpO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ib2R5Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJvZHlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJvZHlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBzbmFwIGJvZHkgdG8gdGhlIHByZWRlZmluZWQgcG9zaXRpb25zXHJcbiAgICAgICAgaWYodGhpcy50b3VjaGVkKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnJldmVydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvZHlOb2RlLnkgPj0gdGhpcy5lbmROb2RlLnkpIHRoaXMuc2V0UGxhY2VtZW50KDEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmJvZHlOb2RlLnkgPD0gdGhpcy5zdGFydE5vZGUueSkgdGhpcy5zZXRQbGFjZW1lbnQoMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvZHlOb2RlLnkgPD0gdGhpcy5lbmROb2RlLnkpIHRoaXMuc2V0UGxhY2VtZW50KDEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmJvZHlOb2RlLnkgPj0gdGhpcy5zdGFydE5vZGUueSkgdGhpcy5zZXRQbGFjZW1lbnQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc2hvd0RlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxhY2VtZW50OiBcIiArIHRoaXMucGxhY2VtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlUaGVtZShyZXNvdXJjZVBhY2s6IFJlc291cmNlUGFjaykge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU0YgPSByZXNvdXJjZVBhY2suYmVhZF9hY3RpdmU7XHJcbiAgICAgICAgdGhpcy5mb2N1c2VkU0YgPSByZXNvdXJjZVBhY2suYmVhZF9mb2N1c2VkO1xyXG4gICAgICAgIHRoaXMuaW5hY3RpdmVTRiA9IHJlc291cmNlUGFjay5iZWFkX2luYWN0aXZlO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pbmFjdGl2ZVNGO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMub25Ub3VjaEVuZChudWxsKTtcclxuICAgICAgICB0aGlzLnNldFBsYWNlbWVudCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGFjZW1lbnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHZhbHVlID09IDApIHtcclxuICAgICAgICAgICAgLy8gZGlzYWJsZSBiZWFkIG1vdmVtZW50IGlmIHBsYWNlbWVudCBjaGFuZ2VzIG9ubHkgaWYgdGhlIGJlYWQgaXMgZHJhZ2dlZCBieSBvdGhlclxyXG4gICAgICAgICAgICBpZih0aGlzLnBsYWNlbWVudCA9PSAxICYmIHRoaXMuZHJhZ2dlZCkgdGhpcy5vblRvdWNoRW5kKG51bGwpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ib2R5Tm9kZS5zZXRQb3NpdGlvbih0aGlzLnN0YXJ0Tm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxhY2VtZW50ID09IDAgJiYgdGhpcy5kcmFnZ2VkKSB0aGlzLm9uVG91Y2hFbmQobnVsbCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJvZHlOb2RlLnNldFBvc2l0aW9uKHRoaXMuZW5kTm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcmFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIC8vIHNsb3BweSBzaGl0XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnRlcmFjdGl2ZSBvZmZcIik7XHJcbiAgICAgICAgdGhpcy5ib2R5Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJvZHlOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJvZHlOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ib2R5Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgICAgICBpZih2YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImludGVyYWN0aXZlIG9uXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRyYWdnZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5lYXJCZWFkcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBkb24ndCBkcmFnIGFueSBiZWFkcyBpZiB1c2VyIGNob29zZSAoNSkgYmVhZFxyXG4gICAgICAgIGlmKHRoaXMucmV2ZXJ0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5Tm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYWN0aXZlU0Y7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkID0gdHJ1ZTsgLy8gZHJhZ2dlZCBiZWFkcyBkb24ndCBkcmFnIGFueSBiZWFkcyB3aXRoIHRoZW1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm9keU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmZvY3VzZWRTRjtcclxuICAgICAgICB9IGVsc2UgIHtcclxuICAgICAgICAgICAgbGV0IGZvdW5kVGhpcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgNTsgKytpKSB7IC8vIGRvbid0IGNvdW50IGxhc3QgYmVhcmQgKHRvcCBvbmUpXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuY2hpbGRyZW5baV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ub2RlID09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRUaGlzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gYWRkIG9ubHkgdXBwZXIgYmVhZHMgZm9yIGZpcnN0IHBsYWNlbWVudCBhbmQgZG93biBiZWFkcyBpZiBzZWNvbmQgcGxhY2VtZW50XHJcbiAgICAgICAgICAgICAgICBpZigodGhpcy5wbGFjZW1lbnQgPT0gMCAmJiAhZm91bmRUaGlzKSB8fCAodGhpcy5wbGFjZW1lbnQgPT0gMSAmJiBmb3VuZFRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIG9ubHkgYmVhZHMgd2l0aCB0aGUgc2FtZSBwbGFjZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5uYW1lID09IFwiQmVhZFwiICYmIHZhbHVlLmdldENvbXBvbmVudChcIkJlYWRcIikucGxhY2VtZW50ID09IHRoaXMucGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmdldENvbXBvbmVudChcIkJlYWRcIikub25Ub3VjaFN0YXJ0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJCZWFkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm9keU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmFjdGl2ZVNGO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnRvdWNoZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGRlbHRhX3kgPSBldmVudC5nZXREZWx0YVkoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5kcmFnZ2VkIHx8IFxyXG4gICAgICAgICAgKGRlbHRhX3kgPiAwICYmIGV2ZW50LmdldExvY2F0aW9uWSgpID49IHRoaXMuYm9keU5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY2VudGVyLnkpIHx8XHJcbiAgICAgICAgICAoZGVsdGFfeSA8IDAgJiYgZXZlbnQuZ2V0TG9jYXRpb25ZKCkgPD0gdGhpcy5ib2R5Tm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jZW50ZXIueSkpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5Tm9kZS55ICs9IGRlbHRhX3k7XHJcblxyXG4gICAgICAgICAgICAvLyBwcmV2ZW50IGJlYWRzIGRyYWdnZWQgZnJvbSBmaXJzdCBwb3NpdGlvbiB0byBnbyBkb3duIGFuZCBmcm9tIHNlY29uZCBwb3NpdGlvbiB0byBnbyB1cFxyXG4gICAgICAgICAgICBpZigodGhpcy5wbGFjZW1lbnQgPT0gMCAmJiBkZWx0YV95ID4gMCkgfHwgKHRoaXMucGxhY2VtZW50ID09IDEgJiYgZGVsdGFfeSA8IDApKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZWFyQmVhZHMuZm9yRWFjaCgodmFsdWU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5nZXRDb21wb25lbnQoXCJCZWFkXCIpLm9uVG91Y2hNb3ZlKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5Tm9kZS5zZXRQb3NpdGlvbigodGhpcy5wbGFjZW1lbnQgPT0gMCA/IHRoaXMuc3RhcnROb2RlLmdldFBvc2l0aW9uKCkgOiB0aGlzLmVuZE5vZGUuZ2V0UG9zaXRpb24oKSkpO1xyXG5cclxuICAgICAgICB0aGlzLm5lYXJCZWFkcy5mb3JFYWNoKCh2YWx1ZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5nZXRDb21wb25lbnQoXCJCZWFkXCIpLm9uVG91Y2hFbmQoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pbmFjdGl2ZVNGO1xyXG5cclxuICAgICAgICB0aGlzLnRvdWNoZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRyYWdnZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5lYXJCZWFkcyA9IFtdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==