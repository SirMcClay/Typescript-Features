interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// const printVehicle = (vehicle: Vehicle): void => {
const printSummary = (item: Reportable): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`broken? ${vehicle.broken}`);
  // console.log(vehicle.summary());
  console.log(item.summary());
};

// printVehicle(oldCivic);
printSummary(oldCivic);
