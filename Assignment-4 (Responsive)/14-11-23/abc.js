var result = 40;
if (result=40)
{
    console.log("Congratulation you passed.");
}
else{
    console.log("Unfortunately you did not pass.")
}
// -------------------------------------------------------
var food = "cold";
if(food=="hot"){
    console.log('Too hot')
}
else if (food=="cold"){
    console.log('Too cold')
}
else{
    console.log('Just Right')
}
// ------------------------------------------------------------
var place = 'second';
switch (place) {
    case 'first':
        console.log('Gold')
        break;
    case 'second':
        console.log('Silver')
        break;
    case 'third':
        console.log('Bronze')
        break;

    default:
        console.log('No Medal')
        break;
}
// ---------------------------------------------------------- LOOP -------------------------------------------
var i=1;
for(i=1;i<4;i++){
    console.log(i);
}

for(var j=1;j<4;j++){
    console.log(j);
}
var counter=3;
while(counter>0){
    console.log(counter);
    counter = counter-1;
}
var counter1=3;
while(counter1>0){
    counter1 = counter1-1;
    console.log(counter1);
}
//---------------------------------------------------------------
for(var i=0; i<2;i++){
    for(var j=1; j<=7; j++){
        console.log("week" + i + "day" +j);
    }
}