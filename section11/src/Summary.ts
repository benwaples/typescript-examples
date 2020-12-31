import { Game } from "./types";

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
}

