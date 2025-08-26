/*console.log('kl university');
alert('kl university'); */

//variable declaration
/*var myvar = "KL UNIVERSITY";
console.log(myvar);
var myvar = 10;
console.log(myvar);
console.log(myvar);
var myvar = 20.5;   
console.log(myvar);*/

//let declaration
/*let myvar = "KL UNIVERSITY";
console.log(myvar);*/

//const declaration
/*const  name = "Akhil";
console.log(name);
name = 10;
console.log(name);*/

// Rules to define a variables
//variable name should have a space
//variable name should not have the special characters except $ and _

/*let name = 'Akhil';
let Name = 'Akhil';
let 1name = 'Akhil';
let a = 'Akhil';
let number = 10;

let my_name = 'Akhil';
let $name = 'Akhil';

//camel notation
let myName = 'Akhil';  */ 

//datatypes there are 5 datatypes in js
/*let number = 20;
let name = "Akhil";
let array = [1,2,3,4,5];
let object = {name:'Akhil', age:22};*/

//Mathematical operators a+b a-b a*b a/b a%b

//relational operators 10<20 true 10>20 false


//logical operators 10<20 && 5<10 true 10<20 && 5>10 false

//bitwise operators & | ^ ~ << >> >>>
//increment and decrement operators ++ --
//ternary operators condition ? true : false

//Conditional / Selection/branching statements
//if statement
//if else statement
//if else if ladder
//switch case

//if a customer has more than 100 points,
//they are a "gold" customer, otherwise,
//they are a "silver" customer

/*let points = 120;
if (points >= 100){
    console.log("gold customer");
}
else{
    console.log("silver customer");
} */

//if hour is between 6AM and 12PM : Good Morning!
//if hour is between 12PM and 6PM : Good Afternoon!
//Otherwise : Good Evening!

/*
let hour = 10;
if (hour >=6 && hour < 12){
    console.log("Good Morning!");
}
else if (hour >=12 && hour <=18){
        console.log("Good Aternoon!");
    }
    else
        {
        console.log("Good Evening1");
    }
*/

//if a student get pass percantage 95 to 100 give grade a+
// if a sutdent get pass % 85 to  grade a
//75 to 85 grade b
//65 to 75 grade c
// less than 65 grade f

let per = 75;

if (per >= 95 && per <= 100)
     {
    console.log("grade a+");
} 
else if (per >= 85 && per < 95)
     {
    console.log("grade a");
} 
else if (per >= 75 && per < 85)
     {
    console.log("grade b");
} 
else if (per >= 65 && per < 75)
     {
    console.log("grade c");
} 
else if (per < 65 && per >= 0)
     {
    console.log("grade f");
} 
else
     {
    console.log("invalid percentage");
}




