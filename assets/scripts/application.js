// This makes the search bar toggle on click
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