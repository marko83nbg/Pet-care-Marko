$(document).ready(function () {
    
    
    $('.single-blog-owl').owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    
    
    $('.bxslider').bxSlider({
        auto: true
    });

    
    /*TEAM SECTION SLIDER*/

    $('.my-carousel').owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    


    $('.testimonial a.bx-prev').text('');
    $('.testimonial a.bx-next').text('');


//Animacije

    $(window).scroll(function () {
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var height = $(window).height();
            var scroll = $(window).scrollTop();
            var animationName = $(this).attr('data-animation');
            if (position < scroll + height - 50) {
                $(this).addClass(animationName);
            }
        });
    });


    $('.animation').each(function () {
        var position = $(this).offset().top;
        var height = $(window).height();
        var scroll = $(window).scrollTop();
        var animationName = $(this).attr('data-animation');
        if (position < scroll + height / 2 + 100) {
            $(this).addClass(animationName);
        }
    });
$("#ex2").slider({});

/* form */

function formValidation(){

var name = $('.user-name').value;
var lastName = $('.user-lastname').value;
var phoneNumber = $('.phone-number').value;
var email = $('.user-email').value;
var subject = $ ('.subject').value;

if(name === ""){
    $('.user-name').style.border = "1px solid red";
    $('.name-error').innerHTML = 'Please fill out this field';
    return;
}else if(name.length<3 || name.length>10){
    $('.user-name').style.border = "1px solid red";
    $('.name-error').innerHTML = 'This field must contain between 3 and 10 characters';
    return;
}else{
    $('.user-name').style.border = "1px solid #ccc";
    $('.name-error').innerHTML = '';
}

if(lastName === ""){
    $('.user-lastname').style.border = "1px solid red";
    $('.lastname-error').innerHTML = 'Please fill out this field';
    return;
}else if(lastName.length<3 || lastName.length>10){
    $('.user-lastname').style.border = "1px solid red";
    $('.lastname-error').innerHTML = 'This field must contain between 3 and 10 characters';
    return;
}else{
    $('.user-lastname').style.border = "1px solid #ccc";
    $('.lastname-error').innerHTML = '';
}

if(phoneNumber === ""){
    $('.phone-number').style.border = "1px solid red";
    $('.phone-error').innerHTML = 'Please fill out this field';
    return;
}else if(isNaN(phoneNumber)){
    $('.phone-number').style.border = "1px solid red";
    $('.phone-error').innerHTML = 'Please type numbers only';
    return;
}else{
    $('.phone-number').style.border = "1px solid #ccc";
    $('.phone-error').innerHTML = '';
}

if(email === ""){
    $('.user-email').style.border = "1px solid red";
    $('.email-error').innerHTML = 'Please fill out this field';
    return;
}else{
    $('.user-email').style.border = "1px solid #ccc";
    $('.email-error').innerHTML = '';
}

if(subject === ""){
    $('.subject').style.border = "1px solid red";
    $('.subject-error').innerHTML = 'Please fill out this field';
    return;
}else{
    $('.subject').style.border = "1px solid #ccc";
    $('.subject-error').innerHTML = '';
}



}


});

