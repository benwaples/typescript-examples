import { NumberCollection } from "./NumberCollection";
import { Sorter2 } from "./Sorter";


const collection = new NumberCollection([1, 4, 590, -4, 4, 2, 20])
const sorter = new Sorter2(collection)
sorter.bubbleSortNumbers()
console.log(collection.data)