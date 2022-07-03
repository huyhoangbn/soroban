import { Global } from "../Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ThemeOption extends cc.Component {
    @property (cc.Label)
    nameLabel: cc.Label = null;

    @property (cc.Sprite)
    previewSprite: cc.Sprite = null;

    @property (cc.Button)
    button: cc.Button = null;

    initialize(name: string) {
        return new Promise((resolve, reject) => {
            cc.resources.load("themes/" + name + "/bead_inactive", cc.SpriteFrame, (error, asset: cc.SpriteFrame) => {
                if(error) {
                    reject(error.name + " " + error.message);
                }

                name[0].toLocaleUpperCase();
                this.nameLabel.string = name;

                this.previewSprite.spriteFrame = asset;

                let clickEventHandler = new cc.Component.EventHandler();
                clickEventHandler.target = this.node;
                clickEventHandler.component = "ThemeOption";
                clickEventHandler.handler = "buttonCallback";
                clickEventHandler.customEventData = name;

                this.button.clickEvents.push(clickEventHandler);

                resolve("");
            });
        });
    }

    buttonCallback(event: any, customEventData: string) {
        Global.resourcePack = customEventData;

        console.log("Changed to " + customEventData);
    }
}
