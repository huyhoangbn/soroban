var SoundManager = cc.Class({
    extends: cc.Component,

    properties: {
        audioSource: {
            default: null,
            type: cc.AudioSource,
        },

        bkg_SoundInGame: {
            default: null,
            type: cc.AudioClip,
        },
        currentAudio: 0,
        soundActive: 0,
    },
    onLoad() {
        cc.sys.localStorage.setItem('music', 'on');
        this.soundInGame = this.bkg_SoundInGame;
        SoundManager.instance = this;
        let musicBkg = null;
        cc.loader.loadResDir('sounds', cc.AudioClip, (error, result) => {
            if (error !== null) {
            }
        });
    },

    start() {
    },
    /* Start :  Change Method Load Sound => dynamically */
    dynamicallyPlayMusic(_soundResource, _loop = false, _isSFX = true) {
        if (_isSFX) {
            if (this.isSFX == true) {
                cc.loader.loadRes(_soundResource, cc.AudioClip, (err, clip) => {
                    if (err) return;
                    this.currentAudio = cc.audioEngine.play(clip, _loop, 1);
                });
            } else {
                return;
            }
        } else {
            cc.audioEngine.pauseAll();
            cc.loader.loadRes(_soundResource, cc.AudioClip, (err, clip) => {
                this.currentAudio = cc.audioEngine.play(clip, _loop, 1);
            });
        }
    },
    dynamicallyStopMusic() {
        cc.audioEngine.pause(this.currentAudio);
    },
    stopMusic() {
        this.audioSource.pause();
    },
    playMusic() {
        this.audioSource.play();
    },
    playMouse() { 
        this.dynamicallyPlayMusic('sounds/mouse_click',false,false);
    }
});

export default SoundManager;