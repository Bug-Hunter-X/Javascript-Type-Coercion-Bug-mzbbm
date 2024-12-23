# Javascript Type Coercion Bug
This repository demonstrates a common Javascript bug related to type coercion.  When adding a number and a string, Javascript performs string concatenation instead of numerical addition. This can lead to unexpected results and errors in your code.  The `bug.js` file shows the erroneous behavior, while `bugSolution.js` provides a solution.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the code. You will notice that adding 1 and "1" results in "11" instead of 2.

## Solution
The `bugSolution.js` file demonstrates how to avoid this issue using explicit type conversion (e.g., using `parseInt()` to convert the string to a number before the addition).