function isLeapYear(year){
    if(typeof(year) !== "number") throw new Error("Please enter an year in numbers");

    if(year%4 === 0)return true;
    if(year%4 !== 0)return false;
}


function isLeapYear2(year){
    if(typeof(year) !== "number") throw new Error("Please enter an year in numbers");

    if(year%2 == 0)return true;
    return false;
}

function isLeapYear3(year){
    if(typeof(year) !== "number") throw new Error("Please enter an year in numbers");

    return year%4 === 0? true : false;
}

console.log(isLeapYear3(2006));