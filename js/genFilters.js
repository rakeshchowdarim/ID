function generateFilters(filterId) {

	$(".filtered").each(function(){

		var imgSrc = this.src.split(".");
		console.log(imgSrc);
		var newImgSrc = imgSrc[0]+"."+imgSrc[1]+"."+imgSrc[2]+"."+filterId+"."+imgSrc[4];
		$(this).attr("src", newImgSrc);
		$(this).attr("data-zoom-image", newImgSrc);
		$(".zoomMouse").elevateZoom({scrollZoom : true, zoomType	: "lens",constrainType:"width", constrainSize:1000,easing:true,easingType:"zoomdefault", containLensZoom: true, cursor: 'pointer'
		});
		$(".zoomMouse").animate({ top: '-=100px' }, 600, 'easeOutCubic');
					
					//easingDuration:100,lensFadeIn:1000,lensFadeOut:1000, zoomWindowFadeIn:1000,zoomWindowFadeOut:1000,zoomTintFadeIn:1000,zoomTintFadeOut:1000, 
					
	// body...

})
}

function hideShowFilteredImages(filterType){

//	var filterClick = document.getElementById(filterType);
	$(".fi").hide();
	$("."+filterType).show();



	// if ($(filterClick).is('hsv')){
	
 //    document.getElementById("hsv").style.visibility = "hidden";
 //    document.getElementById("hd").style.visibility = "visible";
 //    document.getElementById('frame').contentWindow.generateFilters("hd");

	// }else if($(filterClick).is('sobel')){

	// document.getElementById("sobel").style.visibility = "hidden";
 //    document.getElementById("hsv").style.visibility = "visible";
 //    document.getElementById('frame').contentWindow.generateFilters("hsv");

	// }else{
	// document.getElementById("hd").style.visibility = "hidden";
 //    document.getElementById("hsv").style.visibility = "visible";
 //    document.getElementById('frame').contentWindow.generateFilters("hsv");
	// }
}

