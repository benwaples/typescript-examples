
// note how an interface doesnt have an equal sign. Different syntax than a type
interface CarType {
  make: string;
  model: string;
  year: number;
  runs: boolean;
}

// inferred type
const oldCamry = {
  make: 'toyota',
  model: 'camry',
  year: 1997,
  runs: true
}

// functions that return nothing return void
function printVehicle(car: CarType): void {
  console.log(`
    Name: ${car.model}
    Make: ${car.make}
    year: ${car.year}
    runs: ${car.runs}
  `)
}

printVehicle(oldCamry)