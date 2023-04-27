// JavaScript Document
//Sampark infoways//
//coded by: Sampark infoways//


/*-----active wowjs----*/
new WOW().init();


/////datepicker///
$('#datetimepicker').datetimepicker({
    format: 'yyyy-mm-dd hh:ii'
});


/////////Draggable DIvision/////////

$('.drag-wrap').resizable({
    handles: 'w',
	maxWidth: 540,
	minWidth: 200
});


/////////Gallery////////////

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});




$(document).ready(function(){
var owl = $("#banner_slider");
	owl.owlCarousel ({
									  
									  autoPlay : 4500,
									  slideSpeed : 3500,
									  items :1,
									  responsive: true,
									  stopOnHover :true,
									  pagination:true,
									  responsive:true,
									  autoHeight:false,
									  itemsDesktop : [1920, 1],
									  itemsDesktopSmall : [1280, 1],
									  itemsDesktopSmall : [992, 1],
									  itemsTablet : [768, 1],
	                                  itemsMobile : [400, 1],
									  transitionStyle : "fade"
									 
									  });



$(".prev").click(function() {
		owl.trigger('owl.prev');
							  })
	
	$(".next").click(function() {
		owl.trigger('owl.next');
							  })



						   });


	  






/////////testimonial slider////////////////

$(document).ready(function() {
$(".testimonial").owlCarousel({
									  
									  autoPlay : 3500,
									  slideSpeed : 1500,
									  items :1,
									  responsive: true,
									  stopOnHover :true,
									  pagination:false,
									  responsive:true,
									  itemsDesktop : [1920, 1],
									  itemsDesktopSmall : [1280, 1],
									  itemsDesktopSmall : [992, 1],
									  itemsTablet : [768, 1],
	                                  itemsMobile : [400, 1]
									  });
						   });






//////////////Responsive menu///////////
if( $(window).width() < 768 ) {
$('li.dropdown').find('a.parent').each(function(){
		$(this).on('click', function(){
				$(this).siblings('.sub-menu').slideToggle();
			return false;
		});
	});
}



	   
						   
						   