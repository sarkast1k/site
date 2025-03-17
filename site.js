const reduce = document.getElementById("reduce");
const increase = document.getElementById("increase");
const zero = document.getElementById("zero");
const mylabel = document.getElementById("mylabel");

let myNumber = 0;
const sounds = {
    increase: new Audio('https://www.myinstants.com/media/sounds/boing.mp3'),
    reduce: new Audio('https://www.myinstants.com/media/sounds/cartoon-jump.mp3'),
    zero: new Audio('https://www.myinstants.com/media/sounds/adam-ya-adam-ya-geldi-adam-mp3cut_T0oIYMZ.mp3')
};

increase.onclick = function(){
    myNumber++;
    mylabel.textContent = myNumber;
    sounds.increase.play();
}

reduce.onclick = function(){
    myNumber--;
    mylabel.textContent = myNumber;
    sounds.reduce.play();
}
zero.onclick = function(){
    myNumber = 0;
    mylabel.textContent = myNumber;
    sounds.zero.play();
}