// Website scripts

// Navigation scripts

// Navigation components
    var navMain = document.querySelector(".ap-c-nav-main");
 var navSection = document.querySelector(".ap-c-nav-section");
  var navSeries = document.querySelector(".ap-c-nav-series");
  var navMobile = document.querySelector(".ap-c-nav-mobile");
 var btnNavOpen = document.querySelector(".ap-c-nav-toggle--open");
var btnNavClose = document.querySelector(".ap-c-nav-toggle--close");
     var btnTop = document.querySelector(".ap-c-nav-top");

// Navigation bar scrolling upward/downward events
// Show submenu navigation bar when scrolling down
// Show main website navigation bar when scrolling up
// Show "Back to Top" button when scrolling up
// Reference: https://codepen.io/lehollandaisvolant/pen/ryrrGx

// Initial state
var scrollPos = 0;
// Add scroll events
window.addEventListener("scroll", function(){
	// Detects new state and compares it with the new one
	if ((document.body.getBoundingClientRect()).top > scrollPos)
		navMain.classList.remove("ap-is-hidden"),
		// navSection.classList.remove("ap-is-visible"),
		// navSeries.classList.remove("ap-is-visible"),
		btnNavOpen.classList.remove("ap-is-hidden"),
		btnTop.classList.remove("ap-is-hidden");
	else
		navMain.classList.add("ap-is-hidden"),
		// navSection.classList.add("ap-is-visible"),
		// navSeries.classList.add("ap-is-visible"),
		btnNavOpen.classList.add("ap-is-hidden"),
		btnTop.classList.add("ap-is-hidden");
	// Saves the new position for iteration
	scrollPos = (document.body.getBoundingClientRect()).top;
});

// Change main navigation bar styles when page is scrolled down
window.addEventListener("scroll", function(){
	if (window.pageYOffset > 96)
		navMain.classList.add("ap-is-undocked");
	else
		navMain.classList.remove("ap-is-undocked");
});

// Deactivate reveal/hide styles for submenus when nearing page top
// window.addEventListener("scroll", function(){
// 	if (window.pageYOffset < 96)
// 		navSection.classList.add("ap-is-inactive");
// 	else
// 		navSection.classList.remove("ap-is-inactive");
// });

// Make "Back to Top" button unavailable until page is scrolled down far enough
window.addEventListener("scroll", function(){
	if (window.pageYOffset < 384)
		btnTop.classList.add("ap-is-inactive");
	else
		btnTop.classList.remove("ap-is-inactive");
});

// Open mobile navigation overlay when tapping toggle element
btnNavOpen.addEventListener("click", function(){
	navMobile.classList.add("ap-is-visible");
});

// Close mobile navigation overlay when tapping toggle element
btnNavClose.addEventListener("click", function(){
	navMobile.classList.remove("ap-is-visible");
});


// Gallery plugin scripts

// Colcade
// https://github.com/desandro/colcade

// Column container
var grid = document.querySelector(".ap-c-mdl-gallery");
// Initialize Colcade
var colc = new Colcade( grid, {
	columns: ".ap-c-mdl-gallery__column",
	items: ".ap-c-crd-artwork"
});

// LightGallery
// https://github.com/sachinchoolur/lightgallery.js/
// https://sachinchoolur.github.io/lightgallery.js/docs/api.html
// Note: LightGallery CDN hosted scripts are called in "_js-plugins.pug"

// Lightbox content container
var gallery = document.querySelector(".ap-c-scn--gallery");
// Initialize LightGallery
lightGallery(gallery, {
	selector: ".ap-c-crd-artwork",
	subHtmlSelectorRelative: true,
	preload: 2,
	mode: "lg-fade",
	download: false,
	googlePlus: false,
	share: false
});