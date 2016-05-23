var header = $('header');
var range = 200;

$(window).on('scroll', function () {
  
    var scrollTop = $(this).scrollTop();
    var offset = header.offset().top;
    var height = header.outerHeight();
    offset = offset + height / 2;
    var calc = 1 - (scrollTop - offset + range) / range;
  
    header.css({ 'opacity': calc });
  
    if ( calc > '1' ) {
      header.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      header.css({ 'opacity': 0 });
    }
  
});

$("#HomeButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
});

$("#AboutButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".wrapper2").offset().top},
        'slow');
});
$("#SkillsButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#skills").offset().top},
        'slow');
});
$("#PortfolioButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
});
$("#ContactButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});