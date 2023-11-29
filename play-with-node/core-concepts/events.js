const EventEmitter = require("node:events");

//----------------------------------
// Door
//----------------------------------

class Door extends EventEmitter {
  open() {
    console.log("door opened");
    this.emit("open", { doorNumber: 1, floorNumber: 4 });
  }
  close() {
    console.log("door closed");
    this.emit("close", { doorNumber: 1, floorNumber: 4 });
  }
}

const door = new Door();

//----------------------------------
// Light
//----------------------------------

door.on("open", (e) => {
  let { doorNumber, floorNumber } = e;
  console.log(`light on ${doorNumber},${floorNumber}`);
});

door.on("close", (e) => {
  let { doorNumber, floorNumber } = e;
  console.log(`light off ${doorNumber},${floorNumber}`);
});

//----------------------------------
// AC
//----------------------------------

door.on("open", (e) => {
  let { doorNumber, floorNumber } = e;
  console.log(`ac on ${doorNumber},${floorNumber}`);
});

door.on("close", (e) => {
  let { doorNumber, floorNumber } = e;
  console.log(`ac off ${doorNumber},${floorNumber}`);
});

//----------------------------------
setTimeout(() => {
  door.open();
  setTimeout(() => {
    door.close();
  }, 3000);
}, 3000);
//----------------------------------
