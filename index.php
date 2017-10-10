<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<meta http-equiv="cache-control" content="max-age=0">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="-1">
<meta http-equiv="pragma" content="no-cache">


<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="style/style.css">
<link rel="icon" href="img/a.png">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
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
  body{
    background-color: #FFFFFF
  }
  html, body {
    height: 100%;
    margin: 0;
    padding: 0; 
}
#userInteraction {
    height: 100%;
    width: 100%;
}

button:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}


table{
  border: #DBDBDB;
}

</style>

</head>

<?php


  session_start();
    // include "handler.php";
    // $_SESSION['company'] = $_SESSION['username'] = $_SESSION['password'] = $_SESSION['cnameErr'] = $_SESSION['unameErr'] = $_SESSION['pswErr'] = "";
 
?>
  

<body> 
<div align="center">
  <table height="100%" align="center" width="100%" border="0px">

  <tr>

    <td width="100%">
      <div class="logoimgcontainer">
    <a href="https://www.infradronellc.com" target="_blank"><img src="img/infradrone.png" alt="Avatar" class="avatar" align="center" style="display:block; margin:0 auto;" width="50%"></a>
  </div>
    </td>
  </tr>
  </table>
  <div >
    <table height="100%" align ="center" width="50%" border="0px" id="userInteraction">
  <div>
<tr style="height: 100%;" colspan="3">
      <td width="20%" height="36px"></td>
        <td width="60%" align = "center" id="loginFormSpace" style="vertical-align: middle;">

<div style="visibility: hidden;" id="logged-in">
    <p><strong>Logged in as:</strong>
    </p>
    <div id="logged-in-list"></div>
  </div>

<form name="loginForm" onSubmit="return validate()" action="handler.php" id="loginForm" method="post" style="vertical-align: middle">
  <div class="container" >
    <table width = "100%" > 
    <tr align = "center" width="100%"> <td align ="left"> <label style="font-size: 20px" padding-left:5em><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspCompany Name</b></label> </td>  </tr>
    <tr width ="100%" align ="center">
    <td width = "100%" align = "center"> 
        <input type="text" width="100%" placeholder="Enter Company Name" style="font-size: 17px" name="cname" required id="companyname">
        <!-- <span class="error"><?php 
        //echo $_SESSION['cnameErr'];?></span> -->
    </td>        
    </tr>
    <tr align = "center"> <td  align ="left"><label style="font-size: 20px"><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspUsername</b></label> </td></tr>
    <tr width ="100%" align ="center">
     <td width = "100%" align = "center">
      <input type="text" width="100%" style="font-size: 17px" placeholder="Enter Username" name="uname" required id="username"></td>
      <!-- <span class="error"><?php 
      //echo $_SESSION['unameErr'];?></span> -->
    </tr>
    <tr align = "center"> <td align ="left"><label style="font-size: 20px"><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPassword</b></label> </td></tr>
    <tr width = "100%">
    <td width ="100%" align ="center">
    <input type="password" style="font-size: 17px" placeholder="Enter Password" name="psw" required id="password"></td>
    <!-- <span class="error"><?php 
    //echo $_SESSION['pswErr'];?></span> -->

    </tr>
    <tr align = "center"> <td width = "100%"> 
    <!-- <button type="submit"  onclick="return validate()" class ="button" id="loginSubmit"><font color="#FFFFFF"> Login</font></button> -->
    <button type="submit" class ="button" id="loginSubmit" name="Submit" action="#"><font color="#FFFFFF"> Login</font></button>
    <button type="button" class="button"><font color="#FFFFFF">Cancel</font></button> </td>
    </tr>
    <tr align = "center"> <td width = "50%" align ="center">
    <input type="checkbox" checked="checked" style="font-size: 17px"> <a style="font-size: 17px"><b>Remember Me</b></a> &nbsp
    <span class="psw"><a href="#" onclick="alert('Please Contact contact@infradronellc.com for assistance!')" style="font-size: 17px"><b>Forgot password?</b></a></span>
    </tr> </td>
     </table>
    <br>
    <!--
    <a href="C:\Users\Rakesh Chowdary\Desktop\InfraDrone" >Go to InfraDrone Folder</a>
    -->
  </div>  
    
</form>
        </td>
        <td width="20%"></td>
  </tr>


  </div>
  </table>
  </div>
  

<!--
<table width=100% border="1px">
  <tr width=100%>
  <td width=50%>

   <img src="nw.png" alt="nationwide" class="avatar" align="left" style="width: 50%;">
   </td>
   <td width=25%>
    <img src="infradrone.png" alt="nationwide" class="avatar" align="right" style="width: 72%;">
    </td>
    <td width=25%>
    <img src="infradrone.png" alt="nationwide" class="avatar" align="right" style="width: 72%;">
    </td>
  </tr>
</table>
-->
</body>
</html>