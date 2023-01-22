interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

interface Alert {
    alert(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `It's a car`;
    },
    alert(): string {
        return 'bzzzz';
    },
};

const carriage = {
    name: 'old carriage',
    year: 1230,
    broken: false,
    summary(): string {
        return `It is Bill's carriage!`;
    },
    horseCount: 1,
    alert(): string {
        return 'blepblep';
    },
};

const randomStuff = {
    alert(): string {
        return 'Random sound';
    },
};

//Really long type annotation, what if Interfaces?
// const printVehicle = (vehicle: {
//     name: string;
//     year: number;
//     broken: boolean;
// }): void => {
//     console.log(`Name: ${vehicle.name} `);
//     console.log(`Year: ${vehicle.year} `);
//     console.log(`Broken: ${vehicle.broken} `);
// };

const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name} `);
    console.log(`Year: ${vehicle.year} `);
    console.log(`Broken: ${vehicle.broken} `);
    console.log(vehicle.summary());
};

const printAlert = (alert: Alert): void => {
    console.log(alert.alert());
};

printVehicle(oldCivic);
printVehicle(carriage);
printAlert(oldCivic);
printAlert(carriage);
printAlert(randomStuff);
