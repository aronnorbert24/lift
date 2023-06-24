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
        return "one"
    } else if (Math.abs(floorNumber - liftOne) > Math.abs(floorNumber - liftTwo)) {
        if (floorNumber > liftTwo) {
            arrowUpTwo.classList.remove("hidden")
        } else {
            arrowDownTwo.classList.remove("hidden")
        }
        return "two"
    } else {
        if (liftOne < liftTwo) {
            arrowUpOne.classList.remove("hidden")
            return "one"
        } else if (liftTwo < liftOne) {
            arrowUpTwo.classList.remove("hidden")            
            return "two"
        }
    }
}

