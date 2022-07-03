// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Node1_4 extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;


    onLoad () {}

    start () {
        this.setAction();
    }
    setAction(){
        let spr1 = this.node.getChildByName("spr1");
        let txt1 = this.node.getChildByName("text1");
        spr1.opacity = 0;
        txt1.opacity = 0;
        spr1.setPosition(cc.v2(-585,250));
        let spr2 = this.node.getChildByName("spr2");
        let txt2 = this.node.getChildByName("text2");
        spr2.opacity = 0;
        txt2.opacity = 0;
        spr2.setPosition(cc.v2(-413,250));
        let txt3 = this.node.getChildByName("text3");
        txt3.opacity = 0;
        let spr4 = this.node.getChildByName("spr4");
        let txt4 = this.node.getChildByName("text4");
        spr4.opacity = 0;
        txt4.opacity = 0;
        spr4.setPosition(cc.v2(77,250));
     
        let actionSpr1 = cc.callFunc(()=>{
            spr1.runAction(cc.sequence(
                cc.fadeTo(0.5,255),
                cc.moveTo(0.5,cc.v2(-585,0)))
            );
        })
        let actionLb1 = cc.callFunc(()=>{
            txt1.runAction(
                cc.fadeTo(0.5,255),
            );
        })

        let actionSpr2 = cc.callFunc(()=>{
            spr2.runAction(cc.sequence(
                cc.fadeTo(0.5,255),
                cc.moveTo(0.5,cc.v2(-413,0)))
            );
        })
        let actionLb2 = cc.callFunc(()=>{
            txt2.runAction(
                cc.fadeTo(0.5,255),
            );
        })
        let actionSpr3_1 = cc.callFunc(()=>{
            spr1.runAction(
                cc.moveTo(0.5,cc.v2(-500,0)))  
        })
        let actionSpr3_2 = cc.callFunc(()=>{
            spr2.runAction(
                cc.moveTo(0.5,cc.v2(-500,0)))
        })
        let actionText3 = cc.callFunc(()=>{
            txt3.runAction(
                cc.fadeTo(0.5,255),
            );
        })

        let actionSpr4 = cc.callFunc(()=>{
            spr4.runAction(cc.sequence(
                cc.fadeTo(0.5,255),
                cc.moveTo(0.5,cc.v2(77,0)))
            );
        })
        let actionLb4 = cc.callFunc(()=>{
            txt4.runAction(
                cc.fadeTo(0.5,255),
            );
        })
        this.node.runAction(
            cc.sequence(
                cc.delayTime(1.0),
                cc.sequence(
                    actionLb1,
                    cc.delayTime(0.5),
                    actionSpr1
                ),
                cc.delayTime(1.0),
                cc.sequence(
                    actionLb2,
                    cc.delayTime(0.5),
                    actionSpr2
                ),
                cc.delayTime(1.0),
                cc.sequence(
                    actionText3,
                    cc.delayTime(0.5),
                    cc.spawn(actionSpr3_1,actionSpr3_2)
                ),
                cc.delayTime(1.0),
                cc.sequence(
                    actionSpr4,
                    cc.delayTime(0.5),
                    actionLb4,
                ),
            )
        );
    }

}
