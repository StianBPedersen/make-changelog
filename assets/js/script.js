;(function($, window, undefined) {
	var timeArr = $('time');

	timeArr.each(function(index, item) {
		$item = $(item);
		switch( $item.data("tag").toLowerCase() ) {
			case "makenewsmail":
				$item.addClass('makenewsmail');
				break;
			case "julekalender":
				$item.addClass('julekalender');
				break;
			case "påskenøtter":
				$item.addClass('paskenotter');
				break;
			case "makemobile":
				$item.addClass('makemobile');
				break;
			default:
				$item.css('background', '#ccc');
		}
	});
})(jQuery, window, undefined);
	