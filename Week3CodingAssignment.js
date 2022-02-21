// 1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). 
// Print the result to the console.


// a.Programmatically subtract the value of the first element in the array from the value in the last element of the array 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let last = ages[ages.length-1]; //last index of array for ages
ages[0] // first index of array for ages
console.log(last- ages[0]);                 


// b.Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(2);
console.log(ages[ages.length-1] - ages[0]);


// c.Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let total = 0;
let average;
for(i = 0; i < ages.length; i++ ){ // loop through the length of the array
    total += ages[i];
}
console.log(total); // the sum of all index in this array.
console.log(average = total / ages.length);


//2.Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names =["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// a.Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let totalLetters = 0;
let averageLength;
for (let i = 0; i < names.length; i++) {   
    totalLetters += names[i].length;
}

 averageLetters = totalLetters / names.length;
 
 console.log(averageLetters);

//  b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
let newName = "";
for(let i = 0; i < names.length; i++){
    newName= newName + " " + names[i];
}
console.log(newName);
// 3.	How do you access the last element of any array?
// The last element could be access by using the the length property . An example would be Array[Array.length-1]
// 4.	How do you access the first element of any array?
// The first element could be access by index 0 in the array. An example would be Array[0]
// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths =[];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);   
}
console.log(nameLengths);
// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let totalElements = 0;

for (let i = 0; i < nameLengths.length; i++) {
    totalElements+= nameLengths[i];
}
console.log(totalElements);
// 7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function test7(word, n){
    var combine = "";
    while(n != 0){
        combine += word
        n--
    }
    return combine;
}
console.log(test7("Hello",3));
// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function test8(firstName, lastName){
    return firstName + " " + lastName;
}
let fullName = test8("Buu","Truong");
console.log(fullName);


// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isTotalGreaterThan100(arr){
    sum=0;
    for(i=0; i<arr.length; i++)
    {
        sum = sum + arr[i];
    }
    if(sum > 100)
    {
        return true;
    }
    else
    {
        return false;
    }
}
var a=isTotalGreaterThan100([2,4,5,]);
console.log(a);


// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average1(arr){    
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    var avg = total / arr.length;
    return avg;
    }
    
    var av=average1([1,2,3,4,5,6]);
    console.log(av);


// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function isGreaterAvg(arr1,arr2){    
    var total1 = 0;
    for(var i = 0; i < arr1.length; i++) {
        total1 += arr1[i];
    }
    var total2=0;
    for(var i = 0; i < arr2.length; i++) {
        total2 += arr2[i];
    }
    var avg1 = total1 / arr1.length;
    var avg2 = total2 / arr2.length;
    if (avg1>avg2){
        return true;
    }
    else{
        return false;
    }
    }
    
    var a=isGreaterAvg([6,7,8,9,10],[1,2,3,4,5,]);
    console.log(a);


// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside,moneyInPocket){  
    if(isHotOutside && moneyInPocket>10.5){
        return true;
    }
    else{
        return false;
    }
}

var a=willBuyDrink(true,12);
console.log(a);


// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function trafficLight(color){ // this is my functions and the parameters. I have set up the arguments where red means stop, and green means go. 
    if(color === "red" ) return "Stop!";
    if(color === "green") return "Go!";
    
}

let stop= "red";
let go= "green";
console.log(trafficLight(stop));
console.log(trafficLight(go));