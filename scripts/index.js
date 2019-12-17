
// --- constants --- //
let icons = document.querySelectorAll('.roomba-icon')
let rumba = document.querySelector('.rumba')
let header = document.querySelector('.header')
let dimensionsForm = document.querySelector('.specs')
let calc = document.querySelector('.calc')


// --- event listeners --- //
icons.forEach(icon => icon.addEventListener('click', playRumba))
dimensionsForm.addEventListener('submit', userRoombaParty)

// --- functions --- //
function playRumba() {
    rumba.play()
}

function userRoombaParty() {
    event.preventDefault()
    playRumba()
    
    let roomDimensions = `${event.target.width.value} ${event.target.length.value}`
    let hooverStartingPos = `${event.target.xcoord.value} ${event.target.ycoord.value}`
    let patches = [
        `${event.target.dirtx1.value} ${event.target.dirty1.value}`, 
        `${event.target.dirtx2.value} ${event.target.dirty2.value}`,
        `${event.target.dirtx3.value} ${event.target.dirty3.value}`,
        `${event.target.dirtx4.value} ${event.target.dirty4.value}`
    ]
    let drivingInstructions =`${event.target.instructions.value}`

    let hooverCurrentPos = hooverStartingPos
    let NumberPatchesCleaned = 0
    let patchesCleaned = []

    for (i=0; i < drivingInstructions.length; i++ ) {
        hooverCurrentPos = validMove(roomDimensions, hooverCurrentPos, drivingInstructions[i])
        
        if (patches.includes(hooverCurrentPos) && !patchesCleaned.includes(hooverCurrentPos)) {
            NumberPatchesCleaned ++
            patchesCleaned.push(hooverCurrentPos)
        } 
    }
       
    console.log(`Roomba's final position: ${hooverCurrentPos}`)
    console.log(`Number of patches cleaned: ${NumberPatchesCleaned}`)

    calculating()    

    setTimeout(function(){ 
        calc.innerText=''
        icons.forEach(icon => icon.className='roomba-icon')

        alert(`This little roomba cleaned ${NumberPatchesCleaned} patches and ended up at position ${hooverCurrentPos}`); 
    }, 3000);
}

// --- helper methods --- //
let calculating=()=>{
    calc.innerText='Calculating.......'
    playRumba()
    icons.forEach(icon => icon.className='image')
}

let validMove=(dimensions, currentPos, move) => {
    moveCap = move.toUpperCase()

    if (moveCap === 'N' && currentPos[2] < parseInt(dimensions[0]-1))    currentPos = `${currentPos[0]} ${parseInt(currentPos[2])+1}` 
    if (moveCap === 'S' && currentPos[2] > 0)                            currentPos = `${currentPos[0]} ${parseInt(currentPos[2])-1}`
    if (moveCap === 'E' && currentPos[0] < parseInt(dimensions[2]-1))    currentPos = `${parseInt(currentPos[0])+1} ${currentPos[2]}`
    if (moveCap === 'W' && currentPos[0] > 0)                            currentPos = `${parseInt(currentPos[0])-1} ${currentPos[2]}`
    
    return currentPos
}



