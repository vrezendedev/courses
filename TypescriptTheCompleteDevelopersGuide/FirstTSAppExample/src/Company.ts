import { getRandomIndex, companyNames, catchPhrases, locations } from './Utils';
import { MapTarget } from './Map';

export class Company implements MapTarget {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = companyNames[getRandomIndex(companyNames)];
        this.catchPhrase = catchPhrases[getRandomIndex(catchPhrases)];
        this.location = locations[getRandomIndex(locations)];
    }

    markerContent(): string {
        return `
        <div>
            <h1>Company Name: ${this.name}</h1>
            <h3>Catch Phrase: ${this.catchPhrase}</h3>
        </div>`;
    }
}
