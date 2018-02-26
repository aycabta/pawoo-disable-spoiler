// ==UserScript==
// @name       Pawoo Disable Spoiler
// @license    MIT
// @namespace  http://aycabta.github.io/
// @version    0.1.0
// @description  Pawooooooooooooooo
// @include    /^https:\/\/pawoo.net/
// @copyright  2017+, aycabta
// ==/UserScript==

(function() {
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
    disableSpoiler();
})();
