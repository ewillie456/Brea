<?php
	if($POST['user']==null || $POST['pass']==null){
		header("Location: index.html");
		exit();
	}
	$str = file_get_contents('creds.json');
	$json = json_decode($str, true);
	$user=$POST['user'];
	$pass=crypt($POST['pass'],$json['salt']);
	echo $pass;
	if($pass!=$json['pass']){
		header("Location: index.html");
		exit();
	}
	else{
		//Random number!!!
		$POST['321988774101']=true;
		header("Location: works.php");
	}
?>
W31nTeR