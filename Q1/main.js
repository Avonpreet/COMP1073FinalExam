
let main = document.querySelector('main');
let submitButton = document.querySelector('input[type="submit"]');
let input = document.querySelector('input[type="text"]');
let body = document.querySelector('body'); 

submitButton.addEventListener('click', function(e) { 
  let personName = input.value; 
  let paragraph = document.createElement('p'); 
  paragraph.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  body.setAttribute('class', 'meow'); 
  main.appendChild(paragraph);
  console.log('=^..^='); 
  e.preventDefault();
}); 