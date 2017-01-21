<?php
	$str = file_get_contents('creds.json');
	$json = json_decode($str, true);
	$user=$POST['user'];
	$pass=crypt($POST['pass'],$json['salt']);
	echo $pass;
	if($pass, $json['pass']){
		
	}
?>