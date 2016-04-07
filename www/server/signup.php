<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, accept, content-type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


if (true) {
    $response = array(
        "user_id" => 20,
        "status" => "valid",
    );
    echo json_encode($response);
}else{
    $response = array(
        "status" => "invalid",
    );
    echo json_encode($response);
}

die();