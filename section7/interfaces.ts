
// note how an interface doesn't have an equal sign. Different syntax than a type
// interfaces can contain: other interfaces, functions, primitive values.
interface CarType {
  make: string;
  model: string;
  year: number;
  runs: boolean;
  summary(): string; 
}

// inferred type
const oldCamry: CarType = {
  make: 'toyota',
  model: 'camry',
  year: 1997,
  runs: true,
  summary(): string{
    return this.make;
  }
}

// functions that return nothing return void
function printVehicle(car: CarType): void {
  console.log(`
    Name: ${car.model}
    Make: ${car.summary()}
    year: ${car.year}
    runs: ${car.runs}
  `)
}

printVehicle(oldCamry)