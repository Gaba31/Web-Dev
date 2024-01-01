const body = document.querySelector("body");
const button = document.querySelectorAll('.box');

button.forEach(function(btn){
    btn.addEventListener('click',function(event){
        if(event.target.id==='orange'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='white'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='green'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='blue'){
            body.style.backgroundColor = event.target.id;
        }
    });
});