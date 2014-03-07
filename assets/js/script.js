;(function($, window, undefined) {
	var timeArr = $('time');

	timeArr.each(function(index, item) {
		$item = $(item);
		switch( $item.data("tag").toLowerCase() ) {
			case "makenewsmail":
				$item.css('background', '#57c6da');
				break;
			case "julekalender":
				$item.css('background', '#c20213');
				break;
			case "påskenøtter":
				$item.css('background', '#ffdc00');
				break;
			case "makemobile":
				$item.css('background', '#67a639');
				break;
			default:
				$item.css('background', '#000000');
		}
	});
})(jQuery, window, undefined);
	