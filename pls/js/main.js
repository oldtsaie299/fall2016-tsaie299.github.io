var counter = 1;

$(document).ready(function () {
    $("#myCircle").click(function () {
        console.log("The current counter is " + counter);

        //Updating CSS values
        var newHeight = $(this).height() + counter;
        var newWidth = $(this).width() + counter;
        var newOpacity = Number($(this).css("opacity")) + (counter / 100);

        $(this).css("height", newHeight + 'px');
        $(this).css("width", newWidth + 'px');
        $(this).css("opacity", newOpacity.toString());

        //Incrementing counter;
        ++counter;
    });
});