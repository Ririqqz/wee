
$('#HeaderBtnBars').click(function () {
    $('#HeaderBody').fadeIn();
    // $('body').css('overflow', 'hidden');
    $('body').addClass('we-no-scroll');
});

$('#HeaderBtnTimes').click(function () {
    $('#HeaderBody').fadeOut();
    // $('body').css('overflow', 'visible');
    $('body').removeClass();
})