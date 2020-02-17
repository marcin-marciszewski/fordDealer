// Change subpages
$(document).ready(function () {
    var trigger = $('.custom__links .custom__links--content a'),
        custom__content = $('#custom__content')
    custom__content.load('subpages/dimensions.html');

    trigger.on('click', function () {
        var $this = $(this),
            target = $this.data('target');
        console.log('subpages/' + target + '.html')
        custom__content.load('subpages/' + target + '.html');
        return false;
    })
})

// Add color to active subpage button

$('.custom__links .custom__links--content a').on('click', function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
})

// Gallery
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}