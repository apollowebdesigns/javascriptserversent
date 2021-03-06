var five = require("johnny-five");
var board = new five.Board({
  repl: false
});
var proximityFunc = require('./motor/poximitycontrol').prox;

function lightUp() {
  let pin9 = new five.Pin(9);
  pin9.pin.OUTPUT;
  pin9.high();
  setTimeout(function(){ 
    
    return pin9.low()
  }, 3000);
}

function promiseForfiller() {
  return new Promise(function(resolve, reject) {
    console.log('test thetwehrioweorhwoiej');
  }).then(() => console.log('done'));
}

// async function main() {
//   await lightUp();
// }

function runner() {
  return new Promise((resolve, reject) => {
    var dist = '';
    var count = 0;
    board.on("ready", function() {
      try {
        var proximity = new five.Proximity({
            controller: "HCSR04",
            pin: 7
        });
  
          proximity.on("data", function() {
              console.log("Proximity: ");
              console.log(this.cm);
              console.log("  cm  : ", this.cm);
              console.log("  in  : ", this.in);
              console.log("-----------------");
              dist = this.cm;
              count += 1;
              if (count === 10){
                throw dist;
              } 
          });
      } catch (e){
          console.log('hit');
          console.log(e);
          resolve(dist);
          reject(dist);
      } finally {
        resolve(dist);
        reject(dist);
      }  
    });
  })
  
}

async function main() {
  console.log('calling some function');
  var result = await runner();
  console.log('what is the runner?');
  console.log(result);
}

console.log('start');
// main();

board.on("ready", function() {
  setTimeout(function(){
    var proximity = new five.Proximity({
      controller: "HCSR04",
      pin: 7
    });
  
    proximity.on("data", function() {
      console.log("inches: ", this.inches);
      console.log("cm: ", this.cm);
    });
  }, 10000)
});
console.log('end');