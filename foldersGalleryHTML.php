<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="cache-control" content="max-age=0">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="-1">
<meta http-equiv="pragma" content="no-cache">
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 
<?php

session_start();

?>
<link rel="stylesheet" href="style/grid.css">
<style>
.body {
	margin: 3px;
	overflow-x: hidden;
	/*width: 95vw;*/
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
	grid-gap: 5px;
	align-items: center;
}

.img3 {
	width: 100%;
}
.imgWrap {
	cursor: pointer;
	width: 98%;
}

`
</style>


</head>
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.20.min.js"></script>
<script src='js/awsGetS3Data.js'></script>
<!-- <script> window.onload = generateGallery('nationwide/minburn1/may152017/hdimages/');</script> -->

<body style="margin: 3px;">
	<div id="body" class="body imgCenter"></div>

</body>
<script type="text/javascript">


	window.onload=function() {
		// body...
		generateFolders("<?php echo lcfirst($_SESSION['company'])?>/");

	
	}
	
	//window.onload=test();
</script>
</html>