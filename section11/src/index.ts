import { match } from "assert";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

// create object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv')

// create an instance of MatchReader and pass in something satisfying the 'dataReader' interface
// this is an example of a composition relationship. 'Has a'
// when one class extends another, that is an inheritance relationship
const matchReader = new MatchReader(csvFileReader)
matchReader.load();

// purpose of this object is unclear, so we can use a TS enum

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())

summary.buildAndPrintReport(matchReader.matches);