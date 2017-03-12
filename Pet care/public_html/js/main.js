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

});

