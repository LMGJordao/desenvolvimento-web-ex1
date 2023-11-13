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
let totalScrollDepth = getTotalScrollDepth(document.documentElement);

// User interaction
window.addEventListener("resize", event => {
    //A window resize causes this value to change
    totalScrollDepth = getTotalScrollDepth(document.documentElement);
});

window.addEventListener("scroll", event => {
    //Debug information
    document.getElementById("debug").innerHTML = getScrollProgress(document.documentElement, totalScrollDepth);
});