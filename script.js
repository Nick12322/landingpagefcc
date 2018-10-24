$("#featureButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".feature").offset().top},
        'slow');
});

$("#howitworksbutton").click(function() {
    $('html,body').animate({
        scrollTop: $(".stepbox").offset().top},
        'slow');
});