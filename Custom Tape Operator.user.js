// ==UserScript==
// @name         Custom Tape Operator
// @icon         https://tapeop.dev/assets/favicon.png
// @version      0.0.3
// @match        https://tapeop.dev/*
// ==/UserScript==

(function() {
    'use strict';

    const logo = document.querySelector('#logo');
    if (logo) {
        logo.remove();
    }

    const footer = document.querySelector('#footer');
    if (footer) {
        footer.remove();
    }

    const style = document.createElement('style');
    style.textContent = `
  #sources :first-child {
	  margin-left: 0;
  }

  #sources {
    justify-content: center !important;
  }
  @media screen and (max-width: 800px), screen and (max-height: 600px) {
    #container {
      padding: 1.5rem;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    #header,
    #sources,
    #footer {
      font-size: 1.2rem;
      height: 3.5rem;
      min-height: 3.5rem;
      line-height: 3.5rem;
    }

    #watched-movies-toggle {
      font-size: 0.9rem;
    }
  }
`;
    document.head.appendChild(style);
})();
