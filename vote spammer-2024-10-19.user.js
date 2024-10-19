// ==UserScript==
// @name         vote spammer
// @namespace    http://tampermonkey.net/
// @version      2024-10-19
// @description  try to take over this website with obezag votes
// @author       kroneckr
// @match        https://www.si.com/high-school/maryland/top-10-high-school-mascots-in-maryland-vote-for-the-best-01jabjn1jkb1
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
            if (element.textContent.trim() === 'Obezags (Key HS)') {
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

            // Wait 0.25 seconds (250 milliseconds) before reloading the page
            setTimeout(() => {
                window.location.reload(); // Reload the page after the delay
            }, 500); // Delay of 250 milliseconds
        } else {
            console.log('Vote button not found');
        }
    }, 100); // Check every 0.1 seconds (100 milliseconds)

})();
