// Main website scripts

// Navigation scripts
// Navigation components
var navWrap = document.querySelector(".ap-c-nav-container");
var navGroup = document.querySelector(".ap-c-nav-group");
var navMain = document.querySelector(".ap-c-nav-main");
var navMobile = document.querySelector(".ap-c-nav-mobile");
var btnNavOpen = document.querySelector(".ap-c-nav-toggle--open");
var btnNavClose = document.querySelector(".ap-c-nav-toggle--close");
var btnTop = document.querySelector(".ap-c-nav-top");

// Navigation bar scrolling animation
// Show page-specific navigation bar when scrolling down
// Show main website navigation bar when scrolling up
// Show "Back to Top" button when scrolling up
// Reference: https://codepen.io/lehollandaisvolant/pen/ryrrGx
// Initial state
var scrollPos = 0;
// Adding scroll event
window.addEventListener("scroll", function(){
	// Detects new state and compares it with the new one
	if ((document.body.getBoundingClientRect()).top > scrollPos)
		navGroup.classList.remove("ap-is-scrolled"),
		btnTop.classList.remove("ap-is-hidden");
	else
		navGroup.classList.add("ap-is-scrolled"),
		btnTop.classList.add("ap-is-hidden");
		// Saves the new position for iteration
	scrollPos = (document.body.getBoundingClientRect()).top;
});

// Change navigation bar styles when page is scrolled down
// Make "Back to Top" button availble when page is scrolled down
window.addEventListener("scroll", function(){
	if (window.pageYOffset > 512)
		navWrap.classList.add("ap-is-scrolled"),
		navMain.classList.add("ap-is-scrolled"),
		btnTop.classList.add("ap-is-active");
	else
		navWrap.classList.remove("ap-is-scrolled"),
		navMain.classList.remove("ap-is-scrolled"),
		btnTop.classList.remove("ap-is-active");
});

// Open mobile navigation overlay when tapping toggle element
btnNavOpen.addEventListener("click", function(){
	navMobile.classList.add("ap-is-active");
});

// Close mobile navigation overlay when tapping toggle element
btnNavClose.addEventListener("click", function(){
	navMobile.classList.remove("ap-is-active");
});


// Gallery scripts
// CDN scripts are called in "_js-plugins.pug"

// Colcade
// https://github.com/desandro/colcade

// Initialize Colcade
// element as first argument
var grid = document.querySelector(".ap-c-mdl-gallery");
var colc = new Colcade( grid, {
	columns: ".ap-c-mdl-gallery__column",
	items: ".ap-c-crd-artwork"
});

// LightGallery
// https://github.com/sachinchoolur/lightgallery.js/

// Options reference
// https://sachinchoolur.github.io/lightgallery.js/docs/api.html

// Call the plugin
// lightGallery(document.getElementById("js-lightgallery"));

// lightGallery(document.querySelector(".ap-c-mdl-gallery__column"));

lightGallery(grid, {
	selector: ".ap-c-crd-artwork",
	subHtmlSelectorRelative: true,
	preload: 2,
	mode: "lg-fade",
	download: false,
	googlePlus: false
});