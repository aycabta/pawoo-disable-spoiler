// ==UserScript==
// @name       Pawoo Disable Spoiler
// @namespace  http://aycabta.github.io/
// @version    0.0.2
// @description  Pawooooooooooooooo
// @include    /^https:\/\/pawoo.net/
// @copyright  2017+, aycabta
// ==/UserScript==

(function() {
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
})();
