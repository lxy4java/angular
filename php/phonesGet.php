<?php

$phone = array("name" => "aa", "snippet" => "bb", "age" => "0");
$phones=array($phone);
$uid=$_GET['uid'];
if($uid=='xx'){
	echo json_encode($phones);
}

?>