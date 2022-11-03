$(function() {
    //the shrinkHeader variable is where you tell the scroll effect to start.
    var shrinkHeader = 50;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('header').addClass('smaller');
        } else {
            $('header').removeClass('smaller');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});



$(function() {
    //the shrinkHeader variable is where you tell the scroll effect to start.
    var shrinkHeader = 1200;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.banner_content').addClass('parallax');
        } else {
            $('.banner_content').removeClass('.parallax');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});





$('.sec_3_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$('.sec_4_slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 768,
            settings: {
                slidesToScroll: 1,
                infinite: true,
            }
        }
    ]
});