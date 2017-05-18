$.fn.center = function () {
    this.css("position", "absolute");
    this.css("top", Math.max(0, (
            ($(window).height() - $(this).outerHeight()) / 2) +
            $(window).scrollTop()) + "px"
            );
    this.css("left", Math.max(0, (
            ($(window).width() - $(this).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px"
            );
    return this;
};

$("#overlay").show();
$("#overlay-content").show().center();

setTimeout(function () {
    $("#overlay").fadeOut();
}, 1900);


$(document).ready(function () {
    //FullPage setup with defult colors set in place.
    $('#fullpage').fullpage({
        sectionsColor: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'gray'],
        css3: true

    });
    $('#fullpage').SecretNav({
        navSelector: 'nav', // selector of the nav tag
        openSelector: '.open-menu', // selector of the menu's opener
        position: 'top'            // left | top
    });

    $('.color-random-24').click(function () {
        $('.jumble').jumble([255, 250, 196], [95, 156, 186], true, false, 100);
    });
    $('.color-random-23').click(function ()
    {

    });
    console.log('<------Cheat Sheet------>');
    console.log('| press the 5th button  |');
    console.log('| on the second row to  |');
    console.log('| go to About Us.html.  |');
    console.log('<------Cheat Sheet------>');
    console.log('| press the 6th button  |');
    console.log('| on the 4th row to     |');
    console.log('| test the jumble pugin.|');
    //Fit Text Setup that applies FitText to all header classes.
//    $(".header").fitText(1.6);
    //Planetarium Setup for planet earth
    $(".planet").planetarium({
        autospin: "2000ms", // You can define the speed of which your planet spin here. This option accepts the second or milliseconds in forms of "1s" and "1000ms" respectively. The default value is 1000ms.
        angle: "50deg", // You can define the degree in which your planet will be tilted. Make sure you end the value with deg. The default value is 20deg.
        glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)", // You can define the glow and shadow of your planet here. This option accepts normal box-shadow styles. The default value is as shown. The first part, "rgba(255, 255, 255, 0.34902) 0px 0px 50px", is the glow effect and the second part, "inset 33px 20px 50px rgba(0,0,0,0.5)", is the shadow.
        pattern: "img/texture-earth.jpg", // You can define your custom planet's pattern here. The option accepts image path. Equal size with the pattern-earth.jpg provided is recommended. The default value is "img/texture-earth.jpg".
        size: "200x200", // You can define the width and height of your planets here in a format of "(width)x(height)". The default value is 100x100.
        float: true, // You can toggle the floating animation here. Set it to false to disable it. The default value is true.
        space: "body", // You can define the container's selector to be used as the Space here. The default value is "body".
        ring: false, // You can toggle the ring of your planet here. To enable the ring, set this to true. The default value is false.
        ringColor: "#fff", // You can set the ring's color here. The option accepts HEX color code. The default value is "#fff".
        ringAngle: "20deg"                                   // You can define the angle of the ring here. Make sure you end the value with deg like this: "180deg". The default option is "20deg".
    });
    //Sweetalert example setup
    $('#sweetalert').click(function () {
        swal({
            title: "Sweet Alert Example",
            text: "This is an example of Sweet Alert, a plugin which creates sweet looking alerts!",
            type: "success",
            showCancelButton: true,
            confirmButtonText: "Sweet!",
            cancelButtonText: "Rad!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
                function (isConfirm) {
                    if (isConfirm) {
                        swal("Sweet!", "You chose Sweet, that's rad!", "success");
                    } else {
                        swal("Rad!", "You chose Rad, Sweet!", "success");
                    }
                });
    });
    //For loop that applies random colors to the circles.
    for (i = 0; i <= 36; i++) {
        $('.color-random-' + i).css('background-color', randomColor({
        }));
        ;
    }
    //for loop that applies random greens to the circles.
    $('.set-random').click(function () {
        for (i = 0; i <= 36; i++) {
            $('.color-random-' + i).css('background-color', randomColor({
            }));
            ;
        }
        ;
    });
    //for loop that applies random greens to the circles.
    $('.set-green').click(function () {
        for (i = 0; i <= 36; i++) {
            $('.color-random-' + i).css('background-color', randomColor({
                hue: 'green'
            }));
        }
        ;
    });
    //for loop that applies random purples to the circles.
    $('.set-purple').click(function () {
        for (i = 0; i <= 36; i++) {
            $('.color-random-' + i).css('background-color', randomColor({
                hue: 'purple'
            }));
        }
        ;
    });
    //for loop that applies random oranges to the circles.
    $('.set-orange').click(function () {
        for (i = 0; i <= 36; i++) {
            $('.color-random-' + i).css('background-color', randomColor({
                hue: 'orange'
//            luminosity: 'bright'
            }));

        }
        ;

    });
    $('.color-random-11').click(function () {
        window.location.href = 'about.html';
        return false;
    });

});

function initMap() {
    var work = {lat: -36.848406, lng: 174.762761};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: work
    });
    var marker = new google.maps.Marker({
        position: work,
        map: map
    });

}
;

