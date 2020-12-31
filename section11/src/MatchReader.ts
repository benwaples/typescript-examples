import { dateStringToDate } from './utils';
import { Game, MatchResult2 } from './types';
import { CsvFileReader } from './CsvFileReader';


interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: Game[] = []
  constructor(public reader: DataReader) {}

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename))
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): Game => {
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
    });
  }
}