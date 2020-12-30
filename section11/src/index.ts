import { CsvFileReader } from "./CsvFileReader";
const reader = new CsvFileReader('football.csv')




// purpose of this object is unclear, so we can use a TS enum
const MatchResult = {
  HomeWin: 'H',
  AwayWin: 'A',
  Draw: 'D'
}

// enum - enumeration
// used when you want to identify that there is something very closely related
// enum can declare keys without values
// **must list out all related values to an enum while writing it. Not after.**
  // most values you want to add to an enum are 10-15
// this is also now a type
enum MatchResult2 {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

reader.read()
let manUnitedWins = 0;
for(let match of reader.data) {
  // this doesn't make much sense to other engineers because H and A don't mean anything unless you know the data
  if(match[1] === 'Man United' && match[5] === MatchResult2.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult2.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester Wins: ${manUnitedWins}`) 