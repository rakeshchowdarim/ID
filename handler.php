
<!-- 
<?php
	#session_start();
	#$_SESSION['ddd'] = $_POST["uname"];
	#$compName = $_SESSION['ddd']; 
	#echo "<h1>Company Username is: " .$compName. "</h1>";
	
?> -->


<?php
		session_start();


		$_SESSION['company'] = $_POST["cname"];
		$_SESSION['username'] = $_POST["uname"];
		$_SESSION['password'] = $_POST["psw"];



		if($_SESSION['company']=="Nationwide" && $_SESSION['username']=="nationwide" && $_SESSION['password'] =="infranationwide123"  ){
			// print 'alert(Logged in as' . $_SESSION['compName'].')';
			// echo ("<SCRIPT LANGUAGE='JavaScript'>
   //  window.alert('Successful. Logged in as:'" .$_SESSION['company'].");
   //  window.location.href='dates.php';
   //  </SCRIPT>");
			header('Location: ' . "dates.php");

		}elseif ($_SESSION['company']=="ClarkThompson" && $_SESSION['username']=="clarkthompson" && $_SESSION['password'] =="infraclarkthompson123"  ) {
		
			//print 'alert(Logged in as' . $_SESSION['compName'].')';
			header('Location: ' . "dates.php");

		}elseif ($_SESSION['company']=="WibholmFarm" && $_SESSION['username']=="wibholmfarm" && $_SESSION['password'] =="infrawibholmfarm123"  ) {
		
			//print 'alert(Logged in as' . $_SESSION['compName'].')';
			header('Location: ' . "dates.php");
		}elseif ($_SESSION['company']=="Sample" && $_SESSION['username']=="sample" && $_SESSION['password'] =="infrasample123"  ) {
		
			//print 'alert(Logged in as' . $_SESSION['compName'].')';
			header('Location: ' . "dates.php");
		}elseif ($_SESSION['company']=="DuPont Pioneer" && $_SESSION['username']=="dupont" && $_SESSION['password'] =="infrapioneer123"  ) {
			$_SESSION['company'] = 'DuPont-Pioneer';
			$_SESSION['username'] = 'duPont-Pioneer';
			//print 'alert(Logged in as' . $_SESSION['compName'].')';
			header('Location: ' . "dates.php");
		}else{

				//print 'alert(Enter Correct Details)';

			header('Location: ' . "index.php");

		}



?>