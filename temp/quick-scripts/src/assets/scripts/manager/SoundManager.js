"use strict";
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