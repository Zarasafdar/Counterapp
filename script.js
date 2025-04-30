let counter = 0;
const counterDisplay=document.getElementById('counter')
const incrementbtn=document.getElementById('increment');
const decrementbtn=document.getElementById('decrement')
const resetbtn=document.getElementById('reset');


incrementbtn.addEventListener('click',()=>{
counter++;
counterDisplay.innerText=counter;
});


resetbtn.addEventListener('click',()=>{
    counter=0;
    counterDisplay.innerText=counter;
});


    decrementbtn.addEventListener('click',()=>{
        counter--;
        counterDisplay.innerText=counter;
})