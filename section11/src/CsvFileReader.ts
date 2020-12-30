// node doesn't include types for this module
import fs from 'fs';
import { MatchResult2 } from './types';
import { dateStringToDate } from './utils';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',')
    })
    .map((row: string[]): any => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2], 
        parseInt(row[3]),
        parseInt(row[4]),
        // casting in this case tells TS to trust us that row[5] will be something from MatchResult2
        row[5] as MatchResult2,
        row[6]
      ]
    })
  }
}