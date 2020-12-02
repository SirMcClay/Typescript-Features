import 'reflect-metadata';

const plane = {
	color: 'red',
};

class Plane {
	color: string = 'red';

	@markFunction('123')
	fly(): void {
		console.log('vrrrrrr');
	}
}

function markFunction(secretInfo: string) {
	return function (target: Plane, key: string) {
		Reflect.defineMetadata('secret', secretInfo, target, key);
	};
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);
