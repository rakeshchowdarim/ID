<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.20.min.js"></script>
<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src='js/jquery-1.8.3.min.js'></script>
<script src='js/jquery.elevatezoom.js'></script>
<script src='js/awsGetS3Data.js'></script>
<script src="js/genFilters.js"></script>
<script src="js/fullScreen.js"></script>
<script type="text/javascript">


window.onload=function () {
	console.log('<?php echo $_GET["path"]?>');
	populate('<?php echo $_GET["path"]?>','<?php echo $_GET["type"] ?>');
		$("#fullScreen").elevateZoom({scrollZoom:true, zoomType: "inner", containLensZoom: true, gallery:'gallery', cursor: 'pointer', galleryActiveClass: "active"}); 

//pass the images to Fancybox
	$("#fullScreen").bind("click", function(e) {  
	  var ez =   $('#fullScreen').data('elevateZoom');	
		$.fancybox(ez.getGalleryList());
	  return false;
	});
		// body...
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
    

}
	 #gallery img{border:2px solid white;
	 	text-align: center;
	 	width: 10vw;}
	 #fullScreen {
text-align: center;
	 	margin: auto;
	 	height: 80vh;
	 }

 
 /*Change the colour*/
 .active img{border:2px solid #333 !important;}
</style>
<body>
<!-- <img id="fullScreen" src="img/0D8A3214.JPG" data-zoom-image="img/0D8A3214.JPG"> -->


	<img id="fullScreen">
	<div id="gallery">


	
</div>

</body>
</html>