const secretPhrase = ["salam" , "teeth" , "elbow" , "never" , "knee"];
let randonItem="";
let clicked=[];
let result= "";
let mistakes= 0;

function selectRandomItem(){
    randonItem=secretPhrase[Math.floor(Math.random()*secretPhrase.length)];
    document.getElementById("letters").addEventListener("click",buttonHandler);
    window.addEventListener("keydown",keyhandler);
    console.log(randonItem);
}


function checkIfWon(){
    if(randonItem === result){
         document.getElementById("winOrLoss").style.display= "flex";
         document.getElementById("winOrLoss").innerText="you win";
        document.getElementById("image").querySelector("img").src ="/assets/image/winner.png"
    }
}

function checkIfLost(){
if(mistakes === 6){
    document.getElementById("winOrLoss").style.display= "flex";
    document.getElementById("winOrLoss").innerText=`you loss`;
    document.getElementById("your-guess").innerHTML= `<p> random word is : ${randonItem}</p>`

}
}

function updatepicture(){
   let image= document.getElementById("image").querySelector("img");
    image.src= `/assets/image/hangman${mistakes}.png`;
}

function SetUnderScore (){
    let splitWord = randonItem.split("");
    let mappedword = splitWord.map(letter => (clicked.indexOf(letter) >=0 ? letter : "_"));
    result=mappedword.join("");
    document.getElementById("your-guess").innerHTML= `<p>${result}</p>`
}



function letterHandler(letter){
    letter=letter.toLowerCase();
    clicked.indexOf(letter)=== -1 ? clicked.push(letter):null;
    document.getElementById(letter.toUpperCase()).className ="used";
    if (randonItem.indexOf(letter) >= 0){
        SetUnderScore();
        checkIfWon();
    }
    else if(randonItem.indexOf(letter) === -1){
        mistakes++;
        checkIfLost();
        updatepicture();
    }
}

function keyhandler (event){
letterHandler(event.key);
}
function buttonHandler(event){
 
letterHandler(event.target.id);
}


selectRandomItem();
SetUnderScore();