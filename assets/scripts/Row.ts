import { ResourcePack } from "./ResourcePack";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Row extends cc.Component {
    // horizontal on 120
    @property (cc.Label)
    numberLabel: cc.Label = null;

    beads: cc.Node[] = [];
    number = 0;

    initialized: boolean = false;

    initialize() {
        this.node.children.forEach((value: cc.Node) => {
            if(value.name == "Bead") {
                this.beads.push(value);

                value.getComponent("Bead").initialize();
            }

            this.initialized = true;
        });
    }

    update(dt) {
        if(!this.initialized) return;

        this.number = 0;

        this.beads.forEach((value: cc.Node, index: number) => {
            if(value.getComponent("Bead").placement == 1) {
                if(index < 4) this.number++;
                else this.number += 5;
            }
        });

        this.numberLabel.string = this.number.toString();
    }

    setValue(value: number) {
        if(value < 0 || value > 9) {
            console.error("Invalid value passed to Row.setValue");
            return;
        }

        // reset row
        this.beads.forEach(value => {
            value.getComponent("Bead").setPlacement(0);
        });

        let index = 0; // keep track of (1) beads to set them in order
        while(value > 0) {
            let node: cc.Node = null;

            if(value >= 5) {
                node = this.beads[4];
                value -= 5;
            } else {
                node = this.beads[index];

                index++;
                value--;
            }

            node.getComponent("Bead").setPlacement(1);
        }
    }

    setInteractive(value: boolean, which: number) {
        if(!value) {
            this.beads.forEach(node => {
                node.getComponent("Bead").setInteractive(false);
            });
        } else {
            for(let i = this.beads.length - 1; i >= 0; --i) {
                if(((which >> i) & 1) == 1) {
                    this.beads[this.beads.length - 1 - i].getComponent("Bead").setInteractive(true);
                }
            }
        }
    }

    applyTheme(resourcePack: ResourcePack) {
        this.beads.forEach((value: cc.Node) => {
            value.getComponent("Bead").applyTheme(resourcePack);
        });

        this.node.getChildByName("MiddleVBar").getComponent(cc.Sprite).spriteFrame = resourcePack.vbar;
    }

    reset() {
        this.beads.forEach((value: cc.Node) => {
            value.getComponent("Bead").reset();
        });
    }
}
