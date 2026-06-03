// ==UserScript==
// @name         Custom Tape Operator
// @icon         https://tapeop.dev/assets/favicon.png
// @version      0.0.1
// @match        https://tapeop.dev/*
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement('style');
    style.textContent = `
  @media screen and (max-width: 800px), screen and (max-height: 600px) {
    #container {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
`;
    document.head.appendChild(style);
})();