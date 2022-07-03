
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manager/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e58dpymDNKubYGUr12YDTa', 'SoundManager');
// scripts/manager/SoundManager.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var SoundManager = cc.Class({
  "extends": cc.Component,
  properties: {
    audioSource: {
      "default": null,
      type: cc.AudioSource
    },
    bkg_SoundInGame: {
      "default": null,
      type: cc.AudioClip
    },
    currentAudio: 0,
    soundActive: 0
  },
  onLoad: function onLoad() {
    cc.sys.localStorage.setItem('music', 'on');
    this.soundInGame = this.bkg_SoundInGame;
    SoundManager.instance = this;
    var musicBkg = null;
    cc.loader.loadResDir('sounds', cc.AudioClip, function (error, result) {
      if (error !== null) {}
    });
  },
  start: function start() {},

  /* Start :  Change Method Load Sound => dynamically */
  dynamicallyPlayMusic: function dynamicallyPlayMusic(_soundResource, _loop, _isSFX) {
    var _this = this;

    if (_loop === void 0) {
      _loop = false;
    }

    if (_isSFX === void 0) {
      _isSFX = true;
    }

    if (_isSFX) {
      if (this.isSFX == true) {
        cc.loader.loadRes(_soundResource, cc.AudioClip, function (err, clip) {
          if (err) return;
          _this.currentAudio = cc.audioEngine.play(clip, _loop, 1);
        });
      } else {
        return;
      }
    } else {
      cc.audioEngine.pauseAll();
      cc.loader.loadRes(_soundResource, cc.AudioClip, function (err, clip) {
        _this.currentAudio = cc.audioEngine.play(clip, _loop, 1);
      });
    }
  },
  dynamicallyStopMusic: function dynamicallyStopMusic() {
    cc.audioEngine.pause(this.currentAudio);
  },
  stopMusic: function stopMusic() {
    this.audioSource.pause();
  },
  playMusic: function playMusic() {
    this.audioSource.play();
  },
  playMouse: function playMouse() {
    this.dynamicallyPlayMusic('sounds/mouse_click', false, false);
  }
});
var _default = SoundManager;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFuYWdlclxcU291bmRNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIlNvdW5kTWFuYWdlciIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYXVkaW9Tb3VyY2UiLCJ0eXBlIiwiQXVkaW9Tb3VyY2UiLCJia2dfU291bmRJbkdhbWUiLCJBdWRpb0NsaXAiLCJjdXJyZW50QXVkaW8iLCJzb3VuZEFjdGl2ZSIsIm9uTG9hZCIsInN5cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzb3VuZEluR2FtZSIsImluc3RhbmNlIiwibXVzaWNCa2ciLCJsb2FkZXIiLCJsb2FkUmVzRGlyIiwiZXJyb3IiLCJyZXN1bHQiLCJzdGFydCIsImR5bmFtaWNhbGx5UGxheU11c2ljIiwiX3NvdW5kUmVzb3VyY2UiLCJfbG9vcCIsIl9pc1NGWCIsImlzU0ZYIiwibG9hZFJlcyIsImVyciIsImNsaXAiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJwYXVzZUFsbCIsImR5bmFtaWNhbGx5U3RvcE11c2ljIiwicGF1c2UiLCJzdG9wTXVzaWMiLCJwbGF5TXVzaWMiLCJwbGF5TW91c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ3hCLGFBQVNELEVBQUUsQ0FBQ0UsU0FEWTtBQUd4QkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkEsS0FETDtBQU1SQyxJQUFBQSxlQUFlLEVBQUU7QUFDYixpQkFBUyxJQURJO0FBRWJGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUTtBQUZJLEtBTlQ7QUFVUkMsSUFBQUEsWUFBWSxFQUFFLENBVk47QUFXUkMsSUFBQUEsV0FBVyxFQUFFO0FBWEwsR0FIWTtBQWdCeEJDLEVBQUFBLE1BaEJ3QixvQkFnQmY7QUFDTFgsSUFBQUEsRUFBRSxDQUFDWSxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDLElBQXJDO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixLQUFLUixlQUF4QjtBQUNBUixJQUFBQSxZQUFZLENBQUNpQixRQUFiLEdBQXdCLElBQXhCO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLElBQWY7QUFDQWpCLElBQUFBLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVUMsVUFBVixDQUFxQixRQUFyQixFQUErQm5CLEVBQUUsQ0FBQ1EsU0FBbEMsRUFBNkMsVUFBQ1ksS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzVELFVBQUlELEtBQUssS0FBSyxJQUFkLEVBQW9CLENBQ25CO0FBQ0osS0FIRDtBQUlILEdBekJ1QjtBQTJCeEJFLEVBQUFBLEtBM0J3QixtQkEyQmhCLENBQ1AsQ0E1QnVCOztBQTZCeEI7QUFDQUMsRUFBQUEsb0JBOUJ3QixnQ0E4QkhDLGNBOUJHLEVBOEJhQyxLQTlCYixFQThCNEJDLE1BOUI1QixFQThCMkM7QUFBQTs7QUFBQSxRQUE5QkQsS0FBOEI7QUFBOUJBLE1BQUFBLEtBQThCLEdBQXRCLEtBQXNCO0FBQUE7O0FBQUEsUUFBZkMsTUFBZTtBQUFmQSxNQUFBQSxNQUFlLEdBQU4sSUFBTTtBQUFBOztBQUMvRCxRQUFJQSxNQUFKLEVBQVk7QUFDUixVQUFJLEtBQUtDLEtBQUwsSUFBYyxJQUFsQixFQUF3QjtBQUNwQjNCLFFBQUFBLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVVUsT0FBVixDQUFrQkosY0FBbEIsRUFBa0N4QixFQUFFLENBQUNRLFNBQXJDLEVBQWdELFVBQUNxQixHQUFELEVBQU1DLElBQU4sRUFBZTtBQUMzRCxjQUFJRCxHQUFKLEVBQVM7QUFDVCxVQUFBLEtBQUksQ0FBQ3BCLFlBQUwsR0FBb0JULEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkYsSUFBcEIsRUFBMEJMLEtBQTFCLEVBQWlDLENBQWpDLENBQXBCO0FBQ0gsU0FIRDtBQUlILE9BTEQsTUFLTztBQUNIO0FBQ0g7QUFDSixLQVRELE1BU087QUFDSHpCLE1BQUFBLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUUsUUFBZjtBQUNBakMsTUFBQUEsRUFBRSxDQUFDa0IsTUFBSCxDQUFVVSxPQUFWLENBQWtCSixjQUFsQixFQUFrQ3hCLEVBQUUsQ0FBQ1EsU0FBckMsRUFBZ0QsVUFBQ3FCLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQzNELFFBQUEsS0FBSSxDQUFDckIsWUFBTCxHQUFvQlQsRUFBRSxDQUFDK0IsV0FBSCxDQUFlQyxJQUFmLENBQW9CRixJQUFwQixFQUEwQkwsS0FBMUIsRUFBaUMsQ0FBakMsQ0FBcEI7QUFDSCxPQUZEO0FBR0g7QUFDSixHQTlDdUI7QUErQ3hCUyxFQUFBQSxvQkEvQ3dCLGtDQStDRDtBQUNuQmxDLElBQUFBLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUksS0FBZixDQUFxQixLQUFLMUIsWUFBMUI7QUFDSCxHQWpEdUI7QUFrRHhCMkIsRUFBQUEsU0FsRHdCLHVCQWtEWjtBQUNSLFNBQUtoQyxXQUFMLENBQWlCK0IsS0FBakI7QUFDSCxHQXBEdUI7QUFxRHhCRSxFQUFBQSxTQXJEd0IsdUJBcURaO0FBQ1IsU0FBS2pDLFdBQUwsQ0FBaUI0QixJQUFqQjtBQUNILEdBdkR1QjtBQXdEeEJNLEVBQUFBLFNBeER3Qix1QkF3RFo7QUFDUixTQUFLZixvQkFBTCxDQUEwQixvQkFBMUIsRUFBK0MsS0FBL0MsRUFBcUQsS0FBckQ7QUFDSDtBQTFEdUIsQ0FBVCxDQUFuQjtlQTZEZXhCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU291bmRNYW5hZ2VyID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBhdWRpb1NvdXJjZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb1NvdXJjZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBia2dfU291bmRJbkdhbWU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VycmVudEF1ZGlvOiAwLFxyXG4gICAgICAgIHNvdW5kQWN0aXZlOiAwLFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211c2ljJywgJ29uJyk7XHJcbiAgICAgICAgdGhpcy5zb3VuZEluR2FtZSA9IHRoaXMuYmtnX1NvdW5kSW5HYW1lO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG11c2ljQmtnID0gbnVsbDtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0Rpcignc291bmRzJywgY2MuQXVkaW9DbGlwLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICAvKiBTdGFydCA6ICBDaGFuZ2UgTWV0aG9kIExvYWQgU291bmQgPT4gZHluYW1pY2FsbHkgKi9cclxuICAgIGR5bmFtaWNhbGx5UGxheU11c2ljKF9zb3VuZFJlc291cmNlLCBfbG9vcCA9IGZhbHNlLCBfaXNTRlggPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKF9pc1NGWCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NGWCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhfc291bmRSZXNvdXJjZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBjbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEF1ZGlvID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBfbG9vcCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKF9zb3VuZFJlc291cmNlLCBjYy5BdWRpb0NsaXAsIChlcnIsIGNsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEF1ZGlvID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBfbG9vcCwgMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkeW5hbWljYWxseVN0b3BNdXNpYygpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLmN1cnJlbnRBdWRpbyk7XHJcbiAgICB9LFxyXG4gICAgc3RvcE11c2ljKCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucGF1c2UoKTtcclxuICAgIH0sXHJcbiAgICBwbGF5TXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wbGF5KCk7XHJcbiAgICB9LFxyXG4gICAgcGxheU1vdXNlKCkgeyBcclxuICAgICAgICB0aGlzLmR5bmFtaWNhbGx5UGxheU11c2ljKCdzb3VuZHMvbW91c2VfY2xpY2snLGZhbHNlLGZhbHNlKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb3VuZE1hbmFnZXI7Il19