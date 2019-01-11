'use strict';
var doc = window.document;
var docEl = doc.documentElement;
var tid;
console.log('初始化rem');
function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    console.log(width)
    var rem = width / 7.5;
    docEl.style.fontSize = rem + 'px';
}
window.addEventListener('resize', function () {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 100);
}, false);
window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 100);
    }
}, false);

refreshRem();