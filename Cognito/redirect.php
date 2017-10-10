<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<meta http-equiv="cache-control" content="max-age=0">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="-1">
<meta http-equiv="pragma" content="no-cache">


<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" href="https://s3.amazonaws.com/visualizationsoftware/a.png">
<!-- <script type="text/javascript" src="js/validatelogin.js"></script>
<script type="text/javascript" src="htmlJavascript/test.js"></script> -->
<style>

.error{color: #FF0000;}

button {

    font-size: 20px;
    border-radius: 4px;
    padding: 10px 24px;
    background-color: #
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
    background-color: #32CCBD

}


html, body {
    height: 100%;
    margin: 0;
    overflow: hidden;
}

.button:hover {background-color: #FDC300}

div:nth-of-type(1) {
    background: #FFFFFF;
    height: 10%;
}

div:nth-of-type(2) {
    background: #FFFFFF;
    height: 82%;
}

div:nth-of-type(3) {
    background: #32CCBD;
    height: 9%;
}

p {
  
    font-family: Verdana, Helvetica, sans-serif;
}

</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 <script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.20.min.js"></script>
 <script src="../amazon-cognito-auth-js/dist/aws-cognito-sdk.js"></script>
<script src="../amazon-cognito-auth-js/dist/amazon-cognito-auth.js"></script>
<script src="js/cognito.js"></script>

</head>
  

<body > 
<div style="vertical-align: middle;">
  
</div>
<div>
  <a href="https://www.infradronellc.com" target="_blank"><img src="https://s3.amazonaws.com/visualizationsoftware/infradrone.png" alt="InfraDrone" class="avatar" align="center" style="display:block; margin:0 auto;" ></a>
  <div align="center" style="margin-top: 6vh;" >
    <!--button class="button" style="vertical-align: middle" type="submit" class ="button" id="loginSubmit" name="Submit" action="#"><font color="#FFFFFF"> Login</font></button-->
	
	<span>Please wait for redirect:</span>
	<span>if you aren't redirected after a few seconds click <a href='https://infradronewebvisualizer.ddns.net/Cognito/dates.php'>here</a></span> 
	
  </div>
</div>
<div align="center" style="margin: auto; vertical-align: middle;display: table;width: 100%">
  <footer>  
  <!-- <p id="dateDisplay"></p> -->
  <p>Copyright &copy 2017<b> InfraDrone LLC. All Rights Reserved.</b></p>
</footer>
</div>

<script>
	window.onload = function(){
		loginLogic();
		var comp=client();
		$.post('handler.php', {'client':comp}, function(data, status){top.location='dates.php';});
	}
</script>

</body>
</html>