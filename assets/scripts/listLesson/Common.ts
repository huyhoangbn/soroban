import { Global } from "../Global";
import * as  ListLesson  from "./ListLesson";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TutorialManager extends cc.Component {

    @property (cc.ProgressBar)
    progressBar: cc.ProgressBar = null;

    @property (cc.Node)
    backSplash: cc.Node = null;

    @property (cc.Node)
    arrowNode: cc.Node = null;

    @property ([cc.Node])
    listReference: cc.Node[] = [];

    indexCurrent: number = null;

    onLoad() {
        this.progressBar.progress = 0;
        this.indexCurrent = 0;
    }
    start(){
        this.listReference[0].active = true;
    }

    update (dt) {
        if(this.indexCurrent >= this.listReference.length){
            this.backSplash.active = true;
            this.listReference[this.indexCurrent-1].active = false;
            this.indexCurrent -= 1;
        }
    }

    loadMenu() {
        if(Global.firstTime) Global.firstTime = false;
        cc.director.loadScene("scenes/menu");
    }

    loadListLesson() {
        if(Global.firstTime) Global.firstTime = false;
        cc.director.loadScene("scenes/listLesson");
    }

    loadNextLesson(){
        let nextLesson = Global.currentLesson + 1;
        console.error(nextLesson);
        console.error(typeof Global.currentLesson);
        cc.resources.load("prefabs/lesson/Lesson" + nextLesson , cc.Prefab, (error: Error, asset: cc.Prefab) => {
            if(error) {
                console.error(error);
            } else {
                let node = cc.instantiate(asset);
                node.setContentSize(cc.winSize.width, cc.winSize.height);
                this.node.addChild(node);
                Global.currentLesson = (Global.currentLesson+1);
            }          
        });
    }

    nextProgress(){
        this.progressBar.progress += 1 / (this.listReference.length-1);

        this.indexCurrent += 1;

        if(this.indexCurrent >= this.listReference.length){
            return;
        }
        this.listReference[this.indexCurrent].active = true;
        this.listReference[this.indexCurrent-1].active = false;
    }
 
}
