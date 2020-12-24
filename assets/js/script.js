/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */


$(window).on('load', function () {
    // scrollyJs
    scrolly();

});

/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    $(function () {
        $('html').niceScroll({
            cursorwidth: 6,
            cursoropacitymin: 0.4,
            cursorcolor: 'var(--mainColor)',
            cursorborder: 'none',
            scrollspeed: 180,
            smoothscroll: true,
            cursorborderradius: 4,
            autohidemode: 'leave',
            zindex: 9999
        });
        $('#ascrail2000-hr').hide();
    });

    if ($('.clientsCarousel').length) {
        $('.clientsCarousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: $(window).width() > 1300 ? true : false,
            dots: false,
            center: true,
            autoplay: true,
            autoplayHoverPause: true,
            navText: ["<span class='symbolic-left onHoverEvent'> <img src='assets/img/symbolic-left.svg' class='img-fluid' /> </span>", "<span class='symbolic-right onHoverEvent'> <img src='assets/img/symbolic-right.svg' class='img-fluid' /></span>"],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3
                }
            }
        });
    }


    if ($("a#scrollToSeeMore").length) {
        $("a#scrollToSeeMore").on('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    }


});
