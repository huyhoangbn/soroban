// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Node2_4 extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        this.setAction();
    }

    setAction(){
        let txt = this.node.getChildByName("text");
        let lb = this.node.getChildByName("lb");
        txt.active = false;
        lb.active = false;
        let action1 = cc.callFunc(()=>{
           this.label.string = "Phép tính trên được đọc là 1 + 1 + 1 con nhé!";
           txt.active = true;
           lb.active = true;
        })
        let action2 = cc.callFunc(()=>{
            this.label.string = "Trong toán bàn tính soroban thường phép tính cộng không ghi là cộng và thường được viết theo cột dọc. Bây giờ chúng mình cùng biểu diễn phép tính 1 + 1 + 1 trên bàn tính soroban nào";
        })
        let action3 = cc.callFunc(()=>{
            this.label.string = "Phép tính trên được đọc là 1 + 1 + 1 con nhé!";
            txt.active = true;
            lb.active = true;
         })


        this.node.runAction(
            cc.sequence(
                cc.delayTime(3.0),
                action1,
                cc.delayTime(3.0),
                action2,
            )
        );
    }
}
