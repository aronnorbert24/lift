// WoRKING LIFT TO CUSTOMER

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
let getInButton = document.getElementById("getIn")
let floorButtons = document.getElementById("floorButtons")
let elevatorText = document.getElementById("elevatorText")
let floorZero = document.getElementById("floorZero")
let floorOne = document.getElementById("floorOne")
let floorTwo = document.getElementById("floorTwo")
let floorThree = document.getElementById("floorThree")
let floorFour = document.getElementById("floorFour")
let floorFive = document.getElementById("floorFive")
let floorSix = document.getElementById("floorSix")
let floorButton = [floorZero, floorOne, floorTwo, floorThree, floorFour, floorFive, floorSix]

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
    arrowUpOne.style.borderBottom = "30px solid #000033"
    arrowDownOne.style.borderTop = "30px solid #000033"
    arrowUpTwo.style.borderBottom = "30px solid #000033"
    arrowDownTwo.style.borderTop = "30px solid #000033"
}

buttonArrays.forEach(btn => {
    btn.addEventListener("click", function() {
      let floorNumber = prompt("Which floor are you on?")
      while (floorNumber < 0 || floorNumber > 6 || floorNumber == null) {
        floorNumber = prompt("Error! Invalid floor number.")
      }
      displayFloorNumber(floorNumber)
      let liftNumber = whichLift(floorNumber, liftOne, liftTwo)
      console.log(liftNumber);
      console.log(liftOne)
      console.log(liftTwo)
      if (liftNumber == liftOne) {
        liftOne = liftToCustomer(floorNumber, liftOne, liftOneFloor, liftNumber)
      } else if (liftNumber == liftTwo) {
        liftTwo = liftToCustomer(floorNumber, liftTwo, liftTwoFloor, liftNumber)
      }
      console.log(liftOne)
      console.log(liftTwo)
    })
})

function liftToCustomer(floorNumber, liftFloor, liftFloorDisplay, liftNumber) {
    let countFloor = setInterval(() => {
        console.log(floorNumber)
        console.log(liftFloor)
        if (liftFloor == floorNumber) {
            clearInterval(countFloor)
            hideArrow(floorNumber, liftNumber)
            getIn()
        } else if (liftFloor < floorNumber) {
            liftFloor++
        } else {
            liftFloor--
        }
        displayLiftFloors(liftFloorDisplay, liftFloor)
    }, 1000)
    return floorNumber
}
function showArrow(floorNumber, lift) {
    if (lift == liftOne) {
        if (lift < floorNumber) {
            arrowUpOne.style.borderBottom = "30px solid #00f0ff"
        } 
        if (lift > floorNumber) {
            arrowDownOne.style.borderTop = "30px solid #00f0ff"
        }
    } 
    if (lift == liftTwo) {
        if (lift < floorNumber) {
            arrowUpTwo.style.borderBottom = "30px solid #00f0ff"
        } 
        if (lift > floorNumber) {
            arrowDownTwo.style.borderTop = "30px solid #00f0ff"
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

function getIn() {
    getInButton.classList.remove("hidden")
    getInButton.addEventListener("click", function() {
        elevatorText.classList.remove("hidden")
        floorButtons.classList.remove("hidden")
        getInButton.classList.add("hidden")
        travel(floorButton)
    })
}

function travel(floorArray) {
    floorArray.forEach(floor => {
        floor.addEventListener("click", function() {
          showArrow
        })
    })
}