var counter = 1;
var counters = 1;
var counterss = 1;
var counter4 = 1;
var counter5 = 1;
var counter6 = 1;
var counter7 = 1;
var counter8 = 1;

$(document).ready(function () {
    
    var audio = $("audio")[0];
    audio.play();

    $("#myCircle").click(function () {
        console.log("The current counter is " + counter);

        var newHeight = $(this).height() + counter;
        var newWidth = $(this).width() + counter;
        var newOpacity = Number($(this).css("opacity")) + (counter / 100);

        $(this).css("height", newHeight + 'px');
        $(this).css("width", newWidth + 'px');
        $(this).css("opacity", newOpacity.toString());

        //Incrementing counter;
        ++counter;

    }).mouseout(function () {
        $(this).css("background", "palevioletred");
    }).mouseover(function () {
        $(this).css("background", "lemonchiffon");
    });

    $("#myCircle2").click(function () {
        console.log("The current counter is" + counters);

        var newHeight = $(this).height() + counters;
        var newWidth = $(this).width() + counters;
        var newOpacity = Number($(this).css("opacity")) + (counters / 100);

        $(this).css("height", newHeight + 'px');
        $(this).css("width", newWidth + 'px');
        $(this).css("opacity", newOpacity.toString());

        //Incrementing counter;
        ++counters;

    }).mouseout(function () {
        $(this).css("background", "palevioletred");
    }).mouseover(function () {
        $(this).css("background", "lemonchiffon");
    });


    $("#myCircle3").click(function () {
        console.log("The current counter is" + counterss);

        var newHeight = $(this).height() + counterss;
        var newWidth = $(this).width() + counterss;
        var newOpacity = Number($(this).css("opacity")) + (counterss / 100);

        $(this).css("height", newHeight + 'px');
        $(this).css("width", newWidth + 'px');
        $(this).css("opacity", newOpacity.toString());

        //Incrementing counter;
        ++counterss;

    }).mouseout(function () {
        $(this).css("background", "palevioletred");
    }).mouseover(function () {
        $(this).css("background", "lemonchiffon");
    });

    $("#myCircle4").click(function () {
        console.log("The current counter is " + counter4);

        var newHeight = $(this).height() + counter4;
        var newWidth = $(this).width() + counter4;
        var newOpacity = Number($(this).css("opacity")) + (counter4 / 100);

        $(this).css("height", newHeight + 'px');
        $(this).css("width", newWidth + 'px');
        $(this).css("opacity", newOpacity.toString());

        //Incrementing counter;
        ++counter4;

    }).mouseout(function () {
        $(this).css("background", "palevioletred");
    }).mouseover(function () {
        $(this).css("background", "lemonchiffon");
    });

    $("#myCircle5").click(function () {
        console.log("The current counter is " + counter5);

        var newHeight = $(this).height() + counter5;
        var newWidth = $(this).width() + counter5;
        var newOpacity = Number($(this).css("opacity")) + (counter5 / 100);

        $(this).css("height", newHeight + 'px');
        $(this).css("width", newWidth + 'px');
        $(this).css("opacity", newOpacity.toString());

        //Incrementing counter;
        ++counter5;

    }).mouseout(function () {
        $(this).css("background", "palevioletred");
    }).mouseover(function () {
        $(this).css("background", "lemonchiffon");
    });

    $("#myCircle6").click(function () {
        console.log("The current counter is " + counter6);

        var newHeight = $(this).height() + counter6;
        var newWidth = $(this).width() + counter6;
        var newOpacity = Number($(this).css("opacity")) + (counter6 / 100);

        $(this).css("height", newHeight + 'px');
        $(this).css("width", newWidth + 'px');
        $(this).css("opacity", newOpacity.toString());

        //Incrementing counter;
        ++counter6;

    }).mouseout(function () {
        $(this).css("background", "palevioletred");
    }).mouseover(function () {
        $(this).css("background", "lemonchiffon");
    });

    $("#myCircle7").click(function () {
        console.log("The current counter is " + counter7);

        var newHeight = $(this).height() + counter7;
        var newWidth = $(this).width() + counter7;
        var newOpacity = Number($(this).css("opacity")) + (counter7 / 100);

        $(this).css("height", newHeight + 'px');
        $(this).css("width", newWidth + 'px');
        $(this).css("opacity", newOpacity.toString());

        //Incrementing counter;
        ++counter7;

    }).mouseout(function () {
        $(this).css("background", "palevioletred");
    }).mouseover(function () {
        $(this).css("background", "lemonchiffon");
    });

    $("#myCircle8").click(function () {
        console.log("The current counter is " + counter8);
        var newHeight = $(this).height() + counter8;
        var newWidth = $(this).width() + counter8;
        var newOpacity = Number($(this).css("opacity")) + (counter8 / 100);

        $(this).css("height", newHeight + 'px');
        $(this).css("width", newWidth + 'px');
        $(this).css("opacity", newOpacity.toString());

        //Incrementing counter;
        ++counter8;

    }).mouseout(function () {
        $(this).css("background", "palevioletred");
    }).mouseover(function () {
        $(this).css("background", "lemonchiffon");
    });

});