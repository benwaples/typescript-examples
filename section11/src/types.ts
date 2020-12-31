
// enum - enumeration
// used when you want to identify that there is something very closely related
// enum can declare keys without values
// **must list out all related values to an enum while writing it. Not after.**
  // most values you want to add to an enum are 10-15
// this is also now a type
export enum MatchResult2 {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

// export enum in its own file rn because it's not good to export out of index

export type Game = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult2,
  string
]