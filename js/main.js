$('html').removeClass('no-js');

$(window).on('scroll', function() {
  $('section').each(function() {
    if ($(window).scrollTop() > $(this).offset().top+350) { // 350 is our header/intro offset
      $('nav a').removeClass('active');
      $('nav a[href="#'+ $(this).attr('id') +'"]').addClass('active');
    }
  });
});

$('form').on('submit', function (event) {
  event.preventDefault();
  $(this).find('input').attr('disabled', 'disabled');
  $(this).find('select').attr('disabled', 'disabled');
  $(this).find('textarea').attr('disabled', 'disabled');
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    alert('Thanks for signing up!');
  };
  xhr.open($(this).attr('method'), $(this).attr('action'), true);
  var formdata = new FormData($(this).dom[0]);
  xhr.send(formdata);
  return false;
});
