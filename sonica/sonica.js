const elem = document.querySelectorAll('.box');
const hideElem = document.querySelectorAll('.hide');
if(hideElem){
  hideElem.forEach(function(el){
    el.addEventListener('click',function(event){
      event.stopPropagation();
});
  })
}


  if(elem) {
elem.forEach(function (element, index, all){
  element.addEventListener('click', function (event) {
    
    all.forEach(function (el) {
      
      el.classList.remove('open');
      
      
    })
    this.classList.toggle('open');
    
  })
  
})

    
} 




  