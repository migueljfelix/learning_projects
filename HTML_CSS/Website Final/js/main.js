window.addEventListener('scroll', function() {
    
    if (window.pageYOffset >= 200) {
        document.querySelector('nav').classList.add('nav-fixed');
    } else {
        document.querySelector('nav').classList.remove('nav-fixed');
    }
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
