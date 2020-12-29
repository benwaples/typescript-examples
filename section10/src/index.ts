import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";
import { NumberCollection } from "./NumberCollection";
import { Sorter2 } from "./Sorter";


// const collection = new NumberCollection([1, 4, 590, -4, 4, 2, 20])
// const sorter = new Sorter2(collection)
// sorter.bubbleSortNumbers()
// console.log(collection.data)

// const collection = new CharacterCollection('jijCjiLifwws')
// const sorter = new Sorter2(collection)
// sorter.bubbleSortNumbers()
// console.log(collection.data)

const linkedList = new LinkedList();
linkedList.add(90)
linkedList.add(500)
linkedList.add(4)
linkedList.add(77)
linkedList.add(57)
linkedList.add(23)
linkedList.print()
console.log('                          |')

const sorter = new Sorter2(linkedList)
sorter.bubbleSortNumbers()
linkedList.print();