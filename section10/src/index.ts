import { CharacterCollection } from "./CharacterCollection";
import { NumberCollection } from "./NumberCollection";

const numberCollection = new NumberCollection([4, 5, 2, -6, 8, 39, 44, -44])
numberCollection.bubbleSortNumbers()
console.log(numberCollection.data)

const characterCollection = new CharacterCollection('fjiIpqBnNa')
characterCollection.bubbleSortNumbers()
console.log(characterCollection.data)