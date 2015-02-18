$(document).ready(function() {
	var gridLength = prompt("What would you like the side dimension of the grid to be?");
	var pixelWidth = (899 - gridLength * 2) / gridLength;
	var pixelHeight = (900 - gridLength * 2) / gridLength;
	for (var i = 1; i <= gridLength * gridLength; i++) {
		$('#container').append('<div class="pixel"></div>')
	};
	$('.pixel').height(pixelHeight + "px");
	$('.pixel').width(pixelWidth + "px");
	$('.pixel').mouseenter(function() {
		$(this).addClass('traced');
	});
});