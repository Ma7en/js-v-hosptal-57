



$(document).ready(function () {

    // open navbar widt 767px
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
        // $(".header").toggleClass("sticky");
        $(".header").addClass("sticky");
    });


    $(window).on('load scroll', function () {


        // remove navbar width 767px
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // remove sticky header
        if ($(window).scrollTop() > 0) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }

        // show and hide button go to the top
        if ($(window).scrollTop() > 0) {
            $('.scroll-top').show();
        } else {
            $('.scroll-top').hide();
        }

        // scroll spy 

        $('section').each(function () {

            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');
            let height = $(this).height();

            if (top > offset && top < offset + height) {
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    // smooth scrolling 

    $('a[href*="#"]').on('click', function (e) {

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );

    });

});



/*
==============================================
==============================================
*/


/* ===== start scroll spy ===== */

let dateYear = document.querySelector(".footer .dateYear");
let dataNow = new Date();
window.addEventListener("load", () => {
    dateYear.innerHTML = dataNow.getFullYear();
});

/* ===== end scroll spy ===== */


/*
==============================================
==============================================
*/









