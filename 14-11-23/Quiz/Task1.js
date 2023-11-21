function letterFind (word , match){
    for(var i=0 ; i<word.length ; i++){
        if(match == word[i]){
            console.log("Found the" , match , 'at' , i);
        }
        else
        console.log('---- no match found at' , i);
}
}
letterFind("test" ,"t" );