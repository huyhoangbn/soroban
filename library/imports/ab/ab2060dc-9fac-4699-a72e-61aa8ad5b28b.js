"use strict";
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