console.log('Chaliye shuru krte hn')

// object create

let rectangle = {
    length : 1,
    breadth : 2,
    
    // For Behaviour 
    draw: function(){
        console.log('draw');
    } 
};

console.log(rectangle.length);

// factory function

function createRectangle(length,breadth){
    let rectangle = {
        // length : length,
        // breadth : breadth,
        length,
        breadth,
    
        draw: function(){
            console.log('draw');
        } 
       
    };

    return rectangle;
}

let rectangleObj1 = createRectangle(5,4);
console.log(rectangleObj1.length);

// camelcase => numberOfStrudents
// Constructor function => Pascal Notation => first letter of every word is capital => NUmberOfStudents
// constructor func => prop/method -> intialise/define kr de
function Rec (len,bre){
    // this refers to curr object
    this.length = 1;
    this.breadth = 2;
    this.draw = function(){
        console.log('drawing');
    }

}

// object creating usiing cosntructor
//new keyword empty obj return krta h

let rectangleObject = new Rec();

rectangleObject.color = 'yellow'; // it will add
delete rectangleObject.color;  // It will delete
console.log(rectangleObject.constructor);


// Function constructor

let Rectangle1 = new Function(
    'length','breadth',
    ` this.length = length;
    this.breadth = breadth ;
    this.draw = function(){
        console.log('drawing');
    }
`
    );

    // object creation using Rectangle1

let rect = new Rectangle1(2,3); 

console.log(rect);


// Iterating throung objects

let rectan = {
    length:2,
    breadth:4
};

// for in loop 

for(let key in rectan){
    // keys are reflected througth key variable
    // values are reflected through rectangle[key]
    console.log(key,rectan[key]);
}

// for of

for(let key of Object.entries(rectan)){
    console.log(key);
}


if('color' in rectan){
    console.log('Present');
}
else{
    console.log('Absent');
}

//object cloning 
//1
let src  = {
    a:10,
    b:20,
    c:30
};

let dest={};

for(let key in src){
    dest[key] = src[key];
}

console.log(dest);


//2

let des = Object.assign({},src);

// 3

let de = {...src};

console.log(de);

