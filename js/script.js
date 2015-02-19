$(document).ready(function() {  //I'd comment this better but it's late, I'm a newb, and I gotta sleep before class
	makeGrid();
	trace();
	$('#clear').click(function() {
		clearGrid();
		trace();
	});
	$('#redraw').click(function() {
		removeGrid();
		makeGrid();
		trace();
	});
	$('#rcg').click(function() {
		colorTrace();
	});
	$('#opacity').click(function() {
		alert('Work in progress. Please select another option.');
	});
	$('#pic').click(function() {
		clearGrid();
		clearGrid();
		picReveal();
	});
});

var classTrace = false;

var styleTrace = false;

function makeGrid() {
	styleTrace = false;
	classTrace = true;
	var gridLength = prompt("What would you like the side dimension of the grid to be? Please choose a number from 1 to 100.");
	if (0 < gridLength && gridLength < 101) {
		var pixelWidth = (958) / gridLength;
		var pixelHeight = (958) / gridLength;
		for (var i = 1; i <= gridLength; i++) {
			$('table').append('<tr class="pixelrow"></tr>');		
		};
    	for (var j = 1; j <= gridLength; j++) {
				$('.pixelrow').append('<td class="pixel"></td>');
		};
		$('.pixelrow').height(pixelHeight + "px");
		$('.pixel').height(pixelHeight + "px");
		$('.pixel').width(pixelWidth + "px");
	} else {
		alert("That's not a proper value! Please try again.");
		makeGrid()
	};
};

function trace() {
	styleTrace = false;
	if (classTrace) {
		$('.pixel').mouseenter(function() {
		$(this).addClass('traced');
		});
	};
};

function clearGrid() {
	$('.husky').remove();
	$('.traced').removeClass('traced');
	if (styleTrace) {
		$('.pixel').css('background-color', '#478FB2');
		$('.pixel').css('opacity', '1');
	};
};

function removeGrid() {
	$('table').empty();
};

function colorTrace() {
	styleTrace = true;
	$('.pixel').mouseenter(function() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		$(this).css('background-color','rgb(' + r + ',' + g + ',' + b + ')');
	});
};

function greyTrace() {
	classTrace = false;
};

function picReveal() {
	styleTrace = true;
	$('#container').prepend('<img class="husky" src="husky.jpg" style="width: 960px; height: 960px; position: absolute; z-index: 1;" />');
	$('.pixel').mouseenter(function() {
		$(this).fadeTo('slow', 0);
	});
};