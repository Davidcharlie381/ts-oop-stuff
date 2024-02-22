class Engine {
  public start(): void {
    console.log("Engine started...");
  }
}

class Bike {
  private engine: Engine;
  constructor(engine: Engine) {
    this.engine = engine;
  }

  start(): void {
    this.engine.start();
    setTimeout(() => {
      console.log("Bike started...");
    }, 3000);
  }
}

const myBike = new Bike(new Engine());
myBike.start();
