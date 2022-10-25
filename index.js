let container = document.querySelector('#container')
let score = document.querySelector('#score');
let count = 0;

function generateMole(){
    let randomNum = Math.floor(Math.random() * 9 + 1);
    let startHole = document.querySelector(`.hole${randomNum}`);
    startHole.innerHTML = '<img src="./images/mole.png">'
}

generateMole();

container.addEventListener('click', (e) => {
  console.log(e.target.outerHTML)  
   if(e.target.outerHTML === '<img src="./images/mole.png">'){
    // console.log('MOLE')
    count++;
    score.innerHTML = `Score: ${count}`;
    e.target.outerHTML = '<img src="./images/hole.png">'
    generateMole();
  }
})

// let holesArr = document.querySelectorAll('.hole') --> [domElm, domElm]