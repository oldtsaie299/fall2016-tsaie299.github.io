$("body").css("background-color","lightcoral");

for (var dots = 0; dots < 100; dots++) {
    $(".wrapper").append("<div class='circle'></div>");
}

var counter = 1;

$(".square").each(function() {
    console.log(counter);
    $(this).html(counter);
    $(this).css("height",(20+counter));
    $(this).css("width",(20+counter));
    $(this).css("line-height",20+counter+"px");
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", newTop);
    $(this).css("left", newLeft);
    
});

$(window).resize(function() {
    $(".square").each(function() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        var newTop = Math.floor(Math.random()*winHeight);
        var newLeft = Math.floor(Math.random()*winWidth);
        $(this).css("top", newTop);
        $(this).css("left", newLeft);
    });
});

$(window).scroll(function() {
    console.log($(window).scrollTop());
    $(".story").css("opacity",$(window).scrollTop()/5000)
});