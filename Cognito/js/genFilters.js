function generateFilters(filterId) {

	$(".filtered").each(function(){

		var imgSrc = this.src.split(".");
		console.log(imgSrc);
		var newImgSrc = imgSrc[0]+"."+imgSrc[1]+"."+imgSrc[2]+"."+filterId+"."+imgSrc[4];
		$(this).attr("src", newImgSrc);
		$(this).attr("data-zoom-image", newImgSrc);
		$(".zoomMouse").elevateZoom({
			scrollZoom : true, 
			zoomType	: "lens",
			constrainType:"width", 
			constrainSize:1000,
			easing:true,
			easingType:"zoomdefault",
			containLensZoom: true,
			cursor: 'pointer'
		});
		$(".zoomMouse").animate({ top: '-=100px' }, 600, 'easeOutCubic');
	});
}

function hideShowFilteredImages(filterType){

//	var filterClick = document.getElementById(filterType);
	$(".fi").hide();
	$("."+filterType).show();

}