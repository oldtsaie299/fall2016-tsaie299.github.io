$(document).ready(function () {
    $('#circle').click(function () {
      
        console.log('win');

    });

function changeCircleSize(randomInt, circle) {
        circle.css('height', randomInt + 'px');
        circle.css('width', randomInt + 'px');
    }

function generateRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

function moveCircle(randomInt, circle) {
        var maxLeft = $(window).width() - randomInt;
        var maxTop = $(window).height() - randomInt;
        var leftPos = Math.floor(Math.random() * (maxLeft));
        var topPos = Math.floor(Math.random() * (maxTop));

        circle.css('margin-top', topPos + 'px');
        circle.css('margin-left', leftPos + 'px');
    }

setInterval(function () {
        var circle = $('#circle');
        var min = 50;
        var max = 150;
        var randomInt = generateRandomInt(min, max);

        changeCircleSize(randomInt, circle);
        moveCircle(randomInt, circle);
        
    }, 1500);
    
});

var cats = ["glasses.jpg","http://dreamicus.com/data/cat/cat-08.jpg","https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4D61EB46-D368-46F3-93A0C1A452DE7259/thul-95c09c90-891c-5107-82d1-794cbb635820.jpg?response-content-disposition=inline"];

var clicked = false;

$("div").click(function() {
  if (clicked) {
    window.location.href = 'http://creativecomputing.ml';
    
  } else {
  var myimg = cats[Math.floor(Math.random()*cats.length)];
  console.log(myimg);
  $("div").css("background-image","url(" + myimg + ")");
  clicked = true;
  }
  
 });