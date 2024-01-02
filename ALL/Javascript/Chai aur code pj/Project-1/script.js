const buttons = document.querySelectorAll('.box');
const body = document.querySelector('body');


buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        if(event.target.id ==='grey'){
            body.style.background=event.target.id;
        }
        if(event.target.id ==='white'){
            body.style.background=event.target.id;
        }
        if(event.target.id ==='blue'){
            body.style.background=event.target.id;
        }
        if(event.target.id ==='yellow'){
            body.style.background=event.target.id;
        }
    })
})
