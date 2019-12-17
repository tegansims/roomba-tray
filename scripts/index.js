
// --- constants --- //
let icons = document.querySelectorAll('.roomba-icon')
let rumba = document.querySelector('.rumba')
let header = document.querySelector('.header')
let dimensionsForm = document.querySelector('.specs')
let calc = document.querySelector('.calc')


// --- event listeners --- //
icons.forEach(icon => icon.addEventListener('click', playRumba))


dimensionsForm.addEventListener('submit', findOrCreateUser)

// --- functions --- //
function playRumba() {
    rumba.play()
}

function findOrCreateUser() {
    event.preventDefault()
    playRumba()
    console.log(`Line 1 is ${event.target.width.value} ${event.target.length.value}`)
    console.log(`Line 2 is ${event.target.xcoord.value} ${event.target.ycoord.value}`)
    console.log(`Line 3 is ${event.target.dirtx1.value} ${event.target.dirty1.value}`)
    console.log(`Line 3 is ${event.target.dirtx2.value} ${event.target.dirty2.value}`)
    console.log(`Line 3 is ${event.target.dirtx3.value} ${event.target.dirty3.value}`)
    console.log(`Line 3 is ${event.target.dirtx4.value} ${event.target.dirty4.value}`)
    console.log(`Line 4 is ${event.target.instructions.value}`)
    
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

    calculating()    

    setTimeout(function(){ 
        calc.innerText=''
        icons.forEach(icon => icon.className='roomba-icon')

        alert(`This little roomba cleaned ${NumberPatchesCleaned} patches and ended up at position ${hooverCurrentPos}`); 
    }, 3000);
}

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



