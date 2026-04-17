function wordCounter(Sentence){
    let words = Sentence.split(" ");
    let count = 0;
    let nonEmpty = words.filter(word => word !== "");
    console.log(nonEmpty);
    
    count = nonEmpty.length;
    console.log(`Number of words in the given sentence is ${count}`);
    
    return count;
}

function characterCounter(Sentence){
    let words = Sentence.split("");
    let count = 0;
    let nonEmpty = words.filter(word => word !== "");
    console.log(nonEmpty);
    
    count = nonEmpty.length;
    console.log(`Number of character in the given sentence is ${count}`);
    // console.log(`Number of words in the given sentence is ${count}`);
    
    return count;
}

wordCounter("Hello world, this is a test sentence");
characterCounter("Hello world, this is a test sentence");
