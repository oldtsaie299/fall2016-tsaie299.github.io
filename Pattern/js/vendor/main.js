console.log("Hello World");

$("body").css("background-color", "blue");

var hasClicked = false;

$("body").click(function() {
        console.log(hasClicked);
        $("body").css("background-color", "red");
        hasClicked = true;
        
});

$(".go1").each(function() { 
        console.log(counter);
        console.log("found a div with class go...");
        $(".go").css("border-radius", counter/2 + "%");
        counter++;
        $("this").html(counter);
});

$(".go2").click(function() { 
        console.log("you clicked it...");
        $(this).css("background-color", "lime");    
        $(this).html("Hello");
});

for(var i = 0; i < 100; i++) {
   $("body").append("<div class='go'></div>");
   
}