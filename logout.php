<?php
session_start();

unset($_SESSION['company']);
//unset($_SESSION['dataPrefix']);

 #if there is no company variable in session
	if(ini_get("session.use_cookies")){ #clear cookies
		$params = session_get_cookie_params();
		setcookie(session_name(), '', time() - 42000,
			$params['path'], $params['domain'],
			$params['secure'], $params['httponly']);
	}
	session_destroy(); #clear all session data
	header('location: index.php'); # redirect to login page
	exit; #stop the remaining code from executing
?>