var navMain=document.querySelector(".ap-c-nav-main"),navSection=document.querySelector(".ap-c-nav-section"),navSeries=document.querySelector(".ap-c-nav-series"),navMobile=document.querySelector(".ap-c-nav-mobile"),btnNavOpen=document.querySelector(".ap-c-nav-toggle--open"),btnNavClose=document.querySelector(".ap-c-nav-toggle--close"),btnTop=document.querySelector(".ap-c-nav-top"),scrollPos=0;window.addEventListener("scroll",function(){document.body.getBoundingClientRect().top>scrollPos?(navMain.classList.remove("ap-is-hidden"),btnNavOpen.classList.remove("ap-is-hidden"),btnTop.classList.remove("ap-is-hidden")):(navMain.classList.add("ap-is-hidden"),btnNavOpen.classList.add("ap-is-hidden"),btnTop.classList.add("ap-is-hidden")),scrollPos=document.body.getBoundingClientRect().top}),window.addEventListener("scroll",function(){window.pageYOffset>96?navMain.classList.add("ap-is-undocked"):navMain.classList.remove("ap-is-undocked")}),window.addEventListener("scroll",function(){window.pageYOffset<384?btnTop.classList.add("ap-is-inactive"):btnTop.classList.remove("ap-is-inactive")}),btnNavOpen.addEventListener("click",function(){navMobile.classList.add("ap-is-visible")}),btnNavClose.addEventListener("click",function(){navMobile.classList.remove("ap-is-visible")});var grid=document.querySelector(".ap-c-mdl-gallery"),colc=new Colcade(grid,{columns:".ap-c-mdl-gallery__column",items:".ap-c-crd-artwork"}),gallery=document.querySelector(".ap-c-scn--gallery");lightGallery(gallery,{selector:".ap-c-crd-artwork",subHtmlSelectorRelative:!0,preload:2,mode:"lg-fade",download:!1,googlePlus:!1,share:!1});