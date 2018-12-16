//Include Mobile Nav
$('.hamburger').click(function() {
    if ($('.page-container').hasClass('active')) {
        $('.page-container').removeClass('active');
        $('.page-container').addClass('hide-mobile');
        $('.hamburger').html('&#9776;');
        $('.hamburger').removeClass('cross');
        
    } else {
        $('.page-container').addClass('active');
        $('.page-container').removeClass('hide-mobile');
        $('.hamburger').html('&#735;');
        $('.hamburger').addClass('cross');
    }    
});

$('.mobile-nav a').click(function(){
	$('.page-container').removeClass('active');
    $('.page-container').addClass('hide-mobile');
    $('.hamburger').html('&#9776;');
    $('.hamburger').removeClass('cross');
});

