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

var input = document.getElementById('username');

input.oninvalid = function(event) {
    event.target.setCustomValidity('Username should be between 5 and 15 characters: letters and numbers only');
}

var input = document.getElementById('password');

input.oninvalid = function(event) {
    event.target.setCustomValidity('Password should be between 5 and 15 characters: letters and numbers only');
}


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
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}



