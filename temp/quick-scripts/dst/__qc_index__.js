
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Abacus');
require('./assets/scripts/Bead');
require('./assets/scripts/FullSize');
require('./assets/scripts/Global');
require('./assets/scripts/ResourcePack');
require('./assets/scripts/Row');
require('./assets/scripts/Task');
require('./assets/scripts/ThemeList');
require('./assets/scripts/challenge/ChallengeManager');
require('./assets/scripts/listLesson/Common');
require('./assets/scripts/listLesson/ListLesson');
require('./assets/scripts/listLesson/lesson0/Lesson0');
require('./assets/scripts/listLesson/lesson1/Lesson1');
require('./assets/scripts/listLesson/lesson2/Lesson2');
require('./assets/scripts/listLesson/lesson2/Node1_2');
require('./assets/scripts/listLesson/lesson2/Node3_2');
require('./assets/scripts/listLesson/lesson2/Node4_2');
require('./assets/scripts/listLesson/lesson3/Node1_3');
require('./assets/scripts/listLesson/lesson3/Node2_3');
require('./assets/scripts/listLesson/lesson3/Node4_3');
require('./assets/scripts/listLesson/lesson3/Node5_3');
require('./assets/scripts/listLesson/lesson3/Node6_3');
require('./assets/scripts/listLesson/lesson3/Node7_3');
require('./assets/scripts/listLesson/lesson3/Node8_3');
require('./assets/scripts/listLesson/lesson4/Node1_4');
require('./assets/scripts/listLesson/lesson4/Node2_4');
require('./assets/scripts/listLesson/lesson4/Node3_4');
require('./assets/scripts/listLesson/lesson4/Node4_4');
require('./assets/scripts/listLesson/lesson4/Node5_4');
require('./assets/scripts/listLesson/lesson4/Node6_4');
require('./assets/scripts/manager/SoundManager');
require('./assets/scripts/menu/MenuLoader');
require('./assets/scripts/menu/ThemeOption');
require('./assets/scripts/menu/ThemeSelector');
require('./assets/scripts/miniGame/ChooseNumber');
require('./assets/scripts/miniGame/NumberSeed');
require('./assets/scripts/miniGame/raphael/R.path');
require('./assets/scripts/miniGame/raphael/component/R.style');
require('./assets/scripts/miniGame/raphael/component/R.transform');
require('./assets/scripts/miniGame/raphael/component/optional/R.simplify');
require('./assets/scripts/miniGame/raphael/simplify');
require('./assets/scripts/miniGame/raphael/utils/R.curve');
require('./assets/scripts/miniGame/raphael/utils/R.utils');
require('./assets/scripts/miniGame/writeNumber/NodeWrite');
require('./assets/scripts/miniGame/writeNumber/WriteNumber');
require('./assets/scripts/playground/PlaygroundLoader');
require('./assets/scripts/tutorial/TutorialManager');
require('./assets/scripts/tutorial/TutorialNode');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();