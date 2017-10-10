<?php
	session_start();
	
	$data=$_REQUEST["dataPrefix"];
	echo $data;
	$_SESSION["dataPrefix"] = $data;
	echo $_SESSION["dataPrefix"] ;
	
	?>

