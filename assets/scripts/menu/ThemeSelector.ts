import { ThemeList } from "../ThemeList";
const {ccclass, property} = cc._decorator;

@ccclass
export default class ThemeSelector extends cc.Component {
    @property (cc.Prefab)
    themeOptionPrefab: cc.Prefab = null;

    @property (cc.Node)
    content: cc.Node = null;

    onLoad() {
        const TOTAL = ThemeList.length;
        let CURRENT = 0;

        ThemeList.forEach((value, index) => {
            let node: cc.Node = cc.instantiate(this.themeOptionPrefab);

            this.content.addChild(node);
            node.setPosition(0, index * -node.getBoundingBox().height);

            node.getComponent("ThemeOption").initialize(value).then(() => {
                CURRENT++;

                if(TOTAL == CURRENT) {
                    this.content.height = TOTAL * node.getBoundingBox().height;

                    console.log("Theme selector initialized");
                }
            }).catch(error => {
                console.error(error);
            });
        });
    }
}
