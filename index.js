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
  console.log(e.target.src)  
  if(e.target.src === "http://127.0.0.1:5500/images/mole.png"){
    // console.log('MOLE')
    count++;
    score.innerHTML = `Score: ${count}`;
    e.target.src = "http://127.0.0.1:5500/images/hole.png"
    generateMole();
  }
})
