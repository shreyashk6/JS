function Subscribe(){
  const buttonElement = document.querySelector('.js-subscribe-button');

  if(buttonElement.innerHTML === 'Subscribe'){
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  }else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}

function calculateTotal(){
  const inputElement= document.querySelector('.js-cost-input').value;
  //console.log(inputElement);
  
  
  //console.log(typeof inputElement);
  //lets manually convert the string to a number
  let cost=Number(inputElement);


  //console.log(typeof cost);
  //console.log(cost);
  if(cost < 40){
    cost = cost + 10;
  }else {
    cost = cost;
  }
  console.log(cost);
document.querySelector('.js-total-cost').innerHTML= `$${cost}`;
}

function handlecostkeydown(){
  console.log(event);
if(event.key === 'Enter'){
  calculateTotal();
}
}