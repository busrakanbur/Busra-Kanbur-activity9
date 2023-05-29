$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		// fade out the caption and image
		$("#caption, #image").fadeOut(1000, function() {
			var imageURL = $(this).attr("href");
			
			// update the image source
			$("#image").attr("src", imageURL);
					
			var caption = $(this).attr("title");
			
			// update the caption text
			$("#caption").text(caption);
			
			// fade in the caption and image
			$("#caption, #image").fadeIn(1000);
		});
		
		// cancel the default action of the link
		evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready
