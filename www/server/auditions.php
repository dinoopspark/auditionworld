<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, accept, content-type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$page = $_GET['page'];

if ($page == 1) {
    $post = array(
        'status' => 'valid',
        'posts' => array(
            array(
                'title' => 'Ethical 01',
                'thumb' => 'http://localhost/auditionworld/www/server/img/telerik-1.jpg',
                'excerpt' => 'Next level ethical pour-over, PBR&B knausgaard salvia typewriter trust fund single-origin coffee.',
            ),
            array(
                'title' => 'Crucifixs 02',
                'thumb' => 'http://localhost/auditionworld/www/server/img/telerik-2.jpg',
                'excerpt' => 'Trust fund sriracha crucifix, YOLO chia tilde heirloom XOXO slow-carb pabst actually fanny pack venmo swag pinterest.',
            ),
            array(
                'title' => 'Ethical 03',
                'thumb' => 'http://localhost/auditionworld/www/server/img/telerik-1.jpg',
                'excerpt' => 'Next level ethical pour-over, PBR&B knausgaard salvia typewriter trust fund single-origin coffee.',
            ),
            array(
                'title' => 'Ethical 04',
                'thumb' => 'http://localhost/auditionworld/www/server/img/telerik-1.jpg',
                'excerpt' => 'Next level ethical pour-over, PBR&B knausgaard salvia typewriter trust fund single-origin coffee.',
            ),
            array(
                'title' => 'Crucifixs 05',
                'thumb' => 'http://localhost/auditionworld/www/server/img/telerik-2.jpg',
                'excerpt' => 'Trust fund sriracha crucifix, YOLO chia tilde heirloom XOXO slow-carb pabst actually fanny pack venmo swag pinterest.',
            ),
            array(
                'title' => 'Crucifixs 06',
                'thumb' => 'http://localhost/auditionworld/www/server/img/telerik-2.jpg',
                'excerpt' => 'Trust fund sriracha crucifix, YOLO chia tilde heirloom XOXO slow-carb pabst actually fanny pack venmo swag pinterest.',
            ),
            array(
                'title' => 'Crucifixs 07',
                'thumb' => 'http://localhost/auditionworld/www/server/img/telerik-2.jpg',
                'excerpt' => 'Trust fund sriracha crucifix, YOLO chia tilde heirloom XOXO slow-carb pabst actually fanny pack venmo swag pinterest.',
            ),
            array(
                'title' => 'Crucifixs 08',
                'thumb' => 'http://localhost/auditionworld/www/server/img/telerik-2.jpg',
                'excerpt' => 'Trust fund sriracha crucifix, YOLO chia tilde heirloom XOXO slow-carb pabst actually fanny pack venmo swag pinterest.',
            ),
        ),
    );
} elseif ($page == 2) {
    $post = array(
        'status' => 'valid',
        'posts' => array(
            array(
                'title' => 'Ethical 09',
                'thumb' => 'http://localhost/auditionworld/www/server/img/telerik-3.jpg',
                'excerpt' => 'Next level ethical pour-over, PBR&B knausgaard salvia typewriter trust fund single-origin coffee.',
            ),
            array(
                'title' => 'Crucifixs 10',
                'thumb' => 'http://localhost/auditionworld/www/server/img/telerik-4.jpg',
                'excerpt' => 'Trust fund sriracha crucifix, YOLO chia tilde heirloom XOXO slow-carb pabst actually fanny pack venmo swag pinterest.',
            ),
        ),
    );
} else {
    $post = array(
        'status' => 'invalid',
    );
}


echo json_encode($post);
die();
