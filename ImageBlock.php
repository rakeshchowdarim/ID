<?php
session_start();
?>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="cache-control" content="max-age=0">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="-1">
<meta http-equiv="pragma" content="no-cache">
<link rel="stylesheet" href="style/grid.css">
<style>
body{
	overflow-x:hidden;
		overflow-y:auto;
}
.body {
	margin: 3px;
	/*width: 95vw;*/
	overflow-x: hidden;
	display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
	grid-gap: 5px;

	/*display: flex;*/
align-items: center;
	/*width: 95vw;*/
}
.img3 {
	width: 100%;
}
.imgWrap {
	width: 98%;
}
.button {
	cursor: pointer;
}
</style>

	

</head>
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.20.min.js"></script>
<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src='js/jquery-1.8.3.min.js'></script>
<script src='js/jquery.elevatezoom.js'></script>
<script src="js/veiwer.js"></script>
<script src='js/awsGetS3Data.js'></script>
<script src="js/genFilters.js"></script>


<script>
window.onload = function(){
	// backButtonDisplay();
	generateGallery('<?php echo $_SESSION["dataPrefix"].$_GET["structure"]."/".$_GET["name"]."images/" ;?>');

	
}
//window.onload=test();
</script>

<body style="margin: 0px" class="imgCenter">
	<div id="body" class="body imgCenter">
		
	</div>
<script>

//window.onload=test();
</script>
</body>
</html>