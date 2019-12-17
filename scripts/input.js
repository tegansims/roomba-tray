// --- reading the file --- //
const fs = require('fs')




let roombaParty = (file) => {
    // --- splitting the file --- //
    let sampleText = fs.readFileSync(file, 'UTF-8')
    let sampleTextSplit = sampleText.split('\n')

    // --- defining the variables for each file line --- //
    let roomDimensions = sampleTextSplit[0]
    let hooverStartingPos = sampleTextSplit[1]
    let patches = sampleTextSplit.slice(2, sampleTextSplit.length-1)
    let drivingInstructions = sampleTextSplit[sampleTextSplit.length - 1]

    console.log(patches)
    // --- pseudocode --- //

    let hooverCurrentPos = hooverStartingPos
    console.log(`hooverStartingPos: ${hooverStartingPos}`)
    let NumberPatchesCleaned = 0
    let patchesCleaned = []

    for (i=0; i < drivingInstructions.length; i++ ) {
        hooverCurrentPos = validMove(roomDimensions, hooverCurrentPos, drivingInstructions[i])
        console.log(hooverCurrentPos)
        
        if (patches.includes(hooverCurrentPos) && !patchesCleaned.includes(hooverCurrentPos)) {
            NumberPatchesCleaned ++
            patchesCleaned.push(hooverCurrentPos)
        } 
    }
    
    console.log(`hooverFinalPos: ${hooverCurrentPos}`)
    console.log(`NumberPatchesCleaned: ${NumberPatchesCleaned}`)
}

// --- valid move helper method --- //
let validMove=(dimensions, currentPos, move) => {
    moveCap = move.toUpperCase()

    if (moveCap === 'N' && currentPos[2] < parseInt(dimensions[0]-1))    currentPos = `${currentPos[0]} ${parseInt(currentPos[2])+1}` 
    if (moveCap === 'S' && currentPos[2] > 0)                            currentPos = `${currentPos[0]} ${parseInt(currentPos[2])-1}`
    if (moveCap === 'E' && currentPos[0] < parseInt(dimensions[2]-1))    currentPos = `${parseInt(currentPos[0])+1} ${currentPos[2]}`
    if (moveCap === 'W' && currentPos[0] > 0)                            currentPos = `${parseInt(currentPos[0])-1} ${currentPos[2]}`
    
    return currentPos
}


roombaParty('input.txt')
roombaParty('test.txt')
