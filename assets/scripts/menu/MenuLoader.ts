import { Global } from "../Global";
import * as SoundManager from "../manager/SoundManager"
import * as ListLesson from "../listLesson/ListLesson"

const {ccclass, property} = cc._decorator;

@ccclass
export default class MenuLoader extends cc.Component {
    @property (cc.Node)
    menu: cc.Node = null;

    @property (cc.Node)
    challengeChoser: cc.Node = null;

    @property (cc.Node)
    tutorialChoser: cc.Node = null;

    @property (cc.Node)
    themeSelector: cc.Node = null;

    @property (cc.Node)
    miniGame: cc.Node = null;

    @property (cc.Node)
    startView: cc.Node = null;
    
    loadPlayground() {
        SoundManager.instance.playMouse();
        cc.director.loadScene("scenes/playground");
    }
    loadListLesson(event: any, value: string){
        SoundManager.instance.playMouse();
        cc.director.loadScene("scenes/listLesson");
        Global.currentLesson = 0;
    }
    loadLessonCurrent(){
        console.error(Global.currentLesson);
        cc.resources.load("prefabs/lesson/Lesson" + Global.currentLesson  , cc.Prefab, (error: Error, asset: cc.Prefab) => {
            if(error) {
                console.error(error);
            } else {
                console.error("Ok:",Global.currentLesson);
                let node = cc.instantiate(asset);
                node.setContentSize(cc.winSize.width, cc.winSize.height);
                this.startView.addChild(node);
            }          
        });
    }

    loadChallenge(event: any, value: string) {
        SoundManager.instance.playMouse();
        if(value == "addition" || value == "subtraction" || value == "multiplication" || value == "division") {
            Global.currentChallenge = value;

            cc.director.loadScene("scenes/challenge");
        }
    }

    loadTutorial(event: any, value: string) {
        SoundManager.instance.playMouse();
        if(value == "Basics" || value == "Addition" || value == "Subtraction") {
            Global.currentTutorial = value;

            cc.director.loadScene("scenes/tutorial");
        } else if(value == "SMultiplication") {
            Global.currentTutorial = value;

            cc.director.loadScene("scenes/tutorial_smul");
        } else if(value == "DMultiplication" || value == "Division") {
            Global.currentTutorial = value;

            cc.director.loadScene("scenes/tutorial_ex");
        } else console.error("Invalid argument in MenuLoader.loadTutorial!");
    }

    loadMiniGame(event: any, value: string) {
        SoundManager.instance.playMouse();
        cc.resources.load("prefabs/miniGame/" + value, cc.Prefab, (error: Error, asset: cc.Prefab) => {
            if(error) {
                console.error(error);
            } else {
                let node = cc.instantiate(asset);
                this.miniGame.addChild(node);
            }          
        });
    }

    switchLayout(event: any, value: string) {
        SoundManager.instance.playMouse();
        if(value == "menu") {
            this.menu.active = true;
            this.themeSelector.active = false;
            this.tutorialChoser.active = false;
            this.challengeChoser.active = false;
            this.startView.active = false;
            this.miniGame.active = false;
        } else if(value == "challenge") {
            this.menu.active = false;
            this.challengeChoser.active = true;
        } else if(value == "tutorial") {
            this.menu.active = false;
            this.tutorialChoser.active = true;
        } else if(value == "themeSelector") {
            this.themeSelector.active = true;
        } else if(value == "startView") {
            this.startView.active = true;
        } else if(value == "miniGame") {
            this.menu.active = false;
            this.startView.active = false;
            this.miniGame.active = true;
        }
    }

    editBoxChanged(editBox: cc.EditBox) {
        Global.resourcePack = editBox.string;
    }

    onClickSound(event: any, value: string){
        SoundManager.instance.playMouse();
        let music = cc.sys.localStorage.getItem("music");
        let state = '';
        if (music == "off") {
            event.currentTarget.opacity = 255
            SoundManager.instance.playMusic();
            state = 'on';
        }
        else {
            event.currentTarget.opacity = 180
            SoundManager.instance.stopMusic();
            state = 'off';
        }
        cc.sys.localStorage.setItem("music", state);


    }
}
