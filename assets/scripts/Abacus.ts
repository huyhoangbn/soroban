import { ResourcePack } from "./ResourcePack";
import { Global } from "./Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Abacus extends cc.Component {
    @property(cc.Node)
    vbars: cc.Node = null;

    @property(cc.Node) 
    hbars: cc.Node = null;

    resourcePack: ResourcePack = null;

    rows: cc.Node[] = [];
    score: number = 0;

    initialized: boolean = false;

    onLoad(){
        this.initialize();
    }

    initialize() {
        return new Promise((resolve, reject) => {
            this.rows = [];

            this.node.children.forEach((value: cc.Node) => {
                if(value.name == "Row") this.rows.push(value);
            });

            this.resourcePack = new ResourcePack();
            this.resourcePack.loadTheme(Global.resourcePack).then(() => {
                this.rows.forEach((value: cc.Node) => {
                    value.getComponent("Row").initialize();
                    value.getComponent("Row").applyTheme(this.resourcePack);
                });

                this.vbars.children.forEach((value: cc.Node) => {
                    value.getComponent(cc.Sprite).spriteFrame = this.resourcePack.vborder;
                });

                this.hbars.children.forEach((value: cc.Node) => {
                    if(value.name == "Middle")
                        value.getComponent(cc.Sprite).spriteFrame = this.resourcePack.mbar;
                    else
                        value.getComponent(cc.Sprite).spriteFrame = this.resourcePack.hbar;
                });

                this.initialized = true;

                resolve("");
            }).catch(error => reject(error));
        });
    }

    update (dt) {
        if(!this.initialized) return;

        this.score = 0;

        this.rows.forEach((value: cc.Node, index: number) => {
            let number = value.getComponent("Row").number;

            for(let i = this.rows.length - 1 - index; i > 0; --i)
                number *= 10;

            this.score += number;
        });
    }

    setInteractive(value: boolean) {
        this.rows.forEach(node => {
            node.getComponent("Row").setInteractive(value);
        });
    }

    setRowInteractive(row: number, which: number) {
        if(row < 0 || row >= this.rows.length) {
            console.error("Invalid row index on Abacus.setRowValue");
            return;
        }

        this.rows[row].getComponent("Row").setInteractive(true, which);
    }

    setRowValue(row: number, value: number) {
        if(row < 0 || row >= this.rows.length) {
            console.error("Invalid row index on Abacus.setRowValue");
            return;
        }

        this.rows[row].getComponent("Row").setValue(value);
    }

    reset() {
        this.rows.forEach((value: cc.Node) => {
            value.getComponent("Row").reset();
        });
    }
}
