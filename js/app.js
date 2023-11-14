setInterval(function(){
      
    let color1 = Math.floor( Math.random()*255);
    let color2 = Math.floor( Math.random()*255);
    let color3 = Math.floor( Math.random()*255);

    document.body.style.background = `linear-gradient(rgb(${color2},${color3},${color1}),rgb(${color3},${color1},${color2}))`;
},1000)

let incrementbtn = document.querySelector(`#increment`);
let decrementbtn = document.querySelector(`#decrement`);
let input = document.querySelector(`input`);

incrementbtn.addEventListener(`click`,function(){
    input.value++;
})
decrementbtn.addEventListener(`click`,function(){
    if(input.value > 1){
        input.value--;
    }
})

