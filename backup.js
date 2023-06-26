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

function hideArrow() {
    arrowUpOne.style.borderBottom = "30px solid #000033"
    arrowDownOne.style.borderTop = "30px solid #000033"
    arrowUpTwo.style.borderBottom = "30px solid #000033"
    arrowDownTwo.style.borderTop = "30px solid #000033"
}

buttonArrays.forEach(btn => {
    btn.addEventListener("click", function() {
        handleLift()
    })
})

function liftToCustomer(floorNumber, liftFloor, liftFloorDisplay, liftNumber) {
    return new Promise((resolve, reject) => {
        const countFloor = setInterval(() => {
         //   console.log("The lift has to travel to " + floorNumber)
           // console.log("The lift is currently on " + liftFloor);
            if (liftFloor == floorNumber) {
                clearInterval(countFloor)
                resolve(liftFloor)
            } else if (liftFloor < floorNumber) {
                liftFloor++
            } else {
                liftFloor--
            }
            displayLiftFloors(liftFloorDisplay, liftFloor)
        }, 1000)
    }) 
}

async function handleLift() {
    try {
      let floorNumber = prompt("Which floor are you on?")
      while (floorNumber < 0 || floorNumber > 6 || floorNumber == null) {
        floorNumber = prompt("Error! Invalid floor number.")
      }
      displayFloorNumber(floorNumber)
      console.log("Lift One is on floor" + liftOne)
      console.log("Lift Two is on floor" + liftTwo)
      let liftNumber = whichLift(floorNumber, liftOne, liftTwo)
        if (liftNumber == "one") {
            showArrow(floorNumber, liftNumber, liftOne)
            liftOne = await liftToCustomer(floorNumber, liftOne, liftOneFloor, liftNumber)
            hideArrow()
            displayFloorNumber(floorNumber)
        } else {
            showArrow(floorNumber, liftNumber, liftTwo)
            liftTwo = await liftToCustomer(floorNumber, liftTwo, liftTwoFloor, liftNumber)
            hideArrow()
            displayFloorNumber(floorNumber)
        }
        getInButton.classList.remove("hidden")
        getInButton.addEventListener("click", async function() {
            elevatorText.classList.remove("hidden")
            floorButtons.classList.remove("hidden")
            floorButton.forEach(floor => {
                floor.addEventListener("click", async function() {
                    try {
                            if (liftNumber == "one") {
                            showArrow(floor.innerHTML, liftNumber, liftOne)
                            liftOne = await liftToCustomer(floor.innerHTML, liftOne, liftOneFloor, liftNumber)
                            hideArrow()
                            elevatorText.classList.add("hidden")
                            floorButtons.classList.add("hidden") 
                            getInButton.classList.add("hidden") 
                            return liftOne
                        } else {
                            showArrow(floor.innerHTML, liftNumber, liftTwo)
                            liftTwo = await liftToCustomer(floor.innerHTML, liftTwo, liftTwoFloor, liftNumber)
                            hideArrow()
                            elevatorText.classList.add("hidden")
                            floorButtons.classList.add("hidden") 
                            getInButton.classList.add("hidden") 
                            return liftTwo
                        }                   
                    } catch (error) {
                        console.log(error)
                        console.log("We ran into a problem, Please be patient while we fix it.")
                    }
                })
        })
            console.log("Lift One is on floor" + liftOne)
            console.log("Lift Two is on floor" + liftTwo)
        })
    } catch (error) {
        console.log(error)
        console.log("We ran into a problem. Please be patient while we fix it.")
    }
}

function showArrow(floorNumber, liftNumber, lift) {
    if (liftNumber == "one") {
        if (lift < floorNumber) {
            arrowUpOne.style.borderBottom = "30px solid #00f0ff"
        } 
        if (lift > floorNumber) {
            arrowDownOne.style.borderTop = "30px solid #00f0ff"
        }
    } 
    if (liftNumber == "two") {
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
        return "one"
    } else if (Math.abs(floorNumber - liftOne) > Math.abs(floorNumber - liftTwo)) {
        return "two"
    } else if (liftOne === liftTwo) {
        return "one"
    } else {
        let minLift = Math.min(liftOne, liftTwo)
        if (minLift == liftOne) return "one"
        else return "two"        
    }
}
/*
async function travel(floor, liftNumber, liftOne, liftTwo) {
    
}

function getIn(liftNumber, liftOne, liftTwo) {
        
}*/