// THIS MAKES THE SEARCH BAR TOGGLE ON CLICK
$('#searchToggle').click(function () {
	$(this).toggleClass('close_image'); // ADDS CLASS '.close_image' TO '.search_toggle' SO THE BACKGROUND IMAGE CAN BE CHANGED
	$('#searchwrapper').toggleClass('appear'); // ADDS '.APPEAR' TO '.SITESEARCH'
	$('.searchInput').focus(); // FOCUS THE CURSOR IN THE SEARCH INPUT
});

// ADD THIRD LEVEL DROPDOWN TO MAIN NAVIGATION
$(".dropdown-toggle-2").click(function(e){
    $(this).parent(".dropdown-menu li").toggleClass("open"); // TOGGLE CLASS 'open' ON RELATED LIST ITEM
    $(this).parent(".dropdown-menu li").siblings().removeClass("open"); // REMOVE CLASS 'open' FROM ALL SIBLING LIST ITEMS
	return false;
});

// ADDS CLASS 'show' TO THE 'second-level' UL SO THE 2ND LEVEL NAVIGATION SHOWS IF THE PARENT IS ACTIVE
$(".sidebar-nav li a.active").siblings("ul").addClass("show");
// ADDS CLASS 'show' TO THE 'second-level' UL SO THE 2ND LEVEL NAVIGATION SHOWS IF A CHILD IS ACTIVE
$(".second-level li a.active").closest("ul").addClass("show");
// ADDS CLASS 'show' TO THE 'third-level' UL SO THE 3RD LEVEL NAVIGATION SHOWS IF A CHILD IS ACTIVE
$(".third-level li a.active").closest("ul").addClass("show");
// ADDS CLASS 'show' TO THE 'second-level' UL SO THE 2ND & 3RD LEVEL NAVIGATION SHOWS IF 3RD LEVEL CHILD IS ACTIVE
if ($('.third-level li a').hasClass('active')){
	$('.second-level').addClass('show');
}

// MAKES THE YOUTUBE VIDEO IN THE LIGHTBOX STOP PLAYING WHEN THE LIGHTBOX IS CLOSED
$(".modal").on('hidden.bs.modal', function (e) {
	$(".modal iframe").attr("src", $(".modal iframe").attr("src"));
});