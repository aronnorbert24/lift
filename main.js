class Elevator {
    constructor() {
        this.liftOne = 0
        this.liftTwo = 6
        this.title = document.getElementById("titleText")
        this.buttonUp = document.getElementById("buttonUp")
        this.buttonDown = document.getElementById("buttonDown")
        this.buttonArrays = [buttonUp, buttonDown]
        this.liftOneFloor = document.getElementById("floorNumberOne")
        this.liftTwoFloor = document.getElementById("floorNumberTwo")
        this.arrowUpOne = document.getElementById("arrowUpOne")
        this.arrowUpTwo = document.getElementById("arrowUpTwo")
        this.arrowDownOne = document.getElementById("arrowDownOne")
        this.arrowDownTwo = document.getElementById("arrowDownTwo")
        this.floorNumber
        this.liftOneFloor.innerHTML = 0
        this.liftTwoFloor.innerHTML = 6
        this.events()
    }

    events() {
        buttonArrays.forEach(btn => {
            btn.addEventListener("click", () => {
              this.whichFloor()
              this.displayFloorNumber(floorNumber)
              this.displayLiftFloors(this.liftOne, this.liftTwo)
            })
        })
    }

    whichFloor() {
        this.floorNumber = prompt("Which floor are you on?")
        while (this.floorNumber < 0 || this.floorNumber > 6) {
            this.floorNumber = prompt("Error! Invalid floor number.")
        }
    }

    displayFloorNumber(floorNumber) {
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

    displayLiftFloors(liftOne, liftTwo) {
        liftOneFloor.innerHTML = liftOne
        liftTwoFloor.innerHTML = liftTwo
    }
    
}