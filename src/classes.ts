class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  // public honk(): void {
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
// vehicle.honk();

class Car extends Vehicle {
  private drive(): void {
    console.log('vrooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car();
car.startDrivingProcess();
// car.honk();
