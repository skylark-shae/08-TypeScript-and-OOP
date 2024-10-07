// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class
  vin: string;            // Vehicle Identification Number
  color: string;          // Color of the motorbike
  make: string;           // Manufacturer of the motorbike
  model: string;          // Model of the motorbike
  year: number;           // Year of manufacture
  weight: number;         // Weight of the motorbike
  topSpeed: number;       // Top speed of the motorbike
  wheels: Wheel[];        // Array of Wheel objects

  // TODO: Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    super();
    
    // TODO: The constructor should initialize the properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // TODO: Implement the wheelie method
  wheelie(): void {
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // TODO: The method should call the printDetails method of the parent class
    super.printDetails();
    
    // TODO: The method should log the details of the Motorbike
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    console.log(`VIN: ${this.vin}`);                     // Log VIN
    console.log(`Color: ${this.color}`);                 // Log color
    console.log(`Make: ${this.make}`);                   // Log make
    console.log(`Model: ${this.model}`);                 // Log model
    console.log(`Year: ${this.year}`);                   // Log year
    console.log(`Weight: ${this.weight} lbs`);           // Log weight
    console.log(`Top Speed: ${this.topSpeed} mph`);      // Log top speed
    
    // Log the details of the wheels
    for (let i = 0; i < this.wheels.length; i++) {
      console.log(`Wheel ${i + 1} - Diameter: ${this.wheels[i].getDiameter} inches, Tire Brand: ${this.wheels[i].getTireBrand}`); // Log wheel details
    }
  }
}

// Export the Motorbike class as the default export
export default Motorbike;