// TODO: Declare any global variables we need
let headsFlips = 1
let tailsFlips = 2
let headsPercent = '0%'
let tailsPercent = ''
let totalflips = 0

document.addEventListener('DOMContentLoaded', function () {
    
    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    document.querySelector('#flip').addEventListener('click',function() {
     let coinFlip = Math.round((Math.random() * 10) +1);
     console.log(coinFlip)
     if (coinFlip % 2 == 0) {
        //flip heads
        console.log('You Flipped Heads')
        headsFlips++
        totalflips++
        console.log(`totalFlips is ${totalFlips}`)
        console.log(headsFlips)
        document.querySelector('')
        document.querySelector
        document.querySelector
        if (tails == 0){
            return 
        }


     }
    })
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})