# Roomba party

Ready to do the roooomba? 

## Instructions for use

Clone and download this repository onto your local machine. 

## To use the sample text file provided by Tray.io
Run `node scripts/input.js` in your terminal.


## To use for other examples
There are two ways to run different examples.


__Firstly__, and most straightforward, run `open index.html` in the terminal, and follow the instructions on screen. It might be an idea to turn your computer sound down low first..


__Secondly__, and slightly more longwinded, edit the file in this folder called `test.txt`, in the following format:

    * Line 1: holds the room dimensions (X Y), separated by a single space
    * Line 2: holds the hoover position 
    * Subsequent lines: contain the zero or more positions of patches of dirt (one per line)
    * Final line: contains the roomba's driving instructions. These should be one of the following characters: N, S, E or W

* Open up the `scripts/input.js` file, and navigate down to the bottom

* Comment out line 48 `roombaParty('input.txt')`, and uncomment line 49 `roombaParty('test.txt')`

* Run `node scripts/input.js` in your terminal

