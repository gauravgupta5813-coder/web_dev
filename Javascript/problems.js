// Problem: Create an array containing different types of teas
const teas = ["Green tea", "Black tea","oolong tea","White tea", "Herbal tea"]


// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");

// Problem: Remove "Oolong Tea" from the list of teas
const index = teas.indexOf("oolong tea");
if (index > -1) {
    teas.splice(index, 1);
}
console.log(teas);

// Problem: Filter the list to only include teas that are caffeinated
const caffinatedTeas = teas.filter((tea) => tea!=="Herbal tea");

// Problem: Sort the list of teas in alphabetical order
console.log(teas.sort());

// Problem: Use a for loop to print each type of tea in the array.
for(let i=0; i<teas.length; i++){
    console.log(teas[i]);
}
// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")
 let count = 0;
for(let i=0; i<teas.length; i++){
    if(teas[i]!=="Herbal tea"){
        count++;
    }
}
console.log(count);

// Problem: Use a for loop to create a new array with all tea names in uppercase
const uppcaseTeas = []
for(let i=0; i<teas.length; i++){
    uppcaseTeas.push(teas[i].toUpperCase());
    console.log(uppcaseTeas);
}

// Problem: Use a for loop to find the tea name with the most characters
let longestTea = teas[0];
for(let i=0; i<teas.length; i++){
    if(teas[i].length > longestTea.length){
        longestTea = teas[i];
    }
}
console.log(longestTea);

// Problem: Use a for loop to reverse the order of the teas in the array
const reverseArray = []
for(let i = teas.length - 1; i>=0; i--){
    reverseArray.push(teas[i]);
}
console.log(reverseArray);