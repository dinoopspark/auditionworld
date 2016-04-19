<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, accept, content-type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");


if (!true) {

    $return = array(
        "status" => "valid"
    );
    
} else {
    $return = array(
        "status" => "invalid",
        "message" => "Email already exist",
    );
}
echo json_encode($return);
die();
