let lastName = "Gaba";

// this is string obj and string function is used to create it.
let firstName = new String("Brijesh");

// If we use lastName with . it will be converted into string
// and we can use many functionss wiht lastName

let message = 'This is my first Message';
let words = message.split(' ');
console.log(words);

let message1 = `Hello ${lastName}

how 
are you`;

// console.log(message1);


// date and time

let date = new Date();  
// console.log(date);

let date1 = new Date('June 30 2004 07:00');
// console.log(date1);

let date2 = new Date(2004,0,31,7);
// console.log(date2);

date2.setFullYear(1999);

let date3 = new Date();
// console.log(date3);

// Array

// creation

let numbers = [1,3,5,7];

// Insertion

numbers.push(9);  // End insertion
numbers.unshift(3); // Begin
numbers.splice(2,0,'a','b','c'); // End

// console.log(numbers);

// Searching

// console.log(numbers);

// console.log(numbers.indexOf(3));

// We want to check if a no exist in an array

if(numbers.indexOf(19)!=-1){
    console.log("Present");
}

// another method

//console.log(numbers.includes(2));  // returns true or false


// console.log(numbers.indexOf(4,2)); // returns -1 if false


let courses = [
    {no:1,naam:'Brijesh'},
    {no:2,naam:'Gaba'}
];


// console.log(courses);


// console.log(courses.indexOf({no:1,naam:'Brijesh'}));
// It will not work on object because the refrences are different

let course = courses.find(course=> course.naam ==='Gaba');

// let course = courses.find(course => course.naam === 'Brijesh');


// console.log(course);

// Remove elements  from array

let number = [1,2,3,4,5,6,7];

number.pop(7); // end se remove
number.shift(); // begin se remove
number.splice(3,1); // middle se remove


// console.log(number);


// How to empty the array

let num = [1,2,3,4,5];
let num2 = num;

num = []; // bekar method
// num.length = 0;  Good method

// num.splice(0,num.length); another method 


// console.log(num);
// console.log(num2);


// Combining and slicing arrays

let first = [1,2,3];
let second = [4,5,6];

let combined = first.concat(second);

console.log(combined);

let slice = combined.slice(2,3);
// let slice = combined.slice(2);  2 idx se lekar sare slice ho jate
// let slice = combined.slice();   is case mee copy bn jaati 

console.log(slice);    

// Combining and slicing on objects H/w

let comb1 = [
    {no:1,name:"Brijesh"}
];
 
let comb2 = [
    {no:2,name:"AUfj"}
];
 
let comb3 = comb1.concat(comb2);
console.log(comb3);

// spread operator

let fir = [1,2,3];
let sec =  [4,6,5];

let comb = [...fir,'a',...sec];

console.log(comb);

// copy kese  create kru

let another =  [...fir];

// Iterating an array

// for of lloop

let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value);
// }

// for each loop

arr.forEach(function(number){
    console.log(number);
})

arr.forEach(number=> console.log(number));

// Joining array

let numb =  [10,20,30,40];
const joined = numb.join(',');

console.log(joined);

// Split method

let messg = 'This is my first message';
let parts = message.split(' ');

console.log(parts);

let join = parts.join('_');
console.log(join);

// sort method

let nummbers = [4,3,1,5,2];

 nummbers.sort();

console.log(nummbers);

numbers.reverse();

console.log(nummbers);

// object arrray ko sort krna hh homework

// Filteration

let numberr = [1,2,-1,-4];

let filtered = numberr.filter(value => value>=0 );

console.log(filtered);


// Maping

let n = [7,8,9,10];

let items = n.map(value =>'student_no' + value);

console.log(items);

// Maping with object

let nno = [1,2,-6,-9];
// let f = nno.filter(value=> value>=0);
let item = nno.filter(value => value>=0).map(num=>obj = {value:num});

console.log(item);


// trying to sort obj array
