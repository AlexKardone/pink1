(function() {

	var link = document.querySelector('.mob-header-top__menu');
	var menu = document.querySelector('.mob-menu');
	var close = document.querySelector('.mob-header-top__close');

	link.addEventListener("click", function(event) {
		event.preventDefault();
		menu.classList.add('mob-menu--js');
	});

	close.addEventListener("click", function(event) {
		event.preventDefault();
		menu.classList.remove('mob-menu--js');
	});

})();