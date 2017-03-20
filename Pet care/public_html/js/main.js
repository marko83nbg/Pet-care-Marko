$(document).ready(function () {

    
    /*cart quantity*/
    if ($('.order-quantity').length>0){
    $('.minus').click(function(e){
        e.preventDefault();
       var quantity = parseInt($(this).next().val());
       var checkQuantity = isNaN(quantity); 
       if(quantity < 2 || checkQuantity == true){
           $(this).next().val(1);
       }
       else{
           quantity = parseInt(quantity);
           quantity -= 1;
           $(this).next().val(quantity);
       }
   });
   
   $('.plus').click(function(e){
       e.preventDefault();
       var quantity = $(this).prev().val();
       var checkQuantity = isNaN(quantity);
       if(checkQuantity == false){
           quantity = parseInt(quantity);
           quantity += 1;
           $(this).prev().val(quantity);
       }else{
          
           $(this).prev().val(1);
       }
   });
    }
    
    
    if ($('.price-filter').length>0){
    $(".slider")
            .slider({
                max: 2000,
                range: true,
                values: [5, 15]
            })
            .slider("pips", {
                rest: false
            }).slider("float");

}




 if ($('.single-blog-owl').length>0){
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
 }

 if ($('.bxslider').length>0){
    $('.bxslider').bxSlider({
        auto: true
    });
    }

    /*TEAM SECTION SLIDER*/
 if ($('.my-carousel').length>0){
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

    }

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

   
    

    
    
    


  




});

