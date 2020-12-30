// node doesn't include types for this module
import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
})
.split('\n')
.map((row: string): string[] => {
  return row.split(',')
})

// purpose of this object is unclear, so we can use a TS enum
const MatchResult = {
  HomeWin: 'H',
  AwayWin: 'A',
  Draw: 'D'
}

let manUnitedWins = 0;
for(let match of matches) {
  // this doesn't make much sense to other engineers because H and A don't mean anything unless you know the data
  if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester Wins: ${manUnitedWins}`) 