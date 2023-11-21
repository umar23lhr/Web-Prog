var car = {};
car.mileage = 98764;
car.color = "Red";
console.log(car);
car.turnTheKey = function(i) {
    if (i==1)
    console.log("The Engine is Running");
     else 
     console.log("Engine is not running");
}
car.lightsOn = function() {
    console.log("Lights are on");
}
console.log(car);
car.turnTheKey(0);
car.lightsOn();