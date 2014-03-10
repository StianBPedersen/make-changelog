;(function($, window, undefined) {
	var timeArr = $('time');

	timeArr.each(function(index, item) {
		$item = $(item);
		switch( $item.data("tag").toLowerCase() ) {
			case "makenewsmail":
				$item.addClass('makenewsmail');
				break;
			case "advent-calendar":
				$item.addClass('advent-calendar');
				break;
			case "easter-quiz":
				$item.addClass('easter-quiz');
				break;
			case "makemobile":
				$item.addClass('makemobile');
				break;
			default:
				$item.css('background', '#ccc');
		}
	});
})(jQuery, window, undefined);
	