/*

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, 
outputting a grid of the given width and height.

*/

// Your code here.
let chessboard = (x) => {
  let board = ""
  for(let i = 0; i < x; i++) {
    let evenRow = i % 2 == 0

    for(let j = 0; j < x; j++) {
      let evenCol = j % 2 == 0

      if ((evenRow && evenCol) || (!evenRow && !evenCol)) {
        board += "#"
      }
      else {
        board += " "
      }
      if (j == x - 1 && i != x-1) {
        board += "\n"
      }
    }
  }
  console.log(board)
}

chessboard(8)
