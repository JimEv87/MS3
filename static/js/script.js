$(document).ready(function () {
    $(".sidenav").sidenav({ edge: "right" });
    $('.slideshow').slick({
        infinite: true,
        dots: false,
        arrows: false,
        centerMode: true,
        speed: 300,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }
        ]

    });
});




