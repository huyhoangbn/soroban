const {ccclass, property} = cc._decorator;

@ccclass
export default class TutorialNode extends cc.Component {
    @property([cc.Integer])
    predefinedRows: number[] = [];

    @property([cc.Integer])
    interactiveRows: number[] = []; // the beads that are allowed to move are stored in binary number (ex. 0b10000 for first [1] bead to be interactive)

    @property (cc.Integer)
    completeValue: number = -1;
}
