// tuple is an array like structure, each element represent some property of a record

// example of a tuple: 
const tuple = [
  ['column1', 2, false],
  ['row 1', 1, true],
  ['row 2', 2, false]
]

const pepsiObject = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}
// order is very important in this case
const pepsi = [
  'brown', true, 40
]

// TS and tuple
const pepsiTs: [string, boolean, number] = [
  'brown', true, 40
]

// creating a type for your tuple
// note how I was only using types for objects and in this case we are using is for an array.
type DrinkType = [string, boolean, number]

const cokeTs: DrinkType = [
  'brown', true, 60
]