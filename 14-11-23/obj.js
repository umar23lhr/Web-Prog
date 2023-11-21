var table = {
    leg : 3,
    color : "brown",
    priceUSD : 100,
}
console.log(table);
console.log(table.color) // Dot Operator to Access
console.log(table["leg"])  // Another way to access

// ---------------------------------------

var car = {};
car.color = "Red";
car["color"]="Green";
car["Speed"]=200;
car.Speed=100;
console.log(car);

// -------------------------------------------------

var arrOfKeys = ['Speed' , 'Altitude' , 'color'];
var drone ={
    Speed:100,
    Altitude:200,
    color:"Red"
}
for (var i=0 ; i<arrOfKeys.length; i++){
console.log(drone[arrOfKeys[i]])
}
// ----------------------------------------------------------
var fruits = [];
fruits.push("apple"); 
fruits.push("banana");
fruits.pop();
console.log(fruits);
// -----------------------------------------------
function arrayBuilder(one , two , three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr ;
}
var simpleArr = arrayBuilder('apple' , 'pear' , 'pulm');
console.log(simpleArr);