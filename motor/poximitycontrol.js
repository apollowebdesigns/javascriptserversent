var five = require("johnny-five");

module.exports.prox = () => {
    var dist = '';
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
            dist += this.cm;
            throw 'end';
        });
    } catch (nastyException){
        console.log('hit');
        console.log(nastyException);
    }   finally {
        return dist;
    }
}