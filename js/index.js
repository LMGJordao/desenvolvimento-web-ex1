"use strict";
// Utility functions
/**
 * This value may change if you resize the window.
 * @param {HTMLElement} element - Any `HTMLElement`, but `document.documentElement` is expected.
 * @returns {number} The total scrollable depth.
 */
const getTotalScrollDepth = (element) => {
    return element.scrollHeight - element.clientHeight;
};

/**
 * This calculates the percentage of depth already scrolled.
 * @param {HTMLElement} element - Any `HTMLElement`, but `document.documentElement` is expected.
 * @param {number} totalElementDepth - The element's total scrollable depth (The element's total height minus its displayed height)
 * @returns {number} A number in the range [0, 100].
 */
const getScrollProgress = (element, totalElementDepth) => {
    return Math.round(element.scrollTop / totalElementDepth * 100);
};

// Global variables
const targetScrollElement = document.documentElement;
let totalScrollDepth = getTotalScrollDepth(targetScrollElement);
const scene1 = document.getElementById("scene1");
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");
const row4 = document.getElementById("row4");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");


// User interaction
window.addEventListener("resize", event => {
    //A window resize causes this value to change
    totalScrollDepth = getTotalScrollDepth(document.documentElement);
});

window.addEventListener("scroll", event => {
    const depth = getScrollProgress(targetScrollElement, totalScrollDepth);

    scene1.classList.toggle("hide", !(depth >= 10 && depth <= 30));
    row1.classList.toggle("hide", !(depth >= 32));
    row2.classList.toggle("hide", !(depth >= 38));
    row3.classList.toggle("hide", !(depth >= 44));
    row4.classList.toggle("hide", !(depth >= 50));
    scene3.classList.toggle("hide", !(depth >= 58 && depth <= 78));
    scene4.classList.toggle("hide", !(depth >= 82));
});