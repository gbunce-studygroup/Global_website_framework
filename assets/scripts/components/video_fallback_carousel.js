// RUN THE BACKGROUND VIDEO FALLBACK CAROUSEL
var el = $('.fallback_carousel span'),
	n = el.length,
	c = 0;
el.eq(c).show();
(function loop() {
	el.delay(5000).fadeOut(800).eq(++c%n).fadeIn(800, loop);
}());