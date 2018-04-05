var five = require("johnny-five");
var board = new five.Board({
  repl: false
});

function lightUp() {
  let pin9 = new five.Pin(9);
  pin9.pin.OUTPUT;
  pin9.high();
  setTimeout(function(){ 
    
    return pin9.low()
  }, 3000);
}

function proximityFunc() {
  try {
    var proximity = new five.Proximity({
      controller: "HCSR04",
      pin: 7
    });

    proximity.on("data", function() {
      console.log("Proximity: ");
      console.log("  cm  : ", this.cm);
      console.log("  in  : ", this.in);
      console.log("-----------------");
      throw new Error();
    });
  } catch (nastyException){
    console.log(nastyException)
  }
}

function promiseForfiller() {
  return new Promise(function(resolve, reject) {
    console.log('test thetwehrioweorhwoiej');
  }).then(() => console.log('done'));
}

async function main() {
  await lightUp();
}

board.on("ready", function() {
  main().then(() => {
    console.log('done?');
  });
});