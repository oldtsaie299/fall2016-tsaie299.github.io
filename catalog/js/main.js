var baseFontSize = 20;
var maxFontSize = 45;

$(document).ready(function () {

    $('#album1').mouseover(function () {
        $(this).css('font-size', maxFontSize + 'px');
        $(this).text("1. SWITCH");

    }).mouseout(function () {
        $(this).css('font-size', baseFontSize + 'px');
        $(this).text("Track 1");
    });

    $('#album2').mouseover(function () {
        $(this).css('font-size', maxFontSize + 'px');
        $(this).text("2. KNOW YOURSELF");

    }).mouseout(function () {
        $(this).css('font-size', baseFontSize + 'px');
        $(this).text("Track 2");
    });

    $('#album3').mouseover(function () {
        $(this).css('font-size', maxFontSize + 'px');
        $(this).text("3. BUTTERED POPCORN");

    }).mouseout(function () {
        $(this).css('font-size', baseFontSize + 'px');
        $(this).text("Track 3");
    });

    $('#album4').mouseover(function () {
        $(this).css('font-size', maxFontSize + 'px');
        $(this).text("4. THAT'S SO RAVEN");

    }).mouseout(function () {
        $(this).css('font-size', baseFontSize + 'px');
        $(this).text("Track 4");
    });

    $('#album5').mouseover(function () {
        $(this).css('font-size', maxFontSize + 'px');
        $(this).text("5. ONE DANCE");

    }).mouseout(function () {
        $(this).css('font-size', baseFontSize + 'px');
        $(this).text("Track 5");
    });
    
      $('#album6').mouseover(function () {
        $(this).css('font-size', maxFontSize + 'px');
        $(this).text("6. JENNY FROM THE BLOCK");

    }).mouseout(function () {
        $(this).css('font-size', baseFontSize + 'px');
        $(this).text("Track 6");
    });


});