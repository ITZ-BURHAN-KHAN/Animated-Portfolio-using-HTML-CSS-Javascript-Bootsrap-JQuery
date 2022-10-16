$(document).ready(function () {

    // Preloader script start
    // $(window).on('load', function () {
    //     $('.preloader').addClass('complete');
    // });
    // Preloader script end

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('.sticky').addClass("stickyadd");
        } else {
            $('.sticky').removeClass("stickyadd");
        }
    })

    // text auto typing animation
    var typed = new Typed(".element", {
        strings: ["Alex williams", "a Web Developer", "a Designer", "a BusinesssMan"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    //Progress Bar
    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function () {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute("style", "width:100%;transition:1s all");
            p[1].setAttribute("style", "width:95%;transition:1.5s all");
            p[2].setAttribute("style", "width:85%;transition:1.7s all");
            p[3].setAttribute("style", "width:80%;transition:2s all");
            p[4].setAttribute("style", "width:75%;transition:2.3s all");
        },
        offset: '90%'
    });
    var filterizd = $('.filter-container').filterizr({
        animationDuration: .5,
    });

    //   Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1
    });

});