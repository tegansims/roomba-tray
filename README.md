# Tray.io technical test



## Instructions for use

Clone and download this repository onto your local machine. 

Run `node index.js` in your terminal.


## Use for other examples
Currently this app works just for the one test file. If you would like to run the app for a different test file, please do the following:

* Save the file you want to run **as a .txt file** in this directory, in the following format:

    * Line 1: holds the room dimensions (X Y), separated by a single space
    * Line 2: holds the hoover position
    * Subsequent lines: contain the zero or more positions of patches of dirt (one per line)
    * Final line: contains the roomba's driving instructions. These should be one of the following characters: N, S, E or W

* Open up the index.js file, and navigate down to the bottom

* Change the line `roombaParty('input.txt')` to `roombaParty('[name of your file]')`

* Run `node index.js` in your terminal

