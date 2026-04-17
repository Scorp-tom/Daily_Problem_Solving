function one(a,b,c){
    if(typeof a !== "number" || typeof b !== "number" || typeof c !== "number"){
        return "Error: All inputs must be numbers.";
    }
    else{
        return "All inputs are numbers";
    }
}

console.log(one(1,"fevfe",3));
