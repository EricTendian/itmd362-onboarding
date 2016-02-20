$('html').removeClass('no-js');

$(window).on('scroll', function() {
  $('section').each(function() {
    if ($(window).scrollTop() > $(this).offset().top+350) { // 350 is our header/intro offset
      $('nav a').removeClass('active');
      $('nav a[href="#'+ $(this).attr('id') +'"]').addClass('active');
    }
  });
});
