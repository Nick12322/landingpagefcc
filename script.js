$("#featureButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".feature").offset().top},
        'slow');
});