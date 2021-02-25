$(document).ready(function () {
    $('h3').counterUp({
        delay: 10,
        time: 1000
    });
    new WOW().init();


    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
        }
    })


    $('.logo-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrow: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
    });


    // project area
    // init Isotope


    var $gridd = $('.itemss').isotope({
        // options
    });
    // filter items on button click
    $('.c_ul').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $gridd.isotope({ filter: filterValue });
    });


});
