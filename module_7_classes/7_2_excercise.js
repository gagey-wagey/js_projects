class Person {
    //accessors to ENCAPULATE 
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
      this.#firstname = firstname;
      this.#lastname = lastname;
    }
    get firstname() {
        return this.#firstname;
    }
    set firstname(firstname) {
        if(firstname.startsWith("M")){
            this.#firstname = firstname;
        } else {
            this.#firstname = "M" + firstname;
        }
    }
    // get lastname() {
    //     return this.#lastname;
    // }
    set lastname(lastname) {
        this.#lastname = lastname;
    } 
}
class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    } 
}

//INHERITANCE
class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
      super(color, currentSpeed, maxSpeed);
      this.fuel = fuel;
    }
    doWheelie() {
      console.log("Driving on one wheel!");
  } 
}