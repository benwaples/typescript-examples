import { Analyzer } from "../Summary";
import { Game, MatchResult2 } from "../types";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: Game[]): string {
    let wins = 0;
    for(let match of matches) {
      // this doesn't make much sense to other engineers because H and A don't mean anything unless you know the data
      if(match[1] === 'Man United' && match[5] === MatchResult2.HomeWin) {
        wins++;
      } else if (match[2] === 'Man United' && match[5] === MatchResult2.AwayWin) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`
  }
}
