
// note how an interface doesn't have an equal sign. Different syntax than a type
// interfaces can contain: other interfaces, functions, primitive values.
interface CarType {
  make: string;
  model: string;
  year: number;
  runs: boolean;
}


interface Reportable {
  summary(): string; 
}

// inferred type
const oldCamry = {
  make: 'toyota',
  model: 'camry',
  year: 1997,
  runs: true,
  summary(): string{
    return this.make;
  }
}

const coke = {
  color: 'brown',
  carbonated: true,
  sugar: 50,
  summary(): string {
    return this.sugar
  }
}

// functions that return nothing return void
// & in this case is saying that the car must be at least car type and reportable 
function printVehicle(car: CarType & Reportable): void {
  console.log(`
    Name: ${car.model}
    Make: ${car.summary()}
    year: ${car.year}
    runs: ${car.runs}
  `)
}

// works because its a car and can be summarized
printVehicle(oldCamry)

// error even though it is reportable, it is not a car
printVehicle(coke)
