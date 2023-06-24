let liftOne = 0
let liftTwo = 6

let title = document.getElementById("titleText")
let buttonUp = document.getElementById("buttonUp")
let buttonDown = document.getElementById("buttonDown")
let buttonArrays = [buttonUp, buttonDown]
let liftOneFloor = document.getElementById("floorNumberOne")
let liftTwoFloor = document.getElementById("floorNumberTwo")
let arrowUpOne = document.getElementById("arrowUpOne")
let arrowUpTwo = document.getElementById("arrowUpTwo")
let arrowDownOne = document.getElementById("arrowDownOne")
let arrowDownTwo = document.getElementById("arrowDownTwo")

liftOneFloor.innerHTML = liftOne
liftTwoFloor.innerHTML = liftTwo

function displayLiftFloors(liftNumber, liftFloor) {
    liftNumber.innerHTML = liftFloor
}

function displayFloorNumber(floorNumber) {
    if (floorNumber == 0) {
        title.innerHTML = `At the moment, you are on the ground floor`
    } else if (floorNumber == 1) {
        title.innerHTML = `At the moment, you are on the ${floorNumber}st floor`
    } else if (floorNumber == 2) {
        title.innerHTML = `At the moment, you are on the ${floorNumber}nd floor`
    } else if (floorNumber == 3) {
        title.innerHTML = `At the moment, you are on the ${floorNumber}rd floor`
    } else if (floorNumber > 3) {
        title.innerHTML = `At the moment, you are on the ${floorNumber}th floor`
    }
}

function hideArrow(floorNumber, lift) {
    if (liftNumber === liftOne) {
        arrowUpOne.classList.add("hidden")
        arrowDownOne.classList.add("hidden")
    } else {
        arrowUpTwo.classList.add("hidden")
        arrowDownTwo.classList.add("hidden")
    }
}

buttonArrays.forEach(btn => {
    btn.addEventListener("click", function() {
      let floorNumber = prompt("Which floor are you on?")
      while (floorNumber < 0 || floorNumber > 6 || floorNumber == null) {
        floorNumber = prompt("Error! Invalid floor number.")
      }
      displayFloorNumber(floorNumber)
      let liftNumber = whichLift(floorNumber, liftOne, liftTwo)
      console.log(liftNumber)
      console.log(floorNumber)
      console.log(liftOne)
      console.log(liftTwo)
      if (liftNumber == liftOne) {
        liftOne = liftToCustomer(floorNumber, liftOne, liftOneFloor)
        hideArrow(floorNumber, liftOne)
      } else if (liftNumber == liftTwo) {
        liftTwo = liftToCustomer(floorNumber, liftTwo, liftTwoFloor)
        hideArrow(floorNumber, liftTwo)
      }
    })
})

function liftToCustomer(floorNumber, liftFloor, liftFloorDisplay) {
    while (liftFloor != floorNumber) {
        console.log(liftFloor)
        if (liftFloor < floorNumber) {
            liftFloor++
        } else {
            liftFloor--
        }
        displayLiftFloors(liftFloorDisplay, liftFloor)
    }
    return liftFloor

}
function showArrow(floorNumber, lift) {
    if (lift == liftOne) {
        if (lift < floorNumber) {
            arrowUpOne.classList.remove("hidden")
        } 
        if (lift > floorNumber) {
            arrowDownOne.classList.remove("hidden")
        }
    } 
    if (lift == liftTwo) {
        if (lift < floorNumber) {
            arrowUpTwo.classList.remove("hidden")
        } 
        if (lift > floorNumber) {
            arrowDownTwo.classList.remove("hidden")
        }
    }
}

function whichLift(floorNumber, liftOne, liftTwo) {
    if (Math.abs(floorNumber - liftOne) < Math.abs(floorNumber - liftTwo)) {
        showArrow(floorNumber, liftOne)
        return liftOne
    } else if (Math.abs(floorNumber - liftOne) > Math.abs(floorNumber - liftTwo)) {
        showArrow(floorNumber, liftTwo)
        return liftTwo
    } else if (Math.abs(floorNumber - liftOne) == Math.abs(floorNumber - liftTwo)) {
        let minLift = Math.min(liftOne, liftTwo)
        showArrow(floorNumber, minLift)
        return minLift        
    }
}