import { Global } from "../Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TutorialManager extends cc.Component {
    @property (cc.Node)
    loadingScreen: cc.Node = null;

    @property (cc.Node)
    abacus: cc.Node = null;

    @property (cc.Node)
    mainTutorial: cc.Node = null;

    @property (cc.Node)
    arrowNode: cc.Node = null;

    @property (cc.Node)
    backSplash: cc.Node = null;

    tutorialParts: cc.Node[] = null;
    currentPartIndex: number = null;

    completeValue: number = null;

    onLoad() {
        this.loadingScreen.active = true;

        cc.resources.load("prefabs/tutorial/" + Global.currentTutorial, cc.Prefab, (error: Error, asset: cc.Prefab) => {
            if(error) {
                console.error(error);
            } else {
                let node = cc.instantiate(asset);

                while(node.children.length > 0) {
                    let value = node.children[0];

                    value.removeFromParent();
                    this.mainTutorial.addChild(value);

                    console.log("Added!");
                }

                node.destroy();

                this.abacus.getComponent("Abacus").initialize().then(() => {
                    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);

                    if(Global.firstTime) this.node.parent.getChildByName("Back").active = false;
        
                    this.startTutorial();
                    this.loadingScreen.active = false;
                }).catch(error => console.error(error));
            }          
        });

        
    }

    update (dt) {
        if(this.completeValue != null) {
            if(this.abacus.getComponent("Abacus").score == this.completeValue) {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
                this.completeValue = null;

                this.onTouchStart(null);
            }
        }
    }

    loadMenu() {
        if(Global.firstTime) Global.firstTime = false;

        cc.director.loadScene("scenes/menu");
    }

    startTutorial() {
        this.tutorialParts = this.mainTutorial.children;

        this.changeTutorialPart(0);
    }

    changeTutorialPart(value: number) {
        if(value < 0) {
            console.error("Invalid index of tutorial part!");
            return;
        } else if(value == this.tutorialParts.length) {
            this.backSplash.active = true;
            this.arrowNode.active = false;
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);

            return;
        }

        if(this.currentPartIndex != null) {
            this.tutorialParts[this.currentPartIndex].active = false;
        }

        this.currentPartIndex = value;

        let node = this.tutorialParts[this.currentPartIndex];
        let script = node.getComponent("TutorialNode");
        node.active = true;

        // reset abacus to normal state (everything on 0 and not interactive)
        this.abacus.getComponent("Abacus").reset();
        this.abacus.getComponent("Abacus").setInteractive(false);

        if(script.predefinedRows.length > 0) {
            for(let i = 0; i < script.predefinedRows.length; ++i) {
                this.abacus.getComponent("Abacus").setRowValue(i, script.predefinedRows[i]);
            }
        }

        if(script.interactiveRows.length > 0 && script.completeValue >= 0) {
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);

            for(let i = 0; i < script.interactiveRows.length; ++i) {
                this.abacus.getComponent("Abacus").setRowInteractive(i, script.interactiveRows[i]);
            }

            this.completeValue = script.completeValue;
            console.log("Complete value: " + this.completeValue);

            this.arrowNode.active = false;
        } else {
            this.arrowNode.active = true;
        }

        console.log("Node name: " + node.name);
    }

    onTouchStart(event: any) {
        this.changeTutorialPart(this.currentPartIndex + 1);
    }
}
