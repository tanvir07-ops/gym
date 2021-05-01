// // // var myVariable = "Welcome To my Home page";
// // // document.write(myVariable);
// // // alert('Tanvir Rifat')

// // // var a = 20;
// // // if (a == 10) {
// // //     document.write('<br>A is ' + a)
// // // } else {
// // //     document.write('<br>A is not 10')
// // // }

// // // function Rifat() {
// // //     document.write("<br>Tanvir Rifat")

// // // }
// // // Rifat()

// // alert("Tanvir Rifat")

// // var person = {
// //     firstName: "Tanvir",
// //     lastName: "Rifat",
// //     age: 34,
// //     height: 'erwa'
// // }
// // document.write("<br>" + person.firstName)
// // document.write("<br>" + person.lastName)
// // document.write("<br>" + person.age)


// // using jQuery
// // $(function() {
// //     eikhane amra all jquery likhe thaki!
// //     but eikhane shudu document gulo show kore!
// //     image gula show kore na!

// //     Tai amra nicher window.on use korbo


// // })

// $(window).on("load", function() {

//     alert("Window mood used bucause its generate all graphics")
//     $('h1').slideUp(1000).slideDown(1000)
//     $('#main').css({


//         color: 'red',
//         fontSize: 25


//     })
//     $('h1').click(function() {

//         $('.content').css({


//             color: 'blue',
//             fontSize: 30


//         })


//     })


// })
// preloader section
$(window).on('load', function() {
    // fadeout use kora hoy hide korar jonne

    $('#status').fadeOut()
    $('#preloader').delay(350).fadeOut();


})

// team-section

$(function() {

    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    })


})

$(function() {

    $("#progress-elements").waypoint(function() {

        $(".progress-bar").each(function() {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});


// responsive-tabs

$(function() {

    $("#services-tabs").responsiveTabs({


        animation: 'slide'

    })


})