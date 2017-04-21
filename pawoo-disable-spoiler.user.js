// ==UserScript==
// @name       Pawoo Disable Spoiler
// @namespace  http://aycabta.github.io/
// @version    0.0.2
// @description  Pawooooooooooooooo
// @include    /^https:\/\/pawoo.net/
// @copyright  2017+, aycabta
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
    var disableSpoiler = () => {
        setTimeout(() => {
            var spoilers = document.querySelectorAll('.media-spoiler');
            spoilers.forEach(spoiler => {
                var container = spoiler.parentElement;
                var ev = document.createEvent('MouseEvents');
                ev.initEvent('click', true, true);
                spoiler.dispatchEvent(ev);
                var button = container.querySelector('button');
                button.parentElement.removeChild(button);
            });
        }, 200);
    };
    var observer = new MutationObserver(mutations => {
        mutations.forEach(m => {
            if (m.addedNodes !== undefined) {
                m.addedNodes.forEach(n => {
                    disableSpoiler(n);
                });
            }
        });
    });
    observer.observe(document.querySelector('body'), { childList: true, subtree: true });
})();
