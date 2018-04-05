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

async function main() {
  await lightUp();
}

board.on("ready", function() {
  var thing = proximityFunc();
  console.log(thing);
});