<?php
	session_start();
?>

<!DOCTYPE html5>
<html style="width: 100%;height: 100%;">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1"  >
<link rel="stylesheet" href="style/grid.css">
<link rel="icon" href="img/a.png">
<title> <?php echo $_SESSION['company'] ?> Web Portal</title>
<style type="text/css">
	.imgWrap {
	cursor: pointer;
	width: 98%;
}
body{
	overflow-x:hidden;
	overflow-y:auto;
}

</style>

</head>

<body>

<div class="wrapper">
	<div class="box mainHead" style="vertical-align: middle;">
		<img id="compLogo" style="margin-left: 7px;" src="https://s3.amazonaws.com/visualizationsoftware/<?php echo lcfirst($_SESSION['company']) ;?>/<?php echo lcfirst($_SESSION['company']) ;?>.logo.png" class="img Left home" >
		<img style="margin-right: 10px;" src="img/infradrone.png" class="Right img" >
		<!-- <div class="Right img" style="width: 25vw;">
			<img src="htmlImages/infradrone.png" class="img2">
		</div> -->
	</div>
	
	<div class="box navHead cyan">
		<img src="img/logout.png" class="img Left back button" style="margin-left: 10px;" onclick="window.location.href='logout.php'">
		<img src="img/home.png" class="img Right home button" style="margin-right: 10px;" onclick="window.location.href='dates.php'">
		<div class="name pageTitle" id="pageName" style="margin-top: 9px;"></div>
	</div>
	
	<div class="box lhs vControl cyan">
		<img id="canvas"  src="img/d3.png" class="img2  button l" onclick="makeFocus(this.id, 'canvas')">
		<img id="images" src="img/image.png" class="img2 button focused l" onclick="makeFocus(this.id, 'ImageBlock')">
		<img id="report" src="img/report.png" class="img2  button l" onclick="makeFocus(this.id, 'reportWin')">
		
	</div>
	
	<div id="body" class="box frameBox">
		<iframe src="ImageBlock.php?structure=structure1&name=hd"  class="iFrame" id="frame" align="middle"></iframe>

	</div>
	
	<div class="box rhs vControl cyan" name="hd" id="rhs" >
		<img id="hd" src = "img/hd.png" class="img2 button r focused" onclick="makeFocus(this.id, 'Images')">
		<img id="thermal" src="img/th.png" class="img2 button r" onclick="makeFocus(this.id, 'Images')">
		<img id="li" src="img/li.png" class="img2 button r" onclick="makeFocus(this.id, 'Images')">

		<!-- <img id="hsv" src="htmlImages/hd.png" class="img2  fi" onclick="radioFilter(this.id)">
		<img id="sobel" src="htmlImages/th.png" class="img2  fi" onclick="radioFilter(this.id)"> -->

		

		
	</div>
	
	 <div name="structure1" id="footer"  class="box footer cyan pageTitle" style="font-weight: 700;">
		
	</div>
</div>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 <script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.20.min.js"></script>
 
<script src="js/veiwer.js"></script>
<script src="js/awsGetS3Data.js"></script>
<script src="js/getStruc.js"></script>
<script src="js/displayUtils.js"></script>
<!-- <script src="htmlJavascript/genFilters.js"></script> -->
<script type="text/javascript">
	window.onload=function(){
	generateStructures('<?php echo $_SESSION["dataPrefix"] ;?>');
	formatName('<?php echo $_SESSION["dataPrefix"] ;?>');
	}
	$('#li').hide();

</script>


</body>
</html>