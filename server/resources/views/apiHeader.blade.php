<?php
	header('Access-Control-Allow-Origin: *');
	//$username = $_GET['username'];
	//$password = $_GET['password'];
	//$rememberMe = $_GET['rememberMe'];
	$username = $_POST['username'];
	$password = $_POST['password'];	
	$rememberMe = $_POST['rememberMe']
	echo "LOL apiHeader.blade.php<br>";
	echo $username."<br>";
	echo $password."<br>";
	echo $rememberMe."<br>";
	
?>