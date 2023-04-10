import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([1000, 23, -1, 20, 11]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
