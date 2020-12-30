// node doesn't include types for this module
import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}
  
  abstract mapRow(row: string[]): T

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',')
    })
    // refactor to use mapRow in different classes in order to be able to return an similar array each time.
    .map((row: string[]): T => this.mapRow(row))
  }
}

// NOTHING TO DO WITH GENERICS
const addOne = (a: number): number => {
  return a + 1;
}
const addTwo = (a: number): number => {
  return a + 2;
}
const addThree = (a: number): number => {
  return a + 3;
}

// instead of hard coding the second number, you pass it as a parameter;
const add = (a: number, b: number): number => {
  return a + b;
}

// when to use Generics?
// when you are using a function or class that can have multiple types
// you then need to specify what type that will be used when you are calling that method

// constricted to only holding numbers
class HoldNumber {

  constructor(public data: number) {}
}

const holdNumber = new HoldNumber(23)

// constricted to only holding strings
class HoldString {

  constructor(public data: string) {}
}

const holdString = new HoldString('I run pretty slow')

// pass the type as an argument to classify what type the data will be. 
class HoldValue<T> {

  constructor(public data: T) {}
}

const holdNumberValue = new HoldValue<number>(23)

const holdStringValue = new HoldValue<string>('I still run really slow')