$(document).ready(function(){
  $('.bxslider').bxSlider({
  auto: true
});


/*TEAM SECTION SLIDER*/

$('.my-carousel').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});









});

