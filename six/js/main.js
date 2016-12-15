$("body").css("background-color","white");

for (var dots = 0; dots < 1000; dots++) {
    $(".wrapper").append("<div class='container'></div>");
}

var counter = 1;


$(".container").click(function() {
    console.log(counter);
     counter++;
     $(this).html(counter);
     $(this).css("opacity",(counter/30));
     if (counter == 32) { 
        counter = 1;
     }
     $(this).css("transform","translate(-70%, 50%) rotate("+ (counter/45)*counter + "deg)");

});