class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  // public honk(): void {

  // color: string = 'red';
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
// vehicle.honk();
console.log(vehicle.color);

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

const car = new Car('orange');
car.startDrivingProcess();
// car.honk();
