<?php
session_start();
?>



<!DOCTYPE html>
<html>
<head>
<meta http-equiv="cache-control" content="max-age=0">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="-1">
<meta http-equiv="pragma" content="no-cache">
	<link rel="stylesheet" href="style/grid.css">
	<style>
.back{
	height: 8vh;
	background-color: #32CCBD;
}
.wrapper {
	margin: 3px;
	width: 90vw;
	display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
	grid-gap: 5px;

}
.img3 {
	width: 100%;
}
.imgWrap {
	width: 98%;
}

	</style>


</head>
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.20.min.js"></script>
<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
 
<script src="../amazon-cognito-auth-js/dist/amazon-cognito-auth.js"></script>

<script src="js/cognito.js"></script>
<script src='js/jquery-1.8.3.min.js'></script>
<script src='js/jquery.elevatezoom.js'></script>
<script src='js/awsGetS3Data.js'></script>
<script src='js/filters.js'></script>
<script type="text/javascript">
	function goBack() {
    window.history.back();
}
</script>
<body style="overflow: hidden;" class="imgCenter">
<img src="../img/back.png" class="img Left back button" onclick="goBack()" ">
<div id="imgHolder" class="wrapper imgCenter">
	
	
</div>

<script>
	window.onload=function(){
		login();
		populateImgs('<?php echo $_GET["path"];?>');
	}
</script>
</body>
</html>