export function getRandomIndex<T>(array: Array<T>): number {
    return Math.floor(Math.random() * array.length);
}

export const locations: { lat: number; lng: number }[] = [
    { lat: 40.71, lng: -74 },
    { lat: 41.9, lng: 12.5 },
    { lat: 35.68, lng: 139.69 },
];

export const personaNames: string[] = ['Bob', 'Ross', 'Eric', 'Barone'];

export const companyNames: string[] = ['Google', 'Microsoft', `Rick's Fish`];

export const catchPhrases: string[] = [
    'Take That!',
    'Cool as ice!',
    'Another level of knowledge!',
];
