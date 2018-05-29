<?php
	header('Access-Control-Allow-Origin: *');
	//$username = $_GET['username'];
	//$password = $_GET['password'];
	//$rememberMe = $_GET['rememberMe'];
	$username = $_POST['username'];
	$password = $_POST['password'];	
	$rememberMe = $_POST['rememberMe'];
	echo "LOL apiHeader.blade.php\n\t";
	echo $username."\n\t";
	echo $password."\n\t";
	echo $rememberMe."\n";	
?>