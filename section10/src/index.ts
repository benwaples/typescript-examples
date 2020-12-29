import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";
import { NumberCollection } from "./NumberCollection";

const numberCollection = new NumberCollection([4, 5, 2, -6, 8, 39, 44, -44])
numberCollection.bubbleSortNumbers()
console.log(numberCollection.data)

const characterCollection = new CharacterCollection('fjiIpqBnNa')
characterCollection.bubbleSortNumbers()
console.log(characterCollection.data)

const linkedList = new LinkedList()
linkedList.add(23)
linkedList.add(33)
linkedList.add(-4)
linkedList.add(300)
linkedList.bubbleSortNumbers()
linkedList.print()
