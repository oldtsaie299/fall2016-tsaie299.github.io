var pixels = 0;
var max = 10;
var triangles = ["triangle", "triangle2", "triangle3", "triangle4"];
var triangleCounter = 0;

$(document).ready(function () {
    var audio = $("audio")[0];
    audio.play();
    
    $(window).mousemove(function (event) {
        var posX = event.clientX;
        var posY = event.clientY;

        ++pixels;

        if (pixels > max && triangleCounter !== triangles.length) {
            pixels = 0;

            var currentTriangle = triangles[triangleCounter];
            $('body').append('<div class="' + currentTriangle + '" style="left:' + posX + 'px;top:' + posY + 'px;"></div>');
            ++triangleCounter;

        } else if (triangleCounter === triangles.length) {
            pixels = 0;
            triangleCounter = 0;
        }
    });

}).on('mouseover', '.triangle', function () {
    $('.triangle').css("border-bottom", "50px solid white");
}).on('mouseout', '.triangle', function () {
    $('.triangle').css("border-bottom", "50px solid palevioletred");
}).on('mouseover', '.triangle2', function () {
    $('.triangle2').css("border-bottom", "50px solid black");
}).on('mouseout', '.triangle2', function () {
    $('.triangle2').css("border-bottom", "50px solid cyan");
}).on('mouseover', '.triangle3', function () {
    $('.triangle3').css("border-bottom", "50px solid white");
}).on('mouseout', '.triangle3', function () {
    $('.triangle3').css("border-bottom", "50px solid red");
}).on('mouseover', '.triangle4', function () {
    $('.triangle4').css("border-bottom", "50px solid black");
}).on('mouseout', '.triangle4', function () {
    $('.triangle4').css("border-bottom", "50px solid yellow");
});