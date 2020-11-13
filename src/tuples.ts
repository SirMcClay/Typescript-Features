const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
// pepsi[0] = 40; ERR
// pepsi[2] = 'brown'; ERR

// Why tuples isn`t often used
const carSpecs: [number, number] = [400, 3354];
// Object is just better
const carStats = {
  horsePower: 400,
  weight: 3354,
};
