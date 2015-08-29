<?php
$phone = array("name" => "aa", "snippet" => "bb", "age" => "0");

$phones = array($phone);
$json = file_get_contents("php://input");

$json = json_decode($json);

if ($json -> uid == 'xx') {
	
	echo json_encode($phones);
}
?>