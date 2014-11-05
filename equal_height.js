(function ($) {
    $.fn.equalHeight = function () {
        tallest = -1;
        this.each(function () {
        tallest = tallest > $(this).height() ? tallest : $(this).height();
        });
        this.each(function () {
            $(this).height(tallest);
        });
	};
})(jQuery);