<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta http-equiv="cache-control" content="max-age=0">
	<!-- <meta http-equiv="refresh" content="180;url=index.php" /> -->
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="-1">
<meta http-equiv="pragma" content="no-cache">
</head>
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.20.min.js"></script>
<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src='js/jquery-1.8.3.min.js'></script>
<script src='js/jquery.elevatezoom.js'></script>
<script src='js/awsGetS3Data.js'></script>
<script src="js/genFilters.js"></script>
<script src="js/veiwer.js"></script>
<script src="js/fullScreen.js"></script>
<script type="text/javascript">


window.onload=function () {
	// backButtonDisplay();
	console.log('<?php echo $_GET["path"]?>');
	populate('<?php echo $_GET["path"]?>','<?php echo $_GET["type"] ?>');
		$("#fullScreen").elevateZoom({scrollZoom:true, zoomType: "lens",easing:true, 
			//easingDuration:100, lensFadeIn:1000,lensFadeOut:1000,zoomWindowFadeIn:1000,zoomWindowFadeOut:1000,zoomTintFadeIn:1000,zoomTintFadeOut:1000, 
			easingType:"zoomdefault", 
			containLensZoom: true, gallery:'gallery', cursor: 'pointer', galleryActiveClass: "active"}); 


		// $("#fullScreen").elevateZoom({scrollZoom:true, zoomType: "inner", containLensZoom: true, gallery:'gallery', cursor: 'pointer', galleryActiveClass: "active",constrainType:"height"}); 


//pass the images to Fancybox
	$("#fullScreen").bind("click", function(e) {  
	  var ez =   $('#fullScreen').data('elevateZoom');	
		$.fancybox(ez.getGalleryList());
	  return false;
	});

	console.log("Entering Populate");
	console.log(fullScreen.src);

		var fullScreenImage = document.getElementById('fullScreen');
		var fullScreenImageWidth = fullScreenImage.clientWidth;
		var fullScreenImageHeight = fullScreenImage.clientHeight;
		// var jetScaleImage = document.getElementById("colorScale");
		// jetScaleImage.style.height=fullScreenImageHeight+"px";
		// jetScaleImage.style.width="auto";

	// if(fullScreen.src.includes(".radiometric.")||fullScreen.src.includes(".nonradiometric.")||fullScreen.src.includes(".hsv.")){

	// 	var fullScreenImageWidth = fullScreenImage.clientWidth;
	// 	var fullScreenImageHeight = fullScreenImage.clientHeight;
	// 	var jetScaleImage = document.getElementById("colorScale");
	// 	jetScaleImage.style.visibility="visible";
	// 	jetScaleImage.style.height=fullScreenImageHeight+"px";
	// 	jetScaleImage.style.width="auto";
		

	// }else{
		
	// 	var jetScaleImage = document.getElementById("colorScale");
	// 	jetScaleImage.style.visibility="hidden";
	// 	jetScaleImage.style.height=fullScreenImageHeight+"px";
	// 	jetScaleImage.style.width="auto";

	// }
	
	

	
	}
</script>
<style type="text/css">
body{
	/*align-content: center;*/
	height: 100vh;
	display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 100vw;
    align-items: center;
    

}
/*div {
  -webkit-transition: all 600ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition:         all 600ms cubic-bezier(0.445, 0.05, 0.55, 0.95); }*/


	 #gallery img{border:2px solid white;
	 	text-align: center;
	 	/*align-items: center;*/
	 	width: 10vw;}
	 #fullScreen {
text-align: center;
	 	margin: auto;
	 	height: 80vh;
	 }

	 

 
 /*Change the colour*/
 .active img{border:2px solid #333 !important;}
</style>
<body style="align-items: center;">
<!-- <img id="fullScreen" src="img/0D8A3214.JPG" data-zoom-image="img/0D8A3214.JPG"> -->
<!-- <div style="align-items: center;"> -->
<div style="display: inline-block;">	
	<img id="fullScreen" style="float: none;" />
	<!-- <img style="/*visibility: hidden*/;float: none;" id="colorScale" src="https://s3.amazonaws.com/visualizationsoftware/jet.JPG"/> -->
</div>
	
	<div id="gallery" >	
	
	<!-- </div> -->

</div>

</body>
</html>