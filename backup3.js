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

async function handleLift(floorNumber, liftOne, liftTwo, liftNumber) {
    try {
        console.log("Lift One is on floor" + liftOne)
        console.log("Lift Two is on floor" + liftTwo)
        if (liftNumber == "one") {
            return await liftToCustomer(floorNumber, liftOne, liftOneFloor, liftNumber)
        } else {
            return await liftToCustomer(floorNumber, liftTwo, liftTwoFloor, liftNumber)
        }
    } catch (error) {
        console.log(error)
        console.log("We ran into a problem. Please be patient while we fix it.")
    }
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
        return "one"
    } else if (Math.abs(floorNumber - liftOne) > Math.abs(floorNumber - liftTwo)) {
        showArrow(floorNumber, liftTwo)
        return "two"
    } else {
        let minLift = Math.min(liftOne, liftTwo)
        showArrow(floorNumber, minLift)
        if (minLift == liftOne) return "one"
        else return "two"        
    }
}

function travel(liftNumber, liftOne, liftTwo) {
    floorButton.forEach(floor => {
        floor.addEventListener("click", async function() {
            try {
            if (liftNumber == "one") {
                showArrow(floor.innerHTML, liftOne)
                liftOne = await liftToCustomer(floor.innerHTML, liftOne, liftOneFloor, liftNumber)
            } else {
                showArrow(floor.innerHTML, liftTwo)
                liftTwo = await liftToCustomer(floor.innerHTML, liftTwo, liftTwoFloor, liftNumber)
            }
        elevatorText.classList.add("hidden")
        floorButtons.classList.add("hidden") 
        getInButton.classList.add("hidden") 
        if (liftNumber == "one") return liftOne
        else return liftTwo
        } catch (error) {
            console.log(error)
            console.log("We ran into a problem, Please be patient while we fix it.")
        }
        })
    }) 
}

function getIn(liftNumber, liftOne, liftTwo) {
    getInButton.classList.remove("hidden")
    getInButton.addEventListener("click", function() {
        elevatorText.classList.remove("hidden")
        floorButtons.classList.remove("hidden")
        travel(liftNumber, liftOne, liftTwo)   
    })
    if (liftNumber == "one") return liftOne
    else return liftTwo
}