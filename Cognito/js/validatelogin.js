 function validate()
      {
      	var companyname = document.getElementById("companyname").value;
      	var username = document.getElementById("username").value;
      	var password = document.getElementById("password").value;

      	if( document.loginForm.cname.value == "" )
         {
            alert( "Please Enter a Company Name!" );
            document.loginForm.cname.focus() ;
            //return false;
         }
      	
         if( document.loginForm.uname.value == "" )
         {
            alert( "Please enter a Username!" );
            document.loginForm.uname.focus() ;
           // return false;
         }
         
         if( document.loginForm.psw.value == "" )
         {
            alert( "Please Enter a Password!" );
            document.loginForm.psw.focus() ;
            //return false;
         }

         


         if( companyname=="Nationwide" && username == "nationwide" && password == "infranationwide123"){
		 //alert("Login Successful. You logged in as " + companyname + ". Click 'OK' to proceed.");
     $('#loginForm').submit();
     document.getElementById("loginForm");
		 // window.location.replace ("dates.php");
		 //return true;
		 }else if( companyname=="ClarkThompson" && username == "clarkthompson" && password == "infraclarkthompson123"){
		 //alert("Login Successful. You logged in as " + companyname + ". Click 'OK' to proceed.");
		 window.location.replace ("dates.php");
		 //return true;
		 }else if( companyname=="WibholmFarm" && username == "wibholmfarm" && password == "infrawibholmfarm123"){
       //alert("Login Successful. You logged in as " + companyname + ". Click 'OK' to proceed.");
       window.location.replace ("dates.php");
       //return true;
       }else if( companyname=="Sample" && username == "sample" && password == "infrasample123"){
       //alert("Login Successful. You logged in as " + companyname + ". Click 'OK' to proceed.");
       window.location.replace ("dates.php");
       //return true;
       }else if( companyname=="DuPont Pioneer" && username == "dupont" && password == "infrapioneer123"){
       //alert("Login Successful. You logged in as " + companyname + ". Click 'OK' to proceed.");
       window.location.replace ("dates.php");
       //return true;
       }else{
		  //alert("Login failed - Please enter correct Username and Password");
      // console.log(companyname=="Nationwide" && username == "nationwide" && password == "infranationwide123");
      // console.log(companyname);
      // console.log(username);
      // console.log(password);
      //alert("Login failed - Please enter correct Username and Password");
      $('#field-error').show();
      //window.location.replace("index.php");

		 }
         return( true );
      }