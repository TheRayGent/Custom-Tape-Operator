// ==UserScript==
// @name         Custom Tape Operator
// @icon         https://tapeop.dev/assets/favicon.png
// @version      0.0.2
// @match        https://tapeop.dev/*
// ==/UserScript==

(function() {
    'use strict';
    
    const logo = document.querySelector('#logo');
    if (logo) {
        logo.remove();
    }

    const style = document.createElement('style');
    style.textContent = `
  @media screen and (max-width: 800px), screen and (max-height: 600px) {
    #container {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    #header,
    #sources,
    #footer {
      font-size: 0.9rem;
      height: 2.7rem;
      min-height: 2.7rem;
      line-height: 2.7rem;
    }

    #watched-movies-toggle {
      font-size: 0.9rem;
    }
  }
`;
    document.head.appendChild(style);
})();
