// ==UserScript==
// @name         Custom Tape Operator Players
// @icon         https://tapeop.dev/assets/favicon.png
// @version      0.0.1
// @match        https://sansa.stravers.live/*
// @allFrames    true
// ==/UserScript==

(function() {
    'use strict';

    function tryRemoveButton() {
        const button = document.querySelector('button[data-allplay="captions"]');
        if (button) {
            button.remove();
        }
    }

    tryRemoveButton();

    const observer = new MutationObserver((mutations) => {
        tryRemoveButton();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();