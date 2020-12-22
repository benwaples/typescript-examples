// string[]
const carMakers = ['ford', 'toyota', 'chevy'];

// string[][]
const carsByMake = [['f150'], ['camry'], ['camaro']]

// TS inference when pulling values
const toyota = carMakers[1]

// TS keeps your arrays consistent, like a number onto an array of strings
carMakers.push(1)

// TS helps with auto complete 
carMakers.map(maker /*string is infered*/ => {
  // maker. ***auto fills for string methods***
})

// creating a flexible type array
// (string, Date) []
const importantDates = [new Date(), '05-17-1996']
// now you can add both Date and string data types to this array
importantDates.push(new Date())
importantDates.push('my birthday')

// type arrays when representing a collection of different records