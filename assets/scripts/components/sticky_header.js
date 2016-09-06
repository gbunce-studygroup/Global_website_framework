// FIX HEADER TO THE TOP OF THE BROWSER WINDOW IF THE PAGE IS SCROLLED MORE THAN 70PX
$(window).scroll(function() {
if ($(this).scrollTop() > 70){ // CHANGE VALUE TO ADJUST POINT AT WHICH HEADER BECOMES FIXED
    $('header').addClass("affix");
  }
  else{
    $('header').removeClass("affix");
  }
});