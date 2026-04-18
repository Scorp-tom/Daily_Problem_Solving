function tableGenerator(tableoF , tableTill){
    if(typeof tableoF !== "number" || typeof tableTill !== "number" || tableoF <0 || tableTill <0 ) throw new RangeError("Inputs Should be postive integer");
    for(let i=0 ; i<=tableTill ; i++){
        console.log(`${tableoF} x ${i} = ${tableoF*i}`);
    }
}


function tableGenerator2(tableOf , tableTill){
    if(typeof tableOf !== "number" || typeof tableTill !== "number" || tableOf <0 || tableTill <0 ) throw new RangeError("Inputs Should be postive integer");
    for(let i = tableOf ; i <= tableOf * tableTill ; i += tableOf){
        console.log(i);
        
    }
}

tableGenerator2(2,10);