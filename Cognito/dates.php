<?php
	session_start();
	//$_SESSION['company']=$_POST["cname"];
?>

<!DOCTYPE html5>
<html style="width: 100%;height: 100%; padding:0!important; margin:0 !important;">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="refresh" content="1800;url=index.php" />
<meta http-equiv="cache-control" content="max-age=0">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="-1">
<meta http-equiv="pragma" content="no-cache">
<link rel="stylesheet" href="style/grid.css">
<link rel="icon" href="../img/a.png">
<title> <?php echo $_SESSION['company'] ?> Web Portal</title>

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 <script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.20.min.js"></script>
 <script src="../amazon-cognito-auth-js/dist/aws-cognito-sdk.js"></script>
<script src="../amazon-cognito-auth-js/dist/amazon-cognito-auth.js"></script>
<script src="js/cognito.js"></script>

<script type="text/javascript" src="js/awsGetS3Data.js"></script>
<!-- <script type="text/javascript" src="htmlJavascript/dates.js"></script> -->
<style type="text/css">

html { height: 100% ;
padding:0!important; 
    margin:0 !important;

    background:#FFF;}
body { min-height: 100% ;
padding:0!important; 
    margin:0 !important;

    background:#FFF;}
	.body {
	margin: 3px;
	width: 95vw;
	display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px,1fr));
	grid-gap: 10px;
}
.img3 {
	width: 100%;
}
.imgWrap {
	width: 98%;
}

</style>
</head>

<script>
function goBack() {
    window.history.back();
}
</script>

<body>

<div class="wrapper" style="align-items: stretch ;background-image: url(../img/v1.png);background-position: top;background-repeat: no-repeat;background-size: 15%;">
	<div class="box mainHead" style="vertical-align: middle;"> 
		<img style="margin-left: 7px;" src="https://s3.amazonaws.com/visualizationsoftware/<?php echo lcfirst($_SESSION['company']) ;?>/<?php echo lcfirst($_SESSION['company']) ;?>.logo.png" class="img Left home">
		<img style="margin-right: 10px;" src="../img/infradrone.png" class="img Right">
	</div>
	
	<div class="box navHead cyan">
		<img src="../img/logout.png" class="img Left back button" style="margin-left: 0px;" onclick="window.location.href='logout.php'">
		<img src="../img/home.png" class="img Right home button" style="margin-right: 0px;" onclick="window.location.href='dates.php'">
		<div class="name pageTitle" id="pageName" style="margin-top: 9px;"><?php echo ucwords($_SESSION['company']) ; ?></div>
	</div>
	
	<div class="box lhs vControl cyan"></div>
	
	<div class="box frameBox" >
		<iframe src="foldersGalleryHTML.php" scrolling="no" class="iFrame" id="body" align="middle"></iframe>
	</div>
	
	<div class="box rhs vControl cyan pageTitle">
		
	</div>
		<div class="cyan footerL"></div>
	<div class="box footer cyan"></div>
</div>

<script src="js/veiwer.js"></script>
<script>
	window.onload = function () {
		console.log('login');
		login();
		document.getElementById('body').contentWindow.auth=auth;
		document.getElementById('body').contentWindow.loadFolders();
  }
  </script>
</body>

</html>