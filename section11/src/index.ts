import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { Summary } from "./Summary";

// create object that satisfies the DataReader interface
// we dont need this anymore because we make an instance of CsvFileReader in the MatchReader
const csvFileReader = new CsvFileReader('football.csv')

// create an instance of MatchReader and pass in something satisfying the 'dataReader' interface
// this is an example of a composition relationship. 'Has a'
// when one class extends another, that is an inheritance relationship
// we aren't initializing a MatchReader because we are using a static method
const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load();

// purpose of this object is unclear, so we can use a TS enum

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())
const htmlSummary = new Summary(new WinsAnalysis('Man United'), new HtmlReport())

summary.buildAndPrintReport(matchReader.matches);
htmlSummary.buildAndPrintReport(matchReader.matches);

const anotherSummary = new Summary(new WinsAnalysis('Burnley'), new ConsoleReport())
anotherSummary.buildAndPrintReport(matchReader.matches)

const summary3 = new Summary(new WinsAnalysis('Leicester'), new ConsoleReport())
summary3.buildAndPrintReport(matchReader.matches)

const summary4 = new Summary(new WinsAnalysis('Bournemouth'), new ConsoleReport())
summary4.buildAndPrintReport(matchReader.matches)
// it looks like all teams won 18 matches? not sure if im using this right