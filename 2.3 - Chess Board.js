/*

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

*/

// Your code here.
var oddString = " # # # #"
var evenString = "# # # # "
var finalString = ""

for (var i = 1; i <= 8; i++) {
  
  if (i==8) {
    finalString+=evenString
  }
  else if (i % 2 != 0) {
    finalString+=oddString + "\n";
  }
  else {
    finalString+=evenString +"\n";
  }
};

console.log(finalString);
