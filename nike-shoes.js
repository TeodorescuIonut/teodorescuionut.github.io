var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("img");
    var smallSlides = document.getElementsByClassName("pic");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < smallSlides.length; i++) {
        smallSlides[i].className = smallSlides[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    smallSlides[slideIndex-1].className += " active";   
    }
            