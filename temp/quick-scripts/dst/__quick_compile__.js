
(function () {
var scripts = [{"deps":{"./assets/scripts/challenge/ChallengeManager":1,"./assets/scripts/listLesson/lesson1/Lesson1":2,"./assets/scripts/Global":3,"./assets/scripts/miniGame/raphael/component/optional/R.simplify":4,"./assets/scripts/listLesson/lesson2/Lesson2":5,"./assets/scripts/listLesson/lesson3/Node1_3":6,"./assets/scripts/listLesson/lesson4/Node5_4":7,"./assets/scripts/manager/SoundManager":8,"./assets/scripts/miniGame/raphael/simplify":9,"./assets/scripts/miniGame/raphael/component/R.transform":10,"./assets/scripts/miniGame/writeNumber/NodeWrite":11,"./assets/scripts/playground/PlaygroundLoader":14,"./assets/scripts/tutorial/TutorialNode":15,"./assets/scripts/listLesson/lesson0/Lesson0":16,"./assets/scripts/FullSize":17,"./assets/scripts/ThemeList":18,"./assets/scripts/Row":19,"./assets/scripts/ResourcePack":21,"./assets/scripts/listLesson/lesson3/Node5_3":25,"./assets/scripts/listLesson/lesson2/Node1_2":26,"./assets/scripts/listLesson/lesson2/Node4_2":27,"./assets/scripts/listLesson/lesson3/Node4_3":28,"./assets/scripts/listLesson/lesson3/Node6_3":29,"./assets/scripts/listLesson/lesson3/Node8_3":30,"./assets/scripts/listLesson/lesson4/Node3_4":31,"./assets/scripts/listLesson/lesson2/Node3_2":32,"./assets/scripts/listLesson/lesson4/Node1_4":33,"./assets/scripts/listLesson/lesson3/Node7_3":34,"./assets/scripts/listLesson/lesson4/Node2_4":35,"./assets/scripts/listLesson/lesson4/Node6_4":36,"./assets/scripts/listLesson/lesson4/Node4_4":37,"./assets/scripts/miniGame/NumberSeed":38,"./assets/scripts/miniGame/ChooseNumber":39,"./assets/scripts/listLesson/lesson3/Node2_3":40,"./assets/scripts/Bead":43,"./assets/scripts/miniGame/raphael/component/R.style":45,"./assets/scripts/miniGame/raphael/utils/R.curve":46,"./assets/scripts/miniGame/writeNumber/WriteNumber":47,"./assets/scripts/Task":22,"./assets/scripts/miniGame/raphael/utils/R.utils":13,"./assets/scripts/Abacus":24,"./assets/scripts/menu/MenuLoader":12,"./assets/scripts/listLesson/ListLesson":23,"./assets/scripts/listLesson/Common":20,"./assets/scripts/menu/ThemeOption":42,"./assets/scripts/menu/ThemeSelector":41,"./assets/scripts/tutorial/TutorialManager":48,"./assets/scripts/miniGame/raphael/R.path":44},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/scripts/challenge/ChallengeManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson1/Lesson1.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Global.js"},{"deps":{},"path":"preview-scripts/assets/scripts/miniGame/raphael/component/optional/R.simplify.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson2/Lesson2.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson3/Node1_3.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson4/Node5_4.js"},{"deps":{},"path":"preview-scripts/assets/scripts/manager/SoundManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/miniGame/raphael/simplify.js"},{"deps":{},"path":"preview-scripts/assets/scripts/miniGame/raphael/component/R.transform.js"},{"deps":{},"path":"preview-scripts/assets/scripts/miniGame/writeNumber/NodeWrite.js"},{"deps":{"../Global":3,"../manager/SoundManager":8},"path":"preview-scripts/assets/scripts/menu/MenuLoader.js"},{"deps":{"R.curve":46},"path":"preview-scripts/assets/scripts/miniGame/raphael/utils/R.utils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/playground/PlaygroundLoader.js"},{"deps":{},"path":"preview-scripts/assets/scripts/tutorial/TutorialNode.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson0/Lesson0.js"},{"deps":{},"path":"preview-scripts/assets/scripts/FullSize.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ThemeList.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Row.js"},{"deps":{"../Global":3},"path":"preview-scripts/assets/scripts/listLesson/Common.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ResourcePack.js"},{"deps":{"./Global":3},"path":"preview-scripts/assets/scripts/Task.js"},{"deps":{"../Global":3},"path":"preview-scripts/assets/scripts/listLesson/ListLesson.js"},{"deps":{"./Global":3,"./ResourcePack":21},"path":"preview-scripts/assets/scripts/Abacus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson3/Node5_3.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson2/Node1_2.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson2/Node4_2.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson3/Node4_3.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson3/Node6_3.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson3/Node8_3.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson4/Node3_4.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson2/Node3_2.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson4/Node1_4.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson3/Node7_3.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson4/Node2_4.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson4/Node6_4.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson4/Node4_4.js"},{"deps":{},"path":"preview-scripts/assets/scripts/miniGame/NumberSeed.js"},{"deps":{},"path":"preview-scripts/assets/scripts/miniGame/ChooseNumber.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listLesson/lesson3/Node2_3.js"},{"deps":{"../ThemeList":18},"path":"preview-scripts/assets/scripts/menu/ThemeSelector.js"},{"deps":{"../Global":3},"path":"preview-scripts/assets/scripts/menu/ThemeOption.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Bead.js"},{"deps":{"./utils/R.utils":13,"./component/optional/R.simplify":4,"./component/R.style":45,"./component/R.transform":10},"path":"preview-scripts/assets/scripts/miniGame/raphael/R.path.js"},{"deps":{},"path":"preview-scripts/assets/scripts/miniGame/raphael/component/R.style.js"},{"deps":{},"path":"preview-scripts/assets/scripts/miniGame/raphael/utils/R.curve.js"},{"deps":{},"path":"preview-scripts/assets/scripts/miniGame/writeNumber/WriteNumber.js"},{"deps":{"../Global":3},"path":"preview-scripts/assets/scripts/tutorial/TutorialManager.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    