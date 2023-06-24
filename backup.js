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

const displayLiftFloors = function(liftNumber, liftFloor) {
    liftNumber.innerHTML = liftFloor
}

displayLiftFloors(liftOne, liftTwo)

const displayFloorNumber = function(floorNumber) {
    if (floorNumber == 0) {
        title.innerHTML = `At the moment, you are on the ground floor`
    } 
    if (floorNumber == 1) {
        title.innerHTML = `At the moment, you are on the ${floorNumber}st floor`
    } else if (floorNumber == 2) {
        title.innerHTML = `At the moment, you are on the ${floorNumber}nd floor`
    } else if (floorNumber == 3) {
        title.innerHTML = `At the moment, you are on the ${floorNumber}rd floor`
    } else if (floorNumber > 3) {
        title.innerHTML = `At the moment, you are on the ${floorNumber}th floor`
    }
}

const hide = function(liftNumber) {
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
      while (floorNumber < 0 || floorNumber > 6) {
        floorNumber = prompt("Error! Invalid floor number.")
      }
      displayFloorNumber(floorNumber)
      let liftNumber = whichLift(floorNumber, liftOne, liftTwo)
      if (liftNumber == liftOne) {
        liftToCustomer(floorNumber, liftNumber, liftOneFloor)
      } else {
        liftToCustomer(floorNumber, liftNumber, liftTwoFloor)
      }
    })
})

const liftToCustomer = function(floorNumber, liftFloor, liftFloorDisplay) {
        while (liftFloor != floorNumber) {
                if (liftFloor < floorNumber) {
                    liftFloor++;
                } else {
                    liftFloor--;
                }
                    displayLiftFloors(liftFloorDisplay, liftFloor)
        }
        hide(liftFloor)
}

const whichLift = function (floorNumber, liftOne, liftTwo) {
    if (Math.abs(floorNumber - liftOne) < Math.abs(floorNumber - liftTwo)) {
        if (floorNumber > liftOne) {
            arrowUpOne.classList.remove("hidden")
        } else {
            arrowDownOne.classList.remove("hidden")
        }
        return liftOne
    } 
    if (Math.abs(floorNumber - liftOne) > Math.abs(floorNumber - liftTwo)) {
        if (floorNumber > liftTwo) {
            arrowUpTwo.classList.remove("hidden")
        } else {
            arrowDownTwo.classList.remove("hidden")
        }
        return liftTwo
    } 
    if (Math.abs(floorNumber - liftOne) == Math.abs(floorNumber - liftTwo)) {
        if (liftOne < liftTwo) {
            arrowUpOne.classList.remove("hidden")
            return liftOne
        } else if (liftTwo < liftOne) {
            arrowUpTwo.classList.remove("hidden")            
            return liftTwo
        }
    }
}

