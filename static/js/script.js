$(document).ready(function () {
    $(".sidenav").sidenav({ edge: "right" });
    $('.slideshow').slick({
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        speed: 300,
        autoplaySpeed: 60000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [

            {
                breakpoint: 500,
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
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
        ]

    });


});

// var input = document.getElementById('username');

// input.oninvalid = function (event) {
//     event.target.setCustomValidity('Username should be between 5 and 15 characters: letters and numbers only');
// }

// var input = document.getElementById('password');

// input.oninvalid = function (event) {
//     event.target.setCustomValidity('Password should be between 5 and 15 characters: letters and numbers only');
// }


// to ensure only numbers are inserted for recipe times
function validate(evt) {
    var theEvent = evt || window.event;

    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}


// replace any double-spaces with single-spaces
let dishName = $("textarea#dish_name");
$(dishName).keyup(function() {
    let dishNameValue = this.value;
    let removeDoubleSpaces = dishNameValue.replace("  ", " ");
    $(dishName).val(removeDoubleSpaces);
});


let ingredients = $("textarea#ingredients");
$(ingredients).keyup(function() {
    let ingredientsValue = this.value;
    let removeDoubleSpaces = ingredientsValue.replace("  ", " ");
    $(ingredients).val(removeDoubleSpaces);
});

let method = $("textarea#method");
$(method).keyup(function() {
    let methodValue = this.value;
    let removeDoubleSpaces = methodValue.replace("  ", " ");
    $(method).val(removeDoubleSpaces);
});