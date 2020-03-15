
const element = document.querySelectorAll('.cards');
const playBtn = document.querySelectorAll('.far');
if (element) {
  element.forEach(function(el){      
     el.addEventListener('mouseover', function (e) {
      var width = el.offsetWidth ;
        el.style.animation = `slidebottom 25s steps(149) infinite`; 
       
      el.addEventListener('mouseleave', function () {
        el.style.animation = "";
        
      })
     });
  });
}