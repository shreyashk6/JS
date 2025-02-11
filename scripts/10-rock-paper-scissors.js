//adding objects
let score=JSON.parse(localStorage.getItem('score'));
  
if(score ===null){    //can also be written as if(!score){}
  score={
    wins:0,
    losses:0,
    ties:0
  };
}

updateScoreElement();


function playgame(playermove){
console.log(pickcomputermove());


let result='';
if(playermove==='SCISSORS'){
  if(computermove === 'ROCK'){
    result= 'You lose';
  }else if (computermove==='PAPER'){
    result='You Win';
  }
  else {
    result= 'Tie';
}
} else if(playermove==='PAPER'){
    if(computermove === 'ROCK'){
      result= 'You Win';
    }else if (computermove==='PAPER'){
      result='Tie';
    }
    else {
      result= 'You lose';
  }
} else if (playermove=== 'ROCK'){
  if(computermove === 'ROCK'){
    result= 'Tie';
  }else if (computermove==='PAPER'){
    result='You lose';
  }
  else {
    result= 'You Win';
  }
}

//adding object's codes
if(result=== 'You Win'){
score.wins +=1;
}else if(result==='You lose'){
score.losses+=1;
}else if(result==='Tie'){
score.ties+=1;
}


//CONVERT JS TO JSON-STRING FORMAT
localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML= result;

document.querySelector('.js-moves').innerHTML =    ` You 
    <img src="images/${playermove}-emoji.png" class="move-icon">
    <img src="images/${computermove}-emoji.png" class="move-icon">
Computer`;


}
  let computermove='';
  function updateScoreElement() {
    document.querySelector('.js-score')
.innerHTML= `Wins:${score.wins}, Losses:${score.losses},Ties:${score.ties}`;

  }



   function pickcomputermove() {
    const randomno = Math.random();
      

      if(randomno >=0 && randomno <1/3){
        computermove='ROCK';
      }
      else if(randomno >1/3 && randomno <2/3){
        computermove= 'PAPER';
      }
      else{
        computermove='SCISSORS';
      }       
  
   }