function smallestOfThree(a,b,c){
    let smallest = a;
    if(b < smallest){
        smallest = b;
    }
    if (c < smallest){
        smallest =c;
    }
    return smallest;
}

console.log(smallestOfThree(14,5,6));