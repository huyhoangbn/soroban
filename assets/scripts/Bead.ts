import { ResourcePack } from "./ResourcePack";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bead extends cc.Component {
    @property(cc.Node)
    bodyNode: cc.Node = null;

    @property(cc.Node)
    startNode: cc.Node = null;

    @property(cc.Node)
    endNode: cc.Node = null;

    @property(cc.Boolean)
    showDebug = false;

    activeSF: cc.SpriteFrame = null;
    focusedSF: cc.SpriteFrame = null;
    inactiveSF: cc.SpriteFrame = null;

    reverted: boolean = false;

    placement: number = 0;

    touched: boolean = false;

    nearBeads: cc.Node[] = [];

    dragged: boolean = false;

    initialized: boolean = false;

    initialize() {
        this.reverted = (this.startNode.getPosition().y > this.endNode.getPosition().y);

        this.bodyNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.bodyNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.bodyNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.bodyNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

        this.initialized = true;
    }

    update(dt) {
        if(!this.initialized) return;
        
        // snap body to the predefined positions
        if(this.touched) {
            if(!this.reverted) {
                if(this.bodyNode.y >= this.endNode.y) this.setPlacement(1);
                else if(this.bodyNode.y <= this.startNode.y) this.setPlacement(0);
            } else {
                if(this.bodyNode.y <= this.endNode.y) this.setPlacement(1);
                else if(this.bodyNode.y >= this.startNode.y) this.setPlacement(0);
            }
        }

        if(this.showDebug) {
            console.log("Placement: " + this.placement);
        }
    }

    applyTheme(resourcePack: ResourcePack) {
        this.activeSF = resourcePack.bead_active;
        this.focusedSF = resourcePack.bead_focused;
        this.inactiveSF = resourcePack.bead_inactive;

        this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.inactiveSF;
    }

    reset() {
        this.onTouchEnd(null);
        this.setPlacement(0);
    }

    setPlacement(value: number) {
        if(value == 0) {
            // disable bead movement if placement changes only if the bead is dragged by other
            if(this.placement == 1 && this.dragged) this.onTouchEnd(null);

            this.bodyNode.setPosition(this.startNode.getPosition());
            this.placement = 0;
        } else {
            if(this.placement == 0 && this.dragged) this.onTouchEnd(null);

            this.bodyNode.setPosition(this.endNode.getPosition());
            this.placement = 1;
        }
    }

    setInteractive(value: boolean) {
        // sloppy shit
        console.log("interactive off");
        this.bodyNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.bodyNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.bodyNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.bodyNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

        if(value) {
            console.log("interactive on");
            this.bodyNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.bodyNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.bodyNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.bodyNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
    }

    onTouchStart(event: cc.Event.EventTouch) {
        this.touched = true;
        this.dragged = false;
        this.nearBeads = [];

        // don't drag any beads if user choose (5) bead
        if(this.reverted) {
            this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.activeSF;

            return;
        }

        if(!event) {
            this.dragged = true; // dragged beads don't drag any beads with them

            this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.focusedSF;
        } else  {
            let foundThis = false;
            for(let i = 1; i < 5; ++i) { // don't count last beard (top one)
                let value = this.node.getParent().children[i];

                if(this.node == value) {
                    foundThis = true;
                    continue;
                }
                
                // add only upper beads for first placement and down beads if second placement
                if((this.placement == 0 && !foundThis) || (this.placement == 1 && foundThis)) {
                    // add only beads with the same placement
                    if(value.name == "Bead" && value.getComponent("Bead").placement == this.placement) {
                        value.getComponent("Bead").onTouchStart(null);
                        this.nearBeads.push(value);
                    }
                }
            }

            this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.activeSF;
        }
    }

    onTouchMove(event: cc.Event.EventTouch) {
        if(!this.touched) return;

        let delta_y = event.getDeltaY();

        if(this.dragged || 
          (delta_y > 0 && event.getLocationY() >= this.bodyNode.getBoundingBoxToWorld().center.y) ||
          (delta_y < 0 && event.getLocationY() <= this.bodyNode.getBoundingBoxToWorld().center.y)) {
            this.bodyNode.y += delta_y;

            // prevent beads dragged from first position to go down and from second position to go up
            if((this.placement == 0 && delta_y > 0) || (this.placement == 1 && delta_y < 0))
                this.nearBeads.forEach((value: cc.Node) => {
                    value.getComponent("Bead").onTouchMove(event);
                });
        }
    }

    onTouchEnd(event: cc.Event.EventTouch) {
        this.bodyNode.setPosition((this.placement == 0 ? this.startNode.getPosition() : this.endNode.getPosition()));

        this.nearBeads.forEach((value: cc.Node) => {
            value.getComponent("Bead").onTouchEnd(event);
        });

        this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.inactiveSF;

        this.touched = false;
        this.dragged = false;
        this.nearBeads = [];
    }
}
