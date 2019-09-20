$(document).ready(function()
{
  "use strict";

  var headerMenu = $('.headerMenu');

  function setHeader() {
    if ($(window).scrollTop() > 91) {
      headerMenu.addClass('scrolled');
      headerMenuContent.addClass('scrolled');
    }
    else {
      headerMenu.removeClass('scrolled');
      headerMenuContent.removeClass('scrolled');
    }
  };


  $(document).on('scroll', function()
  {
    setHeader();
  });

});
