const message = document.getElementById('message');
const contact = document.getElementById('contact');
const arrow = document.getElementById('Capa_1');
const projects = document.getElementById('projects');
function scrollDownView(){
  var elmnt = document.querySelector(".contact-form");
  elmnt.scrollIntoView(
    {
      behavior:'smooth'
    }
  );
}
function scrollMiddleView(){
  var elmnt = document.querySelector(".section-title");
  elmnt.scrollIntoView(
    {
      behavior:'smooth'
    }
  );
}
function scrollUpView(){
  var elmnt = document.getElementById("contact");
  elmnt.scrollIntoView(
    {
      behavior:'smooth'
    }
  );
}

message.addEventListener('click', scrollDownView);
contact.addEventListener('click', scrollDownView);
projects.addEventListener('click', scrollMiddleView);
arrow.addEventListener('click', scrollUpView);


// Project Dots
const ball =document.getElementById('ball');
function wait(ms=0){
  return new Promise((resolve)=>{
    setTimeout(resolve,ms);
  })
}
async function moveBall(event){
  console.log('start');
  await wait(100);
  ball.classList =""
  var ballPos = ball.offsetLeft-ball.offsetWidth;
  var x = (event.target.offsetLeft-ballPos)-3+'px';
  ball.style.transform = "translateX(" + x + ")"; 
  ball.classList = 'active';
  console.log('end');
}



// Search button
const button = document.getElementById("search-button");

button.addEventListener("click", RotateIcon);

var degrees = 0;
function RotateIcon() {
  
  degrees += 1080;
  console.log('rotated',degrees);
  document.getElementById("Layer_1").style.transform = "rotate("+degrees+"deg)";
  event.stopPropagation();
}




  

