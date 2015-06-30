/* =============================================================== */
/* Custom Script for HomePage
/* =============================================================== */

jQuery(document).ready(function() {
								
	/*jCarousel Recent Project*/							
	jQuery('.carousel-4columns').jcarousel({
        buttonNextHTML: '<div class="effect-loaded"><i class="icon-angle-right"></i></div>',
		buttonPrevHTML: '<div class="effect-loaded"><i class="icon-angle-left"></i></div>'
    });
	
	/*Enable Swipe on Recent Project*/	
	jQuery('.carousel-4columns').touchwipe({
	  wipeLeft: function() {
		jQuery('.carousel-4columns').jcarousel('next');
	  },
	  wipeRight: function() {
		jQuery('.carousel-4columns').jcarousel('prev');
	  },
	  min_move_x: 20,
	  min_move_y: 20,
	  preventDefaultEvents: false
	});
	
	/*jCarousel Slider in Tabs*/	
	jQuery('#in-tabs-slider').jcarousel({
		scroll:1,
        buttonNextHTML: '<div><i class="icon-angle-right"></i></div>',
		buttonPrevHTML: '<div><i class="icon-angle-left"></i></div>'
    });
	
	/*Enable Swipe on Slider in Tabs*/	
	jQuery('#in-tabs-slider').touchwipe({
	  wipeLeft: function() {
		jQuery('#in-tabs-slider').jcarousel('next');
	  },
	  wipeRight: function() {
		jQuery('#in-tabs-slider').jcarousel('prev');
	  },
	  min_move_x: 20,
	  min_move_y: 20,
	  preventDefaultEvents: false
	});
	
	/*Config Revolution Slider*/	 
	var tpj=jQuery;
	tpj.noConflict();

	tpj(document).ready(function() {

	if (tpj.fn.cssOriginal!=undefined)
		tpj.fn.css = tpj.fn.cssOriginal;

		tpj('.fullwidthbanner').revolution(
			{
				delay:9000,
				startwidth:1170,
				startheight:400,
				

				hideThumbs:200,

				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:5,

				navigationType:"none",					//bullet, thumb, none, both		(No Thumbs In FullWidth Version !)
				navigationArrows:"verticalcentered",		//nexttobullets, verticalcentered, none
				navigationStyle:"round",

				touchenabled:"on",						// Enable Swipe Function : on/off
				onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

				stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
				stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

				shadow:0,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
				fullWidth:"on"							// Turns On or Off the Fullwidth Image Centering in FullWidth Modus
			});
		});

});
