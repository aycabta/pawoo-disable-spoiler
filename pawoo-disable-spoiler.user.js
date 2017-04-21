// ==UserScript==
// @name       Pawoo Disable Spoiler
// @namespace  http://aycabta.github.io/
// @version    0.0.1
// @description  Pawooooooooooooooo
// @include    /^https:\/\/pawoo.net/
// @copyright  2017+, You
// ==/UserScript==

(function() {
    var sheet;
    var style = document.createElement('style');
    style.setAttribute('id', 'pawoo-disable-spoiler-css');
    style.type = "text/css";
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
    sheet = style.sheet;
    sheet.insertRule('.media-spoiler {' +
                     '    display: none !important;' +
                     '}', sheet.cssRules.length);
})();
