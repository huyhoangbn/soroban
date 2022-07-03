const {ccclass, property} = cc._decorator;

@ccclass
export default class FullSize extends cc.Component {
    start(){
        this.node.setContentSize(cc.winSize.width, cc.winSize.height);
    }
    onLoad() {
        this.node.setContentSize(cc.winSize.width, cc.winSize.height);
    }
    
}
