let button = document.querySelector('button');
let header = document.querySelector('h1');


fetch('https://api.adviceslip.com/advice').then(
    result => console.log(result)
)