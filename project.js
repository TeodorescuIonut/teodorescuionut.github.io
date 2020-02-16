



// Project Dots
const ball =document.getElementById('ball');
ball.classList.remove('active');
this.circles = document.querySelectorAll('.circle');
this.circles.forEach(item => {
  item.addEventListener('click', event => {
    var ballPos = ball.offsetLeft-ball.offsetWidth;
    var x = (event.target.offsetLeft-ballPos)-3+'px';
    ball.style.transform = "translateX(" + x + ")"; 
    ball.classList.add('active');
    event.stopPropagation();
    console.log(this.event.target)
    
  })
})



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




  

