import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult2 } from "./types";

// create object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv')

// create an instance of MatchReader and pass in something satisfying the 'dataReader' interface
// this is an example of a composition relationship. 'Has a'
// when one class extends another, that is an inheritance relationship
const matchReader = new MatchReader(csvFileReader)
matchReader.load();

// purpose of this object is unclear, so we can use a TS enum
const MatchResult = {
  HomeWin: 'H',
  AwayWin: 'A',
  Draw: 'D'
}

let manUnitedWins = 0;
for(let match of matchReader.matches) {
  // this doesn't make much sense to other engineers because H and A don't mean anything unless you know the data
  if(match[1] === 'Man United' && match[5] === MatchResult2.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult2.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester Wins: ${manUnitedWins}`) 
