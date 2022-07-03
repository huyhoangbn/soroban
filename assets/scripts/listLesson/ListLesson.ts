import { Global } from "../Global";
const {ccclass, property} = cc._decorator;

@ccclass
export default class ListLesson extends cc.Component {
    start () {
    }
    onBackMenu() {
        cc.director.loadScene("scenes/menu");
    }
    loadPrefab(evt, data){
        console.error(data);
        cc.resources.load("prefabs/lesson/Lesson" + data, cc.Prefab, (error: Error, asset: cc.Prefab) => {
            if(error) {
                console.error(error);
            } else {
                let node = cc.instantiate(asset);
                node.setContentSize(cc.winSize.width, cc.winSize.height);
                this.node.addChild(node);
                Global.currentLesson = parseInt(data);
            }          
        });
    }
}

