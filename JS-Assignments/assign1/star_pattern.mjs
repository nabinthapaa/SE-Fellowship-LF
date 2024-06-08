/**
 * Prints the pattern of stars in reverse order
 * starting from the number of star matching the rows
 * defined to single one with in specified row 
 * @param {number} noOfRows - No of rows of star to print
 * @returns {void}
 */
function printStarTopDown(noOfRows) {
    for (let i = noOfRows; i > 0; i--) {
        let star = "";
        for (let j = i; j > 0; j--) {
            star += "*"
        }
        console.log(star);
    }
}

export default printStarTopDown;