import { CsvFileReader } from "./CsvFileReader";
import { Game, MatchResult2 } from "./types";
import { dateStringToDate } from "./utils";

export class MatchReader extends CsvFileReader<Game> {
  mapRow(row: string[]): Game {
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
  }
}