// object creation

let rec = {
    length:1,
    breadth:2,

    draw:function(){
        console.log("drawing");
    }
};

// Factory function

function rectangle(length,breadth) {

    return rec = {
        length:length,
        breadth:breadth,
    
        draw:function(){
            console.log("drawing");
        }
    };
    
}

let a = rectangle(6,7);
a.c = 4;
delete a.c;
console.log(a.c);


// Constructor function 
// BrijeshGaba --> pascal notation 


function Rec(len,bre){
    this.length = len;
    this.breadth = bre;

    this.draw=function(){
        console.log("drawing");
    }
}

let b = new Rec(2,5);
console.log(b);

console.log(Rec.constructor);

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



 // for in 
 let rectang = {
    len:5,
    breadth:3
 };
 
//  for(let key in rectang){
//     console.log(key,rectang[key]);
//  }
   
for(let key of Object.entries(rectang)){
    console.log(key);
}

if('c' in rectang){
    console.log("Presenst");
}
else{
    console.log("ab");
}

let objclone1 = {...rectang};
console.log(objclone1.len);
objclone1.len = 1;
console.log(objclone1.len);


let dest = {};

for(let key in rectang){
    dest[key] = rectang[key];
}

let dest1 = Object.assign({},rectang);