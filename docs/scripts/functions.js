$("#showcaseButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#showcaseContainer").offset().top
    }, 200);
});

$("#educationButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#education").offset().top
    }, 200);
});

$("#historyButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#history").offset().top
    }, 200);
});

$("#skillsButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#skills").offset().top
    }, 200);
});

$("#infoButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#info").offset().top
    }, 200);
});
