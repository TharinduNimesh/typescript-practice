class Ride {
  private static _totalRides = 0;

  start() {
    Ride._totalRides++;
  }

  static get totalRides() {
    return Ride._totalRides;
  }
}

const ride1 = new Ride();
ride1.start();

const ride2 = new Ride();
ride2.start();

console.log(Ride.totalRides); // 2
