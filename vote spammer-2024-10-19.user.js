// ==UserScript==
// @name         vote spammer
// @namespace    http://greasyfork.org/
// @version      2024-10-19
// @description  try to take over this website with obezag votes
// @author       kroneckr
// @match        https://www.si.com/high-school/national/national-high-school-mascot-bracket-round-2-vote-for-key-obezags-or-harpeth-hall-honeybears-01jqc0hdj8pj
// @icon         https://www.google.com/s2/favicons?sz=64&domain=si.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Set an interval to keep checking for the element
    const intervalId = setInterval(() => {
        // Select all elements that have both 'css-answer-span' and 'pds-answer-span' classes
        const elements = document.querySelectorAll('.css-answer-span.pds-answer-span');

        // Loop through each element to find the one with the specific text content
        elements.forEach(element => {
            if (element.textContent.trim() === '1. Key Obezags (Maryland)') {
                element.click(); // Trigger a click on the element
                clearInterval(intervalId); // Stop the interval after the element is clicked
            }
        });

        // Select the first element with the class 'css-vote-button pds-vote-button'
        const voteButton = document.querySelector('.css-vote-button.pds-vote-button');

        // Check if the button exists, then click on it
        if (voteButton) {
            voteButton.click(); // Trigger a click on the vote button
            clearInterval(intervalId); // Stop the interval after clicking

            // Wait 0.50 seconds (500 milliseconds) before reloading the page
            setTimeout(() => {
                window.location.reload(); // Reload the page after the delay
            }, 500); // Delay of 500 milliseconds
        } else {
            console.log('Vote button not found');
        }
    }, 100); // Check every 0.1 seconds (100 milliseconds)

})();
