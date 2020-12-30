// node doesn't include types for this module
import fs from 'fs';
import { Game } from './types';

export abstract class CsvFileReader {
  data: Game[] = [];

  constructor(public filename: string) {}
  
  abstract mapRow(row: string[]): Game

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',')
    })
    // refactor to use mapRow in different classes in order to be able to return an similar array each time.
    .map((row: string[]): Game => this.mapRow(row))
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