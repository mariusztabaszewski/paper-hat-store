// Initialize Smooth Scroll
// https://github.com/cferdinandi/smooth-scroll

var nav = document.querySelector('.main-nav');
var menu = document.querySelector('.menu');

var close_nav = function() {
	if (nav.classList.contains('nav-js')) {
		nav.classList.remove('nav-js');
		menu.classList.remove('on-js');
	}
};

smoothScroll.init({
	updateURL: false,
    callback: function () {
    	close_nav();
    } // Function to run after scrolling
});

// Menu click

var menu_click = function() {
	this.classList.toggle('on-js');
    nav.classList.toggle('nav-js');
};

menu.addEventListener("click", menu_click);

//
