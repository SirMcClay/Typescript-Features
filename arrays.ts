const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro'],
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);
carMakers.push('fiat');

// Help with 'map'
carMakers.map((carPick: string): string => {
  return carPick.toUpperCase();
});
