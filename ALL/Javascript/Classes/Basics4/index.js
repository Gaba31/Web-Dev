// console.log("kya haal");


// function call or invoke

run();

function run(){
    console.log("running");
}

// function call or invoke

run();

//Named function assignment

let stand = function walk(){
    console.log('walking');
}

//Anonymous function assignment
let stand2 = function (){
    console.log('walking');
}

stand(); // This cannot use as hoisting means we cannot declare at the top of the function

// walk();  can't use this 

let jump = stand;

jump(); 


//

// function sum(){
//     let total = 0;
//     for(let value of arguments ){
//         total += value;
//     }
   
//     return total;
// }

// console.log(sum(1,2)); // output - 3
// console.log(sum(1)); // output Nan - not a number
// console.log(sum()); // Nan
// console.log(sum(1,2,3,4,5)); // output - 3


// let ans = sum(1,2,4,55,6,4);
// console.log(ans);


// Rest operator

function sum(num, ...args){
    console.log(args);
}

sum(1,2,34,5,56,4);

// Default Parameter

function interest(p,r=6,y=10){
    return p*r*y/100;
}

console.log(interest(1000));


// getter setter

// getter -> access properties
// setter -> change or update values

let person = {
    fName :'Love',
    lName :'Babbar',
    get fullName(){
        return `${person.fName}    ${person.lName}`;
    },
    set fullName(value){
        if(typeof value !== String){
            throw new Error ("Not a string");
        }
        let parts = value.split(' ');
        this.fName  = parts[0];
        this.lName =  parts[1];
    }
};

// function to print upper
// read only function

try{
    person.fullName = 'Rahul Kumar';
}
catch(e){
    alert(e);
}
console.log(person.fullName);

// Scope of var,let -- Discussed in previous letures as well 