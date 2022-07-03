"use strict";
cc._RF.push(module, 'fbabfmB6StPLbbwsr7VfPjG', 'ResourcePack');
// scripts/ResourcePack.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcePack = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ResourcePack = /** @class */ (function () {
    function ResourcePack() {
        this.bead_active = null;
        this.bead_focused = null;
        this.bead_inactive = null;
        this.hbar = null;
        this.vbar = null;
        this.mbar = null;
        this.vborder = null;
    }
    ResourcePack.prototype.loadTheme = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var TOTAL = 7;
            var CURRENT = 0;
            var callback = function () {
                CURRENT++;
                if (CURRENT == TOTAL)
                    resolve("");
            };
            cc.resources.load("themes/" + name + "/bead_active", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.bead_active = asset;
                callback();
            });
            cc.resources.load("themes/" + name + "/bead_focused", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.bead_focused = asset;
                callback();
            });
            cc.resources.load("themes/" + name + "/bead_inactive", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.bead_inactive = asset;
                callback();
            });
            cc.resources.load("themes/" + name + "/hbar", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.hbar = asset;
                callback();
            });
            cc.resources.load("themes/" + name + "/vbar", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.vbar = asset;
                callback();
            });
            cc.resources.load("themes/" + name + "/vborder", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.vborder = asset;
                callback();
            });
            cc.resources.load("themes/" + name + "/mbar", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.mbar = asset;
                callback();
            });
        });
    };
    return ResourcePack;
}());
exports.ResourcePack = ResourcePack;

cc._RF.pop();