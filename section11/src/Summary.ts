import { Game } from "./types";
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { HtmlReport } from "./reportTargets/HtmlReport";


export interface Analyzer {
  run(matches: Game[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

// composition happens on initialization of an object;
export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: Game[]): void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
  // allows methods to be called without an instance of the class
  static printHello(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    )
  }
}

// static methods let us call methods without an instance of that method. Think about all the crud routes we make.
Summary.printHello('Man United');

