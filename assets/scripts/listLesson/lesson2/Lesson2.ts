const {ccclass, property} = cc._decorator;

@ccclass
export default class Lesson2 extends cc.Component {

    @property (cc.Label)
    labelText: cc.Label = null;
    // onLoad () {}
    @property ([cc.Node])
    listReference: cc.Node[] = [];

    start () {
        this.setAction();
    }

    setAction(){

    }
}
