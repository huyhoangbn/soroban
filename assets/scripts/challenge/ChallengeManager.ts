const {ccclass, property} = cc._decorator;

@ccclass
export default class ChallengeManager extends cc.Component {
    @property (cc.Node)
    loadingScreen: cc.Node = null;

    @property (cc.Node)
    abacus: cc.Node = null;

    @property (cc.Node)
    task: cc.Node = null;

    onLoad() {
        this.loadingScreen.active = true;

        this.abacus.getComponent("Abacus").initialize().then(() => {
            this.task.getComponent("Task").initialize();
            
            this.loadingScreen.active = false;
        }).catch(error => console.error(error));
    }

    loadMenu() {
        cc.director.loadScene("scenes/menu");
    }
}
