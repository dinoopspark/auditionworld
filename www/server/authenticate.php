<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, accept, content-type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if ($request->email == 'admin' && $request->password == 'admin123') {
    echo '{"id":"274","log_count":"1","user":"user", "status": "valid"}';
} else {
    echo '{"status": "invalid"}';
}

die();
