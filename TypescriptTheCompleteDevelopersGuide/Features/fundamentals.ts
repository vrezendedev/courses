//Annotation
let apples: number = 5;
let isStudying: boolean = true;

let nothingAtAll: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];

class Car {}

let car: Car = new Car();

let point: { x: number; y: number } = {
    x: 10,
    y: 20,
};

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

//Inference
let velocity = 'fast';

//Any? Avoid it.
const json = '{"x": 10, "y": 20}';
//const coordinates: = JSON.parse(json);
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let games = ['Terraria', 'Skyrim', 'Stardew Valley'];
let foundWord: boolean;

for (let i = 0; i < games.length; i++) {
    if (games[i] === 'Skyrim') {
        foundWord = true;
    }
}

let moreNumbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < moreNumbers.length; i++) {
    if (moreNumbers[i] < 0) {
        numberAboveZero = numbers[i];
    }
}

function divide(a: number, b: number): number {
    return a / b;
}

//Inference
const add = (a: number, b: number) => a + b;

//Inference
const multiply = function (a: number, b: number) {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): never => {
    throw new Error(message);
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
    console.log(JSON.stringify(forecast));
};

// const logWeather = ({
//     date,
//     weather,
// }: {
//     date: Date;
//     weather: string;
// }): void => {
//     console.log(JSON.stringify(forecast));
// };

logWeather(todaysWeather);

const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge(age: number): void {
        this.age = age;
    },
};

const { age }: { age: number } = profile;
const {
    coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

//Arrays
const carMakers: string[] = ['ford', 'toyota'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150', ['jeep']]];
const twoDimensionalArray: number[][] = [
    [1, 2, 3],
    [3, 2, 1],
];

const myCarMaker = carMakers[0];
const myOtherCarMaker = carMakers.pop();

//Error!
//carMakers.push(100);

carMakers.map((car: string): string => {
    return car;
});

const importanteDates: (Date | string)[] = [new Date(), 'Yes'];

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 30];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsePower: 400,
    weight: 3354,
};
