import { getRandomIndex, locations, personaNames } from './Utils';
import { MapTarget } from './Map';

export class User implements MapTarget {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = personaNames[getRandomIndex(personaNames)];
        this.location = locations[getRandomIndex(locations)];
    }

    markerContent(): string {
        return `<h4> User Name: ${this.name} </h4>`;
    }
}

export default User;
